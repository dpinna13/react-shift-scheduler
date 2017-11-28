# ![Icon](https://raw.githubusercontent.com/clsavino/react-shift-scheduler/master/public/assets/images/logo-small.png) Schedulr
Schedulr is a time and schedule management web-app that allows:
* admin to manage and users' schedule
* users to view their schedules

## Minimum requirement

(https://askubuntu.com/questions/786272/why-does-installing-node-6-x-on-ubuntu-16-04-actually-install-node-4-2-6) Ensure you've got Node.js latest version

sudo apt install npm mongo cmdtest
npm install --save-dev webpack

To correctly install yarn in ubuntu: 
(https://yarnpkg.com/lang/en/docs/install/#linux-tab) Yarn documentation

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