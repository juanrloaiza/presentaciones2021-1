(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Bl7J:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return r}));var n=a("zLVn"),s=a("q1tI"),c=a.n(s);function l(e){var t=e.children,a=Object(n.a)(e,["children"]),s=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},a),c.a.createElement("div",{className:"col-left "+a.className},s[0]),c.a.createElement("div",{className:"col-right "+a.className},s[1]))}function b(e){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function r(e){return c.a.createElement("div",{className:"card"},e.title?c.a.createElement("div",{className:"card-title"},e.title):null,c.a.createElement("div",{className:"card-body"},e.children))}},Dujm:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("zLVn"),c=a("q1tI"),l=a.n(c),b=a("7ljp");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var i=function(e){return l.a.cloneElement(e,{className:"fragment"})},m={ul:function(e){var t=e.children;Object(s.a)(e,["children"]);return l.a.createElement("ul",null,l.a.Children.map(t,i))},ol:function(e){var t=e.children;Object(s.a)(e,["children"]);return l.a.createElement("ol",null,l.a.Children.map(t,i))},table:function(e){var t=e.children,a=Object(s.a)(e,["children"]),c=l.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=l.a.Children.map(e.props.children,(function(e){var t=l.a.Children.map(e.props.children,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement("tr",{},t)}));return l.a.createElement("tbody",{},t)}return e}));return l.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),c)}};function d(e){var t=e.children,a=Object(s.a)(e,["children"]),n=l.a.Children.map(t,(function(e){return l.a.cloneElement(e,{className:e.props.className+" fragment"})}));return l.a.createElement(b.a,Object.assign({},a,{components:m}),n)}},WLIS:function(e,t,a){"use strict";var n=a("dI71"),s=a("q1tI"),c=a.n(s),l=a("7ljp"),b=(a("ZrE4"),a("ejmO"),a("g8K8")),r=a("nF89"),i=a("t6Qi"),m=a("Dujm"),d=a("dbrF"),o=a("Bl7J"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:b.a,TitleSlide:i.a,Animate:m.a,PSection:r.a,Emphasis:d.b,Tooltip:d.g,Definition:d.a,TwoCols:o.c,Flex:o.b,Card:o.a,Meta:d.e,FQ:d.d,Example:d.c};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(l.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=u},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return b})),a.d(t,"g",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return m})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return o}));var n=a("zLVn"),s=a("q1tI"),c=a.n(s);function l(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="meta";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function r(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function i(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function m(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}function d(e){return"«"+e.children+"»"}function o(e){var t=e.children,a=Object(n.a)(e,["children"]);return c.a.createElement("div",Object.assign({style:{borderLeft:"5px solid #ccc",marginLeft:"1rem",paddingLeft:"1rem"}},a),t)}},ejmO:function(e,t,a){},g8K8:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n);function c(e){return s.a.createElement("section",null,s.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}},myS0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return M}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),c=a("WLIS"),l=a("okBV"),b=(a("sOF4"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",t)}},i=r("TitleSlide"),m=r("Slide"),d=r("Animate"),o=r("Meta"),u=r("Definition"),j=r("TwoCols"),O=r("Emphasis"),p=r("Flex"),g={_frontmatter:b},N=c.a;function M(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(N,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)(i,{title:"Validez",clase:"Lógica ECH",mdxType:"TitleSlide"}),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"En el capítulo anterior..."),Object(s.b)("p",null,"Un ",Object(s.b)("strong",{parentName:"p"},"conjunto de proposiciones")," se decía consistente sii es ",Object(s.b)("strong",{parentName:"p"},"posible")," que todas sus proposiciones sean verdaderas al tiempo."),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"¿Consistente o inconsistente?")),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"{ Colombia o España hacen parte de Latinoamérica; ",Object(s.b)("br",null)," España no hace parte de Latinoamérica. }"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Consistente")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"{ Si Colombia no está en Latinoamérica, España está en Europa; ",Object(s.b)("br",null)," Colombia no está en Latinoamérica; ",Object(s.b)("br",null)," España no está en Europa. }"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Inconsistente")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"{ Colombia está en América del Sur; ",Object(s.b)("br",null)," México está en Europa. ",Object(s.b)("br",null)," Australia está en Asia.}"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Consistente")))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Conjuntos de proposiciones"),Object(s.b)("p",null,"Recordemos que un ",Object(s.b)("strong",{parentName:"p"},"conjunto de proposiciones")," puede ser cualquier agrupamiento de proposiciones."),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)(o,{mdxType:"Meta"},Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"{",Object(s.b)("em",{parentName:"li"},"P"),"}"),Object(s.b)("li",{parentName:"ul"},"{",Object(s.b)("em",{parentName:"li"},"P"),", ",Object(s.b)("em",{parentName:"li"},"Q"),"}"),Object(s.b)("li",{parentName:"ul"},"{",Object(s.b)("em",{parentName:"li"},"P")," & ",Object(s.b)("em",{parentName:"li"},"Q"),", ",Object(s.b)("em",{parentName:"li"},"~P"),"}"))),Object(s.b)("p",null,"De conjuntos de proposiciones podemos decir que son ",Object(s.b)("strong",{parentName:"p"},"consistentes")," o ",Object(s.b)("strong",{parentName:"p"},"inconsistentes"),"."),Object(s.b)("p",null,"Hay sin embargo algunos conjuntos especiales sobre los que podemos decir algo más."))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Argumentos"),Object(s.b)("p",null,"Un ",Object(s.b)("strong",{parentName:"p"},"argumento")," es un conjunto de proposiciones especial."),Object(s.b)(u,{animate:!0,word:"Argumento",mdxType:"Definition"},Object(s.b)("p",null,"Conjunto de proposiciones en las que unas (conclusiones) se ",Object(s.b)("strong",{parentName:"p"},"infieren")," de otras (premisas).")),Object(s.b)("div",{className:"two-cols"},Object(s.b)("div",{className:"col-left fragment"},Object(s.b)("div",{className:"argument"},Object(s.b)("p",null,"Todos los humanos son mortales."),Object(s.b)("p",null,"Jorge es humano."),Object(s.b)("p",null,"Jorge es mortal."))),Object(s.b)("div",{className:"col-right fragment"},Object(s.b)("div",{className:"argument"},Object(s.b)("p",null,"Si alguien saca 5.0 en el parcial, el profesor será feliz."),Object(s.b)("p",null,"Iván sacó 5.0 en el parcial."),Object(s.b)("p",null,"El profesor es feliz."))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Tipos de argumentos"),Object(s.b)("p",null,"Hay dos tipos generales de argumentos."),Object(s.b)(j,{style:{marginBottom:"1rem"},mdxType:"TwoCols"},Object(s.b)("div",null,Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Argumentos deductivos")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Argumentos cuya conclusión se sigue ",Object(s.b)("strong",{parentName:"em"},"necesariamente")," de las premisas"))),Object(s.b)("div",{className:" fragment argument"},Object(s.b)("p",null,"Todos los humanos son mortales."),Object(s.b)("p",null,"Jorge es humano."),Object(s.b)("p",null,"Jorge es mortal."))),Object(s.b)("div",null,Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Argumentos inductivos")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Argumentos cuya conclusión se sigue ",Object(s.b)("strong",{parentName:"em"},"probablemente")," de las premisas"))),Object(s.b)("div",{className:" fragment argument"},Object(s.b)("p",null,"La mayoría de humanos son diestros."),Object(s.b)("p",null,"Jorge es humano."),Object(s.b)("p",null,"Jorge es diestro.")))),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"A continuación nos concentraremos en cómo formular buenos ",Object(s.b)("strong",{parentName:"p"},"argumentos deductivos"),"."))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Argumentos deductivos"),Object(s.b)("p",null,"Un argumento deductivo es aquel cuya conclusión se sigue ",Object(s.b)("strong",{parentName:"p"},"necesariamente")," de las premisas."),Object(s.b)("p",null,"Hay dos criterios para juzgar un argumento deductivo."),Object(s.b)(j,{style:{margin:"2rem 0"},mdxType:"TwoCols"},Object(s.b)("div",null,Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Validez")),Object(s.b)("p",null,"Que la conclusión se siga con necesidad de las premisas."))),Object(s.b)("div",null,Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Solidez")),Object(s.b)("p",null,"Que el argumento sea válido y tenga premisas verdaderas.")))),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"Veamos cada una de estas propiedades."))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Validez deductiva"),Object(s.b)("p",null,"Un argumento es ",Object(s.b)("strong",{parentName:"p"},"deductivamente válido")," sii su conclusión se sigue ",Object(s.b)("em",{parentName:"p"},"necesariamente")," de las premisas."),Object(s.b)(O,{mdxType:"Emphasis"},Object(s.b)(j,{mdxType:"TwoCols"},Object(s.b)("div",{className:"argument fragment"},Object(s.b)("p",null,"Todos los humanos son mortales."),Object(s.b)("p",null,"Jorge es humano."),Object(s.b)("p",null,"Jorge es mortal.")),Object(s.b)("div",{className:"argument fragment"},Object(s.b)("p",null,"Todos los humanos son mortales."),Object(s.b)("p",null,"Mario es mortal."),Object(s.b)("p",null,"Mario es humano.")))),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"¿Qué significa este ",Object(s.b)("strong",{parentName:"p"},"necesariamente"),"?"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Si las premisas son verdaderas, la conclusión ",Object(s.b)("strong",{parentName:"p"},"necesariamente")," lo es.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Es ",Object(s.b)("strong",{parentName:"p"},"imposible")," que las premisas sean verdaderas mientras que la conclusión sea falsa."))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Solidez"),Object(s.b)("p",null,"Un argumento puede ser válido y ",Object(s.b)("em",{parentName:"p"},"no")," tener premisas verdaderas."),Object(s.b)(O,{mdxType:"Emphasis"},Object(s.b)(p,{mdxType:"Flex"},Object(s.b)("div",{className:"fragment argument"},Object(s.b)("p",null,"Todos los humanos son azules."),Object(s.b)("p",null,"Jorge es humano."),Object(s.b)("p",null,"Jorge es azul.")),Object(s.b)("div",{className:"fragment argument"},Object(s.b)("p",null,"El profesor estudió filosofía o economía."),Object(s.b)("p",null,"El profesor no estudió filosofía."),Object(s.b)("p",null,"El profesor estudió economía.")))),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"Si un argumento es válido y ",Object(s.b)("em",{parentName:"p"},"además")," tiene premisas verdaderas, es ",Object(s.b)("strong",{parentName:"p"},"sólido"),".")),Object(s.b)(O,{mdxType:"Emphasis"},Object(s.b)("div",{className:"fragment argument"},Object(s.b)("p",null,"Si estoy en Bogotá, estoy a más de 1000m sobre el nivel del mar."),Object(s.b)("p",null,"Estoy en Bogotá."),Object(s.b)("p",null,"Estoy a más de 1000m sobre el nivel del mar.")))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Ejemplos"),Object(s.b)("p",null,"¿Válido o inválido?"),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("table",null,Object(s.b)("tbody",null,Object(s.b)("tr",{style:{borderBottom:"1px solid black"}},Object(s.b)("td",null,Object(s.b)("p",null,"Si algún estudiante pierde el parcial, estaré triste."),Object(s.b)("p",null,"Un estudiante perdió el parcial."),Object(s.b)("p",null,"Por lo tanto, estoy triste.")),Object(s.b)("td",null,"Válido")),Object(s.b)("tr",{style:{borderBottom:"1px solid black"}},Object(s.b)("td",{style:{paddingTop:"1rem"}},Object(s.b)("p",null,"Basta con estudiar para pasar el curso."),Object(s.b)("p",null,"Pasé el curso."),Object(s.b)("p",null,"Por lo tanto, estudié.")),Object(s.b)("td",{style:{paddingTop:"1rem"}},"Inválido")),Object(s.b)("tr",null,Object(s.b)("td",{style:{paddingTop:"1rem"}},Object(s.b)("p",null,"Si no estudio, no paso el curso."),Object(s.b)("p",null,"Pasé el curso."),Object(s.b)("p",null,"Por lo tanto, estudié.")),Object(s.b)("td",{style:{paddingTop:"1rem"}},"Válido")))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Usando tablas de verdad"),Object(s.b)("p",null,"Recordemos que un argumento es ",Object(s.b)("strong",{parentName:"p"},"válido")," sii es ",Object(s.b)("strong",{parentName:"p"},"imposible")," que sus premisas sean verdaderas mientras su conclusión sea falsa."),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"¿Cómo podremos probar esto en una tabla de verdad?"),Object(s.b)("p",null,"Si es imposible que sus premisas sean verdaderas y su conclusión falsa, ",Object(s.b)("strong",{parentName:"p"},"no existirá situación")," en la que las premisas sean todas verdaderas y la conclusión sea falsa.")),Object(s.b)("table",{className:"fragment truth-table"},Object(s.b)("thead",null,Object(s.b)("tr",null,Object(s.b)("th",null,"Premisa 1"),Object(s.b)("th",null," Premisa 2"),Object(s.b)("th",null," ..."),Object(s.b)("th",null," Conclusión "))),Object(s.b)("tbody",null,Object(s.b)("tr",null,Object(s.b)("td",{className:"  "},"V"),Object(s.b)("td",{className:"  "}," V"),Object(s.b)("td",{className:"  "}," "),Object(s.b)("td",{className:"  "}," V ")),Object(s.b)("tr",null,Object(s.b)("td",{className:"  "},"V"),Object(s.b)("td",{className:"  "}," F"),Object(s.b)("td",{className:"  "}," "),Object(s.b)("td",{className:"  "}," V ")),Object(s.b)("tr",{style:{color:"red",textDecoration:"line-through",fontWeight:"bold"}},Object(s.b)("td",{className:"  "},"V"),Object(s.b)("td",{className:"  "}," V"),Object(s.b)("td",{className:"  "}," "),Object(s.b)("td",{className:"  "}," F ")),Object(s.b)("tr",null,Object(s.b)("td",{className:"  "},"F"),Object(s.b)("td",{className:"  "}," F"),Object(s.b)("td",{className:"  "}," "),Object(s.b)("td",{className:"  "}," F"))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Ejemplo"),Object(s.b)(O,{mdxType:"Emphasis"},Object(s.b)(l.a,{mdxType:"Argument"},Object(s.b)("p",null,"Si no estudio, no paso el curso."),Object(s.b)("p",null,"Pasé el curso."),Object(s.b)("p",null,"Por lo tanto, estudié."))),Object(s.b)("table",{className:"truth-table"},Object(s.b)("thead",null,Object(s.b)("tr",{className:"fragment","data-fragment-index":"1"},Object(s.b)("th",null,"Ea"),Object(s.b)("th",null,"Pa"),Object(s.b)("th",{className:"divides"},"~"),Object(s.b)("th",null,"Ea"),Object(s.b)("th",null,"→"),Object(s.b)("th",null,"~"),Object(s.b)("th",null,"Pa"),Object(s.b)("th",{className:"divides"},"Pa"),Object(s.b)("th",{className:"divides"},"Ea"))),Object(s.b)("tbody",null,Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"4",className:"divides fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"6",className:"main fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"5",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"V")),Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"4",className:"divides fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"6",className:"main fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"5",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"V")),Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"4",className:"divides fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"6",className:"main fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"5",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"F")),Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"4",className:"divides fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"6",className:"main fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"5",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"},"F"))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Ejemplo"),Object(s.b)(O,{mdxType:"Emphasis"},Object(s.b)(l.a,{mdxType:"Argument"},Object(s.b)("p",null,"Basta con estudiar para pasar el curso."),Object(s.b)("p",null,"Pasé el curso."),Object(s.b)("p",null,"Por lo tanto, estudié."))),Object(s.b)("table",{className:"truth-table"},Object(s.b)("thead",null,Object(s.b)("tr",{className:"fragment","data-fragment-index":"1"},Object(s.b)("th",null,"Ea"),Object(s.b)("th",null," Pa"),Object(s.b)("th",{className:" divides"}," Ea"),Object(s.b)("th",null," →"),Object(s.b)("th",null," Pa"),Object(s.b)("th",{className:" divides"}," Pa"),Object(s.b)("th",{className:" divides"}," Ea "))),Object(s.b)("tbody",null,Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"}," V"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"}," V"),Object(s.b)("td",{className:"main fragment","data-fragment-index":"4"}," V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"}," V"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," V"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," V ")),Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"V"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"}," F"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"}," V"),Object(s.b)("td",{className:"main fragment","data-fragment-index":"4"}," F"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"}," F"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," F"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," V ")),Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"}," V"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"}," F"),Object(s.b)("td",{className:"main fragment","data-fragment-index":"4"}," V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"}," V"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," V"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," F ")),Object(s.b)("tr",null,Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"},"F"),Object(s.b)("td",{"data-fragment-index":"2",className:"fragment"}," F"),Object(s.b)("td",{"data-fragment-index":"3",className:"divides fragment"}," F"),Object(s.b)("td",{className:"main fragment","data-fragment-index":"4"}," V"),Object(s.b)("td",{"data-fragment-index":"3",className:"fragment"}," F"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," F"),Object(s.b)("td",{className:"divides fragment","data-fragment-index":"3"}," F "))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Validez y verdad"),Object(s.b)("p",null,"Hemos dicho que un argumento puede ser válido aunque tenga ",Object(s.b)("strong",{parentName:"p"},"premisas falsas"),"."),Object(s.b)(O,{animate:!0,mdxType:"Emphasis"},Object(s.b)(l.a,{style:{marginTop:"-1rem"},mdxType:"Argument"},Object(s.b)("p",null,"Juan estudió filosofía o economía."),Object(s.b)("p",null,"Juan no estudió filosofía."),Object(s.b)("p",null,"Juan estudió economía."))),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"La ",Object(s.b)("strong",{parentName:"p"},"validez")," no tiene que ver con la ",Object(s.b)("strong",{parentName:"p"},"verdad de hecho")," de las proposiciones que componen un argumento."),Object(s.b)("p",null,"Los siguientes casos también son posibles.")),Object(s.b)(p,{mdxType:"Flex"},Object(s.b)("div",{className:"fragment",style:{width:"50%",fontSize:"90%"}},Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Inválido con conclusión verdadera.")),Object(s.b)(l.a,{mdxType:"Argument"},Object(s.b)("p",null,"Si Duque es presidente de Colombia, Colombia está en Latinoamérica."),Object(s.b)("p",null,"Colombia está en Latinoamérica."),Object(s.b)("p",null,"Duque es presidente de Colombia."))),Object(s.b)("div",{className:"fragment",style:{width:"50%",fontSize:"90%"}},Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Inválido con proposiciones verdaderas.")),Object(s.b)(l.a,{mdxType:"Argument"},Object(s.b)("p",null,"Si estudian en el Rosario, estudian en una universidad."),Object(s.b)("p",null,"Estudian en una universidad."),Object(s.b)("p",null,"Estudian en el Rosario."))))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Demostrando invalidez"),Object(s.b)("p",null,"Cuando demostramos la invalidez de un argumento, lo hacemos encontrando un ",Object(s.b)("strong",{parentName:"p"},"contraejemplo"),"."),Object(s.b)(u,{animate:!0,word:"Contraejemplo",mdxType:"Definition"},"Situación que muestra que la conclusión puede ser falsa aunque las premisas sean verdaderas."),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("p",null,"Un contrajemplo demuestra que el argumento es ",Object(s.b)("strong",{parentName:"p"},"inválido"),", pero ",Object(s.b)("em",{parentName:"p"},"no")," que sus proposiciones sean falsas."),Object(s.b)("p",null,"Para demostrar que alguna de las premisas es falsa (i.e., que el argumento ",Object(s.b)("strong",{parentName:"p"},"no es sólido"),") necesitamos otras herramientas."))),Object(s.b)(m,{mdxType:"Slide"},Object(s.b)("h1",null,"Curiosidades lógicas"),Object(s.b)(d,{mdxType:"Animate"},Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(s.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento cuya conclusión sea verdadera es válido."),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento cuyas premisas sean falsas no puede ser válido."),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento cuyas premisas sean inconsistentes es válido."),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento cuya conclusión sea una tautología es válido."),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Un argumento cuya conclusión sea una contradicción es inválido."),Object(s.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")))))))}M.isMDXComponent=!0},nF89:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n);function c(e){var t=s.a.Children.map(e.children,(function(t,a){return s.a.cloneElement(t,{secTitle:e.title})}));return s.a.createElement("section",null,t)}},okBV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("zLVn"),s=a("q1tI"),c=a.n(s);function l(e){var t=e.children,a=Object(n.a)(e,["children"]),s=c.a.Children.toArray(t),l=c.a.cloneElement(s.pop());return c.a.createElement("div",Object.assign({class:"argument"},a),s,l)}},sOF4:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("zLVn"),s=a("q1tI"),c=a.n(s);function l(e){var t=e.children,a=Object(n.a)(e,["children"]);function s(e,t){var a=e.split(",");return"<tr>"+(a=a.map((function(e){var a=!!e.includes("*"),n=!!e.includes("|"),s=!!e.includes("!");return!0===t?"<th class='"+(a?"fragment":"")+" "+(n?"divides":"")+"'>"+e.replace(/[*|]/,"")+"</th>":"<td class='"+(a?"fragment":"")+" "+(n?"divides":"")+" "+(s?"main":"")+"'>"+e.replace(/[*!|]+/,"")+"</td>"}))).join("")+"</tr>"}var l="",b=t.props.children.split("\\newline");return b.length>1&&(l=s(l=b.shift(),!0)),b=b.map(s,!1),c.a.createElement("table",Object.assign({},a,{className:"truth-table"}),c.a.createElement("thead",{dangerouslySetInnerHTML:{__html:l}}),c.a.createElement("tbody",{dangerouslySetInnerHTML:{__html:b.join("")}}))}},t6Qi:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n);function c(e){var t=(new Date).getFullYear();return s.a.createElement("section",{className:"title"},s.a.createElement("h3",null,e.clase),s.a.createElement("h1",null," ",e.title),s.a.createElement("div",{className:"author"},"Juan R. Loaiza"),s.a.createElement("small",null,"Escuela de Ciencias Humanas ",s.a.createElement("br",null),"Universidad del Rosario ",s.a.createElement("br",null),t))}},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-logica-9-validez-mdx-bc7daa7ce8df4942c584.js.map