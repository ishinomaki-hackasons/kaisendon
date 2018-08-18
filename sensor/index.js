// Load the node-omron-envsensor and get a `Envsensor` constructor object
const Envsensor = require('node-omron-envsensor');
// Create an `Envsensor` object
const envsensor = new Envsensor();
// `EnvsensorDevice` object
let device = null;

var array = new Array();

var moving = false;
// Initialize the `Envsensor` object
envsensor.init().then(() => {
  // Discover a device
  return envsensor.discover({quick:true});
}).then((device_list) => {
  if(device_list.length === 0) {
    throw new Error('No device was found.');
  }
  // `EnvsensorDevice` object representing the found device
  device = device_list[0];
  // Connect to the device
  return device.connect();
}).then(() => {
  // Set the measurement interval to 3 seconds
  return device.setBasicConfigurations({
    measurementInterval: 1
  });
}).then(() => {
  // Set a callback function to receive notifications
  device.onsensordata = (data) => {

    array.push(data["soundNoise"]);
    if (array.length > 4){
      array.shift();
    }
    var ave1 = (array[0]+array[1])/2;
    var ave2 = (array[2]+array[3])/2;

    var diff = ave1 - ave2;

    if( (moving == false) & (!isNaN(diff)) ){
      console.log(diff);
      const promise = new Promise((resolve, reject) => resolve((function () {
        return 'a';
      })()));
    }
  };


  // Start monitoring data
  return device.startMonitoringData();
}).then(() => {
  // Stop monitoring data and disconnect the device in 10 seconds
  setTimeout(() => {
    // Stop monitoring data
    device.stopMonitoringData().then(() => {
      // Disconnect the device
      return device.disconnect();
    }).then(() => {
      process.exit();
    });
  }, 30000);
}).catch((error) => {
  console.error(error);
});
