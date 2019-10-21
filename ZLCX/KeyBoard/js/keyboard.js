/***********************
***   Version:v1.1   ***
***   Date:20140221  ***
***   Author:XieWj   ***
***********************/

var _kb = null;
function SoftKeyboard() {
    this._keys = [
            [{ "text": ",", "value": ",", "text_shift": "<", "value_shift": "<", "type": 0 },
            { "text": ".", "value": ".", "text_shift": ">", "value_shift": ">", "type": 0 },
            { "text": "/", "value": "/", "text_shift": "?", "value_shift": "?", "type": 0 },
            { "text": ";", "value": ";", "text_shift": ":", "value_shift": ":", "type": 0 },
            { "text": "'", "value": "'", "text_shift": "\"", "value_shift": "\"", "type": 0 },
            { "text": "[", "value": "[", "text_shift": "{", "value_shift": "{", "type": 0 },
            { "text": "]", "value": "]", "text_shift": "}", "value_shift": "}", "type": 0 },
            { "text": "\\", "value": "\\", "text_shift": "|", "value_shift": "|", "type": 0 },
            { "text": "-", "value": "-", "text_shift": "_", "value_shift": "_", "type": 0 },
            { "text": "=", "value": "=", "text_shift": "+", "value_shift": "+", "type": 0 },
            { "text": "清 空", "value": "", "text_shift": "", "value_shift": "", "type": 1 }
            ],

            [{ "text": "1", "value": "1", "text_shift": "!", "value_shift": "!", "type": 0 },
            { "text": "2", "value": "2", "text_shift": "@", "value_shift": "@", "type": 0 },
            { "text": "3", "value": "3", "text_shift": "#", "value_shift": "#", "type": 0 },
            { "text": "4", "value": "4", "text_shift": "$", "value_shift": "$", "type": 0 },
            { "text": "5", "value": "5", "text_shift": "%", "value_shift": "%", "type": 0 },
            { "text": "6", "value": "6", "text_shift": "^", "value_shift": "^", "type": 0 },
            { "text": "7", "value": "7", "text_shift": "&", "value_shift": "&", "type": 0 },
            { "text": "8", "value": "8", "text_shift": "*", "value_shift": "*", "type": 0 },
            { "text": "9", "value": "9", "text_shift": "(", "value_shift": "(", "type": 0 },
            { "text": "0", "value": "0", "text_shift": ")", "value_shift": ")", "type": 0 },
            { "text": "退 格", "value": "", "text_shift": "", "value_shift": "", "type": 2 }
            ],

            [{ "text": "q", "value": "q", "text_shift": "Q", "value_shift": "Q", "type": 0 },
            { "text": "w", "value": "w", "text_shift": "W", "value_shift": "W", "type": 0 },
            { "text": "e", "value": "e", "text_shift": "E", "value_shift": "E", "type": 0 },
            { "text": "r", "value": "r", "text_shift": "R", "value_shift": "R", "type": 0 },
            { "text": "t", "value": "t", "text_shift": "T", "value_shift": "T", "type": 0 },
            { "text": "y", "value": "y", "text_shift": "Y", "value_shift": "Y", "type": 0 },
            { "text": "u", "value": "u", "text_shift": "U", "value_shift": "U", "type": 0 },
            { "text": "i", "value": "i", "text_shift": "I", "value_shift": "I", "type": 0 },
            { "text": "o", "value": "o", "text_shift": "O", "value_shift": "O", "type": 0 },
            { "text": "p", "value": "p", "text_shift": "P", "value_shift": "P", "type": 0 },
            { "text": "确 认", "value": "", "text_shift": "", "value_shift": "", "type": 3 }
            ],

            [{ "text": "a", "value": "a", "text_shift": "A", "value_shift": "A", "type": 0 },
            { "text": "s", "value": "s", "text_shift": "S", "value_shift": "S", "type": 0 },
            { "text": "d", "value": "d", "text_shift": "D", "value_shift": "D", "type": 0 },
            { "text": "f", "value": "f", "text_shift": "F", "value_shift": "F", "type": 0 },
            { "text": "g", "value": "g", "text_shift": "G", "value_shift": "G", "type": 0 },
            { "text": "h", "value": "h", "text_shift": "H", "value_shift": "H", "type": 0 },
            { "text": "j", "value": "j", "text_shift": "J", "value_shift": "J", "type": 0 },
            { "text": "k", "value": "k", "text_shift": "K", "value_shift": "K", "type": 0 },
            { "text": "l", "value": "l", "text_shift": "L", "value_shift": "L", "type": 0 },
            { "text": "切 换", "value": "", "text_shift": "", "value_shift": "", "type": 4 }
            ],

            [{ "text": "z", "value": "z", "text_shift": "Z", "value_shift": "Z", "type": 0 },
            { "text": "x", "value": "x", "text_shift": "X", "value_shift": "X", "type": 0 },
            { "text": "c", "value": "c", "text_shift": "C", "value_shift": "C", "type": 0 },
            { "text": "v", "value": "v", "text_shift": "V", "value_shift": "V", "type": 0 },
            { "text": "b", "value": "b", "text_shift": "B", "value_shift": "B", "type": 0 },
            { "text": "n", "value": "n", "text_shift": "N", "value_shift": "N", "type": 0 },
            { "text": "m", "value": "m", "text_shift": "M", "value_shift": "M", "type": 0 },
            { "text": "", "value": "", "text_shift": "", "value_shift": "", "type": 5 },
            { "text": "空 格", "value": " ", "text_shift": "空 格", "value_shift": " ", "type": 0 }
            ],

            [{ "text": "", "value": "", "text_shift": "", "value_shift": "", "type": -1 }
            ]

            ];
    this._skinId = 0;
    this._skinName = ["default", "wp8", "white"];
    this._board = document.createElement("div");
    this._board.className = "bg" + "_" + this._skinName[this._skinId];
    for (i = 0; i < this._keys.length; i++) {
        for (j = 0; j < this._keys[i].length; j++) {
            var charDiv = document.createElement("div");
            charDiv.innerText = this._keys[i][j].text;
            charDiv.className = "label" + "_" + this._skinName[this._skinId] + " key" + i + "_" + j + "_" + this._skinName[this._skinId];
            this._board.appendChild(charDiv);
        }
    }
    this._focusElement = document.createElement("div");
    this._focusElement.className = "focus" + "_" + this._skinName[this._skinId];
    this._board.appendChild(this._focusElement);
    this._focus=new KeyboardFucos();
}

SoftKeyboard.prototype = {
    _screenWidth: 1280,
    _screenHeight: 720,
    _isShifted: false,
    _alignCenter: false,

    _focusElement: undefined,
    _inputElement: undefined,

    pop:
        function (inputElement) {
            //this.close();
            var boardDiv = this._board;
            this._focus = new KeyboardFucos();
            this._inputElement = inputElement;
            var input = inputElement;
            if (input.charArray == undefined)
                input.charArray = new Array();
            input.style.overflow = "hidden";
            input.parentNode.appendChild(boardDiv);
            var iTop = parseInt(getCurrentStyle(input, "top"));
            var iLeft = parseInt(getCurrentStyle(input, "left"));
            var iWidth = parseInt(getCurrentStyle(input, "width"));
            var iHeight = parseInt(getCurrentStyle(input, "height"));
            var bWidth = parseInt(getCurrentStyle(boardDiv, "width"));
            var bHeight = parseInt(getCurrentStyle(boardDiv, "height"));
            if (iTop + iHeight + bHeight <= this._screenHeight)
                boardDiv.style.top = (iTop + iHeight + 2) + "px";
            else
                boardDiv.style.top = (iTop - bHeight) + "px";

            if (!this._alignCenter) {
                if (iLeft + bWidth <= this._screenWidth)
                    boardDiv.style.left = iLeft + "px";
                else
                    boardDiv.style.left = (iLeft + iWidth - bWidth) + "px";
            }
            else {
                boardDiv.style.left = (this._screenWidth - bWidth) / 2 + "px";
            }

            document.onkeydown = keyDownEvent;
            document.onkeyup = keyUpEvent;
            //document.onkeypress = sytemEvent;
            document.onsystemevent = keyDownEvent;
            document.onirkeypres = keyDownEvent;

            this._changeFocus(this._focus);
            _kb = this;
        },
    close:
        function () {
            if (this._board != undefined)
                this._board.parentNode.removeChild(this._board);
            this._focus.x = 0;
            this._focus.y = 0;
            this._isShifted = false;
            if (this._inputElement.hasChildNodes()) {
                var textDiv = this._inputElement.firstChild;
                this._inputElement.text = textDiv.innerText;
            }
            this.onClose();
        },
    onClose:
        function () {

        },
    _keyUp:
        function () {
            this._focusElement.className = "focus" + "_" + this._skinName[this._skinId] + " key" + this._focus.y + "_" + this._focus.x + "_" + this._skinName[this._skinId] + " focus" + this._focus.y + "_" + this._focus.x + "_" + this._skinName[this._skinId];
        },
    _keyDown:
        function () {
            this._focusElement.className = "focus" + "_" + this._skinName[this._skinId] + " key" + this._focus.y + "_" + this._focus.x + "_" + this._skinName[this._skinId] + " focus" + this._focus.y + "_" + this._focus.x + "_d_" + this._skinName[this._skinId];
            var input = this._inputElement;
            var type = this._getFocusKey().type;
            if (type == 0) {//字符按键

                var c = this._getFocusKey().value;
                if (this._isShifted)
                    c = this._getFocusKey().value_shift;
                input.charArray.push(c);
                {
                    if (input.hasChildNodes()) {
                        var textDiv = input.firstChild;
                        if (input.maxlength == undefined || input.maxlength < 1 || textDiv.innerText.length < input.maxlength)
                            textDiv.innerHTML = HtmlEncode(textDiv.innerText + c);
                    }
                    else {
                        var textDiv = document.createElement("div");
                        textDiv.style.position = "absolute";
                        //textDiv.style.border = "1px solid green";
                        textDiv.style.whiteSpace = "nowrap";
                        textDiv.innerHTML = HtmlEncode(c);
                        textDiv.style.left = "0px";
                        input.appendChild(textDiv);
                    }
                    setTimeout("_kb._updateInputDisplay();", 10);
                }
            }
            else if (type == 1)//清除键
            {
                if (input.hasChildNodes()) {
                    var textDiv = input.firstChild;
                    textDiv.innerHTML = "";
                    input.charArray = new Array();
                    setTimeout("_kb._updateInputDisplay();", 10);
                }
            }
            else if (type == 2)//退格键
            {
                if (input.hasChildNodes()) {
                    var textDiv = input.firstChild;
                    var text = (textDiv.innerText);
                    if (input.charArray.length > 0) {
                        var key_value = input.charArray.pop();
                        textDiv.innerHTML = HtmlEncode(text.substring(0, text.length - key_value.length));
                        setTimeout("_kb._updateInputDisplay();", 10);
                    }

                }
            }
            else if (type == 3)//确认键
            {
                this.close();
                this.onEnter();
            }
            else if (type == 4)//切换键
            {
                this._shift();
            }
            else if (type == 5)//换肤
            {
                this._skinId++;
                if (this._skinId >= this._skinName.length)
                    this._skinId = 0;
                this._updateSkinDisplay();
            }
            else if (type == -1)//关闭键
            {
                this.close();
            }
        },
    onEnter:
        function () {

        },
    _changeFocus:
        function (_focus) {
            this._focusElement.className = "focus" + "_" + this._skinName[this._skinId] + " key" + _focus.y + "_" + _focus.x + "_" + this._skinName[this._skinId] + " focus" + _focus.y + "_" + _focus.x + "_" + this._skinName[this._skinId];
        },
    _getFocusKey:
        function () {
            return this._keys[this._focus.y][this._focus.x];
        },
    _setFocusKey:
        function (_focus) {
            this._focus.y = _focus.y;
            this._focus.x = _focus.x;
            this._changeFocus(_focus);
        },
    _shift:
        function () {
            if (this._board.hasChildNodes()) {
                var nodes = this._board.childNodes;
                var keys = this._keys;
                var k = 0;
                for (i = 0; i < keys.length; i++) {
                    for (j = 0; j < keys[i].length; j++) {
                        if (keys[i][j].type == 0) {
                            if (!this._isShifted) {
                                nodes[k].innerText = keys[i][j].text_shift;
                            }
                            else {
                                nodes[k].innerText = keys[i][j].text;
                            }
                        }
                        k++;
                    }
                }
                this._isShifted = !this._isShifted
            }
        },
    _updateInputDisplay:
        function () {
            var input = this._inputElement;
            if (input.hasChildNodes()) {
                var textDiv = input.firstChild;
                var inputWidth = parseInt(getCurrentStyle(input, "width"));
                var textWidth = parseInt(textDiv.offsetWidth);
                var leftMargin = inputWidth - textWidth;
                if (leftMargin < 0)
                    textDiv.style.left = leftMargin + "px";
                else
                    textDiv.style.left = "0px";
            }
        },
    setAlignCenter:
        function (_bool) {
            this._alignCenter = _bool;
        },
    _updateSkinDisplay:
        function () {
            this._board.className = "bg" + "_" + this._skinName[this._skinId];
            var nodes = this._board.childNodes;
            var keys = this._keys;
            var k = 0;
            for (i = 0; i < keys.length; i++) {
                for (j = 0; j < keys[i].length; j++) {
                    nodes[k].className = "label" + "_" + this._skinName[this._skinId] + " key" + i + "_" + j + "_" + this._skinName[this._skinId];
                    k++;
                }
            }
            this._focusElement.className = "focus key" + this._focus.y + "_" + this._focus.x + "_" + this._skinName[this._skinId] + " focus" + this._focus.y + "_" + this._focus.x + "_d_" + this._skinName[this._skinId];
        },
    setSkin:
        function (skinId) {
            if (skinId < this._skinName.length) {
                this._skinId = skinId;
                this._updateSkinDisplay();
            }
        }

}

function getCurrentStyle(obj, prop) {
    if (obj.currentStyle) {
        return obj.currentStyle[prop];
    }
    else if (window.getComputedStyle) {
        propprop = prop.replace(/([A-Z])/g, "-$1");
        propprop = prop.toLowerCase();
        return document.defaultView.getComputedStyle(obj, null)[prop];
    }
    return null;
}

function KeyboardFucos() { }
KeyboardFucos.prototype = {
    x: 0,
    y: 0
}

function HtmlDecode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
}

function HtmlEncode(text) {
    return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/ /g, '&nbsp;');
}

function keyUpEvent() {
    var key_code = event.which != undefined ? event.which : event.keyCode;
    switch (key_code) {

        case 13: //enter

        case 48: //0
        case 49: 
        case 50: 
        case 51: 
        case 52: 
        case 53: 
        case 54: 
        case 55: 
        case 56:
        case 57: //9
            _kb._keyUp();
            return 0;
            break;
    }

}


function keyDownEvent() {
    var key_code = event.which != undefined ? event.which : event.keyCode;
    switch (key_code) {
        //up 
        case 1:
        case 28:
        case 269:
        case 38:
            _kb._focus.y--;
            if (_kb._focus.y < 0)
                _kb._focus.y = _kb._keys.length - 1;
            if (_kb._focus.x > _kb._keys[_kb._focus.y].length - 1)
                _kb._focus.x = _kb._keys[_kb._focus.y].length - 1;
            _kb._changeFocus(_kb._focus);

            return 0;
            break;
        //down 
        case 2:
        case 40:
        case 31:
        case 270:
            _kb._focus.y++;
            if (_kb._focus.y > _kb._keys.length - 1)
                _kb._focus.y = 0;
            if (_kb._focus.x > _kb._keys[_kb._focus.y].length - 1)
                _kb._focus.x = _kb._keys[_kb._focus.y].length - 1;
            _kb._changeFocus(_kb._focus);
            return 0;
            break;
        case 3: //left
        case 37:
        case 29:
        case 271:
            _kb._focus.x--;
            if (_kb._focus.x < 0)
                _kb._focus.x = _kb._keys[_kb._focus.y].length - 1;
            _kb._changeFocus(_kb._focus);
            return 0;
            break;
        //right  
        case 4:
        case 30:
        case 272:
        case 39:
            _kb._focus.x++;
            if (_kb._focus.x > _kb._keys[_kb._focus.y].length - 1)
                _kb._focus.x = 0;
            _kb._changeFocus(_kb._focus);
            return 0;
            break;
        case 13: //enter
            _kb._keyDown();
            return 0;
            break;
        case 340: //back
            _kb.close();
            return 0;
            break;

        case 48: //0
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57: //9
            var newFocus = new KeyboardFucos();
            var _x = key_code == 48 ? key_code = 9 : key_code - 48 - 1;
            newFocus.x = _x;
            newFocus.y = 1;
            _kb._setFocusKey(newFocus);
            _kb._keyDown();
            return 0;
            break;
    }
}