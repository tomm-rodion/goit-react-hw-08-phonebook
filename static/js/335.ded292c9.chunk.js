"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[335],{3246:function(e,r,n){n.d(r,{$m:function(){return f},Bt:function(){return m},NO:function(){return h},Ye:function(){return p}});var o,i,a,d,t=n(168),s=n(225),l=n(3874),u=n(8571),c=n(7761),h=s.Z.div(o||(o=(0,t.Z)(["\n  display: grid;\n  place-items: center;\n  padding: 40px;\n  border-radius: 8px;\n  background-color: #ededf2;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n"]))),m=s.Z.form(i||(i=(0,t.Z)(["\n  ","\n"])),(0,c.d3)()),p=(0,s.Z)(l.Z)(a||(a=(0,t.Z)(["\n  border-bottom: 3px solid #10567b;\n  border-radius: 5px;\n"]))),f=(0,s.Z)(u.Z)(d||(d=(0,t.Z)(["\n  ","\n  background-color:#f2f5f7;\n  color: #10567b;\n  border: 1px solid #10567b;\n  padding: 10px 0;\n  font-size: 20px;\n  &:hover {\n    background-color: #dadddc;\n    color: #10567b;\n    scale: 1.1;\n  }\n"])),c.yY)},8335:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var o,i=n(9434),a=n(9273),d=n(1686),t=n.n(d),s=n(3246),l=n(7417),u=n(5705),c=n(184),h=function(){var e=(0,i.I0)();var r=(0,u.TA)({initialValues:{email:"",password:""},validationSchema:l.yc,onSubmit:function(r,n){var o=n.resetForm;e((0,a.Ib)({email:r.email,password:r.password})).unwrap().then((function(){return t().Notify.success("You have successfully logged in")})).catch((function(){return t().Notify.failure("Oops Something went wrong. Reload the page or check the fields: email, password!")})),o()}});return(0,c.jsxs)(s.Bt,{onSubmit:r.handleSubmit,children:[(0,c.jsx)(s.Ye,{required:!0,autoComplete:"off",fullWidth:!0,id:"email",name:"email",label:"Email",placeholder:"jacob12345@mail.com",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email}),(0,c.jsx)(s.Ye,{required:!0,autoComplete:"off",fullWidth:!0,id:"password",name:"password",label:"Password",placeholder:"Jacob123",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password}),(0,c.jsx)(s.$m,{fullWidth:!0,type:"submit",children:"Login"})]})},m=n(4270),p=n(168),f=n(225).Z.div(o||(o=(0,p.Z)(["\n  display: grid;\n  place-items: center;\n  padding: 40px;\n  border-radius: 8px;\n  background-color: #ededf2;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n"]))),g=function(){return(0,c.jsxs)(f,{children:[(0,c.jsx)(m.q,{children:(0,c.jsx)("title",{children:"Login"})}),(0,c.jsx)(h,{})]})}},7417:function(e,r,n){n.d(r,{fK:function(){return t},mS:function(){return a},yc:function(){return d}});var o=n(6727),i=n(184),a=o.Ry().shape({name:o.Z_("Name may contain only letters, apostrophe, dash and spaces.").required("This field is required"),email:o.Z_("Enter your email").email("Enter a valid email").required("This field is required"),password:o.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("This field is required")}),d=o.Ry().shape({email:o.Z_("Enter your email").email("Enter a valid email").required("This field is required"),password:o.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("This field is required")}),t=o.Ry().shape({name:o.Z_().min(2,"Too Short!").max(15,"Too Long!").required(),number:o.Z_().min(2,(0,i.jsx)("em",{children:"Too Short!"})).max(15,(0,i.jsx)("em",{children:"Too Long!"})).matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,(0,i.jsx)("em",{children:"Phone number is not valid"})).required()})}}]);
//# sourceMappingURL=335.ded292c9.chunk.js.map