(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{303:function(module,exports,__webpack_require__){module.exports={connectorLine:"ConnectorOverrides_connectorLine__3elTL",animateLineFill:"ConnectorOverrides_animateLineFill__1bgZf",animateColor:"ConnectorOverrides_animateColor__1DXpf",hidden:"ConnectorOverrides_hidden__FyDwf"}},304:function(module,exports,__webpack_require__){__webpack_require__(305),__webpack_require__(448),module.exports=__webpack_require__(449)},366:function(module,exports){},449:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(187),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(298);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.themes.light}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(653),module)}.call(this,__webpack_require__(450)(module))},653:function(module,exports,__webpack_require__){var map={"./Connector/Connector.stories.jsx":667};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=653},665:function(module,exports,__webpack_require__){},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(2),react_default=__webpack_require__.n(react),defineProperty=__webpack_require__(188),slicedToArray=__webpack_require__(189),Connector_module=__webpack_require__(92),Connector_module_default=__webpack_require__.n(Connector_module),classnames=__webpack_require__(302),classnames_default=__webpack_require__.n(classnames),createViewBox=function createViewBox(width,height){return"0 0 ".concat(width," ").concat(height)},createPath=function createPath(width,height){return"\n      M 1 1 \n      L 1 ".concat(height/2,"\n      L ").concat(width-1," ").concat(height/2,"\n      L ").concat(width-1," ").concat(height,"\n    ")};function Connector(_ref){var _classNames,isVisible=_ref.isVisible,_ref$styles=_ref.styles,styles=void 0===_ref$styles?Connector_module_default.a:_ref$styles,svgRef=Object(react.useRef)(null),_useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),pathLength=_useState2[0],setPathLength=_useState2[1],_useState3=Object(react.useState)({width:0,height:0}),_useState4=Object(slicedToArray.a)(_useState3,2),dimensions=_useState4[0],setDimensions=_useState4[1];return Object(react.useLayoutEffect)((function(){function setSize(){var _svgRef$current$getBo=svgRef.current.getBoundingClientRect(),width=_svgRef$current$getBo.width,height=_svgRef$current$getBo.height;setDimensions({width:width,height:height});var path=svgRef.current.querySelector("path");setPathLength(path.getTotalLength())}setSize(),new ResizeObserver(setSize).observe(svgRef.current)}),[]),react_default.a.createElement("svg",{className:classnames_default()((_classNames={},Object(defineProperty.a)(_classNames,styles.connectorLine,!0),Object(defineProperty.a)(_classNames,styles.hidden,!isVisible),_classNames)),ref:svgRef,style:{"--pathLength":pathLength},version:"1.1",preserveAspectRatio:"xMinYMin meet",xmlns:"http://www.w3.org/2000/svg",viewBox:createViewBox(dimensions.width,dimensions.height),height:"100%",width:"100%"},react_default.a.createElement("path",{d:createPath(dimensions.width,dimensions.height),vectorEffect:"non-scaling-stroke",strokeWidth:"2",fill:"none"}))}Connector.__docgenInfo={description:"",methods:[],displayName:"Connector",props:{styles:{defaultValue:{value:"defaultStyles",computed:!0},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components\\Connector\\Connector.jsx"]={name:"Connector",docgenInfo:Connector.__docgenInfo,path:"components\\Connector\\Connector.jsx"});var dist=__webpack_require__(131),ConnectorOverrides_module=(__webpack_require__(665),__webpack_require__(303)),ConnectorOverrides_module_default=__webpack_require__.n(ConnectorOverrides_module);__webpack_require__.d(__webpack_exports__,"connectorExample",(function(){return connectorExample}));__webpack_require__(295).withSource;var addSourceDecorator=__webpack_require__(295).addSource,connectorExample=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\r\nimport Connector from './Connector';\r\nimport { withKnobs, boolean, select } from \"@storybook/addon-knobs\";\r\nimport './Connector.stories.scss';\r\nimport defaultStyles from './Connector.module.scss';\r\nimport overrides from './ConnectorOverrides.module.scss';\r\n\r\nexport default {\r\n  title: 'Connector',\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const connectorExample = () => {\r\n\r\n  return (\r\n    <div className=\"connector-container\">\r\n      <Connector \r\n        isVisible={boolean(\"isVisible\", false)}\r\n        styles={select(\"Style\", { defaultStyles, overrides}, defaultStyles)}\r\n      />\r\n    </div>\r\n  )\r\n}\r\n",locationsMap:{"connector--connector-example":{startLoc:{col:32,line:13},endLoc:{col:1,line:23},startBody:{col:32,line:13},endBody:{col:1,line:23}}}}},title:"Connector",decorators:[dist.withKnobs]},addSourceDecorator((function(){return react_default.a.createElement("div",{className:"connector-container"},react_default.a.createElement(Connector,{isVisible:Object(dist.boolean)("isVisible",!1),styles:Object(dist.select)("Style",{defaultStyles:Connector_module_default.a,overrides:ConnectorOverrides_module_default.a},Connector_module_default.a)}))}),{__STORY__:"import React from 'react';\r\nimport Connector from './Connector';\r\nimport { withKnobs, boolean, select } from \"@storybook/addon-knobs\";\r\nimport './Connector.stories.scss';\r\nimport defaultStyles from './Connector.module.scss';\r\nimport overrides from './ConnectorOverrides.module.scss';\r\n\r\nexport default {\r\n  title: 'Connector',\r\n  decorators: [withKnobs]\r\n};\r\n\r\nexport const connectorExample = () => {\r\n\r\n  return (\r\n    <div className=\"connector-container\">\r\n      <Connector \r\n        isVisible={boolean(\"isVisible\", false)}\r\n        styles={select(\"Style\", { defaultStyles, overrides}, defaultStyles)}\r\n      />\r\n    </div>\r\n  )\r\n}\r\n",__ADDS_MAP__:{"connector--connector-example":{startLoc:{col:32,line:13},endLoc:{col:1,line:23},startBody:{col:32,line:13},endBody:{col:1,line:23}}},__MAIN_FILE_LOCATION__:"/Connector.stories.jsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\dev\\components-library\\components\\Connector",__IDS_TO_FRAMEWORKS__:{}}))},92:function(module,exports,__webpack_require__){module.exports={connectorLine:"Connector_connectorLine__2qneE",animateLineFill:"Connector_animateLineFill__Zx1CQ",animateColor:"Connector_animateColor__2P54b",hidden:"Connector_hidden__2FyqO"}}},[[304,1,2]]]);
//# sourceMappingURL=main.c471d67b4582483592db.bundle.js.map