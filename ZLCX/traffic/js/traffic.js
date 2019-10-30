var area=2;//0返回，1市，2列表
var areaSize=3;
var line0Size=1;
var line0Pos=0;
var line1Size=8;
var line1Pos = 0;
var line2Size = 4;
var line2Pos = 0;

var line3Size = 0;
var line3Pos = 0;

var pageNum=1;
var totalPage;
var pageSize =5;
var cityCodes = ["0571", "0574", "0575", "0577", "0576", "0573", "0570", "0578"];
var cityCode="0571";
function init() {
    attachEvent();
    focMove(0);
}


var wordSize = 25;
function clearData() {
    for (var i = 0; i < 5; i++) {
        $("line2" + i + "name").innerHTML = "";
        $("line2" + i + "address").innerHTML = "";
        $("line2" + i + "tel").innerHTML = "";
    }
}
function ifRoll(word,_size) {
    if (word.length > _size) {
        return '<marquee id="scroll" direction="left" scrollamonut="10" scrolldelay="100">' + word + '</marquee>';
    } else {
        return word;
    }
}
function showData() {

    clearData();
    var results = jsonData.data.results;
    for (var i = 0; i < results.length; i++) {
        $("line2" + i + "name").innerHTML = results[i].name;
        $("line2" + i + "address").innerHTML = results[i].address;
        $("line2" + i + "tel").innerHTML = results[i].tel;
    }
    focMove(0);
}

//焦点移动
function focMove(_num){
	if(area==0){
		if(line0Pos + _num < line0Size && line0Pos + _num >=0){
			line0Pos+=_num;
			$("lineFoc").className="lineFoc"+area+line0Pos;
		}
	}
	if(area==1){
		if(line1Pos + _num < line1Size && line1Pos + _num >=0){
		    line1Pos += _num;
		    $("lineFoc").className = "lineFoc" + area + line1Pos;
		}
    }
    if (area == 2) {
        if (line2Pos + _num < line2Size && line2Pos + _num >= 0) {
            line2Pos += _num;
            $("lineFoc").className = "lineFoc" + area + line2Pos;
        }
    }
    if (area == 3) {
        $("lineFoc").style.display = "none";
	    if (line2Pos + _num < line2Size && line2Pos + _num >= 0) {
	        line2Pos += _num;
	        //$("lineFoc").className = "lineFoc" + area + line2Pos;
	        for (var i = 0; i < 5; i++) {
	            $("nameBG" + i).className = "bg1";
	        }
	        $("nameBG" + line2Pos).className = "bg1Foc";
	    } else if (line2Pos + _num >= line2Size) {
	        if (pageNum<totalPage) {
	            pageNum++;
	            line2Pos = 0;
	            getParkMsg(cityCode);
            }
	    } else if (line2Pos + _num < 0) {
            if(pageNum>1){
                pageNum--;
                line2Pos = 4;
                getParkMsg(cityCode);
            }
        }
	} else {
//	    for (var i = 0; i < 5; i++) {
//	        $("nameBG" + i).className = "bg1";
//	    }
//        $("lineFoc").style.display = "block";
    }
}


function doselect(){
    if (area == 0) {
        window.location.href = getCookie("trafficReturnUrl");
    } else if (area == 1) {
        for (var i = 0; i < 8; i++) {
            $("line1" + i).className = "line1" + i;
        }
        $("line1" + line1Pos).className = "line1" + line1Pos + "Selected"
        cityCode = cityCodes[line1Pos];
    }else if (area == 2) {
        for (var i = 0; i < 4; i++) {
            $("line2" + i).className = "line2" + i;
        }
        $("line2" + line2Pos).className = "line2" + line2Pos + "Selected";
        $("content" + line2Pos).style.display = "block";
        if(line2Pos==0){
            getControl(cityCode);
            getEvent(cityCode);
        }else if(line2Pos==1){
            
        }else if(line2Pos==2){

        } else if (line2Pos == 3) {
            
        }
        

    } 
}

function attachEvent() {
    document.onkeydown = grabEvent;
    document.onsystemevent = grabEvent;
    document.onirkeypres = grabEvent;
}

function grabEvent() {
    var key_code = event.which != undefined ? event.which : event.keyCode;
    switch (key_code) {
        case 1: //up
        case 38:
            if (area == 0) {

            } else if (area == 1) {
                if (line1Pos == 0) {
                    area = 0;
                    focMove(0);
                } else {
                    focMove(-1);
                }
            } else if (area == 2) {
                if (line2Pos == 0) {
                    area = 0;
                    focMove(0);
                } else {
                    focMove(-1);
                }
            } else if (area == 3) {
                if (line2Pos == 0 && pageNum==1) {
                    area = 0;
                    focMove(0);
                } else {
                    focMove(-1);
                }
            }
            return 0;
            break;
        case 2: //down
        case 40:
            if (area == 0) {
                area = 1;
                line1Pos = 0;
                focMove(0);
            } else if (area == 1) {
                focMove(1);
            } else if (area == 2) {
                focMove(1);
            }
            return 0;
            break;
        case 3: //left
        case 37:
            if (area == 2) {
                area = 1;
                focMove(0);
            }
            return 0;
            break;
        case 4: //right
        case 39:
            if (area == 1) {
                area = 2;
                focMove(0);
            }
            return 0;
            break;
        case 13: //enter
        	doselect();
            return 0;
            break;
        case 340: //back
        case 65:
        case 45:
        case 81:
            window.location.href = getCookie("trafficReturnUrl");
            return 0;
            break;
        case 283:
            return 0;
            break;
    }
}
function getControl(_cityCode) {
    $AJAX(
    {
        url: reqUrl + "api/trafficapi/queryCityTrafficControl?city=" + _cityCode + "&gmtCreate=2019-10-28",
        method: "get",
        async: true,
        success:
            function (resp) {
                eval("jsonData_control = " + resp.responseText);
                if (jsonData_control.code == "200") {
                    showControl();
                } else {
                }
            },
        failed:
            function (resp) {
            }
    });
}
function getEvent(_cityCode) {
    $AJAX(
    {
        url: reqUrl + "api/trafficapi/queryCityCongestionEvent?city=" + _cityCode,
        method: "get",
        async: true,
        success:
            function (resp) {
                eval("jsonData_event = " + resp.responseText);
                if (jsonData_event.code == "200") {
                    showEvent();
                } else {
                }
            },
        failed:
            function (resp) {
            }
    });
}
function getControl() {
    var data = jsonData_control.data[0];

}
function showEvent() {
    var data = jsonData_event.data[0];
}