# FaceRecognition Website/App

## Description

A web application that accepts a link and by using Clarifai ML API, displays a small box around faces. Also supports register feature and signin. The app is still at a starting stage.

## Warning

Due to complications of bcrypt package, I was unable to upload this project on Hiroku, and thus use database that is needed for this app to function. Instructions on how to get a PostgreSQL database and on how to run the website are given below. Thank you for your understanding

## Pre-requisities

### 1. Node JS
### 2. NPM


## Instructions

### 1. Clone this repository on your PC, by running
```
git clone https://github.com/JimBratsos/FaceRecognition
```

### 2. After downloading/cloning, simply run:
```
npm start
```

### 3. Clone the other repository available on my GitHub in order for this to work and also run it with these commands:
```
git clone https://github.com/JimBratsos/facerecognitionserver
npm start
```
### 4. Download PostgreSQL and setup your account.
https://www.postgresql.org/download/

#### 4i. If you have windows , you need to add two new env variables in order for this to work on CMD. Simply you search for "Edit the System's Enviromental Variables", go to Enviromental Variables and then add two new paths:
```
C:\Program Files\PostgreSQL\11\lib
C:\Program Files\PostgreSQL\11\bin
```

### 5. Create two tables; one called login and the other called users with the following commands; 
```
CREATE TABLE login(
id serial PRIMARY KEY,
hash varchar(100) NOT NULL,
email text UNIQUE NOT NULL
);

CREATE TABLE users(
id serial PRIMARY KEY,
name varchar(100),
email text UNIQUE NOT NULL,
entries BIGINT DEFAULT 0,
joined TIMESTAMP NOT NULL
);
```

### 6. On server.js file provided with the aforementioned facerecognitionserver folder needed for this website to work, change the API key with your own Clarifai key after signing up for free at their website, and also change your DB credentials by adding you DB name, your username and password.
https://portal.clarifai.com/signup

## Made with love
This project is built using:
1. NodeJS and Express for backend
2. JS, HTML, CSS and React Framework for Front-End
3. PostgreSQL for database usage

THANK YOU :)
