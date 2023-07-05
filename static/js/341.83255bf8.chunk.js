"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{155:function(r,e,t){t.d(e,{Z:function(){return i}});var n=t(689),a=t(87),u="MoviesList_item_film__FP8jq",c="MoviesList_item__eePYv",s="MoviesList_link__8rTGX",o=t(184),i=function(r){var e=r.movies,t=(0,n.TH)();return(0,o.jsx)("ul",{className:u,children:e.map((function(r){return(0,o.jsx)("li",{className:c,children:(0,o.jsx)(a.rU,{className:s,to:{pathname:"/movies/".concat(r.id),state:{from:t}},children:r.title})},r.id)}))})}},965:function(r,e,t){t.d(e,{xc:function(){return o},Y5:function(){return p},Hx:function(){return i},WK:function(){return l},wr:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"e2461c3c5366673fc196ad29d85aaa39",language:"en-US"};var s=function(){var r=(0,n.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/trending/movie/day");case 3:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(e,"/credits"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.cast);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/search/movie?query=".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",[]);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.Z.get("/movie/".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()},341:function(r,e,t){t.r(e),t.d(e,{default:function(){return d}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),o=t(87),i=t(965),l="Movies_button__UA9jN",p="Movies_input__3JANh",v="Movies_title__twVOZ",f=t(155),h=t(184),d=function(){var r=(0,s.useState)(""),e=(0,a.Z)(r,2),t=e[0],u=e[1],d=(0,s.useState)([]),m=(0,a.Z)(d,2),x=m[0],_=m[1],g=(0,s.useState)(!1),Z=(0,a.Z)(g,2),w=Z[0],b=Z[1],k=(0,s.useState)(!1),j=(0,a.Z)(k,2),y=j[0],N=j[1],M=(0,o.lr)(),S=(0,a.Z)(M,2),L=S[0],q=S[1];(0,s.useEffect)((function(){var r=L.get("query");if(r){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),N(!0),e.prev=2,e.next=5,(0,i.WK)(r);case 5:t=e.sent,_(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching movies:",e.t0),_([]);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[L]);return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:v,children:"Search Movies"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{className:p,type:"text",value:t,onChange:function(r){u(r.target.value)}}),(0,h.jsx)("button",{className:l,onClick:function(){L.set("query",t),q(L)},children:"Search"})]}),w?(0,h.jsx)("p",{children:"Loading..."}):y&&0===x.length&&""!==t&&(0,h.jsx)("p",{children:"No movies found."}),x.length>0&&(0,h.jsx)(f.Z,{movies:x})]})}}}]);
//# sourceMappingURL=341.83255bf8.chunk.js.map