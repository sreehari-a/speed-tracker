"use strict";(self.webpackChunkspeed_tracker=self.webpackChunkspeed_tracker||[]).push([[7],{7007:function(e,r,a){a.r(r),a.d(r,{HomePage:function(){return k},default:function(){return w}});var n=a(4942),t=a(1413),i=a(9439),l=a(1582),o=a(7124),d=a(8277),s=a(2791),c=a(696);var u=a(364),m=a(7781),h=a(873),x=a(9698),p=a(5115);var v=a(753),f=a(184);var j=(0,h.zB)({loading:(0,p.N)()}),g=(0,u.$j)(j),b=(0,c.Z)((0,m.qC)(g,s.memo)((function(e){var r=e.classes,a=e.loaderText,n=e.loading;return(0,x.v)({key:"loader",reducer:v.Z}),(0,f.jsxs)(f.Fragment,{children:[n&&a&&(0,f.jsx)("div",{className:r.loaderText,children:a}),(0,f.jsx)("div",{className:r.container,children:n&&(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)("div",{})})})})})})})})})})]})})),(function(){return{container:{"& div":{border:"18px groove rebeccapurple",display:"table-cell",borderRadius:"999px",animation:"$spin 15s linear infinite"},display:"flex",justifyContent:"center"},"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},loaderText:{textAlign:"center"}}})),y=a(8472);var C=(0,c.Z)((function(e){var r=e.data,a=(r=void 0===r?{}:r).headers,n=r.rowData,t=e.classes;return(0,f.jsxs)("div",{className:t.container,children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("tr",{children:null===a||void 0===a?void 0:a.map((function(e){var r=e.label;return(0,f.jsx)("th",{children:r})}))}),null===n||void 0===n?void 0:n.map((function(e){return(0,f.jsx)("tr",{children:null===a||void 0===a?void 0:a.map((function(r){var a=r.key;return(0,f.jsx)("td",{children:e[a]})}))})}))]}),(0,f.jsx)("div",{className:t.formItem,children:(0,f.jsx)(y.CSVLink,{data:n,filename:"performance-data",headers:a,children:(0,f.jsx)(d.Z,{children:"Download Excel"})})})]})}),(function(e){return{container:{"& table":{fontFamily:"arial, sans-serif",borderCollapse:"collapse",width:"90%",margin:"auto"},"& td,th":{border:"1px solid ".concat(e.primary),textAlign:"left",padding:"8px"}},formItem:{margin:"0.625rem",display:"flex",justifyContent:"center"}}}));function k(e){var r=e.classes,a=e.performance,c=e.getPerformance,u=e.loading,m=e.resetTable,h=(0,s.useState)({}),x=(0,i.Z)(h,2),p=x[0],v=x[1],j=(a||{}).rowData,g=function(e){var r=e.target,a=(r=void 0===r?{}:r).id,i=void 0===a?"":a,l=r.value,o=void 0===l?"":l,d=(0,t.Z)((0,t.Z)({},p),{},(0,n.Z)({},i,o));i&&v(d)};return(0,f.jsxs)("div",{className:r.formWrapper,children:[(0,f.jsx)("div",{className:"".concat(r.aboutText," caligraphy"),children:"Runs performance audits and analyses the result"}),!u&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:r.formItem,children:[(0,f.jsx)("div",{className:r.label,children:"Google API Key"}),(0,f.jsx)(l.Z,{id:"url",placeholder:"Enter Google API Key with enabled PageSpeedInsights API",value:p.url,onChange:g})]}),(0,f.jsxs)("div",{className:r.formItem,children:[(0,f.jsx)("div",{className:r.label,children:"URL(s)"}),(0,f.jsx)(l.Z,{id:"url",placeholder:"Enter url or multiple urls separated by comma",value:p.url,onChange:g})]}),(0,f.jsxs)("div",{className:r.formItem,children:[(0,f.jsx)("div",{className:r.label,children:"No. of samples to be taken"}),(0,f.jsx)(o.Z,{id:"iterationCount",placeholder:"Enter no. of samples of each url to be analyzed defaults to 5 to a max of 10",value:p.iterationCount,onChange:function(e){g({target:{id:"iterationCount",value:e}})},min:1,max:10})]}),(0,f.jsx)("div",{className:r.formItem,children:(0,f.jsx)(d.Z,{onClick:function(){var e;null===m||void 0===m||m();var r=null===(e=p.url)||void 0===e?void 0:e.split(",");null===r||void 0===r||r.forEach((function(e){c({API_KEY:p.API_KEY,url:e,iterationCount:p.iterationCount||5})}))},children:"Get Performance Data"})})]}),j.length&&!u&&(0,f.jsx)(C,{data:a}),(0,f.jsx)(b,{loaderText:"Please wait while we analyze your page......"})]})}var w=(0,c.Z)(k,(function(e){return{container:{width:"100%",color:e.textColor},formWrapper:{width:"100%","& .ant-input,.ant-input-number":{width:"35rem",lineHeight:"2rem",borderRadius:"3px","&:hover,:focus":{borderColor:e.primaryDark},"&::placeholder":{color:"#7c2424"},background:"transparent",border:"1px solid ".concat(e.primary)},"& .ant-input-number-input::placeholder":{color:"#7c2424"},"& .ant-collapse-header.ant-collapse-header":{alignItems:"center","& .ant-input":{width:"auto"}},"& .ant-btn":{background:e.primary,color:"#fff","&:hover":{background:e.primaryDark}}},formItem:{margin:"0.625rem",display:"flex",flexDirection:"column",alignItems:"center"},aboutText:{color:e.primary,textAlign:"center",fontSize:"20px"},label:{width:"35rem"}}}))}}]);
//# sourceMappingURL=7.40486df3.chunk.js.map