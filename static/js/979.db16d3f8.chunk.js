"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[979],{377:function(e,t,n){n.d(t,{Y:function(){return o}});var a="a2e5f58044c38f804a49ba727f68bccf",r=n(243).Z.create({baseURL:"https://api.themoviedb.org",headers:{"Content-Type":"application/json"},params:{api_key:a,language:"en-US"}}),o=function(e){try{return r.get("/".concat(e))}catch(t){console.log(t)}};t.Z=a},979:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(439),r=n(689),o=n(87),c=n(692),u=n(433),i=n(791),s=n(377),l=function(){var e,t=(0,i.useState)(1),n=(0,a.Z)(t,2),r=n[0],c=n[1],l=(0,i.useState)(!1),f=(0,a.Z)(l,2),p=f[0],h=f[1],m=(0,o.lr)(),d=(0,a.Z)(m,2),g=d[0],_=d[1],v=null!==(e=g.get("query"))&&void 0!==e?e:"",b="3/search/movie?&query=".concat(v,"&page=").concat(r,"&include_adult=false"),x=(0,i.useState)([]),j=(0,a.Z)(x,2),y=j[0],Z=j[1];return(0,i.useEffect)((function(){""!==v.trim()&&(0,s.Y)(b).then((function(e){var t=e.data,n=t.page,a=t.results,r=t.total_pages;Z((function(e){return[].concat((0,u.Z)(e),(0,u.Z)(a))})),c(n),r>n&&h(!0)})).catch((function(e){console.log(e.message)}))}),[b,v,r]),[y,function(e){e.preventDefault();var t=e.currentTarget.elements.input.value;if(!t)return _({});_({query:t})},p,function(){c((function(e){return e+1}))}]},f="MoviePage_form__upAlp",p="MoviePage_button__QVK0-",h="MoviePage_input__yt7tF",m=n(184),d=function(){var e=l(),t=(0,a.Z)(e,4),n=t[0],u=t[1],i=t[2],s=t[3],d=(0,r.TH)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:f,onSubmit:u,children:[(0,m.jsx)("button",{className:p,type:"submit",children:(0,m.jsx)(c.Goc,{size:"20px"})}),(0,m.jsx)("input",{className:h,name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]}),(0,m.jsx)("ul",{children:n.length>0&&n.map((function(e){var t=e.original_title,n=e.id;return(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"".concat(n),state:{from:d},children:(0,m.jsx)("span",{children:t})})},n)}))}),i&&(0,m.jsx)("button",{type:"button",onClick:s,children:"Load More"})]})}}}]);
//# sourceMappingURL=979.db16d3f8.chunk.js.map