(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1030:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));t(245),t(25),t(20),t(19),t(51),t(71);var a=t(277),r=t.n(a),s=(t(272),t(278)),l=t(0),i=t.n(l),o=t(14),c=t(717),p=t(370);o.a.canUseDOM&&(t(273),t(718),t(460),t(719),t(720),t(721),t(459),t(722),t(723),t(725),t(726),t(401),t(727),t(402),t(460),t(728),t(729),t(730),t(772),t(773),t(779),t(781));var u=function(e){var n=e.value,t=e.lang,a=e.readOnly,r=e.onEdit,s={theme:Object(p.a)().isDarkTheme?"nord":"neo",lineNumbers:!0,tabSize:2,mode:t,keyMap:"sublime",matchBrackets:!0,indentWithTabs:!1,indentUnit:2,showCursorWhenSelecting:!0,readOnly:a,gutters:["CodeMirror-lint-markers"]};return i.a.createElement(c.Controlled,{value:n,onBeforeChange:function(e,n,t){return r(t)},options:s})},m=t(782),g="scalar Date\n\nschema {\n  query: Query\n}\n\ntype Query {\n  me: User!\n  user(id: ID!): User\n  allUsers: [User]\n  search(term: String!): [SearchResult!]!\n  myChats: [Chat!]!\n}\n\nenum Role {\n  USER,\n  ADMIN,\n}\n\ninterface Node {\n  id: ID!\n}\n\nunion SearchResult = User | Chat | ChatMessage\n\ntype User implements Node {\n  id: ID!\n  username: String!\n  email: String!\n  role: Role!\n}\n\ntype Chat implements Node {\n  id: ID!\n  users: [User!]!\n  messages: [ChatMessage!]!\n}\n\ntype ChatMessage implements Node {\n  id: ID!\n  content: String!\n  time: Date!\n  user: User!\n}\n",d="query findUser($userId: ID!) {\n  user(id: $userId) {\n    ...UserFields\n  }\n}\n\nfragment UserFields on User {\n  id\n  username\n  role\n}",h={TypeScript:[{name:"Schema types",config:"generates:\n  types.ts:\n    plugins:\n      - typescript",schema:g,documents:""},{name:"Operations types",config:"generates:\n  operations-types.ts:\n    plugins:\n      - typescript\n      - typescript-operations",schema:g,documents:d},{name:"Operations types (near-operation-file)",config:"generates:\n  ./types.ts:\n    plugins:\n      - typescript\n  ./:\n    preset: near-operation-file\n    presetConfig:\n      extension: .generated.tsx\n      baseTypesPath: types.ts\n    plugins:\n      - typescript-operations\n      - typescript-react-apollo",schema:g,documents:d},{name:"Operations types (without Pick)",config:"generates:\n  operations-types.ts:\n    config:\n      preResolveTypes: true\n    plugins:\n      - typescript\n      - typescript-operations",schema:g,documents:d},{name:"React-Apollo Hooks",config:"generates:\n  types-and-hooks.tsx:\n    config:\n      withHooks: true\n      withComponent: false\n      withHOC: false\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-apollo",schema:g,documents:d},{name:"Vue-Apollo composition functions",config:"generates:\n  composition-functions.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-vue-apollo",schema:g,documents:d},{name:"Apollo-Angular Components",config:"generates:\n  components.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-apollo-angular",schema:g,documents:d},{name:"Urql",config:"generates:\n  components.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-urql",schema:g,documents:d},{name:"Stencil-Apollo Components",config:"generates:\n  components.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-stencil-apollo",schema:g,documents:d},{name:"Resolvers Signature",config:"generates:\n  resolvers.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers",schema:g,documents:""},{name:"Resolvers Signature (with custom models)",config:"generates:\n  resolvers.ts:\n    config:\n      mappers:\n        User: ./models#UserDbObject\n        Chat: ./models#ChatModel\n    plugins:\n      - typescript\n      - typescript-resolvers",schema:g,documents:""},{name:"graphql-request typed SDK",config:"generates:\n  sdk.ts:\n    plugins:\n      - typescript\n      - typescript-graphql-request",schema:g,documents:d},{name:"Generic SDK",config:"generates:\n  sdk.ts:\n    plugins:\n      - typescript\n      - typescript-generic-sdk",schema:g,documents:d},{name:"type-graphql",config:"generates:\n  types.ts:\n    plugins:\n      - typescript-type-graphql",schema:g,documents:""},{name:"MongoDB Models",config:"generates:\n    models.ts:\n      plugins:\n        - typescript-mongodb",schema:'type User @entity {\n    id: ID! @id\n    username: String! @column\n    email: String! @column @map(\n      path: "login.email"\n    )\n    profile: Profile! @column\n    chats: [Chat!]! @link\n  }\n  \n  type Profile @entity(embedded: true,\n    additionalFields: [\n      { path: "dateOfBirth", type: "string" }\n    ]) {\n    name: String! @column\n    age: Int\n  }\n  \n  type Chat @entity {\n    id: ID! @id\n    users: [User!]! @link\n    messages: [ChatMessage!]!\n  }\n  \n  type ChatMessage @entity {\n    id: ID! @id\n    chat: Chat! @link\n    content: String! @column\n    author: User! @link\n  }\n  ',documents:""}],".NET":[{name:"C# Schema types",config:"generates:\n  src/main/c-sharp/my-org/my-app/Types.cs:\n    plugins:\n      - c-sharp",schema:g,documents:""},{name:"C# Operations",config:"generates:\n  src/main/c-sharp/my-org/my-app/Operations.cs:\n    plugins:\n      - c-sharp-operations",schema:g,documents:d}],Java:[{name:"Types (Enum & Input)",config:"generates:\n  src/main/java/my/app/generated/Types.java:\n    plugins:\n      - java",schema:g,documents:""},{name:"Resolvers Signature",config:"generates:\n  src/main/java/my/app/generated/Resolvers.java:\n    plugins:\n      - java-resolvers",schema:g,documents:""},{name:"Apollo Android",config:'generates:\n  ./app/src/main/java/:\n    preset: java-apollo-android\n    config:\n      package: "com.my.paackage.generated.graphql"\n      typePackage: "com.my.paackage.generated.Types"\n      fragmentPackage: "com.my.paackage.generated.Fragment"\n    plugins:\n      - java-apollo-android',schema:g,documents:d}],Flow:[{name:"Schema types",config:"generates:\n  types.flow.js:\n    plugins:\n      - flow\n    ",schema:g,documents:""},{name:"Resolvers Signature",config:"generates:\n  resolvers.flow.js:\n    plugins:\n      - flow\n      - flow-resolvers\n    ",schema:g,documents:""},{name:"Operations types",config:"generates:\n  types.flow.js:\n    plugins:\n      - flow\n      - flow-operations\n    ",schema:g,documents:d}],Other:[{name:"JSDoc",config:"generates:\n  schema.js:\n    plugins:\n      - jsdoc",schema:g,documents:""},{name:"Introspection JSON",config:"generates:\n  schema.json:\n    plugins:\n      - introspection",schema:g,documents:""},{name:"Schema AST",config:"generates:\n  schema.graphql:\n    plugins:\n      - schema-ast",schema:g,documents:""},{name:"Fragment Matcher",config:"generates:\n  fragment-matcher.json:\n    plugins:\n      - fragment-matcher",schema:g,documents:""}]},f={ts:"typescript","d.ts":"typescript",tsx:"typescript",graphql:"graphql",json:"json",java:"java",js:"javascript",jsx:"javascript"};t(246),t(478);var y=t(9);t(256),t(54),t(72);function v(e){var n;return"string"==typeof e?[(n={},n[e]={},n)]:Array.isArray(e)?e.map((function(e){var n;return"string"==typeof e?((n={})[e]={},n):e})):"object"==typeof e?Object.keys(e).reduce((function(n,t){var a;return[].concat(n,[(a={},a[t]=e[t],a)])}),[]):[]}var b={"near-operation-file":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(121)]).then(t.bind(null,1050))},"import-types":function(){return Promise.all([t.e(0),t.e(136)]).then(t.bind(null,1051))},"java-apollo-android":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6),t.e(8)]).then(t.bind(null,1052))}},E={jsdoc:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(126)]).then(t.bind(null,1053))},java:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(113)]).then(t.bind(null,1054))},"java-resolvers":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(114)]).then(t.bind(null,1055))},"fragment-matcher":function(){return Promise.all([t.e(0),t.e(138)]).then(t.bind(null,1056))},flow:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(125)]).then(t.bind(null,392))},"flow-operations":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(119)]).then(t.bind(null,1057))},"flow-resolvers":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(120)]).then(t.bind(null,1058))},typescript:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(132)]).then(t.bind(null,301))},"typescript-compatibility":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(127)]).then(t.bind(null,1059))},"typescript-operations":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(123)]).then(t.bind(null,1060))},"typescript-resolvers":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(124)]).then(t.bind(null,1061))},"typescript-apollo-angular":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(116)]).then(t.bind(null,1062))},"typescript-react-apollo":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(130)]).then(t.bind(null,1063))},"typescript-vue-apollo":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(134)]).then(t.bind(null,1064))},"typescript-stencil-apollo":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(131)]).then(t.bind(null,1065))},"typescript-graphql-files-modules":function(){return t.e(142).then(t.bind(null,1066))},"typescript-graphql-request":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(129)]).then(t.bind(null,1067))},"typescript-generic-sdk":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(128)]).then(t.bind(null,1068))},"typescript-type-graphql":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(117)]).then(t.bind(null,1069))},"typescript-mongodb":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(135),t.e(122)]).then(t.bind(null,1070))},"java-apollo-android":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(6),t.e(8)]).then(t.bind(null,1052))},"c-sharp-operations":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(118)]).then(t.bind(null,1071))},"c-sharp":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(115)]).then(t.bind(null,1072))},"typescript-urql":function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(133)]).then(t.bind(null,1073))},add:function(){return t.e(144).then(t.bind(null,384))},time:function(){return Promise.all([t.e(109),t.e(141)]).then(t.bind(null,1074))},introspection:function(){return Promise.all([t.e(0),t.e(139)]).then(t.bind(null,1075))},"schema-ast":function(){return Promise.all([t.e(0),t.e(1),t.e(140)]).then(t.bind(null,1076))}};function k(e,n,t){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(r.a.mark((function e(n,a,l){var i,o,c,p,u,m,g,d,h,f,k,x,j,N,O,w,P;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=[],e.next=4,Promise.all([Promise.resolve().then(t.t.bind(null,782,7)).then((function(e){return"default"in e?e.default:e})),Promise.all([t.e(0),t.e(1),t.e(111),t.e(137)]).then(t.bind(null,1049)).then((function(e){return"default"in e?e.default:e})),Promise.resolve().then(t.bind(null,244)).then((function(e){return"default"in e?e.default:e}))]);case 4:o=e.sent,c=o[0].safeLoad,p=o[1].codegen,u=o[2].parse,m=n.replace(/\t/g,"  "),g=c(m),d=g.generates,h=Object(y.a)(g,["generates"]),f=h.config||{},k=[],x=r.a.mark((function e(){var n,t,i,o,c,p,m,g,d,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N[j],t=n[0],i=n[1],o=!!i.preset,c=v(i.plugins||i),p=i.config,m={},e.next=7,Promise.all(c.map(function(){var e=Object(s.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.keys(n)[0],e.prev=1,e.next=4,E[t]();case 4:m[t]=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error('Unable to find codegen plugin named "'+t+'"...');case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}()));case 7:if(g=Object.assign(Object.assign({},f),p),o){e.next=12;break}k.push({filename:t,plugins:c,schema:u(a),documents:l?[{location:"operation.graphql",document:u(l)}]:[],config:g,pluginMap:m}),e.next=22;break;case 12:return e.next=14,b[i.preset]();case 14:return d=e.sent,h="function"==typeof d?d:d.preset,e.t0=k.push,e.t1=k,e.next=20,h.buildGeneratesSection({baseOutputDir:t,presetConfig:i.presetConfig||{},plugins:c,schema:u(a),documents:l?[{location:"operation.graphql",document:u(l)}]:[],config:g,pluginMap:m});case 20:e.t2=e.sent,e.t0.apply.call(e.t0,e.t1,e.t2);case 22:case"end":return e.stop()}}),e)})),j=0,N=Object.entries(d);case 14:if(!(j<N.length)){e.next=19;break}return e.delegateYield(x(),"t0",16);case 16:j++,e.next=14;break;case 19:O=0,w=k;case 20:if(!(O<w.length)){e.next=32;break}return P=w[O],e.t1=i,e.t2=P.filename,e.next=26,p(P);case 26:e.t3=e.sent,e.t4={filename:e.t2,content:e.t3},e.t1.push.call(e.t1,e.t4);case 29:O++,e.next=20;break;case 32:return e.abrupt("return",i);case 35:if(e.prev=35,e.t5=e.catch(0),console.error(e.t5),!e.t5.details){e.next=42;break}return e.abrupt("return","\n      "+e.t5.message+":\n      \n      "+e.t5.details+"\n      ");case 42:if(!e.t5.errors){e.next=46;break}return e.abrupt("return",e.t5.errors.map((function(e){return e.message+": \n"+e.details})).join("\n"));case 46:return e.abrupt("return",e.t5.message);case 47:case"end":return e.stop()}}),e,null,[[0,35]])})))).apply(this,arguments)}var j=t(130),N=t.n(j),O=t(2),w=t(290),P=t.n(w),C=t(259),S=function(e){var n=e.outputArray,t=e.editorProps,a=e.error,r=i.a.useState(0),s=r[0],l=r[1],o=a||(n&&n[s]?n[s].content:"");return i.a.useEffect((function(){l(0)}),[n]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:N.a.title},i.a.createElement("div",{className:N.a.tabs},(n||[]).map((function(e,n){var t;return i.a.createElement("div",{onClick:function(){return l(n)},key:e.filename,className:P()((t={},t[N.a.tab]=!0,t[N.a.activeTab]=s===n,t))},Object(C.basename)(e.filename))})))),i.a.createElement(u,Object(O.a)({},t,{value:o})))};function q(e,n,t,a){var l=i.a.useState(null),o=l[0],c=l[1],p=i.a.useState(null),u=p[0],m=p[1];function g(){return(g=Object(s.a)(r.a.mark((function a(){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k(e,n,t);case 2:"string"==typeof(s=a.sent)?(m(null),c(s)):(m(s),c(null));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return i.a.useEffect((function(){!function(){g.apply(this,arguments)}()}),[e,n,t,a]),{error:o,output:u}}var U="TypeScript",D=0,I=function(){var e=i.a.useState(U+"__"+D),n=e[0],t=e[1],a=i.a.useState(h[U][D].schema),r=a[0],s=a[1],l=i.a.useState(h[U][D].documents),o=l[0],c=l[1],p=i.a.useState(h[U][D].config),g=p[0],d=p[1],y=q(g,r,o,n),v=y.output,b=y.error,E=null;try{E="typescript"===(E=function(e){var n=Object.keys(e.generates)[0].split("."),t=n[n.length-1];return f[t]}(Object(m.safeLoad)(g||""))||"typescript")?"text/typescript":E}catch(k){}return i.a.createElement("div",null,i.a.createElement("div",{className:N.a.picker},"Choose Example:"," ",i.a.createElement("select",{value:n,onChange:function(e){return n=e.target.value,a=n.split("__"),r=a[0],l=a[1],s(h[r][l].schema),c(h[r][l].documents),d(h[r][l].config),void t(n);var n,a,r,l}},Object.keys(h).map((function(e){return i.a.createElement("optgroup",{label:e,key:e},h[e].map((function(n,t){return i.a.createElement("option",{key:e+"_"+t,value:e+"__"+t},n.name)})))})))),i.a.createElement("div",{className:N.a.container},i.a.createElement("div",{className:N.a.column},i.a.createElement("div",{className:N.a.title},i.a.createElement("img",{className:N.a.logo,alt:"GraphQL",src:"/img/GraphQL_Logo.svg"}),i.a.createElement("span",{className:N.a.iconText},"schema.graphql")),i.a.createElement(u,{lang:"graphql",onEdit:s,value:r})),i.a.createElement("div",{className:N.a.column},i.a.createElement("div",{className:N.a.title},i.a.createElement("img",{className:N.a.logo,alt:"GraphQL",src:"/img/GraphQL_Logo.svg"}),i.a.createElement("span",{className:N.a.iconText},"operation.graphql")),i.a.createElement(u,{lang:"graphql",onEdit:c,value:o})),i.a.createElement("div",{className:N.a.column},i.a.createElement("div",{className:N.a.title},i.a.createElement("img",{className:N.a.logo,alt:"Codegen",src:"/img/logo.svg"}),i.a.createElement("span",{className:N.a.iconText},"codegen.yml")),i.a.createElement(u,{lang:"yaml",onEdit:d,value:g})),i.a.createElement("div",{className:N.a.column,style:{minWidth:"34vw",maxWidth:"34vw"}},i.a.createElement(S,{editorProps:{lang:E,readOnly:!0},error:b,outputArray:v}))))}},211:function(e,n,t){"use strict";t.r(n),function(e){var a=t(2),r=t(14),s=t(0),l=t.n(s),i=t(290),o=t.n(i),c=t(367),p=t(314),u=t(212),m=t.n(u),g=t(308),d=t(716),h=t(1030);r.a.canUseDOM&&(e.hrtime=function(){return null});var f=[{title:l.a.createElement(l.a.Fragment,null,"Generate Code Instantly"),imageUrl:"img/gear.svg",description:l.a.createElement(l.a.Fragment,null,"Generate code from of your GraphQL schema and GraphQL operations with a single function call regardless of your environment or code format.")},{title:l.a.createElement(l.a.Fragment,null,"Watch For Changes"),imageUrl:"img/eye.svg",description:l.a.createElement(l.a.Fragment,null,"Watch for changes in your GraphQL schema and operations, and automatically generate code as you go. Codegen easily integrates into your development workflow.")},{title:l.a.createElement(l.a.Fragment,null,"Customize Easily"),imageUrl:"img/puzzle.svg",description:l.a.createElement(l.a.Fragment,null,"One of the goals of GraphQL Codegen is to allow you to easily customize the output, and add custom behaviour according to your needs.")},{title:l.a.createElement(l.a.Fragment,null,"And more!"),imageUrl:"img/more-options.svg",description:l.a.createElement(l.a.Fragment,null,"You can generate you resolvers signature, dump schemas, types models, query builders, React Hooks, Angular Services, and much more!")}];function y(e){var n=e.imageUrl,t=e.title,a=e.description,r=Object(p.a)(n);return l.a.createElement("div",{className:o()("col col--3",m.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:m.a.featureImage,src:r,alt:t})),l.a.createElement("h3",null,t),l.a.createElement("p",null,a))}function v(e){return l.a.createElement("div",{className:m.a.homeContainer},l.a.createElement("img",{className:m.a.desktopOnly,src:"/img/hexagons/blue.svg",style:{position:"absolute",left:"350px",top:"100px",height:"30px"}}),l.a.createElement("img",{className:m.a.desktopOnly,src:"/img/hexagons/pink.svg",style:{position:"absolute",left:"100px",top:"200px",height:"150px"}}),l.a.createElement("img",{className:m.a.desktopOnly,src:"/img/hexagons/blue.svg",style:{position:"absolute",left:"250px",top:"450px",height:"70px"}}),l.a.createElement("img",{className:m.a.desktopOnly,src:"/img/hexagons/pink.svg",style:{position:"absolute",right:"300px",top:"150px",height:"70px"}}),l.a.createElement("img",{className:m.a.desktopOnly,src:"/img/hexagons/blue.svg",style:{position:"absolute",right:"200px",top:"350px",height:"100px"}}),l.a.createElement("div",{className:m.a.homeSplashFade},l.a.createElement("div",{className:[m.a.wrapper,m.a.homeWrapper]},e.children)))}function b(){return l.a.createElement("div",{className:m.a.coverContainer},l.a.createElement("img",{src:"img/gql-codegen-cover.png",className:m.a.cover}),l.a.createElement("h3",{className:m.a.projectTitle},"Generate code from your GraphQL schema and operations with a simple CLI"),l.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/@graphql-codegen/cli?color=%23e15799&label=stable&style=for-the-badge"}))}n.default=function(){return l.a.createElement(c.a,{title:"GraphQL Code Generator",description:""},l.a.createElement("header",null,l.a.createElement(v,null,l.a.createElement("div",{className:m.a.inner},l.a.createElement(b,null),l.a.createElement("div",{className:m.a.buttonsWrapper},l.a.createElement(d.a,{mobileHide:!0},l.a.createElement(g.a,{to:"#live-demo"},"Try It Out Live")),l.a.createElement(d.a,null,l.a.createElement(g.a,{to:"/docs/getting-started/index"},"View Docs")))))),l.a.createElement("div",{className:o()(m.a.liveDemo,m.a.desktopOnly)},l.a.createElement("a",{id:"live-demo"}),l.a.createElement(h.a,null)),l.a.createElement("main",null,f&&f.length&&l.a.createElement("section",{className:m.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((function(e,n){return l.a.createElement(y,Object(a.a)({key:n},e))})))))))}}.call(this,t(251))},716:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(2),r=t(9),s=t(213),l=t.n(s),i=t(0),o=t.n(i),c=t(290),p=t.n(c),u=function(e){var n,t=e.mobileHide,s=Object(r.a)(e,["mobileHide"]);return o.a.createElement("button",Object(a.a)({},s,{className:p()((n={},n[l.a.buttonContained]=s.contained,n[l.a.button]=!s.contained,n[l.a.mobileHide]=!!t,n[s.className]=!0,n))}),s.children)}}}]);