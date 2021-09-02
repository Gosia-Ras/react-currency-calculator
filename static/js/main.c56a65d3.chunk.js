(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,s,l,b,u,d,j,x,p=t(1),g=t.n(p),h=t(9),f=t.n(h),O=t(4),m=t(2),v=t(3),y=v.b.main(r||(r=Object(m.a)(["\n  background-color: whitesmoke;\n  border-radius: 25px;\n  box-shadow: 10px 10px 13px -7px #777576;\n  max-width: 480px;\n  padding: 15px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),k=t(0),w=function(n){var e=n.children;return Object(k.jsx)(y,{children:e})},C=v.b.header(c||(c=Object(m.a)(['\n  text-align: center;\n  padding: 10px;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  margin: 5px;\n  border: 1px solid black;\n  box-shadow: 5px 5px 12px -9px #000000;\n']))),S=function(n){var e=n.title;return Object(k.jsx)(C,{children:Object(k.jsx)("h1",{children:e})})},L=[{short:"USD",rate:3.8797},{short:"EUR",rate:4.5691},{short:"CHF",rate:4.2602},{short:"GBP",rate:5.3571},{short:"RUB",rate:.0528}],D=v.b.form(a||(a=Object(m.a)(['\n  margin-top: 20px;\n  font-family: "Lato", sans-serif;\n']))),F=v.b.fieldset(o||(o=Object(m.a)(["\n  border-radius: 5px 10px;\n  margin: 20px 0px;\n  background-color: rgb(245, 245, 245);\n  font-size: smaller;\n"]))),R=v.b.select(i||(i=Object(m.a)(["\n  padding: 10px;\n  background-color: white;\n  border-radius: 4px;\n"]))),z=v.b.input(s||(s=Object(m.a)(["\n  padding: 10px;\n  background-color: white;\n  border-radius: 4px;\n\n  &:required {\n    border-color: rgb(224, 107, 107);\n  }\n"]))),A=v.b.label(l||(l=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n"]))),B=v.b.button(b||(b=Object(m.a)(["\n  border: 1px black solid;\n  background-color: rgb(255, 254, 254);\n  box-shadow: 5px 5px 12px -9px #000000;\n  padding: 10px;\n  max-width: 300px;\n  margin-top: 5px;\n\n  &:hover {\n    background-color: rgb(129, 126, 127);\n    color: lavenderblush;\n  }\n"]))),P=v.b.div(u||(u=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=function(n){var e=n.calculateResult,t=n.setResult,r=Object(p.useState)(L[0].short),c=Object(O.a)(r,2),a=c[0],o=c[1],i=Object(p.useState)(""),s=Object(O.a)(i,2),l=s[0],b=s[1];return Object(k.jsxs)(D,{onSubmit:function(n){n.preventDefault(),e(a,l)},children:[Object(k.jsxs)(F,{children:[Object(k.jsxs)(A,{children:[Object(k.jsx)("p",{children:"Amount in PLN*:"}),Object(k.jsx)(z,{value:l,onChange:function(n){var e=n.target;return b(e.value)},step:"any",min:"1",max:"1000000000",placeholder:"Enter the amount in PLN",type:"number",required:!0})]}),Object(k.jsxs)(A,{children:[Object(k.jsx)("p",{children:"Currency"}),Object(k.jsx)(R,{value:a,onChange:function(n){var e=n.target;return o(e.value)},children:L.map((function(n){return Object(k.jsx)("option",{value:n.short,children:n.short},n.short)}))})]})]}),Object(k.jsxs)(P,{children:[Object(k.jsx)(B,{type:"submit",children:"Calculate"}),Object(k.jsx)(B,{type:"reset",onClick:function(n){n.preventDefault(),b(""),t()},children:"Clear form"})]})]})},I=v.b.footer(d||(d=Object(m.a)(['\n  text-align: center;\n  background-color: whitesmoke;\n  padding: 10px;\n  font-family: "Lato", sans-serif;\n  font-style: bold;\n  margin-top: 20%;\n  color: rgb(0, 0, 0);\n']))),T=function(n){var e=n.title;return Object(k.jsx)(I,{children:e})},U=v.b.p(j||(j=Object(m.a)(["\n  font-family: monospace;\n  text-align: right;\n  color: gray;\n  margin-right: 6px;\n"]))),q=function(n){return n.toLocaleDateString("en-GB",{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})},G=function(){var n=function(){var n=Object(p.useState)(new Date),e=Object(O.a)(n,2),t=e[0],r=e[1];return Object(p.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(k.jsxs)(U,{children:["Today is ",q(n)]})},J=v.b.p(x||(x=Object(m.a)(["\n  height: 40px;\n  text-align: center;\n  margin-top: 50px;\n"]))),M=function(n){var e=n.result;return Object(k.jsx)(J,{children:e&&Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("strong",{children:["You receive\xa0",e.targetAmount.toFixed(2),"\xa0",e.currency]})})})};var N,H=function(){var n=Object(p.useState)(),e=Object(O.a)(n,2),t=e[0],r=e[1];return Object(k.jsxs)(w,{children:[Object(k.jsx)(S,{title:"Currency Calculator"}),Object(k.jsx)(G,{}),Object(k.jsx)(E,{calculateResult:function(n,e){var t=L.find((function(e){return e.short===n})).rate;r({sourceAmount:+e,targetAmount:e/t,currency:n})},setResult:r}),Object(k.jsx)(M,{result:t}),Object(k.jsx)(T,{title:"Copyright 2021 by Malgorzata Ras. All rights reserved."})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))},K=t.p+"static/media/background-calculator.6eb90087.png",Q=Object(v.a)(N||(N=Object(m.a)(["\n    html {\n        box-sizing: border-box;\n     }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  #root {\n    background-size: cover;\n    background-image: url(",");\n    background-position: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n  }"])),K);f.a.render(Object(k.jsxs)(g.a.StrictMode,{children:[Object(k.jsx)(Q,{}),Object(k.jsx)(H,{})]}),document.getElementById("root")),Y()}},[[22,1,2]]]);
//# sourceMappingURL=main.c56a65d3.chunk.js.map