"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[236],{8236:function(e,r,a){a.r(r),a.d(r,{default:function(){return Z}});var o,n,i,s=a(168),l=a(7417),d=a(9434),t=a(1686),u=a.n(t),m=a(8571),h=a(3874),c=a(5705),p=a(225),f=a(9273),x=a(184),w=p.Z.form(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),b=(0,p.Z)(h.Z)(n||(n=(0,s.Z)(["\n  border-bottom: 3px solid #2dcf2d;\n  border-radius: 5px;\n"]))),g=(0,p.Z)(m.Z)(i||(i=(0,s.Z)(["\n  color: #2dcf2d;\n  border: 1px solid #2dcf2d;\n  padding: 10px 0;\n  font-size: 20px;\n"])));function v(){var e=(0,d.I0)();var r=(0,c.TA)({initialValues:{name:"",email:"",password:""},validationSchema:l.mS,onSubmit:function(r,a){var o=a.resetForm;e((0,f.z2)({name:r.name,email:r.email,password:r.password})).unwrap().then((function(){return u().Notify.success("You have successfully registered")})).catch((function(){return u().Notify.failure("Something went wrong. Reload the page or enter another email...")})),o()}});return(0,x.jsxs)(w,{onSubmit:r.handleSubmit,children:[(0,x.jsx)(b,{required:!0,autoComplete:"off",fullWidth:!0,id:"name",name:"name",label:"Name",placeholder:"Jacob",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name}),(0,x.jsx)(b,{required:!0,autoComplete:"off",fullWidth:!0,id:"email",name:"email",label:"Email",placeholder:"jacob12345@mail.com",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email}),(0,x.jsx)(b,{required:!0,autoComplete:"off",fullWidth:!0,id:"password",name:"password",label:"Password",placeholder:"Jacob123",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password}),(0,x.jsx)(g,{fullWidth:!0,type:"submit",children:"Register"})]})}var q=a(4270);function Z(){return(0,x.jsxs)("div",{children:[(0,x.jsx)(q.q,{children:(0,x.jsx)("title",{children:"Registration"})}),(0,x.jsx)(v,{})]})}},7417:function(e,r,a){a.d(r,{fK:function(){return s},mS:function(){return i}});var o=a(6727),n=a(184),i=o.Ry().shape({name:o.Z_("Name may contain only letters, apostrophe, dash and spaces.").required("This field is required"),email:o.Z_("Enter your email").email("Enter a valid email").required("This field is required"),password:o.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("This field is required")}),s=(o.Ry().shape({email:o.Z_("Enter your email").email("Enter a valid email").required("This field is required"),password:o.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("This field is required")}),o.Ry().shape({name:o.Z_().min(2,"Too Short!").max(15,"Too Long!").required(),number:o.Z_().min(2,(0,n.jsx)("em",{children:"Too Short!"})).max(15,(0,n.jsx)("em",{children:"Too Long!"})).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,(0,n.jsx)("em",{children:"Phone number is not valid"})).required()}))}}]);
//# sourceMappingURL=236.341a99d5.chunk.js.map