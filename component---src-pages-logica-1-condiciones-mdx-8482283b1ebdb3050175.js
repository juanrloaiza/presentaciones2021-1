(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+PTX":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return f}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("WLIS"),c=a("sOF4"),i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},d=o("TitleSlide"),s=o("PSection"),m=o("Slide"),u=o("Animate"),b=o("Example"),p=o("TwoCols"),j=o("Tooltip"),O={_frontmatter:i},v=l.a;function f(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(v,Object.assign({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(d,{clase:"Lógica ECH",title:"Condiciones de verdad",mdxType:"TitleSlide"}),Object(r.b)(s,{title:"Introducción",mdxType:"PSection"},Object(r.b)(m,{mdxType:"Slide"},Object(r.b)("h1",null,"Condiciones de verdad"),Object(r.b)("p",null,"Hemos distinguido proposiciones simples (o atómicas) de complejas."),Object(r.b)(u,{mdxType:"Animate"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Proposiciones atómicas: Pa, Pb, Pc…"),Object(r.b)("li",{parentName:"ul"},"Proposiciones complejas: Pa & Pb, Pa v (Pb → (Pc ↔ Pd))")),Object(r.b)("p",null,"¿Cómo podemos determinar la verdad o falsedad (i.e. el valor de verdad) de una proposición compleja?\nPa v (Pb → (Pc ↔ Pd))"))),Object(r.b)(m,{mdxType:"Slide"},Object(r.b)("h1",null,"Condiciones de verdad"),Object(r.b)("p",null,"El valor de verdad de una proposición compleja depende del valor de verdad de sus partes."),Object(r.b)(u,{mdxType:"Animate"},Object(r.b)(b,{mdxType:"Example"},"Juan juega ajedrez y Marcela juega ajedrez."),Object(r.b)("p",null,"Esta proposición es verdadera si y sólo si:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"“Juan juega ajedrez” es verdadera"),Object(r.b)("li",{parentName:"ul"},"“Marcela juega ajedrez” es verdadera")))),Object(r.b)(m,{mdxType:"Slide"},Object(r.b)("h1",null,"Condiciones de verdad"),Object(r.b)(b,{mdxType:"Example"},"Laura quiere una moto y (un carro o una camioneta)."),Object(r.b)(u,{mdxType:"Animate"},Object(r.b)("p",null,"Laura está satisfecha si Laura tiene:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Una moto + Un carro"),Object(r.b)("li",{parentName:"ul"},"Una moto + Una camioneta"),Object(r.b)("li",{parentName:"ul"},"Una moto + Un carro + Una camioneta")),Object(r.b)("p",null,"El valor de verdad de una proposición puede descomponerse en el valor de verdad de sus partes."))),Object(r.b)(m,{mdxType:"Slide"},Object(r.b)("h1",null,"Proposiciones atómicas"),Object(r.b)("p",null,"Pensemos en el caso más simple: una ",Object(r.b)("em",{parentName:"p"},"proposición atómica"),"."),Object(r.b)(u,{mdxType:"Animate"},Object(r.b)("p",null,"Una proposición atómica puede ser ",Object(r.b)("em",{parentName:"p"},"verdadera")," o ",Object(r.b)("em",{parentName:"p"},"falsa")," (i.e. tiene ",Object(r.b)("em",{parentName:"p"},"dos valores de verdad")," posibles.)"),Object(r.b)("p",null,"Podemos representar esto en una tabla."),Object(r.b)(p,{mdxType:"TwoCols"},Object(r.b)(c.a,{mdxType:"TruthTable"},Object(r.b)("p",null,"Pa, Qa,| Pa, →,  Qa   \\newline\nV,  V*,| V,  V,  V   \\newline\nF,  V, | F,  V,  V")),Object(r.b)(j,{mdxType:"Tooltip"},"Tabla de verdad"))))))}f.isMDXComponent=!0},WLIS:function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),l=a.n(r),c=a("7ljp");a("ZrE4"),a("ejmO");function i(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function o(e){var t=l.a.Children.map(e.children,(function(t,a){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}function d(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}var s=a("rePB"),m=a("zLVn");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b=function(e){return l.a.cloneElement(e,{className:"fragment"})},p={ul:function(e){var t=e.children;Object(m.a)(e,["children"]);return l.a.createElement("ul",null,l.a.Children.map(t,b))},ol:function(e){var t=e.children;Object(m.a)(e,["children"]);return l.a.createElement("ol",null,l.a.Children.map(t,b))},table:function(e){var t=e.children,a=Object(m.a)(e,["children"]),n=l.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=l.a.Children.map(e.props.children,(function(e){var t=l.a.Children.map(e.props.children,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement("tr",{},t)}));return l.a.createElement("tbody",{},t)}return e}));return l.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function j(e){var t=e.children,a=Object(m.a)(e,["children"]),n=l.a.Children.map(t,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement(c.a,Object.assign({},a,{components:p}),n)}var O=a("dbrF");function v(e){var t=e.children,a=Object(m.a)(e,["children"]),n=l.a.Children.toArray(t);return l.a.createElement("div",Object.assign({className:"two-cols"},a),l.a.createElement("div",{className:"col-left "+a.className},n[0]),l.a.createElement("div",{className:"col-right "+a.className},n[1]))}function f(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function h(e){return l.a.createElement("div",{className:"card"},e.title?l.a.createElement("div",{className:"card-title"},e.title):null,l.a.createElement("div",{className:"card-body"},e.children))}var E=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:i,TitleSlide:d,Animate:j,PSection:o,Example:O.b,Tooltip:O.d,Definition:O.a,TwoCols:v,Flex:f,Card:h};return l.a.createElement("div",{style:{height:"95vh"}},l.a.createElement("div",{className:"reveal"},l.a.createElement("div",{className:"slides"},l.a.createElement(c.a,{components:e},this.props.children))))},t}(l.a.Component);t.a=E},ZrE4:function(e,t,a){},ejmO:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-logica-1-condiciones-mdx-8482283b1ebdb3050175.js.map