(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),c=a("q1tI"),l=a.n(c),b=a("7ljp");a("ZrE4"),a("ejmO");function r(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function s(e){var t=l.a.Children.map(e.children,(function(t,a){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}function i(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}var o=a("rePB"),u=a("zLVn");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var m=function(e){return l.a.cloneElement(e,{className:"fragment"})},p={ul:function(e){var t=e.children;Object(u.a)(e,["children"]);return l.a.createElement("ul",null,l.a.Children.map(t,m))},ol:function(e){var t=e.children;Object(u.a)(e,["children"]);return l.a.createElement("ol",null,l.a.Children.map(t,m))},table:function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=l.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=l.a.Children.map(e.props.children,(function(e){var t=l.a.Children.map(e.props.children,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement("tr",{},t)}));return l.a.createElement("tbody",{},t)}return e}));return l.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function d(e){var t=e.children,a=Object(u.a)(e,["children"]),n=l.a.Children.map(t,(function(e){return l.a.cloneElement(e,{className:e.props.className+" fragment"})}));return l.a.createElement(b.a,Object.assign({},a,{components:p}),n)}var O=a("dbrF");function g(e){var t=e.children,a=Object(u.a)(e,["children"]),n=l.a.Children.toArray(t);return l.a.createElement("div",Object.assign({className:"two-cols"},a),l.a.createElement("div",{className:"col-left "+a.className},n[0]),l.a.createElement("div",{className:"col-right "+a.className},n[1]))}function M(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function N(e){return l.a.createElement("div",{className:"card"},e.title?l.a.createElement("div",{className:"card-title"},e.title):null,l.a.createElement("div",{className:"card-body"},e.children))}var y=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:r,TitleSlide:i,Animate:d,PSection:s,Example:O.b,Tooltip:O.e,Definition:O.a,TwoCols:g,Flex:M,Card:N,Meta:O.c};return l.a.createElement("div",{style:{height:"95vh"}},l.a.createElement("div",{className:"reveal"},l.a.createElement("div",{className:"slides"},l.a.createElement(b.a,{components:e},this.props.children))))},t}(l.a.Component);t.a=y},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return b})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return i}));var n=a("q1tI"),c=a.n(n);function l(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="meta";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function r(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function s(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function i(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}},ejmO:function(e,t,a){},l6YS:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return N}));var n=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("WLIS"),b=a("okBV"),r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},i=s("TitleSlide"),o=s("Slide"),u=s("Animate"),j=s("Definition"),m=s("Flex"),p=s("Tooltip"),d=s("Example"),O=s("Meta"),g={_frontmatter:r},M=l.a;function N(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(M,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i,{title:"Conceptos básicos de lógica",clase:"Argumentación",mdxType:"TitleSlide"}),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"En los capítulos anteriores..."),Object(c.b)("p",null,"Argumentar es un ",Object(c.b)("strong",{parentName:"p"},"acto de habla complejo"),"."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Al argumentar, ",Object(c.b)("strong",{parentName:"p"},"defendemos tesis")," y ",Object(c.b)("strong",{parentName:"p"},"afirmamos premisas"),"."),Object(c.b)("p",null,"Para ",Object(c.b)("strong",{parentName:"p"},"interpretar")," correctamente estos actos de habla, debemos tener en mente:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"La argumentación ocurre en un momento dado y con ",Object(c.b)("strong",{parentName:"li"},"etapas identificables")),Object(c.b)("li",{parentName:"ul"},"Una afirmación puede no corresponderse con su significado literal (e.g., ",Object(c.b)("strong",{parentName:"li"},"implicaturas"),")"),Object(c.b)("li",{parentName:"ul"},"La interpretación correcta supone la ",Object(c.b)("strong",{parentName:"li"},"racionalidad")," del interlocutor")))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"De la pragmática a la lógica"),Object(c.b)("p",null,"Ya sabemos cómo ",Object(c.b)("strong",{parentName:"p"},"identificar")," actos argumentativos y sus etapas."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Ahora, ¿qué hace que un acto argumentativo sea ",Object(c.b)("strong",{parentName:"p"},"correcto"),"?"),Object(c.b)("p",null,"Debemos tener ",Object(c.b)("strong",{parentName:"p"},"criterios de corrección")," para los argumentos."),Object(c.b)(j,{animate:!0,word:"Lógica",mdxType:"Definition"},"Estudio de las inferencias y sus criterios de corrección."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Lógica formal y lógica informal"),Object(c.b)("p",null,"La lógica es una disciplina con muchas subdisciplinas."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{width:"45%"},className:"fragment"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Lógica formal")),Object(c.b)("p",null,"Estudio de inferencias con herramientas formales."),Object(c.b)("p",null,"Formula ",Object(c.b)("strong",{parentName:"p"},"modelos")," del lenguaje natural.")),Object(c.b)("div",{style:{width:"45%"},className:"fragment"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Lógica informal")),Object(c.b)("p",null,"Estudio de inferencias en el lenguaje natural."),Object(c.b)("p",null,"Investiga ",Object(c.b)("strong",{parentName:"p"},"patrones")," en el lenguaje."))),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Los ",Object(c.b)("strong",{parentName:"p"},"conceptos fundamentales")," de la lógica son generales, i.e., aplican a ambas ramas de la lógica."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Proposiciones"),Object(c.b)("p",null,"Recordemos que a la base de la lógica está el concepto de ",Object(c.b)("strong",{parentName:"p"},"«","proposición","»"),"."),Object(c.b)(j,{animate:!0,word:"Proposición",mdxType:"Definition"},"Aquello que podemos evaluar como verdadero o falso."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"La idea de aplicar la lógica a la argumentación es ver cómo se pueden ",Object(c.b)("strong",{parentName:"p"},"encadenar proposiciones")," para afirmar unas a partir de otras.")),Object(c.b)(j,{animate:!0,word:"Inferencia",mdxType:"Definition"},Object(c.b)("p",null,"Acto de afirmar una proposición usando otras proposiciones como justificación."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Proposiciones simples o complejas"),Object(c.b)("p",null,"Una proposición puede ser simple o compleja."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment",style:{width:"45%"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Proposición simple")),Object(c.b)("p",null,"Proposición que no se descompone en otras proposiciones."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"S es P"),", ",Object(c.b)("em",{parentName:"p"},"P"),", ",Object(c.b)("em",{parentName:"p"},"Pa"))),Object(c.b)("div",{className:"fragment",style:{width:"45%"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Proposición compleja")),Object(c.b)("p",null,"Proposición compuesta de otras proposiciones."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"P & Q, Pa → Qa, (∀x)Px")))),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Una proposición compleja contiene al menos un ",Object(c.b)("strong",{parentName:"p"},"operador lógico"),".")),Object(c.b)(p,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,'Por "operador lógico" ',Object(c.b)("em",{parentName:"p"},"no")," queremos decir estrictamente los símbolos '~', 'v', '&', '→', '↔', etc. Estos símbolos ",Object(c.b)("strong",{parentName:"p"},"representan")," operaciones en el lenguaje natural."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Propiedades lógicas"),Object(c.b)("p",null,"Las proposiciones pueden tener distintas propiedades."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Proposiciones individuales"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Tautología ",Object(c.b)("br",null)," Contradicción ",Object(c.b)("br",null)," Contingencia ",Object(c.b)("br",null))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Dos proposiciones"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Equivalentes ",Object(c.b)("br",null)," No equivalentes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Conjuntos de proposiciones"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Consistente ",Object(c.b)("br",null)," Inconsistente")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Argumentos"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Válidos ",Object(c.b)("br",null)," Inválidos")))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Consistencia"),Object(c.b)("p",null,"Un conjunto de proposiciones es consistente sii es ",Object(c.b)("strong",{parentName:"p"},"posible")," que todas sus proposiciones sean verdaderas a la vez."),Object(c.b)(d,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"{ Duque es el alcalde de Bogotá. ",Object(c.b)("br",null)," Claudia López es la alcaldesa de Cartagena. ",Object(c.b)("br",null)," Petro es senador. }")),Object(c.b)(p,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Un conjunto puede ser ",Object(c.b)("strong",{parentName:"p"},"consistente")," incluso si sus proposiciones son ",Object(c.b)("strong",{parentName:"p"},"falsas"),"."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Práctica"),Object(c.b)("p",null,"¿Consistente o inconsistente?"),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("colgroup",null,Object(c.b)("col",{style:{fontSize:"80%"}})),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"{ Si Neil Armstrong no fue a la luna, todo fue una farsa; ",Object(c.b)("br",null),"El alunizaje fue real. }"),Object(c.b)("td",null,"Consistente")),Object(c.b)("tr",null,Object(c.b)("td",null,"{ Si nos vacunan a todos, podremos salir tranquilamente; ",Object(c.b)("br",null),"No podemos salir tranquilamente; ",Object(c.b)("br",null),"Nos vacunan a todos }"),Object(c.b)("td",null,"Inconsistente")),Object(c.b)("tr",null,Object(c.b)("td",null,"{ El mercado se regula por su cuenta; ",Object(c.b)("br",null),"El Estado no debe intervenir en el mercado; ",Object(c.b)("br",null),"El Estado no debería permitir compras como las de Gamestop. }"),Object(c.b)("td",null,"Inconsistente")))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Consistencia y argumentación"),Object(c.b)("p",null,"Una manera en la que podemos usar el concepto de ",Object(c.b)("strong",{parentName:"p"},"consistencia")," en la argumentación es señalando que una ",Object(c.b)("strong",{parentName:"p"},"posición")," es inconsistente."),Object(c.b)(d,{animate:!0,mdxType:"Example"},"{ El mercado se regula por su cuenta; ",Object(c.b)("br",null),"El Estado no debe intervenir en el mercado; ",Object(c.b)("br",null),"El Estado no debería permitir compras como las de Gamestop. }"),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"¿Qué significa que una posición sea inconsistente?"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Es imposible que todas las afirmaciones de una posición sean verdaderas."),Object(c.b)("li",{parentName:"ul"},"La posición contiene contradicciones internas.")))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Validez deductiva"),Object(c.b)("p",null,"Un argumento es ",Object(c.b)("strong",{parentName:"p"},"deductivamente válido")," sii no es posible que las premisas sean verdaderas mientras la conclusión sea falsa."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)(O,{mdxType:"Meta"},Object(c.b)("p",null,"Esto significa que un argumento es deductivamente válido sii la negación de la conclusión (~",Object(c.b)("em",{parentName:"p"},"C"),") es inconsistente con las premisas (",Object(c.b)("em",{parentName:"p"},"P",Object(c.b)("sub",null,"1")),", ",Object(c.b)("em",{parentName:"p"},"P",Object(c.b)("sub",null,"2")),", ... ",Object(c.b)("em",{parentName:"p"},"P",Object(c.b)("sub",null,"n")),")."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"El conjunto {",Object(c.b)("em",{parentName:"li"},"P",Object(c.b)("sub",null,"1")),", ",Object(c.b)("em",{parentName:"li"},"P",Object(c.b)("sub",null,"2")),", ... ",Object(c.b)("em",{parentName:"li"},"P",Object(c.b)("sub",null,"n")),", ~",Object(c.b)("em",{parentName:"li"},"C"),"} es ",Object(c.b)("strong",{parentName:"li"},"inconsistente"),"."))),Object(c.b)("p",null,"¿Válido o inválido?")),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{width:"30%"},className:"fragment"},Object(c.b)(b.a,{mdxType:"Argument"},Object(c.b)("p",null,"Todos los humanos son mortales."),Object(c.b)("p",null,"Jorge es humano."),Object(c.b)("p",null,"Jorge es mortal."))),Object(c.b)("div",{style:{width:"30%"},className:"fragment"},Object(c.b)(b.a,{mdxType:"Argument"},Object(c.b)("p",null,"Todo el mundo quiere a alguien."),Object(c.b)("p",null,"Hay alguien querido por todo el mundo."))),Object(c.b)("div",{style:{width:"30%"},className:"fragment"},Object(c.b)(b.a,{mdxType:"Argument"},Object(c.b)("p",null,"Me compraré un Mac sólo si tengo el dinero."),Object(c.b)("p",null,"Tengo el dinero."),Object(c.b)("p",null,"Me compraré un Mac."))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Verdad y validez"),Object(c.b)("p",null,"Recordemos que un argumento puede ser ",Object(c.b)("strong",{parentName:"p"},"válido")," y tener ",Object(c.b)("strong",{parentName:"p"},"premisas falsas"),"."),Object(c.b)(d,{animate:!0,mdxType:"Example"},Object(c.b)(b.a,{mdxType:"Argument"},Object(c.b)("p",null,"Si todos vienen a clase, perderán el curso."),Object(c.b)("p",null,"Todos vienen a clase."),Object(c.b)("p",null,"Perderán el curso."))),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"La ",Object(c.b)("strong",{parentName:"p"},"validez")," de un argumento no depende de la ",Object(c.b)("strong",{parentName:"p"},"verdad de hecho")," de sus premisas o conclusión."),Object(c.b)("p",null,"Cuando un argumento es ",Object(c.b)("strong",{parentName:"p"},"válido")," y ",Object(c.b)("em",{parentName:"p"},"además")," tiene premisas verdaderas, es un argumento ",Object(c.b)("strong",{parentName:"p"},"sólido"),"."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Refutaciones"),Object(c.b)("p",null,"De lo anterior se sigue que hay dos (y sólo dos) maneras de refutar un argumento:"),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment",style:{width:"45%"}},Object(c.b)("p",null,"Mostrando su ",Object(c.b)("strong",{parentName:"p"},"invalidez")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Demostrando que las premisas son consistentes con la negación de la conclusión."))),Object(c.b)("div",{className:"fragment",style:{width:"45%"}},Object(c.b)("p",null,"Mostrando que ",Object(c.b)("strong",{parentName:"p"},"no es sólido")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Probando que alguna premisa es falsa."))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Patrones importantes"),Object(c.b)("p",null,"Hay algunos patrones importantes que debemos tener en cuenta."),Object(c.b)("p",null,"¿Verdadero o falso?"),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento con premisas contradictorias es válido."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento con conclusión verdadera es válido."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento con conclusión falsa es inválido."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un conjunto que contenga una contradicción es inconsistente."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un conjunto que contenga una tautología es consistente."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones suficientes y necesarias"),Object(c.b)("p",null,"Otro fenómeno lógico común es que una proposición pueda ser ",Object(c.b)("strong",{parentName:"p"},"condición suficiente o necesaria")," de otra."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment"},Object(c.b)(O,{mdxType:"Meta"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Condición suficiente")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"P")," es suficiente para ",Object(c.b)("em",{parentName:"p"},"Q")," si ",Object(c.b)("em",{parentName:"p"},"P")," implica ",Object(c.b)("em",{parentName:"p"},"Q")))),Object(c.b)("div",{className:"fragment"},Object(c.b)(O,{mdxType:"Meta"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Condición necesaria")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"P")," es necesario para ",Object(c.b)("em",{parentName:"p"},"Q")," si ~",Object(c.b)("em",{parentName:"p"},"P")," implica ~",Object(c.b)("em",{parentName:"p"},"Q"))))),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Recordemos que una proposicíon puede ser condición suficiente pero no necesaria de otra y viceversa.")),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment"},Object(c.b)("p",null,"La presencia de oxígeno es ",Object(c.b)("strong",{parentName:"p"},"necesaria")," (¡pero ",Object(c.b)("strong",{parentName:"p"},"no suficiente"),"!) para que haya fuego.")),Object(c.b)("div",{className:"fragment"},Object(c.b)("p",null,"Tener mil millones de pesos es ",Object(c.b)("strong",{parentName:"p"},"suficiente")," (pero ",Object(c.b)("strong",{parentName:"p"},"no necesario"),") para poder comprar un iPhone.")))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Práctica"),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("table",{style:{fontSize:"80%",margin:"0"}},Object(c.b)("colgroup",null,Object(c.b)("col",{style:{width:"40%"}})),Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"(P)"),Object(c.b)("th",null,"(Q)"),Object(c.b)("th",null,"Condición"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Tener internet."),Object(c.b)("td",{className:"fragment"},"Asistir a clase por Zoom."),Object(c.b)("td",{className:"fragment"},"Necesaria")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Ser mayor de edad."),Object(c.b)("td",{className:"fragment"},"Tener derecho a votar."),Object(c.b)("td",{className:"fragment"},"Necesaria")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Jugar ajedrez."),Object(c.b)("td",{className:"fragment"},"Jugar un juego de mesa."),Object(c.b)("td",{className:"fragment"},"Suficiente")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Sacar al menos 3.0 en la nota final de la clase."),Object(c.b)("td",{className:"fragment"},"Pasar el curso."),Object(c.b)("td",{className:"fragment"},"Necesaria y suficiente")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Cumplir con todos sus créditos."),Object(c.b)("td",{className:"fragment"},"Graduarse de su programa."),Object(c.b)("td",{className:"fragment"},"Necesaria")))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"¿Y para qué todos estos conceptos?"),Object(c.b)("p",null,"Los conceptos de la lógica se pueden usar para estudiar qué hace que una inferencia sea ",Object(c.b)("strong",{parentName:"p"},"correcta"),"."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"A futuro esperamos construir argumentos que no sólo sean persuasivos, sino ",Object(c.b)("strong",{parentName:"p"},"sólidos")," (válidos y con proposiciones verdaderas)."),Object(c.b)("p",null,"También queremos identificar las ",Object(c.b)("strong",{parentName:"p"},"partes")," de un argumento para poderlo ",Object(c.b)("strong",{parentName:"p"},"refutar")," (i.e., rechazar su validez o alguna premisa).")),Object(c.b)(p,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Es necesario (¡aunque no suficiente!) estudiar lógica para aprender a argumentar bien."))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-argumentacion-7-conceptoslogica-mdx-bcf181e1ea2ac1d0de2f.js.map