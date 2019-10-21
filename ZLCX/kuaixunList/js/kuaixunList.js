var area=0;//0
var areaSize=2;
var line0Size=2;
var line0Pos=0;
var line1Size=6;
var line1Pos=0;

// var newsPos=0;
// var newsSize = 3;
var videoPos = 0;
// var newsPage=1;
// var newsPageSize=0;

function init(){
	attachEvent();
	focMove(0);
}
function getNews(){
    $AJAX(
            {
                url: reqUrl +"api/trafficapi/queryHwEventInfo",
                method: "get",
                async: true,
                success:
                    function (resp) {
                        eval("listJson = " + resp.responseText);
                        if(listJson.code=="200"){
                        	showNews();
                        }
                        
                    },
                failed:
                    function (resp) {
                    }
            });
}
var wordSize = 30;
function showNews(){
    var data=listJson.data;
    for(var i=0;i<3;i++){
        $("news"+i).innerHTML=getWordSize(data[i].content);
    }
}
//焦点移动
function focMove(_num){
	if(area==0){
		if(line0Pos + _num < line0Size && line0Pos + _num >=0){
			line0Pos+=_num;
			$("lineFoc").className="lineFoc"+area+line0Pos;
		}else if(line0Pos + _num <0){
//			area=4;
//			focMove(0);
		}
	}
	if(area==1){
		if(line1Pos + _num < line1Size && line1Pos + _num >=0){
			line1Pos+=_num;
            $("lineFoc").className="lineFoc"+area+line1Pos;
		}else if(line1Pos + _num <0){
//			area=4;
//			focMove(0);
		}
	}
	
}
function doselect(){
    if (area == 0) {
        if (line0Pos == 0) {
            //法治浙江
            window.location.href = "../commList/xs.html?type=fzzj&returnUrl=" + location.href;

            //window.location.href="../fzzj/fzzj.html";
        } else if (line0Pos == 1) {
            //法治服务
            window.location.href = "../fzfw/fzfw.html";
        } 
    } else if (area == 1) {
        if (line1Pos == 0) {
            //高速服务
            window.location.href = "../expresswayService/expresswayService.html";
        } else if (line1Pos == 2) {
            //重要信息详情
        	getDetail(listJson.data.results[newsPos].id);
        }else if (line1Pos == 1) {
            window.location.href = "../vod/vodPlay.htm?rtspUrl=" + homePageList.news[5].videoUrl;        }
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
        	if(area==0){
        		focMove(-1);
        	}else if(area==1){
        		focMove(-1);
        	}
            return 0;
            break;
        case 2: //down
        case 40:
        	if(area==0){
                focMove(1);
        	}else if(area==1){
        		focMove(1);
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

            return 0;
            break;
        case 283:
            return 0;
            break;
    }
}