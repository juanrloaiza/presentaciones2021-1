(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Bl7J:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n("zLVn"),l=n("q1tI"),c=n.n(l);function r(e){var t=e.children,n=Object(a.a)(e,["children"]),l=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},n),c.a.createElement("div",{className:"col-left "+n.className},l[0]),c.a.createElement("div",{className:"col-right "+n.className},l[1]))}function s(e){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function i(e){return c.a.createElement("div",{className:"card"},e.title?c.a.createElement("div",{className:"card-title"},e.title):null,c.a.createElement("div",{className:"card-body"},e.children))}},Dujm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("rePB"),l=n("zLVn"),c=n("q1tI"),r=n.n(c),s=n("7ljp");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var u=function(e){return r.a.cloneElement(e,{className:"fragment"})},b={ul:function(e){var t=e.children;Object(l.a)(e,["children"]);return r.a.createElement("ul",null,r.a.Children.map(t,u))},ol:function(e){var t=e.children;Object(l.a)(e,["children"]);return r.a.createElement("ol",null,r.a.Children.map(t,u))},table:function(e){var t=e.children,n=Object(l.a)(e,["children"]),c=r.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=r.a.Children.map(e.props.children,(function(e){var t=r.a.Children.map(e.props.children,(function(e){return r.a.cloneElement(e,{className:"fragment"})}));return r.a.createElement("tr",{},t)}));return r.a.createElement("tbody",{},t)}return e}));return r.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),c)}};function o(e){var t=e.children,n=Object(l.a)(e,["children"]),a=r.a.Children.map(t,(function(e){return r.a.cloneElement(e,{className:e.props.className+" fragment"})}));return r.a.createElement(s.a,Object.assign({},n,{components:b}),a)}},WLIS:function(e,t,n){"use strict";var a=n("dI71"),l=n("q1tI"),c=n.n(l),r=n("7ljp"),s=(n("ZrE4"),n("ejmO"),n("g8K8")),i=n("nF89"),u=n("t6Qi"),b=n("Dujm"),o=n("dbrF"),m=n("Bl7J"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e={Slide:s.a,TitleSlide:u.a,Animate:b.a,PSection:i.a,Emphasis:o.b,Tooltip:o.g,Definition:o.a,TwoCols:m.c,Flex:m.b,Card:m.a,Meta:o.e,FQ:o.d,Example:o.c};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(r.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=j},ZrE4:function(e,t,n){},dbrF:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return m}));var a=n("zLVn"),l=n("q1tI"),c=n.n(l);function r(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function s(e){var t="meta";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function i(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function u(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function b(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}function o(e){return"«"+e.children+"»"}function m(e){var t=e.children,n=Object(a.a)(e,["children"]);return c.a.createElement("div",Object.assign({style:{borderLeft:"5px solid #ccc",marginLeft:"1rem",paddingLeft:"1rem"}},n),t)}},ejmO:function(e,t,n){},g8K8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),l=n.n(a);function c(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}},nF89:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),l=n.n(a);function c(e){var t=l.a.Children.map(e.children,(function(t,n){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}},t6Qi:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),l=n.n(a);function c(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}},tCHw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return g}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),c=n("WLIS"),r={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},i=s("TitleSlide"),u=s("Slide"),b=s("Definition"),o=s("TwoCols"),m=s("Animate"),j=s("Emphasis"),d=s("Flex"),p=s("Argument"),M={_frontmatter:r},O=c.a;function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(O,Object.assign({},M,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i,{title:"Argumentos deductivos",clase:"Argumentación",mdxType:"TitleSlide"}),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Argumentos"),Object(l.b)("p",null,"Un ",Object(l.b)("strong",{parentName:"p"},"argumento")," es un conjunto de proposiciones especial."),Object(l.b)(b,{animate:!0,word:"Argumento",mdxType:"Definition"},Object(l.b)("p",null,"Conjunto de proposiciones en las que unas (conclusiones) se ",Object(l.b)("strong",{parentName:"p"},"infieren")," de otras (premisas).")),Object(l.b)("div",{className:"two-cols"},Object(l.b)("div",{className:"col-left fragment"},Object(l.b)("div",{className:"argument"},Object(l.b)("p",null,"Todos los humanos son mortales."),Object(l.b)("p",null,"Jorge es humano."),Object(l.b)("p",null,"Jorge es mortal."))),Object(l.b)("div",{className:"col-right fragment"},Object(l.b)("div",{className:"argument"},Object(l.b)("p",null,"Si alguien saca 5.0 en el parcial, el profesor será feliz."),Object(l.b)("p",null,"Iván sacó 5.0 en el parcial."),Object(l.b)("p",null,"El profesor es feliz."))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Tipos de argumentos"),Object(l.b)("p",null,"Hay dos tipos generales de argumentos."),Object(l.b)(o,{style:{marginBottom:"1rem"},mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Argumentos deductivos")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Argumentos cuya conclusión se sigue ",Object(l.b)("strong",{parentName:"em"},"necesariamente")," de las premisas"))),Object(l.b)("div",{className:" fragment argument"},Object(l.b)("p",null,"Todos los humanos son mortales."),Object(l.b)("p",null,"Jorge es humano."),Object(l.b)("p",null,"Jorge es mortal."))),Object(l.b)("div",null,Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Argumentos inductivos")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Argumentos cuya conclusión se sigue ",Object(l.b)("strong",{parentName:"em"},"probablemente")," de las premisas"))),Object(l.b)("div",{className:" fragment argument"},Object(l.b)("p",null,"La mayoría de humanos son diestros."),Object(l.b)("p",null,"Jorge es humano."),Object(l.b)("p",null,"Jorge es diestro.")))),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,"A continuación nos concentraremos en cómo formular buenos ",Object(l.b)("strong",{parentName:"p"},"argumentos deductivos"),"."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Argumentos deductivos"),Object(l.b)("p",null,"Un argumento deductivo es aquel cuya conclusión se sigue ",Object(l.b)("strong",{parentName:"p"},"necesariamente")," de las premisas."),Object(l.b)("p",null,"Hay dos criterios para juzgar un argumento deductivo."),Object(l.b)(o,{style:{margin:"2rem 0"},mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Validez")),Object(l.b)("p",null,"Que la conclusión se siga con necesidad de las premisas."))),Object(l.b)("div",null,Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Solidez")),Object(l.b)("p",null,"Que el argumento sea válido y tenga premisas verdaderas.")))),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,"Veamos cada una de estas propiedades."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Validez deductiva"),Object(l.b)("p",null,"Un argumento es ",Object(l.b)("strong",{parentName:"p"},"deductivamente válido")," sii su conclusión se sigue ",Object(l.b)("em",{parentName:"p"},"necesariamente")," de las premisas."),Object(l.b)(j,{mdxType:"Emphasis"},Object(l.b)(o,{mdxType:"TwoCols"},Object(l.b)("div",{className:"argument fragment"},Object(l.b)("p",null,"Todos los humanos son mortales."),Object(l.b)("p",null,"Jorge es humano."),Object(l.b)("p",null,"Jorge es mortal.")),Object(l.b)("div",{className:"argument fragment"},Object(l.b)("p",null,"Todos los humanos son mortales."),Object(l.b)("p",null,"Mario es mortal."),Object(l.b)("p",null,"Mario es humano.")))),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,"¿Qué significa este ",Object(l.b)("strong",{parentName:"p"},"necesariamente"),"?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Si las premisas son verdaderas, la conclusión ",Object(l.b)("strong",{parentName:"p"},"necesariamente")," lo es.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Es ",Object(l.b)("strong",{parentName:"p"},"imposible")," que las premisas sean verdaderas mientras que la conclusión sea falsa."))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Solidez"),Object(l.b)("p",null,"Un argumento puede ser válido y ",Object(l.b)("em",{parentName:"p"},"no")," tener premisas verdaderas."),Object(l.b)(j,{mdxType:"Emphasis"},Object(l.b)(d,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment argument"},Object(l.b)("p",null,"Todos los humanos son azules."),Object(l.b)("p",null,"Jorge es humano."),Object(l.b)("p",null,"Jorge es azul.")),Object(l.b)("div",{className:"fragment argument"},Object(l.b)("p",null,"El profesor estudió filosofía o economía."),Object(l.b)("p",null,"El profesor no estudió filosofía."),Object(l.b)("p",null,"El profesor estudió economía.")))),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,"Si un argumento es válido y ",Object(l.b)("em",{parentName:"p"},"además")," tiene premisas verdaderas, es ",Object(l.b)("strong",{parentName:"p"},"sólido"),".")),Object(l.b)(j,{mdxType:"Emphasis"},Object(l.b)("div",{className:"fragment argument"},Object(l.b)("p",null,"Si estoy en Bogotá, estoy a más de 1000m sobre el nivel del mar."),Object(l.b)("p",null,"Estoy en Bogotá."),Object(l.b)("p",null,"Estoy a más de 1000m sobre el nivel del mar.")))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Verdad y validez"),Object(l.b)("p",null,"Recordemos que un argumento puede ser ",Object(l.b)("strong",{parentName:"p"},"válido")," y tener ",Object(l.b)("strong",{parentName:"p"},"premisas falsas"),"."),Object(l.b)(j,{animate:!0,mdxType:"Emphasis"},Object(l.b)(p,{mdxType:"Argument"},Object(l.b)("p",null,"Si todos vienen a clase, perderán el curso."),Object(l.b)("p",null,"Todos vienen a clase."),Object(l.b)("p",null,"Perderán el curso."))),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,"La ",Object(l.b)("strong",{parentName:"p"},"validez")," de un argumento no depende de la ",Object(l.b)("strong",{parentName:"p"},"verdad de hecho")," de sus premisas o conclusión."),Object(l.b)("p",null,"Cuando un argumento es ",Object(l.b)("strong",{parentName:"p"},"válido")," y ",Object(l.b)("em",{parentName:"p"},"además")," tiene premisas verdaderas, es un argumento ",Object(l.b)("strong",{parentName:"p"},"sólido"),"."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Ejemplos"),Object(l.b)("p",null,"¿Válido o inválido?"),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("table",null,Object(l.b)("tbody",null,Object(l.b)("tr",{style:{borderBottom:"1px solid black"}},Object(l.b)("td",null,Object(l.b)("p",null,"Si algún estudiante pierde el parcial, estaré triste."),Object(l.b)("p",null,"Un estudiante perdió el parcial."),Object(l.b)("p",null,"Por lo tanto, estoy triste.")),Object(l.b)("td",null,"Válido")),Object(l.b)("tr",{style:{borderBottom:"1px solid black"}},Object(l.b)("td",{style:{paddingTop:"1rem"}},Object(l.b)("p",null,"Basta con estudiar para pasar el curso."),Object(l.b)("p",null,"Pasé el curso."),Object(l.b)("p",null,"Por lo tanto, estudié.")),Object(l.b)("td",{style:{paddingTop:"1rem"}},"Inválido")),Object(l.b)("tr",null,Object(l.b)("td",{style:{paddingTop:"1rem"}},Object(l.b)("p",null,"Si no estudio, no paso el curso."),Object(l.b)("p",null,"Pasé el curso."),Object(l.b)("p",null,"Por lo tanto, estudié.")),Object(l.b)("td",{style:{paddingTop:"1rem"}},"Válido")))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Patrones de argumentos deductivos"),Object(l.b)("p",null,"Hay varios patrones deductivos comunes que ustedes ya conocen."),Object(l.b)(m,{mdxType:"Animate"},Object(l.b)("p",null,"Las reglas de la ",Object(l.b)("strong",{parentName:"p"},"deducción natural")," constituyen reglas de inferencia deductiva."),Object(l.b)("p",null,"Varias de estas reglas constituyen patrones de argumentos deductivos."),Object(l.b)("p",null,"Ejemplo: ",Object(l.b)("em",{parentName:"p"},"Modus ponens"))),Object(l.b)(j,{animate:!0,mdxType:"Emphasis"},Object(l.b)(p,{mdxType:"Argument"},Object(l.b)("p",null,"Si Arias estudia, aprende mucho."),Object(l.b)("p",null,"Arias estudia."),Object(l.b)("p",null,"Arias aprende mucho.")))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("p",null,"Nos dividiremos en 4 grupos. Cada grupo nos presentará algunas reglas de deducción (puede ser en lenguaje formal) y un argumento de ejemplo por cada regla (en lenguaje natural)."),Object(l.b)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},Object(l.b)("div",{className:"fragment",style:{width:"50%",marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Grupo 1")),Object(l.b)("p",null,"Modus tollens"),Object(l.b)("p",null,"Prueba condicional (I→)"),Object(l.b)("p",null,"Silogismo hipotético")),Object(l.b)("div",{className:"fragment",style:{width:"50%",marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Grupo 2")),Object(l.b)("p",null,"Silogismo disyuntivo"),Object(l.b)("p",null,"Dilema (Ev)"),Object(l.b)("p",null,"Reducción al absurdo")),Object(l.b)("div",{className:"fragment",style:{width:"50%",marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Grupo 3")),Object(l.b)("p",null,"Generalización (I∃)"),Object(l.b)("p",null,"Prueba existencial (E∃)"),Object(l.b)("p",null,"Sustitución (=)")),Object(l.b)("div",{className:"fragment",style:{width:"50%",marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Grupo 4")),Object(l.b)("p",null,"Universalizacíon (I∀)"),Object(l.b)("p",null,"Instanciación (E∀)"),Object(l.b)("p",null,"Intercambio de cuantificadores (∀/∃)")))))}g.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-argumentacion-9-argsdeductivos-mdx-301956644a6dfde382a2.js.map