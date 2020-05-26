(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{232:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return c})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return b}));var t=a(2),l=a(9),i=(a(0),a(242)),r={},c={id:"generated-config/flow",title:"flow",description:"This plugin generates Flow types based on your GraphQLSchema.",source:"@site/docs/generated-config/flow.md",permalink:"/docs/generated-config/flow",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/flow.md"},o=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>useFlowExactObjects</code>",id:"useflowexactobjects",children:[]},{value:"<code>useFlowReadOnlyTypes</code>",id:"useflowreadonlytypes",children:[]},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>declarationKind</code>",id:"declarationkind",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>fieldWrapperValue</code>",id:"fieldwrappervalue",children:[]},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[]},{value:"<code>onlyOperationTypes</code>",id:"onlyoperationtypes",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],p={rightToc:o};function b(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin generates Flow types based on your ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),Object(i.b)("p",null,"It generates types for your entire schema: types, input types, enum, interface, scalar and union."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(t.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/flow\n")))),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("h3",{id:"useflowexactobjects"},Object(i.b)("inlineCode",{parentName:"h3"},"useFlowExactObjects")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Generates Flow types as Exact types."),Object(i.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  path/to/file.ts:\n    plugins:\n      - flow\n    config:\n      useFlowExactObjects: false\n")),Object(i.b)("h3",{id:"useflowreadonlytypes"},Object(i.b)("inlineCode",{parentName:"h3"},"useFlowReadOnlyTypes")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Generates read-only Flow types"),Object(i.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  path/to/file.ts:\n   plugins:\n     - flow\n   config:\n     useFlowReadOnlyTypes: true\n")),Object(i.b)("h3",{id:"addunderscoretoargstype"},Object(i.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Adds ",Object(i.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(i.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(i.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(i.b)("h5",{id:"with-custom-values"},"With Custom Values"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(i.b)("h3",{id:"enumvalues"},Object(i.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(i.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema.\nYou can also map the entire enum to an external type by providing a string that of ",Object(i.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(i.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(i.b)("h5",{id:"with-custom-values-1"},"With Custom Values"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(i.b)("h5",{id:"with-external-enum"},"With External Enum"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(i.b)("h5",{id:"import-all-enums-from-a-file"},"Import All Enums from a file"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(i.b)("h3",{id:"declarationkind"},Object(i.b)("inlineCode",{parentName:"h3"},"declarationKind")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"DeclarationKindConfig | string (values: abstract class, class, interface, type)")),Object(i.b)("p",null,"Overrides the default output for various GraphQL elements."),Object(i.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(i.b)("h5",{id:"override-all-declarations"},"Override all declarations"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(i.b)("h5",{id:"override-only-specific-declarations"},"Override only specific declarations"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(i.b)("h3",{id:"enumprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(i.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(i.b)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(i.b)("h3",{id:"fieldwrappervalue"},Object(i.b)("inlineCode",{parentName:"h3"},"fieldWrapperValue")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"T")),Object(i.b)("p",null,"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(i.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(i.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(i.b)("h5",{id:"allow-promise"},"Allow Promise"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(i.b)("h3",{id:"wrapfielddefinitions"},Object(i.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Set the to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(i.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions."),Object(i.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(i.b)("h5",{id:"enable-wrapping-fields"},"Enable wrapping fields"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(i.b)("h3",{id:"onlyoperationtypes"},Object(i.b)("inlineCode",{parentName:"h3"},"onlyOperationTypes")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"This will cause the generator to emit types for operations only (basically only enums and scalars)"),Object(i.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(i.b)("h5",{id:"override-all-definition-types"},"Override all definition types"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   onlyOperationTypes: true\n")),Object(i.b)("h3",{id:"scalars"},Object(i.b)("inlineCode",{parentName:"h3"},"scalars")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(i.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(i.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(i.b)("h3",{id:"namingconvention"},Object(i.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(i.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(i.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(i.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(i.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(i.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(i.b)("h5",{id:"override-all-names"},"Override All Names"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(i.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(i.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(i.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(i.b)("h3",{id:"typesprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Prefixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(i.b)("h3",{id:"skiptypename"},Object(i.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(i.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(i.b)("h3",{id:"nonoptionaltypename"},Object(i.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Automatically adds ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(i.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}b.isMDXComponent=!0},242:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return m}));var t=a(0),l=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),b=function(e){var n=l.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},s=function(e){var n=b(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},u=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(a),u=t,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||i;return a?l.a.createElement(m,c(c({ref:n},p),{},{components:a})):l.a.createElement(m,c({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var p=2;p<i;p++)r[p]=a[p];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);