require('dotenv').config()

console.log('App started')
const EveClassConstructor = require('./EweClass');
const EweClass = EveClassConstructor.getObject();
const {EMAIL,PASSWORD,REGION} = process.env;
if(!EMAIL || !PASSWORD || !REGION){
  console.error({error: 'You have to copy ".env.sample" file and rename it ".env", you have to add email, password, region in .env'});
  return;
}

run();


async function run(){
  console.log('Login to api')
  EweClass.init(EMAIL,PASSWORD,REGION);
  console.log('Get devices started')
  const devices = await EweClass.getDevices();
  console.log(devices)
}