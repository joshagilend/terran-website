(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+EA7":function(e,t,n){"use strict";n("Vd3H"),n("Tze0"),n("a1Th"),n("h7Nl"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),n("pIFo");var a={},r="x",i=[],o=function(e){return i.push(e)},l=function(e,t){return t?t+"{"+e+"}":e},s=function(e,t,n){return"."+e+"{"+t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+n+"}"},u=function(e){return e.replace(/&/g,"")},c=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments[2];return Object.keys(t).map((function(f){var m=t[f];if(null===m)return"";if("object"==typeof m){var d=/^@/.test(f)?f:null;return e(m,d?n:n+f,d||c)}var p=f+m+n+c;if(a[p])return a[p];var h=r+i.length.toString(36);return o(l(s(h+u(n),f,m),c)),a[p]=h,h})).join(" ")};if(e.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return c(e)})).join(" ").trim()},e.exports.css=function(){return i.sort().join("")},e.exports.reset=function(){for(a={};i.length;)i.pop()},e.exports.prefix=function(e){return r=e},"undefined"!=typeof document){var f=document.head.appendChild(document.createElement("style")).sheet;o=function(e){i.push(e),f.insertRule(e,f.cssRules.length)}}},"0wEy":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var r=n("xCC/");t.Motion=a(r);var i=n("unm8");t.StaggeredMotion=a(i);var o=n("p9CH");t.TransitionMotion=a(o);var l=n("tYRH");t.spring=a(l);var s=n("LQNH");t.presets=a(s);var u=n("u461");t.stripStyle=a(u);var c=n("MEvW");t.reorderKeys=a(c)},"8oxB":function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var s,u=[],c=!1,f=-1;function m(){c&&s&&(c=!1,s.length?u=s.concat(u):f=-1,u.length&&d())}function d(){if(!c){var e=l(m);c=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,c=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},A552:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("3/jj"),o=n("ZXdF"),l=n("tBDR"),s=n("NGwb"),u=n.n(s),c=(n("TSYQ"),function(e){e.children,e.justification,e.bleed;return r.a.createElement(u.a,{animateIn:"fadeIn"},r.a.createElement("div",{className:"flexPanel centerJustify"},r.a.createElement("div",{className:"twoColumnsLeftText watershed"},r.a.createElement(i.a,{title:"",subtitle:"How are we resourced?",justification:"center"}),r.a.createElement("div",{style:{width:"200px",margin:"40px auto"}},r.a.createElement(l.a,{filename:"logos/terran_watershed_logo.png",alt:"Terran Watershed"})),r.a.createElement("p",{style:{lineHeight:"40px"}},"The Watershed is our commons, channeling the flow of resources throughout our ecosystem, and supporting Terran’s nonprofit activities such as community building and providing free coordination tools."),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(o.a,{label:"Contribute",link:"/watershed/"}))),r.a.createElement("div",{className:"twoColumnsRightImage watershed"},r.a.createElement(l.a,{filename:"home/home_zalophus_californianus.jpg",alt:"Zalophus californianus",showCaption:"true"}))))});c.defaultProps={justification:"",bleed:""},t.a=c},FdFN:function(e,t,n){e.exports=n.p+"static/home_collinsia_heterophylla-7cb2b2e66b0c8c584eb9c2508d719e53.jpg"},LQNH:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},MEvW:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),o=n("kC7N"),l=n("A552"),s=n("3/jj"),u=n("ZXdF"),c=n("tBDR"),f=n("vrFN"),m=n("FdFN"),d=n.n(m),p=n("NGwb"),h=n.n(p),y=(n("bWfx"),n("LK8F"),n("HAE/"),n("hHhE"),n("91GP"),n("0wEy")),v=n("+EA7"),g=n.n(v),w=n("bmMU"),b=n.n(w),E="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}:function(){},T=function(e,t){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,t);var n=(new Date).getTime(),a={value:0};return a.value=E((function r(){(new Date).getTime()-n>=t?e.call(null):a.value=E(r)})),a},k=function(e){return window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){var t,n;function a(t){var n;x(I(n=e.call(this,t)||this),"isUnMounting",!1),x(I(n),"tickDelay",0),x(I(n),"tickLoop",0),x(I(n),"wordBox",null),x(I(n),"willLeave",(function(){var e=n.getDimensions().height;return{opacity:Object(y.spring)(n.getOpacity(),n.props.springConfig),translate:Object(y.spring)(-e,n.props.springConfig)}})),x(I(n),"willEnter",(function(){var e=n.getDimensions().height;return{opacity:n.getOpacity(),translate:e}})),x(I(n),"tick",(function(){n.isUnMounting||n.setState((function(e,t){var n=(e.currentWordIndex+1)%e.elements.length,a={currentWordIndex:n,currentEl:e.elements[n],wordCount:(e.wordCount+1)%1e3,currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval};return t.onChange&&t.onChange(a),a}),(function(){n.state.currentInterval>0&&(n.clearTimeouts(),n.tickLoop=T(n.tick,n.state.currentInterval))}))})),x(I(n),"wrapperStyles",g()(S({},n.props.mask&&{overflow:"hidden"},{},{display:"inline-block",position:"relative",verticalAlign:"top"}))),x(I(n),"elementStyles",g()({display:"inline-block",left:0,top:0,whiteSpace:n.props.noWrap?"nowrap":"normal"}));var a=r.a.Children.toArray(t.children);return n.state={elements:a,currentEl:a[0],currentWordIndex:0,wordCount:0,currentInterval:Array.isArray(t.interval)?t.interval[0]:t.interval},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){var e=this,t=this.props.delay,n=this.state,a=n.currentInterval,r=n.elements;a>0&&r.length>1&&(this.tickDelay=T((function(){e.tickLoop=T(e.tick,a)}),t))},i.componentDidUpdate=function(e,t){var n=this,a=this.props,i=a.interval,o=a.children,l=a.delay,s=this.state.currentWordIndex,u=Array.isArray(i)?i[s%i.length]:i;t.currentInterval!==u&&(this.clearTimeouts(),u>0&&r.a.Children.count(o)>1?this.tickDelay=T((function(){n.tickLoop=T(n.tick,u)}),l):this.setState((function(e,t){var n=e.currentWordIndex;return{currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval}}))),b()(e.children,o)||this.setState({elements:r.a.Children.toArray(o)})},i.componentWillUnmount=function(){this.isUnMounting=!0,this.clearTimeouts()},i.clearTimeouts=function(){null!=this.tickLoop&&k(this.tickLoop),null!=this.tickDelay&&k(this.tickDelay)},i.getOpacity=function(){return this.props.fade?0:1},i.getDimensions=function(){return null==this.wordBox?{width:0,height:0}:this.wordBox.getBoundingClientRect()},i.getTransitionMotionStyles=function(){var e=this.props.springConfig,t=this.state;return[{key:"step-"+t.wordCount,data:{currentEl:t.currentEl},style:{opacity:Object(y.spring)(1,e),translate:Object(y.spring)(0,e)}}]},i.render=function(){var e=this,t=this.props.className,n=void 0===t?"":t;return r.a.createElement("div",{className:this.wrapperStyles+" "+n},r.a.createElement(y.TransitionMotion,{willLeave:this.willLeave,willEnter:this.willEnter,styles:this.getTransitionMotionStyles()},(function(t){var n=e.getDimensions(),a=n.height,i=n.width,o=null==e.wordBox?"auto":i,l=null==e.wordBox?"auto":a;return r.a.createElement("div",{style:{transition:"width "+e.props.adjustingSpeed+"ms linear",height:l,width:o}},t.map((function(t){return r.a.createElement("div",{className:e.elementStyles,ref:function(t){e.wordBox=t},key:t.key,style:{opacity:t.style.opacity,transform:"translateY("+t.style.translate+"px)",position:null==e.wordBox?"relative":"absolute"}},t.data.currentEl)})))})))},a}(r.a.PureComponent);x(O,"defaultProps",{interval:3e3,delay:0,adjustingSpeed:150,springConfig:{stiffness:340,damping:30},fade:!0,mask:!1,noWrap:!0});var A=O;r.a.createRef(),t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(f.a,{title:"Home"}),r.a.createElement("div",{className:"homeHeroPanel"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"homeHero"},r.a.createElement(s.a,{title:"A community of care and practice",titleAccent:"building systems and tools for a regenerative future",titleAccentColor:"#2b80f0"}),r.a.createElement("p",{style:{fontFamily:"DINPro-Light",lineHeight:"40px",margin:"30px 0 50px",width:"100%"}},"We are technologists,  community organizers, entrepreneurs, activists, and artists working for the greatest good of all beings. We amplify cooperation among people working to regenerate our communities and our planet. We do this by building systems and tools that foster trust and collaboration, starting in the Bay Area bioregion."))),r.a.createElement("div",{className:"heroPanelBg"})),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{animateIn:"fadeOut",initiallyVisible:!0},r.a.createElement("button",{className:"scrollDown",onClick:function(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})}}))),r.a.createElement(o.a,{justification:"center"},r.a.createElement("div",{className:"twoColumnsLeftImage"},r.a.createElement(c.a,{filename:"home/home_erysimum_franciscanum2x.jpg",alt:"Erysimum franciscanum",showCaption:"true"})),r.a.createElement("div",{className:"twoColumnsRightText"},r.a.createElement("h3",{className:"superHeadline"},"What is Terran?"),r.a.createElement("h1",{className:"headline whatIsTerran"},"Terran Collective is",r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement("span",null,"a living system"),r.a.createElement("span",null,"an experiment"),r.a.createElement("span",null,"a community of care"),r.a.createElement("span",null,"a community of practice"),r.a.createElement("span",null,"a commons engine")))),r.a.createElement("p",null,"Terran Collective is a community of people who are committed to the work of healing and transformation necessary for all beings in our bioregion to have what they need to thrive."),r.a.createElement("p",null,"As a ",r.a.createElement("strong",null,"community of care"),", we support each other on our paths of personal healing and growth. As a ",r.a.createElement("strong",null,"community of practice"),", we help each other find our purpose and share our gifts with the world, while collaborating on projects aligned with our mission. As ",r.a.createElement("strong",null,"a commons"),", we collectively govern and share resources."),r.a.createElement("p",null,"Terran is ",r.a.createElement("strong",null,"a living system"),". We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet.  To get there, we must re-design how humans relate to each other and the planet, learning from nature and applying the lessons of ",r.a.createElement("a",{href:"https://www.akpress.org/emergentstrategy.html",target:"_blank",rel:"noopener noreferrer"},"emergent strategy")," - adaptation, decentralization, fractal awareness, resilience, and iterative change - to our work."),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(u.a,{label:"About Terran",link:"/what-is-terran/"})))),r.a.createElement("div",{className:"threeColumns whatWereDoing"},r.a.createElement(o.a,{justification:"space-between",bleed:"true"},r.a.createElement("img",{className:"collinsiaHeterophylla leftImage",src:d.a,alt:"Collinsia heterophylla"}),r.a.createElement("div",{className:"threeColumnsCenterText"},r.a.createElement(s.a,{title:"Building systems and tools that foster trust and collaboration",subtitle:"What are we doing?",justification:"center"}),r.a.createElement("ul",{className:"cardList"},r.a.createElement("li",null,r.a.createElement("strong",null,"Storytelling for cultural evolution"),"How do we shift cultural narratives and share a new story in a way that resonates with different communities? Terran creates hopeful and inspiring content, memes, media, and events, in order to build a movement which aligns us around a new shared purpose for human civilization -- creating a world that works for all.",r.a.createElement("div",{className:"centerText"},r.a.createElement(u.a,{link:"/what-are-we-doing/#storytelling",label:"How we build movements"}))),r.a.createElement("li",null,r.a.createElement("strong",null,"Community weaving"),"Strong communities can develop resilience amidst rapid change, heal and regenerate the land we live on, and step into solidarity, equity and abundance together. Terran builds community by hosting regular gatherings both small and large throughout the year, as well as weaving connections between aligned people and organizations. All to create deeper, stronger, relationships based on trust.",r.a.createElement("div",{className:"centerText"},r.a.createElement(u.a,{link:"/what-are-we-doing/#community-weaving",label:"How we weave community"}))),r.a.createElement("li",null,r.a.createElement("strong",null,"Technology for thriving"),"The tools to coordinate at scale, without coercion or rent-seeking, do not yet exist. We design software that serves human thriving by supporting community building, collaborative sensemaking, cooperative decision making, and group coordination.",r.a.createElement("div",{className:"centerText"},r.a.createElement(u.a,{link:"/what-are-we-doing/#technology-for-thriving",label:"Technology in service to life"}))),r.a.createElement("li",null,r.a.createElement("strong",null,"Collaborative ecosystem mapping"),"We believe that mapping resource flows will allow our communities to deepen relationships and make more informed and equitable collective decisions. These maps will be collaboratively developed and shared publicly so that we can experiment with more transparent ways of coordination.",r.a.createElement("div",{className:"centerText"},r.a.createElement(u.a,{link:"/what-are-we-doing/#collaborative-ecosystem-mapping",label:"What we're mapping"}))),r.a.createElement("li",null,r.a.createElement("strong",null,"Regenerating the commons"),"Our land, our resources, and our communities are a commons. Rebuilding this worldview and our ability to collectively govern the commons is the core of our theory of change. To move us in this direction we are designing and experimenting with decentralized governance structures, ",r.a.createElement("a",{href:"https://sacred-economics.com/",target:"_blank",rel:"noopener noreferrer"},"gift economics")," , and the creation of modern guilds to steward shared areas of collective responsibility.",r.a.createElement("div",{className:"centerText"},r.a.createElement(u.a,{link:"/what-are-we-doing/#regenerating-the-commons",label:"Our approach to coordination"}))))),r.a.createElement("img",{className:"collinsiaHeterophylla rightImage",src:d.a,alt:"Collinsia heterophylla"}))),r.a.createElement(o.a,{justification:"center"},r.a.createElement("div",{className:"twoColumnsLeftText"},r.a.createElement(s.a,{title:"Our bioregion is where we practice and experiment",subtitle:"Where do we practice?",justification:"left"}),r.a.createElement("p",null,"A bioregion is a geographical and cultural area defined by the emergent boundaries expressed by nature. This is the scale at which we work; building systems and tools that are grounded in place. The economic, ecological and social landscapes that we seek to improve are those of the land we inhabit, the San Francisco Bay Area bioregion."),r.a.createElement("p",null,"In the initial phase of our work, we are identifying the variables and components of a thriving bioregion. We are using what we learn to build tools that enable collective intelligence for bioregions everywhere. By sharing our findings, we hope to activate bioregions around the globe, create a coherent network of place-based collaborators, and actualize a thriving biosphere."),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(u.a,{label:"Why the bioregion?",link:"/bioregion/"}))),r.a.createElement("div",{className:"twoColumnsRightImage"},r.a.createElement(c.a,{filename:"home/home_sylvagus_bachmani2x.jpg",alt:"Sylvagus bachmani",showCaption:"true"}))),r.a.createElement(o.a,{justification:"center"},r.a.createElement("div",{className:"twoColumnsLeftImage"},r.a.createElement(c.a,{filename:"home/community_and_resources.png",alt:"Photos from Cospiracy",showCaption:"true"})),r.a.createElement("div",{className:"twoColumnsRightText"},r.a.createElement(s.a,{title:"Our Community",subtitle:"What inspires us?",justification:"left"}),r.a.createElement("p",null,"Core to everything we believe and do is the importance of rebuilding community. In community we truly experience our interdependence, abundance and the agency to choose the world we want to live in. We are committed to the work of weaving together our Bay Area regenerative communities, deepening trust, building bridges, healing relationships and creating a strong, resilient network of interconnection."),r.a.createElement("p",null,"Our Terran community here in the Bay Area is incredible, and growing every day. We are always looking for more allies! Please join the conversation and subscribe to our calendar of events. While we are currently focused on building community locally in the Bay Area, we want to connect with and learn from allies across the globe, and as we discover new systems, tools, and practices, we will share them with the world."),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(u.a,{label:"Our Community",link:"/community/"}),r.a.createElement(u.a,{label:"Library of Resources",link:"/resources/"})))),r.a.createElement(l.a,null)))}},VciW:function(e,t,n){(function(t){n("eM6i"),function(){var n,a,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},a=t.hrtime,r=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}.call(this)}).call(this,n("8oxB"))},Z6NN:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},bQgK:function(e,t,n){(function(t){n("eM6i"),function(){var n,a,r,i,o,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},a=t.hrtime,i=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})(),l=1e9*t.uptime(),o=i-l):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}.call(this)}).call(this,n("8oxB"))},fXKH:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,r,i,o,l){var s=n+(-i*(t-r)+-o*n)*e,u=t+s*e;if(Math.abs(s)<l&&Math.abs(u-r)<l)return a[0]=r,a[1]=0,a;return a[0]=u,a[1]=s,a};var a=[0,0];e.exports=t.default},kXpG:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(0!==n[a])return!1;var r="number"==typeof t[a]?t[a]:t[a].val;if(e[a]!==r)return!1}return!0},e.exports=t.default},p9CH:function(e,t,n){"use strict";n("bWfx"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n("Z6NN")),l=i(n("u461")),s=i(n("fXKH")),u=i(n("pwmp")),c=i(n("VciW")),f=i(n("xEkU")),m=i(n("kXpG")),d=i(n("q1tI")),p=i(n("17x9"));function h(e,t,n){var a=t;return null==a?e.map((function(e,t){return{key:e.key,data:e.data,style:n[t]}})):e.map((function(e,t){for(var r=0;r<a.length;r++)if(a[r].key===e.key)return{key:a[r].key,data:a[r].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}}))}function y(e,t,n,a,r,i,l,s,c){for(var f=u.default(a,r,(function(e,a){var r=t(a);return null==r?(n({key:a.key,data:a.data}),null):m.default(i[e],r,l[e])?(n({key:a.key,data:a.data}),null):{key:a.key,data:a.data,style:r}})),d=[],p=[],h=[],y=[],v=0;v<f.length;v++){for(var g=f[v],w=null,b=0;b<a.length;b++)if(a[b].key===g.key){w=b;break}if(null==w){var E=e(g);d[v]=E,h[v]=E;var T=o.default(g.style);p[v]=T,y[v]=T}else d[v]=i[w],h[v]=s[w],p[v]=l[w],y[v]=c[w]}return[f,d,p,h,y]}var v=function(e){function t(n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=y(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,e,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),n=t[0],i=t[1],o=t[2],l=t[3],s=t[4],u=0;u<e.length;u++){var c=e[u].style,f=!1;for(var m in c)if(Object.prototype.hasOwnProperty.call(c,m)){var d=c[m];"number"==typeof d&&(f||(f=!0,i[u]=a({},i[u]),o[u]=a({},o[u]),l[u]=a({},l[u]),s[u]=a({},s[u]),n[u]={key:n[u].key,data:n[u].data,style:a({},n[u].style)}),i[u][m]=d,o[u][m]=0,l[u][m]=d,s[u][m]=0,n[u].style[m]=d)}}r.setState({currentStyles:i,currentVelocities:o,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:s})},this.startAnimationIfNecessary=function(){r.unmounting||(r.animationID=f.default((function(e){if(!r.unmounting){var t=r.props.styles,n="function"==typeof t?t(h(r.state.mergedPropsStyles,r.unreadPropStyles,r.state.lastIdealStyles)):t;if(function(e,t,n,a){if(a.length!==t.length)return!1;for(var r=0;r<a.length;r++)if(a[r].key!==t[r].key)return!1;for(r=0;r<a.length;r++)if(!m.default(e[r],t[r].style,n[r]))return!1;return!0}(r.state.currentStyles,n,r.state.currentVelocities,r.state.mergedPropsStyles))return r.animationID=null,void(r.accumulatedTime=0);var a=e||c.default(),i=a-r.prevTime;if(r.prevTime=a,r.accumulatedTime=r.accumulatedTime+i,r.accumulatedTime>1e3/60*10&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var o=(r.accumulatedTime-Math.floor(r.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),l=Math.floor(r.accumulatedTime/(1e3/60)),u=y(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,n,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),f=u[0],d=u[1],p=u[2],v=u[3],g=u[4],w=0;w<f.length;w++){var b=f[w].style,E={},T={},k={},S={};for(var I in b)if(Object.prototype.hasOwnProperty.call(b,I)){var x=b[I];if("number"==typeof x)E[I]=x,T[I]=0,k[I]=x,S[I]=0;else{for(var O=v[w][I],A=g[w][I],P=0;P<l;P++){var j=s.default(1e3/60/1e3,O,A,x.val,x.stiffness,x.damping,x.precision);O=j[0],A=j[1]}var C=s.default(1e3/60/1e3,O,A,x.val,x.stiffness,x.damping,x.precision),_=C[0],N=C[1];E[I]=O+(_-O)*o,T[I]=A+(N-A)*o,k[I]=O,S[I]=A}}v[w]=k,g[w]=S,d[w]=E,p[w]=T}r.animationID=null,r.accumulatedTime-=l*(1e3/60),r.setState({currentStyles:d,currentVelocities:p,lastIdealStyles:v,lastIdealVelocities:g,mergedPropsStyles:f}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}})))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"propTypes",value:{defaultStyles:p.default.arrayOf(p.default.shape({key:p.default.string.isRequired,data:p.default.any,style:p.default.objectOf(p.default.number).isRequired})),styles:p.default.oneOfType([p.default.func,p.default.arrayOf(p.default.shape({key:p.default.string.isRequired,data:p.default.any,style:p.default.objectOf(p.default.oneOfType([p.default.number,p.default.object])).isRequired}))]).isRequired,children:p.default.func.isRequired,willEnter:p.default.func,willLeave:p.default.func,didLeave:p.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return l.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,a=e.willEnter,r=e.willLeave,i=e.didLeave,s="function"==typeof n?n(t):n,u=void 0;u=null==t?s:t.map((function(e){for(var t=0;t<s.length;t++)if(s[t].key===e.key)return s[t];return e}));var c=null==t?s.map((function(e){return l.default(e.style)})):t.map((function(e){return l.default(e.style)})),f=null==t?s.map((function(e){return o.default(e.style)})):t.map((function(e){return o.default(e.style)})),m=y(a,r,i,u,s,c,f,c,f),d=m[0];return{currentStyles:m[1],currentVelocities:m[2],lastIdealStyles:m[3],lastIdealVelocities:m[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=v,e.exports=t.default},pwmp:function(e,t,n){"use strict";n("Vd3H"),t.__esModule=!0,t.default=function(e,t,n){for(var a={},r=0;r<e.length;r++)a[e[r].key]=r;var i={};for(r=0;r<t.length;r++)i[t[r].key]=r;var o=[];for(r=0;r<t.length;r++)o[r]=t[r];for(r=0;r<e.length;r++)if(!Object.prototype.hasOwnProperty.call(i,e[r].key)){var l=n(r,e[r]);null!=l&&o.push(l)}return o.sort((function(e,n){var r=i[e.key],o=i[n.key],l=a[e.key],s=a[n.key];if(null!=r&&null!=o)return i[e.key]-i[n.key];if(null!=l&&null!=s)return a[e.key]-a[n.key];if(null!=r){for(var u=0;u<t.length;u++){var c=t[u].key;if(Object.prototype.hasOwnProperty.call(a,c)){if(r<i[c]&&s>a[c])return-1;if(r>i[c]&&s<a[c])return 1}}return 1}for(u=0;u<t.length;u++){c=t[u].key;if(Object.prototype.hasOwnProperty.call(a,c)){if(o<i[c]&&l>a[c])return 1;if(o>i[c]&&l<a[c])return-1}}return-1}))},e.exports=t.default},tYRH:function(e,t,n){"use strict";n("91GP"),t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e,t){return a({},l,t,{val:e})};var r,i=n("LQNH"),o=(r=i)&&r.__esModule?r:{default:r},l=a({},o.default.noWobble,{precision:.01});e.exports=t.default},u461:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},unm8:function(e,t,n){"use strict";n("bWfx"),n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n("Z6NN")),l=i(n("u461")),s=i(n("fXKH")),u=i(n("VciW")),c=i(n("xEkU")),f=i(n("kXpG")),m=i(n("q1tI")),d=i(n("17x9"));var p=function(e){function t(n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=r.state,n=t.currentStyles,i=t.currentVelocities,o=t.lastIdealStyles,l=t.lastIdealVelocities,s=!1,u=0;u<e.length;u++){var c=e[u],f=!1;for(var m in c)if(Object.prototype.hasOwnProperty.call(c,m)){var d=c[m];"number"==typeof d&&(f||(f=!0,s=!0,n[u]=a({},n[u]),i[u]=a({},i[u]),o[u]=a({},o[u]),l[u]=a({},l[u])),n[u][m]=d,i[u][m]=0,o[u][m]=d,l[u][m]=0)}}s&&r.setState({currentStyles:n,currentVelocities:i,lastIdealStyles:o,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){r.animationID=c.default((function(e){var t=r.props.styles(r.state.lastIdealStyles);if(function(e,t,n){for(var a=0;a<e.length;a++)if(!f.default(e[a],t[a],n[a]))return!1;return!0}(r.state.currentStyles,t,r.state.currentVelocities))return r.animationID=null,void(r.accumulatedTime=0);var n=e||u.default(),a=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>1e3/60*10&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var i=(r.accumulatedTime-Math.floor(r.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),o=Math.floor(r.accumulatedTime/(1e3/60)),l=[],c=[],m=[],d=[],p=0;p<t.length;p++){var h=t[p],y={},v={},g={},w={};for(var b in h)if(Object.prototype.hasOwnProperty.call(h,b)){var E=h[b];if("number"==typeof E)y[b]=E,v[b]=0,g[b]=E,w[b]=0;else{for(var T=r.state.lastIdealStyles[p][b],k=r.state.lastIdealVelocities[p][b],S=0;S<o;S++){var I=s.default(1e3/60/1e3,T,k,E.val,E.stiffness,E.damping,E.precision);T=I[0],k=I[1]}var x=s.default(1e3/60/1e3,T,k,E.val,E.stiffness,E.damping,E.precision),O=x[0],A=x[1];y[b]=T+(O-T)*i,v[b]=k+(A-k)*i,g[b]=T,w[b]=k}}m[p]=y,d[p]=v,l[p]=g,c[p]=w}r.animationID=null,r.accumulatedTime-=o*(1e3/60),r.setState({currentStyles:m,currentVelocities:d,lastIdealStyles:l,lastIdealVelocities:c}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,a=t||n().map(l.default),r=a.map((function(e){return o.default(e)}));return{currentStyles:a,currentVelocities:r,lastIdealStyles:a,lastIdealVelocities:r}},t.prototype.componentDidMount=function(){this.prevTime=u.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=u.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&m.default.Children.only(e)},t}(m.default.Component);t.default=p,e.exports=t.default},"xCC/":function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),n("91GP"),t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n("Z6NN")),l=i(n("u461")),s=i(n("fXKH")),u=i(n("VciW")),c=i(n("xEkU")),f=i(n("kXpG")),m=i(n("q1tI")),d=i(n("17x9")),p=function(e){function t(n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=r.state,i=n.currentStyle,o=n.currentVelocity,l=n.lastIdealStyle,s=n.lastIdealVelocity;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=e[u];"number"==typeof c&&(t||(t=!0,i=a({},i),o=a({},o),l=a({},l),s=a({},s)),i[u]=c,o[u]=0,l[u]=c,s[u]=0)}t&&r.setState({currentStyle:i,currentVelocity:o,lastIdealStyle:l,lastIdealVelocity:s})},this.startAnimationIfNecessary=function(){r.animationID=c.default((function(e){var t=r.props.style;if(f.default(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||u.default(),a=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>1e3/60*10&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var i=(r.accumulatedTime-Math.floor(r.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),o=Math.floor(r.accumulatedTime/(1e3/60)),l={},c={},m={},d={};for(var p in t)if(Object.prototype.hasOwnProperty.call(t,p)){var h=t[p];if("number"==typeof h)m[p]=h,d[p]=0,l[p]=h,c[p]=0;else{for(var y=r.state.lastIdealStyle[p],v=r.state.lastIdealVelocity[p],g=0;g<o;g++){var w=s.default(1e3/60/1e3,y,v,h.val,h.stiffness,h.damping,h.precision);y=w[0],v=w[1]}var b=s.default(1e3/60/1e3,y,v,h.val,h.stiffness,h.damping,h.precision),E=b[0],T=b[1];m[p]=y+(E-y)*i,d[p]=v+(T-v)*i,l[p]=y,c[p]=v}}r.animationID=null,r.accumulatedTime-=o*(1e3/60),r.setState({currentStyle:m,currentVelocity:d,lastIdealStyle:l,lastIdealVelocity:c}),r.unreadPropStyle=null,r.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,a=t||l.default(n),r=o.default(a);return{currentStyle:a,currentVelocity:r,lastIdealStyle:a,lastIdealVelocity:r}},t.prototype.componentDidMount=function(){this.prevTime=u.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=u.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&m.default.Children.only(e)},t}(m.default.Component);t.default=p,e.exports=t.default},xEkU:function(e,t,n){(function(t){for(var a=n("bQgK"),r="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",l=r["request"+o],s=r["cancel"+o]||r["cancelRequest"+o],u=0;!l&&u<i.length;u++)l=r[i[u]+"Request"+o],s=r[i[u]+"Cancel"+o]||r[i[u]+"CancelRequest"+o];if(!l||!s){var c=0,f=0,m=[];l=function(e){if(0===m.length){var t=a(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout((function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return m.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-f8077f66e3a8d178e9d3.js.map