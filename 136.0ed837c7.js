(window.webpackJsonp=window.webpackJsonp||[]).push([[136,144],{1051:function(e,_,r){"use strict";r.r(_),r.d(_,"preset",(function(){return a}));r(245),r(246);var t=r(252),n=r(384),a={buildGeneratesSection:function(e){if(!e.presetConfig.typesPath)throw new Error('Preset "import-types" requires you to specify "typesPath" configuration and point it to your base types file (generated by "typescript" plugin)!');var _=e.presetConfig.importTypesNamespace||"Types",r=Object.assign(Object.assign({},e.pluginMap),{},{add:n.default}),a=[].concat(e.plugins),i=Object.assign(Object.assign({},e.config),{},{namespacedImportName:_,importOperationTypesFrom:_,externalFragments:[]});return e.documents.map((function(r){Object(t.g)(r.document,i.externalFragments.map((function(e){return e.name})),e.schemaAst)&&a.unshift({add:{content:"import * as "+_+" from '"+e.presetConfig.typesPath+"';\n"}})})),[{filename:e.baseOutputDir,plugins:a,pluginMap:r,config:i,schema:e.schema,schemaAst:e.schemaAst,documents:e.documents}]}};_.default=a},252:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(247),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(270),core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(246),core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(249),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(245),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(248),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(250),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(253),core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(25),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(20),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_11__),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(19),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_12__),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(51),core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_13__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(71),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_14__),param_case__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(266),graphql__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(262),graphql__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(317),graphql__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(274),graphql__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(352),graphql__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(1045);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_15__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var _={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var r,t;"string"==typeof e?_.content+=e:(_.content+=e.content,(r=_.prepend).push.apply(r,e.prepend||[]),(t=_.append).push.apply(t,e.append||[]))})),[].concat(_.prepend,[_.content],_.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_16__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var _;return"string"==typeof e?[(_={},_[e]={},_)]:Array.isArray(e)?e.map((function(e){var _;return"string"==typeof e?((_={})[e]={},_):e})):"object"==typeof e?Object.keys(e).reduce((function(_,r){var t;return[].concat(_,[(t={},t[r]=e[r],t)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,_,r){var t=0,n=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_17__.c)(e,{SelectionSet:{enter:function(e,t,a,i){if(!i.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))){var o=e.selections||[];if(r&&o.length>0){var s=function(){if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FRAGMENT_DEFINITION)return a.typeCondition.name.value;if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FIELD){var e=n[n.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var _=e.getFields()[a.name.value];if(!_)throw new Error('Unable to find field "'+a.name.value+'" on type "'+e+'"!');return getBaseType(_.type).name}if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.OPERATION_DEFINITION){if("query"===a.operation)return r.getQueryType().name;if("mutation"===a.operation)return r.getMutationType().name;if("subscription"===a.operation)return r.getSubscriptionType().name}else if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.INLINE_FRAGMENT&&a.typeCondition)return a.typeCondition.name.value;return null}();n.push(r.getType(s))}}},leave:function(e){var _=e.selections||[];r&&_.length>0&&n.pop()}},Field:{enter:function(e,a,i,o,s){if(!e.name.value.startsWith("__")&&!s.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))){var u=e.selectionSet&&e.selectionSet.selections||[],c=u.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_18__.a.FRAGMENT_SPREAD&&!_.includes(e.name.value)}));if((0===u.length||c.length>0)&&t++,r){var l=n[n.length-1];if(l&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(l)){var p=l.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+l+'"!');hasNullableTypeRecursively(p.type)&&t++}}}}},enter:{VariableDefinition:function(e,r,n,a,i){i.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))||t++},InputValueDefinition:function(e,r,n,a,i){i.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&_.includes(e.name.value)}))||t++}}}),t>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var _=e.getTypeMap();for(var r in _){var t=e.getType(r);if(Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(t)&&isFederationObjectType(t)){var n,a=t.toConfig();a.fields=Object.assign(((n={})[resolveReferenceFieldName]={type:t},n),a.fields);var i=new graphql__WEBPACK_IMPORTED_MODULE_16__.f(a);i.astNode=i.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_20__.c)(i)).definitions[0],i.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_18__.a.NAME,value:r}}}),_[r]=i}}return e}function removeFederation(e){var _=e.getQueryType().getFields();delete _._entities,delete _._service;var r=e.getTypeMap();return delete r._Service,delete r._Entity,delete r._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var _=e.enabled,r=e.schema;this.enabled=!1,this.enabled=_,this.schema=r,this.providesMap=this.createMapOfProvides()}var _=e.prototype;return _.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},_.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},_.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},_.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},_.skipField=function(e){var _=e.fieldNode,r=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(r)&&isFederationObjectType(r))&&this.isExternalAndNotProvided(_,r)},_.isResolveReferenceField=function(e){var _="string"==typeof e.name?e.name:e.name.value;return this.enabled&&_===resolveReferenceFieldName},_.transformParentType=function(e){var _=this,r=e.fieldNode,t=e.parentType,n=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(t)&&isFederationObjectType(t)&&r.name.value===resolveReferenceFieldName){var a=getDirectivesByName("key",t);if(a.length){var i=["{ __typename: '"+t.name+"' } &"],o=getDirectivesByName("requires",r).map(this.extractFieldSet).reduce((function(e,_){return[].concat(e,_)}),[]).map((function(e){return{name:e,required:Object(graphql__WEBPACK_IMPORTED_MODULE_16__.L)(t.getFields()[e].type)}})),s=this.translateFieldSet(o,n),u=a.map((function(e){var r=_.extractFieldSet(e).map((function(e){return{name:e,required:!0}}));return _.translateFieldSet(r,n)})),c=u.length>1?["(",")"]:["",""],l=c[0],p=c[1];return i.push([l,u.join(" | "),p].join("")),o.length&&i.push("& "+s),i.join(" ")}}return n},_.isExternalAndNotProvided=function(e,_){return this.isExternal(e)&&!this.hasProvides(_,e)},_.isExternal=function(e){return getDirectivesByName("external",e).length>0},_.hasProvides=function(e,_){var r=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(e)?e.name:e.name.value];return!(!r||!r.length)&&r.includes(_.name.value)},_.translateFieldSet=function(e,_){return"Pick<"+_+", "+e.map((function(e){return"'"+e.name+"'"})).join(" | ")+">"},_.extractFieldSet=function(e){var _=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(_))throw new Error("Nested fields in _FieldSet is not supported");return deduplicate(_.split(/\s+/g))},_.createMapOfProvides=function(){var e=this,_={};return Object.keys(this.schema.getTypeMap()).forEach((function(r){var t=e.schema.getType(r);Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(t)&&Object.values(t.getFields()).forEach((function(r){var t,n=getDirectivesByName("provides",r.astNode).map(e.extractFieldSet).reduce((function(e,_){return[].concat(e,_)}),[]),a=getBaseType(r.type);_[a.name]||(_[a.name]=[]),(t=_[a.name]).push.apply(t,n)}))})),_},e}();function isFederationObjectType(e){var _=Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_19__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_20__.c)(e)).definitions[0]:e,r=_.name.value,t=_.directives,n=!["Query","Mutation","Subscription"].includes(r),a=!r.startsWith("__"),i=t.some((function(e){return"key"===e.name.value}));return n&&a&&i}function deduplicate(e){return e.filter((function(_,r){return e.indexOf(_)===r}))}function getDirectivesByName(e,_){var r;return(r=Object(graphql__WEBPACK_IMPORTED_MODULE_16__.N)(_)?_.astNode:_)&&r.directives?r.directives.filter((function(_){return _.name.value===e})):[]}var DetailedError=function(e){function _(r,t,n){var a;return(a=e.call(this,r)||this).message=r,a.details=t,a.source=n,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(a),_.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(a),_),a}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(_,e),_}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(251))},384:function(e,_,r){"use strict";r.r(_),r.d(_,"plugin",(function(){return o}));var t=r(277),n=r.n(t),a=(r(272),r(278)),i=(r(25),r(20),r(19),r(51),function(e){return(Array.isArray(e)?e:"object"==typeof e?Object.keys(e).map((function(_){return e[_]})):[e]).filter((function(e){return"string"==typeof e}))}),o=function(){var e=Object(a.a)(n.a.mark((function e(_,r,t){var a,o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof t){e.next=2;break}return e.abrupt("return",{content:null,prepend:i(t)});case 2:if(o=t.placement,s=t.content,!o||"prepend"===o||"content"===o||"append"===o){e.next=6;break}throw Error("Add plugin, faulty placement option");case 6:if(o||(o="prepend"),s){e.next=9;break}throw Error("Add plugin, missing content");case 9:return e.abrupt("return",((a={content:null})[o]=i(s),a));case 10:case"end":return e.stop()}}),e)})));return function(_,r,t){return e.apply(this,arguments)}}(),s={plugin:o};_.default=s}}]);