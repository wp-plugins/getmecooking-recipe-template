function FileProgress(a,b){this.fileProgressID=a.id;this.item=jQuery("#gmc-upload-progress-item-"+this.fileProgressID);if(!this.item[0]){this.item=jQuery("<div id='gmc-upload-progress-item-"+this.fileProgressID+"' class='gmc-upload-progress-item'></div>");jQuery(this.item).append("<a href='' style='display: none;' class='gmc-upload-progress-cancel' > </a>");jQuery(this.item).append("<div class='gmc-upload-progress-name'>"+a.name+"</div>");jQuery(this.item).append("<div class='gmc-upload-progress-status'></div>");jQuery(this.item).append("<div class='gmc-upload-progress-bar'> </div>");jQuery("#"+b).append(this.item)}else{this.reset()}this.setTimer(null)}FileProgress.prototype.setTimer=function(a){this.item["FP_TIMER"]=a};FileProgress.prototype.getTimer=function(a){return this.item["FP_TIMER"]||null};FileProgress.prototype.reset=function(){jQuery(this.item).removeClass("gmc-upload-progress-done").removeClass("gmc-upload-progress-error").removeClass("gmc-upload-progress-canceled");jQuery(this.item).find(".gmc-upload-progress-bar").css({width:"0%"});jQuery(this.item).find(".gmc-upload-progress-bar").show();jQuery(this.item).show()};FileProgress.prototype.setProgress=function(a){jQuery(this.item).find(".gmc-upload-progress-bar").css({width:a+"%"});jQuery(this.item).show()};FileProgress.prototype.setComplete=function(){jQuery(this.item).addClass("gmc-upload-progress-done");jQuery(this.item).find(".gmc-upload-progress-bar").hide();var a=this;this.setTimer(setTimeout(function(){jQuery(a.item).fadeOut()},1e4))};FileProgress.prototype.setError=function(){jQuery(this.item).addClass("gmc-upload-progress-error");var a=this;this.setTimer(setTimeout(function(){jQuery(a.item).fadeOut()},5e3))};FileProgress.prototype.setCancelled=function(){jQuery(this.item).addClass("gmc-upload-progress-canceled");var a=this;this.setTimer(setTimeout(function(){jQuery(a.item).fadeOut()},2e3))};FileProgress.prototype.setStatus=function(a){jQuery(this.item).find(".gmc-upload-progress-status").text(a)};FileProgress.prototype.toggleCancel=function(a,b){return;this.fileProgressElement.childNodes[0].style.visibility=a?"visible":"hidden";if(b){var c=this.fileProgressID;this.fileProgressElement.childNodes[0].onclick=function(){b.cancelUpload(c);return false}}}