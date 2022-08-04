# pickDate
This webApp allows users to pickDate  with you : we used ReactJS as a frontend technology , ExpressJS for Backend and SQL Database 
# Overview
This project is divided into two parts : Frontend where i used ReactJS as a Framework and Backend where i used ExpressJS to create my APIs where I can interact with the Database (SQL Database) . You can import the SQL file on your Apache Server to get all the database infrastructure.
There's Two repositories (frontend , ExpressJS) in the master directory. 
For any information please feel free to contact me  
# Installation
there are two repositories in my Github project ( main and master ) . 

First you need to create a database by importing the SQL file in the main repository (Github) . You can use PHPmyadmin with xampp . The username and password to connect with the database is already defined as root and password  empty . 
*Please create a main folder to create the front end and the backend project in it 
Setting up Express.js for REST API

To set up a Node.js app with an Express.js server, we’ll first create a directory for our project to reside in you can create a new folder using :
mkdir expressJS && cd expressJS
to create a package.json file : npm init -y
and finally to install ExpressJS : npm i express 
* you should have NodeJS installed 
Please configure the expressJS in port 3020 to avoid problems when we start React project 
After That you can start creating the routes and services also the Config and Helper file to assure the connection with database ( you can see the project structure below ) and after that you can copy and paste the content of each file

Setting up REACTJs 
First you need to run 
 git clone https://github.com/nexton97/pickDate.git
After that you need to create our own package-lock.json file and node_modules folder. We don’t need to manually create these, as the following commands we run will create them.
cd frontend 
npm install
npm start to start the project 
