(this["webpackJsonpnews-api"]=this["webpackJsonpnews-api"]||[]).push([[0],{22:function(e,t,a){e.exports=a(62)},5:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(19),r=a.n(i),c=a(6),l=a.n(c),o=a(20),d=a(3),u=(a(28),a(29),a(5),a(21)),p=a.n(u),m=function(e){var t=e.topheadline;return s.a.createElement("div",{class:"card",style:{width:"15rem"}},s.a.createElement("img",{className:"card-img-top",src:t.urlToImage,alt:"news pic"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h6",{class:"card-title"},null===t.description?null:t.description.slice(0,180)),s.a.createElement("p",{class:"card-text"}),s.a.createElement("a",{href:t.url,target:"_blank",className:"btn btn-primary"},"read more !")))},f={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,focusOnSelect:!0,initialSlide:0,swipeToSlide:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}}]},h=function(e){var t=e.topheadlines;return s.a.createElement("div",{className:"outer-slider"},s.a.createElement(p.a,f,t.map((function(e){return s.a.createElement(m,{topheadline:e})}))))},b=a(7),E=a.n(b),g=function(e){var t=e.onsubmit,a=(e.searchnews,Object(n.useState)("")),i=Object(d.a)(a,2),r=i[0],c=i[1];return s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",onChange:function(e){c(e.target.value)},className:"form-control"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{onClick:function(){t(r)},className:"input-group-text search-news-icon"},"\ud83d\udd0d")))},v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],r=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://newsapi.org/v2/everything",{params:{q:t,apiKey:"593844fddaf24b28a25ac0026eb70125"}});case 2:a=e.sent,i(a.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(n.useState)([]),u=Object(d.a)(c,2),p=u[0],m=u[1];return Object(n.useEffect)((function(){E.a.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=593844fddaf24b28a25ac0026eb70125").then((function(e){m(e.data.articles),console.log(e.data.articles)}))}),[]),s.a.createElement("div",null,s.a.createElement(g,{onsubmit:r,searchnews:a}),s.a.createElement("div",{className:"container"},null===a?null:s.a.createElement(h,{topheadlines:a}),s.a.createElement(h,{topheadlines:p})))};r.a.render(s.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.366cb540.chunk.js.map