# ![Icon](https://raw.githubusercontent.com/clsavino/react-shift-scheduler/master/public/assets/images/logo-small.png) Schedulr
Schedulr is a time and schedule management web-app that allows:
* admin to manage and users' schedule
* users to view their schedules

## Run locally
Install dependencies
```shell
npm install
```

Build the bundle
```shell
webpack
```
Re-execute this command every time you modified any html or .js

Start mongodb
```shell
mongod --config /usr/local/etc/mongod.conf
```
or 
```shell
brew services start mongodb
```


Start the server
```shell
node server.js
```

Open a browser and go to [http://localhost:8080](http://localhost:8080)

## Tech
Built with React, Node, Express, MongoDB, Passport.js