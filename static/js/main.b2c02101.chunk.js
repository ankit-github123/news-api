(this["webpackJsonpnews-api"]=this["webpackJsonpnews-api"]||[]).push([[0],{22:function(e,t,n){e.exports=n(62)},5:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(18),i=n.n(r),c=n(6),l=n.n(c),o=n(19),u=n(4),d=(n(28),n(29),n(5),n(20)),p=n.n(d),m=function(e){var t=e.topheadline;return s.a.createElement("div",{class:"card",style:{width:"15rem"}},s.a.createElement("img",{className:"card-img-top",src:t.urlToImage,alt:"news pic"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h6",{class:"card-title"},null===t.description?null:t.description.slice(0,180)),s.a.createElement("p",{class:"card-text"}),s.a.createElement("a",{href:t.url,target:"_blank",className:"btn btn-primary"},"read more !")))},f={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,focusOnSelect:!0,initialSlide:0,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}}]},h=function(e){var t=e.topheadlines;return s.a.createElement("div",{className:"outer-slider"},s.a.createElement(p.a,f,t.map((function(e){return s.a.createElement(m,{topheadline:e})}))))},b=n(21),v=n.n(b),E=function(e){var t=e.onsubmit,n=(e.searchnews,Object(a.useState)("")),r=Object(u.a)(n,2),i=r[0],c=r[1];return s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",onChange:function(e){c(e.target.value)},className:"form-control"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{onClick:function(){t(i)},className:"input-group-text search-news-icon"},"\ud83d\udd0d")))},w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://newsapi.org/v2/everything",{params:{q:t,apiKey:"593844fddaf24b28a25ac0026eb70125"}});case 2:n=e.sent,r(n.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",null,s.a.createElement(E,{onsubmit:i,searchnews:n}),s.a.createElement("div",{className:"container"},null===n?null:s.a.createElement(h,{topheadlines:n})))};i.a.render(s.a.createElement(w,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b2c02101.chunk.js.map