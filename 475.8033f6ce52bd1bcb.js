"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[475],{4475:(T,m,u)=>{u.r(m),u.d(m,{DocsModule:()=>L});var d=u(9808),Z=u(2382),n=u(1725),f=u(1728),U=u(7642),p=u(2619);function l(o,s,e,c,i,r,g){try{var _=o[r](g),a=_.value}catch(M){return void e(M)}_.done?s(a):Promise.resolve(a).then(c,i)}var t=u(4893),A=u(520);function D(o,s){if(1&o&&(t.TgZ(0,"tr"),t._uU(1,"\n              "),t.TgZ(2,"th",10),t._uU(3,"1"),t.qZA(),t._uU(4,"\n              "),t.TgZ(5,"td"),t._uU(6),t.qZA(),t._uU(7,"\n              "),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"date"),t.qZA(),t._uU(11,"\n              "),t.TgZ(12,"td"),t._uU(13,"@mdo"),t.qZA(),t._uU(14,"\n            "),t.qZA()),2&o){const e=s.$implicit;t.xp6(6),t.Oqu(e.Key),t.xp6(3),t.Oqu(t.lcZ(10,2,e.LastModified))}}const v=[{path:"",data:{title:"Docs"},children:[{path:"",redirectTo:"list"},{path:"list",component:(()=>{class o{constructor(e){this.http=e,this.docsList=[]}ngOnInit(){this.getList()}onFileSelected(e){this.selectedFile=e.target.files[0]}onUpload(){var e=this;return function h(o){return function(){var s=this,e=arguments;return new Promise(function(c,i){var r=o.apply(s,e);function g(a){l(r,c,i,g,_,"next",a)}function _(a){l(r,c,i,g,_,"throw",a)}g(void 0)})}}(function*(){var c;e.http.get("https://cnsmzwycy43jf7c6egulpxvtxm0xtdxc.lambda-url.ap-south-1.on.aws?getSingedUrl="+(null===(c=e.selectedFile)||void 0===c?void 0:c.name),{responseType:"text"}).subscribe(i=>{console.log("2. PreSignedURL: ",i),console.log("3. Upoloading File (binary) to S3"),e.http.put(i,e.selectedFile).subscribe(r=>{console.log("=> ",r)})})})()}getList(){this.http.get("https://cnsmzwycy43jf7c6egulpxvtxm0xtdxc.lambda-url.ap-south-1.on.aws").subscribe(e=>{this.docsList=e.S3Objects})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-docs-list"]],decls:57,vars:1,consts:[["xs","12"],[1,"mb-4"],[1,"mb-3"],["cLabel","","for","formFile"],["cFormControl","","id","formFile","type","file",3,"change"],[1,"col-auto"],["cButton","","type","submit",1,"mb-3",3,"click"],["cTable",""],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(e,c){1&e&&(t.TgZ(0,"c-row"),t._uU(1,"\n  \n  "),t.TgZ(2,"c-col",0),t._uU(3,"\n    "),t.TgZ(4,"c-card",1),t._uU(5,"\n      "),t.TgZ(6,"c-card-header"),t._uU(7,"\n        "),t.TgZ(8,"strong"),t._uU(9,"Documnets List"),t.qZA(),t._uU(10,"\n\n        "),t.TgZ(11,"div",2),t._uU(12,"\n          "),t.TgZ(13,"label",3),t._uU(14,"Default file input example"),t.qZA(),t._uU(15,"\n          "),t.TgZ(16,"input",4),t.NdJ("change",function(r){return c.onFileSelected(r)}),t.qZA(),t._uU(17,"\n        "),t.qZA(),t._uU(18,"\n        "),t.TgZ(19,"div",5),t._uU(20,"\n          "),t.TgZ(21,"button",6),t.NdJ("click",function(){return c.onUpload()}),t._uU(22," Upload to S3 "),t.qZA(),t._uU(23,"  \n        "),t.qZA(),t._uU(24,"\n \n      "),t.qZA(),t._uU(25,"\n      "),t.TgZ(26,"c-card-body"),t._uU(27,"\n       \n           "),t.TgZ(28,"table",7),t._uU(29,"\n            "),t.TgZ(30,"thead"),t._uU(31,"\n            "),t.TgZ(32,"tr"),t._uU(33,"\n              "),t.TgZ(34,"th",8),t._uU(35,"#"),t.qZA(),t._uU(36,"\n              "),t.TgZ(37,"th",8),t._uU(38,"File Name"),t.qZA(),t._uU(39,"\n              "),t.TgZ(40,"th",8),t._uU(41,"Updated On"),t.qZA(),t._uU(42,"\n              "),t.TgZ(43,"th",8),t._uU(44,"Heading"),t.qZA(),t._uU(45,"\n            "),t.qZA(),t._uU(46,"\n            "),t.qZA(),t._uU(47,"\n            "),t.TgZ(48,"tbody"),t._uU(49,"\n            "),t.YNc(50,D,15,4,"tr",9),t._uU(51,"\n           \n            "),t.qZA(),t._uU(52,"\n          "),t.qZA(),t._uU(53," \n      "),t.qZA(),t._uU(54,"\n    "),t.qZA(),t._uU(55,"\n  "),t.qZA(),t._uU(56," \n"),t.qZA()),2&e&&(t.xp6(50),t.Q6J("ngForOf",c.docsList))},directives:[n.iok,n.Yp0,n.AkF,n.nkx,n.eFW,n.oHf,n.Hq3,n.yue,n.auY,d.sg],pipes:[d.uU],styles:[""]}),o})(),data:{title:"Docs"}}]}];let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(v)],p.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,y,n.fxp,n.TXv,n.wHA,n.hJ1,n.dTQ,n.fwJ,n.zE6,n.gzQ,n.m81,n.Xo8,f.QX,n.Xo8,n.QqW,n.qek,n.Fme,n.P4_,n.dGk,n.z8t,n.bBg,n.ejP,Z.UX,n.kWm,n.u3b,n.UUf,n.U$I,U.E]]}),o})()},7642:(T,m,u)=>{u.d(m,{E:()=>p});var d=u(9808),Z=u(2619),n=u(1725),f=u(1728),U=u(4893);let p=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=U.oAB({type:l}),l.\u0275inj=U.cJS({imports:[[d.ez,n.dGk,f.QX,Z.Bz,n.P4_,n.gzQ,n.dfc]]}),l})()}}]);