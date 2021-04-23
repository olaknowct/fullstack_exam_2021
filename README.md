## Barber Time Platform

## Short Description
- Barber Time Platform is a Typical Signup Flow Process

## Run Locally
  ##### To Run this project Locally, follow the sequential steps below
  - Go to your desired project folder and from there
  - Clone using CLI : `git clone https://github.com/olaknowct/fullstack_exam_2021.git`
  - Change directory / navigate to the file folder : `cd fullstack_exam_2021`
  - Open it with CLI and install client-server dependecies : `npm run install:dependency`
  - Create/generate .env file, see .ENV Section
  - Run Locally : `npm run dev`
  - The App will automatically project into browser, otherwise open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - Viola! Client and Server are now concurrently running on localhost but different ports! 
  
 ## Available Scripts
 In the project directory, you can run:
 ### `npm run install:dependency`
 An easy way to install all Client and Server dependencies, otherwise you'l need to run `npm install` separately on server and client just to install indivudual dependecies
 ### `npm run dev`
 Running this scripts allows client-server localhost run simultanously and concurrently on different host. 
 A big thanks to concurrently package for making it possible to use 2 simultanously scripts.


## .ENV File
##### .env is a storage file where all credentials, secret keys, API keys or anything you might not want other people to see it.
##### Generate your own .env secret keys as required for this project
##### From this repo, it has a .env.copy for references. Take note that all properties present from .env.copy needs to be filled up and moved into .env file
##### Sender Identity for both Mail Server needs to be validated and verified to avoid unnessary behaviour.
### `SENDGRID_API_KEY`
Put here your own sendgrid api key. check and get it into your sendgrid dashboard
### `SENDGRID_SENDER_IDENTITY`
Sendgrid Sender Identity is the sender for every email broadcast, grab your own and put it here.
### `MAILGUN_DOMAIN`
Mail gun Domain is a domain of your Mail gun account, Check Mail Gun Dashboard.
### `MAILGUN_API_KEY`
Mail gun api key is used to broadcast via http request, Check Mail Gun Dashboard
### `MAILGUN_SENDER_IDENTITY`
Mail gun sender identity is used as a sender to recipient, Check Mail Gun Dashboard


## Libraries/Tools  

- Uses [React](https://reactjs.org/) for building user interfaces
- Uses [React Router Dom](https://www.npmjs.com/package/react-router-dom) to help render different component with different urls
- Uses [Functional Component](https://medium.com/wesionary-team/react-functional-components-vs-class-components-86a2d2821a22) for easier to understand, less and clean code. 
Still Why? since i am using redux for my state management, it would be easy to create components without having to think of how state should be manage.
- Uses [Redux](https://redux.js.org/) for state management
- Uses [Hooks](https://reactjs.org/docs/hooks-intro.html) to avoid props-drilling or a complex HOC
- Uses [Redux-Saga Middleware](https://redux-saga.js.org/) to separely handle Asynchronous javascripts request 
- Uses [Axios](https://www.npmjs.com/package/axios) for RESTful API
- Uses [SendGrid](https://sendgrid.com/) as Main Mail Server for email broadcasting.
- Uses [MailGun](https://www.mailgun.com/) as Backup Mail Server for high availability in case there's a server error on [SendGrid](https://sendgrid.com/) Main Mail Server 
- Uses [Redux-Logger](https://www.npmjs.com/package/redux-logger) Middleware to easily track redux-flow
- Uses [Redux-Logger](https://www.npmjs.com/package/redux-logger) Middleware to easily track redux-flow
- Uses [Node-Sass](https://www.npmjs.com/package/node-sass) to accomodate SASS/SCSS preprocessor.
- Uses [NodeJS](https://nodejs.org/en/) for app server to handle client request and mail server.


## Server API ENDPOINTS
### `/signup`
- If a form is submited, this endpoint handles the data and save it to in-memory, uses mail server to send email notification that the signup is successfull
### `/account-verification/verify`
- uses to verify a recently created account, and also checks if account exist
