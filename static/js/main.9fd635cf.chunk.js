(this.webpackJsonptitter=this.webpackJsonptitter||[]).push([[0],{33:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n,c=s(1),r=s(0),a=s.n(r),u=s(17),o=s.n(u),i=(s(33),s(12)),l=s(5),b=s(13),d=s(9),j={login:!1,users:{currentUser:"",byId:{user1:{name:"vlapky",subsYou:[],subsMe:["user2"]},user2:{name:"Kiva",subsYou:["user1"],subsMe:[]}},allIds:["user1","user2"]},posts:{byId:{post1:{id:"post1",author:"user1",text:"Welcome to Titter by vlapky",liked:["user1","user2"]},post2:{id:"post2",author:"user2",text:"Welcome to Titter by vlapky by Kiva",liked:["user2","user1"]}},allIds:["post1","post2"]}},O=Object(d.b)("SIGN_IN"),p=Object(d.b)("SIGN_OUT"),h=Object(d.b)("SUB"),f=Object(d.b)("UNSUB"),x=Object(d.b)("ADD_POST"),m=Object(d.b)("DEL_POST"),y=Object(d.b)("LIKE_POST"),I=Object(d.b)("CHANGE_NAME"),N=Object(d.c)(j,(n={},Object(b.a)(n,O.type,(function(e,t){if(e.users.allIds.forEach((function(s){e.users.byId[s].name===t.payload&&(e.users.currentUser=s,e.login=!0)})),!e.login){var s="user".concat(e.users.allIds.length+1);e.users.allIds.push(s),e.users.byId[s]={name:t.payload,subsYou:[],subsMe:[]},e.users.currentUser=s,e.login=!0}})),Object(b.a)(n,p.type,(function(e){e.users.currentUser="",e.login=!1})),Object(b.a)(n,h.type,(function(e,t){var s=e.users.currentUser,n=t.payload;e.users.byId[s].subsYou.push(n),e.users.byId[n].subsMe.push(s)})),Object(b.a)(n,f.type,(function(e,t){var s=e.users.currentUser,n=t.payload,c=e.users.byId[s].subsYou.indexOf(n);e.users.byId[s].subsYou.splice(c,1);var r=e.users.byId[n].subsMe.indexOf(s);e.users.byId[n].subsMe.splice(r,1)})),Object(b.a)(n,x.type,(function(e,t){var s="".concat((new Date).getUTCMilliseconds());e.posts.allIds.push(s),e.posts.byId[s]={id:s,author:e.users.currentUser,text:t.payload,liked:[]}})),Object(b.a)(n,m.type,(function(e,t){var s=t.payload,n=e.posts.allIds.indexOf(s);e.posts.allIds.splice(n,1),delete e.posts.byId[s]})),Object(b.a)(n,y.type,(function(e,t){var s=t.payload,n=e.users.currentUser,c=e.posts.byId[s].liked.indexOf(n);-1===c?e.posts.byId[s].liked.push(n):e.posts.byId[s].liked.splice(c,1)})),Object(b.a)(n,I.type,(function(e,t){var s=t.payload,n=e.users.currentUser,c=!0;e.users.allIds.forEach((function(t){e.users.byId[t].name===s&&(c=!1)})),c&&(e.users.byId[n].name=s)})),n)),v=(s(38),function(){var e=Object(l.b)(),t=a.a.useState(""),s=Object(i.a)(t,2),n=s[0],r=s[1];return Object(c.jsxs)("div",{className:"SignIn",children:[Object(c.jsx)("label",{htmlFor:"sign-in",className:"SignIn__title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(c.jsx)("input",{maxLength:12,value:n,onChange:function(e){r(e.target.value)},className:"SignIn__input",id:"sign-in",type:"text",placeholder:"vlapky"}),Object(c.jsx)("button",{disabled:!(n.length>3),onClick:function(){return e(O(n))},className:"button",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})}),g=s(27),k=(s(39),s.p+"static/media/close.1d546531.svg"),_=s.p+"static/media/heart.fb824694.svg",S=(s(40),s(4)),U=function(e){var t=e.posts,s=(e.acceptDel,e.likePost),n=e.delPost,r=e.currentUser;return Object(c.jsx)("ul",{children:t.slice(0).reverse().map((function(e){var t=e.id,a=e.authorId,u=e.author,o=e.text,i=e.liked;return Object(c.jsx)("li",{className:"Post",children:Object(c.jsxs)("article",{children:[Object(c.jsxs)("div",{className:"Post__head",children:[Object(c.jsx)(S.b,{className:"Post__head_user",to:"/".concat(a),children:u}),r===a&&Object(c.jsx)("img",{onClick:function(){return n(t)},src:k,alt:"delete",className:"Post__head_icon"}),Object(c.jsx)("img",{onClick:function(){return s(t)},src:_,alt:"like",className:"Post__head_icon"})]}),Object(c.jsx)("p",{className:"Post_text",children:o}),Object(c.jsxs)("p",{className:"Post_liked",children:["\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c: ",Object(c.jsx)("span",{children:i.join(", ")})]})]})},t)}))})};function P(e,t){return t.byId[e].name}function C(e,t,s){return e.map((function(e){return function(e,t,s){var n=t.byId[e];return{id:n.id,authorId:n.author,author:P(n.author,s),text:n.text,liked:n.liked.map((function(e){return P(e,s)}))}}(e,t,s)}))}function Y(e,t){return t.allIds.filter((function(s){return e.includes(t.byId[s].author)}))}var E=function(e){var t=e.postsType,s=e.changeType;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return s("all")},className:"button feedbutton ".concat("all"===t&&"active"),children:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b"}),Object(c.jsx)("button",{onClick:function(){return s("subs")},className:"button feedbutton ".concat("subs"===t&&"active"),children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"})]})},M=function(){var e=a.a.useState("all"),t=Object(i.a)(e,2),s=t[0],n=t[1],r=Object(l.c)((function(e){return e.users})),u=Object(l.c)((function(e){return e.posts})),o=Object(l.b)(),b=r.currentUser,d=C(u.allIds,u,r),j=C(Y([].concat(Object(g.a)(r.byId[r.currentUser].subsYou),[r.currentUser]),u),u,r);return Object(c.jsxs)("div",{className:"Feed",children:[Object(c.jsx)(S.b,{className:"link",to:"/".concat(b),children:"\u0412 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(c.jsx)(E,{postsType:s,changeType:n}),Object(c.jsx)(U,{posts:"all"===s?d:j,currentUser:b,likePost:function(e){o(y(e))},delPost:function(e){o(m(e))}})]})},T=s(3);s(42);s(43);var F=function(e){var t=e.type,s=e.send,n=e.cancel,r=a.a.useState(""),u=Object(i.a)(r,2),o=u[0],l=u[1],b=o.length>3,d="post"===t?80:"name"===t?12:0;return Object(c.jsxs)("div",{className:"Input",children:[Object(c.jsx)("input",{type:"text",autoFocus:!0,value:o,onChange:function(e){l(e.target.value)},maxLength:d,placeholder:"post"===t?"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442":"name"===t?"\u041d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f":"",className:"Input__input"}),Object(c.jsxs)("div",{className:"Input__buttons",children:[Object(c.jsx)("button",{onClick:function(){s(o),l(""),n()},disabled:!b,className:"button button_send",children:"post"===t?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442":"name"===t?"\u0421\u043c\u0435\u043d\u0438\u0442\u044c":""}),Object(c.jsx)("button",{onClick:n,className:"button button_cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})},w=function(e){var t=e.userName,s=e.changeName,n=e.profileState,r=a.a.useState(!1),u=Object(i.a)(r,2),o=u[0],l=u[1],b=function(){"YOUR"===n&&l(!o)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{onClick:b,className:"Profile__user",children:t}),o&&Object(c.jsx)(F,{type:"name",send:s,cancel:b})]})},A=function(e){var t=e.profileState,s=e.handleSignOut,n=e.handleAddPost,r=e.handleSub,u=e.handleUnsub,o=a.a.useState(!1),l=Object(i.a)(o,2),b=l[0],d=l[1];return console.log(r),Object(c.jsxs)(c.Fragment,{children:["YOUR"===t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:s,className:"button",children:"\u0412\u044b\u0439\u0442\u0438"}),!b&&Object(c.jsx)("button",{onClick:function(){return d(!0)},className:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"}),b&&Object(c.jsx)(F,{type:"post",cancel:function(){return d(!1)},send:n})]}),"SUB"===t&&Object(c.jsx)("button",{onClick:u,className:"button",children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),"NONE"===t&&Object(c.jsx)("button",{onClick:r,className:"button",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})},B=function(e){var t=e.subs,s=e.curId;return Object(c.jsxs)(c.Fragment,{children:[!t&&Object(c.jsx)(S.b,{className:"link",to:"/feed",children:"\u0412 \u043b\u0435\u043d\u0442\u0443"}),t&&Object(c.jsx)(S.b,{className:"link",to:"/".concat(s,"/").concat(t),children:"\u041d\u0430\u0437\u0430\u0434"})]})},D=function(e){var t=e.id,s=e.users,n=s.byId[t].subsYou.length,r=s.byId[t].subsMe.length;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(S.b,{to:"/".concat(t,"/subsYou"),className:"link",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438 - ",n," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"]}),Object(c.jsxs)(S.b,{to:"/".concat(t,"/subsMe"),className:"link",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 - ",r," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"]})]})},J=function(){var e=Object(T.g)(),t=e.id,s=e.subs,n=e.curId,r=Object(l.c)((function(e){return e.users})),a=Object(l.c)((function(e){return e.posts})),u=Object(l.b)(),o=function(e,t){return e===t.currentUser?"YOUR":t.byId[t.currentUser].subsYou.includes(e)?"SUB":"NONE"}(t,r),i=C(Y([t],a),a,r),b=P(t,r);return Object(c.jsxs)("div",{className:"Profile",children:[Object(c.jsx)(B,{subs:s,curId:n}),Object(c.jsx)(w,{userName:b,profileState:o,changeName:function(e){u(I(e))}}),Object(c.jsx)(D,{id:t,users:r}),Object(c.jsx)(A,{profileState:o,handleAddPost:function(e){u(x(e))},handleSub:function(){u(h(t))},handleUnsub:function(){u(f(t))},handleSignOut:function(){u(p())}}),Object(c.jsx)(U,{posts:i,currentUser:r.currentUser,likePost:function(e){u(y(e))},delPost:function(e){u(m(e))}})]})};s(44);var L=function(){var e=Object(T.g)(),t=e.id,s=e.subs,n=Object(l.c)((function(e){return e.users})),r=function(e,t,s){return s.byId[e][t].map((function(e){return{userId:e,name:P(e,s)}}))}(t,s,n);return Object(c.jsxs)("div",{className:"Subs",children:[Object(c.jsx)(S.b,{className:"link",to:"/".concat(t),children:"\u041d\u0430\u0437\u0430\u0434"}),Object(c.jsx)("ul",{className:"Subs__list",children:r.map((function(e){return Object(c.jsx)("li",{className:"Subs__list_item",children:Object(c.jsx)(S.b,{className:"link",to:"/".concat(t,"/").concat(s,"/").concat(e.userId),children:e.name})},e.userId)}))})]})},G=function(){var e=Object(l.c)((function(e){return e.login}));return Object(c.jsx)("main",{className:"App",children:Object(c.jsx)(S.a,{children:Object(c.jsxs)(T.d,{children:[Object(c.jsx)(T.b,{exact:!0,path:"/login",component:v,children:e&&Object(c.jsx)(T.a,{to:"/feed"})}),!e&&Object(c.jsx)(T.a,{to:"/login"}),Object(c.jsx)(T.b,{exact:!0,path:"/feed",component:M}),Object(c.jsx)(T.b,{exact:!0,path:"/:id",component:J}),Object(c.jsx)(T.b,{exact:!0,path:"/:id/:subs",component:L}),Object(c.jsx)(T.b,{exact:!0,path:"/:curId/:subs/:id",component:J}),Object(c.jsx)(T.b,{path:"/",children:Object(c.jsx)(T.a,{to:"/login"})})]})})})},K=(s(45),function(){try{var e=localStorage.getItem("titter");return JSON.parse(e)}catch(t){throw new Error(t)}}()),R=K||j,W=Object(d.a)({reducer:N,preloadedState:R});W.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("titter",t)}catch(s){throw new Error(s)}}(W.getState())})),o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{store:W,children:Object(c.jsx)(G,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9fd635cf.chunk.js.map