"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[240],{5240:function(n,e,r){r.r(e),r.d(e,{default:function(){return an}});var t,i,o,a=r(2791),u=r(9434),c=r(168),l=r(225),s=r(7761),d=l.Z.li(t||(t=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),f=l.Z.span(i||(i=(0,c.Z)(["\n  padding-right: 8px;\n"]))),p=l.Z.button(o||(o=(0,c.Z)(["\n  ",";\n  ",";\n  padding: 5px 10px;\n  margin: 10px 0px;\n"])),(0,s.LZ)({fs:14,fw:400,lh:18}),s.yY),m=r(3634),h=r(184),x=function(n){var e=n.id,r=n.name,t=n.number,i=(0,u.I0)();return(0,h.jsxs)(d,{children:[(0,h.jsxs)(f,{children:[r," : ",t]}),(0,h.jsx)(p,{type:"button",onClick:function(){return i((0,m.CZ)(e))},children:"Delete contact"})]})},g="NOT_FOUND";var v=function(n,e){return n===e};function y(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,i=void 0===t?v:t,o=r.maxSize,a=void 0===o?1:o,u=r.resultEqualityCheck,c=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,i=0;i<t;i++)if(!n(e[i],r[i]))return!1;return!0}}(i),l=1===a?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:g},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var i=r[t];return t>0&&(r.splice(t,1),r.unshift(i)),i.value}return g}return{get:t,put:function(e,i){t(e)===g&&(r.unshift({key:e,value:i}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,c);function s(){var e=l.get(arguments);if(e===g){if(e=n.apply(null,arguments),u){var r=l.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function b(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function j(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var i=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},c=t.pop();if("object"===typeof c&&(u=c,c=t.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,d=void 0===s?r:s,f=Array.isArray(d)?d:[d],p=b(t),m=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),h=n((function(){for(var n=[],e=p.length,r=0;r<e;r++)n.push(p[r].apply(null,arguments));return o=m.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return i}var Z,w,k,C,q,_,E,L,N,S,T=j(y),F=function(n){return n.contacts.items},A=function(n){return n.filter},R=function(n){return n.contacts.isLoading},O=function(n){return n.contacts.error},I=T([F,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.trim().toLowerCase())}))})),z=function(){var n=(0,u.v9)(I);return(0,h.jsx)("ul",{children:n.map((function(n){var e=n.name,r=n.number,t=n.id;return(0,h.jsx)(x,{name:e,id:t,number:r},t)}))})},P=r(7635),Y=r(4270),D=r(5705),K={name:"",number:""},J=(0,l.Z)(D.l0)(Z||(Z=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),U=(0,l.Z)(D.gN)(w||(w=(0,c.Z)(["\n  border: 0;\n  outline: 1px solid #08215a;\n  border-radius: 3px;\n  min-width: 130px;\n  height: 20px;\n  margin: 8px;\n  &:last-child {\n    padding-left: 5px;\n  }\n"]))),V=l.Z.label(k||(k=(0,c.Z)(["\n  display: block;\n  color: #f51616;\n"]))),W=l.Z.button(C||(C=(0,c.Z)(["\n  ","\n  padding: 10px 25px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n"])),s.yY),$=r(1686),B=r.n($),G=r(7417),H=function(){var n=(0,u.I0)(),e=(0,u.v9)(F),r=function(n){return e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))},t=function(e){r(e)?(B().Notify.warning("".concat(e.name," is already in contacts."),{timeout:5e3,distance:"60px"}),function(e){B().Confirm.prompt("Rename a contact","Rename the contact you want to create!","","Answer","Cancel",(function(t){r({name:t})?B().Notify.warning("What you do? Name : ".concat(t," already exists !!!.\ud83d\ude35 "),{timeout:5e3,distance:"60px"}):n((0,m.el)({name:t,number:e.number}))}))}(e)):n((0,m.el)(e))};return(0,h.jsx)(D.J9,{initialValues:K,validationSchema:G.fK,onSubmit:function(n,e){var r=e.resetForm;t(n),r()},children:function(n){var e=n.errors,r=n.touched;return(0,h.jsxs)(J,{children:[(0,h.jsxs)(V,{htmlFor:"name",children:["Name",r.name&&e.name&&(0,h.jsx)("div",{children:e.name}),(0,h.jsx)(U,{type:"text",name:"name",placeholder:"First Name"})]}),(0,h.jsxs)(V,{htmlFor:"number",children:["Number",r.number&&e.number&&(0,h.jsx)("div",{children:e.number}),(0,h.jsx)(U,{type:"text",name:"number",placeholder:"Number tel:"})]}),(0,h.jsx)(W,{type:"submit",children:"Add contact"})]})}})},M=r(4808),Q=l.Z.label(q||(q=(0,c.Z)(["\n  display: block;\n  color: #f51616;\n  ",";\n  margin-right: 5px;\n  margin-bottom: 10px;\n"])),s.LZ),X=l.Z.input(_||(_=(0,c.Z)(["\n  border: 0;\n  outline: 1px solid #08215a;\n  border-radius: 3px;\n  height: 20px;\n  ",";\n  padding: 5px;\n  margin-bottom: 10px;\n"])),s.LZ),nn=function(){var n=(0,u.v9)(A),e=(0,u.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Q,{htmlFor:"filter",children:"Search contact by name"}),(0,h.jsx)(X,{type:"text",placeholder:"Name",autoComplete:"off",name:"filter",value:n,onChange:function(n){var r=n.target.value;return e((0,M.T)(r))}})]})},en=l.Z.div(E||(E=(0,c.Z)(["\n  padding: 25px;\n  margin: 20px auto;\n  min-width: 340px;\n  max-width: fit-content;\n  border-radius: 8px;\n  background-color: #e5e5e5;\n"]))),rn=l.Z.div(L||(L=(0,c.Z)(["\n  width: auto;\n  padding: 10px;\n  border: 1px solid #ffffff;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  background-color: #d4d7df;\n  &:first-of-type {\n    margin-bottom: 15px;\n  }\n"]))),tn=l.Z.h1(N||(N=(0,c.Z)(["\n  text-align: center;\n  margin: 0;\n  ","\n  ",";\n  margin-bottom: 20px;\n"])),(0,s.LZ)({fs:60,fw:700}),(0,s.nS)()),on=l.Z.h2(S||(S=(0,c.Z)(["\n  text-align: center;\n  margin: 20px auto;\n  ","\n  ",";\n  margin-bottom: 20px;\n"])),(0,s.LZ)({fs:30,fw:600,lh:30}),(0,s.nS)()),an=function(){var n=(0,u.I0)(),e=(0,u.v9)(R),r=(0,u.v9)(F),t=(0,u.v9)(O);return(0,a.useEffect)((function(){n((0,m.yF)())}),[n]),(0,h.jsxs)("div",{children:[t&&(0,h.jsx)("p",{children:"Something went wrong, please reload the page!"}),e&&!t&&(0,h.jsx)(P.Z,{color:"#36d7b7",height:20,cssOverride:{display:"block",margin:"0 auto"}}),!t&&(0,h.jsxs)(en,{children:[(0,h.jsxs)(rn,{children:[(0,h.jsx)(tn,{children:"Phonebook"}),(0,h.jsx)(H,{})]}),(0,h.jsxs)(rn,{children:[(0,h.jsx)(on,{children:"Contacts"}),0===r.length&&!t&&(0,h.jsx)("p",{children:"Your contact list is empty yet..."}),r.length>1&&(0,h.jsx)(nn,{}),(0,h.jsx)(z,{})]})]}),(0,h.jsx)(Y.q,{children:(0,h.jsx)("title",{children:"Your Contacts"})})]})}},7417:function(n,e,r){r.d(e,{fK:function(){return u},mS:function(){return o},yc:function(){return a}});var t=r(6727),i=r(184),o=t.Ry().shape({name:t.Z_("Name may contain only letters, apostrophe, dash and spaces.").required("This field is required"),email:t.Z_("Enter your email").email("Enter a valid email").required("This field is required"),password:t.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("This field is required")}),a=t.Ry().shape({email:t.Z_("Enter your email").email("Enter a valid email").required("This field is required"),password:t.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("This field is required")}),u=t.Ry().shape({name:t.Z_().min(2,"Too Short!").max(15,"Too Long!").required(),number:t.Z_().min(2,(0,i.jsx)("em",{children:"Too Short!"})).max(15,(0,i.jsx)("em",{children:"Too Long!"})).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,(0,i.jsx)("em",{children:"Phone number is not valid"})).required()})}}]);
//# sourceMappingURL=240.d2e7ffd1.chunk.js.map