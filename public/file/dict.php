
var dict=document.getElementById('icIBahyI-main_cont');
try{
   	dict.innerHTML='        <div id=\"icIBahyI-title\" class=\"icIBahyI-title\" style=\"display:none\">deciphering</div>        <div id=\"icIBahyI-dict_main\">            <div class=\"icIBahyI-dictbar\">              <div class=\"icIBahyI-dict_title\">                <div class=\"icIBahyI-prons\">				<span class=\"icIBahyI-eg\">				<span class=\"icIBahyI-fl\">[英]					<strong>[</strong><strong lang=\"EN-US\" xml:lang=\"EN-US\">dɪ\'saɪfərɪŋ</strong><strong>]</strong>				</span>				<a title=\"机器发音\" onclick=\"asplay_hanci(\'http://res-tts.iciba.com/2/b/5/2b5bdb98cf58146bbf0fe3c8da98a716.mp3\');\"  class=\"icIBahyI-ico_sound\" href=\"javascript:;\"></a>				</span> 				<span class=\"icIBahyI-eg\">				<span class=\"icIBahyI-fl\">[美]				<strong>[</strong><strong lang=\"EN-US\" xml:lang=\"EN-US\">dɪ\'saɪfərɪŋ</strong><strong>]</strong>				</span>				<a title=\"机器发音\" onclick=\"asplay_hanci(\'http://res-tts.iciba.com/2/b/5/2b5bdb98cf58146bbf0fe3c8da98a716.mp3\');\"  class=\"icIBahyI-ico_sound\" href=\"javascript:;\"></a>				</span>               </div>            </div>            <div class=\"icIBahyI-simple\">              <div class=\"icIBahyI-tab_list\"></div>              <div class=\"icIBahyI-dict_content\">                <div class=\"icIBahyI-group_prons\">	               		<div class=\"icIBahyI-group_pos\"><p>			               <span class=\"icIBahyI-fl\">v.</span><span class=\"icIBahyI-label_list\">					              		 <label>破译（密码），辨认（潦草字迹）( decipher的现在分词 )；</label> 					              		 <label>解密；</label> </span></p>              </div>              </div>          </div>      	</div>      	</div>';
   	var loading=document.getElementById('loading');
	loading.style.display = "none";
   	dict.style.display = "block";
 }catch (e){
  alert("赞无找到 id为dict的DIV");
}

function scb_scroll(){
    window.location.href = "http://my.iciba.com/?returnurl=" + window.location.href;
}

document.getElementById('icIBahyI-scbbtn').style.display = "block";
document.getElementById('icIBahyI-morebtn').style.width = "50%";
document.getElementById('more_info').href = "http://www.iciba.com/deciphering";

