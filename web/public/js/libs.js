$(function(){$(".users-panel-info").on("click",function(){var e=$(this).parent();$(".users-panel-body",e).slideToggle(300)})}),$(function(){$(".send_group").on("click",function(){var e=$(this).parent(),t=e.children('input[type="hidden"]').val(),n=e.attr("id"),r=n.substr(4),l=e.children("input:checked").val(),o="id="+escape(r)+"&role="+escape(l)+"&old="+escape(t);$.ajaxSetup({cache:!1}),$.ajax({url:"/ajax/adminpanel/setrole",type:"POST",data:o,success:function(){e.children('input[type="hidden"]').val(l),"ROLE_BANNED_0"==l?($("#panel"+r).removeClass("background-warning"),$("#panel"+r).removeClass("background-danger")):"ROLE_BANNED_1"==l?($("#panel"+r).removeClass("background-danger"),$("#panel"+r).addClass("background-warning")):($("#panel"+r).removeClass("background-warning"),$("#panel"+r).addClass("background-danger"))}})})}),$(document).ready(function(){var e=$("input:checked").val();1==e?($(".schema1").css("display","block"),$(".schema2").css("display","block"),$(".schema3").css("display","none")):2==e?($(".schema1").css("display","block"),$(".schema2").css("display","none"),$(".schema3").css("display","none")):($(".schema1").css("display","block"),$(".schema2").css("display","block"),$(".schema3").css("display","block"))}),$(function(){$(document).on("focus",".radios",function(){var e=$(this).val();console.log(e),1==e?($(".schema1").show(500),$(".schema2").show(500),$(".schema3").hide(500)):2==e?($(".schema1").show(500),$(".schema2").hide(500),$(".schema3").hide(500)):($(".schema1").show(500),$(".schema2").show(500),$(".schema3").show(500))})}),$(document).ready(function(){var e=$(".tournament-user div").length;$(".allow").html(e)}),$(function(){$(document).on("click",".preteam",function(){var e=$(this),t=e.attr("id"),n=t.substr(1);e.removeClass("preteam"),e.addClass("team");var r=$("#schema").html(),l=$(".tournament-user div").length;if(1==r){var o=$(".tournament-user");o.append(e)}else if(2==r){var o=$(".tournament-user");o.append(e),l%2==0?o.append(" - "):o.append("<br>")}else if(3==r){var i=$("#groups").html(),o=$(".tournament-user");if(l%i==0){var s;0==l&&(s="A"),4==l&&(s="B"),8==l&&(s="C"),12==l&&(s="D"),16==l&&(s="E"),20==l&&(s="F"),24==l&&(s="G"),26==l&&(s="H"),o.append("<br>ГРУППА "+s+"<br>")}o.append(e)}$(".form-hidden").append('<input type="hidden" id="form_user_'+n+'" name="form[user]['+n+']" value="'+n+'" class="form-control" />');var a=$(".tournament-user div").length;$(".allow").html(a);var f=$(".all").html(),c=$(".but");0==$("#groups").html()?f==a?(console.log("all "+f+" allow "+a),c.show()):c.hide():2==a||4==a||8==a||16==a||32==a||64==a||128==a||256==a?c.show():c.hide()})}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.flexibility=e()}}(function(){return function e(t,n,r){function l(i,s){if(!n[i]){if(!t[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(o)return o(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return l(n||e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)l(r[i]);return l}({1:[function(e,t,n){t.exports=function(e){var t,n,r,l=-1;if(e.lines.length>1&&"flex-start"===e.style.alignContent)for(t=0;r=e.lines[++l];)r.crossStart=t,t+=r.cross;else if(e.lines.length>1&&"flex-end"===e.style.alignContent)for(t=e.flexStyle.crossSpace;r=e.lines[++l];)r.crossStart=t,t+=r.cross;else if(e.lines.length>1&&"center"===e.style.alignContent)for(t=e.flexStyle.crossSpace/2;r=e.lines[++l];)r.crossStart=t,t+=r.cross;else if(e.lines.length>1&&"space-between"===e.style.alignContent)for(n=e.flexStyle.crossSpace/(e.lines.length-1),t=0;r=e.lines[++l];)r.crossStart=t,t+=r.cross+n;else if(e.lines.length>1&&"space-around"===e.style.alignContent)for(n=2*e.flexStyle.crossSpace/(2*e.lines.length),t=n/2;r=e.lines[++l];)r.crossStart=t,t+=r.cross+n;else for(n=e.flexStyle.crossSpace/e.lines.length,t=e.flexStyle.crossInnerBefore;r=e.lines[++l];)r.crossStart=t,r.cross+=n,t+=r.cross}},{}],2:[function(e,t,n){t.exports=function(e){for(var t,n=-1;line=e.lines[++n];)for(t=-1;child=line.children[++t];){var r=child.style.alignSelf;"auto"===r&&(r=e.style.alignItems),"flex-start"===r?child.flexStyle.crossStart=line.crossStart:"flex-end"===r?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===r?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},{}],3:[function(e,t,n){t.exports=function(e,t){var n="row"===t||"row-reverse"===t,r=e.mainAxis;if(r){n&&"inline"===r||!n&&"block"===r||(e.flexStyle={main:e.flexStyle.cross,cross:e.flexStyle.main,mainOffset:e.flexStyle.crossOffset,crossOffset:e.flexStyle.mainOffset,mainBefore:e.flexStyle.crossBefore,mainAfter:e.flexStyle.crossAfter,crossBefore:e.flexStyle.mainBefore,crossAfter:e.flexStyle.mainAfter,mainInnerBefore:e.flexStyle.crossInnerBefore,mainInnerAfter:e.flexStyle.crossInnerAfter,crossInnerBefore:e.flexStyle.mainInnerBefore,crossInnerAfter:e.flexStyle.mainInnerAfter,mainBorderBefore:e.flexStyle.crossBorderBefore,mainBorderAfter:e.flexStyle.crossBorderAfter,crossBorderBefore:e.flexStyle.mainBorderBefore,crossBorderAfter:e.flexStyle.mainBorderAfter})}else e.flexStyle=n?{main:e.style.width,cross:e.style.height,mainOffset:e.style.offsetWidth,crossOffset:e.style.offsetHeight,mainBefore:e.style.marginLeft,mainAfter:e.style.marginRight,crossBefore:e.style.marginTop,crossAfter:e.style.marginBottom,mainInnerBefore:e.style.paddingLeft,mainInnerAfter:e.style.paddingRight,crossInnerBefore:e.style.paddingTop,crossInnerAfter:e.style.paddingBottom,mainBorderBefore:e.style.borderLeftWidth,mainBorderAfter:e.style.borderRightWidth,crossBorderBefore:e.style.borderTopWidth,crossBorderAfter:e.style.borderBottomWidth}:{main:e.style.height,cross:e.style.width,mainOffset:e.style.offsetHeight,crossOffset:e.style.offsetWidth,mainBefore:e.style.marginTop,mainAfter:e.style.marginBottom,crossBefore:e.style.marginLeft,crossAfter:e.style.marginRight,mainInnerBefore:e.style.paddingTop,mainInnerAfter:e.style.paddingBottom,crossInnerBefore:e.style.paddingLeft,crossInnerAfter:e.style.paddingRight,mainBorderBefore:e.style.borderTopWidth,mainBorderAfter:e.style.borderBottomWidth,crossBorderBefore:e.style.borderLeftWidth,crossBorderAfter:e.style.borderRightWidth},"content-box"===e.style.boxSizing&&("number"==typeof e.flexStyle.main&&(e.flexStyle.main+=e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),"number"==typeof e.flexStyle.cross&&(e.flexStyle.cross+=e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter));e.mainAxis=n?"inline":"block",e.crossAxis=n?"block":"inline","number"==typeof e.style.flexBasis&&(e.flexStyle.main=e.style.flexBasis+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),e.flexStyle.mainOuter=e.flexStyle.main,e.flexStyle.crossOuter=e.flexStyle.cross,"auto"===e.flexStyle.mainOuter&&(e.flexStyle.mainOuter=e.flexStyle.mainOffset),"auto"===e.flexStyle.crossOuter&&(e.flexStyle.crossOuter=e.flexStyle.crossOffset),"number"==typeof e.flexStyle.mainBefore&&(e.flexStyle.mainOuter+=e.flexStyle.mainBefore),"number"==typeof e.flexStyle.mainAfter&&(e.flexStyle.mainOuter+=e.flexStyle.mainAfter),"number"==typeof e.flexStyle.crossBefore&&(e.flexStyle.crossOuter+=e.flexStyle.crossBefore),"number"==typeof e.flexStyle.crossAfter&&(e.flexStyle.crossOuter+=e.flexStyle.crossAfter)}},{}],4:[function(e,t,n){var r=e("../reduce");t.exports=function(e){if(e.mainSpace>0){var t=r(e.children,function(e,t){return e+parseFloat(t.style.flexGrow)},0);t>0&&(e.main=r(e.children,function(n,r){return"auto"===r.flexStyle.main?r.flexStyle.main=r.flexStyle.mainOffset+parseFloat(r.style.flexGrow)/t*e.mainSpace:r.flexStyle.main+=parseFloat(r.style.flexGrow)/t*e.mainSpace,r.flexStyle.mainOuter=r.flexStyle.main+r.flexStyle.mainBefore+r.flexStyle.mainAfter,n+r.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],5:[function(e,t,n){var r=e("../reduce");t.exports=function(e){if(e.mainSpace<0){var t=r(e.children,function(e,t){return e+parseFloat(t.style.flexShrink)},0);t>0&&(e.main=r(e.children,function(n,r){return r.flexStyle.main+=parseFloat(r.style.flexShrink)/t*e.mainSpace,r.flexStyle.mainOuter=r.flexStyle.main+r.flexStyle.mainBefore+r.flexStyle.mainAfter,n+r.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],6:[function(e,t,n){var r=e("../reduce");t.exports=function(e){var t;e.lines=[t={main:0,cross:0,children:[]}];for(var n,l=-1;n=e.children[++l];)"nowrap"===e.style.flexWrap||0===t.children.length||"auto"===e.flexStyle.main||e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter>=t.main+n.flexStyle.mainOuter?(t.main+=n.flexStyle.mainOuter,t.cross=Math.max(t.cross,n.flexStyle.crossOuter)):e.lines.push(t={main:n.flexStyle.mainOuter,cross:n.flexStyle.crossOuter,children:[]}),t.children.push(n);e.flexStyle.mainLines=r(e.lines,function(e,t){return Math.max(e,t.main)},0),e.flexStyle.crossLines=r(e.lines,function(e,t){return e+t.cross},0),"auto"===e.flexStyle.main&&(e.flexStyle.main=Math.max(e.flexStyle.mainOffset,e.flexStyle.mainLines+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter)),"auto"===e.flexStyle.cross&&(e.flexStyle.cross=Math.max(e.flexStyle.crossOffset,e.flexStyle.crossLines+e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter)),e.flexStyle.crossSpace=e.flexStyle.cross-e.flexStyle.crossInnerBefore-e.flexStyle.crossInnerAfter-e.flexStyle.crossBorderBefore-e.flexStyle.crossBorderAfter-e.flexStyle.crossLines,e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter,e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}},{"../reduce":12}],7:[function(e,t,n){function r(t){for(var n,r=-1;n=t.children[++r];)e("./flex-direction")(n,t.style.flexDirection);e("./flex-direction")(t,t.style.flexDirection),e("./order")(t),e("./flexbox-lines")(t),e("./align-content")(t),r=-1;for(var l;l=t.lines[++r];)l.mainSpace=t.flexStyle.main-t.flexStyle.mainInnerBefore-t.flexStyle.mainInnerAfter-t.flexStyle.mainBorderBefore-t.flexStyle.mainBorderAfter-l.main,e("./flex-grow")(l),e("./flex-shrink")(l),e("./margin-main")(l),e("./margin-cross")(l),e("./justify-content")(l,t.style.justifyContent,t);e("./align-items")(t)}t.exports=r},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(e,t,n){t.exports=function(e,t,n){var r,l,o,i=n.flexStyle.mainInnerBefore,s=-1;if("flex-end"===t)for(r=e.mainSpace,r+=i;o=e.children[++s];)o.flexStyle.mainStart=r,r+=o.flexStyle.mainOuter;else if("center"===t)for(r=e.mainSpace/2,r+=i;o=e.children[++s];)o.flexStyle.mainStart=r,r+=o.flexStyle.mainOuter;else if("space-between"===t)for(l=e.mainSpace/(e.children.length-1),r=0,r+=i;o=e.children[++s];)o.flexStyle.mainStart=r,r+=o.flexStyle.mainOuter+l;else if("space-around"===t)for(l=2*e.mainSpace/(2*e.children.length),r=l/2,r+=i;o=e.children[++s];)o.flexStyle.mainStart=r,r+=o.flexStyle.mainOuter+l;else for(r=0,r+=i;o=e.children[++s];)o.flexStyle.mainStart=r,r+=o.flexStyle.mainOuter}},{}],9:[function(e,t,n){t.exports=function(e){for(var t,n=-1;t=e.children[++n];){var r=0;"auto"===t.flexStyle.crossBefore&&++r,"auto"===t.flexStyle.crossAfter&&++r;var l=e.cross-t.flexStyle.crossOuter;"auto"===t.flexStyle.crossBefore&&(t.flexStyle.crossBefore=l/r),"auto"===t.flexStyle.crossAfter&&(t.flexStyle.crossAfter=l/r),"auto"===t.flexStyle.cross?t.flexStyle.crossOuter=t.flexStyle.crossOffset+t.flexStyle.crossBefore+t.flexStyle.crossAfter:t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}}},{}],10:[function(e,t,n){t.exports=function(e){for(var t,n=0,r=-1;t=e.children[++r];)"auto"===t.flexStyle.mainBefore&&++n,"auto"===t.flexStyle.mainAfter&&++n;if(n>0){for(r=-1;t=e.children[++r];)"auto"===t.flexStyle.mainBefore&&(t.flexStyle.mainBefore=e.mainSpace/n),"auto"===t.flexStyle.mainAfter&&(t.flexStyle.mainAfter=e.mainSpace/n),"auto"===t.flexStyle.main?t.flexStyle.mainOuter=t.flexStyle.mainOffset+t.flexStyle.mainBefore+t.flexStyle.mainAfter:t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter;e.mainSpace=0}}},{}],11:[function(e,t,n){var r=/^(column|row)-reverse$/;t.exports=function(e){e.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),r.test(e.style.flexDirection)&&e.children.reverse()}},{}],12:[function(e,t,n){function r(e,t,n){for(var r=e.length,l=-1;++l<r;)l in e&&(n=t(n,e[l],l));return n}t.exports=r},{}],13:[function(e,t,n){function r(e){s(i(e))}var l=e("./read"),o=e("./write"),i=e("./readAll"),s=e("./writeAll");t.exports=r,t.exports.read=l,t.exports.write=o,t.exports.readAll=i,t.exports.writeAll=s},{"./read":15,"./readAll":16,"./write":17,"./writeAll":18}],14:[function(e,t,n){function r(e,t,n){var r=e[t],i=String(r).match(o);if(!i){var f=t.match(a);if(f){return"none"===e["border"+f[1]+"Style"]?0:s[r]||0}return r}var c=i[1],u=i[2];return"px"===u?1*c:"cm"===u?.3937*c*96:"in"===u?96*c:"mm"===u?.3937*c*96/10:"pc"===u?12*c*96/72:"pt"===u?96*c/72:"rem"===u?16*c:l(r,n)}function l(e,t){i.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+e+"!important",t.parentNode.insertBefore(i,t.nextSibling);var n=i.offsetWidth;return t.parentNode.removeChild(i),n}t.exports=r;var o=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,i=document.createElement("div"),s={medium:4,none:0,thick:6,thin:2},a=/^border(Bottom|Left|Right|Top)Width$/},{}],15:[function(e,t,n){function r(e){var t={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"};if(e instanceof Element){var n=e.hasAttribute("data-style"),r=n?e.getAttribute("data-style"):e.getAttribute("style")||"";n||e.setAttribute("data-style",r),i(t,window.getComputedStyle&&getComputedStyle(e)||{}),l(t,e.currentStyle||{}),o(t,r);for(var s in t)t[s]=f(t,s,e);var a=e.getBoundingClientRect();t.offsetHeight=a.height||e.offsetHeight,t.offsetWidth=a.width||e.offsetWidth}return{element:e,style:t}}function l(e,t){for(var n in e){if(n in t)e[n]=t[n];else{var r=n.replace(/[A-Z]/g,"-$&").toLowerCase();r in t&&(e[n]=t[r])}}"-js-display"in t&&(e.display=t["-js-display"])}function o(e,t){for(var n;n=s.exec(t);){e[n[1].toLowerCase().replace(/-[a-z]/g,function(e){return e.slice(1).toUpperCase()})]=n[2]}}function i(e,t){for(var n in e){n in t&&!a.test(n)&&(e[n]=t[n])}}t.exports=r;var s=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,a=/^(alignSelf|height|width)$/,f=e("./getComputedLength")},{"./getComputedLength":14}],16:[function(e,t,n){function r(e){var t=[];return l(e,t),t}function l(e,t){for(var n,r=o(e),s=[],a=-1;n=e.childNodes[++a];){var f=3===n.nodeType&&!/^\s*$/.test(n.nodeValue);if(r&&f){var c=n;n=e.insertBefore(document.createElement("flex-item"),c),n.appendChild(c)}if(n instanceof Element){var u=l(n,t);if(r){var d=n.style;d.display="inline-block",d.position="absolute",u.style=i(n).style,s.push(u)}}}var m={element:e,children:s};return r&&(m.style=i(e).style,t.push(m)),m}function o(e){var t=e instanceof Element,n=t&&e.getAttribute("data-style"),r=t&&e.currentStyle&&e.currentStyle["-js-display"];return s.test(n)||a.test(r)}t.exports=r;var i=e("../read"),s=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,a=/^(inline-)?flex$/i},{"../read":15}],17:[function(e,t,n){function r(e){o(e);var t=e.element.style,n="inline"===e.mainAxis?["main","cross"]:["cross","main"];t.boxSizing="content-box",t.display="block",t.position="relative",t.width=l(e.flexStyle[n[0]]-e.flexStyle[n[0]+"InnerBefore"]-e.flexStyle[n[0]+"InnerAfter"]-e.flexStyle[n[0]+"BorderBefore"]-e.flexStyle[n[0]+"BorderAfter"]),t.height=l(e.flexStyle[n[1]]-e.flexStyle[n[1]+"InnerBefore"]-e.flexStyle[n[1]+"InnerAfter"]-e.flexStyle[n[1]+"BorderBefore"]-e.flexStyle[n[1]+"BorderAfter"]);for(var r,i=-1;r=e.children[++i];){var s=r.element.style,a="inline"===r.mainAxis?["main","cross"]:["cross","main"];s.boxSizing="content-box",s.display="block",s.position="absolute","auto"!==r.flexStyle[a[0]]&&(s.width=l(r.flexStyle[a[0]]-r.flexStyle[a[0]+"InnerBefore"]-r.flexStyle[a[0]+"InnerAfter"]-r.flexStyle[a[0]+"BorderBefore"]-r.flexStyle[a[0]+"BorderAfter"])),"auto"!==r.flexStyle[a[1]]&&(s.height=l(r.flexStyle[a[1]]-r.flexStyle[a[1]+"InnerBefore"]-r.flexStyle[a[1]+"InnerAfter"]-r.flexStyle[a[1]+"BorderBefore"]-r.flexStyle[a[1]+"BorderAfter"])),s.top=l(r.flexStyle[a[1]+"Start"]),s.left=l(r.flexStyle[a[0]+"Start"]),s.marginTop=l(r.flexStyle[a[1]+"Before"]),s.marginRight=l(r.flexStyle[a[0]+"After"]),s.marginBottom=l(r.flexStyle[a[1]+"After"]),s.marginLeft=l(r.flexStyle[a[0]+"Before"])}}function l(e){return"string"==typeof e?e:Math.max(e,0)+"px"}t.exports=r;var o=e("../flexbox")},{"../flexbox":7}],18:[function(e,t,n){function r(e){for(var t,n=-1;t=e[++n];)l(t)}t.exports=r;var l=e("../write")},{"../write":17}]},{},[13])(13)}),$(function(){$(".headsmile").on("click",function(){$(".smilepanel").slideToggle(200)})}),$(function(){$(".bbimg").on("click",function(){var e=$(this).attr("id"),t=$("textarea");if("post"==e)var n="post:",r="";else var n="["+e+"]",r="[/"+e+"]";var l=t[0].selectionStart,o=t[0].selectionEnd,i=t.val(),s=t.val().substr(l,o-l),a=n+s+r,f=t.val().length,c=i.substr(0,l),u=i.substr(o,f);t.val(c+a+u);t.val().length;t.focus(),0==s.length?t[0].setSelectionRange(l+n.length,l+n.length):t[0].setSelectionRange(l,o+n.length+r.length)})}),$(function(){$(".smiles").on("click",function(){var e=$(this).attr("id"),t=$("textarea"),n=e,r="";console.log(n);var l=t[0].selectionStart,o=t[0].selectionEnd,i=t.val(),s=t.val().substr(l,o-l),a=n+s+r,f=t.val().length,c=i.substr(0,l),u=i.substr(o,f);t.val(c+a+u);t.val().length;t.focus(),0==s.length?t[0].setSelectionRange(l+n.length,l+n.length):t[0].setSelectionRange(l,o+n.length+r.length)})}),$(function(){$(".spoiler-name").on("click",function(){var e=$(this).parent();$(".spoiler-body:first",e).slideToggle(200),"+"==$(".sign",e).html()?$(".sign:first",e).html("−"):$(".sign:first",e).html("+")})}),$(function(){$(".tumbler").on("click",function(){var e=$(this).attr("id"),t=e.substr(0,1),n=e.substr(1);$("#u"+n).html(""),$("#d"+n).html("");var r="id="+escape(n)+"&sign="+escape(t);$.ajaxSetup({cache:!1}),$.ajax({url:"/guestbook/ranking",data:r,type:"POST",dataType:"json",success:function(e){0==e.sum?$("#r"+n).html("<span class='gray'>"+e.sum+"</span>"):e.sum>0?$("#r"+n).html("<span class='green'>+"+e.sum+"</span>"):e.sum<0&&$("#r"+n).html("<span class='red'>"+e.sum+"</span>"),0==e.author_sum?$(".us"+e.author_id).html("<span class='gray'>"+e.author_sum+"</span>"):e.author_sum>0?$(".us"+e.author_id).html("<span class='green'>+"+e.author_sum+"</span>"):e.author_sum<0&&$(".us"+e.author_id).html("<span class='red'>"+e.author_sum+"</span>"),$("#ru"+n).html(e.plus),$("#rd"+n).html(e.minus)}})})}),$(function(){$(".post-ranking").on("mouseenter mouseleave",function(){var e=$(this).parent();$(".rank-users",e).stop(!0,!1).slideToggle(400)})}),$(function(){$('div[id^="nach"]').on("mouseenter",function(e){e.preventDefault(),$(".toolkit",this).stop(!0,!1).slideDown(200)})}),$(function(){$('div[id^="nach"]').on("mouseleave",function(e){e.preventDefault(),$(".toolkit",this).stop(!0,!1).slideUp(200)})}),$(function(){$('div[id^="topnach"]').on("mouseenter",function(e){e.preventDefault(),$(".toptoolkit",this).stop(!0,!1).fadeIn(200)})}),$(function(){$('div[id^="topnach"]').on("mouseleave",function(e){e.preventDefault(),$(".toptoolkit",this).stop(!0,!1).fadeOut(200)})}),$(function(){$(".edit-post").on("click",function(){var e=$(this).attr("id"),t=e.substr(4),n=$("#message"+t),r=n.html().trim(),l=$("#hm"+t).text().trim();$("#hm"+t).html(r);var o=n.outerHeight(!0)+5;o<150&&(o=150),n.html("<textarea style='height: "+o+"px'>"+l+"</textarea><button id='update"+t+"' class='update button button-main'>Обновить</button><button id='cancel"+t+"' class='cancel button button-main'>Отмена</button>")})}),$(function(){$(document).on("click",".cancel",function(){var e=$(this).attr("id"),t=e.substr(6),n=$("#hm"+t).html().trim(),r=$("#message"+t+" > textarea").html().trim();$("#hm"+t).html(r),$("#message"+t).html(n)})}),$(function(){$(document).on("click",".update",function(){var e=$(this).attr("id"),t=e.substr(6),n=($("#post"+t),$("#message"+t+" > textarea").val()),r="id="+escape(t)+"&message="+encodeURIComponent(n);$.ajaxSetup({cache:!1}),$.ajax({url:"/guestbook/edit",data:r,type:"POST",dataType:"json",success:function(e){1==e.error?alert(e.text):($("#message"+t).html(e.text),$("#hm"+t).html(e.hide),0!=e.edit&&$("#post-edit"+t).html("...<i class='fa fa-edit'></i>"+e.edit))}})})}),$(function(){$(".quote").on("click",function(){var e=$(this).parent().parent().parent().parent().attr("id"),t=e.substr(4),n=$(this).parent().parent().prev().children().next().children().children().html().trim(),r=$("#hd"+t).text().trim(),l=$("#hm"+t).text().trim();console.log(l);var o="[quote author="+n+" date="+r+" post="+t+"]\n"+l+"\n[/quote]\n\n",i=$("textarea"),s=i[0].selectionStart,a=i[0].selectionEnd,f=i.val(),c=f.substr(0,s),u=i.val().length,d=f.substr(a,u);i.val(c+o+d),i.focus(),i[0].setSelectionRange(s+o.length,s+o.length),$("html, body").animate({scrollTop:220},500)})}),$(function(){$('div[id^="nach"]').on("mouseenter",function(e){e.preventDefault(),$(".toolkit",this).stop(!0,!1).slideDown(200)})}),$(function(){$('div[id^="nach"]').on("mouseleave",function(e){e.preventDefault(),$(".toolkit",this).stop(!0,!1).slideUp(200)})}),$(function(){$('div[id^="topnach"]').on("mouseenter",function(e){e.preventDefault(),$(".toptoolkit",this).stop(!0,!1).fadeIn(200)})}),$(function(){$("#navigation li").on("mouseenter",function(){$("ul",this).stop(!0,!1).slideDown(300)})}),$(function(){$("#navigation li").on("mouseleave",function(){$("ul",this).stop(!0,!1).slideUp(300)})}),$(function(){$('input[type="file"]',this).on("change",function(){var e=$(this);$(".in-file-text").html(e.val())})}),$(function(){$(".notification").on("click",function(){var e=$(this).attr("id"),t=$(this).prop("checked"),n="notification="+escape(e)+"&status="+escape(t);$.ajaxSetup({cache:!1}),$.ajax({url:"/notification/set",data:n,type:"POST",dataType:"json",success:function(e){}})})}),$(function(){$("#add_option").on("click",function(){var e=$(".optionsgroup > input").length;$(".optionsgroup").append('<input type="text" name="option['+e+']">')})}),$(function(){$("#remove_option").on("click",function(){$(".optionsgroup > input").length>2?$(".optionsgroup input:last").remove():alert("Должно быть минимум два варианта ответа")})});