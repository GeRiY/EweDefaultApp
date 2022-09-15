// package.json: "ewelink-api": "^3.1.1",
exports.getObject = function (){
  //import ewelink from "ewelink-api";
  const ewelink = require("ewelink-api");
  return {
    connection: null,
    devices: [],
    connectionParams: null,
    init: function (email,password,region){
      this.connectionParams = {
        email,
        password,
        region
      }
      try {

        this.connection = new ewelink({
          email: email,
          password: password,
          region: region,
        });
      } catch (err) {
        throw err;
      }
    },
    getDevices: async function(){
      const {email,password,region} = this.connectionParams;
      this.init(email,password,region)
      return await this.connection.getDevices()
    },
  }
}
