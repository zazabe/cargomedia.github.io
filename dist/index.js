!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a){var b=document.createElement("a");b.href=a;var c=b.hostname.split(".");return c[c.length-2]}function e(a,b,c){var d=a.querySelector(".applyJob"),e=b({member:c});d?d.insertAdjacentHTML("beforebegin",e):a.insertAdjacentHTML("beforeend",e)}const f=a("./prismic"),g=a("underscore");var h=function(a){return a([f.Prismic.Predicates.at("document.type","members")]).then(function(a){return a.results[0]})};f.getApi().then(function(a){h(a).then(function(a){a=a.getGroup("members.member").toArray();var b=document.querySelector(".staff"),c=document.querySelector(".consultants"),f=document.querySelector(".tpl-member-card"),h=g.template(f.textContent);a.forEach(function(a){var f={avatar:a.getImage("avatar").url,name:a.getText("name"),position:a.getText("position")},g=a.getLink("profile-link");if(g){g=g.asText(),f.link=g;var i=d(g);f.contact=i.charAt(0).toUpperCase()+i.slice(1)}switch(a.getText("type")){case"consultant":e(c,h,f);break;case"staff":e(b,h,f)}})})})},{"./prismic":2,underscore:"underscore"}],2:[function(a,b,c){const d=a("prismic.io"),e=a("query-string");var f;b.exports={Prismic:d,getApi:function(){return f||(f=d.api("https://cargomediach.cdn.prismic.io/api").then(function(a){var b=e.parse(location.search).token;return function(c){return a.query(c,{ref:b})}})),f}}},{"prismic.io":"prismic.io","query-string":"query-string"}]},{},[1]);
//# sourceMappingURL=index.js.map