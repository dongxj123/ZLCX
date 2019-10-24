stbId="123_sf";
var reqUrl="http://218.108.172.135:8080/clearway/";
// var localurl = "http://21.254.180.145:8080/ZSZCProject/"
// //获取列表
// var listurl="http://21.254.218.7:8080/hcms/api/stbapi/list/";
// //http://218.108.175.19:8080/hcms/api/stbapi/list/8a0694216d4866c3016d59c8d7e40c09?page=1&rows=5

// //获取内容
// var detailurl="http://21.254.218.7:8080/hcms/api/stbapi/detail/";
// //http://218.108.175.19:8080/hcms/api/stbapi/detail/8a0694216d61e8b5016d61e8f4b90000

// //获取公告
// var noticeurl="http://21.254.218.7:8080/hcms/api/stbContentController/indexnotice";
// //http://218.108.175.19:8080/hcms/api/stbContentController/indexnotice?stbId=123_sf&regionCode=hs_sf

var sysp="8a0694216d4866c3016d59c7c9930c04";//首页主视频
var homePageList="8a0694216d4866c3016d59c845ac0c06";//首页视频列表
var fzzj="8a0694216d4866c3016d59c8d7e40c09";//法治浙江
var flyz="957e5a876d6ce857016dcda850260c94";//法律服务-法律援助
var rmtj="957e5a876d6ce857016dcdaa21dd0c96";//法律服务-人民调解
var gzfw="957e5a876d6ce857016dcdaca4990c9c";//法律服务-公正服务
var xfjwj="8a0694216d4866c3016d59c9c94c0c0f";//宪法进万家
var wszb="8a0694216d4866c3016d59cccd620c1f";//法治视界-普法微电影
var zxrb="8a0694216d4866c3016d59ccfa370c21";//法治视界-戒毒系统微电影
var zlk="8a0694216d4866c3016d59cd2a3c0c23";//法治视界-监狱系统微电影
var ysjm="8a0694216d4866c3016d59cd5ecd0c25";//法治视界-地市系统微电影
var apsf="8a0694216d4866c3016d59cf4b040c31";//在线学法-阿普说法
var qtlnj="8a0694216d4866c3016d59ceaaed0c2d";//在线学法-钱塘老娘舅
var njjmh="8a0694216d4866c3016d59cefbee0c2f";//在线学法-娘家姐妹花
var xfsd="8a0694216d4866c3016d59ce757d0c2b";//在线学法-新法速递
var rdjd="8a0694216d4866c3016d59ce385e0c29";//在线学法-热点解读
var xfgy="8a0694216d4866c3016d59cfab370c33";//法治地图-宪法公园
var xfgygg="8a0694216d4866c3016d59cfd0b00c35";//法治地图-宪法公益广告
var mzfzc="8a0694216d4866c3016d59d019520c37";//法治地图-民主法治村
var fzsj="8a0694216d4866c3016d59cc0bc00c1d";//法治服务-法治实践
var sphy="957e5a876d6ce857016dce0880d30ca9";//法治服务-远程会议-点播
var spzb="957e5a876d6ce857016dce0822110ca7";//法治服务-远程会议-直播
var bdlm="8a0694216d4866c3016d59c975420c0d";//本地栏目

function getList(_type,_page,_rows){
    $AJAX(
            {
                url: listurl + _type+"?page="+_page+"&rows=" + _rows,
                method: "get",
                async: true,
                success:
                    function (resp) {
                        eval("listJson = " + resp.responseText);
                        if(listJson.status=="200"){
                        	showList();
                        }
                        
                    },
                failed:
                    function (resp) {
                    }
            });
}
 function getDetail(_id){
     $AJAX(
             {
                 url: detailurl + _id,
                 method: "get",
                 async: true,
                 success:
                     function (resp) {
                         eval("detailJson = " + resp.responseText);
                         if(detailJson.status=="200"){
                         	callBack();
                         }
                        
                     },
                 failed:
                     function (resp) {
                     }
             });
 }
