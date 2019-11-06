let configChar = null;

function onButtonClick() {
  log('Requesting Bluetooth Device...');
  navigator.bluetooth.requestDevice(
    {filters: [{name: 'BlueRetro'}]})
  .then(device => {
    log('Connecting to GATT Server...');
    return device.gatt.connect();
  })
  .then(server => {
    log('Getting BlueRetro Service...');
    return server.getPrimaryService('569a7976-a12f-4b31-b0fa-8051560f8300');
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
