$(function(){$(".popup-trigger").click(function(e){$.getScript("//cdn.jsdelivr.net/gh/axiao1554/cloud/axxt/js/aqsearch.js",function(){e.stopPropagation();if(isfetched===false){searchFunc(path,"local-search-input","local-search-result")}else{proceedsearch()}})});function startmarquee(lh,speed,delay){var p=false;var t;var o=document.getElementById("marqueebox");o.innerHTML+=o.innerHTML;o.style.marginTop=0;o.onmouseover=function(){p=true};o.onmouseout=function(){p=false};function start(){t=setInterval(scrolling,speed);if(!p){o.style.marginTop=parseInt(o.style.marginTop)-1+"px"}}function scrolling(){if(parseInt(o.style.marginTop)%lh!=0){o.style.marginTop=parseInt(o.style.marginTop)-1+"px";if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2){o.style.marginTop=0}}else{clearInterval(t);setTimeout(start,delay)}}setTimeout(start,delay)}startmarquee(40,1,5000);$(document).pjax("a[target!=_blank]","#pjaxouter",{fragment:"#pjaxouter",timeout:8000});$(document).on("pjax:start",NProgress.start).on("pjax:end",NProgress.done);$(document).on("pjax:complete",function(){$.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js");$.getScript("/lib/hbe.js");$.getScript("//cdn.jsdelivr.net/gh/axiao1554/cloud/axxt/js/pjaxload.js")})});