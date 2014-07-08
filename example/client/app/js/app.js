/**
 * Author : Bill Gooch
 *
 *
 */
angular.module("fxPriceFeed",['btford.socket-io']);

(function() {

    'use strict';

    function AppCtrl ($scope,fxPriceService){

        $scope.$on('socket:fxPriceUpdate', function(event, data) {

            $scope.rates  =  data.payload;

        });

    }

    function fxPriceService(socketFactory){

        var socket = socketFactory();
        socket.forward(['fxPriceUpdate','disconnected']);

        return socket;

    }

    angular
        .module('fxPriceFeed')
        .controller('AppCtrl', AppCtrl)
        .service('fxPriceService', fxPriceService);
})()



