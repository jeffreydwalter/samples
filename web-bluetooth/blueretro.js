let configChar = null;

function onButtonClick() {
  log('Requesting Bluetooth Device...');
  navigator.bluetooth.requestDevice(
    {filters: [{name: 'BlueRetro'}]},
    {optionalServices: ['00830f56-5180-fab0-314b-2fa176799a56']})
  .then(device => {
    log('Connecting to GATT Server...');
    return device.gatt.connect();
  })
  .then(server => {
    log('Getting BlueRetro Service...');
    return server.getPrimaryService('00830f56-5180-fab0-314b-2fa176799a56');
  })
  .then(service => {
    log('Getting Config Characteristic...');
    return  service.getCharacteristic('569a7976-a12f-4b31-b0fa-8051560f8301');
  })
  .then(characteristic => {
    log('Reading Config...');
    configChar = characteristic;
    return characteristic.readValue();
  })
  .then(value => {
    let config = value.getUint8(0);
    log('> Config is ' + config);
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}

function onButtonClick2() {
  battSrvc.readValue()
  .then(value => {
    let config = value.getUint8(0);
    log('> Config is ' + config);
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}
