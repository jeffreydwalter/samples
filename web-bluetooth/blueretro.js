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
    '56830f56-5180-fab0-314b-2fa176799a0e',
    '56830f56-5180-fab0-314b-2fa176799a0f',
    '56830f56-5180-fab0-314b-2fa176799a10',
    '56830f56-5180-fab0-314b-2fa176799a11',
    '56830f56-5180-fab0-314b-2fa176799a12',
    '56830f56-5180-fab0-314b-2fa176799a13',
    '56830f56-5180-fab0-314b-2fa176799a14',
    '56830f56-5180-fab0-314b-2fa176799a15',
    '56830f56-5180-fab0-314b-2fa176799a16',
    '56830f56-5180-fab0-314b-2fa176799a18',
    '56830f56-5180-fab0-314b-2fa176799a19',
    '56830f56-5180-fab0-314b-2fa176799a1a',
    '56830f56-5180-fab0-314b-2fa176799a1b',
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

var systemCfg = [
    'Auto',
    'N64',
    'DreamCast',
];

var multitapCfg = [
    'Auto',
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
    'Circular->Circular',
    'Circular->N64 Hexagone',
    'Circular->Square',
];

const maxMainInput = 12;
const maxSubInput = 4;
const maxOutput = 12;
const maxMax = 255;
const maxThres = 100;
const maxTurbo = 16;

var maxMapping = 255;
var nbMapping = 1;
let brService = null;
var mappingElement = null;

function initGlobalCfg() {
    var div = document.createElement("div");

    /* System */
    var sel = document.createElement("select");
    for (var i = 0; i < systemCfg.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = systemCfg[i];
        sel.add(option);
    }
    sel.id = "systemCfg";
    div.appendChild(sel);

    var divGlobalCfg = document.getElementById("divGlobalCfg");
    divGlobalCfg.appendChild(div);

    div = document.createElement("div");

    /* Multitap */
    sel = document.createElement("select");
    for (var i = 0; i < multitapCfg.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = multitapCfg[i];
        sel.add(option);
    }
    sel.id = "multitapCfg";
    div.appendChild(sel);

    divGlobalCfg.appendChild(div);
}

function initOutputSelect() {
    var div = document.createElement("div");

    /* Output select */
    var main = document.createElement("select");
    for (var i = 0; i < maxOutput; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = "Output " + (i + 1);
        main.add(option);
    }
    main.id = "outputSelect";
    div.appendChild(main);

    var divOutputCfg = document.getElementById("divOutputCfg");
    divOutputCfg.appendChild(div);
}

function initOutputMode() {
    var div = document.createElement("div");

    /* Output select */
    var main = document.createElement("select");
    for (var i = 0; i < devCfg.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = devCfg[i];
        main.add(option);
    }
    main.id = "outputMode";
    div.appendChild(main);

    var divOutputCfg = document.getElementById("divOutputCfg");
    divOutputCfg.appendChild(div);
}

function initInputSelect() {
    var div = document.createElement("div");

    /* Output select */
    var main = document.createElement("select");
    for (var i = 0; i < maxMainInput; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = "Input " + (i + 1);
        main.add(option);
    }
    main.id = "inputSelect";
    div.appendChild(main);

    var divInputCfg = document.getElementById("divInputCfg");
    divInputCfg.appendChild(div);
}

function initInputAssign() {
    var div = document.createElement("div");

    /* Main dev */
    var main = document.createElement("select");
    main.setAttribute("style", "max-width:40%;");
    for (var i = 0; i < maxMainInput; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = "Input " + (i + 1);
        main.add(option);
    }
    main.id = "mainInput";
    div.appendChild(main);

    /* Sub dev */
    var sub = document.createElement("select");
    sub.setAttribute("style", "max-width:40%;");
    for (var i = 0; i <= maxSubInput; i++) {
        var option  = document.createElement("option");
        option.value = i;
        if (i) {
            option.text = "Sub Input " + i;
        }
        else {
            option.text = "Sub Input Merged";
        }
        sub.add(option);
    }
    sub.id = "subInput";
    div.appendChild(sub);

    var divInputCfg = document.getElementById("divInputCfg");
    divInputCfg.appendChild(div);
}

function initOutputMapping() {
    mappingElement = document.createElement("div");

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
    mappingElement.appendChild(src);

    /* Dest */
    var dest = src.cloneNode(true);
    dest.setAttribute("class", "dest");
    mappingElement.appendChild(dest);

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
    mappingElement.appendChild(destId);

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
    mappingElement.appendChild(max);

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
    mappingElement.appendChild(thres);

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
    mappingElement.appendChild(dz);

    /* Turbo */
    var turbo = document.createElement("select");
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
    mappingElement.appendChild(turbo);

    /* Scaling */
    var sca = document.createElement("select");
    sca.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < scaling.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = scaling[i];
        sca.add(option);
    }
    sca.setAttribute("class", "scaling");
    mappingElement.appendChild(sca);

    /* Scaling diag */
    var diag = document.createElement("select");
    diag.setAttribute("style", "max-width:10%;");
    for (var i = 0; i < diagScaling.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = diagScaling[i];
        diag.add(option);
    }
    diag.setAttribute("class", "diag");
    mappingElement.appendChild(diag);

    /* Add button */
    var addButton = document.createElement("button");
    addButton.innerText = '+';
    addButton.addEventListener("click", addInput);

    /* Append first cfg */
    divMappingGrp = document.createElement("div");
    divMapping = document.createElement("div");
    divMapping.appendChild(mappingElement);
    divMapping.id = "divMapping";
    var divInputCfg = document.getElementById("divInputCfg");
    divMappingGrp.appendChild(divMapping);
    divMappingGrp.appendChild(addButton);
    divInputCfg.appendChild(divMappingGrp);
}

function initBlueRetroCfg() {
    initGlobalCfg();
    initOutputSelect();
    initOutputMode();
    initInputSelect();
    initInputAssign();
    initOutputMapping();
}

function loadGlobalCfg() {
    log('Get Global Config CHRC...');
    brService.getCharacteristic(brUuid[1])
    .then(chrc => {
        log('Reading Global Config...');
        return chrc.readValue();
    })
    .then(value => {
        log('Global Config size: ' + value.byteLength);
        document.getElementById("systemCfg").value = value.getUint8(0);
        document.getElementById("multitapCfg").value = value.getUint8(1);
    })
    .catch(error => {
        log('Argh! ' + error);
    });
}

function loadOutputCfg(cfgId) {
    log('Get Output ' + cfgId + ' Config CHRC...');
    brService.getCharacteristic(brUuid[cfgId + 15])
    .then(chrc => {
        log('Reading Output ' + cfgId + ' Config...');
        return chrc.readValue();
    })
    .then(value => {
        log('Output ' + cfgId + ' Config size: ' + value.byteLength);
        document.getElementById("outputMode").value = value.getUint8(0);
    })
    .catch(error => {
        log('Argh! ' + error);
    });
}

function loadInputCfg(cfgId) {
    log('Geti Input ' + cfgId + ' Config CHRC...');
    brService.getCharacteristic(brUuid[cfgId + 2])
    .then(chrc => {
        log('Reading Input ' + cfgId + ' Config...');
        return chrc.readValue();
    })
    .then(value => {
        log('Input ' + cfgId + ' Config size: ' + value.byteLength);
        document.getElementById("mainInput").value = value.getUint8(0);
        document.getElementById("subInput").value = value.getUint8(1);

        var i;
        var nbMap = value.getUint8(2);
        var div = document.getElementById("divMapping");
        if (value.getUint8(2) < nbMapping) {
            for (i = 0; i < (nbMapping - value.getUint8(2)); i++) {
                div.removeChild(div.lastChild);
            }
            log('rem: ' + i);
        }
        else if (value.getUint8(2) > nbMapping) {
            for (i = 0; i < (nbMap - nbMapping); i++) {
                addInput();
            }
            log('added: ' + i + ' ' + ((nbMap - nbMapping));
        }
        var src = document.getElementsByClassName("src");
        var dest = document.getElementsByClassName("dest");
        var destId = document.getElementsByClassName("destId");
        var max = document.getElementsByClassName("max");
        var thres = document.getElementsByClassName("thres");
        var dz = document.getElementsByClassName("dz");
        var turbo = document.getElementsByClassName("turbo");
        var scaling = document.getElementsByClassName("scaling");
        var diag = document.getElementsByClassName("diag");

        log('Loading Mapping Found: ' + src.length + ' nbMapping: ' + nbMapping + ' cfg: ' + value.getUint8(2));

        var j = 3;
        for (var i = 0; i < src.length; i++) {
            src[i].value = value.getUint8(j++);
            dest[i].value = value.getUint8(j++);
            destId[i].value = value.getUint8(j++);
            max[i].value = value.getUint8(j++);
            thres[i].value = value.getUint8(j++);
            dz[i].value = value.getUint8(j++);
            turbo[i].value = value.getUint8(j++);
            scaling[i].value = value.getUint8(j) & 0xF;
            diag[i].value = value.getUint8(j++) >> 4;
        }
    })
    .catch(error => {
        log('Argh! ' + error);
    });
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
    log('Init Cfg DOM...');
    brService = service;
    initBlueRetroCfg();
    loadGlobalCfg();
    loadOutputCfg(0);
    loadInputCfg(0);
    document.getElementById("divBtConn").style.display = 'none';
    document.getElementById("divGlobalCfg").style.display = 'block';
    document.getElementById("divOutputCfg").style.display = 'block';
    document.getElementById("divInputCfg").style.display = 'block';
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
    if (nbMapping < maxMapping){
        nbMapping++;
        var div = document.getElementById("divMapping");
        var newSubDiv = mappingElement.cloneNode(true);
        var newButton = document.createElement("button");
        newButton.innerText = '-';
        newButton.addEventListener("click", delInput);
        newSubDiv.appendChild(newButton);
        newSubDiv.querySelector('.max').value = 100;
        newSubDiv.querySelector('.thres').value = 50;
        newSubDiv.querySelector('.dz').value = 135;
        div.appendChild(newSubDiv);
    }
}

function delInput() {
    this.parentNode.remove();
    nbMapping--;
}

function listInput() {
    var x = document.getElementsByClassName("src");
    for (var i = 0; i < x.length; i++) {
        log(x[i].value);
    }
}
