"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[143],{1445:(J,v,i)=>{i.d(v,{Z:()=>t});const t=(Z,m=document.body)=>{let p;return p=(Z=>Z.match(/^--.*/i))(Z)&&Boolean(document.documentMode)&&document.documentMode>=10?(()=>{const Z={},m=document.styleSheets;let p="";for(let c=m.length-1;c>-1;c--){const _=m[c].cssRules;for(let u=_.length-1;u>-1;u--)if(".ie-custom-properties"===_[u].selectorText){p=_[u].cssText;break}if(p)break}return p=p.substring(p.lastIndexOf("{")+1,p.lastIndexOf("}")),p.split(";").forEach(c=>{if(c){const _=c.split(": ")[0],u=c.split(": ")[1];_&&u&&(Z[`--${_.trim()}`]=u.trim())}}),Z})()[Z]:window.getComputedStyle(m,null).getPropertyValue(Z).replace(/^\s/,""),p}},8747:(J,v,i)=>{i.d(v,{O:()=>Z});var o=i(4893),e=i(1725),d=i(9808),b=i(1728),C=i(5093);function w(m,p){if(1&m&&(o.O4$(),o.kcU(),o.ynx(0),o.TgZ(1,"c-chart",5,6),o._uU(3),o.qZA(),o.BQk()),2&m){const c=o.MAs(2),_=o.oxw().$implicit,u=o.oxw();o.xp6(1),o.Q6J("data",_.data)("options",u.chartOptions),o.xp6(2),o.Oqu(c.id)}}function t(m,p){if(1&m&&(o.TgZ(0,"c-col",1)(1,"c-widget-stat-d",2),o.O4$(),o._UZ(2,"svg",3),o.YNc(3,w,4,3,"ng-container",4),o.qZA()()),2&m){const c=p.$implicit,_=o.oxw();let u,x;o.xp6(1),o.Akn(null!==(u=c.capBg)&&void 0!==u?u:null),o.Q6J("color",null!==(x=c.color)&&void 0!==x?x:"")("values",c.values),o.xp6(1),o.Q6J("name",c.icon),o.xp6(1),o.Q6J("ngIf",_.withCharts)}}let Z=(()=>{class m{constructor(c){this.changeDetectorRef=c,this.chartOptions={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.labels=["January","February","March","April","May","June","July"],this.datasets={borderWidth:2,fill:!0},this.colors={backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"},this.brandData=[{icon:"cibFacebook",values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],capBg:{"--cui-card-cap-bg":"#3b5998"},labels:[...this.labels],data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[65,59,84,84,51,55,40],label:"Facebook"}),this.colors)]}},{icon:"cibTwitter",values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],capBg:{"--cui-card-cap-bg":"#00aced"},data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[1,13,9,17,34,41,38],label:"Twitter"}),this.colors)]}},{icon:"cib-linkedin",values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],capBg:{"--cui-card-cap-bg":"#4875b4"},data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[78,81,80,45,34,12,40],label:"LinkedIn"}),this.colors)]}},{icon:"cilCalendar",values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}],color:"warning",data:{labels:[...this.labels],datasets:[Object.assign(Object.assign(Object.assign({},this.datasets),{data:[35,23,56,22,97,23,64],label:"Events"}),this.colors)]}}]}capStyle(c){return c?{"--cui-card-cap-bg":c}:{}}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return m.\u0275fac=function(c){return new(c||m)(o.Y36(o.sBO))},m.\u0275cmp=o.Xpm({type:m,selectors:[["app-widgets-brand"]],inputs:{withCharts:"withCharts"},decls:2,vars:1,consts:[["sm","6","xl","3",4,"ngFor","ngForOf"],["sm","6","xl","3"],[1,"mb-4",3,"color","values"],["cIcon","","height","52",1,"my-4","text-white",3,"name"],[4,"ngIf"],["type","line",1,"position-absolute","w-100","h-100",3,"data","options"],["chart","cChart"]],template:function(c,_){1&c&&(o.TgZ(0,"c-row"),o.YNc(1,t,4,6,"c-col",0),o.qZA()),2&c&&(o.xp6(1),o.Q6J("ngForOf",_.brandData))},directives:[e.iok,d.sg,e.Yp0,e.efQ,b.ar,d.O5,C.d],styles:[""]}),m})()},5792:(J,v,i)=>{i.d(v,{c:()=>D});var o=i(1445),e=i(4893),d=i(1725),b=i(1728),C=i(2619),w=i(5093);function t(s,h){1&s&&(e._uU(0,"\n        26K\n        "),e.TgZ(1,"span",8),e._uU(2,"\n          (-12.4% "),e.O4$(),e._UZ(3,"svg",9),e._uU(4,")\n        "),e.qZA(),e._uU(5,"\n      "))}function Z(s,h){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li"),e._UZ(14,"hr",15),e.qZA(),e.TgZ(15,"li")(16,"button",16),e._uU(17,"Separated link"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1))}function m(s,h){if(1&s&&e._UZ(0,"c-chart",17),2&s){const r=e.oxw();e.Q6J("data",r.data[0])("options",r.options[0])}}function p(s,h){1&s&&(e._uU(0,"\n        "),e.TgZ(1,"span"),e._uU(2,"$6.200"),e.qZA(),e._uU(3,"\n        "),e.TgZ(4,"span",8),e._uU(5,"\n          (40.9% "),e.O4$(),e._UZ(6,"svg",18),e._uU(7,")\n        "),e.qZA(),e._uU(8,"\n      "))}function c(s,h){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li")(14,"a",19),e._uU(15,"Disabled"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1),e.xp6(13),e.Q6J("disabled",!0))}function _(s,h){if(1&s&&e._UZ(0,"c-chart",17),2&s){const r=e.oxw();e.Q6J("data",r.data[1])("options",r.options[1])}}function u(s,h){1&s&&(e._uU(0,"\n        "),e.TgZ(1,"span"),e._uU(2,"2.49"),e.qZA(),e._uU(3,"\n        "),e.TgZ(4,"span",8),e._uU(5,"\n          (84.7% "),e.O4$(),e._UZ(6,"svg",18),e._uU(7,")\n        "),e.qZA(),e._uU(8,"\n      "))}function x(s,h){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li")(14,"a",19),e._uU(15,"Disabled"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1),e.xp6(13),e.Q6J("disabled",!0))}function U(s,h){if(1&s&&e._UZ(0,"c-chart",20),2&s){const r=e.oxw();e.Q6J("data",r.data[2])("options",r.options[2])}}function O(s,h){1&s&&(e._uU(0,"\n        "),e.TgZ(1,"span"),e._uU(2,"44K"),e.qZA(),e._uU(3,"\n        "),e.TgZ(4,"span",8),e._uU(5,"\n          (-23.6% "),e.O4$(),e._UZ(6,"svg",9),e._uU(7,")\n        "),e.qZA(),e._uU(8,"\n      "))}function y(s,h){1&s&&(e.TgZ(0,"c-dropdown",10)(1,"button",11),e.O4$(),e._UZ(2,"svg",12),e.qZA(),e.kcU(),e.TgZ(3,"ul",13)(4,"li")(5,"a",14),e._uU(6,"Action"),e.qZA()(),e.TgZ(7,"li")(8,"a",14),e._uU(9,"Another action"),e.qZA()(),e.TgZ(10,"li")(11,"a",14),e._uU(12,"Something else here"),e.qZA()(),e.TgZ(13,"li")(14,"a",19),e._uU(15,"Disabled"),e.qZA()()()()),2&s&&(e.xp6(1),e.Q6J("caret",!1),e.xp6(13),e.Q6J("disabled",!0))}function Q(s,h){if(1&s&&e._UZ(0,"c-chart",21),2&s){const r=e.oxw();e.Q6J("data",r.data[3])("options",r.options[3])}}let D=(()=>{class s{constructor(r){this.changeDetectorRef=r,this.data=[],this.options=[],this.labels=["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],this.datasets=[[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,o.Z)("--cui-primary"),pointHoverBorderColor:(0,o.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}],[{label:"My Second dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,o.Z)("--cui-info"),pointHoverBorderColor:(0,o.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}],[{label:"My Third dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,o.Z)("--cui-warning"),pointHoverBorderColor:(0,o.Z)("--cui-warning"),data:[78,81,80,45,34,12,40],fill:!0}],[{label:"My Fourth dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.7}]],this.optionsDefault={plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}ngOnInit(){this.setData()}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}setData(){for(let r=0;r<4;r++)this.data[r]={labels:r<3?this.labels.slice(0,7):this.labels,datasets:this.datasets[r]};this.setOptions()}setOptions(){for(let r=0;r<4;r++){const f=JSON.parse(JSON.stringify(this.optionsDefault));switch(r){case 0:this.options.push(f);break;case 1:f.scales.y.min=-9,f.scales.y.max=39,this.options.push(f);break;case 2:f.scales.x={display:!1},f.scales.y={display:!1},f.elements.line.borderWidth=2,f.elements.point.radius=0,this.options.push(f);break;case 3:f.scales.x.grid={display:!1,drawTicks:!1},f.scales.x.grid={display:!1,drawTicks:!1,drawBorder:!1},f.scales.y.min=void 0,f.scales.y.max=void 0,f.elements={},this.options.push(f)}}}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(e.sBO))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-widgets-dropdown"]],decls:21,vars:3,consts:[["sm","6","xl","3"],["color","primary","title","Users",1,"mb-4"],["cTemplateId","widgetValueTemplate"],["cTemplateId","widgetActionTemplate"],["cTemplateId","widgetChartTemplate"],["color","info",1,"mb-4",3,"title"],["color","warning",1,"mb-4",3,"title"],["color","danger",1,"mb-4",3,"title"],[1,"fs-6","fw-normal"],["cIcon","","name","cilArrowBottom"],["alignment","end","variant","btn-group"],["cButton","","cDropdownToggle","","color","transparent",1,"p-0",3,"caret"],["cIcon","","name","cilOptions",1,"text-high-emphasis-inverse"],["cDropdownMenu",""],["routerLink","./","cDropdownItem",""],["cDropdownDivider",""],["cDropdownItem",""],["height","70","type","line",1,"mt-3","mx-3",3,"data","options"],["cIcon","","name","cilArrowTop"],["routerLink","./","cDropdownItem","",3,"disabled"],["height","70","type","line",1,"mt-3",3,"data","options"],["height","70","type","bar",1,"mt-3","mx-3",3,"data","options"]],template:function(r,f){1&r&&(e.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-a",1),e.YNc(3,t,6,0,"ng-template",2),e.YNc(4,Z,18,1,"ng-template",3),e.YNc(5,m,1,2,"ng-template",4),e.qZA()(),e.TgZ(6,"c-col",0)(7,"c-widget-stat-a",5),e.YNc(8,p,9,0,"ng-template",2),e.YNc(9,c,16,2,"ng-template",3),e.YNc(10,_,1,2,"ng-template",4),e.qZA()(),e.TgZ(11,"c-col",0)(12,"c-widget-stat-a",6),e.YNc(13,u,9,0,"ng-template",2),e.YNc(14,x,16,2,"ng-template",3),e.YNc(15,U,1,2,"ng-template",4),e.qZA()(),e.TgZ(16,"c-col",0)(17,"c-widget-stat-a",7),e.YNc(18,O,9,0,"ng-template",2),e.YNc(19,y,16,2,"ng-template",3),e.YNc(20,Q,1,2,"ng-template",4),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("title","Income"),e.xp6(5),e.Q6J("title","Conversion Rate"),e.xp6(5),e.Q6J("title","Sessions"))},directives:[d.iok,d.Yp0,d.Eqf,d.y1J,b.ar,d.JOL,d.Hq3,d.RUe,d.bQk,C.yS,d.HH4,d.GY_,w.d],styles:[""]}),s})()},7143:(J,v,i)=>{i.r(v),i.d(v,{WidgetsModule:()=>Tt});var o=i(9808),e=i(1725),d=i(1728),b=i(5093),C=i(7642),w=i(2619),t=i(4893),Z=i(2592),m=i(5792),p=i(1445);let c=(()=>{class a{constructor(l){this.changeDetectorRef=l,this.datasets=[],this.labels=[],this.data=[],this.barOptions={maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.lineOptions={maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},this.prepareLabels(),this.prepareDatasets(),this.prepareData()}get random(){return Math.floor(61*Math.random()+40)}get randomData(){const l=[];for(let g=0;g<15;g++)l.push(this.random);return l}get baseDatasets(){return[{data:this.randomData,barThickness:"flex",borderColor:"transparent",backgroundColor:"transparent",borderWidth:1}]}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}prepareData(){for(let l=0;l<6;l++)this.data.push({labels:this.labels,datasets:this.datasets[l]})}prepareLabels(){for(let l=0;l<15;l++)this.labels.push(this.getDayName(l))}prepareDatasets(){const l=[{backgroundColor:"danger"},{backgroundColor:"primary"},{backgroundColor:"dark"},{borderColor:"danger",borderWidth:2},{borderColor:"success",borderWidth:2},{borderColor:"info",borderWidth:2}];for(let g=0;g<6;g++)this.datasets.push(this.getDataset(l[g]))}getDataset({backgroundColor:l="transparent",borderColor:g="transparent",borderWidth:A=1}){const T=this.baseDatasets;return T[0].backgroundColor="transparent"!==l?(0,p.Z)(`--cui-${l}`):l,T[0].borderColor="transparent"!==g?(0,p.Z)(`--cui-${g}`):g,T[0].borderWidth=A,T}getDayName(l=0){var g,A,T,W;const I=null!==(W=null!==(T=null!==(A=null!==(g=navigator.language)&&void 0!==g?g:navigator.userLanguage)&&void 0!==A?A:navigator.systemLanguage)&&void 0!==T?T:navigator.browserLanguage)&&void 0!==W?W:"en-US",N=new Date(Date.UTC(2e3,1,0));return N.setDate(N.getDate()+l),N.toLocaleDateString(I,{weekday:"short"})}}return a.\u0275fac=function(l){return new(l||a)(t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-widgets-e"]],decls:19,vars:24,consts:[["lg","2","md","4"],[1,"mb-4",3,"title","value"],["height","40","width","80",1,"mx-auto",3,"data","options"],["height","40","type","line","width","80",1,"mx-auto",3,"data","options"]],template:function(l,g){1&l&&(t.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-e",1),t._UZ(3,"c-chart",2),t.qZA()(),t.TgZ(4,"c-col",0)(5,"c-widget-stat-e",1),t._UZ(6,"c-chart",2),t.qZA()(),t.TgZ(7,"c-col",0)(8,"c-widget-stat-e",1),t._UZ(9,"c-chart",2),t.qZA()(),t.TgZ(10,"c-col",0)(11,"c-widget-stat-e",1),t._UZ(12,"c-chart",3),t.qZA()(),t.TgZ(13,"c-col",0)(14,"c-widget-stat-e",1),t._UZ(15,"c-chart",3),t.qZA()(),t.TgZ(16,"c-col",0)(17,"c-widget-stat-e",1),t._UZ(18,"c-chart",3),t.qZA()()()),2&l&&(t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",g.data[0])("options",g.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",g.data[1])("options",g.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",g.data[2])("options",g.barOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",g.data[3])("options",g.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",g.data[4])("options",g.lineOptions),t.xp6(2),t.Q6J("title","title")("value","1,123"),t.xp6(1),t.Q6J("data",g.data[5])("options",g.lineOptions))},directives:[e.iok,e.Yp0,e.gDu,b.d],styles:[""]}),a})();var _=i(8747);function u(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",58))}function x(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",59))}function U(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",60))}function O(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",61))}function y(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",58))}function Q(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function Y(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",59))}function D(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function M(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",60))}function s(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function h(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",61))}function r(a,n){1&a&&(t.TgZ(0,"a",62),t._uU(1," View more "),t.O4$(),t._UZ(2,"svg",63),t.qZA())}function f(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",58))}function q(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",59))}function $(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",60))}function E(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",61))}function B(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",64))}function P(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function R(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",66))}function S(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function k(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",67))}function L(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function j(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",68))}function F(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function K(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",69))}function V(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function H(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",64))}function z(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",8),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function X(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",66))}function G(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",6),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function tt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",67))}function et(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",10),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function at(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",68))}function nt(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",12),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function ot(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",69))}function st(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",70),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function it(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",71))}function lt(a,n){1&a&&(t.TgZ(0,"c-progress",65),t._UZ(1,"c-progress-bar",72),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function ct(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",64))}function rt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function pt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",66))}function gt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function dt(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",67))}function mt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function _t(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",68))}function ut(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function ft(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",69))}function Zt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}function ht(a,n){1&a&&(t.O4$(),t._UZ(0,"svg",71))}function vt(a,n){1&a&&(t.TgZ(0,"c-progress",73),t._UZ(1,"c-progress-bar",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("value",75))}const bt=[{path:"",component:(()=>{class a{constructor(l){this.changeDetectorRef=l}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}}return a.\u0275fac=function(l){return new(l||a)(t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-widgets"]],decls:167,vars:50,consts:[[1,"mb-4"],["href","components/"],["href","components/widgets/#cwidgetstatsb"],["lg","3","md","6","xs","12"],["text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["thin","",1,"my-2"],["color","success",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["color","info",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["color","warning",3,"value"],["text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["color","primary",3,"value"],["color","success","inverse","","text","Lorem ipsum dolor sit amet enim.","value","89.9%",1,"mb-4",3,"title"],["widgetStatB1inv","cWidgetStatB"],["thin","",1,"my-2",3,"white"],[3,"value"],["color","info","inverse","","text","Lorem ipsum dolor sit amet enim.","value","12.124",1,"mb-4",3,"title"],["widgetStatB2inv","cWidgetStatB"],["color","warning","inverse","","text","Lorem ipsum dolor sit amet enim.","value","$98,111.00",1,"mb-4",3,"title"],["widgetStatB3inv","cWidgetStatB"],["color","primary","inverse","","text","Lorem ipsum dolor sit amet enim.","value","2 TB",1,"mb-4",3,"title"],["widgetStatB4inv","cWidgetStatB"],["href","components/widgets/#cwidgetstatse"],["href","components/widgets/#cwidgetstatsf"],["lg","3","sm","6","xs","12"],["color","primary","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetIconTemplate"],["color","info","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","padding","","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","padding","","value","$1,999.50",1,"mb-3",3,"title"],["cTemplateId","widgetFooterTemplate"],["color","primary","value","$1,999.50",1,"mb-3",3,"title"],["color","info","value","$1,999.50",1,"mb-3",3,"title"],["color","warning","value","$1,999.50",1,"mb-3",3,"title"],["color","danger","value","$1,999.50",1,"mb-3",3,"title"],["href","components/widgets/#cwidgetstatsd"],[3,"withCharts"],["href","components/widgets/#cwidgetstatsc"],["value","87,500",3,"title"],["cTemplateId","widgetProgressTemplate"],["value","385",3,"title"],["value","1238",3,"title"],["value","28%",3,"title"],["value","5:34:11",3,"title"],["md","2","sm","6"],["value","87,500",1,"mb-4",3,"title"],["value","385",1,"mb-4",3,"title"],["value","1238",1,"mb-4",3,"title"],["value","28%",1,"mb-4",3,"title"],["value","5:34:11",1,"mb-4",3,"title"],["value","972",1,"mb-4",3,"title"],["color","info","inverse","","value","87,500",1,"mb-4",3,"title"],["color","success","inverse","","value","385",1,"mb-4",3,"title"],["color","warning","inverse","","value","1238",1,"mb-4",3,"title"],["color","primary","inverse","","value","28%",1,"mb-4",3,"title"],["color","danger","inverse","","value","5:34:11",1,"mb-4",3,"title"],["color","dark","inverse","","value","972",1,"mb-4",3,"title"],["cIcon","","name","cilSettings","size","xl","width","24"],["cIcon","","name","cilUser","size","xl","width","24"],["cIcon","","name","cilMoon","size","xl","width","24"],["cIcon","","name","cilBell","size","xl","width","24"],["href","https://coreui.io/","rel","noopener norefferer","target","_blank",1,"font-weight-bold","font-xs","text-medium-emphasis"],["cIcon","","name","cilArrowRight","width","16",1,"float-end"],["cIcon","","height","36","name","cilPeople"],["thin","",1,"mt-3","mb-0"],["cIcon","","height","36","name","cilUserFollow"],["cIcon","","height","36","name","cilBasket"],["cIcon","","height","36","name","cilChartPie"],["cIcon","","height","36","name","cilSpeedometer"],["color","danger",3,"value"],["cIcon","","height","36","name","cilSpeech"],["color","dark",3,"value"],["thin","","white","",1,"mt-3","mb-0"]],template:function(l,g){if(1&l&&(t.TgZ(0,"c-card",0)(1,"c-card-header"),t._uU(2,"Widgets"),t.qZA(),t.TgZ(3,"c-card-body")(4,"app-docs-example",1),t._UZ(5,"app-widgets-dropdown"),t.qZA(),t.TgZ(6,"app-docs-example",2)(7,"c-row")(8,"c-col",3)(9,"c-widget-stat-b",4)(10,"c-progress",5),t._UZ(11,"c-progress-bar",6),t.qZA()()(),t.TgZ(12,"c-col",3)(13,"c-widget-stat-b",7)(14,"c-progress",5),t._UZ(15,"c-progress-bar",8),t.qZA()()(),t.TgZ(16,"c-col",3)(17,"c-widget-stat-b",9)(18,"c-progress",5),t._UZ(19,"c-progress-bar",10),t.qZA()()(),t.TgZ(20,"c-col",3)(21,"c-widget-stat-b",11)(22,"c-progress",5),t._UZ(23,"c-progress-bar",12),t.qZA()()()()(),t.TgZ(24,"app-docs-example",2)(25,"c-row")(26,"c-col",3)(27,"c-widget-stat-b",13,14)(29,"c-progress",15),t._UZ(30,"c-progress-bar",16),t.qZA()()(),t.TgZ(31,"c-col",3)(32,"c-widget-stat-b",17,18)(34,"c-progress",15),t._UZ(35,"c-progress-bar",16),t.qZA()()(),t.TgZ(36,"c-col",3)(37,"c-widget-stat-b",19,20)(39,"c-progress",15),t._UZ(40,"c-progress-bar",16),t.qZA()()(),t.TgZ(41,"c-col",3)(42,"c-widget-stat-b",21,22)(44,"c-progress",15),t._UZ(45,"c-progress-bar",16),t.qZA()()()()(),t.TgZ(46,"app-docs-example",23),t._UZ(47,"app-widgets-e"),t.qZA(),t.TgZ(48,"app-docs-example",24)(49,"c-row")(50,"c-col",25)(51,"c-widget-stat-f",26),t.YNc(52,u,1,0,"ng-template",27),t.qZA()(),t.TgZ(53,"c-col",25)(54,"c-widget-stat-f",28),t.YNc(55,x,1,0,"ng-template",27),t.qZA()(),t.TgZ(56,"c-col",25)(57,"c-widget-stat-f",29),t.YNc(58,U,1,0,"ng-template",27),t.qZA()(),t.TgZ(59,"c-col",25)(60,"c-widget-stat-f",30),t.YNc(61,O,1,0,"ng-template",27),t.qZA()()()(),t.TgZ(62,"app-docs-example",24)(63,"c-row")(64,"c-col",25)(65,"c-widget-stat-f",26),t.YNc(66,y,1,0,"ng-template",27),t.YNc(67,Q,3,0,"ng-template",31),t.qZA()(),t.TgZ(68,"c-col",25)(69,"c-widget-stat-f",28),t.YNc(70,Y,1,0,"ng-template",27),t.YNc(71,D,3,0,"ng-template",31),t.qZA()(),t.TgZ(72,"c-col",25)(73,"c-widget-stat-f",29),t.YNc(74,M,1,0,"ng-template",27),t.YNc(75,s,3,0,"ng-template",31),t.qZA()(),t.TgZ(76,"c-col",25)(77,"c-widget-stat-f",30),t.YNc(78,h,1,0,"ng-template",27),t.YNc(79,r,3,0,"ng-template",31),t.qZA()()()(),t.TgZ(80,"app-docs-example",24)(81,"c-row")(82,"c-col",25)(83,"c-widget-stat-f",32),t.YNc(84,f,1,0,"ng-template",27),t.qZA()(),t.TgZ(85,"c-col",25)(86,"c-widget-stat-f",33),t.YNc(87,q,1,0,"ng-template",27),t.qZA()(),t.TgZ(88,"c-col",25)(89,"c-widget-stat-f",34),t.YNc(90,$,1,0,"ng-template",27),t.qZA()(),t.TgZ(91,"c-col",25)(92,"c-widget-stat-f",35),t.YNc(93,E,1,0,"ng-template",27),t.qZA()()()(),t.TgZ(94,"app-docs-example",36),t._UZ(95,"app-widgets-brand"),t.qZA(),t.TgZ(96,"app-docs-example",36),t._UZ(97,"app-widgets-brand",37),t.qZA(),t.TgZ(98,"app-docs-example",38)(99,"c-card-group",0)(100,"c-widget-stat-c",39),t.YNc(101,B,1,0,"ng-template",27),t.YNc(102,P,2,1,"ng-template",40),t.qZA(),t.TgZ(103,"c-widget-stat-c",41),t.YNc(104,R,1,0,"ng-template",27),t.YNc(105,S,2,1,"ng-template",40),t.qZA(),t.TgZ(106,"c-widget-stat-c",42),t.YNc(107,k,1,0,"ng-template",27),t.YNc(108,L,2,1,"ng-template",40),t.qZA(),t.TgZ(109,"c-widget-stat-c",43),t.YNc(110,j,1,0,"ng-template",27),t.YNc(111,F,2,1,"ng-template",40),t.qZA(),t.TgZ(112,"c-widget-stat-c",44),t.YNc(113,K,1,0,"ng-template",27),t.YNc(114,V,2,1,"ng-template",40),t.qZA()()(),t.TgZ(115,"app-docs-example",38)(116,"c-row")(117,"c-col",45)(118,"c-widget-stat-c",46),t.YNc(119,H,1,0,"ng-template",27),t.YNc(120,z,2,1,"ng-template",40),t.qZA()(),t.TgZ(121,"c-col",45)(122,"c-widget-stat-c",47),t.YNc(123,X,1,0,"ng-template",27),t.YNc(124,G,2,1,"ng-template",40),t.qZA()(),t.TgZ(125,"c-col",45)(126,"c-widget-stat-c",48),t.YNc(127,tt,1,0,"ng-template",27),t.YNc(128,et,2,1,"ng-template",40),t.qZA()(),t.TgZ(129,"c-col",45)(130,"c-widget-stat-c",49),t.YNc(131,at,1,0,"ng-template",27),t.YNc(132,nt,2,1,"ng-template",40),t.qZA()(),t.TgZ(133,"c-col",45)(134,"c-widget-stat-c",50),t.YNc(135,ot,1,0,"ng-template",27),t.YNc(136,st,2,1,"ng-template",40),t.qZA()(),t.TgZ(137,"c-col",45)(138,"c-widget-stat-c",51),t.YNc(139,it,1,0,"ng-template",27),t.YNc(140,lt,2,1,"ng-template",40),t.qZA()()()(),t.TgZ(141,"app-docs-example",38)(142,"c-row")(143,"c-col",45)(144,"c-widget-stat-c",52),t.YNc(145,ct,1,0,"ng-template",27),t.YNc(146,rt,2,1,"ng-template",40),t.qZA()(),t.TgZ(147,"c-col",45)(148,"c-widget-stat-c",53),t.YNc(149,pt,1,0,"ng-template",27),t.YNc(150,gt,2,1,"ng-template",40),t.qZA()(),t.TgZ(151,"c-col",45)(152,"c-widget-stat-c",54),t.YNc(153,dt,1,0,"ng-template",27),t.YNc(154,mt,2,1,"ng-template",40),t.qZA()(),t.TgZ(155,"c-col",45)(156,"c-widget-stat-c",55),t.YNc(157,_t,1,0,"ng-template",27),t.YNc(158,ut,2,1,"ng-template",40),t.qZA()(),t.TgZ(159,"c-col",45)(160,"c-widget-stat-c",56),t.YNc(161,ft,1,0,"ng-template",27),t.YNc(162,Zt,2,1,"ng-template",40),t.qZA()(),t.TgZ(163,"c-col",45)(164,"c-widget-stat-c",57),t.YNc(165,ht,1,0,"ng-template",27),t.YNc(166,vt,2,1,"ng-template",40),t.qZA()()()()()()),2&l){const A=t.MAs(28),T=t.MAs(33),W=t.MAs(38),I=t.MAs(43);t.xp6(9),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("value",89.9),t.xp6(4),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",A.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",T.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",W.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(2),t.Q6J("title","Widget title"),t.xp6(2),t.Q6J("white",I.inverse),t.xp6(1),t.Q6J("value",89.9),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(4),t.Q6J("title","Income"),t.xp6(6),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(3),t.Q6J("title","Income"),t.xp6(5),t.Q6J("withCharts",!0),t.xp6(3),t.Q6J("title","Visitors"),t.xp6(3),t.Q6J("title","New Clients"),t.xp6(3),t.Q6J("title","Products sold"),t.xp6(3),t.Q6J("title","Returning Visitors"),t.xp6(3),t.Q6J("title","Avg. Time"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments"),t.xp6(6),t.Q6J("title","Visitors"),t.xp6(4),t.Q6J("title","New Clients"),t.xp6(4),t.Q6J("title","Products sold"),t.xp6(4),t.Q6J("title","Returning Visitors"),t.xp6(4),t.Q6J("title","Avg. Time"),t.xp6(4),t.Q6J("title","Comments")}},directives:[e.AkF,e.nkx,e.yue,Z.U,m.c,e.iok,e.Yp0,e.Pvw,e.t15,e.RIQ,c,e.bvG,e.y1J,d.ar,_.O,e.RMw,e.S0f],styles:[""]}),a})(),data:{title:"Widgets"}}];let xt=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[w.Bz.forChild(bt)],w.Bz]}),a})(),Tt=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[o.ez,xt,e.zE6,e.yF7,d.QX,e.kWm,e.m81,e.hJ1,e.dTQ,C.E,e.qek,b.N]]}),a})()},2592:(J,v,i)=>{i.d(v,{U:()=>t});var o=i(4147),e=i(4893),d=i(1725),b=i(2619),C=i(1728);const w=["*"];let t=(()=>{class Z{constructor(p){this.changeDetectorRef=p,this._href="https://coreui.io/angular/docs/"}get href(){return this._href}set href(p){var c,_,u;const x=null===(c=null==o?void 0:o.config)||void 0===c?void 0:c.coreui_library_short_version,U=null!==(u=null===(_=null==o?void 0:o.config)||void 0===_?void 0:_.coreui_library_docs_url)&&void 0!==u?u:"https://coreui.io/angular/";this._href=`${U}${x?`${x}/${p}`:""}`}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}ngAfterViewInit(){this.changeDetectorRef.markForCheck()}}return Z.\u0275fac=function(p){return new(p||Z)(e.Y36(e.sBO))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-docs-example"]],inputs:{fragment:"fragment",href:"href"},ngContentSelectors:w,decls:14,vars:5,consts:[[1,"example","mb-3"],["variant","tabs"],["routerLink","./","cNavLink","",3,"active","cTabContent","fragment","tabPaneIdx"],["cIcon","","name","cilMediaPlay",1,"me-2"],["cNavLink","","target","_blank",3,"href"],["cIcon","","name","cilCode",1,"me-2"],["cRounded","bottom"],["tabContent","cTabContent"],["aria-labelledby","docs-code-preview","role","tabpanel",1,"p-3","preview"]],template:function(p,c){if(1&p&&(e.F$t(),e.TgZ(0,"div",0)(1,"c-nav",1)(2,"c-nav-item")(3,"a",2),e.O4$(),e._UZ(4,"svg",3),e._uU(5," Preview "),e.qZA()(),e.kcU(),e.TgZ(6,"c-nav-item")(7,"a",4),e.O4$(),e._UZ(8,"svg",5),e._uU(9," Code "),e.qZA()()(),e.kcU(),e.TgZ(10,"c-tab-content",6,7)(12,"c-tab-pane",8),e.Hsn(13),e.qZA()()()),2&p){const _=e.MAs(11);e.xp6(3),e.Q6J("active",!0)("cTabContent",_)("fragment",c.fragment)("tabPaneIdx",0),e.xp6(4),e.Q6J("href",c.href,e.LSH)}},directives:[d.rZi,d.HOP,b.yS,d.Vh3,d.hL0,C.ar,d.C$2,d.IRg,d.Eug],styles:[""],changeDetection:0}),Z})()}}]);