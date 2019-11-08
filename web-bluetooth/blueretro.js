var brUuid = [
    '56830f56-5180-fab0-314b-2fa176799a00',
    '56830f56-5180-fab0-314b-2fa176799a01',
    '56830f56-5180-fab0-314b-2fa176799a02',
    '56830f56-5180-fab0-314b-2fa176799a03',
    '56830f56-5180-fab0-314b-2fa176799a04',
    '56830f56-5180-fab0-314b-2fa176799a05',
    '56830f56-5180-fab0-314b-2fa176799a06',
    '56830f56-5180-fab0-314b-2fa176799a07',
    '56830f56-5180-fab0-314b-2fa176799a08',
    '56830f56-5180-fab0-314b-2fa176799a09',
    '56830f56-5180-fab0-314b-2fa176799a0a',
    '56830f56-5180-fab0-314b-2fa176799a0b',
    '56830f56-5180-fab0-314b-2fa176799a0c',
    '56830f56-5180-fab0-314b-2fa176799a0d',
];

var maxInput = 255;
var nbInput = 1;
let configChar = null;

function btConn() {
  log('Requesting Bluetooth Device...');
  navigator.bluetooth.requestDevice(
    {filters: [{name: 'BlueRetro'}],
    optionalServices: [brUuid[0]]})
  .then(device => {
    log('Connecting to GATT Server...');
    return device.gatt.connect();
  })
  .then(server => {
    log('Getting BlueRetro Service...');
    return server.getPrimaryService(brUuid[0]);
  })
  .then(service => {
    log('Getting Config Characteristic...');
    return  service.getCharacteristic(brUuid[1]);
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

function btGetCfg() {
  battSrvc.readValue()
  .then(value => {
    let config = value.getUint8(0);
    log('> Config is ' + config);
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}

function addInput() {
    if (nbInput < maxInput){
        nbInput++;
        var div = document.getElementById("divInput");
        var newSubDiv = document.createElement("div");
        newSubDiv.innerHTML = '<input type="text" name="tags"/><button class="delInput"">Remove</button>'
        div.appendChild(newSubDiv);
    }
}

function delInput() {
    this.parent('div').remove();
    nbInput--;
}

function listInput() {
    var x = document.getElementsByName("tags");
    for (var i = 0; i < x.length; i++) {
        log(x[i].value);
    }
}
