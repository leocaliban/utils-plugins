/**
 * Galleria - v1.5.3 2017-02-13
 * https://galleria.io
 *
 * Copyright (c) 2010 - 2017 worse is better UG
 * Licensed under the MIT License.
 * https://raw.github.com/worseisbetter/galleria/master/LICENSE
 *
 */

!function(a){Galleria.addTheme({name:"classic",version:1.5,author:"Galleria",css:"galleria.classic.css",defaults:{transition:"slide",thumbCrop:"height",_toggleInfo:!0},init:function(b){Galleria.requires(1.4,"This version of Classic theme requires Galleria 1.4 or later"),this.addElement("info-link","info-close"),this.append({info:["info-link","info-close"]});var c=this.$("info-link,info-close,info-text"),d=Galleria.TOUCH;this.$("loader,counter").show().css("opacity",.4),d||(this.addIdleState(this.get("image-nav-left"),{left:-50}),this.addIdleState(this.get("image-nav-right"),{right:-50}),this.addIdleState(this.get("counter"),{opacity:0})),b._toggleInfo===!0?c.bind("click:fast",function(){c.toggle()}):(c.show(),this.$("info-link, info-close").hide()),this.bind("thumbnail",function(b){d?a(b.thumbTarget).css("opacity",this.getIndex()?1:.6).bind("click:fast",function(){a(this).css("opacity",1).parent().siblings().children().css("opacity",.6)}):(a(b.thumbTarget).css("opacity",.6).parent().hover(function(){a(this).not(".active").children().stop().fadeTo(100,1)},function(){a(this).not(".active").children().stop().fadeTo(400,.6)}),b.index===this.getIndex()&&a(b.thumbTarget).css("opacity",1))});var e=function(b){a(b.thumbTarget).css("opacity",1).parent().siblings().children().css("opacity",.6)};this.bind("loadstart",function(a){a.cached||this.$("loader").show().fadeTo(200,.4),window.setTimeout(function(){e(a)},d?300:0),this.$("info").toggle(this.hasInfo())}),this.bind("loadfinish",function(a){this.$("loader").fadeOut(200)})}})}(jQuery);