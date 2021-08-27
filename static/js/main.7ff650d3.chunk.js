(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),l=(n(9),n(2)),o=(n(10),n(0)),i=function(e){var t=e.children;return Object(o.jsx)("main",{className:"container",children:t})},u=(n(12),function(e){var t=e.title;e.link;return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{children:t})})}),j=(n(13),[{short:"USD",rate:3.8797},{short:"EUR",rate:4.5691},{short:"CHF",rate:4.2602},{short:"GBP",rate:5.3571},{short:"RUB",rate:.0528}]),b=function(e){var t=e.calculateResult,n=e.setResult,c=Object(r.useState)(j[0].short),a=Object(l.a)(c,2),s=a[0],i=a[1],u=Object(r.useState)(""),b=Object(l.a)(u,2),f=b[0],h=b[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s,f)},children:[Object(o.jsxs)("fieldset",{className:"form__fieldset",children:[Object(o.jsxs)("label",{className:"form__label",children:[Object(o.jsx)("p",{children:"Amount in PLN*:"}),Object(o.jsx)("input",{value:f,onChange:function(e){var t=e.target;return h(t.value)},step:"any",min:"1",max:"1000000000",className:"form__field",placeholder:"Enter the amount in PLN",type:"number",required:!0})]}),Object(o.jsxs)("label",{className:"form__label",children:[Object(o.jsx)("p",{children:"Currency"}),Object(o.jsx)("select",{className:"form__field",value:s,onChange:function(e){var t=e.target;return i(t.value)},children:j.map((function(e){return Object(o.jsx)("option",{value:e.short,children:e.short},e.short)}))})]})]}),Object(o.jsxs)("div",{className:"flexContainer",children:[Object(o.jsx)("button",{className:"form__button",type:"submit",children:"Calculate"}),Object(o.jsx)("button",{type:"reset",className:"form__button",onClick:function(e){e.preventDefault(),h(""),n()},children:"Clear form"})]})]})},f=(n(14),function(e){var t=e.title;return Object(o.jsx)("footer",{className:"footer",children:t})}),h=(n(15),function(e){return e.toLocaleDateString("en-GB",{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})}),d=function(){var e=Object(r.useState)(new Date),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(o.jsxs)("p",{className:"clock",children:["Today is"," ",h(n)]})},m=(n(16),function(e){var t=e.result;return Object(o.jsx)("p",{className:"resultParagraph",children:t&&Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("strong",{children:["You receive\xa0",t.targetAmount.toFixed(2),"\xa0",t.currency]})})})});var O=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(i,{children:[Object(o.jsx)(u,{title:"Currency Calculator"}),Object(o.jsx)(d,{}),Object(o.jsx)(b,{calculateResult:function(e,t){var n=j.find((function(t){return t.short===e})).rate;c({sourceAmount:+t,targetAmount:t/n,currency:e})},setResult:c}),Object(o.jsx)(m,{result:n}),Object(o.jsx)(f,{title:"Copyright 2021 by Malgorzata Ras. All rights reserved."})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.7ff650d3.chunk.js.map