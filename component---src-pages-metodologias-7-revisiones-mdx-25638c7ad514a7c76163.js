(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{WLIS:function(e,a,t){"use strict";var n=t("dI71"),i=t("q1tI"),r=t.n(i),s=t("7ljp");t("ZrE4"),t("ejmO");function l(e){return r.a.createElement("section",null,r.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function c(e){var a=r.a.Children.map(e.children,(function(a,t){return r.a.cloneElement(a,{secTitle:e.title})}));return r.a.createElement("section",null,a)}function o(e){var a=(new Date).getFullYear();return r.a.createElement("section",{className:"title"},r.a.createElement("h3",null,e.clase),r.a.createElement("h1",null," ",e.title),r.a.createElement("div",{className:"author"},"Juan R. Loaiza"),r.a.createElement("small",null,"Escuela de Ciencias Humanas ",r.a.createElement("br",null),"Universidad del Rosario ",r.a.createElement("br",null),a))}var u=t("rePB"),d=t("zLVn");function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var m=function(e){return r.a.cloneElement(e,{className:"fragment"})},M={ul:function(e){var a=e.children;Object(d.a)(e,["children"]);return r.a.createElement("ul",null,r.a.Children.map(a,m))},ol:function(e){var a=e.children;Object(d.a)(e,["children"]);return r.a.createElement("ol",null,r.a.Children.map(a,m))},table:function(e){var a=e.children,t=Object(d.a)(e,["children"]),n=r.a.Children.map(a,(function(e){if("tbody"===e.props.originalType){var a=r.a.Children.map(e.props.children,(function(e){var a=r.a.Children.map(e.props.children,(function(e){return r.a.cloneElement(e,{className:"fragment"})}));return r.a.createElement("tr",{},a)}));return r.a.createElement("tbody",{},a)}return e}));return r.a.createElement("table",function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){Object(u.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t),n)}};function j(e){var a=e.children,t=Object(d.a)(e,["children"]),n=r.a.Children.map(a,(function(e){return r.a.cloneElement(e,{className:e.props.className+" fragment"})}));return r.a.createElement(s.a,Object.assign({},t,{components:M}),n)}var p=t("dbrF");function g(e){var a=e.children,t=Object(d.a)(e,["children"]),n=r.a.Children.toArray(a);return r.a.createElement("div",Object.assign({className:"two-cols"},t),r.a.createElement("div",{className:"col-left "+t.className},n[0]),r.a.createElement("div",{className:"col-right "+t.className},n[1]))}function L(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function N(e){return r.a.createElement("div",{className:"card"},e.title?r.a.createElement("div",{className:"card-title"},e.title):null,r.a.createElement("div",{className:"card-body"},e.children))}var O=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e={Slide:l,TitleSlide:o,Animate:j,PSection:c,Example:p.b,Tooltip:p.e,Definition:p.a,TwoCols:g,Flex:L,Card:N,Meta:p.c};return r.a.createElement("div",{style:{height:"95vh"}},r.a.createElement("div",{className:"reveal"},r.a.createElement("div",{className:"slides"},r.a.createElement(s.a,{components:e},this.props.children))))},a}(r.a.Component);a.a=O},YmzC:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return M}));var n=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("WLIS"),s={},l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},c=l("TitleSlide"),o=l("Slide"),u=l("Animate"),d=l("Flex"),b={_frontmatter:s},m=r.a;function M(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(m,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(c,{title:"Revisión de literatura",clase:"Metodologías de Investigación",mdxType:"TitleSlide"}),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"En el capítulo anterior...")),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Acumulando estudios empíricos"),Object(i.b)("p",null,"Un grupo de científicos hace uno o dos estudios."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reporte: Artículo de investigación empírica")),Object(i.b)("p",null,"Al cabo de varios estudios, empezamos a ver patrones…"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Estudio 1: En Argentina hay brecha de género a partir de los 30 años."),Object(i.b)("li",{parentName:"ul"},"Estudio 2: En Colombia hay brecha de género a partir de los 27 años."),Object(i.b)("li",{parentName:"ul"},"Estudio 3: En México hay brecha de género a partir de los 31 años.")),Object(i.b)("p",null,"Sintetizamos esos hallazgos en una ",Object(i.b)("strong",{parentName:"p"},"revisión de literatura"),"."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Revisión de literatura"),Object(i.b)("p",null,"La revisión de literatura es un formato de artículo de investigación en el cual los autores ",Object(i.b)("strong",{parentName:"p"},"sintetizan")," el estado del arte de un problema o campo de investigación."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Se recogen distintos estudios y se cuenta una ",Object(i.b)("strong",{parentName:"p"},"historia")," sobre qué sabemos sobre un tema en particular en un momento dado."),Object(i.b)("p",null,"Tiene como finalidad establecer un ",Object(i.b)("strong",{parentName:"p"},"estado del conocimiento"),", introducir a los demás científicos en el área, o formular problemas y preguntas para atacar a futuro."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Las revisiones no son listados"),Object(i.b)("p",null,"Una revisión de literatura no es un listado de resúmenes de artículos individuales."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"El ejercicio consiste en sintetizar, no necesariamente en resumir."),Object(i.b)("p",null,"¿Qué es sintetizar? → Presentar de manera general información particular."),Object(i.b)("p",null,"Queremos organizar el contenido que tenemos en los artículos individuales de manera tal que podamos conectar información de distintos estudios."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Ejemplo"),Object(i.b)("div",{style:{display:"flex",justifyContent:"space-around"}},Object(i.b)("div",{className:"fragment",style:{width:"45%"}},Object(i.b)("p",null,"“El primer estudio (Sutano, 2011) encontró que los videojuegos de la serie ",Object(i.b)("em",{parentName:"p"},"Call of Duty")," no causan violencia. El segundo estudio también encontró esto sobre ",Object(i.b)("em",{parentName:"p"},"Assassin’s Creed")," (Pepita, 2012). El tercer estudio encontró lo mismo con los juegos de ",Object(i.b)("em",{parentName:"p"},"Pokémon")," (Mengano y Mengana, 2015).”")),Object(i.b)("div",{className:"fragment",style:{width:"45%"}},Object(i.b)("p",null,"“Varios estudios han encontrado que no hay correlación entre horas jugadas y violencia. Algunos de los juegos que se han estudiado son las series de ",Object(i.b)("em",{parentName:"p"},"Call of Duty")," (Sutano, 2011), ",Object(i.b)("em",{parentName:"p"},"Assassin’s Creed")," (Pepita, 2012), y ",Object(i.b)("em",{parentName:"p"},"Pokémon")," (Mengano y Mengana, 2015).”")))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Organizando la información"),Object(i.b)("p",null,"Cuando tenemos mucha información sobre un tema, ¿cómo la organizamos?"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Al estudiar mucha información sobre un tema, es natural que empecemos a agruparla en categorías."),Object(i.b)("p",null,"Ejemplo: ¿Qué sabemos sobre Bogotá?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Demografía"),Object(i.b)("li",{parentName:"ul"},"Política"),Object(i.b)("li",{parentName:"ul"},"Historia")))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Categorías de análisis"),Object(i.b)("p",null,"Las categorías con las que organizamos la información constituyen lo que se conoce como categorías de análisis."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Las categorías de análisis nos permiten estructurar la revisión y agrupar información de distintos estudios para contar nuestra historia de manera ordenada."),Object(i.b)("p",null,"Un estudio puede pertenecer a varias categorías si contiene información relevante para el desarrollo de esa categoría. Lo importante es agrupar la información."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Ejemplo"),Object(i.b)("p",null,"Supongamos que estamos escribiendo una revisión de literatura sobre la historia de Bogotá. Una posible división de categorías (dependiendo de la literatura existente) podría ser:"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Historia política (e.g. partidos políticos en la alcaldía)"),Object(i.b)("li",{parentName:"ul"},"Movimientos sociales (e.g. Séptima Papeleta)"),Object(i.b)("li",{parentName:"ul"},"Manifestaciones importantes (e.g. Bogotazo, Paro Nacional)")),Object(i.b)("p",null,"Cada categoría puede verse como un pedazo de la narración que queremos establecer."))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Ejemplo"),Object(i.b)("p",null,"La organización de la historia de Bogotá en historia política, movimientos sociales y manifestaciones nos serviría, por ejemplo, para establecer la siguiente tesis:"),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'"En la literatura existente, los estudios han mostrado que Bogotá ha sido una ciudad de tendencias políticas de izquierda con énfasis en el activismo."')),Object(i.b)("p",null,"Esta tesis describe el estado del arte, i.e. resume lo que varios estudios han demostrado, y la tarea de los autores es mostrar cómo esta tesis es verdadera. "))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Respondiendo preguntas"),Object(i.b)("p",null,"Las revisiones de literatura nos pueden servir para contestar preguntas de investigación generales, i.e., que requieren una visión panorámica de mucha investigación."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"¿Cuáles son los principales factores del desempleo en Colombia?"),Object(i.b)("li",{parentName:"ul"},"¿Cómo se ha construido la identidad del hip-hop en Latinoamérica desde los 90?")),Object(i.b)("p",null,"Debemos ser cuidadosos y distinguir ",Object(i.b)("strong",{parentName:"p"},"preguntas generales")," y ",Object(i.b)("strong",{parentName:"p"},"preguntas específicas"),"."),Object(i.b)(d,{mdxType:"Flex"},Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"¿Qué piensan los estudiantes del Rosario sobre el regreso a clases presenciales?"),Object(i.b)("p",null,"¿Cómo afecta la pandemia a los estudiantes unviersitarios?"))))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Formulando preguntas"),Object(i.b)("p",null,"También usamos revisiones de literatura para formular preguntas de investigación."),Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Un problema de investigación es un ",Object(i.b)("strong",{parentName:"p"},"vacío en el conocimiento"),". Para detectar un vacío, hay que saber ",Object(i.b)("strong",{parentName:"p"},"qué investigación se ha hecho")," (i.e., para saber qué no sabemos, hay que saber qué sí sabemos)."),Object(i.b)("p",null,"La revisión de literatura puede desencadenar en señalar que mucho se ha hecho sobre un tema, pero faltan hacer algunas cosas que pueden constituir preguntas de investigación relevantes. "))),Object(i.b)(o,{mdxType:"Slide"},Object(i.b)("h1",null,"Actividad"),Object(i.b)(d,{mdxType:"Flex"},Object(i.b)("div",{style:{width:"60%"}},Object(i.b)("p",null,"Qué información usaríamos o buscaríamos para responder una pregunta sobre los siguientes temas correspondientes a cada grupo. "),Object(i.b)("p",null,"Elaboremos una manera de categorizar esa información con una pregunta y un mensaje central claro (i.e., una tesis que describa el estado del arte)."),Object(i.b)("small",null,"Nota: No es necesario hacer una búsqueda de datos exhaustiva. El ejercicio es sobre la organización de información, no sobre búsqueda.")),Object(i.b)("div",null,Object(i.b)(u,{mdxType:"Animate"},Object(i.b)("p",null,"Temas:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Universidad del Rosario"),Object(i.b)("li",{parentName:"ol"},"Bogotá"),Object(i.b)("li",{parentName:"ol"},"Colombia"),Object(i.b)("li",{parentName:"ol"},"Latinoamérica")))))))}M.isMDXComponent=!0},ZrE4:function(e,a,t){},dbrF:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return s})),t.d(a,"e",(function(){return l})),t.d(a,"a",(function(){return c})),t.d(a,"d",(function(){return o}));var n=t("q1tI"),i=t.n(n);function r(e){var a="example";return a=e.animate?a+" fragment":a,i.a.createElement("div",Object.assign({},e,{className:a}),e.children)}function s(e){var a="meta";return a=e.animate?a+" fragment":a,i.a.createElement("div",Object.assign({},e,{className:a}),e.children)}function l(e){var a="tooltip";a=e.animate?a+" fragment":a;return i.a.createElement("div",Object.assign({},e,{className:a}),i.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),i.a.createElement("div",null,e.notitle?"":i.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function c(e){var a="definition";return a=e.animate?a+" fragment":a,i.a.createElement("div",Object.assign({},e,{className:a}),i.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function o(){return i.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}},ejmO:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-metodologias-7-revisiones-mdx-25638c7ad514a7c76163.js.map