var area=0;//0视频，1右边4块，2快讯，3右下角大图
var areaSize=4;
var line0Size=2;
var line0Pos=0;
var line1Size=4;
var line1Pos=0;
var line2Pos=0;
var line2Size=3;
var line3Size=1;
var line3Pos=0;
// var newsPos=0;
// var newsSize = 3;
var videoPos = 0;
// var newsPage=1;
// var newsPageSize=0;

function init(){
	attachEvent();
	// getList(homePageList,1,5);
	focMove(0);
	//$("lineFoc").className="lineFoc13";
    startVideo(0);
    getNews();
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
	if(area==2){
		if(line2Pos + _num < line2Size && line2Pos + _num >=0){
            line2Pos+=_num;
            $("news0").className="news";
            $("news1").className="news";
            $("news2").className="news";
            $("news"+line2Pos).className="newsFoc";
            $("lineFoc").style.display="none";
		}
	}else{
        $("news0").className="news";
        $("news1").className="news";
        $("news2").className="news";
        $("lineFoc").style.display="block";
    }
	if(area==3){
		$("lineFoc").className="lineFoc"+area+line3Pos;
	}
}

function callBack(){
	window.location.href = "../vod/vodPlay.htm?rtspUrl=" + detailJson.data.contentInfo;
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
    } else if (area == 2) {
        if (line2Pos == 0) {
            //我要看
            window.location.href = "../wyx/wyx.html";
        } else if (line2Pos == 1) {
            //我要学
            window.location.href = "../wyk/wyk.html";
        } else if (line2Pos == 2) {
            //我要查
            window.location.href = "../wyc/wyc.html";
        }
    } else if (area == 3) {
        //window.location.href = "http://21.254.182.203/vote/index.php/vote/article/index/id/73.html&returnUrl=" + location.href;
				// window.location.href = "http://21.254.182.203/vote/index.php/vote/article/index/id/73.html";		
                window.location.href = "../commList/xs.html?type=xfjwj&returnUrl=" + location.href;
    } else if (area == 4) {
        //		if(line4Pos==0){
        //			//出发小键盘
        //			keyborad.pop($("searchValue"));
        //		}
    }
}

//vod视频播放
function startVideo(__num) {
    try {
        DVB.stopAV();
        media.video.setPosition(188, 159, 448, 251);
        VOD.changeServer("isma_v2", "ip_ts");
        media.AV.open(videoList[__num], "VOD");
    }
    catch (e) { }
}

var videoList = ["rtsp://21.254.5.198:554/icms_icds_pub12/opnewsps12/Video/2019/01/03/10/20190102143738sifashouyeshipin120212300812021232140.ts?Contentid=CP23010020190102042404&isHD=0&isIpqam=0&owchid=hdds_ip&token=0ACC9191EB7010AC36F82E254714C685CEDDD70876056E54C6D10D778C1775CC8D1C12168C5DFB378586BF60E73FEA773B59A7E516139ABC9EA370A9F66437BB5E619108D826B91D0FBDCBE3FB08DC8C9A936786F7E7D6CC4F88D250FB3053E19896FD0DBF233E33A03BD8239889AB4AF61174AA60A2C0151FC8DE851BB2CB0ADC9C7F333BFDCC67C5692EAF2936B34F9E5F5FD93FEA1E92720498CCCED5291F61B5C216985BA2DF9EEF342685C07ACC9BA96865CE971F05A1C65B3D65F69332DE60FBD7836864257803A3EAB73DCAF997", "rtsp://21.254.5.198:554/icms_icds_pub11/opnewsps11/Video/2019/01/03/10/20190102143739sifashouyeshipin220212302272021232338.ts?Contentid=CP23010020190102043604&isHD=0&isIpqam=0&owchid=hdds_ip&token=84B9878C7E7010AC9FCE0D033C51D685D699510FFB7D4B0565144A581CCD544342DB0E59D13CBBF2147B94075123041B5FB1E2EFA78FD8CF5BED341E316AB5054313E24FD677C69739E77A3218C649369E3D14C0CDCE950CB1158C681B1195B3B5C60859E2DC9E4518B5501DD52BE474A9738669851322FFEDE331587A1B3CF6F14FFA2F7D1649C1BE3A437371D84709FDE59A2CE0A37E5BC974E8DA1B759E1DB6141093286C155A6BE45E52A81CF9FAF6DC681D6B330AA50C8C255FECA6F4F1D3C9E95948EAA252B319B8100A4F88EFD9"];


//vod视频退出
function stopVideo() {
    try {
        media.AV.stop();
        media.AV.close();
        DVB.stopAV();
    }
    catch (e) { }
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
        		if(line1Pos==2 || line1Pos==3){
        			focMove(-2);
        		}
        	}else if(area==3){
                area=1;
                line1Pos=2;
                focMove(0);
        	}else if(area==2){
                if(line2Pos==0){
                    line2Pos=0;
                    area=0;
                    focMove(0);
                }else{
                    focMove(-1);
                }
        	}
            return 0;
            break;
        case 2: //down
        case 40:
        	if(area==0){
                if(line0Pos==0){
        			focMove(1);
        		}else if(line0Pos==1){
                    area=2;
                    line2Pos=0;
                    focMove(0);
                }
        	}else if(area==1){
        		if(line1Pos==0 || line1Pos==1){
        			focMove(2);
        		}else if(line1Pos==2 || line1Pos==3){
                    area=3;
                    focMove(0);
                }
        	}else if(area==2){
        		focMove(1);
        	}else if(area==3){
        		
        	}
            return 0;
            break;
        case 3: //left
        case 37:
        	if(area==1){
                if(line1Pos==0 || line1Pos==2){
                    area=0;
                    focMove(0); 
                }else if(line1Pos==1||line1Pos==3){
                    focMove(-1);
                }
        	}else if(area==2){
                
        	}else if(area==3){
    			area=2;
    			focMove(0);
        	}
            return 0;
            break;
        case 4: //right
        case 39:
        	if(area==0){
                if(line0Pos==0){
                    area=1;
                    line1Pos=0;
                    focMove(0);
                }else if(line0Pos==1){
                    area=3;
                    focMove(0);
                }
                
        	}else if(area==1){
                if(line1Pos!=1){
                    focMove(1);
                }
                
                // if(line1Pos==1){
                //     line2Pos=0;
                //     area=2;
                //     focMove(0); 
                // }else if(line1Pos==2){
                //     line1Pos=1;
                //     focMove(0);
                // }else{
                //     line2Pos=0;
                //     area=3;
                //     focMove(0); 
                // }
        	}else if(area==2){
                area=3;
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
        case 5202: //setup成功

            media.AV.play();
            return 0;
            break;
        case 5203: //setup失败
            return 0;
            break;
        case 5205: //播放成功

            return 0;
            break;
        case 5206: //播放失败
            return 0;
            break;
        case 5225:
            return 0;
            break;
        case 5226:
            return 0;
            break;
        case 5227:
            return 0;
            break;
        case 5210: //播放完毕
            if (videoPos == 0) {
                videoPos = 1;
                stopVideo();
                startVideo(videoPos);
            } else {
                videoPos = 0;
                stopVideo();
                startVideo(videoPos);
            }

            break;
            
    }
}