(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(10),c=n.n(a),r=(n(87),n(37)),s=n(164),o=n(72),l=n.n(o),d=n(38),j=n.n(d),b=n(169),h=n(168),m=n(160),x=Object(m.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),p=n(170),f=n(162),g=n(163),u=n(165),O=n(166),y=n(167),w=Object(m.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white",margin:12},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),v=n(2),C=function(e){var t=e.article,n=t.description,a=t.publishedAt,c=t.source,o=t.title,l=t.url,d=t.urlToImage,j=e.activeArticle,b=e.i,h=w(),m=Object(i.useState)([]),x=Object(r.a)(m,2),C=x[0],N=x[1];return Object(i.useEffect)((function(){window.scroll(0,0),N((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(i.createRef)()}))}))}),[]),Object(i.useEffect)((function(){var e;b===j&&C[j]&&(e=C[j],window.scroll(0,e.current.offsetTop-50))}),[b,j,C]),Object(v.jsxs)(p.a,{ref:C[b],className:j===b?h.activeCard:h.card,children:[Object(v.jsxs)(f.a,{href:l,target:"_blank",children:[Object(v.jsx)(g.a,{className:h.media,image:d||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",title:o}),Object(v.jsxs)("div",{className:h.details,children:[Object(v.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(a).toDateString()}),Object(v.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.name})]}),Object(v.jsx)(s.a,{className:h.title,gutterBottom:!0,variant:"h5",component:"h2",children:o}),Object(v.jsx)(u.a,{children:Object(v.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"p",children:n})})]}),Object(v.jsxs)(O.a,{className:h.cardActions,children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:l,children:"Learn More"}),Object(v.jsx)(s.a,{variant:"h5",color:"textSecondary",component:"h2",children:b+1})]})]})},N=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],k=function(e){var t=e.articles,n=e.activeArticle,i=x();return t.length?Object(v.jsx)(b.a,{in:!0,children:Object(v.jsx)(h.a,{className:i.container,container:!0,alignItems:"stretch",children:t.map((function(e,t){return Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(v.jsx)(C,{article:e,activeArticle:n,i:t})})}))})}):Object(v.jsx)(b.a,{in:!0,children:Object(v.jsx)(h.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:N.map((function(e){return Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:i.infoCard,children:Object(v.jsxs)("div",{className:i.card,style:{backgroundColor:e.color},children:[Object(v.jsx)(s.a,{variant:"h5",component:"h5",children:e.title}),e.info?Object(v.jsxs)(s.a,{variant:"h6",component:"h6",children:[Object(v.jsx)("strong",{children:e.title.split(" ")[2]}),": ",Object(v.jsx)("br",{}),e.info]}):null,Object(v.jsxs)(s.a,{variant:"h6",component:"h6",children:["Try saying: ",Object(v.jsx)("br",{})," ",Object(v.jsx)("i",{children:e.text})]})]})})}))})})},A=n(26),S=Object(m.a)((function(e){return{footer:Object(A.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(A.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(A.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(A.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"30vmin"})}})),T=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),o=Object(r.a)(c,2),d=o[0],b=o[1],h=S();return Object(i.useEffect)((function(){j()({key:"934f6b56adf473727e332c1e3d8f9add2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,i=e.number;if("newHeadlines"===t)b(n),a(-1);else if("instructions"===t);else if("highlight"===t)a((function(e){return e+1}));else if("open"===t){var c=i.length>2?l()(i,{fuzzy:!0}):i,r=n[c-1];c>n.length?j()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),j()().playText("Opening...")):j()().playText("Please try that again...")}}})}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:h.logoContainer,children:[d.length?Object(v.jsxs)("div",{className:h.infoContainer,children:[Object(v.jsx)("div",{className:h.card,children:Object(v.jsxs)(s.a,{variant:"h5",component:"h2",children:["Try saying: ",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Open article number [4]"]})}),Object(v.jsx)("div",{className:h.card,children:Object(v.jsxs)(s.a,{variant:"h5",component:"h2",children:["Try saying: ",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Go back"]})})]}):null,Object(v.jsx)("img",{src:"https://i2.wp.com/synqqblog.wpcomstaging.com/wp-content/uploads/2019/07/screen-shot-2019-06-06-at-10.15.45-am.png?fit=400%2C136&ssl=1",className:h.alanLogo,alt:"logo"})]}),Object(v.jsx)(k,{articles:d,activeArticle:n})]})};c.a.render(Object(v.jsx)(T,{}),document.getElementById("root"))},87:function(e,t,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.79352cee.chunk.js.map