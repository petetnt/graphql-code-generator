(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1066:function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"plugin",(function(){return a})),e.d(t,"validate",(function(){return c}));e(269);var r=e(277),i=e.n(r),o=(e(245),e(25),e(20),e(19),e(51),e(272),e(278)),u=e(259),a=function(){var t=Object(o.a)(i.a.mark((function t(e,r,o){var a,c,s,f,d,l,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.modulePathPrefix,c=void 0===a?"":a,s=o.relativeToCwd,f=o.prefix,d=void 0===f?"*/":f,l=!0===s,p=r.reduce((function(t,e){var r,i=l?Object(u.relative)(n.cwd(),e.location):Object(u.basename)(e.location);return t[i]||(t[i]=[]),(r=t[i]).push.apply(r,e.document.definitions.filter((function(n){return"OperationDefinition"===n.kind||"FragmentDefinition"===n.kind}))),t}),{}),t.abrupt("return",Object.keys(p).filter((function(n){return p[n].length>0})).map((function(n){var t=p[n];return"\ndeclare module '"+d+c+n+"' {\n  import { DocumentNode } from 'graphql';\n  const defaultDocument: DocumentNode;\n  "+t.filter((function(n){return n.name&&n.name.value})).map((function(n){return"export const "+n.name.value+": DocumentNode;"})).join("\n")+"\n\n  export default defaultDocument;\n}\n    "})).join("\n"));case 4:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),c=function(){var n=Object(o.a)(i.a.mark((function n(t,e,r,o){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o.endsWith(".d.ts")){n.next=2;break}throw new Error('Plugin "typescript-graphql-files-modules" requires extension to be ".d.ts"!');case 2:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()}.call(this,e(251))},269:function(n,t,e){"use strict";var r=e(21),i=e(36),o=e(342),u="".endsWith;r(r.P+r.F*e(343)("endsWith"),"String",{endsWith:function(n){var t=o(this,n,"endsWith"),e=arguments.length>1?arguments[1]:void 0,r=i(t.length),a=void 0===e?r:Math.min(i(e),r),c=String(n);return u?u.call(t,c,a):t.slice(a-c.length,a)===c}})}}]);