// 张树垚 2016-11-22 11:01:24 创建
// 通用链接 顶部导航
// (只用jquery)

(function() {

	// 判断
	if (typeof $ === 'undefined' && typeof jQuery === 'undefined') {
		return alert('请载入jQuery')
	}

	// 定义
	var match = window.location.href.match(/https?\:\/\/([\w\.\-\d\_]+)/) // 匹配网站
	var site = match ? match[1] : null
		/* fix:		默认false	是否固定在顶部		*/
		/* blue:	默认false	是否是蓝色首页样式	*/
		/* logo:	默认true		是否使用logo链接	*/
		/* theme:	默认false	是否使用换肤		*/
	var sittings = { // 所有设置
		'default.iciba.com': {
			// fix: true,
		},
		'www.iciba.com': {
			blue: true,
			logo: false,
			theme: true
		},
		'fy.iciba.com': {
			fix: true
		},
		'translate.iciba.com': {
			fix: true
		},
		'courses.iciba.com': {
			fix: true
		},
		'news.iciba.com': {
			fix: true
		},
		'cp.iciba.com': {
			fix: true
		}
	}
	var navs = [{ // 导航条集合
		name: '查词',
		href: 'www.iciba.com'
	}, {
		name: '翻译',
		href: 'fy.iciba.com'
	}, {
		name: '人工翻译',
		href: 'translate.iciba.com'
	}, /*{
		name: '在线课堂',
		href: 'courses.iciba.com'
	},*/ {
		name: '发现',
		href: 'news.iciba.com'
	}, {
		name: '背单词',
		href: 'word.iciba.com'
	}, {
		name: '词霸下载',
		href: navigator.userAgent.indexOf("Mac") > 0?'cp.iciba.com/mac':'cp.iciba.com'
	}]
	var html = {
		main: '' +
			'<div class="common-top" id="common-top">' + // common-top-fix, common-top-blue
				'<div class="common-top-left">' +
				// '<a href="#" class="common-top-logo"></a>' + // ['_trackEvent','@@name','logo','导航','','']
					'<div class="common-top-nav">' +
					// '<a href="http://www.iciba.com" target="_blank" class="common-top-nav-item">查词</a>' + // common-top-nav-item-on, ['_trackEvent','@@name','查词','导航','','']
					'</div>' +
				'</div>' +

				'<div class="common-top-right">' +
					// '<span class="common-top-right-item js-theme">更换主题</span>' + // theme, ['_trackEvent','@@name','换肤','导航','','']
					// '<i class="common-top-nav-hot"></i>' + // theme
					// '<i class="common-top-right-separator"></i>' + // theme
					'<span class="common-top-wxsp">' +
						'<strong>' +
							'<b></b>' +
							'<i></i>' +
						'</strong>' +
						'<img src="http://cdn.iciba.com/www/top/wxsp2-scan.png" alt="" />' +
					'</span>' +
					'<i class="common-top-right-separator"></i>' +
					'<span class="common-top-right-item js-feedback">用户反馈</span>' + // ['_trackEvent','@@name','用户反馈','导航','','']
					'<i class="common-top-right-separator"></i>' +
					'<a class="common-top-right-item js-column" href="javascript:;" target="_blank">专栏平台</a>' + // ['_trackEvent','@@name','专栏平台','导航','','']
					'<span class="common-top-user">' +
					'<img class="js-userimg u-profile" src="http://www.iciba.com/static/images/head.png">' +
					'</span>' +
					'<div class="u-option">' +
						'<div class="u-triangle"></div>' +
						'<ul>' +
							'<li class="u-register"><a href="javascript:;">注册</a></li>' + // ['_trackEvent','@@name','注册','导航','','']
							'<li class="u-login"><a href="javascript:;">登录</a></li>' + // ['_trackEvent','@@name','登录','导航','','']
						'</ul>' +
					'</div>' +
				'</div>' +
			'</div>' +
			// '<div class="common-top-holder"></div>' + // fix
			'',
		logoA: '<a href="http://www.iciba.com/" class="common-top-logo"></a>', // ['_trackEvent','@@name','logo','导航','','']
		logoI: '<i class="common-top-logo"></i>',
		item: '<a href="http://{{href}}/" target="_blank" class="common-top-nav-item">{{name}}</a>', // common-top-nav-item-on, ['_trackEvent','@@name','查词','导航','','']
		theme: '<span class="common-top-right-item js-theme">更换主题</span>' + // theme, ['_trackEvent','@@name','换肤','导航','','']
			// '<i class="common-top-nav-hot"></i>' + // theme
			'<i class="common-top-right-separator"></i>', // theme
		fix: '<div class="common-top-holder"></div>' // fix
	}

	// 容错
	if (!site || !(site in sittings)) site = 'default.iciba.com' // 默认

	// 选取
	var config = sittings[site] // 配置
	var name = navs[0].name // 站名
	var index = (function() { // 当前位置
		for (var i = 0; i < navs.length; i++) {
			if (navs[i].href === site) {
				name = navs[i].name
				return i
			}
		}
		return 0
	})()
	var el = $('<div>' + html.main + '</div>')
	el.main = el.find('.common-top')
	el.left = el.find('.common-top-left')
	el.right = el.find('.common-top-right')
	el.nav = el.find('.common-top-nav')

	// 首站区分
	if (site === 'www.iciba.com') {
		if (window.location.href.match(/https?\:\/\/([\w\.\-\d\_]+)\/([^\?\=\&]+)/)) { // 首站结果页
			config.blue = false
			config.logo = true
			config.theme = false
			config.fix = false
		}
	}

	// 写入
	el.left.prepend(config.logo === false ? html.logoI : html.logoA)
	el.nav.html(function() {
		var text = ''
		for (var i = 0; i < navs.length; i++) {
			text += html.item.replace(/\{\{(\w+)\}\}/g, function(s, s1) {
				return navs[i][s1]
			})
		}
		return text
	})
	var wxsp = el.right.find('.common-top-wxsp')
	if (config.theme) {
		if (wxsp.length) {
			wxsp.next().after(html.theme)
		} else {
			el.right.prepend(html.theme)
		}
	} else {
		wxsp.addClass('common-top-wxsp-all')
	}
	if (config.fix) el.append(html.fix)
	document.write(el.html())

	// 样式和事件
	var main = $('#common-top')
	main.left = main.find('.common-top-left')
	main.right = main.find('.common-top-right')
	main.nav = main.find('.common-top-nav')
	if (config.fix) main.addClass('common-top-fix')
	if (config.blue) main.addClass('common-top-blue')
	main.nav.children().eq(index - (window.location.href.indexOf('translate.iciba.com/doc/index.html') > -1 ? 1: 0)).addClass('common-top-nav-item-on')
	var click = function(element, place) {
		element.each(function() {
			var text = place || this.innerText
			if (text) {
				this.setAttribute('click', text)
				$(this).click(function() {
					if (typeof _czc !== 'undefined') _czc.push(['_trackEvent', name, text, '导航', '', ''])
				})
			}
		})
	}
	click(main.left.find('.common-top-logo'), 'logo')
	click(main.nav.children())
	click(main.right.find('span, a'))

	// 给每日英语添加hot
	var mainNavFindTimer = setInterval(function() {
		var items = main.nav.find(':contains("每日英语")')
		if (items.length) {
			clearInterval(mainNavFindTimer)
			items.append('<i class="common-top-nav-item-hot"></i>')
		}
	}, 100)
	// console.log(main.nav.find(':contains("每日英语")').length)

	// 登录状态
	var $user = $('.common-top-user').mouseover(function() {
		$u_option.show();
	}).mouseout(function() {
		$u_option.hide();
	});
	var $u_option = $('.u-option').mouseover(function() {
		$u_option.show();
	}).mouseout(function() {
		$u_option.hide();
	});
	if (checkLoginState()) {
		$('.u-register a').attr("href", "http://my.iciba.com/?c=user")
			.attr("target", "_blank")
			.text("个人中心");
		$('.u-login a').attr("href", "http://my.iciba.com/?c=logout&returnurl=" + encodeURIComponent(window.location.href))
			.text("退出登录");
	} else {
		$('.u-login').click(function() {
			createIframe('login');
		});
		$('.u-register').click(function() {
			createIframe('register');
		});
	}

	// 设置domain
	try {
		document.domain = 'iciba.com';
	} catch (error) {
		console.log(error);
	}
	// 设置广告
	$.ajax({
		url: 'http://www.iciba.com/index.php?c=navigationbar&m=index',
		type: 'get',
		dataType: 'jsonp',
		success: function(result) {
			var message = result.message;
			var html = '';
			for (var i = 0; i < message.length; i++) {
				//<a href="http://cp.iciba.com" class="top-nav-item" onclick="_czc.push(['_trackEvent','每日一句','词霸下载','导航','','']);">词霸下载</a>
				html += '<a href=\'' + message[i].link + '\'  class="common-top-nav-item" target="_blank" onclick="_czc.push([\'_trackEvent\',\'每日一句\',\'' + message[i].title + '\',\'导航\',\'\',\'\']);">' + message[i].title + '</a>';
        if (i === 0) {
          html += '<i class="common-top-nav-hot"></i>'
        }
			}
			main.nav.append(html);
		},
		error: function(result) {
			console.log(result);
		}
	});
	// 设置专栏点击
	$.ajax({
		url: 'http://open.iciba.com/admin/index.php',
		data: {
			c: 'community',
			m: 'identity',
			uid: getUid()
		},
		type: 'get',
		dataType: 'jsonp',
		success: function(data) {
			if (data.errno === 0 && (data.identity === 2 || data.identity === 3)) { // 专栏作者
				$('.js-column').attr('href', 'http://open.iciba.com/admin/views/user.html')
			} else { // 不是专栏作者
				$('.js-column').attr('href', 'http://open.iciba.com/admin/views/index.html')
			}
		},
		error: function(error) {
			console.log(error);
		}
	});
	// 设置用户头像
	if (getUid()) $('.js-userimg').attr('src', 'http://my.iciba.com/index.php?c=avatars&m=display&uid=' + getUid() + '&size=small')

	// 用户反馈
	function fbSlideDown() {
		$('.i-fb').fadeIn(400, function () {
			$('.i-fb-main').slideDown(400);
		});
	}
	function fbSlideUp(callback) {
		$('.i-fb-main').slideUp(400, function () {
			$('.i-fb').fadeOut(400, function () {
				if (callback) callback();
			});
		})
	}
	function postFeedback(index) {
		$('.i-fb-commit').removeClass('disable').addClass('enable');
		$('.i-fb-commit').off('click');
		$('.i-fb-commit').click(function () {
			$.ajax({
				url: 'http://www.iciba.com/index.php?c=search&a=feedback&type=' + (window.location.hostname || window.location.host || '奇怪的东西') + '&like=' + index + '&msg=' + encodeURIComponent($('.i-fb-msg-text').val()) + '&telephone=' + encodeURIComponent($('.i-fb-ct-phone').val()),
				method: 'GET',
				data: '',
				dataType:'jsonp',
				jsonp:'callback',
				success: function (data) {
					if (data.errno === 0) {
						$('.i-fb-success').show();
						setTimeout(function () {
							fbSlideUp(function () {
								$('.i-fb-success').hide();
							});
						}, 1500);
					}
				}
			});
		})
	}
	function addFeedbackCon() {
		var content = '';
		var i_fb = $('<div>').addClass('i-fb').css({'display': 'none'});
		content += '<div class="i-fb-main" style="display:none">';
		content += '	<div class="i-fb-title">意见反馈</div>';
		content += '	<ul class="i-fb-icons">';
		content += '		<li class="i-fb-icon-0" data-index="0">';
		content += '			<div class="i-fb-icon0"></div>';
		content += '			<div class="i-fb-icon-text">好喜欢</div>';
		content += '		</li>';
		content += '		<li class="i-fb-icon-1" data-index="1">'
		content += '			<div class="i-fb-icon1"></div>';
		content += '			<div class="i-fb-icon-text">继续加油</div>';
		content += '		</li>';
		content += '		<li class="i-fb-icon-2" data-index="2">';
		content += '			<div class="i-fb-icon2"></div>';
		content += '			<div class="i-fb-icon-text">宝宝不喜欢</div>';
		content += '		</li>';
		content += '	</ul>';
		content += '	<div class="i-fb-msg">';
		content += '		<div class="i-fb-msg-title">我想说</div>';
		content += '		<textarea class="i-fb-msg-text" placeholder="有什么想告诉小词的呢？小词一定会认真对待您提出的宝贵意见！(140字内)"></textarea>';
		content += '	</div>';
		content += '	<div class="i-fb-ctc">';
		content += '		<div class="i-fb-ctc-title">联系方式</div>';
		content += '		<input class="i-fb-ct-phone" type="text" placeholder="请留下您的联系方式(50字内)">';
		content += '	</div>';
		content += '	<div class="i-fb-commit disable">提交</div>';
		content += '	<div class="i-fb-success" style="display:none;">';
		content += '		<div class="i-fb-s-check"></div>';
		content += '		<div class="i-fb-s-text">您的反馈我们已经收到<br>非常感谢</div>';
		content += '	</div>';
		content += '	<div class="i-fb-close"></div>';
		content += '</div>';
		i_fb.html(content);
		$('body').append(i_fb);
		fbSlideDown();
		$('.i-fb-icons').on('click', 'li', function () {
			var index = $(this).attr('data-index');
			$('.i-fb-icons li').removeClass('active');
			$(this).addClass('active');
			postFeedback(index);
		});
		$('.i-fb-msg-text').on('input propertychange', function () {
			if (this.value.length >= 140) {
				this.value = this.value.substr(0, 140);
			}
		});
		$('.i-fb-ct-phone').on('input keyup', function () {
			if (this.value.length >= 50) {
				this.value = this.value.substr(0, 50);
			}
		})
		$('.i-fb-close').click(function () {
			fbSlideUp();
		});
	}
	$('.js-feedback').click(function () {
		if ($('.i-fb').length === 0) {
			addFeedbackCon();
		} else {
			fbSlideDown();
		}
	});

	// 小程序图标
	// $('.common-top-wxsp').hover(function() {
	// 	$('.common-top-wxsp img').stop().fadeIn(200)
	// }, function() {
	// 	$('.common-top-wxsp img').stop().fadeOut(200)
	// }).click(function() {
	// 	$('.common-top-wxsp img').stop().css({
	// 		display: 'block',
	// 		opacity: 1
	// 	})
	// })
})()

// 全局方法(待处理)
function getCookie(name) { // 读取cookie
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) return unescape(arr[2]);
	return null;
}
function getUid() { // 获得uid
	var ustat = getCookie('_ustat');
	if (ustat == undefined) {
		var uid = 0;
	} else {
		var oUstat = JSON.parse(ustat);
		var uid = oUstat.i;
	}
	return uid;
}
function checkLoginState() { // 检查登录状态
	var uid = getUid();
	if (uid != "" && uid != 0) {
		return true;
	} else {
		return false;
	}
}
function createIframe(type) { // 关联iframe
	// type: login | register
	var win = $('<div>').addClass('win');
	var winClose = $('<div>').addClass('win-close');
	var loginIframe = $('<iframe>');
	loginIframe.attr('id', 'loginIframe');
	loginIframe.attr('data-type', type);
	loginIframe.attr('src', 'http://my.iciba.com/winlogin.php');
	loginIframe.attr('scrolling', 'no');
	loginIframe.attr('frameborder', '0');
	loginIframe.css({
		'width': '100%',
		'height': '100%',
		'border-radius': '2px'
	});
	win.append(winClose);
	win.append(loginIframe);
	var mask = createMask();
	mask.append(win);
	winClose.click(function() {
		mask.remove();
	});
}
function createMask() { // 创建遮罩层
	var mask = $('<div>').addClass('win-mask');
	$('body').append(mask);
	return mask;
}
