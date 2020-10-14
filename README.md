# interview_task_2
A stateless microservice in Nodejs with ReactJs frontend, with two major functionalities -

### Authentication
JSON patching

### Setup
The API requires Node.js

To get up and running:

1. Clone the repo.

git clone https://github.com/patsheba/interview_task_2.git
2. cd into repo. Use the same directory name(below) if you do not change it.

cd interview_task_2
3. Setup the application by installing its dependencies with

npm install
4. The app gets up and running on port 9000 with ```npm start```.

5. Important Create a .env file and set JWT_SECRET to any secret phrase you want.

### Testing the API routes.
Since this is mostly an API with post and patch requests, testing will be done with Postman or with the react app

### Authentication
This is a mock authentication so you can pass in any username or password to login.

Set the request to POST and the url to ```/users/login```.
In the Body for the Postman request, select x-www-form-urlencoded.
You will be setting 2 keys (for username and password). Set the username key to any name. Set password to any password (minimum of 6 characters).
Hit Send. You will get a result in this format:
```
{
   "user": "patsheba",
   "authorized": true,
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vaSIsImlhdCI6MTUzMjAwNDkwMSwiZXhwIjoxNTMyMDI2NTAxfQ.sonItbpZ_yKsRLDXNfDqwN6yN5VbdMVDhgKAMxDmPFY"
}
```
JSON patching
Apply json patch to a json object, and return the resulting json object.

Set the request to PATCH and the url to ```/patch/patch-object```.
Set the key ```jsonObject``` to an object you would like to patch. Set the key ```jsonPatchObject``` to the object you want to use to patch the jsonObject.
Examples:
```
jsonObject
{ "client": { "first_name": "Nikola"} }

jsonPatchObject
[{"op": "replace", "path": "/client/first_name", "value": "Tesla"}]
```
Since this is a secure route, for testing, you will have to set the token in the Header. Set key as token and value as token you received from Authentication.
Expected result should be:
```
{ "client": { "first_name": "Tesla"} }
```
