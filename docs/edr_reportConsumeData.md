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

| Field          | Exists     | Type                           | Description                                                         |
| -------------- | ---------- | ------------------------------ | ------------------------------------------------------------------- |
| `clientId`     | *required* | [`String`](./Types.md#String)  | Unique client Id that Arkreen issued to API Miner                   |
| `power`        | *required* | [`Number`](./Types.md#Number)  | Real-time power consumption, Unit: **milliwatt**                    |
| `energy`       | *required* | [`Number`](./Types.md#Number)  | Cumulative power consumption, Unit: **milliwatt hours**             |




### RESPONSE



#### SUCCESS

##### BODY

```json
{
    "jsonrpc": "2.0",
    "id": 1,
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
        "code": 1000,
        "message": "Invalid authorization token"
    }
}
```



##### CODE

Except the [Common Error Codes](../Common/Types.md), this method has a lot of dedicated error codes:

| Code | Message                              | Meaning                                                  |
| ---- | ------------------------------------ | -------------------------------------------------------- |
| 1000 | Invalid authorization token          | Failed to verify `authorization`                         |
| 4002 | Invalid clientId                     | Can't find `clientId` by the `authorization`             |
| 4003 | Invalid energy data                  | `energy` is smaller than the current value               |

