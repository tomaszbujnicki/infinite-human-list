(this["webpackJsonpinfinite-human-list"]=this["webpackJsonpinfinite-human-list"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(4),i=t.n(a),s=(t(9),t(3)),o=["John","Bob","Sara","Philip","Garry","Ron","Emilly","Carol","Jessica","Victoria","Samuel","Sammy","Eliza","Amy","Beth","Derrek","Julia","Zven"],l=["Screen","Black","Widow","Hartman","Hamiltion","Johanson","Richardson","Smith","Screen","Artman","Xin","Bass","Kovalsky","Sandman","von Bradhard"],u=["Judge","Lawyer","Plumber","Painter","Postman","Secretary","Waiter","Teacher","Soldier","Actor","Tailor","Gamer","Youtuber","Farmer","Journalist","Pilot"];function h(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function d(){var e=h(0,o.length),n=h(0,l.length),t=h(0,u.length);return{firstName:o[e],secondName:l[n],age:Math.floor(70*Math.random()+10),job:u[t],face:"https://www.thispersondoesnotexist.com/image?"+Math.random()}}for(var j=t(0),m=function(e){var n=e.person.face,t=e.person.firstName,r=e.person.secondName,c=e.person.job,a=e.person.age;return Object(j.jsx)("li",{class:"card",children:Object(j.jsxs)("div",{class:"card__content",children:[Object(j.jsx)("div",{class:"image",children:Object(j.jsx)("img",{src:n,alt:"face"})}),Object(j.jsxs)("div",{class:"card__heading",children:[Object(j.jsxs)("h2",{class:"card__name",children:[t," ",r]}),Object(j.jsxs)("div",{class:"card__description",children:[c,", ",a]})]})]})})},f=function(e){var n=e.items,t=Object(r.useState)(1),c=Object(s.a)(t,2),a=c[0],i=c[1],o=Object(r.useState)(6),l=Object(s.a)(o,2),u=l[0],h=l[1];Object(r.useEffect)((function(){a<u&&setTimeout((function(){i(a+1)}),1500)}));Object(r.useEffect)((function(){var e=setInterval((function(){document.scrollingElement.scrollHeight-20<=document.scrollingElement.clientHeight+document.scrollingElement.scrollTop&&function(){if(!(a<u))if(n.length>u)h(u+6),console.log("\u0141aduje");else{console.log("Generuje");for(var e=0;e<6;e++)n.push(d())}}()}),100);return function(){return clearInterval(e)}}));for(var f=[],b=0;b<a;b++)f.push(Object(j.jsx)(m,{person:n[b]},b));return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:f})})},b=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Infinite Human List"})})},O=[],g=0;g<24;g++)O.push(d());i.a.render(Object(j.jsxs)(c.a.StrictMode,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(f,{items:O})]}),document.getElementById("root"))},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.e0950790.chunk.js.map