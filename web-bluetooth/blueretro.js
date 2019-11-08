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

let configChar = null;

function onButtonClick() {
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

function onButtonClick3() {
    var max_fields_limit      = 255; //set limit for maximum input fields
    var x = 1; //initialize counter for text box
    $('.add_more_button').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        if(x < max_fields_limit){ //check conditions
            x++; //counter increment
            $('.input_fields_container_part').append('<div><input type="text" name="tags"/><a href="#" class="remove_field" style="margin-left:10px;">Remove</a></div>'); //add input field
        }
    });
    $('.input_fields_container_part').on("click",".remove_field", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
}

function onButtonClick4() {
    var x = document.getElementsByName("tags");
    log(x);
}
