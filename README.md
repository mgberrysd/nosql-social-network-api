# nosql-social-network-api

## Description

This project aimed to create an e-commerce backend that combined a sql database with a functional server. The initial database needs to be created in SQL Workbench but the can be seeded from the command line with npm run seed and then run with node server.js. Once the server is running the user can query the various api endpoints with get requests for products, tags, and categories to recieve detailed information about each. Users can also perform get requests on individual products, tags, and categories based on their internal IDs. Post requests to create new entries, put requests to update existing individual entries, and delete requests to delete individual entries are all availible to allow users to interact with the database.

This project continued to highlight the use of node.js to write server code using JS. My sql was again used to connect a server to a database and Sequelize was used as an ORM to write database queries and create models in JavaScript. dotenv was used to allow enviromental variables to be used in the code, meaning that potentially sensitive information no longer needed to be hard coded into the files. Ultimately this project showcased combined backend code with a database and server working together to provide dynamically updated information.

## Usage

As this project was not deployed, the repo of the project can be found at https://github.com/mgberrysd/e-commerce-back-end

When runnning the seed command and starting the server from the command line the user should see the following:

![E-commerce backend server when run from the command line](assets/e_commerce_ex.png)

A video of the application being run can be found at https://drive.google.com/file/d/12BjGyrVxWgmX81He6RlhVikXp9YR96kc/view

## Credits

The JS backend for the E-commerce backend was created by Michael Berry.

The project used the  the node mysql2 package for connecting to a sql database, Sequelize for writing database queries in JS, dotenv to store enviomental variables, and Insomnia for route testing.