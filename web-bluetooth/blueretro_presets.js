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
    "MOUSE_LY_DOWN":2,
    "MOUSE_LY_UP":3,
    "MOUSE_RX_LEFT":4,
    "MOUSE_RX_RIGHT":5,
    "MOUSE_RY_DOWN":6,
    "MOUSE_RY_UP":7,
    "MOUSE_LEFT":16,
    "MOUSE_MIDDLE":17,
    "MOUSE_RIGHT":18,
    "MOUSE_4":19,
    "MOUSE_5":20,
    "MOUSE_6":21,
    "MOUSE_7":22,
    "MOUSE_8":23,
    "KB_A":0,
    "KB_D":1,
    "KB_S":2,
    "KB_W":3,
    "KB_J":4,
    "KB_L":5,
    "KB_K":6,
    "KB_I":7,
    "KB_LEFT":8,
    "KB_RIGHT":9,
    "KB_DOWN":10,
    "KB_UP":11,
    "KB_COMMA":12,
    "KB_SLASH":13,
    "KB_DOT":14,
    "KB_SEMICOLON":15,
    "KB_Q":16,
    "KB_R":17,
    "KB_E":18,
    "KB_F":19,
    "KB_ESC":20,
    "KB_HASH":21,
    "KB_LWIN":22,
    "KB_APOSTROPHE":23,
    "KB_Z":24,
    "KB_TAB":25,
    "KB_LEFTBRACE":26,
    "KB_LCTRL":27,
    "KB_X":28,
    "KB_LSHIFT":29,
    "KB_RIGHTBRACE":30,
    "KB_SPACE":31,
    "KB_B":32,
    "KB_C":33,
    "KB_G":34,
    "KB_H":35,
    "KB_M":36,
    "KB_N":37,
    "KB_O":38,
    "KB_T":39,
    "KB_U":40,
    "KB_V":41,
    "KB_Y":42,
    "KB_1":43,
    "KB_2":44,
    "KB_3":45,
    "KB_4":46,
    "KB_5":47,
    "KB_6":48,
    "KB_7":49,
    "KB_8":50,
    "KB_9":51,
    "KB_0":52,
    "KB_ENTER":53,
    "KB_BACKSPACE":54,
    "KB_MINUS":55,
    "KB_EQUAL":56,
    "KB_BACKSLASH":57,
    "KB_GRAVE":58,
    "KB_CAPSLOCK":59,
    "KB_F1":60,
    "KB_F2":61,
    "KB_F3":62,
    "KB_F4":63,
    "KB_F5":64,
    "KB_F6":65,
    "KB_F7":66,
    "KB_F8":67,
    "KB_F9":68,
    "KB_F10":69,
    "KB_F11":70,
    "KB_F12":71,
    "KB_PSCREEN":72,
    "KB_SCROLL":73,
    "KB_PAUSE":74,
    "KB_INSERT":75,
    "KB_HOME":76,
    "KB_PAGEUP":77,
    "KB_DEL":78,
    "KB_END":79,
    "KB_PAGE_DOWN":80,
    "KB_NUMLOCK":81,
    "KB_KP_DIV":82,
    "KB_KP_MULTI":83,
    "KB_KP_MINUS":84,
    "KB_KP_PLUS":85,
    "KB_KP_ENTER":86,
    "KB_KP_1":87,
    "KB_KP_2":88,
    "KB_KP_3":89,
    "KB_KP_4":90,
    "KB_KP_5":91,
    "KB_KP_6":92,
    "KB_KP_7":93,
    "KB_KP_8":94,
    "KB_KP_9":95,
    "KB_KP_0":96,
    "KB_LALT":97,
    "KB_RCTRL":98,
    "KB_RSHIFT":99,
    "KB_RALT":100,
    "KB_RWIN":101,
};

var presetsName = [
    'Default PAD+KB+M',
    'Gamepad only',
    'N64 GoldenEye 007 / Perfect Dark 1.2',
    'N64 GoldenEye 007 / Perfect Dark 2.2 SP',
    'N64 GoldenEye 007 / Perfect Dark 2.2 MP',
];

var presets = [
    [   /* Default PAD+KB+M */
        [0, 0, 0, 100, 50, 135, 0, 0, 0],
        [1, 1, 0, 100, 50, 135, 0, 0, 0],
        [2, 2, 0, 100, 50, 135, 0, 0, 0],
        [3, 3, 0, 100, 50, 135, 0, 0, 0],
        [4, 4, 0, 100, 50, 135, 0, 0, 0],
        [5, 5, 0, 100, 50, 135, 0, 0, 0],
        [6, 6, 0, 100, 50, 135, 0, 0, 0],
        [7, 7, 0, 100, 50, 135, 0, 0, 0],
        [8, 8, 0, 100, 50, 135, 0, 0, 0],
        [9, 9, 0, 100, 50, 135, 0, 0, 0],
        [10, 10, 0, 100, 50, 135, 0, 0, 0],
        [11, 11, 0, 100, 50, 135, 0, 0, 0],
        [12, 12, 0, 100, 50, 135, 0, 0, 0],
        [13, 13, 0, 100, 50, 135, 0, 0, 0],
        [14, 14, 0, 100, 50, 135, 0, 0, 0],
        [15, 15, 0, 100, 50, 135, 0, 0, 0],
        [16, 16, 0, 100, 50, 135, 0, 0, 0],
        [17, 17, 0, 100, 50, 135, 0, 0, 0],
        [18, 18, 0, 100, 50, 135, 0, 0, 0],
        [19, 19, 0, 100, 50, 135, 0, 0, 0],
        [20, 20, 0, 100, 50, 135, 0, 0, 0],
        [21, 21, 0, 100, 50, 135, 0, 0, 0],
        [22, 22, 0, 100, 50, 135, 0, 0, 0],
        [23, 23, 0, 100, 50, 135, 0, 0, 0],
        [24, 24, 0, 100, 50, 135, 0, 0, 0],
        [25, 25, 0, 100, 50, 135, 0, 0, 0],
        [26, 26, 0, 100, 50, 135, 0, 0, 0],
        [27, 27, 0, 100, 50, 135, 0, 0, 0],
        [28, 28, 0, 100, 50, 135, 0, 0, 0],
        [29, 29, 0, 100, 50, 135, 0, 0, 0],
        [30, 30, 0, 100, 50, 135, 0, 0, 0],
        [31, 31, 0, 100, 50, 135, 0, 0, 0],
        [32, 32, 0, 100, 50, 135, 0, 0, 0],
        [33, 33, 0, 100, 50, 135, 0, 0, 0],
        [34, 34, 0, 100, 50, 135, 0, 0, 0],
        [35, 35, 0, 100, 50, 135, 0, 0, 0],
        [36, 36, 0, 100, 50, 135, 0, 0, 0],
        [37, 37, 0, 100, 50, 135, 0, 0, 0],
        [38, 38, 0, 100, 50, 135, 0, 0, 0],
        [39, 39, 0, 100, 50, 135, 0, 0, 0],
        [40, 40, 0, 100, 50, 135, 0, 0, 0],
        [41, 41, 0, 100, 50, 135, 0, 0, 0],
        [42, 42, 0, 100, 50, 135, 0, 0, 0],
        [43, 43, 0, 100, 50, 135, 0, 0, 0],
        [44, 44, 0, 100, 50, 135, 0, 0, 0],
        [45, 45, 0, 100, 50, 135, 0, 0, 0],
        [46, 46, 0, 100, 50, 135, 0, 0, 0],
        [47, 47, 0, 100, 50, 135, 0, 0, 0],
        [48, 48, 0, 100, 50, 135, 0, 0, 0],
        [49, 49, 0, 100, 50, 135, 0, 0, 0],
        [50, 50, 0, 100, 50, 135, 0, 0, 0],
        [51, 51, 0, 100, 50, 135, 0, 0, 0],
        [52, 52, 0, 100, 50, 135, 0, 0, 0],
        [53, 53, 0, 100, 50, 135, 0, 0, 0],
        [54, 54, 0, 100, 50, 135, 0, 0, 0],
        [55, 55, 0, 100, 50, 135, 0, 0, 0],
        [56, 56, 0, 100, 50, 135, 0, 0, 0],
        [57, 57, 0, 100, 50, 135, 0, 0, 0],
        [58, 58, 0, 100, 50, 135, 0, 0, 0],
        [59, 59, 0, 100, 50, 135, 0, 0, 0],
        [60, 60, 0, 100, 50, 135, 0, 0, 0],
        [61, 61, 0, 100, 50, 135, 0, 0, 0],
        [62, 62, 0, 100, 50, 135, 0, 0, 0],
        [63, 63, 0, 100, 50, 135, 0, 0, 0],
        [64, 64, 0, 100, 50, 135, 0, 0, 0],
        [65, 65, 0, 100, 50, 135, 0, 0, 0],
        [66, 66, 0, 100, 50, 135, 0, 0, 0],
        [67, 67, 0, 100, 50, 135, 0, 0, 0],
        [68, 68, 0, 100, 50, 135, 0, 0, 0],
        [69, 69, 0, 100, 50, 135, 0, 0, 0],
        [70, 70, 0, 100, 50, 135, 0, 0, 0],
        [71, 71, 0, 100, 50, 135, 0, 0, 0],
        [72, 72, 0, 100, 50, 135, 0, 0, 0],
        [73, 73, 0, 100, 50, 135, 0, 0, 0],
        [74, 74, 0, 100, 50, 135, 0, 0, 0],
        [75, 75, 0, 100, 50, 135, 0, 0, 0],
        [76, 76, 0, 100, 50, 135, 0, 0, 0],
        [77, 77, 0, 100, 50, 135, 0, 0, 0],
        [78, 78, 0, 100, 50, 135, 0, 0, 0],
        [79, 79, 0, 100, 50, 135, 0, 0, 0],
        [80, 80, 0, 100, 50, 135, 0, 0, 0],
        [81, 81, 0, 100, 50, 135, 0, 0, 0],
        [82, 82, 0, 100, 50, 135, 0, 0, 0],
        [83, 83, 0, 100, 50, 135, 0, 0, 0],
        [84, 84, 0, 100, 50, 135, 0, 0, 0],
        [85, 85, 0, 100, 50, 135, 0, 0, 0],
        [86, 86, 0, 100, 50, 135, 0, 0, 0],
        [87, 87, 0, 100, 50, 135, 0, 0, 0],
        [88, 88, 0, 100, 50, 135, 0, 0, 0],
        [89, 89, 0, 100, 50, 135, 0, 0, 0],
        [90, 90, 0, 100, 50, 135, 0, 0, 0],
        [91, 91, 0, 100, 50, 135, 0, 0, 0],
        [92, 92, 0, 100, 50, 135, 0, 0, 0],
        [93, 93, 0, 100, 50, 135, 0, 0, 0],
        [94, 94, 0, 100, 50, 135, 0, 0, 0],
        [95, 95, 0, 100, 50, 135, 0, 0, 0],
        [96, 96, 0, 100, 50, 135, 0, 0, 0],
        [97, 97, 0, 100, 50, 135, 0, 0, 0],
        [98, 98, 0, 100, 50, 135, 0, 0, 0],
        [100, 100, 0, 100, 50, 135, 0, 0, 0],
        [101, 101, 0, 100, 50, 135, 0, 0, 0],
    ],
    [   /* Gamepad only */
        [btn.PAD_LX_LEFT,  btn.PAD_LX_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LX_RIGHT, btn.PAD_LX_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_DOWN,  btn.PAD_LY_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_UP,    btn.PAD_LY_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_LEFT,  btn.PAD_RX_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_RIGHT, btn.PAD_RX_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_DOWN,  btn.PAD_RY_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_UP,    btn.PAD_RY_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_LEFT,  btn.PAD_LD_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_RIGHT, btn.PAD_LD_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_DOWN,  btn.PAD_LD_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_UP,    btn.PAD_LD_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RD_LEFT,  btn.PAD_RD_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RD_RIGHT, btn.PAD_RD_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RD_DOWN,  btn.PAD_RD_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RD_UP,    btn.PAD_RD_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_LEFT,  btn.PAD_RB_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_RIGHT, btn.PAD_RB_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_DOWN,  btn.PAD_RB_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_UP,    btn.PAD_RB_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MM,       btn.PAD_MM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MS,       btn.PAD_MS,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MT,       btn.PAD_MT,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MQ,       btn.PAD_MQ,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LM,       btn.PAD_LM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LS,       btn.PAD_LS,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LT,       btn.PAD_LT,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LJ,       btn.PAD_LJ,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RM,       btn.PAD_RM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RS,       btn.PAD_RS,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RT,       btn.PAD_RT,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RJ,       btn.PAD_RJ,       0, 100, 50, 135, 0, 0, 0],
    ],
    [   /* N64 GoldenEye 007 / Perfect Dark 1.2 */
        [btn.PAD_LX_LEFT,  btn.PAD_RX_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LX_RIGHT, btn.PAD_RX_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_DOWN,  btn.PAD_RY_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_UP,    btn.PAD_RY_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_LEFT,  btn.PAD_LX_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_RIGHT, btn.PAD_LX_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_DOWN,  btn.PAD_LY_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_UP,    btn.PAD_LY_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_LEFT,  btn.PAD_LD_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_RIGHT, btn.PAD_LD_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_DOWN,  btn.PAD_LD_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_UP,    btn.PAD_LD_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LM,       btn.PAD_LM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RM,       btn.PAD_RM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LS,       btn.PAD_LS,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RS,       btn.PAD_RS,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_LEFT,  btn.PAD_RB_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_DOWN,  btn.PAD_RB_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MM,       btn.PAD_MM,       0, 100, 50, 135, 0, 0, 0],
    ],
    [   /* N64 GoldenEye 007 / Perfect Dark 2.2 SP */
        [btn.PAD_LX_LEFT,  btn.PAD_LX_LEFT,  1, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LX_RIGHT, btn.PAD_LX_RIGHT, 1, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_DOWN,  btn.PAD_LY_DOWN,  1, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_UP,    btn.PAD_LY_UP,    1, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_LEFT,  btn.PAD_LX_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_RIGHT, btn.PAD_LX_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_DOWN,  btn.PAD_LY_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_UP,    btn.PAD_LY_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_LEFT,  btn.PAD_LD_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_RIGHT, btn.PAD_LD_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_DOWN,  btn.PAD_LD_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_UP,    btn.PAD_LD_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LM,       btn.PAD_LM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RM,       btn.PAD_RM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LS,       btn.PAD_LM,       1, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RS,       btn.PAD_RM,       1, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_LEFT,  btn.PAD_RB_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_DOWN,  btn.PAD_RB_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MM,       btn.PAD_MM,       0, 100, 50, 135, 0, 0, 0],
    ],
    [   /* N64 GoldenEye 007 / Perfect Dark 2.2 MP */
        [btn.PAD_LX_LEFT,  btn.PAD_LX_LEFT,  2, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LX_RIGHT, btn.PAD_LX_RIGHT, 2, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_DOWN,  btn.PAD_LY_DOWN,  2, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LY_UP,    btn.PAD_LY_UP,    2, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_LEFT,  btn.PAD_LX_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RX_RIGHT, btn.PAD_LX_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_DOWN,  btn.PAD_LY_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RY_UP,    btn.PAD_LY_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_LEFT,  btn.PAD_LD_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_RIGHT, btn.PAD_LD_RIGHT, 0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_DOWN,  btn.PAD_LD_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LD_UP,    btn.PAD_LD_UP,    0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LM,       btn.PAD_LM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RM,       btn.PAD_RM,       0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_LS,       btn.PAD_LM,       2, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RS,       btn.PAD_RM,       2, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_LEFT,  btn.PAD_RB_LEFT,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_RB_DOWN,  btn.PAD_RB_DOWN,  0, 100, 50, 135, 0, 0, 0],
        [btn.PAD_MM,       btn.PAD_MM,       0, 100, 50, 135, 0, 0, 0],
    ],
];

const maxMainInput = 12;
const maxSubInput = 4;
const maxOutput = 12;
const maxMax = 255;
const maxThres = 100;
const maxTurbo = 16;

var bluetoothDevice;
var maxMapping = 255;
var nbMapping = 1;
let brService = null;
var mappingElement = null;
let inputChrc = null;

function initInputSelect() {
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
    for (var i = 0; i < presetsName.length; i++) {
        var option  = document.createElement("option");
        option.value = i;
        option.text = presetsName[i];
        main.add(option);
    }
    main.id = "presetsName";
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

function fetchMap(files, idx) {
    var presets = new Array();
    return new Promise(function(resolve, reject) {
        fetch("map/" + files[idx].name)
        .then(rsp => {
            return rsp.json();
        })
        .then(data => {
            presets.push(data);
            log(idx + " " + presets[idx].name);
            if (idx < files.length) {
                resolve(fetchMap(files, ++idx));
            }
            else {
                log(presets);
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
    .then(data => {
        return fetchMap(data, 0);
    })
    .then(presets => {
        log(presets);
        log(presets[0].name);
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
    var nbMapping = presets[preset].length;
    var cfgSize = nbMapping*8 + 3;
    var cfg = new Uint8Array(cfgSize);
    var cfgId = Number(document.getElementById("inputSelect").value);

    var j = 0;
    cfg[j++] = 0;
    cfg[j++] = 0;
    cfg[j++] = nbMapping;

    log('Input: '+ cfgId + 'Preset: ' + preset);
    for (var i = 0; i < nbMapping; i++) {
        cfg[j++] = presets[preset][i][0];
        cfg[j++] = presets[preset][i][1];
        cfg[j++] = presets[preset][i][2] + cfgId;
        cfg[j++] = presets[preset][i][3];
        cfg[j++] = presets[preset][i][4];
        cfg[j++] = presets[preset][i][5];
        cfg[j++] = presets[preset][i][6];
        cfg[j++] = Number(presets[preset][i][7]) | (Number(presets[preset][i][8]) << 4);
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
