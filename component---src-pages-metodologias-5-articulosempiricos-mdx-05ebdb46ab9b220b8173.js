(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),c=a("q1tI"),l=a.n(c),i=a("7ljp");a("ZrE4"),a("ejmO");function r(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function s(e){var t=l.a.Children.map(e.children,(function(t,a){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}function o(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}var u=a("rePB"),b=a("zLVn");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e){return l.a.cloneElement(e,{className:"fragment"})},m={ul:function(e){var t=e.children;Object(b.a)(e,["children"]);return l.a.createElement("ul",null,l.a.Children.map(t,M))},ol:function(e){var t=e.children;Object(b.a)(e,["children"]);return l.a.createElement("ol",null,l.a.Children.map(t,M))},table:function(e){var t=e.children,a=Object(b.a)(e,["children"]),n=l.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=l.a.Children.map(e.props.children,(function(e){var t=l.a.Children.map(e.props.children,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement("tr",{},t)}));return l.a.createElement("tbody",{},t)}return e}));return l.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function d(e){var t=e.children,a=Object(b.a)(e,["children"]),n=l.a.Children.map(t,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement(i.a,Object.assign({},a,{components:m}),n)}var p=a("dbrF");function N(e){var t=e.children,a=Object(b.a)(e,["children"]),n=l.a.Children.toArray(t);return l.a.createElement("div",Object.assign({className:"two-cols"},a),l.a.createElement("div",{className:"col-left "+a.className},n[0]),l.a.createElement("div",{className:"col-right "+a.className},n[1]))}function O(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function L(e){return l.a.createElement("div",{className:"card"},e.title?l.a.createElement("div",{className:"card-title"},e.title):null,l.a.createElement("div",{className:"card-body"},e.children))}var g=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:r,TitleSlide:o,Animate:d,PSection:s,Example:p.b,Tooltip:p.e,Definition:p.a,TwoCols:N,Flex:O,Card:L,Meta:p.c};return l.a.createElement("div",{style:{height:"95vh"}},l.a.createElement("div",{className:"reveal"},l.a.createElement("div",{className:"slides"},l.a.createElement(i.a,{components:e},this.props.children))))},t}(l.a.Component);t.a=g},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return o}));var n=a("q1tI"),c=a.n(n);function l(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function i(e){var t="meta";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function r(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function s(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function o(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}},ejmO:function(e,t,a){},x3f4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return N}));var n=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("WLIS"),i={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},s=r("TitleSlide"),o=r("Slide"),u=r("Animate"),b=r("TwoCols"),j=r("Tooltip"),M=r("Definition"),m=r("Example"),d={_frontmatter:i},p=l.a;function N(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(p,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s,{title:"Artículos de investigación",clase:"Metodologías de Investigación",mdxType:"TitleSlide"}),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Introducción"),Object(c.b)("p",null,"Recordemos que la investigación se reporta en varios tipos de producto."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Artículos de investigacíon")),Object(c.b)("li",{parentName:"ul"},"Artículos de revisión"),Object(c.b)("li",{parentName:"ul"},"Compilados"),Object(c.b)("li",{parentName:"ul"},"Libros")),Object(c.b)("p",null,"¿En qué consiste un artículo de investigación?"))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"El artículo de investigación empírica"),Object(c.b)("p",null,"Un artículo de investigación empírica no es más que un ",Object(c.b)("strong",{parentName:"p"},"reporte de un estudio"),"."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Ejemplo: Álvarez Rivadulla, M. J. (2019)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Estudió una población de estudiantes"),Object(c.b)("li",{parentName:"ul"},"Usó entrevistas, anotaciones etnográficas y un grupo focal"),Object(c.b)("li",{parentName:"ul"},"Reporta algunos resultados sobre relaciones de clase")),Object(c.b)("p",null,"El artículo es simplemente la ",Object(c.b)("strong",{parentName:"p"},"narración")," del estudio."),Object(c.b)("p",null,"Esta narración debe dejar claro ",Object(c.b)("strong",{parentName:"p"},"qué se hizo")," y ",Object(c.b)("strong",{parentName:"p"},"cómo se hizo"),"."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"¿Qué ",Object(c.b)("em",{parentName:"h1"},"no")," es un artículo de investigación empírica?"),Object(c.b)("p",null,"Un artículo de investigación empírica siempre hace una ",Object(c.b)("strong",{parentName:"p"},"observación"),"."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Se distingue de los ",Object(c.b)("strong",{parentName:"li"},"artículos de revisión")," o ",Object(c.b)("strong",{parentName:"li"},"artículos teóricos"),"."))),Object(c.b)(b,{mdxType:"TwoCols"},Object(c.b)("div",null,Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Artículos de revisión")),Object(c.b)("p",null,"Resumen el estado del arte de un tema."))),Object(c.b)("div",null,Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Artículos teóricos")),Object(c.b)("p",null,"Desarrollan una teoría (i.e., idea general y abstracta)")))),Object(c.b)(j,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Un artículo de investigación empírica debe decirme ",Object(c.b)("strong",{parentName:"p"},"qué/a quién observaron")," y ",Object(c.b)("strong",{parentName:"p"},"cómo lo observaron"),"."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Publicaciones académicas"),Object(c.b)("p",null,"Hemos dicho antes que los ",Object(c.b)("strong",{parentName:"p"},"artículos académicos")," se encuentran en ",Object(c.b)("strong",{parentName:"p"},"publicaciones académicas"),"."),Object(c.b)(M,{animate:!0,word:"Publicación académica",mdxType:"Definition"},Object(c.b)("p",null,"Publicación en contexto académico que cuenta por ",Object(c.b)("strong",{parentName:"p"},"revisión por pares"),".")),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Las revistas académicas pueden organizarse de varias maneras:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Disciplina:   ",Object(c.b)("em",{parentName:"li"},"Journal of Sociology"),", ",Object(c.b)("em",{parentName:"li"},"Journal of Anthropological Research")),Object(c.b)("li",{parentName:"ul"},"Tema: ",Object(c.b)("em",{parentName:"li"},"Revista de Psicología del Trabajo y de las Organizaciones")),Object(c.b)("li",{parentName:"ul"},"País: ",Object(c.b)("em",{parentName:"li"},"Revista colombiana de sociología"),", ",Object(c.b)("em",{parentName:"li"},"Revista mexicana de sociología"))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Edición y revisión por pares"),Object(c.b)("p",null,"Cada revista académica es ",Object(c.b)("strong",{parentName:"p"},"editada")," por un ",Object(c.b)("strong",{parentName:"p"},"comité editorial"),"."),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Ese comité determina ",Object(c.b)("strong",{parentName:"p"},"qué temas")," se publican y ",Object(c.b)("strong",{parentName:"p"},"en qué momento"),"."),Object(c.b)("p",null,"Cada manuscrito, si pasa los estándares mínimos de la revista, es enviado a ",Object(c.b)("strong",{parentName:"p"},"pares académicos"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Académicos expertos en la disciplina"),Object(c.b)("li",{parentName:"ul"},"Determinan la calidad (metodológica) del manuscrito"),Object(c.b)("li",{parentName:"ul"},"Sugieren correcciones o ediciones")),Object(c.b)("p",null,"Usualmente cada artículo es revisado por ",Object(c.b)("strong",{parentName:"p"},"dos pares"),"."),Object(c.b)("p",null,"Cada par recomienda ",Object(c.b)("strong",{parentName:"p"},"publicación"),", ",Object(c.b)("strong",{parentName:"p"},"publicación con ediciones")," o ",Object(c.b)("strong",{parentName:"p"},"rechazo"),"."))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Estructura de un artículo empírico"),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Introducción",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Sitúa el estudio en el estado del arte"),Object(c.b)("li",{parentName:"ul"},"Plantea el problema y la pregunta de investigación"))),Object(c.b)("li",{parentName:"ol"},"Metodología",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Describe los procedimientos que llevaron a cabo"))),Object(c.b)("li",{parentName:"ol"},"Resultados",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Muestra los datos encontrados"))),Object(c.b)("li",{parentName:"ol"},"Discusión",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Usa (interpreta) los datos para probar ideas"))),Object(c.b)("li",{parentName:"ol"},"Conclusión",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Sitúa el hallazgo principal dentro del estado del arte")))))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplo: Álvarez Rivadulla (2019)"),Object(c.b)("p",null,"El artículo de Álvarez Rivadulla se plantea la pregunta:"),Object(c.b)(m,{animate:!0,mdxType:"Example"},'"¿Cómo afectan [las interacciones entre clases sociales] el modo en que [los estudiantes becados] conciben la desigualdad y su propia clase social?" (p. 52)'),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Más específicamente:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},'"¿Cómo experimentan los estudiantes becados las relaciones con clases sociales más altas en el ámbito universitario, los prejuicios sobre el otro, las ideas de desigualdas, las emociones y los límites simbólicos, y cómo todo facilita o inhibe la formación de redes de amistad?" (pp. 56-57)')))),Object(c.b)(o,{mdxType:"Slide"},Object(c.b)("h1",null,"Actividad"),Object(c.b)(u,{mdxType:"Animate"},Object(c.b)("p",null,"Nos dividiremos en grupos al azar. Asignaré las siguientes secciones a distintos grupos, que las presentarán para reconstruir este estudio."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Antecedentes directos"),Object(c.b)("li",{parentName:"ol"},"Metodología"),Object(c.b)("li",{parentName:"ol"},"Recalibrar la desigualdad y reconocer al otro"),Object(c.b)("li",{parentName:"ol"},"Heridas de clase"),Object(c.b)("li",{parentName:"ol"},"Límites simbólicos"),Object(c.b)("li",{parentName:"ol"},'¿"Los pilos con los pilos, los ricos con los ricos"?')))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-metodologias-5-articulosempiricos-mdx-05ebdb46ab9b220b8173.js.map