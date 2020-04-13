(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(29)},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(3),c=t.n(i),l=t(8),o=t(14),u=t(9),s=t(10),d=t(15),m=t(11),f=t(16),p=t(1),b=t(2);function h(){var e=Object(p.a)(["\n  display: inline-block;\n  min-width: 50px;\n  height: 24px;\n  cursor: pointer;\n  margin: 10px;\n  padding: 0 10px;\n  color: #fff;\n  border-color: transparent;\n  background-color: #3273dc;\n  border-radius: 4px;\n  font-size: 1rem;\n  height: 2.5em;\n  line-height: 1.5;\n  padding-left: 1em;\n  padding-right: 1em;\n"]);return h=function(){return e},e}var g=b.b.button(h()),x=function(e){var n=e.children,t=e.fn;return r.a.createElement(g,{onClick:t},n)};function v(){var e=Object(p.a)(["\n  font-size: 1rem;\n  padding: 2px;\n  margin: 0px 10px;\n  border-color: #3273dc;\n  height: 2.5em;\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  border: 0.5px solid #3273dc;\n  border-radius: 4px;\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n"]);return v=function(){return e},e}var O=b.b.input(v());function E(){var e=Object(p.a)(["\n  margin-left: 40px;\n"]);return E=function(){return e},e}function j(){var e=Object(p.a)(["\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  border-bottom: 2px solid #3273dc;\n"]);return j=function(){return e},e}function y(){var e=Object(p.a)(["\n  width: 60px;\n  margin-left: 10px;\n"]);return y=function(){return e},e}var w=Object(b.b)(O)(y()),k=b.b.div(j()),C=b.b.label(E()),F=function(e){var n=e.changeFn,t=e.hideFn,a=e.addFn,i=e.exceptions,c=e.text,l=e.title,o=e.columns,u=e.off;return r.a.createElement(k,{disabled:!!u},r.a.createElement(O,{placeholder:"Device name",name:"title",onChange:n,value:l}),r.a.createElement(O,{placeholder:"Serial numbers",name:"text",type:"text",onChange:n,value:c}),r.a.createElement(O,{placeholder:"Do not divide after (min 2 chars)",name:"exceptions",onChange:n,value:i}),r.a.createElement(C,null,"Columns:",r.a.createElement(w,{type:"number",min:"2",max:"9",name:"columns",onChange:n,value:o})),r.a.createElement(x,{fn:a},"Add"),r.a.createElement(x,{fn:t},"Hide bar and print!"))};function B(){var e=Object(p.a)(["\n  font-size: 17px;\n  padding: 15px 0px;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return B=function(){return e},e}var z=b.b.div(B()),A=function(e){var n=e.index,t=e.title;return r.a.createElement(z,null,"".concat(n,". ").concat(t))};function K(){var e=Object(p.a)(['\n  font-family: "Libre Barcode 39 Text";\n  font-size: 29px;\n  padding: 9px 0px;\n']);return K=function(){return e},e}var N=b.b.div(K()),Z=function(e){var n=e.serial.replace("ZONKZONKZONK"," ");return r.a.createElement(N,null,"*".concat(n,"*"))};function H(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(auto - fill, 1fr);\n  border-bottom: 1px solid black;\n  text-align: center;\n"]);return H=function(){return e},e}var S=Object(b.b)("div")(H(),function(e){return e.number}),D=function(e){var n=e.list,t=e.columns;return r.a.createElement(r.a.Fragment,null,n.map(function(e){return r.a.createElement(S,{number:t},r.a.createElement(A,{key:e.item,title:e.title,index:e.index}),e.serials.map(function(e){return r.a.createElement(Z,{key:e,serial:e})}))}))};function J(){var e=Object(p.a)(["\n\n    @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+39+Text');\n    *{\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n"]);return J=function(){return e},e}var L=Object(b.a)(J()),T=0,I=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={text:"",list:[],off:!1,title:"",columns:3,exceptions:""},t.handleButtonAdd=function(){var e=t.state.text,n=t.state.title,a=t.state.exceptions,r="";if(a.length>1){var i=a.slice(0,a.length-1);r=e.replace(new RegExp(a,"gi"),"".concat(i,"ZONKZONKZONK"))}else r=e;r.split(" ").forEach(function(e){T++;var a=e.split("\t"),r={index:T,title:n,serials:a};t.setState(function(e){return{list:[].concat(Object(o.a)(e.list),[r])}})}),t.setState({text:"",title:""})},t.handleButtonHide=function(){t.setState({off:!0})},t.handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),this.state.off?null:r.a.createElement(F,Object.assign({},this.state,{changeFn:this.handleChange,hideFn:this.handleButtonHide,addFn:this.handleButtonAdd})),r.a.createElement(r.a.Fragment,null,this.state.list.length>0&&r.a.createElement(D,{list:this.state.list,columns:this.state.columns})))}}]),n}(a.Component);c.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.040a1b72.chunk.js.map