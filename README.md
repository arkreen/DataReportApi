# DataReportApi

API and sample code be used by API Miner to report data to Arkreen.


# Prerequisites

You need the `authorization` and `clientId` to report data to Arkreen Network, please goto the [Arkreen](https://arkreen.com) website to find contact information, for example: email, telegram or discord etc., then contact Arkreen core team to request the report data permissions.



# API Miner

## API Miner Type

There are 3 kinds API Miner so far:

| Type                    | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| Consumption             | API Miner be used report energy consumption data.    |
| Generation              | API Miner be used report energy generation data.     |
| Storage                 | API Miner be used report energy storage data.        |


## Report Rules

Arkreen Network requires the API Miner to report data following these rules:

| Rule                    | Description                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------- |
| Report Interval         | A API Miner must report the real time data to Arkreen Network every 3 minutes at least. |



# JSON RPC APIs

Arkreen Network provides JSON RPC APIs to be used by API Miner:

| API                                                            | Description                                                      |
| -------------------------------------------------------------- | ---------------------------------------------------------------- |
| [edr_reportConsumeData](./docs/edr_reportConsumeData.md)       | For API Miner to report energy consumption data.                 |
| edr_reportGenerationData                                       | Coming soon...                                                   |
| edr_reportStorageData                                          | Coming soon...                                                   |


# Sample Code

This sample code will send the consumption data to Arkreen Network.

The running environment of the sample is `Nodejs`, please goto [Nodejs Official Website](https://nodejs.org/en) to install.


## Prepare the environment

```
git clone git@github.com:arkreen/DataReportApi.git
cd DataReportApi/sample
npm install
```

## Config the client information

* Using any text editor to open `consig.js` file
* Change the `clientId` variable to your **client id**
* Change the `authorization` variable to your **authorization**


## Run the application

```
node app.js
```

When the application is running, consume data will be uploaded every 3 minutes, including real-time power and accumulated power consumption.


# FAQ

TODO
