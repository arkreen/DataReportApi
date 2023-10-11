

// *** If permission granted, Arkreen will send the JSON RPC URL of integration and product environments to you
const jsonRpcUrl = "https://xxx.yyy.zzz/v1";
// *** If permission granted, Arkreen will send the client Id of integration and product environments to you
const clientId = "0x0000000000000000000000000000000000000000000000000000000000000000";
// *** If permission granted, Arkreen will send the authorization of integration and product environments to you
const authorization = "Bearer 0x0000000000000000000000000000000000000000000000000000000000000000";

//JSON RPC method for API Miner consumption
const jsonRpcMethod_ConsumeData_Report = "edr_reportConsumeData";

const interfaces = {
	jsonRpcUrl: jsonRpcUrl,
	jsonRpcMethod_ConsumeData_Report: jsonRpcMethod_ConsumeData_Report,
	clientId:clientId,
	authorization:authorization,
};


module.exports = interfaces;