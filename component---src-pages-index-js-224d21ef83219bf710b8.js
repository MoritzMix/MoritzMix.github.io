(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{124:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),i=n(0),o=n.n(i),s=o.a.createContext(),c=(n(128),n(129),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).setPage=function(e,t){t(e)},t}return a()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(s.Consumer,null,function(t){var n=t.appState,r=t.setCurrentPage;return o.a.createElement("div",{className:"header"},o.a.createElement("ul",null,n.paragraphs.map(function(t){return o.a.createElement("li",{key:t.id,className:t.id===n.currentPage?"active":"",onClick:function(){return e.setPage(t.id,r)}},t.title)})),o.a.createElement("div",{className:"langSelector"}))})},t}(i.Component)),l=(n(130),i.Component,n(125)),u=new(n(131).EventEmitter),m=(n(136),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).emitScrollEvent=function(e,t){t(e),u.emit("paragraphScroll",e)},t}return a()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(s.Consumer,null,function(t){var n=t.appState,r=t.setCurrentParagraph,a=2===n.currentPage;return o.a.createElement(l.a,{items:a,from:{bottom:"-100%"},enter:{bottom:"0%"},leave:{bottom:"-100%"}},function(t){return t&&function(t){return o.a.createElement("div",{style:t,className:"sidebar"},o.a.createElement("hr",null),o.a.createElement("ul",null,n.vita.map(function(t){return o.a.createElement("li",{onClick:function(){return e.emitScrollEvent(t.id,r)},className:t.id===n.currentParagraph?"active":"",key:t.id},t.title)})))}})})},t}(i.Component)),d=(n(137),n(138),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"about"},o.a.createElement(s.Consumer,null,function(e){var t=e.appState,n=1===t.currentPage;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"about-header"},o.a.createElement(l.a,{items:n,from:{left:"-100%"},enter:{left:"0%"},leave:{left:"-100%"}},function(e){return e&&function(e){return o.a.createElement("div",{style:e,className:"curtain-left"},o.a.createElement("p",null,"Hi. Mein Name ist"),o.a.createElement("p",null,"Und ich bin"))}}),o.a.createElement(l.a,{items:n,from:{right:"-100%"},enter:{right:"0%"},leave:{right:"-100%"}},function(e){return e&&function(e){return o.a.createElement("div",{style:e,className:"curtain-right"},o.a.createElement("p",null,"Moritz."),o.a.createElement("p",null,"Web-Entwickler."))}})),o.a.createElement("div",{className:"about-content"},t.about.content.map(function(e,t){return o.a.createElement("p",{key:t},e)})))}))},t}(i.Component)),p=(n(139),n(44)),y=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.item,t=(e.id,e.duration),n=e.employer,r=e.activity,a=e.misc;return o.a.createElement("div",{className:"vitaContent"},t&&o.a.createElement("p",{className:"duration"},t),n&&o.a.createElement("p",{className:"employer"},n),r&&o.a.createElement("p",{className:"activity"},r),a&&a.map(function(e,t){return o.a.createElement("p",{key:t,className:"misc"},e)}))},t}(i.Component);h.contextType=s;var g=h,f={$grayDark:"#2E2E2E",$grayMedium:"#676767",$grayLight:"#9A9999",$white:"#ffffff",$colorPrimary_0:"#648DB1",$colorPrimary_1:"#C7DAEC",$colorPrimary_2:"#93B4D1",$colorPrimary_3:"#426E96",$colorPrimary_4:"#295882",$colorSecondary_1_0:"#FFE288",$colorSecondary_1_1:"#FFF5D4",$colorSecondary_1_2:"#FFEBAD",$colorSecondary_1_3:"#E8C65C",$colorSecondary_1_4:"#C9A535",$colorSecondary_2_0:"#FFAD88",$colorSecondary_2_1:"#FFE1D4",$colorSecondary_2_2:"#FFC7AD",$colorSecondary_2_3:"#E8875C",$colorSecondary_2_4:"#C96335"};var v=null,w=function(e){function t(t){var n;return(n=e.call(this,t)||this).setParagraph=n.setParagraph.bind(y()(y()(n))),n}a()(t,e);var n=t.prototype;return n.setParagraph=function(){var e,t,n=+this.vitaEntry.dataset.paragraph;e=this.vitaEntry,(t=e.getBoundingClientRect()).top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)&&this.context.setCurrentParagraph(n)},n.scrollTo=function(e){+this.vitaEntry.dataset.paragraph===e&&window.scrollTo({top:this.vitaEntry.offsetTop-50})},n.componentDidMount=function(){var e=this.vitaEntry;v=u.addListener("paragraphScroll",function(t){+e.dataset.paragraph===t&&window.scrollTo({top:e.offsetTop-50})}),window.addEventListener("scroll",this.setParagraph)},n.componentWillUnmount=function(){v.remove(),window.removeEventListener("scroll",this.setParagraph)},n.render=function(){var e=this,t=this.props.item,n=t.id,r=t.content,a=t.title;return o.a.createElement("div",{key:n,className:"paragraph"},o.a.createElement("h2",{"data-paragraph":n,ref:function(t){return e.vitaEntry=t}},a),r.map(function(e){return o.a.createElement(g,{key:e.id,item:e})}))},t}(i.Component);w.contextType=s;var b,E=w,x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"vita"},o.a.createElement(s.Consumer,null,function(e){return e.appState.vita.map(function(e){return o.a.createElement(E,{key:e.id,item:e})})}))},t}(i.Component),S=(n(140),n(27),n(28),n(63),n(141),n(142),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.label,n=void 0===t?"":t,r=e.style,a=r.border,i=r.colorPrimary,s=r.colorSecondary,c=e.callback,l={borderColor:a?s:i,color:s,background:i};return o.a.createElement("button",{style:l,className:"button",onClick:c},n)},t}(i.Component)),k=(n(143),function(e){function t(){var t;return(t=e.call(this)||this).state={inputValue:10},t}a()(t,e);var n=t.prototype;return n.updateInputValue=function(e,t){this.setState({inputValue:e}),t(e)},n.render=function(){var e=this,t=this.props,n=t.style,r=n.colorPrimary,a=n.colorSecondary,i=t.callback,s=t.attributes,c={borderColor:a,color:a,background:r};return o.a.createElement("div",{className:"input-number",style:c},o.a.createElement("div",{className:"grid-substract",onClick:function(t){return e.updateInputValue(+e.state.inputValue-1,i)}},"-"),o.a.createElement("input",Object.assign({},s,{className:"grid-input",onChange:function(t){return e.updateInputValue(t.target.value,i)}})),o.a.createElement("div",{className:"grid-add",onClick:function(t){return e.updateInputValue(+e.state.inputValue+1,i)}},"+"))},t}(i.Component)),C=(n(144),function(e){function t(){var t;return(t=e.call(this)||this).toggleDropdown=function(){t.setState(function(e){return{show:!t.state.show}})},t.updateSelectValue=function(e,n,r){t.toggleDropdown(),t.setState(function(t){return{activeOption:e}}),r(n)},t.state={activeOption:null,show:!1},t}return a()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.callback,r=t.options;t.style;return o.a.createElement("div",{className:"dropdownWrapper"},o.a.createElement("div",{className:"dropdown"},o.a.createElement("div",{className:"option active",onClick:this.toggleDropdown},this.state.activeOption?""+this.state.activeOption:"Select Grid Size"),o.a.createElement(l.a,{items:this.state.show,from:{opacity:0},enter:{opacity:1},leave:{opacity:0}},function(t){return t&&function(t){return r.map(function(r){return o.a.createElement("div",{className:"option",key:r.id,onClick:function(){return e.updateSelectValue(r.label,r.value,n)},ref:function(t){return e.option=t},style:t},r.label)})}})))},t}(i.Component)),N={breakpoints:[{id:0,label:"768px",value:768},{id:1,label:"1024px",value:1024},{id:2,label:"1280px",value:1280},{id:3,label:"1920px",value:1920}],gridMin:4,gridMax:20,gridSize:10,elements:[],screenWidth:0};try{b=n(145)}catch(e){console.log(e)}var M=function(e){function t(){var t;return(t=e.call(this)||this).buttons={clear:{callback:function(){b(t.svgDiv).clear(),N.elements.length=0,t.svgRender()},label:"Clear",style:{border:!0,colorPrimary:f.$grayDark,colorSecondary:f.$grayLight}},content:{callback:function(){t.element="content",t.drawElement(t.svgDiv,t.buttons.content)},label:"Content",type:"grid-content",style:{border:!0,colorPrimary:f.$colorSecondary_1_4,colorSecondary:f.$colorSecondary_1_2}},export:{callback:function(){t.createPage()},label:"Open Layout in new tab",style:{border:!1,colorPrimary:f.$colorSecondary_2_3,colorSecondary:f.$colorSecondary_2_1}},header:{callback:function(){t.element="header",t.drawElement(t.svgDiv,t.buttons.header)},label:"Header",type:"grid-header",style:{border:!0,colorPrimary:f.$colorSecondary_2_4,colorSecondary:f.$colorSecondary_2_2}},sidebar:{callback:function(){t.element="sidebar",t.drawElement(t.svgDiv,t.buttons.sidebar)},label:"Sidebar",type:"grid-sidebar",style:{border:!0,colorPrimary:f.$colorPrimary_4,colorSecondary:f.$colorPrimary_2}}},t.input={callback:function(e){t.setGridSize(e)},style:{border:!0,colorPrimary:f.$grayDark,colorSecondary:f.$grayLight},attributes:{min:N.gridMin,max:N.gridMax,placeholder:"Select Grid Size",type:"number"}},t.select={callback:function(e){N.screenWidth=e},style:{border:!0,colorPrimary:f.$grayDark,colorSecondary:f.$grayLight},options:N.breakpoints},t.element=void 0,t.setGridSize=function(e){e&&t.setState({gridSize:e})},t.state={gridSize:N.gridSize},t}a()(t,e);var n=t.prototype;return n.createPage=function(){function e(e,t,n){var r=t+"  "+n,a=e.cssRules.length;e.insertRule(r,a)}if(N.elements.length){var t=window.open("","MsgWindow").document,n=t.head.appendChild(t.createElement("style")).sheet,r=t.querySelector("body"),a=t.createElement("DIV");a.classList.add("grid-wrapper"),e(n,".grid-wrapper","{display: grid; height: 100%; width: 100%; grid-template-columns: repeat("+N.gridSize+", 1fr); grid-template-rows: repeat("+N.gridSize+", 1fr);}"),e(n,".element-container","{box-sizing: border-box; padding: 5px; height: 100%; width: 100%;}"),e(n,".grid-header","{background: "+f.$colorSecondary_2_4+"; height: 100%; width: 100%;}"),e(n,".grid-sidebar","{background: "+f.$colorPrimary_4+"; height: 100%; width: 100%;}"),e(n,".grid-content","{background: "+f.$colorSecondary_1_4+"; height: 100%; width: 100%;}"),e(n,".grid-content","{background: "+f.$colorSecondary_1_4+"; height: 100%; width: 100%;}"),N.breakpoints.forEach(function(n){var r=N.elements.filter(function(e){return e.screenWidth===n.value});if(r.length){var i,o=t.createElement("style");o.setAttribute("media","only screen and (min-width: "+n.value+"px)"),i=t.head.appendChild(o).sheet,r.map(function(n){var r=t.createElement("DIV"),o=t.createElement("DIV"),s=JSON.stringify(n.position,null,1).replace(/"/g,"").replace(/,\n/g,";").replace(/\}/g,";}");Object.assign(r,n.attributes),r.classList.add("element-container"),o.classList.add(n.type),e(i,"#"+n.attributes.id,s),r.appendChild(o),a.appendChild(r)})}}),r.appendChild(a)}},n.svgRender=function(){var e,t,n,r=window.getComputedStyle(this.svgDiv,null),a=r.height,i=r.width,o=b(this.svgDiv);o.clear(),a=a.replace("px",""),i=i.replace("px",""),n="M0,0H"+(t={height:a/this.state.gridSize,width:i/this.state.gridSize}).width+"V"+t.height+"H0V0",e=o.path(n).attr({fill:"none",stroke:f.$grayMedium,strokeWidth:.5}).pattern(0,0,t.width,t.height),o.attr({viewBox:"0,0,"+i+","+a,fill:e}),o.rect(0,0,i,a).attr({fill:e})},n.drawElement=function(e,t){var n,r,a,i,o,s,c=b(e),l=this.svgDiv,u=this.state.gridSize,m=window.getComputedStyle(l,null),d=m.height,p=m.width,y=t.style,h=y.colorPrimary,g=y.colorSecondary,f=[],v={nw:{x:null,y:null},ne:{x:null,y:null},se:{x:null,y:null},sw:{x:null,y:null}};function w(){e.style.cursor="move"}function E(e,t){e=+b.snapTo(p,e,p/2+1),t=+b.snapTo(d,t,d/2+1),o.attr({points:[v.nw.x+e,v.nw.y+t,v.ne.x+e,v.ne.y+t,v.se.x+e,v.se.y+t,v.sw.x+e,v.sw.y+t],fill:h,stroke:g,"stroke-dasharray":"10,10",strokeWidth:1,opacity:.5}),f[0].attr({cx:v.nw.x+e,cy:v.nw.y+t}),f[1].attr({cx:v.ne.x+e,cy:v.ne.y+t}),f[2].attr({cx:v.se.x+e,cy:v.se.y+t}),f[3].attr({cx:v.sw.x+e,cy:v.sw.y+t})}function x(){v.nw.x=+o.attr("points")[0],v.nw.y=+o.attr("points")[1],v.ne.x=+o.attr("points")[2],v.ne.y=+o.attr("points")[3],v.se.x=+o.attr("points")[4],v.se.y=+o.attr("points")[5],v.sw.x=+o.attr("points")[6],v.sw.y=+o.attr("points")[7],o.attr({opacity:1,"stroke-dasharray":"none"}),e.style.cursor="default"}function S(e,t,n){s=n.currentTarget}function k(e,t,n,r,a){var i=s.dataset.pos;switch(e=+b.snapTo(p,e,p/2+1),t=+b.snapTo(d,t,d/2+1),i){case"nw":console.log("nw"),o.attr({points:[v.nw.x+e,v.nw.y+t,v.ne.x,v.ne.y+t,v.se.x,v.se.y,v.sw.x+e,v.sw.y]}),f[0].attr({cx:v.nw.x+e,cy:v.nw.y+t}),f[1].attr({cy:v.ne.y+t}),f[3].attr({cx:v.sw.x+e});break;case"ne":console.log("ne"),o.attr({points:[v.nw.x,v.nw.y+t,v.ne.x+e,v.ne.y+t,v.se.x+e,v.se.y,v.sw.x,v.sw.y]}),f[0].attr({cy:v.nw.y+t}),f[1].attr({cx:v.ne.x+e,cy:v.ne.y+t}),f[2].attr({cx:v.se.x+e});break;case"se":console.log("se"),o.attr({points:[v.nw.x,v.nw.y,v.ne.x+e,v.ne.y,v.se.x+e,v.se.y+t,v.sw.x,v.sw.y+t]}),f[1].attr({cx:v.ne.x+e}),f[2].attr({cx:v.se.x+e,cy:v.se.y+t}),f[3].attr({cy:v.sw.y+t});break;case"sw":console.log("sw"),o.attr({points:[v.nw.x+e,v.nw.y,v.ne.x,v.ne.y,v.se.x,v.se.y+t,v.sw.x+e,v.sw.y+t]}),f[0].attr({cx:v.nw.x+e}),f[2].attr({cy:v.se.y+t}),f[3].attr({cx:v.sw.x+e,cy:v.sw.y+t})}}function C(e){v.nw.x=+o.attr("points")[0],v.nw.y=+o.attr("points")[1],v.ne.x=+o.attr("points")[2],v.ne.y=+o.attr("points")[3],v.se.x=+o.attr("points")[4],v.se.y=+o.attr("points")[5],v.sw.x=+o.attr("points")[6],v.sw.y=+o.attr("points")[7]}function N(t){n=t.offsetX,a=t.offsetY,e.addEventListener("mousemove",M)}function M(e){var t;switch(r=e.offsetX,i=e.offsetY,t=(a<i?"N":"S")+(n<r?"W":"E"),n=b.snapTo(p,n,p/2+1),r=b.snapTo(p,r,p/2+1),a=b.snapTo(d,a,d/2+1),i=b.snapTo(d,i,d/2+1),t){case"NW":v.nw.x=n,v.nw.y=a,v.ne.x=r,v.ne.y=a,v.se.x=r,v.se.y=i,v.sw.x=n,v.sw.y=i;break;case"NE":v.nw.x=r,v.nw.y=a,v.ne.x=n,v.ne.y=a,v.se.x=n,v.se.y=i,v.sw.x=r,v.sw.y=i;break;case"SE":v.nw.x=r,v.nw.y=i,v.ne.x=n,v.ne.y=i,v.se.x=n,v.se.y=a,v.sw.x=r,v.sw.y=a;break;case"SW":v.nw.x=n,v.nw.y=i,v.ne.x=r,v.ne.y=i,v.se.x=r,v.se.y=a,v.sw.x=n,v.sw.y=a}o?o.attr({points:[v.nw.x,v.nw.y,v.ne.x,v.ne.y,v.se.x,v.se.y,v.sw.x,v.sw.y]}):o=c.polygon().attr({points:[v.nw.x,v.nw.y,v.ne.x,v.ne.y,v.se.x,v.se.y,v.sw.x,v.sw.y]}),o.attr({fill:h,stroke:g,"stroke-dasharray":"10,10",strokeWidth:1,opacity:.5})}d=d.replace("px",""),p=p.replace("px",""),d/=u,p/=u,e.addEventListener("mousedown",N),e.addEventListener("mouseup",function n(){e.removeEventListener("mousedown",N),e.removeEventListener("mousemove",M),e.removeEventListener("mouseup",n),e.style.cursor="default",o.attr({fill:h,stroke:g,"stroke-dasharray":"none",strokeWidth:1,opacity:1,class:t.type});var r=c.circle(v.nw.x,v.nw.y,5).attr({fill:g,cursor:"nwse-resize","data-pos":"nw"}),a=c.circle(v.ne.x,v.ne.y,5).attr({fill:g,cursor:"nesw-resize","data-pos":"ne"}),i=c.circle(v.se.x,v.se.y,5).attr({fill:g,cursor:"nwse-resize","data-pos":"se"}),s=c.circle(v.sw.x,v.sw.y,5).attr({fill:g,cursor:"nesw-resize","data-pos":"sw"});o.drag(E,w,x),f.push(r,a,i,s),f.forEach(function(e){return e.drag(k,S,C)})}),e.style.cursor="crosshair"},n.componentDidMount=function(){this.svgRender()},n.componentDidUpdate=function(){this.svgRender()},n.componentWillUnmount=function(){},n.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Konzept für das dynamische Erstellen von Seitenlayouts"),o.a.createElement("p",null,"WIP"),o.a.createElement("div",{className:"svgGridSidebar"},o.a.createElement(S,this.buttons.header),o.a.createElement(S,this.buttons.sidebar),o.a.createElement(S,this.buttons.content),o.a.createElement(S,this.buttons.clear),o.a.createElement(C,this.select),o.a.createElement(k,this.input),o.a.createElement(S,this.buttons.export)),o.a.createElement("svg",{className:"gridWrapper",ref:function(t){return e.svgDiv=t}}))},t}(i.Component);M.contextType=s;var D=M,A=n(147),P=n.n(A),I=(n(148),null),T=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.vitaEntry;I=u.addListener("pocScroll",function(t){+e.dataset.paragraph===t&&window.scrollTo({top:e.offsetTop-50})})},n.componentWillUnmount=function(){I.remove()},n.render=function(){return o.a.createElement(s.Consumer,null,function(e){var t=e.appState,n=t.pocs[t.currentPOC],r=n.show;return o.a.createElement(l.a,{items:r,from:{right:"-100%"},enter:{right:"0%"},leave:{right:"-100%"}},function(e){return e&&function(e){return o.a.createElement("div",{style:e,className:"call-to-action"},o.a.createElement("img",{src:P.a}),o.a.createElement("p",null,"View on Github"),o.a.createElement("a",{href:n.url,target:"_blank"}))}})})},t}(i.Component),z=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).emitScrollEvent=function(e){u.emit("pocScroll",e)},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.setPOC)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.setPOC)},n.render=function(){return o.a.createElement("div",{className:"playground"},o.a.createElement(D,null),o.a.createElement(T,null))},t}(i.Component),V=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e={1:{component:o.a.createElement(d,null),class:"content-about"},2:{component:o.a.createElement(x,null),class:"content-vita"},3:{component:o.a.createElement(z,null),class:"content-playground"}};return o.a.createElement("div",{className:"content"},o.a.createElement(s.Consumer,null,function(t){var n=t.appState.currentPage;return o.a.createElement(l.a,{items:n,from:{opacity:0},enter:{opacity:1},leave:{display:"none"}},function(t){return function(n){return o.a.createElement("div",{className:e[t].class,style:n},e[t].component)}})}))},t}(i.Component),B=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).appState={currentPage:1,currentParagraph:1,currentPOC:0,paragraphs:[{id:1,title:"About"},{id:2,title:"Vita"},{id:3,title:"Playground"}],pocs:{0:{show:!1},1:{id:1,title:"Grid Test",url:"https://github.com/",show:!1}},about:{header:{imgSrc:"",content:["Hi. Ich bin Moritz.","Und ich bin Web-Entwickler."]},content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor convallis\n\t\t\t\tenim gravida bibendum. Sed non nulla vel ipsum ultricies dapibus quis non neque.\n\t\t\t\t\tVivamus enim purus, porta eu justo sagittis, lacinia porttitor ligula. Suspendisse\n\t\t\t\taliquet et nisl a pharetra. Pellentesque eget sem vitae magna imperdiet condimentum.\n\t\t\t\t\tEtiam imperdiet blandit urna nec finibus. Etiam luctus iaculis euismod. Pellentesque\n\t\t\t\ttristique pellentesque dolor non porta. Curabitur sit amet augue purus. Nunc blandit\n\t\t\t\tlacus fringilla, finibus enim ac, imperdiet sem. Cras commodo tellus non blandit\n\t\t\t\tmaximus. Duis et tellus sed sem sollicitudin iaculis at at ipsum. Aliquam\n\t\t\t\tscelerisque velit a lectus molestie, id aliquet nisi euismod.","onec lacinia, mauris vitae luctus elementum, neque quam pharetra lorem, sit amet\n\t\t\t\tpharetra risus arcu id erat. Proin suscipit velit id nunc ornare, et accumsan magna\n\t\t\t\tluctus. Donec sed nisl pellentesque, rutrum ligula sit amet, viverra nisl. In hac\n\t\t\t\thabitasse platea dictumst. Aliquam at purus felis. Suspendisse et dolor neque. Fusce\n\t\t\t\ttincidunt ante a commodo hendrerit. Nunc accumsan vestibulum justo, a scelerisque\n\t\t\t\tante aliquam in. Pellentesque ac suscipit ante, a pretium neque. In semper blandit\n\t\t\tlectus a dictum.","liquam sed arcu ultricies, mollis erat vitae, efficitur turpis. Suspendisse\n\t\t\tpotenti. Mauris eget neque quis odio faucibus pulvinar. Pellentesque leo libero,\n\t\t\tornare sed commodo ut, gravida eget tortor. Vivamus efficitur maximus ligula nec\n\t\t\thendrerit. Proin a diam eleifend, euismod quam vel, viverra odio. Donec congue a mi\n\t\t\tet tristique. Morbi efficitur, magna congue fermentum tincidunt, neque erat\n\t\t\ttristique mi, at commodo urna orci ut purus. Integer mattis non metus at egestas.\n\t\t\tSed ac auctor mauris, non efficitur eros. Donec consequat vestibulum blandit.\n\t\t\tPraesent pharetra pulvinar ligula. Mauris et ullamcorper lorem.","unc imperdiet enim sed erat scelerisque placerat. Maecenas ornare ligula eu velit\n\t\t\taccumsan laoreet. Nullam ac metus commodo, consequat nulla id, facilisis orci. Nulla\n\t\t\tplacerat diam quis dictum aliquet. Pellentesque hendrerit risus turpis, a semper\n\t\t\turna suscipit vitae. Integer finibus vitae tortor non pellentesque. Nullam a nunc\n\t\t\tleo. Donec imperdiet in velit non consequat. Fusce condimentum vel enim eget\n\t\t\tsuscipit. Donec vel posuere metus. Morbi consequat velit ut libero tempus, eget\n\t\t\tmollis orci tincidunt. Phasellus interdum fermentum odio, quis gravida magna. Duis\n\t\t\tpulvinar, lorem vel placerat tristique, ipsum quam convallis nibh, at viverra mauris\n\t\t\teros a justo. Suspendisse eget interdum augue, eu commodo ligula. Class aptent\n\t\t\ttaciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc\n\t\t\tplacerat euismod lacus vitae hendrerit."]},vita:[{id:1,title:"Tools",content:[{id:1,employer:"Basics:",activity:"HTML, CSS, JavaScript, Node.js, MongoDB, SQL, Java, VBA"},{id:2,employer:"Frameworks:",activity:"React.js, Gatsby, Vue.js, Nuxt, Mongoose, jQuery"},{id:3,employer:"Basics:",activity:"MVC, Client/Server, Entity-Relationship, Datenbanknormalisierung"},{id:4,employer:"Sonstiges:",activity:"Git, Grunt, Sass, SVG, Webpack"}]},{id:2,title:"Berufsweg",content:[{id:1,duration:"06/2016 - heute",employer:"Hamburger Hochbahn",activity:"Software Engineer",misc:["HTML, JS, CSS","React, Node.js, MongoDB"]},{id:2,duration:"10/2015 - 06/2016",employer:"Universitätsklinikum Köln",activity:"Datenbankadministration",misc:["Weiterentwicklung und Pflege relationaler Datenbanken","Implementierung neuer Instrumente zur Datenerhebung","Betreuung eines Windows Server 2012 R2","Schnittstellenentwicklung zu externer Auswertungssoftware"]},{id:3,duration:"09/2014 - 09/2015",employer:"Universitätsklinikum Köln",activity:"Studentische Hilfskraft",misc:["Planung eines normalisierten Datenmodells","Entwicklung relationaler Datenbanken","Migration bestehender Datensätze"]}]},{id:3,title:"Projekte",content:[{id:1,duration:"01/2018 - heute",employer:"thyssenkrupp AG",activity:"Erweiterung Intranet",misc:["Betreuung des Intranets","HTML, JS, CSS"]},{id:2,duration:"09/2018 - 10/2018",employer:"thyssenkrupp AG",activity:"Lunchroulette",misc:["Entwicklung einer Full-Stack-Webapp","Node.js, MongoDB, React"]},{id:3,duration:"09/2017 - 01/2018",employer:"thyssenkrupp AG",activity:"direktzu",misc:["Neuentwicklung einer Many to One Plattform","Node.js, Forms Experience Builder, HTML, JS, CSS"]},{id:4,duration:"01/2017 - 01/2018",employer:"Großes Hamburger Energielogistikunternehmen",activity:"Erweiterung Intranet",misc:["Betreuung des Intranets","HTML, JS, CSS"]},{id:5,duration:"09/2016 - 03/2017",employer:"Hamburger Hochbahn",activity:"Relaunch Mitarbeiterportal",misc:["Neuentwicklung des Intranets im SCRUM-Verfahren","HTML, JS, CSS","Auszeichnung 'Onlinekommunikationspreis 2017'"]},{id:6,duration:"03/2016",employer:"Universitätsklinikum Köln",activity:"Datenbankentwicklung",misc:["Entwicklung einer Datenbank zur Neuanmeldung von Patienten","VBA, SQL"]},{id:7,duration:"09/2014",employer:"Universitätsklinikum Köln",activity:"BaDo Basisdokumentation",misc:["Neuentwicklung einer Datenbank zur  Erfassung und Analyse psychologischer Fragebögen","VBA, SQL"]},{id:8,duration:"06/2008",employer:"Braunschweiger Landesmuseum",activity:"Ordo Museumsdatenbank",misc:["Entwicklung einer Datenbank zum Erfassen und Katalogisieren von Kunstgegenständen","VBA, SQL"]}]},{id:4,title:"Bildungsweg",content:[{id:1,duration:"06/2016- 01/2019",employer:"TIMETOACT Software & Consulting GmbH",activity:"Ausbildung zum Fachinformatiker Anwendungsentwicklung"},{id:2,duration:"10/2008 - 09/2015",employer:"Universität zu Köln",activity:"Studium Wirtschaftsinformatik "},{id:3,duration:"06/2006 - 09/2008",employer:"Oskar-Kämmer-Schule Braunschweig",activity:"Ausbildung zum kaufmännischen Assistenten Wirtschaftsinformatik"},{id:4,duration:"06/2005",employer:"Internatsgymnasium Pädagogium Bad Sachsa",activity:"Abitur"}]}]},t.setCurrentPage=function(e){var n=t.appState;n.currentPage=e,t.setState(n)},t.setCurrentParagraph=function(e){var n=t.appState;n.currentParagraph=e,t.setState(n)},t.setCurrentPOC=function(e){var n=t.appState;n.currentPOC=e,t.setState(n)},t}return a()(t,e),t.prototype.render=function(){return o.a.createElement(s.Provider,{value:{setCurrentPage:this.setCurrentPage,setCurrentParagraph:this.setCurrentParagraph,setCurrentPOC:this.setCurrentPOC,appState:this.appState}},o.a.createElement("div",{className:"page"},o.a.createElement(c,null),o.a.createElement(m,null),o.a.createElement(V,null)))},t}(i.Component);t.default=B},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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"},148:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-224d21ef83219bf710b8.js.map