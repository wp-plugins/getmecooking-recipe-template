function showSourceDiv(){jQuery("#gmc-source-author, #gmc-source-author-url, #gmc-source-book, #gmc-source-book-url, #gmc-source-website, #gmc-source-website-url").hide();if(jQuery("#gmc-source-type").val()=="Author"){jQuery("#gmc-source-author, #gmc-source-author-url").show()}else if(jQuery("#gmc-source-type").val()=="Book"){jQuery("#gmc-source-book, #gmc-source-book-url").show()}else if(jQuery("#gmc-source-type").val()=="Website"){jQuery("#gmc-source-website, #gmc-source-website-url").show()}}function doLoadInitialSourceDiv(){showSourceDiv();jQuery("#gmc-source-type").change(function(a){showSourceDiv()})}function doConfirmationPrompts(){jQuery(".gmc-delete-ingredient").click(function(){var a=this.id.substring(25);jQuery("#gmc-ingredient-to-delete").val(a);jConfirm("Are you sure you want to delete this ingredient?","Confirmation",function(a){if(a){jQuery("#post").submit()}});return false});jQuery(".gmc-delete-step").click(function(){var a=this.id.substring(19);jQuery("#gmc-step-to-delete").val(a);jConfirm("Are you sure you want to delete this step?","Confirmation",function(a){if(a){jQuery("#post").submit()}});return false});jQuery("#gmc-reset-css").click(function(){jConfirm("Are you sure you want to reset the CSS? Any changes you have made will be lost.","Confirmation",function(a){if(a){jQuery("#gmc_reset_css").val("Y");jQuery("#save-settings").click()}});return false})}function doLoadInitialMeasurementDiv(){jQuery(".gmc-use-custom-measurement").each(function(){var a=jQuery(this)[0].id.substring(27);if(jQuery(this).val()=="Y"){jQuery("#gmc-standard-measurement-area-"+a).hide()}else{jQuery("#gmc-custom-measurement-area-"+a).hide()}});jQuery(".gmc-show-custom-measurement").click(function(){var a=this.id.substring(28);jQuery("#gmc-use-custom-measurement-"+a).val("Y");jQuery("#gmc-standard-measurement-area-"+a).hide();jQuery("#gmc-custom-measurement-area-"+a).show();return false});jQuery(".gmc-show-standard-measurement").click(function(){var a=this.id.substring(30);jQuery("#gmc-use-custom-measurement-"+a).val("");jQuery("#gmc-custom-measurement-area-"+a).hide();jQuery("#gmc-standard-measurement-area-"+a).show();return false})}function doLoadInitialRegionDiv(){if(jQuery("#gmc-use-custom-region").val()=="Y"){jQuery("#gmc-standard-region-area").hide()}else{jQuery("#gmc-custom-region-area").hide()}jQuery("#gmc-show-custom-region").click(function(){jQuery("#gmc-use-custom-region").val("Y");jQuery("#gmc-standard-region-area").hide();jQuery("#gmc-custom-region-area").show();return false});jQuery("#gmc-show-standard-region").click(function(){jQuery("#gmc-use-custom-region").val("");jQuery("#gmc-custom-region-area").hide();jQuery("#gmc-standard-region-area").show();return false})}function doChangeSaveMessages(){jQuery("#message:contains('Post published')").html("Recipe saved, you must now create a post and insert this recipe by pressing the GetMeCooking icon on the post page.");jQuery("#message:contains('Post updated')").html("Recipe updated. If you  have not already done so, you must create a post and insert this recipe by pressing the GetMeCooking icon on the post page.")}function doModifyRichTextEditor(){jQuery("#editor-toolbar, #editorcontainer, #post-status-info").appendTo("#gmc-note-desc")}function doResizeTextAreas(){jQuery("textarea.autoResize").autoResize({}).trigger("change");jQuery("textarea.autoResize").autoResize({onResize:function(){jQuery(this).css({opacity:.8})},animateCallback:function(){jQuery(this).css({opacity:1})},animateDuration:300,extraSpace:40})}function getUrlEncodedKey(a,b){if(!b)b=window.location.search;var c=new RegExp("[?|&]"+a+"=(.*?)&");var d=c.exec(b+"&");if(!d||d.length<2)return"";return decodeURIComponent(d[1].replace("+"," "))}function doPublishHide(){if(jQuery("#gmc-recipe-main")[0]){jQuery("#submitdiv .hndle span").html("Save Recipe");var a=jQuery("#publish").val();if(a=="Publish"){jQuery("#publish").val("Save Recipe")}else if(a=="Update"){jQuery("#publish").val("Update Recipe")}else if(a=="Submit for Review"){jQuery("#publish").val("Submit Recipe for Review")}else if(a=="Schedule"){jQuery("#publish").val("Schedule Recipe Publishing")}}}function doFeaturedImage(){if(jQuery("#postdiv")[0]&&jQuery("#gmc-addstep")[0]){jQuery("#gmc-post-thumbnail").insertBefore("#postdiv")}else if(jQuery("#postdivrich")[0]&&jQuery("#gmc-addstep")[0]){jQuery("#gmc-post-thumbnail").insertBefore("#postdivrich")}}function doLoadCorrectTab(){if(jQuery("#recipe-data")[0]){jQuery("#recipe-data").tabs({select:function(a,b){jQuery("#gmc-selected-tab").val(b.tab.hash.substring(1));return true}})}var a=getUrlEncodedKey("gmc-tab");jQuery("#recipe-data").tabs().tabs("select",a);jQuery("#gmc-selected-tab").val(a);var b=getUrlEncodedKey("gmc-add");if(b=="step"){jQuery("#gmc-addstep").show();jQuery("#gmc-show-addstep").hide();jQuery("#gmc-stepslistbox").hide();jQuery("#gmc-step-added").hide().fadeIn(1500)}else if(b=="ingredient"){jQuery("#gmc-addingredient").show();jQuery("#gmc-show-addingredient").hide();jQuery("#gmc-ingredientslistbox").hide();jQuery("#gmc-ingredient-added").hide().fadeIn(1500)}}function doIngredients(){jQuery("#gmc-show-addingredient").click(function(){jQuery("#gmc-addingredient").show();jQuery("#gmc-show-addingredient").hide();jQuery("#gmc-ingredientslistbox").hide();jQuery("#gmc-ingredient-added").hide();return false});jQuery("#gmc-addingredient .cancel, #gmc-back-to-ingredient-list").click(function(){jQuery("#gmc-addingredient").hide();jQuery("#gmc-show-addingredient").show();jQuery("#gmc-ingredientslistbox").show();return false});if(jQuery("#gmc-ingredientslist")){jQuery("#gmc-ingredientslist").sortable({stop:function(a,b){var c=1;jQuery("#gmc-ingredientslist .gmc-ingredientnumber").each(function(a,b){jQuery(b).html(c);c++})}})}}function doSteps(){jQuery("#gmc-show-addstep").click(function(){jQuery("#gmc-addstep").show();jQuery("#gmc-show-addstep").hide();jQuery("#gmc-stepslistbox").hide();jQuery("#gmc-step-added").hide();return false});jQuery("#gmc-addstep .cancel, #gmc-back-to-step-list").click(function(){jQuery("#gmc-addstep").hide();jQuery("#gmc-show-addstep").show();jQuery("#gmc-stepslistbox").show();return false})}function tb_remove(){jQuery("#TB_imageOff").unbind("click");jQuery("#TB_closeWindowButton").unbind("click");jQuery("#TB_window").fadeOut("fast",function(){jQuery("#TB_window,#TB_overlay,#TB_HideSelect").trigger("unload").unbind().remove()});jQuery("#TB_load").remove();if(typeof document.body.style.maxHeight=="undefined"){jQuery("body","html").css({height:"auto",width:"auto"});jQuery("html").css("overflow","")}document.onkeydown="";document.onkeyup="";if(jQuery.getIframeUrlVar("gmcreload")=="1"){window.parent.location.hash="#steps";window.parent.location.reload()}return false}jQuery.extend({getIframeUrlVars:function(){var a=[],b;var c=jQuery("#TB_iframeContent").attr("src");if(c.indexOf("#")!=-1){myhref2=c.substr(0,c.indexOf("#"));c=myhref2}var d=c.slice(c.indexOf("?")+1).split("&");for(var e=0;e<d.length;e++){b=d[e].split("=");a.push(b[0]);a[b[0]]=b[1]}return a},getIframeUrlVar:function(a){return jQuery.getIframeUrlVars()[a]}});jQuery(document).ready(function(){doFeaturedImage();doModifyRichTextEditor();doResizeTextAreas();doChangeSaveMessages();doLoadInitialRegionDiv();doLoadInitialMeasurementDiv();doConfirmationPrompts();doLoadCorrectTab();doSteps();doIngredients();doPublishHide();doLoadInitialSourceDiv();if(jQuery("#gmc-shortcodecss").length){var a=CodeMirror.fromTextArea(document.getElementById("gmc-shortcodecss"),{mode:"css",lineNumbers:true})}jQuery("input.colors").miniColors({change:function(a,b){}})})