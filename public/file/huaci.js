var iciba_huaci_url ="http://open.iciba.com/huaci_new/";
var ICIBA_HUAYI_Str = '';
var ICIBA_HUAYI_ALLOW = 1;
ICIBA_HUAYI_Str += '<link type="text/css" rel="stylesheet" href="'+iciba_huaci_url+'huaci.css" />';
ICIBA_HUAYI_Str += '<div id="icIBahyI-main_box" style="display:none">';
ICIBA_HUAYI_Str += '	<div class="icIBahyI-main_title" id="icIBahyI-main_title">';
ICIBA_HUAYI_Str += '    	<a href="javascript:;" id="icIBahyI-gb" class="icIBahyI-gb" title="关闭"></a>';
ICIBA_HUAYI_Str += '		<i class="icIBahyI-logo"></i>';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-search" id="ICIBA_HUAYI_input">';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-loading" id="loading"></div>';
ICIBA_HUAYI_Str += '    <div class="icIBahyI-main_cont" id="icIBahyI-main_cont">';
ICIBA_HUAYI_Str += '    </div>';
ICIBA_HUAYI_Str += '    <div class="icIbahyI-des"><a href="http://open.iciba.com?c=huayi" target="_blank">如何获取取词划译插件？</a></div>';
ICIBA_HUAYI_Str += '<div class="icIBahyI-CB" id="icIBahyI-scbiframe" style="display:none;">';
ICIBA_HUAYI_Str += '</div>';
ICIBA_HUAYI_Str += '<div id="ICIBA_TOO_LONG" style="height:150px" class="icIBahyI-footer">您划取的内容太长，建议您去爱词霸<a href="http://fy.iciba.com">翻译</a>页面。</div>';
//ICIBA_HUAYI_Str += '    	<iframe id="ifm1" frameborder="0" width="280px" scrolling="no" ></iframe>';
//ICIBA_HUAYI_Str += '    </div>';
//ICIBA_HUAYI_Str += '<div class="icIBahyI-down"><a href="http://ciba.iciba.com/" onclick="clickCountIndex(26)"  target="_blank">搞定邮箱/文档/pdf取词？下载词霸PC版</a></div>';
//ICIBA_HUAYI_Str += '    <span class="icIBahyI-contB"></span>';
ICIBA_HUAYI_Str += '<div class="icIBahyI-options">';
ICIBA_HUAYI_Str += '	<div class="icIBahyI-scbbtn" id="icIBahyI-scbbtn" style="display:none;" onclick="scb_scroll();" ><i class="scb-icon"></i><span>添加到生词本</span></div>';
ICIBA_HUAYI_Str += '	<div class="icIBahyI-morebtn" id="icIBahyI-morebtn"><i class="more-icon"></i><a id="more_info" href="#" target="_blank">查看更多释义</a></div>';
ICIBA_HUAYI_Str += '</div>';
ICIBA_HUAYI_Str += '</div>';
ICIBA_HUAYI_Str += '<script src="'+iciba_huaci_url+'dict.php" charset="utf-8"></script>';
//ICIBA_HUAYI_Str += '<link type="text/css" rel="stylesheet" href="'+iciba_huaci_url+'iframe.css" />';
ICIBA_HUAYI_Str += '<object style="height:0px;width:0px;overflow:hidden;position:absolute;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="0" height="0" id="asound_hanci" align="absmiddle">';
ICIBA_HUAYI_Str += '    <param name="allowScriptAccess" value="always" />';
ICIBA_HUAYI_Str += '    <param name="movie" value="http://www.iciba.com/top/asound.swf" />';
ICIBA_HUAYI_Str += '	<param name="quality" value="high" />';
ICIBA_HUAYI_Str += '	<embed src="http://www.iciba.com/top/asound.swf" quality="high" width="0" height="0" name="asound_hanci" align="absmiddle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
ICIBA_HUAYI_Str += '</object>';
ICIBA_HUAYI_Str += ' <div class="icIBahyI-USER_LOGIN" id="icIBahyI-USER_LOGIN" style="display:none"></div>';
ICIBA_HUAYI_Str += '<script src="'+iciba_huaci_url+'ICIBA_HUACI_COM.js" charset="utf-8" ></script>';
if(!$('<div>').tinyscrollbar) {
    ICIBA_HUAYI_Str += '<script src="http://www.iciba.com/static/scripts/jquery.tinyscrollbar.js" charset="utf-8" ></script>';
}
document.write(ICIBA_HUAYI_Str);


