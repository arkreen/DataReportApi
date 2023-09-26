

const jsonRpcUrl = "http://127.0.0.1:9101/v1";
const jsonRpcMethod_ConsumeData_Report = "edr_reportConsumeData";
const clientId = "0x7f571e87da98b8fdd7d9f8dc3c49177251d627071a27102216f011dd426b3538";
const authorization = "Bearer 0x83bc90863ecd1ccf680b6deb30ce84a411f97a97ff1299c20cc591bdcceef021";

const interfaces = {
	jsonRpcUrl: jsonRpcUrl,
	jsonRpcMethod_ConsumeData_Report: jsonRpcMethod_ConsumeData_Report,
	clientId:clientId,
	authorization:authorization,
};

module.exports = interfaces;