# Support System

With Support System you can allow users to create tickets and contact ur Support Team.
The data is saved in a MongoDB database. The project is written in Node.JS & EJS. 
It's based on a Express JS application which gives us the opportunity to send data to the server.

To be able to create tickets and contact the Support Team, users must create an account. This required some personal data and a password wich. 
The password will be hashed using a salt. 

When the program has been launched for the first time. It will automatically create an admin account. You must have a MongoDB Database URI to make this work.

# Installation

Clone the repository and install the packages.
`npm i install`
