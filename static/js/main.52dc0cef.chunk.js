(this["webpackJsonpgame-idea-generator"]=this["webpackJsonpgame-idea-generator"]||[]).push([[0],{119:function(e,a,t){var n={"./en.json":120,"./pt.json":121};function i(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=119},120:function(e){e.exports=JSON.parse('{"app.genre":"Genre","app.mechanic":"Mechanic","app.theme":"Theme","app.genres":"Genres","app.mechanics":"Mechanics","app.themes":"Themes","app.randomize":"Randomize","app.share":"Share","app.title":"Game Idea Generator","app.by":"by","app.and":"and","app.madeWith":"Made with","app.mechanicSlider.label":"How many Mechanics?","app.gameIdea.title":"What about a","app.howTo.title":"How to use?","app.howTo.start":"Select how many","app.howTo.middle":"you\'ll want and click","app.howTo.end":"to generate a random set of tags.","app.howTo.description":"You game idea is a combination of three tags:","app.howTo.fineTune":"You can click on each tag to randomize it and fine-tune your game idea!"}')},121:function(e){e.exports=JSON.parse('{"app.genre":"G\xeanero","app.mechanic":"Mec\xe2nica","app.theme":"Tema","app.genres":"G\xeaneros","app.mechanics":"Mec\xe2nicas","app.themes":"Temas","app.randomize":"Randomizar","app.share":"Compartilhar","app.title":"Gerador de ideias para jogos","app.by":"por","app.and":"e","app.madeWith":"Feito com","app.mechanicSlider.label":"Quantas Mec\xe2nicas?","app.gameIdea.title":"Que tal um","app.howTo.title":"Como usar?","app.howTo.start":"Selecione quantas","app.howTo.middle":"voc\xea quer e pressione","app.howTo.end":"para gerar uma s\xe9rie aleat\xf3ria de tags.","app.howTo.description":"A ideia \xe9 feita com tr\xeas tags:","app.howTo.fineTune":"Voc\xea pode clicar em cada tag para mud\xe1-la e aperfei\xe7oar sua ideia!"}')},122:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(0),o=t.n(i),r=t(16),c=t.n(r),s=t(188),l=t(187),d=t(18),h=t(20),p=t(9),m=t(159),u=t(72),j=t.n(u),g=t(48),b=t(28),f=t(163),x=t(164),O=t(181),y=t(45),w=t(189),T=t(162),v=t(182),M=t(192),k=t(191),C=t(183),N=t(184),S=t(185),W=t(186),D=t(190),I=t(165),G=t(167),z=t(168),B=t(166),E=t(77),L=t.n(E),A=t(78),R=t.n(A),q=t(75),F=t.n(q),H=t(169),Y=t(170),J=t(171),_=t(172),Q=t(173),U=t(174),V=t(175),K=t(176),P=t(177),X=t(178),Z=t(179),$=t(180),ee=t(82),ae=Object(m.a)((function(e){return{tag:{paddingLeft:10,paddingRight:10,marginRight:5,marginBottom:5,cursor:"pointer"},tagText:{fontSize:"1.6em",color:"white"}}}));Object(g.a)({});var te,ne=Object(b.c)((function(e){var a=ae(),t=e.text,i=e.tooltip,o=e.color,r=e.onClick;return Object(n.jsx)(k.a,{title:i,"aria-label":i,children:Object(n.jsx)(ee.a,{className:a.tag,style:{backgroundColor:o},onClick:r,children:Object(n.jsx)(y.a,{variant:"body1",className:a.tagText,style:{color:"white"},children:t})})})})),ie=["tactics strategy","real time strategy","platformer","rogue-like","mmo rpg","rpg","shoot em up","racing","first person shooter","arcade","street fighter"],oe=["duel","card game","steal the flag","tower defense","survive to the end","find all items","with timer","build structures","build your player","sandbox","procedural generated","investigation","manage your shop","manage your vehicle","must co-op"],re=["medieval","fantasy","non sense","japanese","hi-tech","modern","abstract","steampunk","cyberpunk","egypt","vintage","dark fantasy"],ce=function(){return ie[Math.floor(Math.random()*ie.length)]},se=function(){return oe[Math.floor(Math.random()*oe.length)]},le=function(){return re[Math.floor(Math.random()*re.length)]},de=t.p+"static/media/gamepad_white.be479900.svg",he=t.p+"static/media/pt.17f97f51.svg",pe=t.p+"static/media/en.ce709bf8.svg",me=Object(g.a)((te={genre:{id:"app.genre",defaultMessage:"Genre"},mechanic:{id:"app.mechanic",defaultMessage:"Mechanic"},theme:{id:"app.theme",defaultMessage:"Theme"},genres:{id:"app.genres",defaultMessage:"Genres"},mechanics:{id:"app.mechanics",defaultMessage:"Mechanics"},themes:{id:"app.themes",defaultMessage:"Themes"},randomize:{id:"app.randomize",defaultMessage:"Randomize"},share:{id:"app.share",defaultMessage:"Share"},title:{id:"app.title",defaultMessage:"Game Idea Generator"},by:{id:"app.by",defaultMessage:"by"},and:{id:"app.and",defaultMessage:"and"},madeWith:{id:"app.madeWith",defaultMessage:"Made with"},mechanicSliderLabel:{id:"app.mechanicSlider.label",defaultMessage:"How many Mechanics?"},gameIdeaTitle:{id:"app.gameIdea.title",defaultMessage:"What about a"},howToFineTune:{id:"app.howTo.fineTune",defaultMessage:"You can click on each tag to randomize it and fine-tune your game idea!"},howToEnd:{id:"app.howTo.end",defaultMessage:"to generate a random set of tags."},howToMiddle:{id:"app.howTo.middle",defaultMessage:"you'll want and click"},howToStart:{id:"app.howTo.start",defaultMessage:"Select how many"},howToDescription:{id:"app.howTo.description",defaultMessage:"You game idea is a combination of three tags:"},howToTitle:{id:"app.howTo.title",defaultMessage:"How to use?"}},Object(p.a)(te,"howToMiddle",{id:"app.howTo.middle",defaultMessage:"you'll want and click"}),Object(p.a)(te,"howToMiddle",{id:"app.howTo.middle",defaultMessage:"you'll want and click"}),te));function ue(){return Object(n.jsxs)(y.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(n.jsx)(T.a,{color:"inherit",href:"https://github.com/AndreMicheletti/game-idea-generator/blob/master/LICENSE",children:"Andr\xe9 Micheletti"})," ",(new Date).getFullYear(),"."]})}var je=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]},footerContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},toolbar:{display:"flex",flexDirection:"row",justifyContent:"center"},card:{backgroundColor:"#333",padding:30,paddingTop:15,paddingBottom:15},formBox:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},dataLine:{display:"flex",flexDirection:"row",flexWrap:"wrap"},instructionsBox:{marginTop:28},slider:{width:200},theme:{color:"#087b08",fontWeight:500},genre:{color:"#e66d52",fontWeight:500},mechanic:{color:"#3b28da",fontWeight:500},dialogRoot:{margin:0,padding:e.spacing(2)},dialogCloseButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogTextBox:{padding:8,backgroundColor:"#e8e8e8"}}}));var ge,be=Object(b.c)((function(e){var a=e.intl.formatMessage,t=je(),r=o.a.useState([ce()]),c=Object(h.a)(r,2),s=c[0],l=c[1],p=o.a.useState([se()]),m=Object(h.a)(p,2),u=m[0],g=m[1],b=o.a.useState([le()]),E=Object(h.a)(b,2),A=E[0],q=E[1],ee=o.a.useState(1),ae=Object(h.a)(ee,2),te=ae[0],ge=ae[1],be=o.a.useState(!1),fe=Object(h.a)(be,2),xe=fe[0],Oe=fe[1],ye=function(e,a,t){var n=Object(d.a)(e);return n[a]=t,Object(d.a)(n)},we=function(e){ge(e),g(function(e,a,t){var n=Object(d.a)(e);return n.length>a?n.slice(0,a):(Object(d.a)(Array(a-n.length).keys()).forEach((function(e){n.push(t())})),Object(d.a)(n))}(u,e,se))};Object(i.useEffect)((function(){try{var e=j.a.parse(location.search);if(e&&e.g){var a=e.m?parseInt(e.m):1,t=e.g.split(".");if(t.length!==2+a)throw"Not enough parameters. malformed querystring";var n=t.slice(0,1),i=t.slice(1,1+a),o=t.slice(1+a,2+a);l(o.map((function(e){return function(e){return ie[e]}(e)}))),g(i.map((function(e){return function(e){return oe[e]}(e)}))),q(n.map((function(e){return function(e){return re[e]}(e)}))),ge(a)}}catch(r){console.warn(r),l([ce()]),g([se()]),q([le()])}}),[]);var Te="".concat("https","://").concat("andremicheletti",".github.io/").concat("game-idea-generator","/").concat(function(e,a,t,n){var i=e.map((function(e){return ie.indexOf(e)})),o=t.map((function(e){return oe.indexOf(e)})),r=a.map((function(e){return re.indexOf(e)})).concat(o).concat(i).join(".");return"?g=".concat(r,"&m=").concat(n)}(s,A,u,te)),ve="I've generated a random game idea using this simple tool, check it out!";return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(f.a,{position:"relative",children:Object(n.jsxs)(x.a,{className:t.toolbar,children:[Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexShrink:1,alignItems:"center"},children:[Object(n.jsx)("img",{src:de,width:"100",height:"50"}),Object(n.jsx)("a",{href:"/",style:{textDecoration:"none",color:"inherit"},children:Object(n.jsx)(y.a,{variant:"h4",color:"inherit",noWrap:!0,children:a(me.title)})})]}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:1,flexGrow:1,alignItems:"center",justifyContent:"flex-end"},children:[Object(n.jsx)(T.a,{href:"/pt/",children:Object(n.jsx)("img",{src:he,width:"35",height:"35"})}),Object(n.jsx)("div",{style:{width:10}}),Object(n.jsx)(T.a,{href:"/en/",children:Object(n.jsx)("img",{src:pe,width:"35",height:"35"})})]})]})}),Object(n.jsxs)(D.a,{open:xe,children:[Object(n.jsxs)(I.a,{className:t.dialogRoot,children:[Object(n.jsx)(y.a,{component:"p",variant:"h5",children:a(me.share)}),Object(n.jsx)(B.a,{"aria-label":"close",className:t.dialogCloseButton,onClick:function(){Oe(!1)},children:Object(n.jsx)(F.a,{})})]}),Object(n.jsx)(G.a,{children:Object(n.jsx)("div",{className:t.dialogTextBox,children:Object(n.jsx)(y.a,{variant:"subtitle1",style:{fontWeight:"normal"},children:Te})})}),Object(n.jsxs)(z.a,{children:[Object(n.jsx)(H.a,{url:Te,title:"Check out this game idea",body:ve,children:Object(n.jsx)(Y.a,{round:!0})}),Object(n.jsx)(J.a,{url:Te,quote:ve,children:Object(n.jsx)(_.a,{round:!0})}),Object(n.jsx)(Q.a,{url:Te,title:ve,children:Object(n.jsx)(U.a,{round:!0})}),Object(n.jsx)(V.a,{url:Te,title:ve,children:Object(n.jsx)(K.a,{round:!0})}),Object(n.jsx)(P.a,{url:Te,title:ve,children:Object(n.jsx)(X.a,{round:!0})}),Object(n.jsx)(Z.a,{url:Te,title:ve,children:Object(n.jsx)($.a,{round:!0})})]})]}),Object(n.jsx)("main",{children:Object(n.jsxs)(O.a,{component:"main",className:t.main,maxWidth:"md",children:[Object(n.jsxs)(w.a,{my:4,className:t.formBox,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(y.a,{id:"discrete-slider",gutterBottom:!0,children:a(me.mechanicSliderLabel)}),Object(n.jsx)(M.a,{className:t.slider,defaultValue:1,value:te,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:3,onChangeCommitted:function(e,a){we(a)}})]}),Object(n.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){return l(s.map((function(e){return ce()}))),q(A.map((function(e){return le()}))),void g(u.map((function(e){return se()})))},children:a(me.randomize)})]}),Object(n.jsxs)(C.a,{className:t.card,children:[Object(n.jsx)(N.a,{title:Object(n.jsx)(y.a,{variant:"h4",style:{color:"white"},children:a(me.gameIdeaTitle)})}),Object(n.jsx)(S.a,{children:Object(n.jsxs)("div",{className:t.dataLine,children:[A.map((function(e,t){return Object(n.jsx)(ne,{text:e,color:"#087b08",tooltip:a(me.theme),onClick:function(){q(ye(A,t,le()))}},"theme-".concat(t))})),u.map((function(e,t){return Object(n.jsx)(ne,{text:e,color:"#3b28da",tooltip:a(me.mechanic),onClick:function(){g(ye(u,t,se()))}},"mech-".concat(t))})),s.map((function(e,t){return Object(n.jsx)(ne,{text:e,color:"#e66d52",tooltip:a(me.genre),onClick:function(){l(ye(s,t,ce()))}},"genre-".concat(t))}))]})}),Object(n.jsx)(W.a,{children:Object(n.jsx)(k.a,{title:a(me.share),"aria-label":"share",children:Object(n.jsx)(B.a,{"aria-label":"share",color:"primary",onClick:function(){Oe(!0)},children:Object(n.jsx)(L.a,{})})})})]}),Object(n.jsxs)(O.a,{maxWidth:"sm",className:t.instructionsBox,children:[Object(n.jsx)(y.a,{variant:"h4",children:a(me.howToTitle)}),Object(n.jsxs)(y.a,{variant:"body1",style:{marginTop:3},children:[a(me.howToDescription),Object(n.jsxs)("span",{className:t.theme,children:[" ",a(me.theme)]}),",",Object(n.jsxs)("span",{className:t.mechanic,children:[" ",a(me.mechanics)]})," ",a(me.and),Object(n.jsxs)("span",{className:t.genre,children:[" ",a(me.genre)]})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(y.a,{variant:"body1",children:[a(me.howToStart)," ",Object(n.jsxs)("span",{className:t.mechanic,children:[" ",a(me.mechanics)]})," "," ",a(me.howToMiddle),Object(n.jsxs)(y.a,{color:"primary",variant:"button",children:[" "," ",a(me.randomize)," "," "]}),a(me.howToEnd)]}),Object(n.jsx)("br",{}),Object(n.jsx)(y.a,{variant:"body1",children:a(me.howToFineTune)})]})]})}),Object(n.jsx)("footer",{className:t.footer,children:Object(n.jsxs)(O.a,{maxWidth:"sm",className:t.footerContainer,children:[Object(n.jsxs)(y.a,{variant:"body1",children:[a(me.madeWith),Object(n.jsx)(R.a,{color:"error"}),a(me.by),Object(n.jsxs)(T.a,{href:"https://andregamedev.itch.io/",children:[" ","AndreGameDev"]})]}),Object(n.jsx)(ue,{})]})})]})})),fe=t(60),xe=t(79),Oe=Object(xe.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:fe.a.A400},background:{default:"#fff"},text:{primary:"#333",secondary:"#555"}}}),ye=t(66);Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};try{if(!(ge=location.pathname.replace(/\//g,"")))throw"opa"}catch(Te){ge="en"}var we=t(119)("./".concat(ge,".json"));c.a.render(Object(n.jsx)(ye.a,{locale:"pt",messages:we,children:Object(n.jsxs)(l.a,{theme:Oe,children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(be,{})]})}),document.querySelector("#root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.52dc0cef.chunk.js.map