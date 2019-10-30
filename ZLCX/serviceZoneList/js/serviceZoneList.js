var area=1;//0返回，1市，2列表
var areaSize=3;
var line0Size=1;
var line0Pos=0;
var line1Size=8;
var line1Pos = 0;
var line2Size = 4;
var line2Pos = 0;
// var newsPos=0;
// var newsSize = 3;
var newsPageNum=1;
var newstotalPage;
var newsPageSize=6;
function init() {
    attachEvent();
    focMove(0);
    //line1Pos = location.href.getQueryString("line1Pos") ? Number(location.href.getQueryString("line1Pos")) : 0;
    //newsPageNum = location.href.getQueryString("newsPageNum") ? Number(location.href.getQueryString("newsPageNum")) : 1;
}
function getTrafficInformation(){
    $AJAX(
            {
                url: reqUrl +"api/trafficapi/queryTrafficInformation",
                method: "get",
                async: true,
                success:
                    function (resp) {
                        eval("jsonData = " + resp.responseText);
                        if(jsonData.code=="200"){
                            newsTotalPage=Math.ceil(jsonData.data.length/6);
                        	initData();
                        }
                        
                    },
                failed:
                    function (resp) {
                    }
            });
}
var wordSize = 25;
function showNews(_data){
    for(var i=0;i<6;i++){
        $("title"+i).innerHTML="";
        $("time"+i).innerHTML="";
    }
    for(var i=0;i<_data.length;i++){
        $("title"+i).innerHTML=getWordSize(_data[i].content);
        if(selectedItem==0){//高速
            $("time"+i).innerHTML="["+_data[i].startTime.split(" ")[0]+"]";
        }else if(selectedItem==1){//城市
            $("time"+i).innerHTML="["+_data[i].publishTime.split(" ")[0]+"]";
        }
    }
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
		    if (line1Pos + _num < line1Size && line1Pos + _num >= 0) {
		        line1Pos += _num;
		        $("lineFoc").className = "lineFoc" + area + line1Pos;
		    }
		}
	}
    if (area == 2) {
        if (line2Pos + _num < line2Size && line2Pos + _num >= 0) {
            if (line2Pos + _num < line2Size && line2Pos + _num >= 0) {
                line2Pos += _num;
                $("lineFoc").className = "lineFoc" + area + line2Pos;
            }
        }
    }
}
function trunPage(_num){
    var showDatas;
    if(newsPageNum+_num>0 && newsPageNum+_num < newsTotalPage){
        newsPageNum+=_num;
        showDatas=jsonData.data.slice((newsPageNum-1)*6,(newsPageNum-1)*6+newsPageSize);
        line1Size=showDatas.length;
        if(_num==1){
            line1Pos=0;
        }else if(_num==-1){
            line1Pos=5;
        }
        focMove(0);
        showNews(showDatas);
    }else if(newsPageNum+_num == newsTotalPage){
        newsPageNum+=_num;
        showDatas=jsonData.data.slice((newsPageNum-1)*6);
        line1Size=showDatas.length;
        line1Pos=0;
        focMove(0);
        showNews(showDatas);
    }
   
}

function doselect(){
    if (area == 0) {
        window.location.href = getCookie("kuaixunListReturnUrl");
    } else if (area == 1) {
        for (var i = 0; i < 8; i++) {
            $("line1" + i).className = "line1" + i;
        }
        $("line1" + line1Pos).className = "line1" + line1Pos + "Selected"
    }else if (area == 2) {

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
                if (line2Pos == 0 || line2Pos == 1) {
                    area = 0;
                    focMove(0);
                } else {
                    focMove(-2);
                }
            }
            return 0;
            break;
        case 2: //down
        case 40:
            if (area == 0) {
                area = 2;
                line2Pos = 1;
                focMove(0);
            } else if (area == 1) {
                focMove(1);
            } else if (area == 2) {
                if (line2Pos == 0 || line2Pos == 1) {
                    focMove(2);
                }
            }
            return 0;
            break;
        case 3: //left
        case 37:
            if (area == 2) {
                if (line2Pos == 0 || line2Pos == 2) {
                    area = 1;
                    focMove(0);
                } else {
                    focMove(-1);
                }
            }
            return 0;
            break;
        case 4: //right
        case 39:
            if (area == 1) {
                area = 2;
                focMove(0);
            } else if (area == 2) {
                if (line2Pos != 1) {
                    focMove(1);
                }
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
            window.location.href = getCookie("kuaixunListReturnUrl");
            return 0;
            break;
        case 283:
            return 0;
            break;
    }
}