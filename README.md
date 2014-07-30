# TrueFX price service


TrueFX price service hooks into the FREE fx price service offered by [TrueFX](//truefx.com) and emits price updates on your selected currency pair via web sockets.


## Table of Contents

1. [Implementation](#implementation)
1. [API](#api)
1. [Services](#services)
1. [Contributing](#contributing)
1. [License](#license)


## Implementation

### Dependencys

Assumptions : You have node and npm installed

1. You will need to register at http://www.truefx.com/ to get a username and password

### Installation

2. install the node package from npm via the following command.

```javascript
npm install gch-truefx-priceservice
```

### Usage

1. Create trueFXConfig constructor object

//:::::::: Create fx price server
var trueFXConfig = {
    userName:'userName',
    password:'Password',
    curPairs : 'EUR/CAD,GBP/USD,EUR/JPY,GBP/JPY,GBP/CAD,EUR/AUD',
    trueFXID : 'sessionID'
};

2. 



### API

- You will need 

```javascript
function SomeService () {
    this.someMethod = function () {

    };
}
```

**[Back to top](#table-of-contents)**



Installation
================

1. Make sure you have node installed.
2. Use the command line to CD into the root directory fx-price-service 
3. run 
 
fx-price-service > npm install

This will install all of the node dependencys

4. run

fx-price-service > bower install

This will install all of the client dependencys

5. CD in to the server  directory

fx-price-service\server>

6. Run

fx-price-service\server>node server.js

Thats it all up and running now just open localhost:8020 to view the price feed




## Services

- Services are classes and are instantiated with the `new` keyword, use `this` for public methods and variables

```javascript
function SomeService () {
    this.someMethod = function () {

    };
}
```

**[Back to top](#table-of-contents)**

## Contributing

Open an issue first to discuss potential changes/additions.

## License

#### (The MIT License)

Copyright (c) 2014 Todd Motto

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











