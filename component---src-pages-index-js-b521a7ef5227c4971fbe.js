(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var A=a(0),r=a.n(A),n=a(203),o=a(211),i=a(207),c=a(209),l=a(201);var s=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:this.props.location,title:t},r.a.createElement(c.a,{title:"All posts"}),r.a.createElement(o.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement("article",{key:t.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},r.a.createElement(n.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),r.a.createElement("small",null,t.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}))},A}(r.a.Component);t.default=s;var p="2785444898"},201:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var A=a(213),r=a.n(A),n=a(214),o=a.n(n),i=new r.a(o.a);var c=i.rhythm,l=i.scale},202:function(e,t,a){var A;e.exports=(A=a(205))&&A.default||A},203:function(e,t,a){"use strict";var A=a(0),r=a.n(A),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(202),a(9).default.enqueue,r.a.createContext({})},205:function(e,t,a){"use strict";a.r(t);a(18);var A=a(0),r=a.n(A),n=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";a(204);var A=a(208),r=a(0),n=a.n(r),o=a(203),i=a(206),c=a.n(i),l=a(201);var s=function(){var e=A.data;return n.a.createElement(c.a,{fixed:e.blogIcon.childImageSharp.fixed})},p=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){var e=this.props.children;return n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},n.a.createElement("header",null,n.a.createElement(o.a,{to:"/"},n.a.createElement(s,null))),n.a.createElement("main",null,e))},A}(n.a.Component);t.a=p},208:function(e){e.exports={data:{blogIcon:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVQY02NgQAWMONjoYoxIGEOeiYEwYMEjxwbEYkDMBRMwAWIDIJYHYjUgVgRiZSDWhtJOQKwPxEpQPkidKhRrArEKEEcBcTlUDGyAKtSAIKgFIGwENcAeaoguEOsAsRYQWwGxDZQPckQ4EJfCDEQG3EDMzEAaYAdiSaheqgNGAHkyCCUObSU8AAAAAElFTkSuQmCC",width:512,height:128,src:"/programitforward/static/ae8b144e0713031553fd7d9bf32b7466/55013/blogIcon.png",srcSet:"/programitforward/static/ae8b144e0713031553fd7d9bf32b7466/55013/blogIcon.png 1x"}}}}}},209:function(e,t,a){"use strict";var A=a(210),r=a(0),n=a.n(r),o=a(215),i=a.n(o);function c(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=A.data.site,l=t||c.siteMetadata.description;return n.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Program It Forward",description:"A personal tech blog to cover ideas, libraries, and/or techniques not being used or implemented.",author:"joselevelsup"}}}}},211:function(e,t,a){"use strict";a(204);var A=a(212),r=a(0),n=a.n(r),o=a(206),i=a.n(o),c=a(216),l=a(219),s=a(201);t.a=function(){var e=A.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},n.a.createElement(i.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a),". I'm a Self taught Developer who has done Game Programming then pivoted to Web Development using powerful frameworks/libraries such as Angular and React. I approach everyday as a chance to improve my programming skills, to learn new frameworks, and to challenge myself.",n.a.createElement("br",null),n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},n.a.createElement(c.b.Provider,{value:{color:"black",size:"2em"}},n.a.createElement(l.c,null)))," ",n.a.createElement("a",{href:"https://instagram.com/"+r.instagram},n.a.createElement(c.b.Provider,{value:{color:"black",size:"2em"}},n.a.createElement(l.b,null)))," ",n.a.createElement("a",{href:"https://github.com/"+r.github},n.a.createElement(c.b.Provider,{value:{color:"black",size:"2em"}},n.a.createElement(l.a,null)))))}},212:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQMABP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABTiCjhTx2Yi/LVq6+b//EAB0QAQACAgIDAAAAAAAAAAAAAAECAxMhEBESIjL/2gAIAQEAAQUCi6vsYFUmVZJyX2Egs6B3lPAnwfMD1//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQMBAT8BuIp//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/AYjUf//EAB4QAAICAQUBAAAAAAAAAAAAAAABERIxAiAiMlFh/9oACAEBAAY/AhRlierJZL6R4RY5TBWsnXZ//8QAHhABAAICAQUAAAAAAAAAAAAAAQARITEQQVFxkeH/2gAIAQEAAT8hwcywqJsJVffdQAdQ/UXiqRmOVmIKBeCAkFd2YNPfAgOif//aAAwDAQACAAMAAAAQL9aw/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQMBAT8QQsxH/8QAFhEBAQEAAAAAAAAAAAAAAAAAECEB/9oACAECAQE/ENsUf//EABwQAQADAQADAQAAAAAAAAAAAAEAESExQWHhgf/aAAgBAQABPxAgUC3QuusxcQBaP3IGgBwodxlD2zbaA+UZtMC7b8YNABQXwhWd27cvrCYcQL31+yg2T6QShdgAoN7GhQz/2Q==",width:50,height:50,src:"/programitforward/static/7f6f1a8c3fa30ba36657ba4a156c7d00/9b664/profile-pic.jpg",srcSet:"/programitforward/static/7f6f1a8c3fa30ba36657ba4a156c7d00/9b664/profile-pic.jpg 1x,\n/programitforward/static/7f6f1a8c3fa30ba36657ba4a156c7d00/06a10/profile-pic.jpg 1.5x,\n/programitforward/static/7f6f1a8c3fa30ba36657ba4a156c7d00/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"joselevelsup",social:{twitter:"joselevelsup",instagram:"joselevelsup",github:"joselevelsup"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-b521a7ef5227c4971fbe.js.map