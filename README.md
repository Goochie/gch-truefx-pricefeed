# TrueFX price service


TrueFX price service hooks into the FREE fx price service offered by [TrueFX](//truefx.com).


## Table of Contents

1. [Set Up](#Set-Up)
1. [API](#api)
1. [Services](#services)




## Set up


To run this example 

1. You will need to register at http://www.truefx.com/ to get a username and password

2. Once registered you will have to use a REST / HTTP tool such as postman to make your initial request to set up a session ID - please see truefx api docs for more info 

http://www.truefx.com/dev/data/TrueFX_MarketDataWebAPI_DeveloperGuide.pdf


(I plan to move this into the fx-price-service module on next release)


## API

- Services are classes and are instantiated with the `new` keyword, use `this` for public methods and variables

```javascript
function SomeService () {
    this.someMethod = function () {

    };
}
```

**[Back to top](#table-of-contents)**




At this point you will have 

Password
Username
sessionID

Which will be used to create the FX price feed constructor object

//:::::::: Create fx price server
var trueFXConfig = {
    userName:'userName',
    password:'Password',
    curPairs : 'EUR/CAD,GBP/USD,EUR/JPY,GBP/JPY,GBP/CAD,EUR/AUD',
    trueFXID : 'sessionID'
};

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











