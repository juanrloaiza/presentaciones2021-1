(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),c=a.n(l),i=a("7ljp");a("ZrE4"),a("ejmO");function r(e){return c.a.createElement("section",null,c.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function b(e){var t=c.a.Children.map(e.children,(function(t,a){return c.a.cloneElement(t,{secTitle:e.title})}));return c.a.createElement("section",null,t)}function o(e){var t=(new Date).getFullYear();return c.a.createElement("section",{className:"title"},c.a.createElement("h3",null,e.clase),c.a.createElement("h1",null," ",e.title),c.a.createElement("div",{className:"author"},"Juan R. Loaiza"),c.a.createElement("small",null,"Escuela de Ciencias Humanas ",c.a.createElement("br",null),"Universidad del Rosario ",c.a.createElement("br",null),t))}var u=a("zLVn"),s=function(e){return c.a.cloneElement(e,{className:"fragment"})},j={ul:function(e){var t=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ul",null,c.a.Children.map(t,s))},ol:function(e){var t=e.children;Object(u.a)(e,["children"]);return c.a.createElement("ol",null,c.a.Children.map(t,s))},table:function(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.map(t,(function(e){if("tbody"==e.props.originalType){var t=c.a.Children.map(e.props.children,(function(e){var t=c.a.Children.map(e.props.children,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement("tr",{},t)}));return c.a.createElement("tbody",{},t)}return e}));return c.a.createElement("table",{props:a},n)}};function m(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.map(t,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement(i.a,Object.assign({},a,{components:j}),n)}function d(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function p(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function O(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function M(e){var t=e.children,a=Object(u.a)(e,["children"]),n=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},a),c.a.createElement("div",{className:"col-left "+a.className},n[0]),c.a.createElement("div",{className:"col-right "+a.className},n[1]))}function N(e){return c.a.createElement("div",Object.assign({},e,{style:{display:"flex",justifyContent:"space-around",margin:"1rem 2rem"}}),e.children)}var L=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:r,TitleSlide:o,Animate:m,PSection:b,Example:d,Tooltip:p,Definition:O,TwoCols:M,Flex:N};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(i.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=L},ZrE4:function(e,t,a){},ejmO:function(e,t,a){},tY1x:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("WLIS"),i={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},b=r("TitleSlide"),o=r("PSection"),u=r("Slide"),s=r("Animate"),j=r("TwoCols"),m={_frontmatter:i},d=c.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{clase:"Metodologías de Investigación",title:"Introducción",mdxType:"TitleSlide"}),Object(l.b)(o,{title:"¡Presentémonos!",mdxType:"PSection"},Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Quién soy?"),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,"Filósofo de la Universidad del Rosario."),Object(l.b)("p",null,"Máster y doctor de la Berlin School of Mind and Brain (Humboldt-Universität zu Berlin)"),Object(l.b)("p",null,"Profesor e investigador de la Universidad del Rosario."),Object(l.b)("p",null,"Áreas principales de investigación:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Filosofía y psicología de las emociones"),Object(l.b)("li",{parentName:"ul"},"Filosofía de las neurociencias")))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Y ustedes?"),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Nombre"),Object(l.b)("li",{parentName:"ul"},"Carrera"),Object(l.b)("li",{parentName:"ul"},"Si pudieran escribir un libro, ¿de qué sería?"),Object(l.b)("li",{parentName:"ul"},"¿Qué es ",Object(l.b)("strong",{parentName:"li"},"investigar"),"? ¿Qué hace un/a ",Object(l.b)("strong",{parentName:"li"},"investigador/a"),"?"))))),Object(l.b)(o,{title:"¿Para qué metodología?",mdxType:"PSection"},Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("iframe",{src:"https://embed.polleverywhere.com/discourses/LJoZB5x1ucTuErpxWK88c?controls=none&short_poll=true",width:"1000",height:"600px"})),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Qué es investigar?"),Object(l.b)("p",null,"En el sentido más general, investigar es ",Object(l.b)("strong",{parentName:"p"},"averiguar algo"),"."),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pregunta: Aquello que no sabemos y queremos saber."),Object(l.b)("li",{parentName:"ul"},"Método: Modo en el que vamos a averiguar lo que queremos saber."),Object(l.b)("li",{parentName:"ul"},"Resultado: Averiguación.")),Object(l.b)("p",null,"Esto implica que toda investigación implica un ",Object(l.b)("strong",{parentName:"p"},"método"),"."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,'¿Qué es un "método"?'),Object(l.b)("p",null,'Por "método" podemos entender una serie de ',Object(l.b)("strong",{parentName:"p"},"procedimientos")," para lograr algo (en nuestro caso, investigar)."),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,"No todo método sirve para cualquier pregunta."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Ejemplo: Averiguar cuán buenos son ustedes en matemáticas haciéndoles escribir un ensayo.")),Object(l.b)("p",null,"Esto implica que tenemos que saber qué métodos se ajustan a qué preguntas."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Método y metodología"),Object(l.b)("p",null,'La "',Object(l.b)("strong",{parentName:"p"},"metodología"),'" es el estudio del método.'),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Cómo funciona un método?"),Object(l.b)("li",{parentName:"ul"},"¿Cuándo es un método el correcto?"),Object(l.b)("li",{parentName:"ul"},"¿Qué preguntas puede responder un método?")),Object(l.b)("p",null,"La metodología nos da normas para aplicar bien los procedimientos para investigar (i.e., nos permite pasar de la ",Object(l.b)("strong",{parentName:"p"},"epistemología a la práctica"),")."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Metodología en ciencias sociales"),Object(l.b)("p",null,"En las ciencias sociales, hay dos familias grandes de metodologías."),Object(l.b)(j,{mdxType:"TwoCols"},Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("div",null,Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Metodologías cualitativas"),"\nEtnografía, entrevista, grupo focal, análisis visual...")),Object(l.b)("div",null,Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Metodologías cuantitativas"),"\nEncuesta, análisis de redes, humanidades digitales...")))),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,"Estas dos metodologías a veces se presentan como opuestas, ¡pero no tienen que serlo!"),Object(l.b)("p",null,"Las metodologías cuantitativas y cualitativas responden a formas diferentes de producir conocimiento."))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Plan de trabajo"),Object(l.b)("p",null,"En este curso, haremos un paneo general de la metodología desde la ",Object(l.b)("strong",{parentName:"p"},"epistemología")," hasta la ",Object(l.b)("strong",{parentName:"p"},"práctica"),"."),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"¿Qué es investigar? ¿Qué es producir conocimiento?"),Object(l.b)("li",{parentName:"ol"},"¿Qué sabemos ya? ¿Cómo lo averiguamos?"),Object(l.b)("li",{parentName:"ol"},"¿Qué métodos tenemos para averiguar cosas?",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Métodos cuantitativos"),Object(l.b)("li",{parentName:"ul"},"Métodos cualitativos"))),Object(l.b)("li",{parentName:"ol"},"¿Cómo formulamos un proyecto de investigación?"))))),Object(l.b)(o,{title:"Logística",mdxType:"PSection"},Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Programa"),Object(l.b)(j,{mdxType:"TwoCols"},Object(l.b)("div",{style:{fontSize:"90%"}},Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,"I. Conceptos generales de investigación"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conceptos básicos"),Object(l.b)("li",{parentName:"ul"},"Búsqueda de bibliografía"),Object(l.b)("li",{parentName:"ul"},"Cómo leer literatura empírica"),Object(l.b)("li",{parentName:"ul"},"Introducción a las metodologías")),Object(l.b)("p",null,"II. Métodos cuantitativos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Planteamiento de preguntas"),Object(l.b)("li",{parentName:"ul"},"Muestreo y diseño de instrumentos"),Object(l.b)("li",{parentName:"ul"},"Análisis descriptivo")))),Object(l.b)("div",{style:{fontSize:"90%"}},Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,"III. Métodos cualitativos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Planteamiento de preguntas"),Object(l.b)("li",{parentName:"ul"},"Observación participante"),Object(l.b)("li",{parentName:"ul"},"Entrevista y grupo focal"),Object(l.b)("li",{parentName:"ul"},"Historia de vida")),Object(l.b)("p",null,"IV. Proyectos de investigación"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Planteamiento de proyectos"),Object(l.b)("li",{parentName:"ul"},"Financiación de la investigación")))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Entregas"),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Todas las entregas se harán por medio de ",Object(l.b)("strong",{parentName:"li"},"e-aulas"),"."),Object(l.b)("li",{parentName:"ul"},"¡No se aceptarán entregas por correo electrónico sin previo aviso!"),Object(l.b)("li",{parentName:"ul"},"Se calificará el uso del formato de citación (APA, 7ma edición)"),Object(l.b)("li",{parentName:"ul"},"Penalización por faltas de ortografía y gramática"),Object(l.b)("li",{parentName:"ul"},"Se recomienda usar el formato disponible en e-aulas")))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Evaluación"),Object(l.b)(j,{mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Talleres:")," Ejercicios para practicar los temas de la unidad."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Abiertos durante una semana calendario"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("p",{parentName:"blockquote"},"i.e., martes 11:00 hasta domingo 23:59."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Se desarrollan de manera grupal (máx. 3 personas)"))))),Object(l.b)("div",null,Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parcial"),": Conceptos básicos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Selección múltiple, única respuesta.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Comprensión de conceptos.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Dos horas durante la sesión."))))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Trabajo grupal"),Object(l.b)("p",null,"Durante todo el semestre desarrollaremos un proyecto de investigación."),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Recolección de literatura")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fichas metodológicas",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Resúmenes de dos páginas de un artículo empírico."),Object(l.b)("li",{parentName:"ul"},"Tres (3) fichas por estudiante de artículos diferentes."))),Object(l.b)("li",{parentName:"ul"},"Revisión de literatura",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Síntesis del estado del arte"),Object(l.b)("li",{parentName:"ul"},"Una (1) por grupo"),Object(l.b)("li",{parentName:"ul"},"Mínimo 5 referencias por persona del grupo.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"e.g., Grupo de 3 personas = 15 referencias")))))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Proyecto de investigación"),Object(l.b)("p",null,"Propuesta de investigación sobre el tema de elección."),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Uno (1) por grupo."),Object(l.b)("li",{parentName:"ul"},"Establece un estado del arte y formula una pregunta de investigación."),Object(l.b)("li",{parentName:"ul"},"Propone una metodología adecuada para resolver la pregunta."),Object(l.b)("li",{parentName:"ul"},"Presenta un plan de trabajo y un presupuesto.")))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen de evaluaciones"),Object(l.b)("table",{style:{margin:"auto",fontSize:"80%"}},Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Fecha"),Object(l.b)("th",null,"Corte"),Object(l.b)("th",null,"Actividad de evaluación"),Object(l.b)("th",null,"%"))),Object(l.b)("tbody",null,Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"19.01"),Object(l.b)("td",{rowSpan:"2"},"1"),Object(l.b)("td",null,"Taller: Revisión bibliográfica "),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"05.03"),Object(l.b)("td",null,"Parcial: Conceptos básicos de investigación "),Object(l.b)("td",null,"20%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"22.02 – 14.03"),Object(l.b)("td",{rowSpan:"2"},"2"),Object(l.b)("td",null,"Fichas metodológicas (3) "),Object(l.b)("td",null,"10%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"26.03"),Object(l.b)("td",null,"Revisión de literatura "),Object(l.b)("td",null,"15%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"09.04"),Object(l.b)("td",{rowSpan:"4"},"3"),Object(l.b)("td",null,"Taller: Investigación cuantitativa "),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"27.04"),Object(l.b)("td",null,"Taller: Investigación cualitativa "),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"30.04 – 07.05"),Object(l.b)("td",null,"Presentación oral de revisión de literatura "),Object(l.b)("td",null,"10%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"18.05"),Object(l.b)("td",null,"Proyecto de investigación "),Object(l.b)("td",null,"30%"))))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("h1",null,"Comunicación"),Object(l.b)(s,{mdxType:"Animate"},Object(l.b)("p",null,"Correo electrónico: ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"mailto:juan.loaiza@urosario.edu.co"}),"juan.loaiza@urosario.edu.co")),Object(l.b)("p",null,"Moodle (e-aulas)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Por favor agreguen una foto o una imagen distintiva para reconocerles en e-aulas y en Zoom y aprenderme mejor sus nombres.")),Object(l.b)("p",null,"Mediante la monitora")))),Object(l.b)(u,{mdxType:"Slide"},Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("h1",null,"¡Gracias!"),Object(l.b)("p",null,"¡Les deseo un muy buen comienzo de semestre!"),Object(l.b)("p",null,"Y nos vemos el viernes..."))))}p.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-metodologias-1-introduccion-mdx-5ab2e825b5b60b92ba3f.js.map