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

var btnList = [
    'GP: LX Left;  KB: A',
    'GP: LX Right; KB: D',
    'GP: LY Down;  KB: S; M: W Down',
    'GP: LY Up;    KB: W; M: W Up',
    'GP: RX Left;  KB: J; M: X Left',
    'GP: RX Right; KB: L; M: X Right',
    'GP: RY Down;  KB: K; M: Y Down',
    'GP: RY Up;    KB: I; M: Y Up',
    'GP: LD Left;  KB: Left',
    'GP: LD Right; KB: Right',
    'GP: LD Down;  KB: Down',
    'GP: LD Up;    KB: Up',
    'GP: RD Left;  KB: Comma',
    'GP: RD Right; KB: Slash',
    'GP: RD Down;  KB: Dot',
    'GP: RD Up;    KB: Semicolon',
    'GP: RB Left;  KB: Q; M: Left',
    'GP: RB Right; KB: R; M: Middle',
    'GP: RB Down;  KB: E; M: Right',
    'GP: RB Up;    KB: F; M: 4',
    'GP: MM; KB: Esc;   M: 5',
    'GP: MS; KB: Hash;  M: 6',
    'GP: MT; KB: L Win; M: 7',
    'GP: MQ; KB: Apos.  M: 8',
    'GP: LM; KB: Z',
    'GP: LS; KB: Tab',
    'GP: LT; KB: L Brace',
    'GP: LJ; KB: L CTRL',
    'GP: RM; KB: X',
    'GP: RS; KB: L Shift',
    'GP: RT; KB: R Brace',
    'GP: RJ; KB: Space',
    'KB: B',
    'KB: C',
    'KB: G',
    'KB: H',
    'KB: M',
    'KB: N',
    'KB: O',
    'KB: T',
    'KB: U',
    'KB: V',
    'KB: Y',
    'KB: 1',
    'KB: 2',
    'KB: 3',
    'KB: 4',
    'KB: 5',
    'KB: 6',
    'KB: 7',
    'KB: 8',
    'KB: 9',
    'KB: 0',
    'KB: Enter',
    'KB: Backspace',
    'KB: Minus',
    'KB: Equal',
    'KB: Backslash',
    'KB: Grave',
    'KB: Capslock',
    'KB: F1',
    'KB: F2',
    'KB: F3',
    'KB: F4',
    'KB: F5',
    'KB: F6',
    'KB: F7',
    'KB: F8',
    'KB: F9',
    'KB: F10',
    'KB: F11',
    'KB: F12',
    'KB: Print Screen',
    'KB: Scroll',
    'KB: Pause',
    'KB: Insert',
    'KB: Home',
    'KB: Page Up',
    'KB: Delete',
    'KB: End',
    'KB: Page Down',
    'KB: Numlock',
    'KB: KP Div',
    'KB: KP Multi',
    'KB: KP Minus',
    'KB: KP Plus',
    'KB: KP Enter',
    'KB: KP 1',
    'KB: KP 2',
    'KB: KP 3',
    'KB: KP 4',
    'KB: KP 5',
    'KB: KP 6',
    'KB: KP 7',
    'KB: KP 8',
    'KB: KP 9',
    'KB: KP 0',
    'KB: L Alt',
    'KB: R Ctrl',
    'KB: R Shift',
    'KB: R Alt',
    'KB: R Win',
];

var multitapCfg = [
    'None',
    'Slot 1',
    'Slot 2',
    'Dual',
    'Special',
];

var devCfg = [
    'Auto',
    'GamePad',
    'GamePadAlt',
    'Keyboard',
    'Mouse',
];

var scaling = [
    'Linear',
    'Aggressive',
    'Relaxed',
    'Wide',
    'S-Curve',
];

var diagScaling = [
    'Auto',
//    'Circular->Circular',
//    'Circular->N64 Hexagone',
//    'Circular->Square',
];

const maxOutput = 12;
const maxMax = 255;
const maxThres = 100;
const maxTurbo = 16;

var maxInput = 255;
var nbInput = 1;
let configChar = null;
var divCfg = null;

function initField() {
    divCfg = document.createElement("div");

    /* Src */
    var src = document.createElement("select");
    src.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < btnList.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = btnList[i];
        src.add(option);
    }
    src.setAttribute("class", "src");
    divCfg.appendChild(src);

    /* Dest */
    var dest = src.cloneNode(true);
    dest.setAttribute("class", "dest");
    divCfg.appendChild(dest);

    /* Dest ID */
    var destId = document.createElement("select");
    destId.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < maxOutput; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = "Output " + (i + 1);
        destId.add(option);
    }
    destId.setAttribute("class", "destId");
    divCfg.appendChild(destId);

    /* Max */
    var max = document.createElement("select");
    max.setAttribute("style", "max-width:10%;");
    for (var i = 5; i <= maxMax; i += 5) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = i + "%";
        max.add(option);
    }
    max.setAttribute("class", "max");
    max.value = 100;
    divCfg.appendChild(max);

    /* Threshold */
    var thres = document.createElement("select");
    thres.setAttribute("style", "thres-width:10%;");
    for (var i = 5; i <= maxThres; i += 5) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = i + "%";
        thres.add(option);
    }
    thres.setAttribute("class", "thres");
    thres.value = 50;
    divCfg.appendChild(thres);

    /* Deadone */
    var dz = document.createElement("select");
    dz.setAttribute("style", "dz-width:10%;");
    for (var i = 5; i <= maxMax; i += 5) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = i/10000 + "%";
        dz.add(option);
    }
    dz.setAttribute("class", "dz");
    dz.value = 135;
    divCfg.appendChild(dz);

    /* Turbo */
/*    var turbo = document.createElement("select");
    turbo.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < maxTurbo; i++) {
        var option  = document.createElement("option");
        option.value = i;
        if (i) {
            option.text = "Framerate/" + i;
        }
        else {
            option.text = "Disable";
        }
        turbo.add(option);
    }
    turbo.setAttribute("class", "turbo");
    divCfg.appendChild(turbo);
*/
    /* Scaling */
/*    var sca = document.createElement("select");
    sca.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < scaling.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = scaling[i];
        sca.add(option);
    }
    sca.setAttribute("class", "scaling");
    divCfg.appendChild(sca);
*/
    /* Scaling diag */
    var diag = document.createElement("select");
    diag.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < diagScaling.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = diagScaling[i];
        diag.add(option);
    }:
    diag.setAttribute("class", "diag");
    divCfg.appendChild(diag);

    /* Append first cfg */
    var div = document.getElementById("divInput");
    div.appendChild(divCfg);
}

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
        var newSubDiv = divCfg.cloneNode(true);
        var newButton = document.createElement("button");
        newButton.innerHTML = '-';
        newButton.addEventListener("click", delInput);
        newSubDiv.appendChild(newButton);
        div.appendChild(newSubDiv);
    }
}

function delInput() {
    this.parentNode.remove();
    nbInput--;
}

function listInput() {
    var x = document.getElementsByClassName("src");
    for (var i = 0; i < x.length; i++) {
        log(x[i].value);
    }
}
