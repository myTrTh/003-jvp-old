!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.flexibility=e()}}(function(){return function e(t,r,n){function l(i,s){if(!r[i]){if(!t[i]){var f="function"==typeof require&&require;if(!s&&f)return f(i,!0);if(o)return o(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return l(r||e)},c,c.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)l(n[i]);return l}({1:[function(e,t,r){t.exports=function(e){var t,r,n,l=-1;if(e.lines.length>1&&"flex-start"===e.style.alignContent)for(t=0;n=e.lines[++l];)n.crossStart=t,t+=n.cross;else if(e.lines.length>1&&"flex-end"===e.style.alignContent)for(t=e.flexStyle.crossSpace;n=e.lines[++l];)n.crossStart=t,t+=n.cross;else if(e.lines.length>1&&"center"===e.style.alignContent)for(t=e.flexStyle.crossSpace/2;n=e.lines[++l];)n.crossStart=t,t+=n.cross;else if(e.lines.length>1&&"space-between"===e.style.alignContent)for(r=e.flexStyle.crossSpace/(e.lines.length-1),t=0;n=e.lines[++l];)n.crossStart=t,t+=n.cross+r;else if(e.lines.length>1&&"space-around"===e.style.alignContent)for(r=2*e.flexStyle.crossSpace/(2*e.lines.length),t=r/2;n=e.lines[++l];)n.crossStart=t,t+=n.cross+r;else for(r=e.flexStyle.crossSpace/e.lines.length,t=e.flexStyle.crossInnerBefore;n=e.lines[++l];)n.crossStart=t,n.cross+=r,t+=n.cross}},{}],2:[function(e,t,r){t.exports=function(e){for(var t,r=-1;line=e.lines[++r];)for(t=-1;child=line.children[++t];){var n=child.style.alignSelf;"auto"===n&&(n=e.style.alignItems),"flex-start"===n?child.flexStyle.crossStart=line.crossStart:"flex-end"===n?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===n?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},{}],3:[function(e,t,r){t.exports=function(e,t){var r="row"===t||"row-reverse"===t,n=e.mainAxis;if(n){r&&"inline"===n||!r&&"block"===n||(e.flexStyle={main:e.flexStyle.cross,cross:e.flexStyle.main,mainOffset:e.flexStyle.crossOffset,crossOffset:e.flexStyle.mainOffset,mainBefore:e.flexStyle.crossBefore,mainAfter:e.flexStyle.crossAfter,crossBefore:e.flexStyle.mainBefore,crossAfter:e.flexStyle.mainAfter,mainInnerBefore:e.flexStyle.crossInnerBefore,mainInnerAfter:e.flexStyle.crossInnerAfter,crossInnerBefore:e.flexStyle.mainInnerBefore,crossInnerAfter:e.flexStyle.mainInnerAfter,mainBorderBefore:e.flexStyle.crossBorderBefore,mainBorderAfter:e.flexStyle.crossBorderAfter,crossBorderBefore:e.flexStyle.mainBorderBefore,crossBorderAfter:e.flexStyle.mainBorderAfter})}else e.flexStyle=r?{main:e.style.width,cross:e.style.height,mainOffset:e.style.offsetWidth,crossOffset:e.style.offsetHeight,mainBefore:e.style.marginLeft,mainAfter:e.style.marginRight,crossBefore:e.style.marginTop,crossAfter:e.style.marginBottom,mainInnerBefore:e.style.paddingLeft,mainInnerAfter:e.style.paddingRight,crossInnerBefore:e.style.paddingTop,crossInnerAfter:e.style.paddingBottom,mainBorderBefore:e.style.borderLeftWidth,mainBorderAfter:e.style.borderRightWidth,crossBorderBefore:e.style.borderTopWidth,crossBorderAfter:e.style.borderBottomWidth}:{main:e.style.height,cross:e.style.width,mainOffset:e.style.offsetHeight,crossOffset:e.style.offsetWidth,mainBefore:e.style.marginTop,mainAfter:e.style.marginBottom,crossBefore:e.style.marginLeft,crossAfter:e.style.marginRight,mainInnerBefore:e.style.paddingTop,mainInnerAfter:e.style.paddingBottom,crossInnerBefore:e.style.paddingLeft,crossInnerAfter:e.style.paddingRight,mainBorderBefore:e.style.borderTopWidth,mainBorderAfter:e.style.borderBottomWidth,crossBorderBefore:e.style.borderLeftWidth,crossBorderAfter:e.style.borderRightWidth},"content-box"===e.style.boxSizing&&("number"==typeof e.flexStyle.main&&(e.flexStyle.main+=e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),"number"==typeof e.flexStyle.cross&&(e.flexStyle.cross+=e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter));e.mainAxis=r?"inline":"block",e.crossAxis=r?"block":"inline","number"==typeof e.style.flexBasis&&(e.flexStyle.main=e.style.flexBasis+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),e.flexStyle.mainOuter=e.flexStyle.main,e.flexStyle.crossOuter=e.flexStyle.cross,"auto"===e.flexStyle.mainOuter&&(e.flexStyle.mainOuter=e.flexStyle.mainOffset),"auto"===e.flexStyle.crossOuter&&(e.flexStyle.crossOuter=e.flexStyle.crossOffset),"number"==typeof e.flexStyle.mainBefore&&(e.flexStyle.mainOuter+=e.flexStyle.mainBefore),"number"==typeof e.flexStyle.mainAfter&&(e.flexStyle.mainOuter+=e.flexStyle.mainAfter),"number"==typeof e.flexStyle.crossBefore&&(e.flexStyle.crossOuter+=e.flexStyle.crossBefore),"number"==typeof e.flexStyle.crossAfter&&(e.flexStyle.crossOuter+=e.flexStyle.crossAfter)}},{}],4:[function(e,t,r){var n=e("../reduce");t.exports=function(e){if(e.mainSpace>0){var t=n(e.children,function(e,t){return e+parseFloat(t.style.flexGrow)},0);t>0&&(e.main=n(e.children,function(r,n){return"auto"===n.flexStyle.main?n.flexStyle.main=n.flexStyle.mainOffset+parseFloat(n.style.flexGrow)/t*e.mainSpace:n.flexStyle.main+=parseFloat(n.style.flexGrow)/t*e.mainSpace,n.flexStyle.mainOuter=n.flexStyle.main+n.flexStyle.mainBefore+n.flexStyle.mainAfter,r+n.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],5:[function(e,t,r){var n=e("../reduce");t.exports=function(e){if(e.mainSpace<0){var t=n(e.children,function(e,t){return e+parseFloat(t.style.flexShrink)},0);t>0&&(e.main=n(e.children,function(r,n){return n.flexStyle.main+=parseFloat(n.style.flexShrink)/t*e.mainSpace,n.flexStyle.mainOuter=n.flexStyle.main+n.flexStyle.mainBefore+n.flexStyle.mainAfter,r+n.flexStyle.mainOuter},0),e.mainSpace=0)}}},{"../reduce":12}],6:[function(e,t,r){var n=e("../reduce");t.exports=function(e){var t;e.lines=[t={main:0,cross:0,children:[]}];for(var r,l=-1;r=e.children[++l];)"nowrap"===e.style.flexWrap||0===t.children.length||"auto"===e.flexStyle.main||e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter>=t.main+r.flexStyle.mainOuter?(t.main+=r.flexStyle.mainOuter,t.cross=Math.max(t.cross,r.flexStyle.crossOuter)):e.lines.push(t={main:r.flexStyle.mainOuter,cross:r.flexStyle.crossOuter,children:[]}),t.children.push(r);e.flexStyle.mainLines=n(e.lines,function(e,t){return Math.max(e,t.main)},0),e.flexStyle.crossLines=n(e.lines,function(e,t){return e+t.cross},0),"auto"===e.flexStyle.main&&(e.flexStyle.main=Math.max(e.flexStyle.mainOffset,e.flexStyle.mainLines+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter)),"auto"===e.flexStyle.cross&&(e.flexStyle.cross=Math.max(e.flexStyle.crossOffset,e.flexStyle.crossLines+e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter)),e.flexStyle.crossSpace=e.flexStyle.cross-e.flexStyle.crossInnerBefore-e.flexStyle.crossInnerAfter-e.flexStyle.crossBorderBefore-e.flexStyle.crossBorderAfter-e.flexStyle.crossLines,e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter,e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}},{"../reduce":12}],7:[function(e,t,r){function n(t){for(var r,n=-1;r=t.children[++n];)e("./flex-direction")(r,t.style.flexDirection);e("./flex-direction")(t,t.style.flexDirection),e("./order")(t),e("./flexbox-lines")(t),e("./align-content")(t),n=-1;for(var l;l=t.lines[++n];)l.mainSpace=t.flexStyle.main-t.flexStyle.mainInnerBefore-t.flexStyle.mainInnerAfter-t.flexStyle.mainBorderBefore-t.flexStyle.mainBorderAfter-l.main,e("./flex-grow")(l),e("./flex-shrink")(l),e("./margin-main")(l),e("./margin-cross")(l),e("./justify-content")(l,t.style.justifyContent,t);e("./align-items")(t)}t.exports=n},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(e,t,r){t.exports=function(e,t,r){var n,l,o,i=r.flexStyle.mainInnerBefore,s=-1;if("flex-end"===t)for(n=e.mainSpace,n+=i;o=e.children[++s];)o.flexStyle.mainStart=n,n+=o.flexStyle.mainOuter;else if("center"===t)for(n=e.mainSpace/2,n+=i;o=e.children[++s];)o.flexStyle.mainStart=n,n+=o.flexStyle.mainOuter;else if("space-between"===t)for(l=e.mainSpace/(e.children.length-1),n=0,n+=i;o=e.children[++s];)o.flexStyle.mainStart=n,n+=o.flexStyle.mainOuter+l;else if("space-around"===t)for(l=2*e.mainSpace/(2*e.children.length),n=l/2,n+=i;o=e.children[++s];)o.flexStyle.mainStart=n,n+=o.flexStyle.mainOuter+l;else for(n=0,n+=i;o=e.children[++s];)o.flexStyle.mainStart=n,n+=o.flexStyle.mainOuter}},{}],9:[function(e,t,r){t.exports=function(e){for(var t,r=-1;t=e.children[++r];){var n=0;"auto"===t.flexStyle.crossBefore&&++n,"auto"===t.flexStyle.crossAfter&&++n;var l=e.cross-t.flexStyle.crossOuter;"auto"===t.flexStyle.crossBefore&&(t.flexStyle.crossBefore=l/n),"auto"===t.flexStyle.crossAfter&&(t.flexStyle.crossAfter=l/n),"auto"===t.flexStyle.cross?t.flexStyle.crossOuter=t.flexStyle.crossOffset+t.flexStyle.crossBefore+t.flexStyle.crossAfter:t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}}},{}],10:[function(e,t,r){t.exports=function(e){for(var t,r=0,n=-1;t=e.children[++n];)"auto"===t.flexStyle.mainBefore&&++r,"auto"===t.flexStyle.mainAfter&&++r;if(r>0){for(n=-1;t=e.children[++n];)"auto"===t.flexStyle.mainBefore&&(t.flexStyle.mainBefore=e.mainSpace/r),"auto"===t.flexStyle.mainAfter&&(t.flexStyle.mainAfter=e.mainSpace/r),"auto"===t.flexStyle.main?t.flexStyle.mainOuter=t.flexStyle.mainOffset+t.flexStyle.mainBefore+t.flexStyle.mainAfter:t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter;e.mainSpace=0}}},{}],11:[function(e,t,r){var n=/^(column|row)-reverse$/;t.exports=function(e){e.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),n.test(e.style.flexDirection)&&e.children.reverse()}},{}],12:[function(e,t,r){function n(e,t,r){for(var n=e.length,l=-1;++l<n;)l in e&&(r=t(r,e[l],l));return r}t.exports=n},{}],13:[function(e,t,r){function n(e){s(i(e))}var l=e("./read"),o=e("./write"),i=e("./readAll"),s=e("./writeAll");t.exports=n,t.exports.read=l,t.exports.write=o,t.exports.readAll=i,t.exports.writeAll=s},{"./read":15,"./readAll":16,"./write":17,"./writeAll":18}],14:[function(e,t,r){function n(e,t,r){var n=e[t],i=String(n).match(o);if(!i){var a=t.match(f);if(a){return"none"===e["border"+a[1]+"Style"]?0:s[n]||0}return n}var c=i[1],u=i[2];return"px"===u?1*c:"cm"===u?.3937*c*96:"in"===u?96*c:"mm"===u?.3937*c*96/10:"pc"===u?12*c*96/72:"pt"===u?96*c/72:"rem"===u?16*c:l(n,r)}function l(e,t){i.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+e+"!important",t.parentNode.insertBefore(i,t.nextSibling);var r=i.offsetWidth;return t.parentNode.removeChild(i),r}t.exports=n;var o=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,i=document.createElement("div"),s={medium:4,none:0,thick:6,thin:2},f=/^border(Bottom|Left|Right|Top)Width$/},{}],15:[function(e,t,r){function n(e){var t={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomStyle:"none",borderBottomWidth:0,borderLeftStyle:"none",borderLeftWidth:0,borderRightStyle:"none",borderRightWidth:0,borderTopStyle:"none",borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"};if(e instanceof Element){var r=e.hasAttribute("data-style"),n=r?e.getAttribute("data-style"):e.getAttribute("style")||"";r||e.setAttribute("data-style",n),i(t,window.getComputedStyle&&getComputedStyle(e)||{}),l(t,e.currentStyle||{}),o(t,n);for(var s in t)t[s]=a(t,s,e);var f=e.getBoundingClientRect();t.offsetHeight=f.height||e.offsetHeight,t.offsetWidth=f.width||e.offsetWidth}return{element:e,style:t}}function l(e,t){for(var r in e){if(r in t)e[r]=t[r];else{var n=r.replace(/[A-Z]/g,"-$&").toLowerCase();n in t&&(e[r]=t[n])}}"-js-display"in t&&(e.display=t["-js-display"])}function o(e,t){for(var r;r=s.exec(t);){e[r[1].toLowerCase().replace(/-[a-z]/g,function(e){return e.slice(1).toUpperCase()})]=r[2]}}function i(e,t){for(var r in e){r in t&&!f.test(r)&&(e[r]=t[r])}}t.exports=n;var s=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,f=/^(alignSelf|height|width)$/,a=e("./getComputedLength")},{"./getComputedLength":14}],16:[function(e,t,r){function n(e){var t=[];return l(e,t),t}function l(e,t){for(var r,n=o(e),s=[],f=-1;r=e.childNodes[++f];){var a=3===r.nodeType&&!/^\s*$/.test(r.nodeValue);if(n&&a){var c=r;r=e.insertBefore(document.createElement("flex-item"),c),r.appendChild(c)}if(r instanceof Element){var u=l(r,t);if(n){var y=r.style;y.display="inline-block",y.position="absolute",u.style=i(r).style,s.push(u)}}}var m={element:e,children:s};return n&&(m.style=i(e).style,t.push(m)),m}function o(e){var t=e instanceof Element,r=t&&e.getAttribute("data-style"),n=t&&e.currentStyle&&e.currentStyle["-js-display"];return s.test(r)||f.test(n)}t.exports=n;var i=e("../read"),s=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,f=/^(inline-)?flex$/i},{"../read":15}],17:[function(e,t,r){function n(e){o(e);var t=e.element.style,r="inline"===e.mainAxis?["main","cross"]:["cross","main"];t.boxSizing="content-box",t.display="block",t.position="relative",t.width=l(e.flexStyle[r[0]]-e.flexStyle[r[0]+"InnerBefore"]-e.flexStyle[r[0]+"InnerAfter"]-e.flexStyle[r[0]+"BorderBefore"]-e.flexStyle[r[0]+"BorderAfter"]),t.height=l(e.flexStyle[r[1]]-e.flexStyle[r[1]+"InnerBefore"]-e.flexStyle[r[1]+"InnerAfter"]-e.flexStyle[r[1]+"BorderBefore"]-e.flexStyle[r[1]+"BorderAfter"]);for(var n,i=-1;n=e.children[++i];){var s=n.element.style,f="inline"===n.mainAxis?["main","cross"]:["cross","main"];s.boxSizing="content-box",s.display="block",s.position="absolute","auto"!==n.flexStyle[f[0]]&&(s.width=l(n.flexStyle[f[0]]-n.flexStyle[f[0]+"InnerBefore"]-n.flexStyle[f[0]+"InnerAfter"]-n.flexStyle[f[0]+"BorderBefore"]-n.flexStyle[f[0]+"BorderAfter"])),"auto"!==n.flexStyle[f[1]]&&(s.height=l(n.flexStyle[f[1]]-n.flexStyle[f[1]+"InnerBefore"]-n.flexStyle[f[1]+"InnerAfter"]-n.flexStyle[f[1]+"BorderBefore"]-n.flexStyle[f[1]+"BorderAfter"])),s.top=l(n.flexStyle[f[1]+"Start"]),s.left=l(n.flexStyle[f[0]+"Start"]),s.marginTop=l(n.flexStyle[f[1]+"Before"]),s.marginRight=l(n.flexStyle[f[0]+"After"]),s.marginBottom=l(n.flexStyle[f[1]+"After"]),s.marginLeft=l(n.flexStyle[f[0]+"Before"])}}function l(e){return"string"==typeof e?e:Math.max(e,0)+"px"}t.exports=n;var o=e("../flexbox")},{"../flexbox":7}],18:[function(e,t,r){function n(e){for(var t,r=-1;t=e[++r];)l(t)}t.exports=n;var l=e("../write")},{"../write":17}]},{},[13])(13)}),$(function(){$(".headsmile").on("click",function(){$(".smilepanel").slideToggle(200)})}),$(function(){$(".bbimg").on("click",function(){var e=$(this).attr("id"),t=$("textarea");if("post"==e)var r="post:",n="";else var r="["+e+"]",n="[/"+e+"]";var l=t[0].selectionStart,o=t[0].selectionEnd,i=t.val(),s=t.val().substr(l,o-l),f=r+s+n,a=t.val().length,c=i.substr(0,l),u=i.substr(o,a);t.val(c+f+u);t.val().length;t.focus(),0==s.length?t[0].setSelectionRange(l+r.length,l+r.length):t[0].setSelectionRange(l,o+r.length+n.length)})}),$(function(){$(".smiles").on("click",function(){var e=$(this).attr("id"),t=$("textarea"),r=e,n="";console.log(r);var l=t[0].selectionStart,o=t[0].selectionEnd,i=t.val(),s=t.val().substr(l,o-l),f=r+s+n,a=t.val().length,c=i.substr(0,l),u=i.substr(o,a);t.val(c+f+u);t.val().length;t.focus(),0==s.length?t[0].setSelectionRange(l+r.length,l+r.length):t[0].setSelectionRange(l,o+r.length+n.length)})}),$(function(){$(".spoiler-name").on("click",function(){var e=$(this).parent();$(".spoiler-body:first",e).slideToggle(200),"+"==$(".sign",e).html()?$(".sign:first",e).html("−"):$(".sign:first",e).html("+")})}),$(function(){$(".tumbler").on("click",function(){var e=$(this).attr("id"),t=e.substr(0,1),r=e.substr(1);$("#u"+r).html(""),$("#d"+r).html("");var n="id="+escape(r)+"&sign="+escape(t);$.ajaxSetup({cache:!1}),$.ajax({url:"/guestbook/ranking",data:n,type:"POST",dataType:"json",success:function(e){0==e.sum?$("#r"+r).html("<span class='gray'>"+e.sum+"</span>"):e.sum>0?$("#r"+r).html("<span class='green'>+"+e.sum+"</span>"):e.sum<0&&$("#r"+r).html("<span class='red'>"+e.sum+"</span>"),0==e.author_sum?$(".us"+e.author_id).html("<span class='gray'>"+e.author_sum+"</span>"):e.author_sum>0?$(".us"+e.author_id).html("<span class='green'>+"+e.author_sum+"</span>"):e.author_sum<0&&$(".us"+e.author_id).html("<span class='red'>"+e.author_sum+"</span>"),$("#ru"+r).html(e.plus),$("#rd"+r).html(e.minus)}})})}),$(function(){$(".post-ranking").on("mouseenter mouseleave",function(){var e=$(this).parent();$(".rank-users",e).stop(!0,!1).slideToggle(400)})}),$(function(){$('div[id^="nach"]').on("mouseenter",function(e){e.preventDefault(),$(".toolkit",this).stop(!0,!1).slideDown(200)})}),$(function(){$('div[id^="nach"]').on("mouseleave",function(e){e.preventDefault(),$(".toolkit",this).stop(!0,!1).slideUp(200)})}),$(function(){$('div[id^="topnach"]').on("mouseenter",function(e){e.preventDefault(),$(".toptoolkit",this).stop(!0,!1).fadeIn(200)})}),$(function(){$('div[id^="topnach"]').on("mouseleave",function(e){e.preventDefault(),$(".toptoolkit",this).stop(!0,!1).fadeOut(200)})}),$(function(){$(".edit-post").on("click",function(){var e=$(this).attr("id"),t=e.substr(4),r=$("#message"+t),n=r.html().trim(),l=$("#hm"+t).text().trim();$("#hm"+t).html(n);var o=r.outerHeight(!0)+5;o<150&&(o=150),r.html("<textarea style='height: "+o+"px'>"+l+"</textarea><button id='update"+t+"' class='update button button-main'>Обновить</button><button id='cancel"+t+"' class='cancel button button-main'>Отмена</button>")})}),$(function(){$(document).on("click",".cancel",function(){var e=$(this).attr("id"),t=e.substr(6),r=$("#hm"+t).html().trim(),n=$("#message"+t+" > textarea").html().trim();$("#hm"+t).html(n),$("#message"+t).html(r)})}),$(function(){$(document).on("click",".update",function(){var e=$(this).attr("id"),t=e.substr(6),r=($("#post"+t),$("#message"+t+" > textarea").val()),n="id="+escape(t)+"&message="+encodeURIComponent(r);$.ajaxSetup({cache:!1}),$.ajax({url:"/guestbook/edit",data:n,type:"POST",dataType:"json",success:function(e){1==e.error?alert(e.text):($("#message"+t).html(e.text),$("#hm"+t).html(e.hide))}})})}),$(function(){$(".quote").on("click",function(){var e=$(this).parent().parent().parent().parent().attr("id"),t=e.substr(4),r=$(this).parent().parent().prev().children().next().children().children().html().trim(),n=$("#hd"+t).text().trim(),l=$("#hm"+t).text().trim();console.log(l);var o="[quote author="+r+" date="+n+" post="+t+"]\n"+l+"\n[/quote]\n\n",i=$("textarea"),s=i[0].selectionStart,f=i[0].selectionEnd,a=i.val(),c=a.substr(0,s),u=i.val().length,y=a.substr(f,u);i.val(c+o+y),i.focus(),i[0].setSelectionRange(s+o.length,s+o.length),$("html, body").animate({scrollTop:220},500)})}),$(function(){$("#navigation li").on("mouseenter",function(){$("ul",this).stop(!0,!1).slideDown(300)})}),$(function(){$("#navigation li").on("mouseleave",function(){$("ul",this).stop(!0,!1).slideUp(300)})}),$(function(){$('input[type="file"]',this).on("change",function(){var e=$(this);$(".in-file-text").html(e.val())})}),$(function(){$("#add_option").on("click",function(){var e=$(".optionsgroup > input").length;$(".optionsgroup").append('<input type="text" name="option['+e+']">')})}),$(function(){$("#remove_option").on("click",function(){$(".optionsgroup > input").length>2?$(".optionsgroup input:last").remove():alert("Должно быть минимум два варианта ответа")})});