(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),c=a.n(l),i=a("7ljp");a("ZrE4"),a("ejmO");function b(e){return c.a.createElement("section",null,c.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function r(e){var t=c.a.Children.map(e.children,(function(t,a){return c.a.cloneElement(t,{secTitle:e.title})}));return c.a.createElement("section",null,t)}function u(e){var t=(new Date).getFullYear();return c.a.createElement("section",{className:"title"},c.a.createElement("h3",null,e.clase),c.a.createElement("h1",null," ",e.title),c.a.createElement("div",{className:"author"},"Juan R. Loaiza"),c.a.createElement("small",null,"Escuela de Ciencias Humanas ",c.a.createElement("br",null),"Universidad del Rosario ",c.a.createElement("br",null),t))}var o=a("rePB"),s=a("zLVn");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=function(e){return c.a.cloneElement(e,{className:"fragment"})},m={ul:function(e){var t=e.children;Object(s.a)(e,["children"]);return c.a.createElement("ul",null,c.a.Children.map(t,d))},ol:function(e){var t=e.children;Object(s.a)(e,["children"]);return c.a.createElement("ol",null,c.a.Children.map(t,d))},table:function(e){var t=e.children,a=Object(s.a)(e,["children"]),n=c.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=c.a.Children.map(e.props.children,(function(e){var t=c.a.Children.map(e.props.children,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement("tr",{},t)}));return c.a.createElement("tbody",{},t)}return e}));return c.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function O(e){var t=e.children,a=Object(s.a)(e,["children"]),n=c.a.Children.map(t,(function(e){return c.a.cloneElement(e,{className:e.props.className+" fragment"})}));return c.a.createElement(i.a,Object.assign({},a,{components:m}),n)}var p=a("dbrF");function M(e){var t=e.children,a=Object(s.a)(e,["children"]),n=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},a),c.a.createElement("div",{className:"col-left "+a.className},n[0]),c.a.createElement("div",{className:"col-right "+a.className},n[1]))}function N(e){return c.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function g(e){return c.a.createElement("div",{className:"card"},e.title?c.a.createElement("div",{className:"card-title"},e.title):null,c.a.createElement("div",{className:"card-body"},e.children))}var L=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:b,TitleSlide:u,Animate:O,PSection:r,Example:p.b,Tooltip:p.e,Definition:p.a,TwoCols:M,Flex:N,Card:g,Meta:p.c};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(i.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=L},ZrE4:function(e,t,a){},dSKi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("WLIS"),i=a("okBV"),b={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},u=r("TitleSlide"),o=r("PSection"),s=r("Slide"),j=r("Animate"),d=r("TwoCols"),m={_frontmatter:b},O=c.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(O,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(u,{clase:"Lógica ECH",title:"Introducción",mdxType:"TitleSlide"}),Object(l.b)(o,{title:"¡Presentémonos!",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Dos verdades, una mentira."),Object(l.b)("p",null,"Cada persona que quiera participar dice tres enunciados: dos deben ser verdaderos, uno mentira. El resto intenta adivinar cuál es la mentira."),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"Comienzo yo:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Tengo más de 100 vistas en YouTube."),Object(l.b)("li",{parentName:"ol"},"Mi supervisor de doctorado tiene el pelo rosado eléctrico."),Object(l.b)("li",{parentName:"ol"},"Soy vegano.")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Quién soy?"),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"Filósofo de la Universidad del Rosario."),Object(l.b)("p",null,"Máster y doctor de la Berlin School of Mind and Brain (Humboldt-Universität zu Berlin)"),Object(l.b)("p",null,"Profesor e investigador de la Universidad del Rosario."),Object(l.b)("p",null,"Áreas principales de investigación: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Filosofía y psicología de las emociones"),Object(l.b)("li",{parentName:"ul"},"Filosofía de las neurociencias")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Y ustedes?"),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Nombre"),Object(l.b)("li",{parentName:"ul"},"Carrera"),Object(l.b)("li",{parentName:"ul"},"¿Han estudiado lógica antes?",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Si sí: ¿qué saben de lógica?"),Object(l.b)("li",{parentName:"ul"},"Si no: ¿qué se imaginan que es la ",Object(l.b)("strong",{parentName:"li"},"lógica"),"?"))))))),Object(l.b)(o,{title:"¿Qué es la lógica?",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Tipos de enunciado"),Object(l.b)("p",null,"Podemos usar el lenguaje para distintos tipos de enunciado."),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'"Hay más de 10 estudiantes en esta sala."'),Object(l.b)("li",{parentName:"ul"},'"Mañana tendré clase o dormiré todo el día."'),Object(l.b)("li",{parentName:"ul"},'"Si estudio, puedo dejar la clase en 5.0."')))),Object(l.b)("div",null,Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'"¿Cuántos dólares vale vacunar a todo el mundo?"'),Object(l.b)("li",{parentName:"ul"},'"Tráeme por favor un vaso con agua."'),Object(l.b)("li",{parentName:"ul"},'"¡Qué clase tan buena!"')))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Inferencias"),Object(l.b)("p",null,"Cuando usamos el lenguaje para hacer afirmaciones, podemos encadenar unas con otras."),Object(l.b)(i.a,{mdxType:"Argument"},Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"(1) Si me ganase la lotería, podría comprar un buen computador."),Object(l.b)("p",null,"(2) Me gané la lotería."),Object(l.b)("p",null,"(3) Puedo comprar un buen computador."))),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"Cuando encadenamos afirmaciones de esta manera, hacemos una ",Object(l.b)("strong",{parentName:"p"},"inferencia"),"."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Inferencias correctas e incorrectas"),Object(l.b)("p",null,"Algunas inferencias funcionan bien, pero otras no."),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)(i.a,{mdxType:"Argument"},Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"(1) Tengo clase o dormiré todo el día."),Object(l.b)("p",null,"(2) No tengo clase."),Object(l.b)("p",null,"(3) Dormiré todo el día."))),Object(l.b)(i.a,{mdxType:"Argument"},Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"(1) Si duermo todo el día, no iré a clase."),Object(l.b)("p",null,"(2) No iré a clase."),Object(l.b)("p",null,"(3) Duermo todo el día.")))),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"La lógica se encarga de estudiar qué hace que una inferencia sea ",Object(l.b)("strong",{parentName:"p"},"correcta"),"."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Forma y contenido"),Object(l.b)("p",null,"En la lógica, nos interesa especialmente la ",Object(l.b)("strong",{parentName:"p"},"forma")," de una afirmación y no su contenido."),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Voy al cine o voy al estadio."),Object(l.b)("li",{parentName:"ul"},"Como pizza o como hamburguesa."),Object(l.b)("li",{parentName:"ul"},"Paso lógica o no paso lógica.")),Object(l.b)("p",null,"Todas estas proposiciones parecen tener algo en común..."),Object(l.b)("p",null,'Podemos decir que todas estas proposiciones tienen la forma "',Object(l.b)("strong",{parentName:"p"},"P o Q"),'".'))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Lógica formal"),Object(l.b)("p",null,"La ",Object(l.b)("strong",{parentName:"p"},"lógica formal")," estudia las inferencias correctas usando un ",Object(l.b)("strong",{parentName:"p"},"lenguaje artificial")," que se enfoca sólo en la ",Object(l.b)("strong",{parentName:"p"},"forma")," de los enunciados."),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"En este curso, usaremos un lenguaje que luce así:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pa → Qa"),Object(l.b)("li",{parentName:"ul"},"(Rab & Rbc) v Pa"),Object(l.b)("li",{parentName:"ul"},"(∀x)(Px → (Qx v Rx))")),Object(l.b)("p",null,"Este lenguaje se conoce como ",Object(l.b)("strong",{parentName:"p"},"lógica de predicados"),"."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Propiedades lógicas"),Object(l.b)("p",null,"Además de ayudarnos a estudiar inferencias, la lógica formal también estudia distintas ",Object(l.b)("strong",{parentName:"p"},"propiedades")," que pueden tener las afirmaciones que hacemos."),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Pase lo que pase, la afirmación "Estoy o no estoy en Bogotá" será siempre verdadera.'),Object(l.b)("li",{parentName:"ul"},'"Si no me cuido, me enfermo" = "O me cuido o me enfermo".'),Object(l.b)("li",{parentName:"ul"},"Si un argumento tiene premisas contradictorias, es imposible que la conclusión no se siga de las premisas.")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Plan del curso"),Object(l.b)("p",null,"En este curso, haremos lo siguiente:"),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Introduciremos el lenguaje de la ",Object(l.b)("strong",{parentName:"p"},"lógica de predicados"),".")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Estudiaremos algunas propiedades lógicas básicas.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Refinaremos nuestras habilidades de razonamiento lógico.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Aprenderemos a hacer deducciones lógicas válidas.")))))),Object(l.b)(o,{title:"Logística",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Programa"),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"I. Formalización básica"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Cómo pasar del lenguaje natural a lenguaje formal?")),Object(l.b)("p",null,"II. Propiedades lógicas"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Tablas de verdad"),Object(l.b)("li",{parentName:"ul"},"Tipos de proposición"),Object(l.b)("li",{parentName:"ul"},"Equivalencia"),Object(l.b)("li",{parentName:"ul"},"Consistencia"),Object(l.b)("li",{parentName:"ul"},"Validez")))),Object(l.b)("div",null,Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"III. Cuantificación"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Uso de cuantificadores"),Object(l.b)("li",{parentName:"ul"},"Sentido y referencia"),Object(l.b)("li",{parentName:"ul"},"Identidad y descripciones definidas")),Object(l.b)("p",null,"IV. Deducción natural"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Reglas de deducción"),Object(l.b)("li",{parentName:"ul"},"Propiedades lógicas en DN")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Evaluación"),Object(l.b)("table",{style:{fontSize:"80%"}},Object(l.b)("colgroup",null,Object(l.b)("col",null),Object(l.b)("col",{style:{width:"25%"}})),Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Corte"),Object(l.b)("th",null,"Unidad"),Object(l.b)("th",null,"Fecha"),Object(l.b)("th",null,"Actividad de evaluación"),Object(l.b)("th",null,"%"))),Object(l.b)("tbody",null,Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{rowSpan:"3"},"1"),Object(l.b)("td",{rowSpan:"3"},"Formalización y propiedades lógicas"),Object(l.b)("td",null,"08.02-14.02"),Object(l.b)("td",null,"Taller: Formalización"),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",null,"22.02-28.02"),Object(l.b)("td",null,"Taller: Propiedades lógicas"),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",null,"01.03"),Object(l.b)("td",null,"Parcial"),Object(l.b)("td",null,"15%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{rowSpan:"2"},"2"),Object(l.b)("td",{rowSpan:"2"},"Cuantificación"),Object(l.b)("td",null,"15.03-21.03"),Object(l.b)("td",null,"Taller"),Object(l.b)("td",null,"10%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",null,"25.03"),Object(l.b)("td",null,"Parcial"),Object(l.b)("td",null,"15%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{rowSpan:"3"},"3"),Object(l.b)("td",{rowSpan:"3"},"Deducción natural"),Object(l.b)("td",null,"26.04-02.05"),Object(l.b)("td",null,"Taller"),Object(l.b)("td",null,"10%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",null,"10.05"),Object(l.b)("td",null,"Parcial"),Object(l.b)("td",null,"15%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",null,"20.05"),Object(l.b)("td",null,"Examen final"),Object(l.b)("td",null,"25%"))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Entregas"),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Todas las entregas se harán por medio de ",Object(l.b)("strong",{parentName:"li"},"e-aulas"),"."),Object(l.b)("li",{parentName:"ul"},"¡No se aceptarán entregas por correo electrónico sin previo aviso!")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Ejercicios de clase"),":\nEjercicios para practicar el tema de la sesión."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Entrega válida hasta finalizar el día en que se asignan (i.e., 23:59h)"),Object(l.b)("li",{parentName:"ul"},"Contarán como bono para el parcial correspondiente al corte.")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Evaluación"),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Talleres:")," Ejercicios para practicar los temas de la unidad."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Abiertos durante una semana calendario"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("p",{parentName:"blockquote"},"i.e., lunes 11:00 hasta domingo 23:59."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Intentos ilimitados, calificación más alta."))))),Object(l.b)("div",null,Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parciales"),": Evaluación de los contenidos de la unidad."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Dos horas (durante la sesión)"),Object(l.b)("li",{parentName:"ul"},"Único intento")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Cláusula de exención"),Object(l.b)("p",null,"Si al final del semestre, ",Object(l.b)("strong",{parentName:"p"},"antes del examen final"),", su nota acumulada es:"),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Mayor a 4.0:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Se asigna la nota que lleva (e.g., 4.3) al examen final."),Object(l.b)("li",{parentName:"ul"},"Puede presentar el final para sacar una nota mayor."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Mayor o igual a 4.5:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Se asigna un 5.0 automáticamente al examen final.")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Comunicación"),Object(l.b)(j,{mdxType:"Animate"},Object(l.b)("p",null,"Correo electrónico: ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"mailto:juan.loaiza@urosario.edu.co"}),"juan.loaiza@urosario.edu.co")),Object(l.b)("p",null,"Moodle (e-aulas)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Por favor agreguen una foto o una imagen distintiva para reconocerles en e-aulas y en Zoom y aprenderme mejor sus nombres.")),Object(l.b)("p",null,"Mediante el monitor")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("h1",null,"¡Gracias!"),Object(l.b)("p",null,"¡Les deseo un muy buen comienzo de semestre (y de carrera)!"),Object(l.b)("p",null,"Y nos vemos el jueves..."))))}p.isMDXComponent=!0},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return b})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return u}));var n=a("q1tI"),l=a.n(n);function c(e){var t="example";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function i(e){var t="meta";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="tooltip";t=e.animate?t+" fragment":t;return l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),l.a.createElement("div",null,e.notitle?"":l.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function r(e){var t="definition";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function u(){return l.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}},ejmO:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-logica-1-introduccion-mdx-4bd0759f4a3f2ab42332.js.map