(this["webpackJsonpinnotech-frontend"]=this["webpackJsonpinnotech-frontend"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(19),r=n.n(s),l=n(12),o=n(2),d=(n(27),n(28),n(21)),j=n(10),u=n.p+"static/media/logo.1fda53fd.svg",b={orange:"linear-gradient(82.89deg, #F39405 -25.81%, rgba(255, 73, 88, 0.99) 114.69%)",yellow:"linear-gradient(97.43deg, #FEA85F 22.36%, #FF4958 153.5%)",red:"#FF4958",gray:"#33363B 10\xa0%",blue:"#1487E2",black:"#232C32",background:"#E9E9EB"},h={appearance:"none",border:"none",outline:"none",background:b.orange,borderRadius:10,color:"#fff",padding:"15px 40px",cursor:"pointer",fontSize:24,fontWeight:700},p={color:b.blue},m={color:b.black,lineHeight:"135%"},x={container:{marginTop:20},logo:{marginBottom:20},upload:{display:"flex",fontSize:54,border:"3px solid ".concat(b.black),borderRadius:15,width:150,height:150,placeItems:"center",margin:"20px auto",cursor:"pointer"},uploadPlus:{width:"100%",textAlign:"center"}};var f=n(17),O=n.p+"static/media/intro.5ba1e2bb.png",g={container:{display:"flex",background:b.background,minHeight:"100vh"},halfCol:{width:"50%"},imageContainer:{display:"flex",placeItems:"center",height:"100vh"},image:{width:"100%",height:"auto"},content:{display:"flex",width:"80%",height:"100vh",margin:"0 auto",placeItems:"center"}};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/form",component:function(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(null),r=Object(j.a)(s,2),l=r[0],o=r[1],b=Object(i.useState)(new Array(10).fill("")),p=Object(j.a)(b,2),m=p[0],f=p[1],O=Object(i.useState)(!1),g=Object(j.a)(O,2),v=g[0],y=g[1],N=Object(i.useRef)(null),k=function(e,t){var n=Object(d.a)(m);n[t]=e.target.value,f(n)};return Object(c.jsxs)("main",{className:"ui main text container",style:x.container,children:[Object(c.jsx)("img",{alt:"App logo",src:u,style:x.logo}),v?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:v.name}),Object(c.jsxs)("h2",{children:["\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0434\u043e\u0432\u0435\u0440\u0438\u044f ",~~(100*v.trust),"%"]}),v.itns.map((function(e,t){return Object(c.jsx)("div",{className:"ui card",style:{width:"100%"},children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"header",children:e.name}),Object(c.jsxs)("div",{className:"meta",children:["\u0418\u041d\u041d ",e.itn]}),Object(c.jsx)("div",{className:"description",children:e.status?Object(c.jsx)("b",{children:"active"===e.status?"\u041b\u0438\u043a\u0432\u0438\u0434\u0438\u0440\u043e\u0432\u0430\u043d":"\u0414\u0435\u0439\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u043d"}):"\u0421\u0442\u0430\u0442\u0443\u0441 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d"})]})},t)})),Object(c.jsx)("h2",{children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(c.jsx)("ul",{children:Object.keys(v.words).map((function(e){return{name:e,counter:v.words[e]}})).sort((function(e,t){return t.counter-e.counter})).slice(0,8).map((function(e,t){var n=e.name;return Object(c.jsx)("li",{children:n},t)}))})]}):Object(c.jsxs)("form",{className:"ui form"+(n?" loading":""),children:[Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"file",id:"file",ref:N,onChange:function(e){e.target.files&&o(e.target.files[0])}})}),Object(c.jsxs)("div",{className:"field",children:[Object(c.jsxs)("div",{className:"two fields",children:[Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,0)}})}),Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,1)}})})]}),Object(c.jsxs)("div",{className:"two fields",children:[Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,2)}})}),Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,3)}})})]}),Object(c.jsxs)("div",{className:"two fields",children:[Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,4)}})}),Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,5)}})})]}),Object(c.jsxs)("div",{className:"two fields",children:[Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,6)}})}),Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,7)}})})]}),Object(c.jsxs)("div",{className:"two fields",children:[Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,8)}})}),Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("input",{type:"text",placeholder:"vk.com/id1",onChange:function(e){return k(e,9)}})})]})]}),Object(c.jsx)("button",{className:"ui button",style:h,onClick:function(){a(!0);var e=new FormData;e.append("image",l||""),m.filter((function(e){return""!==e})).forEach((function(t){return e.append("links",t)})),fetch("https://895bad95711b.ngrok.io/getMatch",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){y(e)}))},children:"Next"})]})]})}}),Object(c.jsx)(o.a,{path:"/",component:function(){return Object(c.jsxs)("main",{style:g.container,children:[Object(c.jsx)("div",{style:g.halfCol,children:Object(c.jsx)("div",{style:g.content,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{alt:"App logo",src:u}),Object(c.jsx)("h1",{style:p,children:"Bara bara bara, bere bere bere"}),Object(c.jsx)("p",{style:m,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nesciunt obcaecati, error facilis quae eius libero odit excepturi cupiditate optio consequuntur rem voluptate, amet perferendis? Et eos quod iste corrupti."}),Object(c.jsx)(l.b,{to:"/form",children:Object(c.jsx)("button",{style:Object(f.a)(Object(f.a)({},h),{},{marginTop:50}),children:"Let's Start"})})]})})}),Object(c.jsx)("div",{style:g.halfCol,children:Object(c.jsx)("div",{style:g.imageContainer,children:Object(c.jsx)("img",{alt:"",src:O,style:g.image})})})]})}})]})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.00a8819c.chunk.js.map