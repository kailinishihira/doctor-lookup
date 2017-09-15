# _Doctor Lookup_

#### _A website to find a doctor in Seattle, 09.15.17_

#### By _**Kaili Nishihira**_

## Description

_A website where a user may enter a medical issue into a form and receive a list of doctors in Seattle in a 20 mile radius._

|| Behavior  | Input  | Output  |
|---|---|---|---|
|| User may enter a medical issue to receive a list of doctors in the Seattle area that fit the search query. | Allergy | A list of doctors (20 max) including the following information: <br><li>Doctor's name</li><li>Address (address is the first listed practice if they have more than one practice)</li><li>Phone number (phone number is the first listed phone number if they have more than one phone number)</li><li>Website</li><li>Accepting new patients</li>  |
|| User may enter a name to receive a list of doctors in the Seattle area that fit the search query. | Smith | A list of doctors (20 max) including the following information: <br><li>Doctor's name</li><li>Address (address is the first listed practice if they have more than one practice)</li><li>Phone number (phone number is the first listed phone number if they have more than one phone number)</li><li>Website</li><li>Accepting new patients</li> |
|| If the API call results in an error, the user will receive notification on what the error is. | ... | ... |
|| If the user's request does not meet the search criteria, a notification will be received. | Search by doctor's name: Nishihira | There are no doctors that meet your criteria. |




## Setup/Installation Requirements

* _Install [Node.js](https://nodejs.org/en/download/)_
* _Clone repository_
* `$ npm install`
* `$ bower install`
* `$ gulp build`
* _Open in your browser_
* _Create an account with [BetterDoctor](https://developer.betterdoctor.com/) to get your free API Key_

## Technologies Used
* _JavaScript_
* _Node.js_
* _[Bootstrap](http://getbootstrap.com/getting-started/)_


### License

Copyright (c) 2017 **_Kaili Nishihira_**

*Licensed under the [MIT License](https://opensource.org/licenses/MIT)*
