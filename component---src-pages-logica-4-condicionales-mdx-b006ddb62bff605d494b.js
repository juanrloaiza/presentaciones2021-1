(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),c=a("q1tI"),l=a.n(c),r=a("7ljp");a("ZrE4"),a("ejmO");function b(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function i(e){var t=l.a.Children.map(e.children,(function(t,a){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}function s(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}var o=a("rePB"),u=a("zLVn");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){return l.a.cloneElement(e,{className:"fragment"})},p={ul:function(e){var t=e.children;Object(u.a)(e,["children"]);return l.a.createElement("ul",null,l.a.Children.map(t,j))},ol:function(e){var t=e.children;Object(u.a)(e,["children"]);return l.a.createElement("ol",null,l.a.Children.map(t,j))},table:function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=l.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=l.a.Children.map(e.props.children,(function(e){var t=l.a.Children.map(e.props.children,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement("tr",{},t)}));return l.a.createElement("tbody",{},t)}return e}));return l.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function d(e){var t=e.children,a=Object(u.a)(e,["children"]),n=l.a.Children.map(t,(function(e){return l.a.cloneElement(e,{className:e.props.className+" fragment"})}));return l.a.createElement(r.a,Object.assign({},a,{components:p}),n)}var O=a("dbrF");function g(e){var t=e.children,a=Object(u.a)(e,["children"]),n=l.a.Children.toArray(t);return l.a.createElement("div",Object.assign({className:"two-cols"},a),l.a.createElement("div",{className:"col-left "+a.className},n[0]),l.a.createElement("div",{className:"col-right "+a.className},n[1]))}function M(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function N(e){return l.a.createElement("div",{className:"card"},e.title?l.a.createElement("div",{className:"card-title"},e.title):null,l.a.createElement("div",{className:"card-body"},e.children))}var y=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:b,TitleSlide:s,Animate:d,PSection:i,Example:O.b,Tooltip:O.f,Definition:O.a,TwoCols:g,Flex:M,Card:N,Meta:O.d,FQ:O.c};return l.a.createElement("div",{style:{height:"95vh"}},l.a.createElement("div",{className:"reveal"},l.a.createElement("div",{className:"slides"},l.a.createElement(r.a,{components:e},this.props.children))))},t}(l.a.Component);t.a=y},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"f",(function(){return b})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return o}));var n=a("q1tI"),c=a.n(n);function l(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function r(e){var t="meta";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function i(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function s(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}function o(e){return"«"+e.children+"»"}},ejmO:function(e,t,a){},qeoF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return g}));var n=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("WLIS"),r={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},i=b("TitleSlide"),s=b("Slide"),o=b("Animate"),u=b("PSection"),m=b("Example"),j=b("Flex"),p=b("Tooltip"),d={_frontmatter:r},O=l.a;function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(O,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i,{title:"Condicionales",clase:"Lógica ECH",mdxType:"TitleSlide"}),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"En el capítulo anterior..."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Podemos expresar ahora proposiciones usando ",Object(c.b)("strong",{parentName:"p"},"tres operadores lógicos"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Negación ('~')"),Object(c.b)("li",{parentName:"ul"},"Conjunción ('&')"),Object(c.b)("li",{parentName:"ul"},"Disyunción ('v')")),Object(c.b)("p",null,"Esto nos permite expresar una cantidad de ",Object(c.b)("strong",{parentName:"p"},"proposiciones"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Marcela juega tanto ajedrez como damas."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Am & Dm")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Marcela juega algún juego entre ajedrez o damas."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Am v Dm")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Marcela no juega ni ajedrez ni damas."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Am & ~Dm")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~(Am v Dm)")))))),Object(c.b)(u,{title:"Tipos de condiciones",mdxType:"PSection"},Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones"),Object(c.b)("p",null,"A veces en el lenguaje natural queremos expresar que algunas proposiciones sólo son verdaderas si otras también lo son."),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Si mi cédula es par, saldré a comprar hoy."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"En este caso tenemos dos proposiciones que guardan una relación particular: si una es verdadera, la otra también."),Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("p",null,"Juan tiene cédula par."),Object(c.b)("p",null,"Juan sale a comprar hoy."))),Object(c.b)("p",null,"Esto significa que dos proposiciones pueden relacionarse una siendo ",Object(c.b)("strong",{parentName:"p"},"condición")," de otra."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones suficientes y necesarias"),Object(c.b)("p",null,"En lógica distinguimos dos tipos de condiciones."),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment",style:{width:"45%"}},Object(c.b)(m,{mdxType:"Example"},Object(c.b)("p",null,"Saldré a comprar hoy ",Object(c.b)("strong",{parentName:"p"},"si")," tengo cédula par.")),Object(c.b)("p",null,"Tener cédula par es ",Object(c.b)("strong",{parentName:"p"},"suficiente")," para que Juan salga a comprar hoy.")),Object(c.b)("div",{className:"fragment",style:{width:"45%"}},Object(c.b)(m,{mdxType:"Example"},Object(c.b)("p",null,"Saldré a comprar hoy ",Object(c.b)("strong",{parentName:"p"},"sólo si")," tengo cédula par.")),Object(c.b)("p",null,"Tener cédula par es ",Object(c.b)("strong",{parentName:"p"},"necesario")," para que Juan salga a comprar hoy."))),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"¿Qué distingue las ",Object(c.b)("strong",{parentName:"p"},"condiciones suficientes")," de las ",Object(c.b)("strong",{parentName:"p"},"condiciones necesarias"),"?"))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones suficientes"),Object(c.b)("p",null,"Una proposición es ",Object(c.b)("strong",{parentName:"p"},"condición suficiente")," de otra si la verdad de la primera implica la verdad de la segunda."),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Basta con que me pongan reggaetón para que me enrumbe."),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment",style:{fontSize:"80%",width:"45%"}},Object(c.b)("p",null,"Esta proposición nos dice que es ",Object(c.b)("strong",{parentName:"p"},"suficiente")," como que me pongan reggaetón para que me enrumbe."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Si la proposición ",Object(c.b)("strong",{parentName:"li"},"«","A Juan le pusieron reggaetón","»")," es verdadera, la proposición ",Object(c.b)("strong",{parentName:"li"},"«","Juan se enrumba","»")," también lo será."))),Object(c.b)("div",{className:"fragment",style:{fontSize:"80%",width:"45%"}},Object(c.b)("p",null,"Sin embargo, puede ",Object(c.b)("strong",{parentName:"p"},"no ser necesario")," que me pongan reggaetón para que esto ocurra (e.g. puedo enrumbarme con salsa o merengue)."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Si la proposición ",Object(c.b)("strong",{parentName:"li"},"«","A Juan le pusieron reggaetón","»")," es falsa, esto ",Object(c.b)("em",{parentName:"li"},"no implica")," que la proposición ",Object(c.b)("strong",{parentName:"li"},"«","Juan se enrumba","»")," también lo sea."))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones necesarias"),Object(c.b)("p",null,"Una proposición es ",Object(c.b)("strong",{parentName:"p"},"condición necesaria")," de otra si la falsedad de la primera implica la falsedad de la segunda."),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Necesito que me pongan reggaetón para que me enrumbe."),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment",style:{fontSize:"80%",width:"45%"}},Object(c.b)("p",null,"Esta proposición nos dice que es ",Object(c.b)("strong",{parentName:"p"},"necesario")," como que me pongan reggaetón para que me enrumbe."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Si la proposición ",Object(c.b)("strong",{parentName:"li"},"«","A Juan le pusieron reggaetón","»")," es falsa, la proposición ",Object(c.b)("strong",{parentName:"li"},"«","Juan se enrumba","»")," también lo será."))),Object(c.b)("div",{className:"fragment",style:{fontSize:"80%",width:"45%"}},Object(c.b)("p",null,"Sin embargo, puede ",Object(c.b)("strong",{parentName:"p"},"no ser suficiente")," que me pongan reggaetón para que esto ocurra (e.g. puedo necesitar además estar con amigos)."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Si la proposición ",Object(c.b)("strong",{parentName:"li"},"«","A Juan le pusieron reggaetón","»")," es verdadera, esto ",Object(c.b)("em",{parentName:"li"},"no implica")," que la proposición ",Object(c.b)("strong",{parentName:"li"},"«","Juan se enrumba","»")," también lo sea."))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Síntesis"),Object(c.b)("p",null,"Tenemos entonces que una proposición puede ser ",Object(c.b)("strong",{parentName:"p"},"condición")," de otra de dos maneras:"),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment",style:{textAlign:"center",width:"100%"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Condición suficiente")),Object(c.b)("p",null,"Si P es verdadera, Q es verdadera.")),Object(c.b)("div",{className:"fragment",style:{textAlign:"center",width:"100%"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Condición necesaria")),Object(c.b)("p",null,"Si P es falsa, Q es falsa."))),Object(c.b)(p,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Que algo sea condición suficiente de algo no significa que sea condición necesaria y viceversa."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejercicios"),Object(c.b)("p",null,"Para los siguientes enunciados, diga si el primer enunciado (P) es condición ",Object(c.b)("strong",{parentName:"p"},"suficiente")," o ",Object(c.b)("strong",{parentName:"p"},"necesaria")," del segundo (Q)."),Object(c.b)("table",{style:{fontSize:"80%",margin:"0"}},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"(P)"),Object(c.b)("th",null,"(Q)"),Object(c.b)("th",null,"Condición"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Sacar 4.0 en la nota final de la clase."),Object(c.b)("td",{className:"fragment"},"Pasar el curso."),Object(c.b)("td",{className:"fragment"},"Suficiente")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Tener internet."),Object(c.b)("td",{className:"fragment"},"Asistir a clase por Zoom."),Object(c.b)("td",{className:"fragment"},"Necesaria")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Ser mayor de edad."),Object(c.b)("td",{className:"fragment"},"Tener derecho a votar."),Object(c.b)("td",{className:"fragment"},"Necesaria")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Jugar ajedrez."),Object(c.b)("td",{className:"fragment"},"Jugar un juego de mesa."),Object(c.b)("td",{className:"fragment"},"Suficiente")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Cumplir con todos sus créditos."),Object(c.b)("td",{className:"fragment"},"Graduarse de su programa."),Object(c.b)("td",{className:"fragment"},"Necesaria"))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"¿Cuándo estoy mintiendo?"),Object(c.b)("p",null,"Supongamos que hago las siguientes afirmaciones. ¿Cuánto estoy mintiendo?"),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{style:{fontSize:"80%",borderRight:"1px solid black",margin:"0",paddingRight:"1rem"}},Object(c.b)("p",null,'"Saldría contigo ',Object(c.b)("strong",{parentName:"p"},"si"),' tienes carro"'),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null),Object(c.b)("th",null,"Salgo"),Object(c.b)("th",null,"No salgo"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Tiene carro"),Object(c.b)("td",{className:"fragment"},"V"),Object(c.b)("td",{className:"fragment"},Object(c.b)("strong",null,"¡Mentira!"))),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"No tiene carro"),Object(c.b)("td",{className:"fragment"},"V"),Object(c.b)("td",{className:"fragment"},"V")))))),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{style:{fontSize:"80%",margin:"0",paddingRight:"1rem"}},Object(c.b)("p",null,'"Saldría contigo ',Object(c.b)("strong",{parentName:"p"},"sólo si"),' tienes carro."'),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null),Object(c.b)("th",null,"Salgo"),Object(c.b)("th",null,"No salgo"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"Tiene carro"),Object(c.b)("td",{className:"fragment"},"V"),Object(c.b)("td",{className:"fragment"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment"},"No tiene carro"),Object(c.b)("td",{className:"fragment"},Object(c.b)("strong",null,"¡Mentira!")),Object(c.b)("td",{className:"fragment"},"V"))))))))),Object(c.b)(u,{title:"Condicionales",mdxType:"PSection"},Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condicionales"),Object(c.b)("p",null,"Podemos expresar las relaciones entre condiciones usando el operador ",Object(c.b)("strong",{parentName:"p"},"condicional")," ('→' o '","⊃","')."),Object(c.b)(m,{mdxType:"Example"},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Salgo contigo si tienes carro."),Object(c.b)("p",null,"Tienes carro → Salgo contigo"),Object(c.b)("p",null,"Ca → Sja"))),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"El operador condicional dice que la proposición de la izquierda (",Object(c.b)("strong",{parentName:"p"},"antecedente"),") ",Object(c.b)("strong",{parentName:"p"},"implica")," la proposición de la derecha (",Object(c.b)("strong",{parentName:"p"},"consecuente"),")."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplos"),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si Arias tiene gato, su ropa tiene pelos."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Ga → Pa")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Bernal es estudiante si tiene tiempo."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Tb → Eb")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si Castro trabaja y estudia, no juega videojuegos."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"(Tc & Ec) → ~Vc")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si Díaz estudia, estudia filosofía o matemáticas."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Ed → (Fd v Md)")))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Relaciones lógicas"),Object(c.b)("p",null,"Es importante tener presente que el condicional expresa una ",Object(c.b)("strong",{parentName:"p"},"relación lógica")," (i.e., inferencial)."),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Puedo votar → Tengo cédula"),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Este enunciado es verdadero, pues si es verdad que puedo votar, es verdad que tengo cédula."),Object(c.b)("p",null,"Sin embargo, no es que tenga cédula ",Object(c.b)("em",{parentName:"p"},"porque")," puedo votar."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Poder votar no lleva a que me den mi cédula."),Object(c.b)("li",{parentName:"ul"},"Poder votar ocurre después de tener la cédula."))),Object(c.b)(p,{animate:!0,mdxType:"Tooltip"},"El condicional sólo nos dice que podemos inferir una proposición a partir de otra, nada más.")),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones suficientes"),Object(c.b)("p",null,"El operador condicional puede usarse fácilmente para expresar que una proposición es ",Object(c.b)("strong",{parentName:"p"},"condición suficiente")," de otra."),Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Basta con que me pongan reggaetón para que me enrumbe.")),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"En este ejemplo, la proposición ",Object(c.b)("strong",{parentName:"p"},"«","A Juan le ponen reggeatón","»")," es condición suficiente para la proposición ",Object(c.b)("strong",{parentName:"p"},"«","Juan se enrumba","»"),". Así las cosas:")),Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Si a Juan le ponen reggeatón, entonces se enrumba."),Object(c.b)("p",null,"Rj → Ej")),Object(c.b)(p,{animate:!0,mdxType:"Tooltip"},'Si bien hay patrones gramaticales (i.e. "Si...entonces..."), es mejor no apegarse mucho a ellos. Mejor pensar en qué se sigue de qué.')),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones necesarias"),Object(c.b)("p",null,"También podemos usar el operador condicional para expresar ",Object(c.b)("strong",{parentName:"p"},"condiciones necesarias"),"."),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Es necesario que me pongan reggeatón para que me enrumbe."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"En este ejemplo, la proposición ",Object(c.b)("strong",{parentName:"p"},"«","A Juan le ponen reggaetón","»")," es condición necesaria para la proposición ",Object(c.b)("strong",{parentName:"p"},"«","Juan se enrumba","»")," (i.e., si la primera es falsa, la otra también)."),Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Si a Juan ",Object(c.b)("strong",{parentName:"p"},"no")," le ponen reggaetón, Juan ",Object(c.b)("strong",{parentName:"p"},"no")," se enrumba."),Object(c.b)("p",null,"~Rj → ~Ej")),Object(c.b)("p",null,"En este caso es importante fijarse en las ",Object(c.b)("strong",{parentName:"p"},"negaciones")," para formalizar correctamente la relación."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones necesarias"),Object(c.b)("p",null,"Una manera de entender que una proposición es condición necesaria para otra es mediante la formalización ",Object(c.b)("strong",{parentName:"p"},"~Pa → ~Qa"),"."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Sin embargo, hay otra manera interesante de formalizar esta relación. Consideremos nuevamente el ejemplo:"),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Es necesario que me pongan reggeatón para que me enrumbe."),Object(c.b)("p",null,"En este caso, ¿qué puedo ",Object(c.b)("strong",{parentName:"p"},"inferir")," de que esté enrumbado?"),Object(c.b)("p",null,"Si estoy enrumbado, podemos ",Object(c.b)("strong",{parentName:"p"},"inferir")," que me pusieron reggeatón. En ese orden de ideas, también puedo formalizar esta relación así:"),Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Si Juan está enrumbado, le pusieron reggaetón."),Object(c.b)("p",null,"Ej → Rj")))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Condiciones suficientes y necesarias"),Object(c.b)("p",null,"Hay ocasiones en las que una proposición será ",Object(c.b)("strong",{parentName:"p"},"condición suficiente y necesaria")," de otra."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("p",null,"Sacar al menos 3.0 en el curso. (Sa)"),Object(c.b)("p",null,"Pasar el curso (Ca)"))),Object(c.b)("p",null,"En este caso, los siguientes condicionales son ambos verdaderos:"),Object(c.b)(m,{animate:!0,mdxType:"Example"},Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("p",null,"Sa → Ca"),Object(c.b)("p",null,"Ca → Sa")),Object(c.b)("p",null,"(Sa → Ca) & (Ca → Sa)")),Object(c.b)("p",null,"Para estos casos, podemos usar el operador ",Object(c.b)("strong",{parentName:"p"},"bicondicional")," ('↔' o '","≡","')."),Object(c.b)(m,{animate:!0,mdxType:"Example"},"Sa ↔ Ca")))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Resumen"),Object(c.b)("p",null,"Hay dos formas en las que una proposición (",Object(c.b)("strong",{parentName:"p"},"P"),") puede ser condición de otra (",Object(c.b)("strong",{parentName:"p"},"Q"),")."),Object(c.b)(j,{mdxType:"Flex"},Object(c.b)("div",{align:"center",style:{width:"100%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Condición suficiente"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Si P es verdadera, Q es verdadera.")),Object(c.b)("p",null,"P → Q"),Object(c.b)("p",null,"(~Q → ~P)"))),Object(c.b)("div",{align:"center",style:{width:"100%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Condición necesaria"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Si P es falsa, Q es falsa.")),Object(c.b)("p",null,"~P → ~Q"),Object(c.b)("p",null,"(Q → P)")))),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Podemos usar el operador ",Object(c.b)("strong",{parentName:"p"},"condicional")," (→) (y ",Object(c.b)("strong",{parentName:"p"},"bicondicional")," (↔)) para expresar estas relaciones entre proposiciones."))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-logica-4-condicionales-mdx-b006ddb62bff605d494b.js.map