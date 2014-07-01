/**
 * Author : Bill Gooch
 *
 *  TRUE FX price feed ...
 */
module.exports = function (io,trueFXConfig) {
    'use strict';
    // ======== Dependencies
    var request = require("request");
    var cheerio = require('cheerio');

    // ======== TRUE FX configuration
    var curPairs       = trueFXConfig.curPairs;
    var trueFXusername = trueFXConfig.userName;
    var trueFXpassword = trueFXConfig.password;
    var trueFXID       = trueFXConfig.trueFXID;

    // ======== TRUE FX static
    var fxGroup = 'fxrates';
    var format  = 'html';
    var priceFeedHost = 'http://webrates.truefx.com/rates/connect.html?';

    // ========
    var fxServiceYetToBeInitiated = true;
    var userNotAuthenticated = true;
    var currencyPairs = [];


    //================================================
    //            SOCKET SETUP
    //================================================

    io.on('connection', function (socket) {

          if(fxServiceYetToBeInitiated){

                setInterval(function () {
                    requestFXprices(socket);
                }, 1000)

          }


        socket.on('disconnect', function () {
            fxServiceYetToBeInitiated = true;
            socket.emit('disconnected');
        });

    });

    //================================================
    //            PRICING API
    //================================================

    function requestFXprices(socket){

        if(userNotAuthenticated)authenticateSession();

        request(trueFXconfigPath(), function(error, response, body) {

            if (!error && response.statusCode == 200) {

                var fxPriceData = updatePrices(body);
                fxServiceYetToBeInitiated = false;

                socket.emit('fxPriceUpdate', {
                    payload: fxPriceData
                });
            }
            else if(error){

                fxServiceYetToBeInitiated = true;
                console.error ("There has been en ERROR when requesting prices from  : " + trueFXconfigPath());
                console.error ("ERROR status code : " + error);

            }
        })

    }

    function updatePrices(body){

        var $;
        $ = cheerio.load(body);
        var priceUpdates = $('table').find('tr').length;

        if(priceUpdates === 0 )return  currencyPairs;

        //SET - UP : Initiate currency pairs
        if(currencyPairs.length === 0){

            currencyPairs = $('table tr').map(function() {

                var $row = $(this);
                var symbolVO = createSymbolVO($row);

                return symbolVO;

            }).get();

            return currencyPairs;

        }
        // ONLY UPDATE CERTAIN PAIRS
        else{

            var updatedPairs = [];

            updatedPairs = $('table tr').map(function() {

                var $row = $(this);
                var symbolVO = createSymbolVO($row);

                return symbolVO;

            }).get();

            //UPDATE ALL PAIRS
            if(updatedPairs.length === currencyPairs.length ) {

                currencyPairs = updatedPairs;

                return currencyPairs;
            }

            var i,b;

            for (i=0; i< updatedPairs.length ; i++){

                var symbolToUpdate =  updatedPairs[i].symbol;
                var symbol =  updatedPairs[i];

                for(b=0; b < currencyPairs.length ; b++){

                    if(symbolToUpdate === currencyPairs[b].symbol){

                        currencyPairs[b] = symbol;
                        break;

                    }
                }
            }

            return currencyPairs;
        }
    }


    //================================================
    //            HELPER METHODS
    //================================================

    function createSymbolVO(row){

        return {
            symbol: row.find(':nth-child(1)').text(),
            timeStamp: row.find(':nth-child(2)').text(),
            bidBig: row.find(':nth-child(3)').text(),
            bidPoint: row.find(':nth-child(4)').text(),
            offerBig: row.find(':nth-child(5)').text(),
            offerPoint: row.find(':nth-child(6)').text(),
            high: row.find(':nth-child(7)').text(),
            low: row.find(':nth-child(8)').text(),
            mid: row.find(':nth-child(9)').text()
        };

    }

    function authenticateSession(){

        var options = {
            host: priceFeedHost,
            path: trueFXconfigPath()
        };

    }

    function trueFXconfigPath(){

        var trueFXPath = priceFeedHost+'u='+trueFXusername+'&p='+trueFXpassword+'&q='+fxGroup+"&id="+trueFXID+"&f="+format+"&c="+curPairs;

        return trueFXPath;
    }

};

