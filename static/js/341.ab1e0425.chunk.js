"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[341],{155:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(689),a=t(87),u="MoviesList_item_film__FP8jq",c="MoviesList_item__eePYv",s="MoviesList_link__8rTGX",o=t(184),i=function(e){var r=e.movies,t=(0,n.TH)();return(0,o.jsx)("ul",{className:u,children:r.map((function(e){return(0,o.jsx)("li",{className:c,children:(0,o.jsx)(a.rU,{className:s,to:{pathname:"/movies/".concat(e.id),state:{from:t}},children:e.title})},e.id)}))})}},965:function(e,r,t){t.d(r,{xc:function(){return o},Y5:function(){return p},Hx:function(){return i},WK:function(){return l},wr:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"e2461c3c5366673fc196ad29d85aaa39",language:"en-US"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day");case 3:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/credits"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/reviews"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?query=".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},341:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(791),o=t(965),i="Movies_button__UA9jN",l="Movies_input__3JANh",p="Movies_title__twVOZ",v=t(155),f=t(184),h=function(){var e=(0,s.useState)(""),r=(0,a.Z)(e,2),t=r[0],u=r[1],h=(0,s.useState)([]),m=(0,a.Z)(h,2),d=m[0],g=m[1],x=(0,s.useState)(!1),_=(0,a.Z)(x,2),Z=_[0],w=_[1],b=(0,s.useState)(!1),k=(0,a.Z)(b,2),y=k[0],S=k[1];(0,s.useEffect)((function(){var e=localStorage.getItem("movieQuery"),r=localStorage.getItem("movieResults");e&&r&&(u(e),g(JSON.parse(r)))}),[]),(0,s.useEffect)((function(){localStorage.setItem("movieQuery",t),localStorage.setItem("movieResults",JSON.stringify(d))}),[t,d]),(0,s.useEffect)((function(){u(localStorage.getItem("movieQuery")||"")}),[]);var j=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!0),e.prev=2,e.next=5,(0,o.WK)(t);case 5:r=e.sent,g(r),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching movies:",e.t0),g([]);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:p,children:"Search Movies"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{className:l,type:"text",value:t,onChange:function(e){u(e.target.value)}}),(0,f.jsx)("button",{className:i,onClick:j,children:"Search"})]}),Z?(0,f.jsx)("p",{children:"Loading..."}):y&&0===d.length&&""!==t&&(0,f.jsx)("p",{children:"No movies found."}),d.length>0&&(0,f.jsx)(v.Z,{movies:d})]})}}}]);
//# sourceMappingURL=341.ab1e0425.chunk.js.map