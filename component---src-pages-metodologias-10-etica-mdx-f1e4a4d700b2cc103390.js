(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{WLIS:function(e,a,t){"use strict";var n=t("dI71"),i=t("q1tI"),c=t.n(i),l=t("7ljp");t("ZrE4"),t("ejmO");function s(e){return c.a.createElement("section",null,c.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function r(e){var a=c.a.Children.map(e.children,(function(a,t){return c.a.cloneElement(a,{secTitle:e.title})}));return c.a.createElement("section",null,a)}function o(e){var a=(new Date).getFullYear();return c.a.createElement("section",{className:"title"},c.a.createElement("h3",null,e.clase),c.a.createElement("h1",null," ",e.title),c.a.createElement("div",{className:"author"},"Juan R. Loaiza"),c.a.createElement("small",null,"Escuela de Ciencias Humanas ",c.a.createElement("br",null),"Universidad del Rosario ",c.a.createElement("br",null),a))}var b=t("rePB"),u=t("zLVn");function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var m=function(e){return c.a.cloneElement(e,{className:"fragment"})},p={ul:function(e){var a=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ul",null,c.a.Children.map(a,m))},ol:function(e){var a=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ol",null,c.a.Children.map(a,m))},table:function(e){var a=e.children,t=Object(u.a)(e,["children"]),n=c.a.Children.map(a,(function(e){if("tbody"===e.props.originalType){var a=c.a.Children.map(e.props.children,(function(e){var a=c.a.Children.map(e.props.children,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement("tr",{},a)}));return c.a.createElement("tbody",{},a)}return e}));return c.a.createElement("table",function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t),n)}};function j(e){var a=e.children,t=Object(u.a)(e,["children"]),n=c.a.Children.map(a,(function(e){return c.a.cloneElement(e,{className:e.props.className+" fragment"})}));return c.a.createElement(l.a,Object.assign({},t,{components:p}),n)}var O=t("dbrF");function M(e){var a=e.children,t=Object(u.a)(e,["children"]),n=c.a.Children.toArray(a);return c.a.createElement("div",Object.assign({className:"two-cols"},t),c.a.createElement("div",{className:"col-left "+t.className},n[0]),c.a.createElement("div",{className:"col-right "+t.className},n[1]))}function g(e){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function N(e){return c.a.createElement("div",{className:"card"},e.title?c.a.createElement("div",{className:"card-title"},e.title):null,c.a.createElement("div",{className:"card-body"},e.children))}var y=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e={Slide:s,TitleSlide:o,Animate:j,PSection:r,Emphasis:O.b,Tooltip:O.g,Definition:O.a,TwoCols:M,Flex:g,Card:N,Meta:O.e,FQ:O.d,Example:O.c};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(l.a,{components:e},this.props.children))))},a}(c.a.Component);a.a=y},ZrE4:function(e,a,t){},dbrF:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"e",(function(){return s})),t.d(a,"g",(function(){return r})),t.d(a,"a",(function(){return o})),t.d(a,"f",(function(){return b})),t.d(a,"d",(function(){return u})),t.d(a,"c",(function(){return d}));var n=t("zLVn"),i=t("q1tI"),c=t.n(i);function l(e){var a="example";return a=e.animate?a+" fragment":a,c.a.createElement("div",Object.assign({},e,{className:a}),e.children)}function s(e){var a="meta";return a=e.animate?a+" fragment":a,c.a.createElement("div",Object.assign({},e,{className:a}),e.children)}function r(e){var a="tooltip";a=e.animate?a+" fragment":a;return c.a.createElement("div",Object.assign({},e,{className:a}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function o(e){var a="definition";return a=e.animate?a+" fragment":a,c.a.createElement("div",Object.assign({},e,{className:a}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function b(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}function u(e){return"«"+e.children+"»"}function d(e){var a=e.children,t=Object(n.a)(e,["children"]);return c.a.createElement("div",Object.assign({style:{borderLeft:"5px solid #ccc",marginLeft:"1rem",paddingLeft:"1rem"}},t),a)}},ejmO:function(e,a,t){},pHXX:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return M}));var n=t("zLVn"),i=(t("q1tI"),t("7ljp")),c=t("WLIS"),l={},s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},r=s("TitleSlide"),o=s("Slide"),b=s("Flex"),u=s("Animate"),d=s("PSection"),m=s("Emphasis"),p=s("Tooltip"),j={_frontmatter:l},O=c.a;function M(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(O,Object.assign({},j,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(r,{title:"Ética en la investigación",clase:"Metodologías de Investigación",mdxType:"TitleSlide"}),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Introducción"),Object(i.b)("p",null,"La investigación en ciencias sociales acarrea todo tipo de deberes éticos."),Object(i.b)("p",null,"Podemos distinguir tres niveles:"),Object(i.b)(b,{mdxType:"Flex"},Object(i.b)("div",{style:{width:"30%"}},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Deberes hacia personas")),Object(i.b)("p",null,"Deberes habia sujetos de investigación."))),Object(i.b)("div",{style:{width:"30%"}},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Deberes procedimentales")),Object(i.b)("p",null,"Deberes de buena metodología."))),Object(i.b)("div",{style:{width:"30%"}},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Deberes comunicativos")),Object(i.b)("p",null,"Deberes sobre la divulgación de resultados."))))),Object(i.b)(d,{title:"Deberes hacia personas",mdxType:"PSection"},Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Introducción"),Object(i.b)("p",null,"Al hacer investigación en ciencias sociales, estudiamos ",Object(i.b)("strong",{parentName:"p"},"personas"),"."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"En tanto personas, tenemos ",Object(i.b)("em",{parentName:"p"},"deberes")," hacia nuestros sujetos de investigación."),Object(i.b)("p",null,"Algunos de estos deberes son (relativamente) claros:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Trato respetuoso"),Object(i.b)("li",{parentName:"ul"},"No agresión (verbal o simbólica)")),Object(i.b)("p",null,"Sin embargo, algunos deberes no son tan claros, aunque son igualmente importantes."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Respeto a la autonomía"),Object(i.b)("p",null,"Un principio básico de la participación en estudios es que quienes participan deben hacerlo de forma ",Object(i.b)("strong",{parentName:"p"},"autónoma"),"."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Esto implica que las personas que acceden a participar deben hacerlo en las siguientes condiciones:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Participación voluntaria"),Object(i.b)("li",{parentName:"ul"},"Con consentimiento informado"),Object(i.b)("li",{parentName:"ul"},"De manera segura")),Object(i.b)("p",null,"Es deber de nosotros como investigadores garantizar cada uno de estos derechos."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Participación voluntaria"),Object(i.b)("p",null,"Toda persona que participa de nuestro estudio debe hacerlo de manera ",Object(i.b)("strong",{parentName:"p"},"voluntaria"),"."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Debe permanecer libertad para participar.")),Object(i.b)("p",null,"A nadie se le debe ",Object(i.b)("em",{parentName:"p"},"obligar")," o ",Object(i.b)("em",{parentName:"p"},"presionar")," a participar de ningún estudio."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"La persona debe estar siempre en capacidad de retirar su participación sin consecuencia alguna.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Problemas:")," Incentivos para la participación"))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Consentimiento informado"),Object(i.b)("p",null,"Parte de nuestra capacidad de tomar decisiones autónomas depende estar debidamente ",Object(i.b)("strong",{parentName:"p"},"informados"),"."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Las personas que participan de nuestro estudio deben tener información de:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Que la estamos estudiando"),Object(i.b)("li",{parentName:"ul"},"Propósito de la investigación"),Object(i.b)("li",{parentName:"ul"},"Manejo de datos")),Object(i.b)("p",null,"Las personas también deben estar informadas de que pueden ",Object(i.b)("strong",{parentName:"p"},"retirarse")," en cualquier momento ",Object(i.b)("em",{parentName:"p"},"sin consecuencias"),"."),Object(i.b)("p",null,"Se asegura mediante un ",Object(i.b)("strong",{parentName:"p"},"formato de consentimiento informado"),"."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Engaño"),Object(i.b)("p",null,"¿Qué pasa cuando nuestra investigación requiere que ",Object(i.b)("strong",{parentName:"p"},"engañemos")," a nuestros participantes?"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ej.: Investigación sobre temas delicados")),Object(i.b)("p",null,"Dos formas de engaño:")),Object(i.b)(b,{mdxType:"Flex"},Object(i.b)("div",null,Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Omisión")),Object(i.b)("p",null,"Omitimos información sobre el estudio."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Propósito"),Object(i.b)("li",{parentName:"ul"},"Pregunta"),Object(i.b)("li",{parentName:"ul"},"Ambigüedad")))),Object(i.b)("div",null,Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Engaño activo")),Object(i.b)("p",null,"Decimos algo falso intencionalmente."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Coartadas")))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Justificando el engaño"),Object(i.b)("p",null,"El uso del engaño puede entrar en contravía del respeto a la autonomía."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Una decisión bajo engaño no es una decisión autónoma.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pregunta:")," ¿Se justifica engañar a participantes?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"¿Puede obtenerse la información de otra manera?"),Object(i.b)("li",{parentName:"ul"},"¿Cuán importante es la información que conseguiríamos por este medio?")))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Seguridad"),Object(i.b)("p",null,"Los participantes deben tener su seguridad garantizada en todo momento. "),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Casos claros: población vulnerable")),Object(i.b)("p",null,"La seguridad también involucra el ",Object(i.b)("strong",{parentName:"p"},"manejo de datos"),".")),Object(i.b)(b,{mdxType:"Flex"},Object(i.b)("div",{style:{width:"45%"}},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Anonimato")),Object(i.b)("p",null,"Información ",Object(i.b)("em",{parentName:"p"},"sin")," nombre. El investigador no sabe quién es quién."))),Object(i.b)("div",{style:{width:"45%"}},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Confidencialidad")),Object(i.b)("p",null,"Investigador sabe quién es pero se compromete a reservar la información."))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Daño y cuidado"),Object(i.b)("p",null,"También debemos siempre considerar los posibles ",Object(i.b)("strong",{parentName:"p"},"daños")," que puede sufrir un participante."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Daños físicos"),Object(i.b)("li",{parentName:"ul"},"Daños emocionales",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Revivir eventos traumáticos"),Object(i.b)("li",{parentName:"ul"},"Vergüenza"))),Object(i.b)("li",{parentName:"ul"},"Otros daños",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Interferencia"),Object(i.b)("li",{parentName:"ul"},"Daños sociales")))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Comité de ética"),Object(i.b)("p",null,"Quienes revisan si se toman buenas medidas de prevención y aliivo de daños es el ",Object(i.b)("strong",{parentName:"p"},"comité de ética"),"."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Los miembros del comité de ética generalmente siguen ",Object(i.b)("strong",{parentName:"p"},"lineamientos")," propuetos por entidades externas."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reglamento de la Comisión Europea para estudios en ciencias sociales y humanidades"),Object(i.b)("li",{parentName:"ul"},"Declaración de Helsinki"),Object(i.b)("li",{parentName:"ul"},"Código de Núremberg")),Object(i.b)("p",null,"La ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.urosario.edu.co/Investigacion/Soporte-a-la-Investigacion/Sistema-de-Integridad-Cientifica-y-Comite-de-Etica-1/"}),"universidad")," cuenta con dos comités de ética:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ciencias de la vida"),Object(i.b)("li",{parentName:"ul"},"Ciencias humanas"))))),Object(i.b)(d,{title:"Deberes procedimentales",mdxType:"PSection"},Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Caso: Ministra de Ciencia"),Object(i.b)("p",null,"Estudios con ganoderma sobre el cáncer:"),Object(i.b)("span",{style:{fontSize:"80%"}},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"Frente a las cámaras, como ya lo había hecho en otros escenarios, contó que luego de estudiar hongos del género ganoderma durante varios años, y al regresar a Chocó, decidió elaborar una “bebida líquida funcional con ganoderma y otros extractos de frutas del Pacífico. Esta bebida la tomaron algunos pacientes y tuvimos casos positivos de resolución en cáncer de cérvix, seno y cerebro, especialmente”."')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"En el currículo que Mabel Torres presentó ante Colciencias, institución que se transformó en el Ministerio de Ciencia y ella preside, reportó 21 artículos científicos. Siete de ellos directamente relacionados con ganoderma y otros 11 con hongos en general. Su trabajo con este hongo demuestra que llegó a una etapa ',Object(i.b)("strong",{parentName:"p"},"valiosa, pero muy básica"),', de conocimiento: se trata de estudios taxonómicos, es decir, clasificación botánica."')))),Object(i.b)("span",{style:{color:"#aaa",fontSize:"50%"}},Object(i.b)("p",null,"Fuente: Correa, P. (2020). La ministra de Ciencia y su dudosa promesa contra el cáncer. ",Object(i.b)("em",{parentName:"p"},"El Espectador"),". Disponible en: ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.elespectador.com/noticias/ciencia/la-ministra-de-ciencia-y-su-dudosa-promesa-contra-el-cancer-articulo-899370/"}),"https://www.elespectador.com/noticias/ciencia/la-ministra-de-ciencia-y-su-dudosa-promesa-contra-el-cancer-articulo-899370/")," "))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Deberes de los científicos"),Object(i.b)("p",null,"El caso de la ministra de ciencia ilustra un problema general sobre la práctica científica."),Object(i.b)(m,{animate:!0,mdxType:"Emphasis"},"¿Bajo qué condiciones es legítimo hacer uso del conocimiento para intervenir sobre un problema?"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Estas condiciones van más allá de las condiciones políticas y sociales: también hay condiciones epistémicas.")),Object(i.b)(p,{notitle:!0,animate:!0,mdxType:"Tooltip"},"Debemos estar seguros de aquello que afirmamos conocer.")),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Responsabilidad epistémica"),Object(i.b)("p",null,"Como investigadores, debemos tener criterios claros de ",Object(i.b)("strong",{parentName:"p"},"justificación")," de aquello que creemos haber probado como verdadero."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Es responsabilidad de los investigadores seguir pautas de buena práctica epistémica (i.e., saber justificar bien lo que dicen)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Preocupación interna: Justificación de enunciados"),Object(i.b)("li",{parentName:"ul"},"Preocupación externa: Impacto en la sociedad")))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Buena metodología"),Object(i.b)("p",null,"Los científicos tienen el deber de seguir procedimientos de manera transparente y correcta (i.e. buen uso de la metodología)."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ejemplo: Investigación sobre los efectos de una droga sobre una enfermedad.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"¿Cuántas personas estarán en el grupo control?"),Object(i.b)("li",{parentName:"ul"},"¿Cómo se le informará a estas personas (si se les informará)?"),Object(i.b)("li",{parentName:"ul"},"¿Cuáles son las contraindicaciones y riesgos?"),Object(i.b)("li",{parentName:"ul"},"¿Es necesario este tratamiento?")))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"En las ciencias sociales"),Object(i.b)("p",null,"En el caso de las ciencias sociales, hay consideraciones procedimentales importantes."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Bienestar psicológico y social de quienes investigamos",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ejemplo: Entrevistas sobre eventos traumáticos que las personas pueden no querer revivir ni contar."))),Object(i.b)("li",{parentName:"ul"},"Impacto social de la investigación",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sobre la población en estudio"),Object(i.b)("li",{parentName:"ul"},"Sobre el público general")))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Justificando la metodología"),Object(i.b)("p",null,"Es nuestro deber justificar adecuadamente la investigación y su metodología."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"¿Sabemos por qué aplicamos una metodología sobre otra?"),Object(i.b)("li",{parentName:"ul"},"¿Qué impacto tiene nuestro estudio?"),Object(i.b)("li",{parentName:"ul"},"¿Por qué queremos saber lo que investigamos?"),Object(i.b)("li",{parentName:"ul"},"¿Bajo qué condiciones estaremos justificados en asumir como verdadera una hipótesis o teoría?"))))),Object(i.b)(d,{title:"Deberes comunicativos",mdxType:"PSection"},Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Deberes comunicativos"),Object(i.b)("p",null,"Los científicos tienen el deber de comunicar sus resultados de investigación de manera responsable."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"¿Qué vale la pena decir y cómo lo decimos?"),Object(i.b)("li",{parentName:"ul"},"¿Estamos realmente justificados para afirmar ciertos enunciados?"),Object(i.b)("li",{parentName:"ul"},"¿A quién debemos comunicar nuestros resultados de investigación?")),Object(i.b)("p",null,"En algunos casos, hay también deberes relativos a la publicación de resultados y uso de financiación pública."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"¿Qué vale la pena decir y cómo lo decimos?"),Object(i.b)("p",null,"Mucha investigación puede encontrar datos verdaderos pero cuya única consecuencia negativa."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ej. Las poblaciones económicamente vulnerables tienen capacidades cognitivas diferentes.")),Object(i.b)("p",null,"Si esto es cierto, lo es por la desigualdad económica misma y no al revés. ¿Será siempre claro para la población en general?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"La publicación de resultados puede llevar a perpetuar estructuras opresivas.")))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Conocimientos generales"),Object(i.b)("p",null,"Quizás valga la pena divulgar estos resultados para aliviar la desigualdad y levantar consciencia. ¿Pero podemos garantizar los efectos positivos?"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No somos buenos razonando estadísticamente, lo que puede llevar a malentendidos.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Puede haber efectos de teléfono roto y manipulación de la información (e.g. movimiento antivacunas)"))),Object(i.b)("p",null,"Si vamos a divulgar un resultado, hay que considerar las repercusiones morales. "))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"¿Estamos realmente justificados para afirmar ciertos enunciados?"),Object(i.b)("p",null,"¿Qué tan seguros estamos de aquello que divulgamos? ¿Hemos hecho bien nuestra investigación y aplicado bien la metodología?"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ejemplo: Diferencias de género (por lo general acarrean artefactos estadísticos)")),Object(i.b)("p",null,"Si no estamos seguros de nuestros resultados, hay que divulgarlos con todo y nuestras dudas (i.e. honestidad intelectual)."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"¿A quién debemos comunicar nuestros resultados de investigación?"),Object(i.b)("p",null,"¿Quiénes son las audiencias para quienes nuestros resultados son relevantes?"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"En ciencias sociales se suele divulgar los resultados a los grupos estudiados.")),Object(i.b)("p",null,"Otros grupos relevantes incluyen:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Responsables de política pública"),Object(i.b)("li",{parentName:"ul"},"Diseño de currículo"),Object(i.b)("li",{parentName:"ul"},"Cargos administrativos")),Object(i.b)("p",null,"Somos responsables de traducir nuestros resultados para que sean útiles."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Financiación de la investigación: ¿De dónde sale el dinero?"),Object(i.b)("p",null,"En muchos casos usamos dinero público para hacer la investigación (becas de MinCiencias, entidades gubernamentales, etc.)."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Esto incluye el uso de becas para estudios de posgrado en donde se espera que produzcamos conocimiento. ")),Object(i.b)("p",null,"Tenemos el deber de hacer que nuestros resultados estén ",Object(i.b)("strong",{parentName:"p"},"disponibles")," al público general."),Object(i.b)("p",null,"Algunas estrategias para esto son:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Publicación Open Access"),Object(i.b)("li",{parentName:"ul"},"Textos y eventos de divulgación"),Object(i.b)("li",{parentName:"ul"},"Uso de redes sociales"))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Resumen"),Object(i.b)("p",null,"Los deberes éticos en la investigación van más allá de nuestro trato directo con sujetos de investigación."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Tenemos deberes sobre el buen uso de la metodología y lenguaje científico, así como de comunicar nuestros resultados de manera efectiva pero cuidadosa."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Debemos tratar a nuestros participantes como ",Object(i.b)("em",{parentName:"p"},"personas"),", respetando su autonomía y libertad.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Debemos hacer buen uso de la metodología para justificar nuestras afirmaciones.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Debemos saber bien qué comunicamos y para qué.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Debemos cuidar cómo se divulgan nuestros resultados."))))))}M.isMDXComponent=!0},zLVn:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(a,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-metodologias-10-etica-mdx-f1e4a4d700b2cc103390.js.map