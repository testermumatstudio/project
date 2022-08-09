# testermumatstudio

Read the [changelog](./changelog) to see details about the commits and observations

### Requeriments ###

* [NodeJS](https://nodejs.dev/) (Version 15+)
* [Yarn](https://classic.yarnpkg.com/) (Recommended)
```bash
    npm install --global yarn
```
* [Expo Framework](https://expo.dev/)
```bash
    npm install --global expo-cli
```
* Moralis Admin CLI (Optional for edit Cloud Function with IDE)
```bash
    npm install -g moralis-admin-cli
```
* Be patient

### How to start the project ###

Install the modules in case they are not installed
```bash
    yarn install
```

To run the project you need to run the command
```bash
    expo start
```
and then press W to run in web version

### How to edit Cloud Functions ###

Install Moralis Admin CLI
```bash
    npm install -g moralis-admin-cli
```

Connect to the cloud to sincronize the local functions:
* Test Server (Testnet)
```bash
    moralis-admin-cli watch-cloud-folder --moralisApiKey QX2nXN7ytl1vCK6 --moralisApiSecret i7OwoSFh4xTubfO --moralisSubdomain mifgyepwzbyo.usemoralis.com --autoSave 1 --moralisCloudfolder ./moralis/cloud
```
* Main Server (Mainnet)
```bash
    moralis-admin-cli watch-cloud-folder --moralisApiKey QX2nXN7ytl1vCK6 --moralisApiSecret i7OwoSFh4xTubfO --moralisSubdomain 32usztnqkj5u.usemoralis.com --autoSave 1 --moralisCloudfolder ./moralis/cloud
```