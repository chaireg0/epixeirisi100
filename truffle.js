module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      from: "0x0D030239b2116B2F23b44E1208e02edf67Cf9dF1",
      network_id: "3"
    }
  }
};
