(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Colorama",["Introduction","Example","License"]]}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Colorama.stories.tsx":"./src/stories/Colorama.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx","./stories/License.stories.mdx":"./src/stories/License.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Colorama.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var AnimationDirectionType,AnimationType,_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"));function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}!function(AnimationDirectionType){AnimationDirectionType.REVERSE="reverse",AnimationDirectionType.NORMAL="normal"}(AnimationDirectionType||(AnimationDirectionType={})),function(AnimationType){AnimationType.LEFT="left",AnimationType.RIGHT="right",AnimationType.TOP="top",AnimationType.BOTTOM="bottom"}(AnimationType||(AnimationType={}));styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose([""])));var DEFAULT_COLORS=["#8000ff","#FD0311","#FB8201","#FFF803","#00FF05","#0580FF"],rideRight=Object(styled_components_browser_esm.c)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),rideLeft=Object(styled_components_browser_esm.c)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),rideTop=Object(styled_components_browser_esm.c)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),rideBottom=Object(styled_components_browser_esm.c)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),Wrapper=styled_components_browser_esm.b.div(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n  position: relative;\n  overflow-x: hidden;\n\n  span.colorama {\n    ","\n    opacity: 1;\n  }\n"])),(function(props){return function applyNthChildStyles(){var colorArray=arguments.length>0&&void 0!==arguments[0]?arguments[0]:DEFAULT_COLORS,bg=arguments.length>1&&void 0!==arguments[1]&&arguments[1],output=colorArray.map((function(color,i){return"\n      &:nth-child("+colorArray.length+"n+"+i+") {\n        color: "+(bg?"#fff":color)+";\n        background-color: "+(bg?color:"none")+";\n        min-width: "+(bg?"1.5em":"auto")+";\n        line-height: "+(bg?"1.5em":"auto")+";\n        text-align: center;\n        display: inline-block;\n      }\n    "}));return Object(styled_components_browser_esm.a)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n    ","\n  "])),output.join(""))}(props.colors||DEFAULT_COLORS,props.bg)})),Overflow=styled_components_browser_esm.b.div(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n  position: relative;\n  ","\n"])),(function(props){return props.animate&&Object(styled_components_browser_esm.a)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n      animation-direction: "," !important;\n      animation: ","\n        ","ms ease forwards;\n    "])),props.animationDirection,function getRideKeyframes(type){return type===AnimationType.BOTTOM?rideBottom:type===AnimationType.LEFT?rideLeft:type===AnimationType.RIGHT?rideRight:type===AnimationType.TOP?rideTop:rideLeft}(props.animationType),function getAnimationTime(type){var length=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return type===AnimationType.BOTTOM?800:type===AnimationType.LEFT?80*length:type===AnimationType.RIGHT?95*length:(AnimationType.TOP,800)}(props.animationType,props.length))})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Colorama_Colorama=react_default.a.forwardRef((function(_ref,ref){var text=_ref.text,_ref$colors=_ref.colors,colors=void 0===_ref$colors?DEFAULT_COLORS:_ref$colors,bg=_ref.bg,_ref$animate=_ref.animate,animate=void 0!==_ref$animate&&_ref$animate,_ref$animationDirecti=_ref.animationDirection,animationDirection=void 0===_ref$animationDirecti?AnimationDirectionType.REVERSE:_ref$animationDirecti,_ref$animationType=_ref.animationType,animationType=void 0===_ref$animationType?AnimationType.LEFT:_ref$animationType,elements=text.split("");return Object(jsx_runtime.jsx)(Wrapper,{colors:colors,bg:bg,ref:ref,children:Object(jsx_runtime.jsx)(Overflow,{animate:animate,length:elements.length,animationDirection:animationDirection,animationType:animationType,children:elements.map((function(letter,index){return Object(jsx_runtime.jsx)("span",{className:"colorama",children:" "===letter?Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:" "}):letter},letter+"-"+index)}))})})}));try{Colorama_Colorama.displayName="Colorama",Colorama_Colorama.__docgenInfo={description:"",displayName:"Colorama",props:{colors:{defaultValue:{value:"Styled.DEFAULT_COLORS"},description:"",name:"colors",required:!1,type:{name:"string[]"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},animate:{defaultValue:{value:"false"},description:"",name:"animate",required:!1,type:{name:"boolean"}},animationDirection:{defaultValue:{value:"AnimationDirectionType.REVERSE"},description:"",name:"animationDirection",required:!1,type:{name:"enum",value:[{value:'"reverse"'},{value:'"normal"'}]}},animationType:{defaultValue:{value:"AnimationType.LEFT"},description:"",name:"animationType",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Colorama.tsx#Colorama"]={docgenInfo:Colorama_Colorama.__docgenInfo,name:"Colorama",path:"src/Colorama.tsx#Colorama"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Colorama/Example",component:Colorama_Colorama,argTypes:{text:{defaultValue:"Hello World!",control:{type:"text"}},colors:{defaultValue:DEFAULT_COLORS,control:{type:"array"}}}};var Colorama_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Colorama_Colorama,Object.assign({},args))};Colorama_stories_Template.displayName="Template";var Primary=Colorama_stories_Template.bind({});Primary.parameters=Object.assign({storySource:{source:"(args) => {\n  return <Colorama {...args} />;\n}"}},Primary.parameters)},"./src/stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_assets_colorama_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/assets/colorama.svg"),_assets_colorama_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_colorama_svg__WEBPACK_IMPORTED_MODULE_7__),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Colorama/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"welcome-to-colorama"},"Welcome to colorama!"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:_assets_colorama_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"Demo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"Colorama")," is a simple React component that allows you to quickly\ncolor any text in such a way that each character of the text can have a different\ncolor (for example, a rainbow effect). Colorama also brings some additional features that allow you to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"animate text"),'. For more details check out the "Example" page.'),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"browsers-support"},"Browsers support"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("span",{id:"compatibility"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("table",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("thead",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"thead"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:null},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"IE / Edge"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:null},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"Firefox"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:null},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"Chrome"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:null},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"Safari"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:null},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png",alt:"iOS Safari",width:"24px",height:"24px"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"iOS Safari"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("th",{parentName:"tr",align:null},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"th",href:"http://godban.github.io/browsers-support-badges/",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("br",null),"Opera"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tbody",{parentName:"table"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("tr",{parentName:"tbody"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:null},"IE11, Edge >= 80"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:null},">= 55"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:null},">= 55"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:null},">= 12.1"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:null},">= 12.1"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("td",{parentName:"tr",align:null},">= 40")))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"installation"},"Installation"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"YARN")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-shell"},"yarn add @react-goodies/colorama\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("strong",{parentName:"p"},"NPM")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-shell"},"npm install @react-goodies/colorama --save\n")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h2",{id:"basic-implementation"},"Basic implementation"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("pre",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { Colorama } from "@react-goodies/colorama";\n\nconst App = () => {\n  return (\n    <Colorama\n      colors={[\n        "#8000ff",\n        "#FD0311",\n        "#FB8201",\n        "#FFF803",\n        "#00FF05",\n        "#0580FF",\n      ]}\n      text="Hello World!"\n    />\n  );\n};\n\nexport default App;\n')))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Colorama/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/stories/License.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Colorama/License",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"license"},"License"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Copyright 2022 Marcin Borkowski ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("a",{parentName:"p",href:"mailto:marborkowski@gmail.com"},"marborkowski@gmail.com")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Colorama/License",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./src/stories/assets/colorama.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colorama.a1dbd8f0.svg"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,4,5]]]);