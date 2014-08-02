# TrueFX price service


TrueFX price service hooks into the FREE fx price service offered by [TrueFX](//truefx.com) and emits price updates on your selected currency pair via web sockets.

For more information on the implementation, please read the following article [Full stack part 1: Creating an FX price feed](https://medium.com/html5-ria-full-stack/creating-an-fx-price-feed-370e0f623453) 


## Table of Contents

1. [Implementation](#implementation)
1. [Demo](#demo)
1. [Contributing](#contributing)
1. [License](#license)


## Implementation

### Dependencys

Assumptions : You have node and npm installed

1. You will need to register at http://www.truefx.com/ to get a username and password
2. socket.io

### Installation

2. install the node package from npm via the following command.

```javascript
npm install gch-truefx-priceservice
```

### Usage

1. Create trueFXConfig constructor object using your username and password from truefx and a delimeted list of currency pairs.

```javascript
var trueFXConfig = {
    userName:'trueFXuserName',
    password:'trueFXPassword',
    curPairs : 'EUR/CAD,GBP/USD,EUR/JPY,GBP/JPY,GBP/CAD,EUR/AUD'
};
```

2. Set up your socket server with your http server

```javascript
var io  = require('socket.io');
io = io.listen(server);
```

3. Call the fxprice-srv constructor

```javascript
require('./sockets/fxprice-srv')(io,trueFXConfig);
```

### API

The following event is emmited from the fx price service

```javascript
socket.emit('fxPriceUpdate', {
        payload: fxPriceData
});
```
A client needs to be capturing the `fxPriceUpdate'.

In the demo example angular and the socket.io library is used to handle the event.

```javascript
        $scope.$on('socket:fxPriceUpdate', function(event, data) {

            $scope.rates  =  data.payload;

        });
```

### Payload

The returned object in the payload is an array of symbolVO's ( value objects ). Each indivdual VO has the follwoing structure.

```javascript
        {
            symbol: '',
            timeStamp: '',
            bidBig: '',
            bidPoint: '',
            offerBig: '',
            offerPoint: '',
            high: '',
            low: '',
            mid: '',
            bidBullBear: '' ,
            offerBullBear: ''
        };
```

**[Back to top](#table-of-contents)**

## Demo

Please see the READme in the Demo folder for instruction on how to get the demo up and running.

## Contributing

Open an issue first to discuss potential changes/additions.

## License

#### (The MIT License)

Copyright (c) 2014 Bill Gooch

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

        The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.











