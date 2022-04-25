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
	

	//滚动广告
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

	//pjax加速网页速度
	$(document).pjax('a[target!=_blank]', '#pjaxouter', {fragment: '#pjaxouter',timeout: 8000});
	$(document).on('pjax:start', NProgress.start).on('pjax:end', NProgress.done);
	$(document).on('pjax:complete',function(){
	  $.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js");
	  $.getScript("/lib/hbe.js");
	  $.getScript("//cdn.jsdelivr.net/gh/axiao1554/cloud/axxt/js/pjaxload.js");
	})
})
