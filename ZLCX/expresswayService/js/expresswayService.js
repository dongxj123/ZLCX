var area=0;//0左，1右（2）,2返回
var areaSize=2;
var line0Size=1;
var line0Pos=0;
var line1Size=2;
var line1Pos=0;
var line2Size=1;
var line2Pos=0;
function init(){
	attachEvent();
	focMove(0);
}
function attachEvent() {
    document.onkeydown = grabEvent;
    document.onsystemevent = grabEvent;
    document.onirkeypres = grabEvent;
}
//焦点移动
function focMove(_num){
	if(area==0){
		if(line0Pos + _num < line0Size && line0Pos + _num >=0){
			line0Pos+=_num;
			$("lineFoc").className="lineFoc"+area+line0Pos;
		}else if(line0Pos + _num <0){
		}
	}
	if(area==1){
		if(line1Pos + _num < line1Size && line1Pos + _num >=0){
			line1Pos+=_num;
            $("lineFoc").className="lineFoc"+area+line1Pos;
		}else if(line1Pos + _num <0){
		}
    }
	if(area==2){
		if(line2Pos + _num < line2Size && line2Pos + _num >=0){
			line2Pos+=_num;
            $("lineFoc").className="lineFoc"+area+line2Pos;
		}else if(line2Pos + _num <0){
		}
    }
}
function doselect(){
    if (area == 0) {
        if (line0Pos == 0) {
            window.location.href = "../commList/xs.html?type=fzzj&returnUrl=" + location.href;
        } 
    } else if (area == 1) {
        if (line1Pos == 0) {
            var __videoUrl = videoList[videoPos];
            window.location.href = "../vod/vodPlay.htm?rtspUrl=" + __videoUrl;
        } else if (line1Pos == 1) {
            //重要信息详情
        	getDetail(listJson.data.results[newsPos].id);
        }
    }
    else if (area == 2) {
        window.location.href="../homePage/homePage.html";
    }
}

function grabEvent() {
    var key_code = event.which != undefined ? event.which : event.keyCode;
    switch (key_code) {
        case 1: //up
        case 38:
            if(area==0){
                area=2;
                focMove(0);
            }else if(area==1){
                if(line1Pos==0){
                    area=2;
                    focMove(0);
                }else if(line1Pos==1){
                    focMove(-1);
                }
        	}
            return 0;
            break;
        case 2: //downarea=2;
        focMove(0);
        case 40:
        	if(area==1){
        		focMove(1);
        	}else if(area==2){
        		area=1;
        		focMove(0);
        	}
            return 0;
            break;
        case 3: //left
        case 37:
        	if(area==1){
                area=0;
                focMove(0);
        	}
            return 0;
            break;
        case 4: //right
        case 39:
        	if(area==0){
        		area=1;
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
        	window.location.href="../homePage/homePage.html";
            return 0;
            break;

    }
}