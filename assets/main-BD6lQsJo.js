import"./vendor-WCCuxU8k.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))y(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const x of f.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&y(x)}).observe(document,{childList:!0,subtree:!0});function g(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function y(c){if(c.ep)return;c.ep=!0;const f=g(c);fetch(c.href,f)}})();(()=>{const n={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};n.openModalBtn.addEventListener("click",u),n.closeModalBtn.addEventListener("click",u);function u(){n.modal.classList.toggle("is-open")}})();$(document).ready(function(){$(".strategies-list").slick({dots:!0,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:3e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1150,settings:{slidesToShow:1,slidesToScroll:1}}]})});$(document).ready(function(){function n(){$(window).width()<1150?$(".clients-list").hasClass("slick-initialized")||$(".clients-list").slick({dots:!0,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1}):$(".clients-list").hasClass("slick-initialized")&&$(".clients-list").slick("unslick")}n(),$(window).on("resize",function(){n()})});(function(n){var u='<?xml version="1.0" encoding="utf-8"?><svg version="1.1"xmlns="http://www.w3.org/2000/svg"viewBox="0 12.705 512 486.59"x="0px" y="0px"xml:space="preserve"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "/></svg>',g={starWidth:"32px",normalFill:"gray",ratedFill:"#f39c12",numStars:5,maxValue:5,precision:1,rating:0,fullStar:!1,halfStar:!1,readOnly:!1,spacing:"0px",rtl:!1,multiColor:null,onInit:null,onChange:null,onSet:null,starSvg:null},y={startColor:"#c0392b",endColor:"#f1c40f"};function c(){var r=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(r=!0)}(navigator.userAgent||navigator.vendor||window.opera),r}function f(r,e,s){return r===e?r=e:r===s&&(r=s),r}function x(r,e,s){var l=r>=e&&r<=s;if(!l)throw Error("Invalid Rating, expected value between "+e+" and "+s);return r}function O(r){return typeof r<"u"}var B=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,V=function(r){if(!B.test(r))return null;var e=B.exec(r),s=parseInt(e[1],16),l=parseInt(e[2],16),o=parseInt(e[3],16);return{r:s,g:l,b:o}};function j(r,e,s){var l=(e-r)*(s/100);return l=Math.round(r+l).toString(16),l.length===1&&(l="0"+l),l}function ne(r,e,s){if(!r||!e)return null;s=O(s)?s:0,r=V(r),e=V(e);var l=j(r.r,e.r,s),o=j(r.b,e.b,s),m=j(r.g,e.g,s);return"#"+l+m+o}function M(r,e){this.node=r.get(0);var s=this;r.empty().addClass("jq-ry-container");var l=n("<div/>").addClass("jq-ry-group-wrapper").appendTo(r),o=n("<div/>").addClass("jq-ry-normal-group").addClass("jq-ry-group").appendTo(l),m=n("<div/>").addClass("jq-ry-rated-group").addClass("jq-ry-group").appendTo(l),d,q,b,p,w,S,F=0,k=e.rating,X=!1;function C(t){O(t)||(t=e.rating),k=t;var a=t/d,i=a*b;a>1&&(i+=(Math.ceil(a)-1)*w),L(e.ratedFill),i=e.rtl?100-i:i,i<0?i=0:i>100&&(i=100),m.css("width",i+"%")}function _(){S=q*e.numStars+p*(e.numStars-1),b=q/S*100,w=p/S*100,r.width(S),C()}function G(t){var a=e.starWidth=t;return q=window.parseFloat(e.starWidth.replace("px","")),o.find("svg").attr({width:e.starWidth,height:a}),m.find("svg").attr({width:e.starWidth,height:a}),_(),r}function H(t){return e.spacing=t,p=parseFloat(e.spacing.replace("px","")),o.find("svg:not(:first-child)").css({"margin-left":t}),m.find("svg:not(:first-child)").css({"margin-left":t}),_(),r}function z(t){e.normalFill=t;var a=(e.rtl?m:o).find("svg");return a.attr({fill:e.normalFill}),r}var D=e.ratedFill;function L(t){if(e.multiColor){var a=k-F,i=a/e.maxValue*100,v=e.multiColor||{},I=v.startColor||y.startColor,E=v.endColor||y.endColor;t=ne(I,E,i)}else D=t;e.ratedFill=t;var h=(e.rtl?o:m).find("svg");return h.attr({fill:e.ratedFill}),r}function Q(t){t=!!t,e.rtl=t,z(e.normalFill),C()}function oe(t){e.multiColor=t,L(t||D)}function U(t){e.numStars=t,d=e.maxValue/e.numStars,o.empty(),m.empty();for(var a=0;a<e.numStars;a++)o.append(n(e.starSvg||u)),m.append(n(e.starSvg||u));return G(e.starWidth),z(e.normalFill),H(e.spacing),C(),r}function K(t){return e.maxValue=t,d=e.maxValue/e.numStars,e.rating>t&&A(t),C(),r}function ue(t){return e.precision=t,A(e.rating),r}function fe(t){return e.halfStar=t,r}function de(t){return e.fullStar=t,r}function ge(t){var a=t%d,i=d/2,v=e.halfStar,I=e.fullStar;return!I&&!v||(I||v&&a>i?t+=d-a:(t=t-a,a>0&&(t+=i))),t}function N(t){var a=o.offset(),i=a.left,v=i+o.width(),I=e.maxValue,E=t.pageX,h=0;if(E<i)h=F;else if(E>v)h=I;else{var W=(E-i)/(v-i);if(p>0){W*=100;for(var T=W;T>0;)T>b?(h+=d,T-=b+w):(h+=T/b*d,T=0)}else h=W*e.maxValue;h=ge(h)}return e.rtl&&(h=I-h),parseFloat(h)}function P(t){return e.readOnly=t,r.attr("readonly",!0),ae(),t||(r.removeAttr("readonly"),ve()),r}function A(t){var a=t,i=e.maxValue;return typeof a=="string"&&(a[a.length-1]==="%"&&(a=a.substr(0,a.length-1),i=100,K(i)),a=parseFloat(a)),x(a,F,i),a=parseFloat(a.toFixed(e.precision)),f(parseFloat(a),F,i),e.rating=a,C(),X&&r.trigger("rateyo.set",{rating:a}),r}function he(t){return e.onInit=t,r}function me(t){return e.onSet=t,r}function pe(t){return e.onChange=t,r}this.rating=function(t){return O(t)?(A(t),r):e.rating},this.destroy=function(){return e.readOnly||ae(),M.prototype.collection=se(r.get(0),this.collection),r.removeClass("jq-ry-container").children().remove(),r},this.method=function(t){if(!t)throw Error("Method name not specified!");if(!O(this[t]))throw Error("Method "+t+" doesn't exist!");var a=Array.prototype.slice.apply(arguments,[]),i=a.slice(1),v=this[t];return v.apply(this,i)},this.option=function(t,a){if(!O(t))return e;var i;switch(t){case"starWidth":i=G;break;case"numStars":i=U;break;case"normalFill":i=z;break;case"ratedFill":i=L;break;case"multiColor":i=oe;break;case"maxValue":i=K;break;case"precision":i=ue;break;case"rating":i=A;break;case"halfStar":i=fe;break;case"fullStar":i=de;break;case"readOnly":i=P;break;case"spacing":i=H;break;case"rtl":i=Q;break;case"onInit":i=he;break;case"onSet":i=me;break;case"onChange":i=pe;break;default:throw Error("No such option as "+t)}return O(a)?i(a):e[t]};function R(t){var a=N(t).toFixed(e.precision),i=e.maxValue;a=f(parseFloat(a),F,i),C(a),r.trigger("rateyo.change",{rating:a})}function J(){c()||(C(),r.trigger("rateyo.change",{rating:e.rating}))}function Z(t){var a=N(t).toFixed(e.precision);a=parseFloat(a),s.rating(a)}function ee(t,a){e.onInit&&typeof e.onInit=="function"&&e.onInit.apply(this,[a.rating,s])}function te(t,a){e.onChange&&typeof e.onChange=="function"&&e.onChange.apply(this,[a.rating,s])}function re(t,a){e.onSet&&typeof e.onSet=="function"&&e.onSet.apply(this,[a.rating,s])}function ve(){r.on("mousemove",R).on("mouseenter",R).on("mouseleave",J).on("click",Z).on("rateyo.init",ee).on("rateyo.change",te).on("rateyo.set",re)}function ae(){r.off("mousemove",R).off("mouseenter",R).off("mouseleave",J).off("click",Z).off("rateyo.init",ee).off("rateyo.change",te).off("rateyo.set",re)}U(e.numStars),P(e.readOnly),e.rtl&&Q(e.rtl),this.collection.push(this),this.rating(e.rating,!0),X=!0,r.trigger("rateyo.init",{rating:e.rating})}M.prototype.collection=[];function Y(r,e){var s;return n.each(e,function(){if(r===this.node)return s=this,!1}),s}function se(r,e){return n.each(e,function(s){if(r===this.node){var l=e.slice(0,s),o=e.slice(s+1,e.length);return e=l.concat(o),!1}}),e}function le(r){var e=M.prototype.collection,s=n(this);if(s.length===0)return s;var l=Array.prototype.slice.apply(arguments,[]);if(l.length===0)r=l[0]={};else if(l.length===1&&typeof l[0]=="object")r=l[0];else if(l.length>=1&&typeof l[0]=="string"){var o=l[0],m=l.slice(1),d=[];return n.each(s,function(q,b){var p=Y(b,e);if(!p)throw Error("Trying to set options before even initialization");var w=p[o];if(!w)throw Error("Method "+o+" does not exist!");var S=w.apply(p,m);d.push(S)}),d=d.length===1?d[0]:d,d}else throw Error("Invalid Arguments");return r=n.extend({},g,r),n.each(s,function(){var q=Y(this,e);if(q)return q;var b=n(this),p={},w=n.extend({},r);return n.each(b.data(),function(S,F){if(S.indexOf("rateyo")===0){var k=S.replace(/^rateyo/,"");k=k[0].toLowerCase()+k.slice(1),p[k]=F,delete w[k]}}),new M(n(this),n.extend({},p,w))})}function ce(){return le.apply(this,Array.prototype.slice.apply(arguments,[]))}window.RateYo=M,n.fn.rateYo=ce})(window.jQuery);$(document).ready(function(){$(".rating").each(function(){var n=$(this),u=n.data("rating"),g=n.next().find(".rating-value");n.rateYo({rating:4,starWidth:"18px",numStars:5,onSet:function(y){g.text(y),n.data("rating",y)}}),g.text(u)})});const ie=document.querySelectorAll(".question-item");ie.forEach(n=>{const u=n.querySelector(".icon-question use"),g=n.querySelector(".question-item-text");g&&(g.style.display="none"),u.setAttribute("href","/img/icons.svg#icon-plus-circle"),n.addEventListener("click",()=>{u.getAttribute("href").includes("icon-minus-circle")?(u.setAttribute("href","/img/icons.svg#icon-plus-circle"),g&&(g.style.display="none")):(ie.forEach(c=>{const f=c.querySelector(".icon-question use"),x=c.querySelector(".question-item-text");f.setAttribute("href","/img/icons.svg#icon-plus-circle"),x&&(x.style.display="none")}),u.setAttribute("href","/img/icons.svg#icon-minus-circle"),g&&(g.style.display="block"))})});jQuery.migrateMute=!0;
//# sourceMappingURL=main-BD6lQsJo.js.map
