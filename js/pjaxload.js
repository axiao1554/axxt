$(function(){var r=Math.floor(Math.random()*30);var bg={background:"url('//cdn.jsdelivr.net/gh/axiao1554/cloud/axxt/images/bg"+r+".jpg') no-repeat fixed top",backgroundSize:"cover"};$("body").css(bg);$(".article-entry").each(function(i){$(this).find("img").each(function(){if($(this).parent().hasClass("fancybox")){return}var alt=this.alt;if(alt){$(this).after('<span class="caption">'+alt+"</span>")}$(this).wrap('<a href="'+this.dataset.original+'" title="'+alt+'" class="fancybox"></a>')});$(this).find(".fancybox").each(function(){$(this).attr("rel","article"+i)})});if($.fancybox){$(".fancybox").fancybox()}});