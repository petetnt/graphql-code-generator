(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(9),r=(n(0),n(242)),c={},p={id:"generated-config/typescript-compatibility",title:"typescript-compatibility",description:"If you are migrating from <1.0, we created a new plugin called typescript-compatibility that generates backward compatibility for the typescript-operations and typescript-react-apollo plugins.",source:"@site/docs/generated-config/typescript-compatibility.md",permalink:"/docs/generated-config/typescript-compatibility",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-compatibility.md"},o=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>noNamespaces</code>",id:"nonamespaces",children:[]},{value:"<code>strict</code>",id:"strict",children:[]},{value:"<code>preResolveTypes</code>",id:"preresolvetypes",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],l={rightToc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you are migrating from <1.0, we created a new plugin called ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-compatibility")," that generates backward compatibility for the ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-operations")," and ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-react-apollo")," plugins."),Object(r.b)("p",null,"It generates types that are pointing to the new form of types. It supports ",Object(r.b)("em",{parentName:"p"},"most")," of the use-cases."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("div",{className:"admonition admonition-shell"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-compatibility\n")))),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)("h3",{id:"nonamespaces"},Object(r.b)("inlineCode",{parentName:"h3"},"noNamespaces")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Does not generate TypeScript ",Object(r.b)("inlineCode",{parentName:"p"},"namespace"),"s and uses the operation name as prefix."),Object(r.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-compatibility\n config:\n   noNamespaces: true\n")),Object(r.b)("h3",{id:"strict"},Object(r.b)("inlineCode",{parentName:"h3"},"strict")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Make sure to generate code that compatible with TypeScript strict mode."),Object(r.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-compatibility\n config:\n   strict: true\n")),Object(r.b)("h3",{id:"preresolvetypes"},Object(r.b)("inlineCode",{parentName:"h3"},"preResolveTypes")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Avoid using ",Object(r.b)("inlineCode",{parentName:"p"},"Pick")," in ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-operations")," and make sure to optimize this package as well."),Object(r.b)("h3",{id:"scalars"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{id:"namingconvention"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(r.b)("h5",{id:"override-all-names"},"Override All Names"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{id:"typesprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",null,"Prefixes all the generated types."),Object(r.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{id:"skiptypename"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{id:"nonoptionaltypename"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",null,"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}s.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(c,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,p(p({ref:t},l),{},{components:n})):i.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);