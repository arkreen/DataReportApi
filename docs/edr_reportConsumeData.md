# edr_reportConsumeData

Report energy consumption data to Arkreen Network.




### REQUEST

```
POST https://api.arkreen.com/v1
```



##### HEADERS

```
Content-Type: application/json
authorization: Bearer 0x0000000000000000000000000000000000000000000000000000000000000000
```



##### BODY

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "edr_reportConsumeData",
    "params": {
        "clientId": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "power": 1,
        "energy": 0
    }
}
```



##### `params`

The `params` is a `JavaScript` object, its field include:

| Field          | Exists     | Type                           | Description                                            |
| -------------- | ---------- | ------------------------------ | ------------------------------------------------------ |
| `clientId`     | *required* | [`String`](./Types.md#String)  | Unique client Id that Arkreen issued to API Miner      |
| `power`        | *required* | [`Number`](./Types.md#Number)  | Real-time power consumption, Unit: "mw"                |
| `energy`       | *required* | [`Number`](./Types.md#Number)  | Cumulative power consumption, Unit: "mwh"              |




### RESPONSE



#### SUCCESS

##### BODY

```json
{
    "id": 2,
    "jsonrpc": "2.0",
    "result": "OK"
}
```


#### FAILURE

##### BODY

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": 1,
        "message": "Internal Error"
    }
}
```



##### CODE

Except the [Common Error Codes](../Common/Types.md), this method has a lot of dedicated error codes:

| Code | Message                              | Meaning                                                  |
| ---- | ------------------------------------ | -------------------------------------------------------- |
| 1000 | invalid authorization token          | Failed to verify `authorization`                         |
| 4002 | invalid clientId                     | Can't find `clientId` under the `authorization`          |
| 4003 | invalid energy data                  | `energy` is smaller than the current value               |

