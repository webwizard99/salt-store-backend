(this["webpackJsonpsalt-store-frontend"]=this["webpackJsonpsalt-store-frontend"]||[]).push([[0],{32:function(e,t,a){e.exports=a(59)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),s=a(22),i=a(16),l=a(1),u=a(2),m=a(4),p=a(3),h=a(5),b=(a(41),a(42),a(15)),f=a(14),d=(a(43),a(44),a(45),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"Navbar"},r.a.createElement(b.b,{to:"/",className:"logo-group"},r.a.createElement("div",{className:"logo-group"},r.a.createElement("span",{className:"logo"},"&"),r.a.createElement("span",{className:"tagline"},"find your salt"))),r.a.createElement("ul",{className:"nav-options"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/store"},r.a.createElement("span",null,"Store"))),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/about"},r.a.createElement("span",null,"About"))),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/profile"},r.a.createElement("span",null,"\ud83d\udc68\u200d\ud83d\udcbb")))))}}]),t}(r.a.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"HomeBanner hero"},r.a.createElement("div",{className:"hero-img-home banner-img"},r.a.createElement("p",{className:"reader"},"Colored salt in bowls with flowers"),r.a.createElement(d,null),r.a.createElement("div",{className:"store-button"},"Start Now")))}}]),t}(r.a.Component),y=(a(47),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"container home-splash"},r.a.createElement("h1",{className:"header home-head"},"Just the therapy you need!"),r.a.createElement("div",{className:"home-img home-img-pc img-float-right"},r.a.createElement("p",{className:"reader"},"Rolled towels lit by teacandles and a purple tulip")),r.a.createElement("p",{className:"story-para home-story"},"We combine the deep-tissue invigoration of a salt-soak with the wide-ranging benefits of aromatherapy tailored for your needs."),r.a.createElement("p",{className:"story-para home-story"},"Our intuitive process is designed to provide you with expert insight as you select a combination of aromatherapy oils to please your senses and revitalize your body and spirit!"),r.a.createElement("div",{className:"home-img home-img-tablet img-float-right"},r.a.createElement("p",{className:"reader"},"Rolled towels lit by teacandles and a purple tulip")),r.a.createElement("p",{className:"story-para home-story"},"We've taken the advice of experts and honed it into an intuitive interface that gives you the power to design the salt soak you want with the peace of mind of knowing your choices will yield a magnificent product!"))}}]),t}(r.a.Component)),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(g,null),r.a.createElement(y,null))}}]),t}(r.a.Component),E=(a(48),a(49),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"StoreBanner hero-store"},r.a.createElement("div",{className:"hero-img-store banner-img"},r.a.createElement("p",{className:"reader"},"A white plain of sea salt drying in the sun"),r.a.createElement(d,null),r.a.createElement("div",{className:"store-banner"},r.a.createElement("h2",{className:"store-banner-head"},"Find your salt"),r.a.createElement("p",{className:"store-banner-text"},"Combine boutique bath salts with our therapeutic aromatherapy oils to customize your relaxation experience."))))}}]),t}(r.a.Component)),v=a(18),j=a.n(v),N=a(27),w=a(13),k=(a(51),function(){var e=[],t=function(e,t,a,n){this.img=e,this.alt=t,this.name=a,this.price=n},a=["Mint","Peppermint","Frankincense","Lavender","Tea Tree","Lemon","Sage","Clove"];return{getItems:function(t,a){var n=(t-1)*a,r=t*a;return r>=e.length&&(r=e.length-1),e.slice(n,r)},setItems:function(t){e=t},getItemsLength:function(){return e.length},initTestItems:function(n){for(var r=0;r<n;r++){var o=Math.floor(Math.random()*a.length),c=2*Math.random()+4,s=new t("./joanna-kosinska-Prfs32wh-o4-unsplash.jpg","A spoon-full of salt","".concat(a[o]," Salt"),"$".concat(c.toFixed(2)));e.push(s)}}}}()),P="https://salt-store-backend.herokuapp.com/products",S="https://salt-store-backend.herokuapp.com/hello",x=(a(52),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={backgroundImage:"url('".concat(this.props.item.img_url,"')")};return r.a.createElement("div",{className:"StoreItem"},r.a.createElement("div",{className:"item-pic",style:e},r.a.createElement("p",{className:"reader"},this.props.item.alt_text)),r.a.createElement("p",{className:"item-title"},this.props.item.name),r.a.createElement("p",{className:"item-description"},"Scented Epsom Salt"),r.a.createElement("p",{className:"item-price"},"$",this.props.item.cost.toFixed(2)))}}]),t}(r.a.Component)),C=(a(53),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).getPageNumbers=a.getPageNumbers.bind(Object(w.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getPageNumbers",value:function(){var e=this;return this.props.pages.map((function(t,a){return t==e.props.page?r.a.createElement("li",{key:a},r.a.createElement("a",{className:"page-num current-page-num","data-page":t},t)):r.a.createElement("li",{key:a},r.a.createElement("a",{className:"page-num","data-page":t},t))}))}},{key:"render",value:function(){return r.a.createElement("section",{className:"page-number-container"},r.a.createElement("label",{htmlFor:"number-selector"},"number"),r.a.createElement("select",{className:"number-selector"},r.a.createElement("option",{className:"number-option",value:"10"},"10"),r.a.createElement("option",{className:"number-option",value:"20"},"20"),r.a.createElement("option",{className:"number-option",value:"40"},"40")),r.a.createElement("ul",{className:"page-numbers"},this.getPageNumbers()))}}]),t}(r.a.Component)),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={page:1,number:20},a.getItemsForRender=a.getItemsForRender.bind(Object(w.a)(a)),a.getPagination=a.getPagination.bind(Object(w.a)(a)),a.testHello=a.testHello.bind(Object(w.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getStoreItems",value:function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:a=e.sent,this.props.setItems(a);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"testHello",value:function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){k.initTestItems(80);var e="".concat(S);this.testHello(e);var t="".concat(P);this.getStoreItems(t)}},{key:"getItemsForRender",value:function(){return null==this.props.items?"":this.props.items.map((function(e,t){return r.a.createElement(x,{item:e,key:t})}))}},{key:"getPagination",value:function(){if(null==this.props.items)return"";var e=k.getItemsLength(),t=Math.ceil(e/this.props.count),a=[];if(t<=8)for(var n=1;n<=t;n++)a.push(n);return r.a.createElement(C,{pages:a})}},{key:"render",value:function(){return r.a.createElement("main",{className:"StoreFrame"},this.getPagination(),this.getItemsForRender(),this.getPagination())}}]),t}(r.a.Component),F=Object(s.b)((function(e){return{items:e.items.items,page:e.page.page,count:e.page.count}}),(function(e){return{setItems:function(t){return e({type:"SET_ITEMS",items:t})}}}))(I),T=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Store"},r.a.createElement(E,null),r.a.createElement(F,null))}}]),t}(r.a.Component),A=(a(54),a(55),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"AboutBanner hero"},r.a.createElement("div",{className:"hero-img-about banner-img"},r.a.createElement("p",{className:"reader"},"Footprints on a beach with a gentle wave coming in"),r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header about-header-main"},"The Right Therapy for You"),r.a.createElement("hr",{className:"about-rule"}))))}}]),t}(r.a.Component)),D=(a(56),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"container about-container"},r.a.createElement("p",{className:"story-para about-story"},"Our custom salt shopping process is designed to allow you to find the right salt soak and aromatherapy for you."),r.a.createElement("div",{className:"about-img about-img-pc img-float-left"},r.a.createElement("p",{className:"reader"},"A woman's feet, with toenails painted red, soaking in a white tub full of water")),r.a.createElement("p",{className:"story-para about-story"},"We're dedicated to the therapeutic value of salts for recovery from exertions, whether from sport or from work."),r.a.createElement("div",{className:"about-img about-img-tablet img-float-left"},r.a.createElement("p",{className:"reader"},"A woman's feet, with toenails painted red, soaking in a white tub full of water")),r.a.createElement("p",{className:"story-para about-story"},"We'll help you understand the benefit of our aromatherapy oils and help you to find a pleasing combination of salt and oil that addresses your therapeutic needs."),r.a.createElement("p",{className:"story-para about-story"},"We've invested exhaustive research intot the benefit of aromatherapy oils, and we've compiled them into a system designed to identify the best combinations, both for therapeutic benefit and aesthetic pleasure."),r.a.createElement("p",{className:"story-para about-story"},"Let us show you how we can deliver a unique product tailored to your needs and tastes!"))}}]),t}(r.a.Component)),M=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"About"},r.a.createElement(A,null),r.a.createElement(D,null))}}]),t}(r.a.Component),R=(a(57),a(58),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ProfileForm container"},r.a.createElement("form",{action:"https://salt-store-backend.herokuapp.com/user/signup",method:"post"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"E-Mail"),r.a.createElement("input",{type:"text",id:"email",name:"email",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",className:"form-control"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))}}]),t}(r.a.Component)),W=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Profile"},r.a.createElement(d,null),r.a.createElement(R,null))}}]),t}(r.a.Component),H=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{exact:!0,path:"/",component:O}),r.a.createElement(f.a,{exact:!0,path:"/store",component:T}),r.a.createElement(f.a,{exact:!0,path:"/about",component:M}),r.a.createElement(f.a,{exact:!0,path:"/profile",component:W}))))}}]),t}(r.a.Component),_=a(21);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(_.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L={items:null};function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach((function(t){Object(_.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z={page:1,count:20},U=Object(i.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":var a=JSON.parse(JSON.stringify(t.items));return J({},e,{items:a});default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":return q({},e,{page:t.page});case"SET_COUNT":return q({},e,{count:t.count});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(i.c)(U,{});c.a.render(r.a.createElement(s.a,{store:G},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.82a7b393.chunk.js.map