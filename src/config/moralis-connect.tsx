const Moralis = require('moralis');

//Moralis Access
const serverUrl = "https://1joo3ixhtxrh.usemoralis.com:2053/server"; //"https://32usztnqkj5u.usemoralis.com:2053/server"
const appId = "uBhuMGYPLjLxu7zen5v4SdwKrvVRvdWdjkfketmB"; //"NvhqAGzadKgA7A5ZJWU4RGvn7B1BWvgu7U44xXkG"
const masterKey = "OGtgVjpuLKISZ9F80BzbPxm3RcuHIQs28PTuP23F"; //"AkWfV6rmXZOf8qYxqTVXOAySwRStmN25ebGgeFST"

//Contracts Access
const contracts = {
    token: "0xbf58916228a2d265961e83b369252d4fa8b41a99",
    auction: "0xc409fdfcee0a362eb2752eac5425e340c72c21a7",
    collection: "0x702c9cb55abfde6d829ea4d574bb5e55eab5b959"
}

//creator access
const creator = {
    owner: "0xb0A7c00EA503AdbdFE0071bdd9eB6Fbb18e7C6B5",
    artist: "0xb0A7c00EA503AdbdFE0071bdd9eB6Fbb18e7C6B5",
}

//Auth Access
const auth = {
    chainId: 80001, //137,
    chainName: "Polygon",
    currencyName: "MATIC",
    currencySymbol: "MATIC",
    currencyContract: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    rpcUrl: "https://matic-mumbai.chainstacklabs.com",//"https://polygon-rpc.com/",
    blockExplorerUrl: "https://mumbai.polygonscan.com/", //"https://polygonscan.com/",
    token: "CNRT", //"KNRT"
}

Moralis.start({ serverUrl, appId });

export { Moralis, serverUrl, appId, masterKey, contracts,creator, auth };