$(function(){
	//search
	// handle and trigger popup window;
	$('.popup-trigger').click(function(e) {
		$.getScript('//cdn.jsdelivr.net/gh/axiao1554/cloud/axxt/js/aqsearch.js', function() {
			e.stopPropagation();
			if (isfetched === false) {
				searchFunc(path, 'local-search-input', 'local-search-result');
			} else {
				proceedsearch();
			}
		})
	})
	//背景图
	var r = Math.floor(Math.random()*30);
	var bg = {
		background: "url('//cdn.jsdelivr.net/gh/axiao1554/cloud/axxt/images/bg"+r+".jpg') no-repeat fixed top",
		backgroundSize: 'cover'
	};
	$("body").css(bg);

	// Caption
	$('.article-entry').each(function(i){
		$(this).find('img').each(function(){
			if ($(this).parent().hasClass('fancybox')) return;
			var alt = this.alt;
			if (alt) $(this).after('<span class="caption">' + alt + '</span>');
			$(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
		});
		$(this).find('.fancybox').each(function(){
			$(this).attr('rel', 'article' + i);
		});
	});
	if ($.fancybox){
		$('.fancybox').fancybox();
	}

	//滚动条
	function startmarquee(lh, speed, delay) {
	  var p = false;
	  var t;
	  var o = document.getElementById("marqueebox");
	  o.innerHTML += o.innerHTML;
	  o.style.marginTop = 0;
	  o.onmouseover = function() {
	    p = true;
	  }
	  o.onmouseout = function() {
	    p = false;
	  }
	  //开始函数
	  function start() {
	    t = setInterval(scrolling, speed);
	    if (!p) o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
	  }
	  //滚动函数。
	  function scrolling() {
	    if (parseInt(o.style.marginTop) % lh != 0) {
	      o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
	      if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2) o.style.marginTop = 0;
	    } else {
	      clearInterval(t);
	      setTimeout(start, delay);
	    }
	  } //开始执行
	  setTimeout(start, delay);
	}
	//调用函数实例
	startmarquee(40, 1, 5000);
})
