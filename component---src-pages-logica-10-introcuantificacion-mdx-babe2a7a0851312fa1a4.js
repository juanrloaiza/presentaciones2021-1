(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),c=a.n(l),b=a("7ljp");a("ZrE4"),a("ejmO");function i(e){return c.a.createElement("section",null,c.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function s(e){var t=c.a.Children.map(e.children,(function(t,a){return c.a.cloneElement(t,{secTitle:e.title})}));return c.a.createElement("section",null,t)}function o(e){var t=(new Date).getFullYear();return c.a.createElement("section",{className:"title"},c.a.createElement("h3",null,e.clase),c.a.createElement("h1",null," ",e.title),c.a.createElement("div",{className:"author"},"Juan R. Loaiza"),c.a.createElement("small",null,"Escuela de Ciencias Humanas ",c.a.createElement("br",null),"Universidad del Rosario ",c.a.createElement("br",null),t))}var r=a("rePB"),u=a("zLVn");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=function(e){return c.a.cloneElement(e,{className:"fragment"})},m={ul:function(e){var t=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ul",null,c.a.Children.map(t,d))},ol:function(e){var t=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ol",null,c.a.Children.map(t,d))},table:function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=c.a.Children.map(e.props.children,(function(e){var t=c.a.Children.map(e.props.children,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement("tr",{},t)}));return c.a.createElement("tbody",{},t)}return e}));return c.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function p(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.map(t,(function(e){return c.a.cloneElement(e,{className:e.props.className+" fragment"})}));return c.a.createElement(b.a,Object.assign({},a,{components:m}),n)}var O=a("dbrF");function x(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},a),c.a.createElement("div",{className:"col-left "+a.className},n[0]),c.a.createElement("div",{className:"col-right "+a.className},n[1]))}function M(e){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function g(e){return c.a.createElement("div",{className:"card"},e.title?c.a.createElement("div",{className:"card-title"},e.title):null,c.a.createElement("div",{className:"card-body"},e.children))}var y=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:i,TitleSlide:o,Animate:p,PSection:s,Example:O.b,Tooltip:O.e,Definition:O.a,TwoCols:x,Flex:M,Card:g,Meta:O.c};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(b.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=y},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return b})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return o}));var n=a("q1tI"),l=a.n(n);function c(e){var t="example";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="meta";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function i(e){var t="tooltip";t=e.animate?t+" fragment":t;return l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),l.a.createElement("div",null,e.notitle?"":l.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function s(e){var t="definition";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function o(){return l.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}},ejmO:function(e,t,a){},yU33:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("WLIS"),b=a("okBV"),i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},o=s("TitleSlide"),r=s("Slide"),u=s("Animate"),j=s("Example"),d=s("Flex"),m={_frontmatter:i},p=c.a;function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(o,{title:"Introducción a la cuantificación",clase:"Lógica ECH",mdxType:"TitleSlide"}),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Lógica de predicados"),Object(l.b)("p",null,"El sistema de lógica de predicados nos permite expresar proposiciones en un lenguaje formal."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Constantes de sujeto (a, b, c…)"),Object(l.b)("li",{parentName:"ul"},"Variables de sujeto (x, y, z…)"),Object(l.b)("li",{parentName:"ul"},"Predicados (Ax, Bxy, Cxyz…)"),Object(l.b)("li",{parentName:"ul"},"Operadores lógicos (~, &, v, →, ↔)")),Object(l.b)("p",null,"Además de esto, también tenemos dos operadores especiales:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cuantificadores (∀, ∃)")))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Para qué cuantificadores?"),Object(l.b)("p",null,"Hay inferencias en el lenguaje cotidiano que no pueden capturarse con lo que hemos visto hasta el momento."),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)(b.a,{mdxType:"Argument"},Object(l.b)("p",null,"Todos los estudiantes de lógica aprenden mucho."),Object(l.b)("p",null,"Pérez es estudiante de lógica."),Object(l.b)("p",null,"Pérez aprende mucho."))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Si formalizamos este argumento, no podremos ver claramente cómo funciona la inferencia."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Para qué cuantificadores?"),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)(b.a,{mdxType:"Argument"},Object(l.b)("p",null,"Todos los estudiantes de lógica aprenden mucho."),Object(l.b)("p",null,"Pérez es estudiante de lógica."),Object(l.b)("p",null,"Pérez aprende mucho.")),Object(l.b)(b.a,{mdxType:"Argument"},Object(l.b)("p",null,"Ae"),Object(l.b)("p",null,"Ep"),Object(l.b)("p",null,"Ap")))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Esta inferencia es ",Object(l.b)("strong",{parentName:"p"},"válida"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Es imposible que las premisas sean verdaderas y la conclusión falsa.")),Object(l.b)("p",null,"Sin embargo, el sistema formal que tenemos no basta para capturar por qué esta inferencia funciona."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Universo del discurso"),Object(l.b)("p",null,"Siempre que formalizamos, hablamos de un ",Object(l.b)("strong",{parentName:"p"},"conjunto de sujetos")," particular."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("div",{style:{display:"block",boxShadow:"rgb(170, 170, 170) 1px 1px 2px 1px",padding:"1rem",margin:"1rem auto",borderRadius:"5px",textAlign:"center",width:"20%"}},Object(l.b)("p",null,"Arias (a)"),Object(l.b)("p",null,"Bernal (b)"),Object(l.b)("p",null,"Castro (c)")),Object(l.b)("p",null,"Este conjunto del cual yo hablo se conoce como el ",Object(l.b)("strong",{parentName:"p"},"universo de discurso"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ej: Este salón, los estudiantes de la ECH, el mundo...")),Object(l.b)("p",null,"Cuando cuantificamos, decimos algo sobre ",Object(l.b)("strong",{parentName:"p"},"todos")," o ",Object(l.b)("strong",{parentName:"p"},"algún")," sujeto del universo de discurso."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Cuantificadores"),Object(l.b)("p",null,"Hay dos operadores lógicos que nos permiten hablar de manera abstracta sobre los sujetos de quienes estemos hablando."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Cuantificador universal (∀)")),Object(l.b)("p",null,"Nos dice que un predicado (Px) es verdadero de todos los sujetos de quienes hablamos."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"“Para todo sujeto x, Px.”"),Object(l.b)("li",{parentName:"ul"},"“Para todo x, x es P.”")))),Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Cuantificador existencial (∃)")),Object(l.b)("p",null,"Nos dice que un predicado (Px) es verdadero de al menos un sujeto de entre los sujetos de quienes hablamos."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"“Existe un sujeto x tal que Px.”"),Object(l.b)("li",{parentName:"ul"},"“Existe un x tal que x es P.”")))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Cuantificador universal (∀)"),Object(l.b)("p",null,"Supongamos un escenario en cual todos los estudiantes estudian lógica."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"Lx: x estudia lógica"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Si sólo hablamos de los estudiantes a, b, y c, entonces:"),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("p",null,"“Todos los estudiantes estudian lógica.”"),Object(l.b)("p",null,"(La & Lb) & Lc"))),Object(l.b)("p",null,"¿Pero qué pasa si hablamos de 1000 estudiantes?"),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)("p",null,"([(","[(La & Lb) & Lc]"," & Ld )& Le] & Lf)...")))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Cuantificador universal (∀)"),Object(l.b)("p",null,"El cuantificador universal (∀) nos permite expresar “Todos los estudiantes estudian lógica” sin problema."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"En lugar de ",Object(l.b)("strong",{parentName:"p"},"La, Lb, Lc…")," reemplazamos la constante (a, b, c) por una variable (x, y, z) e introducimos un cuantificador."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment",style:{fontSize:"200%",alignSelf:"center"}},Object(l.b)("p",null,"(∀x)Lx")),Object(l.b)("div",null,Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"“Todos estudian lógica”."),Object(l.b)("p",null,"“Para todo x, es verdad que x estudia lógica.”"),Object(l.b)("p",null,"“Para cualquier x, x estudia lógica.”")))),Object(l.b)("p",null,"Para usar cuantificadores, tenemos que usar ",Object(l.b)("strong",{parentName:"p"},"variables de sujeto")," y no constantes."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Condiciones de verdad"),Object(l.b)("p",null,"El cuantificador universal (∀) nos dice que una proposición es verdadera para todos los sujetos del universo de discurso."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"«","(∀x)Lx","»")," nos dice que la proposición ",Object(l.b)("strong",{parentName:"li"},"«","Lx","»")," es verdadera para cualquier constante de sujeto que ",Object(l.b)("em",{parentName:"li"},"reemplacemos")," por x.")),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("p",null,"La es V."),Object(l.b)("p",null,"Lb es V."),Object(l.b)("p",null,"Lc es V."),Object(l.b)("p",null,"..."),Object(l.b)("p",null,"Ls es V")))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Cómo se construye una oración con cuantificadores?"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Ponemos el cuantificador entre paréntesis."),Object(l.b)("li",{parentName:"ol"},"Prestamos atención a la variable que estamos usando (x, y, z...).."),Object(l.b)("li",{parentName:"ol"},"Escribimos el predicado con la variable en vez de un sujeto.")),Object(l.b)("p",null,"Así, en vez de escribir ",Object(l.b)("strong",{parentName:"p"},"([(","[(La & Lb) & Lc]"," & Ld )& Le] & Lf)..."),", escribimos:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"(∀...)"),Object(l.b)("li",{parentName:"ol"},"(∀x)..."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"(∀x)Lx"))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Ejemplos:"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Todos juegan fútbol"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Fx")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Todos estudian psicología."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Px")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Todos hacen ejercicios."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Ex")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Todos tienen gato."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Gx")))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Cuantificando sobre proposiciones complejas"),Object(l.b)("p",null,"¿Cómo podemos expresar “Todos estudian psicología o filosofía”?"),Object(l.b)(j,{animate:!0,mdxType:"Example"}," (1) (∀x)Px v (∀x)Fx "),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Esta formalización no es del todo correcta. Esta formalización dice algo como:"),Object(l.b)(j,{animate:!0,mdxType:"Example"}," ","Todos estudian psicología o todos estudian filosofía."," "),Object(l.b)("p",null,"Si algunos estudian psicología y otros filosofía, esta proposición es falsa, pero la primera (“Todos estudian psicología o filosofía”) es verdadera."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Cuantificando sobre proposiciones complejas"),Object(l.b)("p",null,"¿Cómo podemos decir de un sujeto específico ",Object(l.b)("strong",{parentName:"p"},"“a estudia filosofía o psicología”"),"?"),Object(l.b)("p",{style:{textAlign:"center"},className:"fragment"},"Pa v Fa"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Podemos aplicar cuantificadores a proposiciones complejas para decir de cualquier x que esta proposición aplica."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Reemplazamos al sujeto ",Object(l.b)("em",{parentName:"li"},"a")," por una variable y la atamos a un cuantificador.")),Object(l.b)(j,{animate:!0,mdxType:"Example"},"(2) (∀x)(Px v Fx)"),Object(l.b)("p",null,"Esta formalización nos dice que de cualquier sujeto concreto x, es verdad que x estudia psicología o filosofía.")),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"(Pa v Fa)"),Object(l.b)("p",null,"(Pb v Fb)"),Object(l.b)("p",null,"(Pc v Fc)"),Object(l.b)("p",null,"(Pd v Fd)"),Object(l.b)("p",null,"..."))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Hasta ahora..."),Object(l.b)("p",null,"Podemos expresar enunciados generales sobre un conjunto de sujetos usando el cuantificador universal."),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"“Todos estudian filosofía”."),Object(l.b)("p",null,"(∀x)Fx")))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Podemos aplicar el cuantificador universal a proposiciones complejas.")),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,'"Todos estudian psicología o filosofía.”'),Object(l.b)("p",null,"(∀x)(Px v Fx)"))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Cuantificador existencial (∃)"),Object(l.b)("p",null,"Así como podemos decir “Todos estudian filosofía”, podemos decir que ",Object(l.b)("em",{parentName:"p"},"algunos")," estudian filosofía."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"(∃x)Fx"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Esta proposición es verdadera si ",Object(l.b)("strong",{parentName:"p"},"al menos un sujeto")," estudia filosofía."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No sabemos cuál sujeto. Sólo decimos que al menos uno."),Object(l.b)("li",{parentName:"ul"},"Bien podrían ser todos. Esto no nos dice que ",Object(l.b)("em",{parentName:"li"},"sólo")," algunos.")))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Existencial sobre proposiciones complejas"),Object(l.b)("p",null,"Tal y como con el cuantificador universal, podemos aplicar el cuantificador existencial a proposiciones complejas."),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Algunos estudian filosofía y psicología."),Object(l.b)("p",null,"(∃x)(Fx & Px)")))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Esta proposición es verdadera si al menos un sujeto estudia filosofía y psicología.")),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)("p",null,"(Fa & Pa) v (Fb & Pb) v ..."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Ejemplos"),Object(l.b)("table",{className:" fragment ","data-fragment-index":"0"},Object(l.b)("colgroup",null,Object(l.b)("col",{style:{width:"70%"}})),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",{className:"fragment ","data-fragment-index":"1"},"Algunos juegan fútbol"),Object(l.b)("td",{className:"fragment ","data-fragment-index":"2"},"(∃x)Fx")),Object(l.b)("tr",null,Object(l.b)("td",{className:"fragment","data-fragment-index":"3"},"Algunos estudian psicología."),Object(l.b)("td",{className:"fragment","data-fragment-index":"4"},"(∃x)Px")),Object(l.b)("tr",null,Object(l.b)("td",{className:"fragment","data-fragment-index":"5"},"Algunos estudian psicología si estudian en el Rosario."),Object(l.b)("td",{className:"fragment","data-fragment-index":"6"},"(∃x)(Rx → Px)")),Object(l.b)("tr",null,Object(l.b)("td",{className:"fragment","data-fragment-index":"7"},"Algunos estudian psicología pero no filosofía."),Object(l.b)("td",{className:"fragment","data-fragment-index":"8"},"(∃x)(Px & ~Fx)"))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Rango y variables"),Object(l.b)("p",null,"Es importante notar que los cuantificadores operan sobre una proposición específica."),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)("div",{style:{display:"flex"}},Object(l.b)("div",{style:{width:"50%"}},"(∀x)Px & (∃x)Fx"),Object(l.b)("p",null,"“Todos estudian psicología y algunos estudian filosofía.”"))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"En este caso, el operador universal opera sobre ",Object(l.b)("strong",{parentName:"p"},"«","Px","»")," y el existencial sobre ",Object(l.b)("strong",{parentName:"p"},"«","Fx","»"),";.")),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)("p",null,"(∀x)(Px & Fx) v (∃x)Px")),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Aquí el universal opera sobre ",Object(l.b)("strong",{parentName:"p"},"«","Px & Fx","»")," y el existencial sobre ",Object(l.b)("strong",{parentName:"p"},"«","Px","»"),"."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Rango y variables"),Object(l.b)("p",null,"La proposición específica sobre la cual opera un cuantificador se conoce como su ",Object(l.b)("strong",{parentName:"p"},"rango")," o ",Object(l.b)("strong",{parentName:"p"},"alcance"),"."),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"(∀x)("),"Px & Fx",Object(l.b)("strong",{parentName:"p"},")")," v ",Object(l.b)("strong",{parentName:"p"},"(∃x)Px"))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"La variable que ponemos al lado del cuantificador nos dice que el cuantificador opera sobre todos los predicados que contengan esa variable."),Object(l.b)(j,{animate:!0,mdxType:"Example"},Object(l.b)("p",null,"(∀",Object(l.b)("b",null,"x"),")(P",Object(l.b)("b",null,"x")," & Fa)")),Object(l.b)("p",null,"Aquí el operador sólo aplica a ",Object(l.b)("strong",{parentName:"p"},"«","Px","»"),", pues es el único predicado con una x."))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Alcance y variables libres"),Object(l.b)("p",null,"Una fórmula correcta ",Object(l.b)("em",{parentName:"p"},"no puede")," contener variables que no estén atadas a un cuantificador."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"(∀x)Px & Gy"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Esta fórmula está ",Object(l.b)("strong",{parentName:"p"},"mal formada"),", pues ",Object(l.b)("em",{parentName:"p"},"y")," no tiene ningún cuantificador al que esté asignada."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Una variable sin cuantificador se conoce como una ",Object(l.b)("strong",{parentName:"li"},"variable libre"),".")),Object(l.b)("p",null,"En una fórmula bien formada, ",Object(l.b)("em",{parentName:"p"},"no puede haber")," variables libres."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment",style:{width:"45%"}},Object(l.b)("p",null,"Una posible corrección es asignar un cuantificador sobre la variable ",Object(l.b)("em",{parentName:"p"},"y"),"."),Object(l.b)(j,{mdxType:"Example"},"(∀x)Px & (∃y)Gy")),Object(l.b)("div",{className:"fragment",style:{width:"45%"}},Object(l.b)("p",null,"Otra posible corrección cambiar la variable ",Object(l.b)("em",{parentName:"p"},"y")," por ",Object(l.b)("em",{parentName:"p"},"x")," e incluirla bajo el alcance del universal."),Object(l.b)(j,{mdxType:"Example"},"(∀x)(Px & Gx)"))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Ejemplos"),Object(l.b)("p",null,"¿Qué fórmulas están mal formadas?"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Px & Gy"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Mal :(")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Px & (∃y)Gy"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"¡Bien!")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)Px & Gx"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Mal :(")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"(∀x)(Px & Gx)"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"¡Bien!")))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen"),Object(l.b)("p",null,"Podemos usar cuantificadores universales (∀) o existenciales (∃) para hablar en general sobre un conjunto de sujetos."),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"Todos estudian psicología."),Object(l.b)("p",null,"Algunos estudian psicología.")),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"(∀x)Px"),Object(l.b)("p",null,"(∃x)Px")))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Podemos usar esos cuantificadores sobre proposiciones complejas.")),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"Todos estudian psicología o filosofía."),Object(l.b)("p",null,"Algunos estudian psicología o filosofía. (∃x)(Px v Fx)")),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"(∀x)(Px v Fx)"),Object(l.b)("p",null,"(∃x)(Px v Fx)"))))),Object(l.b)(r,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen"),Object(l.b)("p",null,"Cuando usamos cuantificadores, reemplazamos constantes de sujeto por variables."),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"“Pérez estudia filosofía.”"),Object(l.b)("p",null,"“Todos estudian filosofía.”")),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"Fp"),Object(l.b)("p",null,"(∀x)Fx")))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Siempre tenemos que tener en cuenta el alcance de los operadores.")),Object(l.b)(j,{mdxType:"Example"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment",style:{width:"50%"}},Object(l.b)("p",null,"(∀x)Px v (∀x)Fx"),Object(l.b)("p",null,"(∀x)(Px v Fx)")),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,"“Todos estudian psicología o todos estudian filosofía.”"),Object(l.b)("p",null,"“Todos estudian psicología o filosofía.”"))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-logica-10-introcuantificacion-mdx-babe2a7a0851312fa1a4.js.map