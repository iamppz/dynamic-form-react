(this["webpackJsonpdynamic-form-react"]=this["webpackJsonpdynamic-form-react"]||[]).push([[0],{133:function(e,t,a){e.exports=a(225)},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=(a(138),a(139),a(8)),o=a(232),u=a(228),d=a(55),m=a(227),s=a(128),p=(a(140),a(233));function f(e){var t=e.widget,a=Object(p.a)({item:{type:t.type},collect:function(e){return{isDragging:!!e.isDragging()}}}),n=Object(i.a)(a,2),r=n[0].isDragging,c=n[1];return l.a.createElement("li",{key:t.name,className:"widget",style:{opacity:r?"0.5":1},ref:c},t.icon,l.a.createElement("span",null,t.name))}var E=a(31);function v(e,t){var a=null;return function e(n){if(n.lanes){var l,r=Object(E.a)(n.lanes);try{for(r.s();!(l=r.n()).done;)for(var c=l.value,i=0;i<c.cellDataList.length;i++){var o=c.cellDataList[i];if(t(o,i,c.cellDataList)){var u;a=[{parentId:n.id,laneIndex:null===(u=n.lanes)||void 0===u?void 0:u.indexOf(c),index:i},c.cellDataList,o];break}"grid"===o.type&&e(o)}}catch(d){r.e(d)}finally{r.f()}}return a}(e)}function b(e,t,a){var n=null;return function e(l){if(l.id===t)return l.lanes[a].cellDataList;if(l.lanes){var r,c=Object(E.a)(l.lanes);try{for(c.s();!(r=c.n()).done;){var i,o=r.value,u=Object(E.a)(o.cellDataList);try{for(u.s();!(i=u.n()).done;){var d=i.value;"grid"===d.type&&(d.id===t?n=d.lanes[a].cellDataList:e(d))}}catch(m){u.e(m)}finally{u.f()}}}catch(m){c.e(m)}finally{c.f()}}return n}(e)}function g(e,t,a,n){var l=v(e,(function(e){return e.id===a})),r=Object(i.a)(l,2),c=r[0],o=r[1];"up"===n?o.splice(c.index,0,t):o.splice(c.index+1,0,t),h(e,t.id)}function y(e,t){if(!t.type)return e;var a=JSON.parse(JSON.stringify(e));if("MOVE"===t.type){var n=v(a,(function(e){return e.id===t.dragItemId})),l=Object(i.a)(n,3),r=l[0],c=l[1],o=l[2];c.splice(r.index,1),g(a,o,t.dropItemId,t.position)}else if("NOOB"===t.type)g(a,t.dragItem,t.dropItemId,t.position);else if("ADD"===t.type){b(a,t.location.parentId,t.location.laneIndex).push(t.cellData),h(a,t.cellData.id)}else if("FARM"===t.type){var u=v(a,(function(e){return e.id===t.cellDataId})),d=Object(i.a)(u,3),m=d[0],s=d[1],p=d[2];s.splice(m.index,1);var f=b(a,t.location.parentId,t.location.laneIndex);null===f||void 0===f||f.push(p),h(a,p.id)}else"ACTIVE"===t.type?h(a,t.id):"DELETE_ACTIVE"===t.type&&function(e){var t=v(e,(function(e){return e.active}));if(t){var a=Object(i.a)(t,2),n=a[0];a[1].splice(n.index,1)}}(a);return a}function h(e,t){var a=v(e,(function(e){return e.active}));a&&(a[2].active=!1);var n=v(e,(function(e){return e.id===t}));n&&(n[2].active=!0)}function O(e){var t={type:e,id:e+(new Date).getTime(),active:!1};return"grid"===t.type?t.lanes=[{span:50,cellDataList:[]},{span:50,cellDataList:[]}]:"input"===t.type?(t.label="\u5355\u884c\u6587\u672c",t.placeholder="\u8bf7\u586b\u5199",t.required=!1):"textarea"===t.type?(t.label="\u591a\u884c\u6587\u672c",t.placeholder="\u8bf7\u586b\u5199",t.required=!1):"select"===t.type?(t.label="\u4e0b\u62c9\u9009\u62e9",t.placeholder="\u8bf7\u9009\u62e9",t.options=[],t.required=!1):"list"===t.type?(t.label="\u5217\u8868",t.lanes=[{cellDataList:[],span:100}]):"datetime"===t.type?(t.label="\u65e5\u671f\u65f6\u95f4",t.placeholder="\u8bf7\u9009\u62e9",t.required=!1):"checkbox"===t.type?(t.label="\u591a\u9009",t.options=[],t.required=!1):"radio"===t.type&&(t.label="\u5355\u9009",t.options=[],t.required=!1),t}var w=a(38),D=a(234);a(142);var j=function(e){var t=e.cellDataList,a=e.direction,r=e.location,c=Object(n.useContext)(H),o=Object(D.a)({accept:["input","textarea","grid","select","datetime","instance"],drop:function(e,a){if(d){if(!a.getClientOffset())return;"instance"===e.type?c({type:"FARM",cellDataId:e.id,location:r}):c({type:"ADD",cellData:O(e.type),location:Object.assign({},r,{index:t.length})})}},collect:function(e){var t=e.isOver({shallow:!0});return t&&e.getItem().id===r.parentId&&(t=!1),{isOver:t}}}),u=Object(i.a)(o,2),d=u[0].isOver,m=u[1],s="column"===a?"default":"inline",p=t.map((function(e,t){return l.a.createElement(_,{key:e.id,layout:s,cellData:e,index:t})}));return l.a.createElement("td",{className:"lane "+a+(d?" hovered":""),ref:m},p)},I=l.a.createContext(null),x=Object(n.forwardRef)((function(e,t){var a,r,c=e.direction,o=void 0===c?"column":c,u=e.cellData,d=e.style,m=Object(n.useReducer)((function(e,t){switch(t.type){case"SET_CURRENT":return Object(w.a)(Object(w.a)({},e),{},{current:t.element});case"SET_VALUE":return a=e.data,n=t.target,l=t.value,function e(t){if(t.lanes){var a,r=Object(E.a)(t.lanes);try{for(r.s();!(a=r.n()).done;){var c,i=a.value,o=Object(E.a)(i.cellDataList);try{for(o.s();!(c=o.n()).done;){var u=c.value;switch(u.type){case"grid":e(u);break;case"list":var d,m=Object(E.a)(u.lanes);try{for(m.s();!(d=m.n()).done;)for(var s=d.value,p=0;p<s.cellDataList.length;p++){var f=s.cellDataList[p];if(f===n)return f.value=l,!0}}catch(v){m.e(v)}finally{m.f()}break;default:if(u===n)return u.value=l,!0}}}catch(v){o.e(v)}finally{o.f()}}}catch(v){r.e(v)}finally{r.f()}}return!1}(a),Object(w.a)({},e);default:return e}var a,n,l}),{current:null,data:u}),s=Object(i.a)(m,2)[1];return l.a.createElement(I.Provider,{value:s},l.a.createElement("table",{ref:t,className:"lanes",style:d},l.a.createElement("tbody",null,"column"===o?l.a.createElement("tr",null,null===(a=u.lanes)||void 0===a?void 0:a.map((function(e,t){return l.a.createElement(j,{key:u.id+"-"+t,direction:o,cellDataList:e.cellDataList,location:{parentId:u.id,laneIndex:t}})}))):l.a.createElement(l.a.Fragment,null,null===(r=u.lanes)||void 0===r?void 0:r.map((function(e,t){return l.a.createElement("tr",{key:u.id+"-"+t},l.a.createElement(j,{cellDataList:e.cellDataList,direction:o,location:{parentId:u.id,laneIndex:t}}))}))))))})),L=a(231),F=(a(143),Object(n.forwardRef)((function(e,t){var a=e.layout,n=void 0===a?"default":a,r=e.required,c=void 0!==r&&r,i=e.warning,o=void 0===i?null:i,u=e.warnable,d=void 0===u||u,m=e.label,s=e.element;return l.a.createElement("table",{ref:t,className:["form-group",n].join(" ")},l.a.createElement("tbody",null,"default"===n?l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{className:"label"},c?l.a.createElement("span",{className:"required"},"*"):l.a.createElement(l.a.Fragment,null),m),l.a.createElement("td",{className:"element"},s)),d?l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{className:"warning"},o?l.a.createElement("span",null,o):l.a.createElement("span",null,"\xa0"))):l.a.createElement(l.a.Fragment,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{className:"label"},c?l.a.createElement("span",{className:"required"},"*"):l.a.createElement(l.a.Fragment,null),m)),l.a.createElement("tr",null,l.a.createElement("td",{className:"element"},s)),d?l.a.createElement("tr",null,l.a.createElement("td",{className:"warning"},o?l.a.createElement("span",null,o):l.a.createElement("span",null,"\xa0"))):l.a.createElement(l.a.Fragment,null))))}))),C=Object(n.forwardRef)((function(e,t){var a=e.element,n=e.layout,r=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{ref:t,required:a.required,warning:a.warning,layout:n,warnable:a.warnable,label:a.labeled?l.a.createElement("label",{title:a.label},a.label):l.a.createElement(l.a.Fragment,null),element:l.a.createElement(L.a,{value:a.value,placeholder:a.placeholder,onChange:function(e){r({type:"SET_VALUE",target:a,value:e.target.value})}})}))})),N=Object(n.forwardRef)((function(e,t){var a=e.element;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{ref:t,cellData:a}))})),k=a(230),q=k.a.Option,T=Object(n.forwardRef)((function(e,t){var a,n=e.cellData,r=e.layout,c=e.dispatch;return n.options&&0!==n.options.length||(n.options=[{label:"Joyce",value:"1"},{label:"Teresa",value:"2"}]),l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{ref:t,required:n.required,warning:n.warning,layout:r,warnable:n.warnable,label:n.labeled?l.a.createElement("label",{title:n.label},n.label):l.a.createElement(l.a.Fragment,null),element:l.a.createElement(k.a,{style:{width:"100%"},onChange:function(e){c({type:"SET_VALUE",target:n,value:e})}},null===(a=n.options)||void 0===a?void 0:a.map((function(e){return l.a.createElement(q,{value:e.value},e.label)})))}))})),A=a(229),R=Object(n.forwardRef)((function(e,t){var a=e.data,n=e.layout,r=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{ref:t,required:a.required,warning:a.warning,layout:n,warnable:a.warnable,label:a.labeled?l.a.createElement("label",{title:a.label},a.label):l.a.createElement(l.a.Fragment,null),element:l.a.createElement(A.a,{style:{width:"100%"},value:a.value,placeholder:a.placeholder,onChange:function(e){r({type:"SET_VALUE",target:a,value:e})}})}))})),V=L.a.TextArea,S=Object(n.forwardRef)((function(e,t){var a=e.element,n=e.layout,r=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{ref:t,required:a.required,warning:a.warning,layout:n,warnable:a.warnable,label:a.labeled?l.a.createElement("label",{title:a.label},a.label):l.a.createElement(l.a.Fragment,null),element:l.a.createElement(V,{rows:4,value:a.value,placeholder:a.placeholder,onChange:function(e){r({type:"SET_VALUE",target:a,value:e.target.value})}})}))})),_=function(e){var t=e.cellData,a=e.index,r=e.layout,c=Object(w.a)(Object(w.a)({},t),{},{required:!1,warnable:!1,layout:"default",labeled:!0}),o=Object(n.useRef)(null),u=Object(n.useContext)(H),d=Object(n.useState)(""),m=Object(i.a)(d,2),s=m[0],f=m[1],E=Object(D.a)({accept:["instance","input","textarea","select","datetime","grid"],hover:function(e,a){o.current||f(""),a.isOver({shallow:!0})||f(""),a.getItem().id===t.id&&f("");var n=o.current.getBoundingClientRect(),l=(n.bottom-n.top)/2,r=a.getClientOffset();r||f("");var c=r.y-n.top;f(c>l?" drop-over-downward":" drop-over-upward")},collect:function(e){return console.log(t.id),{isOver:e.isOver({shallow:!0})}},drop:function(e,a){if(o.current&&a.isOver({shallow:!0})){var n=null,l=o.current.getBoundingClientRect(),r=(l.bottom-l.top)/2,c=a.getClientOffset();if(c)n=c.y-l.top>r?"down":"up","instance"===e.type?u({type:"MOVE",dragItemId:a.getItem().id,position:n,dropItemId:t.id}):u({type:"NOOB",position:n,dropItemId:t.id,dragItem:O(e.type)})}}}),v=Object(i.a)(E,2),b=v[0].isOver,g=v[1],y=Object(p.a)({item:{type:"instance",id:t.id,index:a},collect:function(e){return{isDragging:!!e.isDragging()}},begin:function(e){console.log(e),u({type:"ACTIVE",id:t.id})}}),h=Object(i.a)(y,2),j=h[0].isDragging;(0,h[1])(g(o));var x=Object(n.useContext)(I);return l.a.createElement("div",{ref:o,style:{opacity:j?"0.5":1},className:"instance"+(t.active?" active":"")+(b?s:""),onClick:function(e){e.stopPropagation(),u({type:"ACTIVE",id:t.id}),u({type:"EDIT",id:t.id})}},"input"===t.type?l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{element:c,dispatch:x,layout:r})):"textarea"===t.type?l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{element:c,dispatch:x})):"grid"===t.type?l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{element:c})):"select"===t.type?l.a.createElement(l.a.Fragment,null,l.a.createElement(T,{cellData:c,dispatch:x})):"datetime"===t.type?l.a.createElement(R,{data:c,dispatch:x}):l.a.createElement(l.a.Fragment,null))},B=a(18),U=[{name:"\u57fa\u7840\u5b57\u6bb5",widgets:[{type:"input",icon:l.a.createElement(B.e,null),name:"\u5355\u884c\u6587\u672c",enable:!0},{type:"textarea",icon:l.a.createElement(B.e,null),name:"\u591a\u884c\u6587\u672c",enable:!0},{type:"select",icon:l.a.createElement(B.d,null),name:"\u4e0b\u62c9\u9009\u62e9",enable:!0},{type:"datetime",icon:l.a.createElement(B.a,null),name:"\u65e5\u671f\u65f6\u95f4",enable:!0},{type:"tree",icon:l.a.createElement(B.d,null),name:"\u7ea7\u8054\u9009\u62e9",enable:!1},{type:"checkbox",icon:l.a.createElement(B.b,null),name:"\u591a\u9009",enable:!0},{type:"checkbox",icon:l.a.createElement(B.b,null),name:"\u5355\u9009",enable:!0}]},{name:"\u9ad8\u7ea7\u5b57\u6bb5",widgets:[{type:"grid",icon:l.a.createElement(B.h,null),name:"\u5e03\u5c40",enable:!0},{type:"list",icon:l.a.createElement(B.g,null),name:"\u5217\u8868",enable:!0},{type:"separator",icon:l.a.createElement(B.f,null),name:"\u5206\u5272\u7ebf",enable:!1},{type:"tab",icon:l.a.createElement(B.c,null),name:"\u6807\u7b7e\u9875",enable:!1}]}],J=o.a.Sider,M=o.a.Content,P=o.a.Header,W={type:"grid",id:"11270307",lanes:[{span:100,cellDataList:[]}],active:!1},H=l.a.createContext(null),$=function(){var e,t=Object(n.useReducer)(y,W),a=Object(i.a)(t,2),r=a[0],c=a[1],p=Object(n.useCallback)((function(e){46===e.keyCode&&c({type:"DELETE_ACTIVE"})}),[]);return Object(n.useEffect)((function(){return document.addEventListener("keyup",p,!1),function(){document.removeEventListener("keyup",p,!1)}}),[p]),l.a.createElement(l.a.Fragment,null,l.a.createElement(H.Provider,{value:c},l.a.createElement(m.a,{backend:s.a},l.a.createElement(o.a,{className:"layout"},l.a.createElement(J,{width:280,className:"left"},U.map((function(e){return l.a.createElement(n.Fragment,{key:e.name},l.a.createElement("div",{style:{color:"white"}},e.name),l.a.createElement("ul",{className:"panel"},e.widgets.map((function(e){return l.a.createElement(f,{key:e.name,widget:e})}))))}))),l.a.createElement(M,null,l.a.createElement(o.a,{style:{height:"100%"}},l.a.createElement(P,{style:{padding:0,textAlign:"right"}},l.a.createElement(u.a,null,l.a.createElement(d.a,null,"\u6e05\u7a7a"),l.a.createElement(d.a,null,"\u9884\u89c8"),l.a.createElement(d.a,null,"\u4fdd\u5b58"))),l.a.createElement(M,{className:"form",style:{height:"100%"}},l.a.createElement(_,{cellData:r,index:0})))),l.a.createElement(J,{width:280,className:"right"},null===(e=function(e){var t=v(e,(function(e){return e.active}));return t?t[2]:null}(r))||void 0===e?void 0:e.id)))))};var z=function(){return l.a.createElement($,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.39a27615.chunk.js.map