var area = 1;
var areaSize = 2;
var line1Focus = 0;
var line1Pos = 0;
var line1Size = 0;
var line1Link = "";
var line0Pos = 0;
var line0Size = 1;
var pagePos = 1;
var pageSize = 1;
var stbId;
var autoId=0;
var menuJson;

var apiUrl;
var dataIndex;
var contentField;
var titleField;
function init() {

    // autoId = location.href.getQueryString("autoId");
    // type=location.href.getQueryString("type");
    // getDetail(autoId);
    apiUrl = location.href.getQueryString("apiUrl");
    dataIndex = Number(location.href.getQueryString("dataIndex"));
    contentField = location.href.getQueryString("contentField");
    titleField = location.href.getQueryString("titleField");
    getDetailContent(apiUrl);
    menuFocus(0);
}
var topvalue = 0;
var totalHeight = 0;
var pageHeight = 400;
var moveHeight = 50;
var curHeight = 400;

var wordSize = 40;
function callBack(){
    topvalue = 0;
    totalHeight = 0;
    curHeight = pageHeight = 400;
    moveHeight = 50;
    $("inner").innerHTML = "";
    document.getElementById("inner").style.top = 0 + "px";
    $("inner").innerHTML = detailJson.data[dataIndex][contentField].replace(/\?/g, "");
    $("title").innerHTML = getWordSize(detailJson.data[dataIndex][titleField]);
    setTimeout("initScrollBar()", 1000);
}
function getWordSize(__num) {
    if (__num.length > wordSize) {
        return __num.slice(0, wordSize - 1);
    }
    else {
        return __num;
    }
}
function doSelect() {
    if(area == 0){
        window.location.href = getCookie("detailReturnUrl");
    }else if(area == 1){
//        window.location.href = line1Link[line1Pos];
    }
}
function initMenuFocus() {

    $("bottomImg" + bottomPos).className = "bottom" + bottomPos;
}
function areaFocus(__num) {
    if (area + __num < areaSize && area + __num >= 0) {
        area += __num;
    }
}
function menuFocus(__num) {

    if (area == 0) {
        if (line0Pos + __num < line0Size && line0Pos + __num >= 0) {
            //            initMenuFocus();
            line0Pos += __num;
            $("back").className = "backFoc";
        }
    } else {
        $("back").className = "back";
    }
    if(area == 1){
        if (line1Pos + __num < line1Size && line1Pos + __num >= 0) {
//            initMenuFocus();
            line1Pos += __num;
            $("vote" + line1Pos).className = "vote Focus";
        }
    }
}


function scrollPage(_num) {
    if (_num > 0) {
        if (topvalue < 0) {
            topvalue += moveHeight;
            curHeight -= moveHeight;
            document.getElementById("inner").style.top = topvalue + "px";
            showPageNum();
           
        }
    }
    else {
        if (-topvalue + pageHeight < totalHeight) {
            topvalue -= moveHeight;
            curHeight += moveHeight;
            document.getElementById("inner").style.top = topvalue + "px";
            showPageNum();
            
        }
    }
}
function initScrollBar() {
    totalHeight = document.getElementById("inner").clientHeight;
   
    showPageNum();
}
function showPageNum() {
    if (curHeight >= totalHeight) {
        $("progressBar").style.height = "100%";
    } else {
        $("progressBar").style.height = (curHeight / totalHeight) * 100 + "%";
    }    
}
function getDetailContent(_apiUrl){
    $AJAX(
            {
                url: reqUrl + _apiUrl,
                method: "get",
                async: true,
                success:
                    function (resp) {
                        eval("detailJson = " + resp.responseText);
                        if(detailJson.code=="200"){
                        	callBack();
                        }
                        
                    },
                failed:
                    function (resp) {
                    }
            });
}
document.onkeydown = function () {
    var key_code = event.keyCode;
    //alert(key_code);
    switch (key_code) {
        case 1: //up
        case 38:
            if (area == 1) {
                if (topvalue >= 0) {
                    area = 0;
                    menuFocus(0);
                } else {
                    scrollPage(1);
                }
            }


            return 0;
            break;
        case 2: //down
        case 40:
            if (area == 0) {
                area = 1;
                menuFocus(0);
            } else {
                scrollPage(0);
            }
            
            return 0;
            break;
        case 3: //left
        case 37:
            if (area == 2) {
                menuFocus(-1);
            }


            return 0;
            break;
        case 4: //right
        case 39:
            if (area == 2) {
                menuFocus(1);
            }

            return 0;
            break;
        case 13: //enter
            doSelect();
            return 0;
            break;
        case 340: //back
        case 45:
        case 81:
        case 65:
            window.location.href = getCookie("detailReturnUrl");
            //history.go(-1);
            return 0;
            break;
    }
    function grabEvent() {
        var key_code = event.which;

    }
}