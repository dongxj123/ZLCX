var area=0;//0
var areaSize=2;
var line0Size=2;
var line0Pos=0;
var line1Size=6;
var line1Pos=0;
// var newsPos=0;
// var newsSize = 3;
var newsPageNum=1;
var newstotalPage;
var newsPageSize=6;
function init(){
    attachEvent();
    getHwEventInfo();
    focMove(0);
}
function getHwEventInfo(){
    $AJAX(
            {
                url: reqUrl +"api/trafficapi/queryHwEventInfo",
                method: "get",
                async: true,
                success:
                    function (resp) {
                        eval("jsonData = " + resp.responseText);
                        if(jsonData.code=="200"){
                            newsTotalPage=Math.ceil(jsonData.data.length/6);
                        	trunPage(0);
                        }
                        
                    },
                failed:
                    function (resp) {
                    }
            });
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
                        	trunPage(0);
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
        if(line0Pos==0){//高速
            $("time"+i).innerHTML="["+_data[i].startTime.split(" ")[0]+"]";
        }else if(line0Pos==1){//城市
            $("time"+i).innerHTML="["+_data[i].publishTime.split(" ")[0]+"]";
        }
    }
}

//焦点移动
function focMove(_num){
	if(area==0){
        $("news"+line1Pos).className="news";
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
            for(var i=0;i<6;i++){
                $("news"+i).className="news";
            }
            $("news"+line1Pos).className="news";
            line1Pos+=_num;
            $("news"+line1Pos).className="newsFoc";
		}else{
            trunPage(_num);
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
        line1Pos=0;
        newsPageNum=1;
        if (line0Pos == 0) {
            getHwEventInfo();
        } else if (line0Pos == 1) {
            getTrafficInformation();
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