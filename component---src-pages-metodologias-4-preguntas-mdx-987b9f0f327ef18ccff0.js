(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),c=a.n(l),b=a("7ljp");a("ZrE4"),a("ejmO");function r(e){return c.a.createElement("section",null,c.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function i(e){var t=c.a.Children.map(e.children,(function(t,a){return c.a.cloneElement(t,{secTitle:e.title})}));return c.a.createElement("section",null,t)}function s(e){var t=(new Date).getFullYear();return c.a.createElement("section",{className:"title"},c.a.createElement("h3",null,e.clase),c.a.createElement("h1",null," ",e.title),c.a.createElement("div",{className:"author"},"Juan R. Loaiza"),c.a.createElement("small",null,"Escuela de Ciencias Humanas ",c.a.createElement("br",null),"Universidad del Rosario ",c.a.createElement("br",null),t))}var o=a("rePB"),u=a("zLVn");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var p=function(e){return c.a.cloneElement(e,{className:"fragment"})},j={ul:function(e){var t=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ul",null,c.a.Children.map(t,p))},ol:function(e){var t=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ol",null,c.a.Children.map(t,p))},table:function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=c.a.Children.map(e.props.children,(function(e){var t=c.a.Children.map(e.props.children,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement("tr",{},t)}));return c.a.createElement("tbody",{},t)}return e}));return c.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function d(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.map(t,(function(e){return c.a.cloneElement(e,{className:e.props.className+" fragment"})}));return c.a.createElement(b.a,Object.assign({},a,{components:j}),n)}var O=a("dbrF");function g(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},a),c.a.createElement("div",{className:"col-left "+a.className},n[0]),c.a.createElement("div",{className:"col-right "+a.className},n[1]))}function N(e){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function M(e){return c.a.createElement("div",{className:"card"},e.title?c.a.createElement("div",{className:"card-title"},e.title):null,c.a.createElement("div",{className:"card-body"},e.children))}var y=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:r,TitleSlide:s,Animate:d,PSection:i,Example:O.b,Tooltip:O.f,Definition:O.a,TwoCols:g,Flex:N,Card:M,Meta:O.d,FQ:O.c};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(b.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=y},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return b})),a.d(t,"f",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return o}));var n=a("q1tI"),l=a.n(n);function c(e){var t="example";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="meta";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function r(e){var t="tooltip";t=e.animate?t+" fragment":t;return l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),l.a.createElement("div",null,e.notitle?"":l.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function i(e){var t="definition";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function s(){return l.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}function o(e){return"«"+e.children+"»"}},ejmO:function(e,t,a){},n3F8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return N}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("WLIS"),b={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},i=r("TitleSlide"),s=r("Slide"),o=r("Animate"),u=r("Definition"),m=r("Tooltip"),p=r("PSection"),j=r("Example"),d=r("Flex"),O={_frontmatter:b},g=c.a;function N(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(g,Object.assign({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i,{title:"Preguntas, problemas e hipótesis",clase:"Metodologías de Investigación",mdxType:"TitleSlide"}),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"En el capítulo anterior..."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Investigar consiste en usar ",Object(l.b)("strong",{parentName:"p"},"datos")," como ",Object(l.b)("strong",{parentName:"p"},"prueba")," de una ",Object(l.b)("strong",{parentName:"p"},"idea"),"."),Object(l.b)(u,{animate:!0,word:"Idea",mdxType:"Definition"},"Hipótesis, conjetura, interpretación"),Object(l.b)("p",null,"El paso de un dato a una idea requiere el uso de ",Object(l.b)("strong",{parentName:"p"},"normas")," de buena inferencia."),Object(l.b)("p",null,"Distintas normas (y estrategias para cumplirlas) dependen de distintas presuposiciones ",Object(l.b)("strong",{parentName:"p"},"metafísicas"),", ",Object(l.b)("strong",{parentName:"p"},"ontológicas")," y ",Object(l.b)("strong",{parentName:"p"},"epistemológicas"),".")),Object(l.b)(m,{animate:!0,notitle:!0,mdxType:"Tooltip"},Object(l.b)("p",null,"Estas normas también rigen las ",Object(l.b)("strong",{parentName:"p"},"preguntas correctas")," que podemos plantearnos."))),Object(l.b)(p,{title:"Problemas de investigación",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Qué es un problema de investigación?"),Object(l.b)("p",null,"Un problema de investigación es ",Object(l.b)("strong",{parentName:"p"},"algo que no sabemos (todavía)"),"."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Cuántos granos de arena hay en la costa pacífica colombiana?"),Object(l.b)("li",{parentName:"ul"},"¿Cuántas personas montaron hoy en Transmilenio?")),Object(l.b)("p",null,"Dado que hay cosas que no sabemos, tenemos ",Object(l.b)("strong",{parentName:"p"},"vacíos en nuestro conocimiento"),"."),Object(l.b)("p",null,"Pero no todo vacío es importante. También necesitamos ",Object(l.b)("strong",{parentName:"p"},"desear llenar el vacío"),"."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Vacíos en el conocimiento"),Object(l.b)("p",null,"Para saber cómo detectar un vacío en el conocimiento, tenemos que responder primero:"),Object(l.b)(j,{animate:!0,mdxType:"Example"},"¿Cómo sabemos qué se sabe ya?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"El conocimiento (en principio) se recolecta en ",Object(l.b)("strong",{parentName:"p"},"publicaciones"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Artículos de investigación empírica"),Object(l.b)("li",{parentName:"ul"},"Compilaciones"),Object(l.b)("li",{parentName:"ul"},"Libros")),Object(l.b)("p",null,"Estos documentos recogen el conocimiento sobre un tema; son lo que llamamos la ",Object(l.b)("strong",{parentName:"p"},"literatura"),"."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"La literatura científica"),Object(l.b)("p",null,"La literatura científica se organiza en distintos documentos con distintos niveles de complejidad."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Documento"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Resultado"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Artículo de investigación"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Reporte sobre un estudio concreto.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Artículo de revisión"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Síntesis del estado de la literatura en un momento dado.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Compilado"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Recolección de artículos sobre un tema.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Libros"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Síntesis de resultados bien establecidos.")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Más allá de los resultados principales"),Object(l.b)("p",null,"En la literatura científica no sólo encontramos ",Object(l.b)("strong",{parentName:"p"},"resultados empíricos"),"."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Metodologías usadas para estudiar un tema."),Object(l.b)("li",{parentName:"ul"},"Controversias e intentos de replicación"),Object(l.b)("li",{parentName:"ul"},"Ideas de investigación futura")),Object(l.b)("p",null,"Los resultados principales, junto con las evaluaciones de esos resultados, constituyen el ",Object(l.b)("strong",{parentName:"p"},"estado del arte"),".")),Object(l.b)(u,{animate:!0,word:"Estado del arte",mdxType:"Definition"},"Estado del conocimiento en un momento dado")),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Por qué nadie lo ha hecho antes?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("span",{style:{fontSize:"80%"}},Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Tipo de falta"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Descripción"),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null}),"Ejemplo"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Falta de observación")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Simplemente nadie ha hecho la observación/medición correspondiente todavía."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"¿Cuántas tejas en promedio tiene una casa en Bogotá?"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Falta de recursos")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Nadie ha tenido los recursos para hacer la observación."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"¿Qué modelo de Ferrari es el mejor para ir hasta Cartagena?"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Falta de identificación")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"El objeto de investigación no se ha presentado o identificado correctamente."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"¿Cuántas personas tuvieron coronavirus antes de que hubiese pruebas masivas?"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Falta de conceptos")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"No tenemos los conceptos para guíar la investigación."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"¿Cuántas personas no binarias hubo en el antiguo Egipto?"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Falta de relevancia")),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"La investigación no ha sido relevante hasta ahora."),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"¿Qué trabajos se ven más afectados por el teletrabajo?")))))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Por qué nadie lo ha hecho antes?"),Object(l.b)("p",null,"Hay ",Object(l.b)("strong",{parentName:"p"},"varias razones")," por las que la investigación pudo no haberse hecho antes."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Siempre es importante ",Object(l.b)("strong",{parentName:"p"},"identificar la razón")," por la que la investigación no se ha hecho todavía."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Es posible que haya problemas grandes con hacer una observación.")),Object(l.b)("p",null,"Cuando detectemos un vacío, podemos intentar ",Object(l.b)("strong",{parentName:"p"},"resolver")," algunas de esas dificultades."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Dificultades técnicas o tecnológicas"),Object(l.b)("li",{parentName:"ul"},"Dificultades económicas o externas"),Object(l.b)("li",{parentName:"ul"},"Dificultades epistémicas")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Problemas de investigación y situaciones problemáticas"),Object(l.b)("p",null,"Una confusión común es aquella entre un ",Object(l.b)("strong",{parentName:"p"},"problema de investigación")," y una ",Object(l.b)("strong",{parentName:"p"},"situación problemática"),"."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"},className:"centered"},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Problema de investigación")),Object(l.b)("p",null,"Vacío en el conocimiento que deseamos llenar."))),Object(l.b)("div",{style:{width:"45%"},className:"centered"},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Situación problemática")),Object(l.b)("p",null,"Obstáculo práctico a algún tipo de exigencia (e.g. política, moral, económica).")))),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"No todos los problemas de investigación tienen que ver con situaciones problemáticas.")),Object(l.b)(j,{animate:!0,mdxType:"Example"},"ej. ¿Cuáles artistas fueron los más escuchados del pop en los últimos cinco años?")),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Qué justifica una investigación?"),Object(l.b)("p",null,"Hay muchas cosas que no sabemos, pero no todas tienen la misma ",Object(l.b)("strong",{parentName:"p"},"relevancia"),"."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"30%",fontSize:"80%"},className:"fragment"},"¿Cuántos granos de arena hay en la costa pacífica colombiana?"),Object(l.b)("div",{style:{width:"30%",fontSize:"80%"},className:"fragment"},"¿Cuántas plumas tiene la paloma promedio de la plazoleta del Rosario?"),Object(l.b)("div",{style:{width:"30%",fontSize:"80%"},className:"fragment"},"¿Cuántos cabellos en total tienen las cabezas de las personas de este grupo?")),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Estas preguntas probablemente no sean ",Object(l.b)("strong",{parentName:"p"},"relevantes"),", i.e., ni son ",Object(l.b)("strong",{parentName:"p"},"urgentes")," ni son ",Object(l.b)("strong",{parentName:"p"},"importantes"),".")),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"centered",style:{width:"30%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Urgencia")),Object(l.b)("p",null,"Aquello que necesitamos resolver ",Object(l.b)("strong",{parentName:"p"},"rápido"),"."))),Object(l.b)("div",{className:"centered",style:{width:"30%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Importancia")),Object(l.b)("p",null,"Aquello que es ",Object(l.b)("strong",{parentName:"p"},"valioso")," resolver."))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Qué es la relevancia?"),Object(l.b)(u,{animate:!0,word:"Relevancia",mdxType:"Definition"},"Razones por las cuales es importante o urgente resolver un problema."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Podemos distinguir ",Object(l.b)("strong",{parentName:"p"},"dos tipos")," de relevancia.")),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Relevancia práctica")),Object(l.b)("p",null,"La investigación nos ayuda a resolver un problema práctico, i.e., a guiar mejor una acción."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Intervenciones"),Object(l.b)("li",{parentName:"ul"},"Soluciones")))),Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Relevancia teórica")),Object(l.b)("p",null,"La investigación responde a una pregunta que desbloquea otras preguntas importantes."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Refinamiento metodológico"),Object(l.b)("li",{parentName:"ul"},"Investigación conceptual")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("p",null,"En grupos divididos al azar, pensemos en un problema por cada campo de la siguiente tabla."),Object(l.b)("table",{style:{textAlign:"center"}},Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null),Object(l.b)("td",{style:{borderBottom:"1px solid #aaa",borderRight:"1px solid #aaa"}},"Alta relevancia práctica"),Object(l.b)("td",{style:{borderBottom:"1px solid #aaa"}},"Baja relevancia práctica")),Object(l.b)("tr",null,Object(l.b)("td",{style:{borderRight:"1px solid #aaa"}},"Alta relevancia teórica"),Object(l.b)("td",{style:{borderBottom:"1px solid #aaa"}},"1."),Object(l.b)("td",{style:{borderLeft:"1px solid #aaa"}},"2.")),Object(l.b)("tr",null,Object(l.b)("td",{style:{borderTop:"1px solid #aaa",borderRight:"1px solid #aaa"}},"Baja relevancia teórica"),Object(l.b)("td",{style:{borderRight:"1px solid #aaa"}},"3."),Object(l.b)("td",{style:{borderTop:"1px solid #aaa"}},"4.")))),Object(l.b)("p",null,"Luego discutimos los argumentos por la relevancia o falta de relevancia de cada problema de investigación."))),Object(l.b)(p,{title:"Preguntas de investigación",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"De problemas a preguntas"),Object(l.b)("p",null,"Hemos dicho que un problema de investigación es un ",Object(l.b)("strong",{parentName:"p"},"vacío en el conocimiento")," que queremos llenar."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Cada vacío en el conocimiento implica una ",Object(l.b)("strong",{parentName:"p"},"pregunta"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Cuántos cabellos en total tienen las personas de este salón en su cabeza?")),Object(l.b)("p",null,"Además de buscar preguntas relevantes, debemos buscar preguntas ",Object(l.b)("strong",{parentName:"p"},"bien formuladas"),"."),Object(l.b)("p",null,"De modo general:")),Object(l.b)(j,{animate:!0,mdxType:"Example"},"Una pregunta bien formulada es aquella cuyo método de resolución es claro.")),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Datos y preguntas"),Object(l.b)("p",null,"Cuando planteamos una pregunta, es importante que sea claro ",Object(l.b)("strong",{parentName:"p"},"qué dato contestaría a la pregunta"),"."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"¿Cuántos cabellos en total tienen las personas de este salón en su cabeza?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Frente a una pregunta como esta, es claro que la respuesta debe ser un ",Object(l.b)("strong",{parentName:"p"},"número"),"."),Object(l.b)("p",null,"También podemos pensar en varios métodos para contestarla:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Cada uno cuenta los cabellos de su cabeza uno a uno y sumamos."),Object(l.b)("li",{parentName:"ul"},"Hacemos fila y una persona cuenta cabello por cabello."),Object(l.b)("li",{parentName:"ul"},"Nos rapamos todos y enviamos el cabello a conteo.")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Refinando la formulación"),Object(l.b)("p",null,"Cuando una pregunta no deja claro su método de resolución, debemos refinarla."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"¿Qué significa ser estudiante de pregrado?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"No es claro qué exactamente es lo que queremos encontrar."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Qué piensan los estudiantes de pregrado sobre ser estudiante?"),Object(l.b)("li",{parentName:"ul"},"¿A qué se enfrentan los estudiantes de pregrado?"),Object(l.b)("li",{parentName:"ul"},"¿Cuáles son los compromismos de los estudiantes de pregrado?"))),Object(l.b)(m,{animate:!0,mdxType:"Tooltip"},Object(l.b)("p",null,"No todo refinamiento es ",Object(l.b)("strong",{parentName:"p"},"limitando la muestra"),". La muestra en muchos casos no es el problema; es la formulación."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Refinando el espectro"),Object(l.b)("p",null,"A veces las preguntas que hacemos están bien formuladas, pero involucran ",Object(l.b)("strong",{parentName:"p"},"demasiado trabajo"),"."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"¿Qué piensan los universitarios de Colombia sobre la educación virtual?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"En muchos contextos, esta pregunta va a ser demasiado amplia en términos de ",Object(l.b)("strong",{parentName:"p"},"muestra"),"."),Object(l.b)("p",null,"También puede haber casos en los que la muestra es pequeña, pero abusamos de otros recursos."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(l.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"¿Cómo ocurre la vida de una persona durante 20 años?"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Tiempo")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"¿Cuántos Ferrari caben en el parqueadero de mi edificio?"),Object(l.b)("td",Object.assign({parentName:"tr"},{align:null}),"Dinero")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Refinando la complejidad"),Object(l.b)("p",null,"Hay también preguntas que son bien formuladas pero que son demasiado ",Object(l.b)("strong",{parentName:"p"},"difíciles")," de responder."),Object(l.b)(j,{animate:!0,mdxType:"Example"},"¿Por qué el COVID-19 afecta más a estratos bajos?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Para responder a esta pregunta, necesitaríamos:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Confirmar que en efecto el COVID-19 afecta más a estratos bajos."),Object(l.b)("li",{parentName:"ul"},"Revisar qué causas pueden estar involucradas."),Object(l.b)("li",{parentName:"ul"},"Examinar si podemos quitar una presunta causa y se mantiene el efecto."),Object(l.b)("li",{parentName:"ul"},"Controlar cuidadosamente cualquier variable externa.")),Object(l.b)("p",null,"La complejidad de las ",Object(l.b)("strong",{parentName:"p"},"preguntas causales")," hace que sean malas preguntas para comenzar una investigación."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Preguntas conceptuales o empíricas"),Object(l.b)("p",null,"Es importante distinguir preguntas ",Object(l.b)("strong",{parentName:"p"},"empíricas")," de preguntas ",Object(l.b)("strong",{parentName:"p"},"conceptuales"),"."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Preguntas empíricas")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Solucionables mediante alguna ",Object(l.b)("strong",{parentName:"em"},"observación")),"."),Object(l.b)("p",null,"¿Cuál es el país con la población de más inteligente?"))),Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Preguntas conceptuales")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Requieren del ",Object(l.b)("strong",{parentName:"em"},"análisis")," de conceptos"),"."),Object(l.b)("p",null,"¿Qué es la inteligencia?")))),Object(l.b)(m,{animate:!0,mdxType:"Tooltip"},Object(l.b)("p",null,"Si no hay una ",Object(l.b)("strong",{parentName:"p"},"observación")," involucrada en la investigación, la pregunta seguramente ",Object(l.b)("strong",{parentName:"p"},"no es empírica"),".")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Un ",Object(l.b)("strong",{parentName:"p"},"problema de investigación")," es un ",Object(l.b)("strong",{parentName:"p"},"vacío en el conocimiento")," que queremos llenar."),Object(l.b)("p",null,"Hay problemas más ",Object(l.b)("strong",{parentName:"p"},"relevantes")," que otros."),Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Relevancia práctica")),Object(l.b)("p",null,"La investigación nos ayuda a resolver un problema práctico, i.e., a guiar mejor una acción."))),Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Relevancia teórica")),Object(l.b)("p",null,"La investigación responde a una pregunta que desbloquea otras preguntas importantes.")))),Object(l.b)("p",null,"Una buena pregunta es aquella que es ",Object(l.b)("strong",{parentName:"p"},"relevante")," y está ",Object(l.b)("strong",{parentName:"p"},"bien formulada"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Su ",Object(l.b)("strong",{parentName:"li"},"método de solución")," es claro."),Object(l.b)("li",{parentName:"ul"},"Sabemos ",Object(l.b)("strong",{parentName:"li"},"cómo luciría una respuesta"),"."),Object(l.b)("li",{parentName:"ul"},"Es ",Object(l.b)("strong",{parentName:"li"},"manejable"),"."),Object(l.b)("li",{parentName:"ul"},"Es una pregunta ",Object(l.b)("strong",{parentName:"li"},"empírica"),".")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("p",null,"Formulemos preguntas de investigación usando la siguiente fórmula:"),Object(l.b)(j,{mdxType:"Example"},Object(l.b)("p",null,'"Voy a investigar ',Object(l.b)("em",{parentName:"p"},"[tema de investigación]"),"."),Object(l.b)("p",null,"De este tema me gustaría saber ",Object(l.b)("em",{parentName:"p"},"[pregunta]"),"."),Object(l.b)("p",null,"Sabiendo esto, podremos ",Object(l.b)("em",{parentName:"p"},"[relevancia]"),'."')),Object(l.b)("p",null,"Recuerden los criterios de cómo se formulan buenas preguntas.")))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-metodologias-4-preguntas-mdx-987b9f0f327ef18ccff0.js.map