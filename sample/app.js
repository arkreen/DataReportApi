// app.js

const Config = require('./config');



async function sendConsumeDataReport(power,energy) {
  var url = Config.jsonRpcUrl;
  var method = Config.jsonRpcMethod_ConsumeData_Report;

  var jsonRpc = {
    jsonrpc: "2.0",
    id: Date.now(),
    method: method,
    params: {
      clientId:Config.clientId,
      energy:energy,
      power:power
    }
  };

  var options = {
    method: 'POST',
    headers: { "Content-Type": "application/json","token":Config.token },
    body: JSON.stringify(jsonRpc)
  };

  var response = await fetch(url, options);
  var data = await response.json();
  if (data.result) {
    return data.result;
  } else {
    throw new Error(JSON.stringify(data.error));
  }
}


(function() {

  const reporter = async function() {

    //send the consume data report to Arkreen Network
    var result = await sendConsumeDataReport(1,1);
    console.log("transaction result", result);

    return result;
  };
  setTimeout(async function() {
    await reporter();
  }, 1000 * 1);
  //send the consume data report every 3 minutes
  setInterval(async function() {
    await reporter();
  }, 1000 * 60 * 3); 


})();

