function doSteps(){jQuery(document).on("focus",'textarea[id^="gmc-admin-new-step"]',function(){var e=jQuery(this).attr("id").substring(19);var t=parseFloat(jQuery(".gmc-singlestep").length)+1;var n=jQuery("#gmc-steps-step-"+e).html();var r=new RegExp(">[0-9]+</span>","i");n=n.replace(r,">"+t+"</span>");n=n.replace("gmc-admin-new-step-"+e,"gmc-admin-new-step-"+t);n='<div id="gmc-steps-step-'+t+'" class="gmc-singlestep postbox ">'+n+"</div>";jQuery(n).appendTo("#gmc-stepslist");jQuery("#gmc-steps-step-"+t+" textarea.autoResize").autoResize({extraSpace:20,minHeight:32});jQuery("#gmc-admin-new-step-"+e).removeAttr("id")})}function doIngredients(){jQuery(document).on("focus",'input[id^="gmc-admin-new-ingredient"]',function(){var e=jQuery(this).attr("id").substring(25);var t=parseFloat(jQuery(".gmc-singleingredient").length)+1;var n=jQuery("#gmc-ingredients-ingredient-"+e).html();var r=new RegExp(">[0-9]+</span>","i");n=n.replace(r,">"+t+"</span>");n=n.replace("gmc-admin-new-ingredient-"+e,"gmc-admin-new-ingredient-"+t);var i=new RegExp('id="gmc-recipeingredientorder-'+e+'" type="hidden" value="[0-9]+"',"i");n=n.replace(i,'id="gmc-recipeingredientorder-'+t+'" type="hidden" value="'+t+'"');var s=new RegExp("unique-ingred","g");n=n.replace(s,"unique-ingred1");n='<tr id="gmc-ingredients-ingredient-'+t+'" class="gmc-singleingredient">'+n+"</tr>";var o=new RegExp("color.*;","g");n=n.replace(o,"");jQuery("#ingredientsTable tr:last").after(n);jQuery("#ingredientsTable tr:last").hide().fadeIn();jQuery("#gmc-admin-new-ingredient-"+e).attr("id","")});jQuery(".sortable").bind("sortupdate",function(e,t){jQuery('input[name="gmc-recipeingredientorder[]"]').each(function(e){jQuery(this).val(e+1)})})}function doLoadCorrectTab(){if(jQuery("#recipe-data")[0]){jQuery("#recipe-data").tabs({select:function(e,t){jQuery("#gmc-selected-tab").val(t.tab.hash.substring(1));return true}})}var e=getUrlEncodedKey("gmc-tab");jQuery("#recipe-data").tabs().tabs("select",e);jQuery("#gmc-selected-tab").val(e);var t=getUrlEncodedKey("gmc-add");if(t=="step"){jQuery("#gmc-addstep").show();jQuery("#gmc-show-addstep").hide();jQuery("#gmc-stepslistbox").hide();jQuery("#gmc-step-added").hide().fadeIn(1500)}else if(t=="ingredient"){jQuery("#gmc-addingredient").show();jQuery("#gmc-show-addingredient").hide();jQuery("#gmc-ingredientslistbox").hide();jQuery("#gmc-ingredient-added").hide().fadeIn(1500)}}function doFeaturedImage(){if(jQuery("#postdiv")[0]&&jQuery("#gmc-addstep")[0]){jQuery("#gmc-post-thumbnail").insertBefore("#postdiv")}else if(jQuery("#postdivrich")[0]&&jQuery("#gmc-addstep")[0]){jQuery("#gmc-post-thumbnail").insertBefore("#postdivrich")}}function doPublishHide(){if(jQuery("#gmc-recipe-main")[0]){jQuery("#submitdiv .hndle span").html(saveRecipeMessage);var e=jQuery("#publish").val();if(e=="Publish"){jQuery("#publish").val(saveRecipeMessage)}else if(e=="Update"){jQuery("#publish").val(updateRecipeMessage)}else if(e=="Submit for Review"){jQuery("#publish").val(submitRecipeForReviewMessage)}else if(e=="Schedule"){jQuery("#publish").val(scheduleRecipeForPublishingMessage)}}}function getUrlEncodedKey(e,t){if(!t)t=window.location.search;var n=new RegExp("[?|&]"+e+"=(.*?)&");var r=n.exec(t+"&");if(!r||r.length<2)return"";return decodeURIComponent(r[1].replace("+"," "))}function doResizeTextAreas(){jQuery("textarea.autoResize").autoResize({extraSpace:20,minHeight:32})}function doModifyRichTextEditor(){if(jQuery("#editor-toolbar").length==0){jQuery("#postdivrich").appendTo("#gmc-note-desc");if(jQuery("#gmc-note").length>0){jQuery("#wp-content-media-buttons").remove()}}else{jQuery("#editor-toolbar, #editorcontainer, #post-status-info").appendTo("#gmc-note-desc")}}function doChangeSaveMessages(){if(typeof postPublishedMessage!=="undefined"){jQuery("#message:contains('Post published')").html(postPublishedMessage);jQuery("#message:contains('Post updated')").html(postUpdatedMessage)}}function doLoadInitialRegionDiv(){if(jQuery("#gmc-use-custom-region").val()=="Y"){jQuery("#gmc-standard-region-area").hide()}else{jQuery("#gmc-custom-region-area").hide()}jQuery("#gmc-show-custom-region").click(function(){jQuery("#gmc-use-custom-region").val("Y");jQuery("#gmc-standard-region-area").hide();jQuery("#gmc-custom-region-area").show();return false});jQuery("#gmc-show-standard-region").click(function(){jQuery("#gmc-use-custom-region").val("");jQuery("#gmc-custom-region-area").hide();jQuery("#gmc-standard-region-area").show();return false})}function doLoadInitialMeasurementDiv(){jQuery(".gmc-use-custom-measurement").each(function(){var e=jQuery(this)[0].id.substring(27);if(jQuery(this).val()=="Y"){jQuery("#gmc-standard-measurement-area-"+e).hide()}else{jQuery("#gmc-custom-measurement-area-"+e).hide()}});jQuery(document).on("click",".gmc-show-custom-measurement",function(){var e=this.id.substring(28);jQuery("#gmc-use-custom-measurement-"+e).val("Y");jQuery("#gmc-standard-measurement-area-"+e).hide();jQuery("#gmc-custom-measurement-area-"+e).show();return false});jQuery(document).on("click",".gmc-show-standard-measurement",function(){var e=this.id.substring(30);jQuery("#gmc-use-custom-measurement-"+e).val("");jQuery("#gmc-custom-measurement-area-"+e).hide();jQuery("#gmc-standard-measurement-area-"+e).show();return false})}function doConfirmationPrompts(){jQuery(".gmc-delete-ingredient").click(function(){var e=this.id.substring(25);jQuery("#gmc-ingredient-to-delete").val(e);jConfirm(confirmDeleteIngredientMessage,confirmDeleteIngredientTitle,function(e){if(e){jQuery("#post").submit()}});return false});jQuery(".gmc-delete-step").click(function(){var e=this.id.substring(19);jQuery("#gmc-step-to-delete").val(e);jConfirm(confirmDeleteStepMessage,confirmDeleteStepTitle,function(e){if(e){jQuery("#post").submit()}});return false});jQuery("#gmc-reset-css").click(function(){jConfirm(confirmResetCssMessage,confirmResetCssTitle,function(e){if(e){jQuery("#gmc_resetcss").val("Y");jQuery("#save-settings").click()}});return false})}function doLoadInitialSourceDiv(){showSourceDiv();jQuery("#gmc-source-type").change(function(e){showSourceDiv()})}function showSourceDiv(){jQuery("#gmc-source-author, #gmc-source-author-url, #gmc-source-book, #gmc-source-book-url, #gmc-source-mag, #gmc-source-mag-url, #gmc-source-website, #gmc-source-website-url").hide();if(jQuery("#gmc-source-type").val()=="Author"){jQuery("#gmc-source-author, #gmc-source-author-url").show()}else if(jQuery("#gmc-source-type").val()=="Book"){jQuery("#gmc-source-book, #gmc-source-book-url").show()}else if(jQuery("#gmc-source-type").val()=="Magazine"){jQuery("#gmc-source-mag, #gmc-source-mag-url").show()}else if(jQuery("#gmc-source-type").val()=="Website"){jQuery("#gmc-source-website, #gmc-source-website-url").show()}}function doPopulateTextInputHints(){var e="#666";jQuery(".gmc-ingredient-name-hint").each(function(){if(jQuery(this).val()=="")jQuery(this).val(ingredientName).css("color",e)});jQuery(document).on("focus",".gmc-ingredient-name-hint",function(){if(jQuery(this).val()==ingredientName)jQuery(this).val("").removeAttr("style")});jQuery(document).on("blur",".gmc-ingredient-name-hint",function(){if(jQuery(this).val()=="")jQuery(this).val(ingredientName).css("color",e)});jQuery(".gmc-ingredient-note-hint").each(function(){if(jQuery(this).val()=="")jQuery(this).val(ingredientNote).css("color",e)});jQuery(document).on("focus",".gmc-ingredient-note-hint",function(){if(jQuery(this).val()==ingredientNote)jQuery(this).val("").removeAttr("style")});jQuery(document).on("blur",".gmc-ingredient-note-hint",function(){if(jQuery(this).val()=="")jQuery(this).val(ingredientNote).css("color",e)});jQuery(".gmc-ingredient-quantity-hint").each(function(){if(jQuery(this).val()=="")jQuery(this).val(ingredientQuantity).css("color",e)});jQuery(document).on("focus",".gmc-ingredient-quantity-hint",function(){if(jQuery(this).val()==ingredientQuantity)jQuery(this).val("").removeAttr("style")});jQuery(document).on("blur",".gmc-ingredient-quantity-hint",function(){if(jQuery(this).val()=="")jQuery(this).val(ingredientQuantity).css("color",e)});if(jQuery("#gmc-description").val()=="")jQuery("#gmc-description").val(recipeDescription).css("color",e);jQuery(document).on("focus","#gmc-description",function(){if(jQuery(this).val()==recipeDescription)jQuery(this).val("").removeAttr("style")});jQuery(document).on("blur","#gmc-description",function(){if(jQuery(this).val()=="")jQuery(this).val(recipeDescription).css("color",e)})}function doGuide(){guiders.createGuider({buttons:[{name:"Close"},{name:"Next",onclick:function(){window.location.href="/wp-admin/edit.php?post_type=gmc_recipe#guider=second"}}],closeOnEscape:true,description:"You can run this tour at any time, from the GetMeCooking Settings menu on the left.",highlight:"#toplevel_page_getmecooking_options",id:"first",next:"second",overlay:true,title:"Thanks for installing the plugin!",width:500,xButton:true});guiders.createGuider({buttons:[{name:"Next"}],closeOnEscape:true,description:"This is where you add, edit and delete recipes.",highlight:"#menu-posts-gmc_recipe",id:"second",next:"third",overlay:true,title:"Recipe management",xButton:true});guiders.createGuider({buttons:[{name:"Next",onclick:function(){window.location.href=jQuery(".type-gmc_recipe .row-title").attr("href")+"#guider=fourth"}}],closeOnEscape:true,description:"Let's edit an existing recipe.",highlight:".wp-list-table",id:"third",next:"fourth",overlay:true,title:"Edit a recipe",xButton:true});guiders.createGuider({buttons:[{name:"Next",onclick:function(){window.location.href="/wp-admin/post-new.php#guider=fifth"}}],closeOnEscape:true,description:"Enter as much information as you want. The design will cater for anything you leave blank.<br/><br/>You can edit recipes at any time and the changes will be reflected throughout your blog.",id:"fourth",next:"fifth",overlay:true,title:"Edit a recipe",width:550,xButton:true});guiders.createGuider({buttons:[{name:"Next",onclick:function(){var e=jQuery("#gmc-insert-recipe-list").val();tinyMCE.activeEditor.setContent("[gmc_recipe "+e+"]");guiders.next()}}],closeOnEscape:true,description:"Now you have a recipe, you can add it to a blog post (or page).<br/><br/>Add a recipe by pressing the orange GetMeCooking icon in the toolbar.",id:"fifth",next:"sixth",overlay:true,title:"Add a recipe to a post",width:500,xButton:true});guiders.createGuider({buttons:[{name:"Next"}],closeOnEscape:true,description:"You can now see [gmc_recipe] within your post.<br/><br/>This is where the recipe will be shown.<br/>The recipe can be moved anywhere within a blog post.",id:"sixth",next:"seventh",overlay:true,title:"Recipe added to a post",xButton:true});guiders.createGuider({buttons:[{name:"Close"}],closeOnEscape:true,description:'Press the preview button to see how the recipe will look within your posts.<br/><br/>You can change the look and feel of the plugin from within the GetMeCooking Settings menu at any time.<br/><br/>If you need more features then please have a look at our <a href="http://www.getmecooking.com/wordpress-recipe-plugin">premium recipe plugin</a>. It has all the features of this plugin, plus more features for pro bloggers.<br/><br/>Thank you for completing the tour. Remember, you can run through this tour again at any time by selecting it in the GetMeCooking settings menu.',highlight:"#minor-publishing-actions",id:"seventh",overlay:true,title:"End of tour",width:650,xButton:true})}function gmcRemoveStepThumbnail(e,t){jQuery.post(ajaxurl,{action:"set-post-thumbnail",post_id:e,thumbnail_id:-1,_ajax_nonce:t,cookie:encodeURIComponent(document.cookie)},function(t){if(t=="0"){alert(setPostThumbnailL10n.error)}else{jQuery("#gmc-upload-thumbnail-"+e).fadeOut().html();jQuery("#remove-step-thumbnail-"+e).fadeOut().html()}})}jQuery.extend({getIframeUrlVars:function(){var e=[],t;var n=jQuery("#TB_iframeContent").attr("src");if(n.indexOf("#")!=-1){myhref2=n.substr(0,n.indexOf("#"));n=myhref2}var r=n.slice(n.indexOf("?")+1).split("&");for(var i=0;i<r.length;i++){t=r[i].split("=");e.push(t[0]);e[t[0]]=t[1]}return e},getIframeUrlVar:function(e){return jQuery.getIframeUrlVars()[e]}});jQuery(function(){doFeaturedImage();doModifyRichTextEditor();doResizeTextAreas();doChangeSaveMessages();doLoadInitialRegionDiv();doLoadInitialMeasurementDiv();doConfirmationPrompts();doLoadCorrectTab();doSteps();doIngredients();doPublishHide();doLoadInitialSourceDiv();doPopulateTextInputHints();doGuide();if(jQuery("#gmc-shortcodecss").length){var e=CodeMirror.fromTextArea(document.getElementById("gmc-shortcodecss"),{mode:"css",lineNumbers:true})}jQuery("input.colors").miniColors({change:function(e,t){}});jQuery(".chzn-select").chosen();jQuery(".sortable").sortable({items:"tr:not(.ui-state-disabled)"});jQuery("#publish").click(function(){jQuery(this).hide()});jQuery(".gmc-tooltip").tooltip({tipClass:"gmc-tooltip-text"});jQuery("#gmc-insert-recipe-button").click(function(){tinyMCE.activeEditor.execCommand("mceInsertContent",false,"[gmc_recipe "+jQuery("#gmc-insert-recipe-list").val()+"]");tinyMCEPopup.close();return false});jQuery("#conversionTable").hide();jQuery("#gmcToggleConversionChart").click(function(){if(jQuery("#conversionTable").is(":hidden")){jQuery(this).text("Hide conversion chart")}else{jQuery(this).text("Show conversion chart")}jQuery("#conversionTable").toggle();return false})})