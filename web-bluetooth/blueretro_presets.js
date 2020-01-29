var brUuid = [
    '56830f56-5180-fab0-314b-2fa176799a00',
    '56830f56-5180-fab0-314b-2fa176799a01',
    '56830f56-5180-fab0-314b-2fa176799a02',
    '56830f56-5180-fab0-314b-2fa176799a03',
    '56830f56-5180-fab0-314b-2fa176799a04',
    '56830f56-5180-fab0-314b-2fa176799a05',
];

const btn = {
    "PAD_LX_LEFT":0,
    "PAD_LX_RIGHT":1,
    "PAD_LY_DOWN":2,
    "PAD_LY_UP":3,
    "PAD_RX_LEFT":4,
    "PAD_RX_RIGHT":5,
    "PAD_RY_DOWN":6,
    "PAD_RY_UP":7,
    "PAD_LD_LEFT":8,
    "PAD_LD_RIGHT":9,
    "PAD_LD_DOWN":10,
    "PAD_LD_UP":11,
    "PAD_RD_LEFT":12,
    "PAD_RD_RIGHT":13,
    "PAD_RD_DOWN":14,
    "PAD_RD_UP":15,
    "PAD_RB_LEFT":16,
    "PAD_RB_RIGHT":17,
    "PAD_RB_DOWN":18,
    "PAD_RB_UP":19,
    "PAD_MM":20,
    "PAD_MS":21,
    "PAD_MT":22,
    "PAD_MQ":23,
    "PAD_LM":24,
    "PAD_LS":25,
    "PAD_LT":26,
    "PAD_LJ":27,
    "PAD_RM":28,
    "PAD_RS":29,
    "PAD_RT":30,
    "PAD_RJ":31,
    "MOUSE_X_LEFT":4,
    "MOUSE_X_RIGHT":5,
    "MOUSE_Y_DOWN":6,
    "MOUSE_Y_UP":7,
    "MOUSE_WX_LEFT":12,
    "MOUSE_WX_RIGHT":13,
    "MOUSE_WY_DOWN":14,
    "MOUSE_WY_UP":15,
    "MOUSE_LEFT":28,
    "MOUSE_MIDDLE":27,
    "MOUSE_RIGHT":24,
    "MOUSE_4":16,
    "MOUSE_5":17,
    "MOUSE_6":18,
    "MOUSE_7":19,
    "MOUSE_8":29,
    "KB_A":0,
    "KB_D":1,
    "KB_S":2,
    "KB_W":3,
    "KB_LEFT":8,
    "KB_RIGHT":9,
    "KB_DOWN":10,
    "KB_UP":11,
    "KB_Q":16,
    "KB_R":17,
    "KB_E":18,
    "KB_F":19,
    "KB_ESC":20,
    "KB_ENTER":21,
    "KB_LWIN":22,
    "KB_HASH":23,
    "KB_Z":25,
    "KB_LCTRL":26,
    "KB_X":29,
    "KB_LSHIFT":30,
    "KB_SPACE":31,
    "KB_B":32,
    "KB_C":33,
    "KB_G":34,
    "KB_H":35,
    "KB_I":36,
    "KB_J":37,
    "KB_K":38,
    "KB_L":39,
    "KB_M":40,
    "KB_N":41,
    "KB_O":42,
    "KB_T":43,
    "KB_U":44,
    "KB_V":45,
    "KB_Y":46,
    "KB_1":47,
    "KB_2":48,
    "KB_3":49,
    "KB_4":50,
    "KB_5":51,
    "KB_6":52,
    "KB_7":53,
    "KB_8":54,
    "KB_9":55,
    "KB_0":56,
    "KB_BACKSPACE":57,
    "KB_TAB":58,
    "KB_MINUS":59,
    "KB_EQUAL":60,
    "KB_LEFTBRACE":61,
    "KB_RIGHTBRACE":62,
    "KB_BACKSLASH":63,
    "KB_SEMICOLON":64,
    "KB_APOSTROPHE":65,
    "KB_GRAVE":66,
    "KB_COMMA":67,
    "KB_DOT":68,
    "KB_SLASH":69,
    "KB_CAPSLOCK":70,
    "KB_F1":71,
    "KB_F2":72,
    "KB_F3":73,
    "KB_F4":74,
    "KB_F5":75,
    "KB_F6":76,
    "KB_F7":77,
    "KB_F8":78,
    "KB_F9":79,
    "KB_F10":80,
    "KB_F11":81,
    "KB_F12":82,
    "KB_PSCREEN":83,
    "KB_SCROLL":84,
    "KB_PAUSE":85,
    "KB_INSERT":86,
    "KB_HOME":87,
    "KB_PAGEUP":88,
    "KB_DEL":89,
    "KB_END":90,
    "KB_PAGE_DOWN":91,
    "KB_NUMLOCK":92,
    "KB_KP_DIV":93,
    "KB_KP_MULTI":94,
    "KB_KP_MINUS":95,
    "KB_KP_PLUS":96,
    "KB_KP_ENTER":97,
    "KB_KP_1":98,
    "KB_KP_2":99,
    "KB_KP_3":100,
    "KB_KP_4":101,
    "KB_KP_5":102,
    "KB_KP_6":103,
    "KB_KP_7":104,
    "KB_KP_8":105,
    "KB_KP_9":106,
    "KB_KP_0":107,
    "KB_LALT":108,
    "KB_RCTRL":109,
    "KB_RSHIFT":110,
    "KB_RALT":111,
    "KB_RWIN":112,
};

const maxMainInput = 12;
const maxSubInput = 4;
const maxOutput = 12;
const maxMax = 255;
const maxThres = 100;
const maxTurbo = 16;

var presets = new Array();
var bluetoothDevice;
var maxMapping = 255;
var nbMapping = 1;
let brService = null;
var mappingElement = null;
let inputChrc = null;

function initInputSelect() {
    document.getElementById("desc").textContent = presets[0].desc;
    var div = document.createElement("div");

    var main = document.createElement("select");
    for (var i = 0; i < maxMainInput; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = "Input " + (i + 1);
        main.add(option);
    }
    main.id = "inputSelect";
    div.appendChild(main);

    var main = document.createElement("select");
    for (var i = 0; i < presets.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = presets[i].name;
        main.add(option);
    }
    main.id = "presetsName";
    main.addEventListener("change", selectInput);
    div.appendChild(main);

    var divInputCfg = document.getElementById("divInputCfg");
    divInputCfg.appendChild(div);
}

function initOutputMapping() {
    /* Save */
    divSave = document.createElement("div");

    var btn = document.createElement("button");
    btn.id = "inputSave";
    btn.innerText = 'Save';
    btn.addEventListener("click", saveInput);
    divSave.appendChild(btn);
    divSave.setAttribute("style", "margin-top:1em;");

    /* Append first cfg */
    divMappingGrp = document.createElement("div");
    var divInputCfg = document.getElementById("divInputCfg");
    divMappingGrp.appendChild(divSave);
    divInputCfg.appendChild(divMappingGrp);
}

function fetchMap(presets, files, idx) {
    return new Promise(function(resolve, reject) {
        fetch("map/" + files[idx].name)
        .then(rsp => {
            return rsp.json();
        })
        .then(data => {
            presets.push(data);
            if (++idx < files.length) {
                resolve(fetchMap(presets, files, idx));
            }
            else {
                resolve(presets);
            }
        })
        .catch(error => {
            reject(error);
        });
    });
}

function getMapList(url) {
    return new Promise(function(resolve, reject) {
        fetch(url)
        .then(rsp => {
            return rsp.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}

function initBlueRetroCfg() {
    getMapList('https://api.github.com/repos/darthcloud/samples/contents/web-bluetooth/map/')
    .then(files => {
        return fetchMap(presets, files, 0);
    })
    .then(_ => {
        initInputSelect();
        initOutputMapping();
    })
    .catch(error => {
        log('Argh! ' + error);
    });
}

function writeWriteRecursive(cfg, inputCtrl, ctrl_chrc, data_chrc) {
    return new Promise(function(resolve, reject) {
        log('Set Input Ctrl CHRC... ' + inputCtrl[1]);
        ctrl_chrc.writeValue(inputCtrl)
        .then(_ => {
            log('Writing Input Data CHRC...');
            var tmpViewSize = cfg.byteLength - inputCtrl[1];
            if (tmpViewSize > 512) {
                tmpViewSize = 512;
            }
            var tmpView = new DataView(cfg.buffer, inputCtrl[1], tmpViewSize);
            return data_chrc.writeValue(tmpView);
        })
        .then(_ => {
            log('Input Data Written');
            inputCtrl[1] += Number(512);
            if (inputCtrl[1] < cfg.byteLength) {
                resolve(writeWriteRecursive(cfg, inputCtrl, ctrl_chrc, data_chrc));
            }
            else {
                resolve();
            }
        })
        .catch(error => {
            reject(error);
        });
    });
}

function writeInputCfg(cfgId, cfg) {
    return new Promise(function(resolve, reject) {
        let ctrl_chrc = null;
        let data_chrc = null;
        brService.getCharacteristic(brUuid[4])
        .then(chrc => {
            ctrl_chrc = chrc;
            return brService.getCharacteristic(brUuid[5])
        })
        .then(chrc => {
            var inputCtrl = new Uint16Array(2);
            inputCtrl[0] = Number(cfgId);
            inputCtrl[1] = 0;
            data_chrc = chrc;
            return writeWriteRecursive(cfg, inputCtrl, ctrl_chrc, data_chrc);
        })
        .then(_ => {
            resolve(cfg);
        })
        .catch(error => {
            reject(error);
        });
    });
}

function saveInput() {
    var preset = Number(document.getElementById("presetsName").value);
    var nbMapping = presets[preset].map.length;
    var cfgSize = nbMapping*8 + 3;
    var cfg = new Uint8Array(cfgSize);
    var cfgId = Number(document.getElementById("inputSelect").value);

    var j = 0;
    cfg[j++] = 0;
    cfg[j++] = 0;
    cfg[j++] = nbMapping;

    log('Input: '+ cfgId + 'Preset: ' + preset);
    for (var i = 0; i < nbMapping; i++) {
        cfg[j++] = btn[presets[preset].map[i][0]];
        cfg[j++] = btn[presets[preset].map[i][1]];
        cfg[j++] = presets[preset].map[i][2] + cfgId;
        cfg[j++] = presets[preset].map[i][3];
        cfg[j++] = presets[preset].map[i][4];
        cfg[j++] = presets[preset].map[i][5];
        cfg[j++] = presets[preset].map[i][6];
        cfg[j++] = Number(presets[preset].map[i][7]) | (Number(presets[preset].map[i][8]) << 4);
    }

    return new Promise(function(resolve, reject) {
        writeInputCfg(cfgId, cfg)
        .then(_ => {
            log('Input ' + cfgId + ' Config saved');
            resolve();
        })
        .catch(error => {
            reject(error);
        });
    });
}

function btConn() {
    log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice(
        {filters: [{name: 'BlueRetro'}],
        optionalServices: [brUuid[0]]})
    .then(device => {
        log('Connecting to GATT Server...');
        bluetoothDevice = device;
        return bluetoothDevice.gatt.connect();
    })
    .then(server => {
        log('Getting BlueRetro Service...');
        return server.getPrimaryService(brUuid[0]);
    })
    .then(service => {
        log('Init Cfg DOM...');
        brService = service;
        initBlueRetroCfg();
        document.getElementById("divBtConn").style.display = 'none';
        document.getElementById("divInputCfg").style.display = 'block';
    })
    .catch(error => {
        log('Argh! ' + error);
    });
}

function selectInput() {
    document.getElementById("desc").textContent = presets[Number(this.value)].desc;
}
