# DataReportApi
API and sample to used report data to Arkreen




# Prerequisites

If you want to become to a vender of Arkreen Consume Data, you need to satisfy the following requirements:
* You must be a business user, individual users are not supported.
* You must have direct business cooperation with Arkreen Network.
* You must have a growing cumulative electricity usage and report the consume data to Arkreen Network `24*7*365` manner.
* You must obtain Arkreen Network authorization, including `authorization` and `clientId`.





# API Miner Process Flow

* Obtained authorization from Arkreen Network
    * Provide client name and register to Arkreen Network.
    * Arkreen Network generates authorization and clientId .
* Using the Arkreen JSON RPC API to report consume data to Arkreen Network periodically
    * Must report the consume data every 3 minutes and each report includes `energy` and `power` .
    * For more information of consume data, please refer to: [edr_reportConsumeData](./docs/edr_reportConsumeData.md)




# JSON RPC APIs for API Miner

| API                                                      | Description                                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------- |
| [edr_reportConsumeData](./docs/edr_reportConsumeData.md)       | JSON RPC API that be used to report consume data to Arkreen Network |



# Sample Code

This sample code will send the consume data to Arkreen Network.

The running environment of the sample is `Nodejs`, please goto [Nodejs Official Website](https://nodejs.org/en) to install.


## Prepare the environment

```
git clone git@github.com:arkreen/DataReportApi.git
cd DataReportApi/sample
npm install
```

## Config the client information

* Using any text editor to open `consig.js` file
* Change the `clientId` variable to your client id
* Change the `authorization` variable to your authorization


## Run the application

```
node app.js
```

When the application is running, consume data will be uploaded every 3 minutes, including real-time power and accumulated power consumption.


# FAQ


