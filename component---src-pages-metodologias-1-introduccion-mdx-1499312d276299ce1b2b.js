(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Bl7J:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a("zLVn"),l=a("q1tI"),c=a.n(l);function r(e){var t=e.children,a=Object(n.a)(e,["children"]),l=c.a.Children.toArray(t);return c.a.createElement("div",Object.assign({className:"two-cols"},a),c.a.createElement("div",{className:"col-left "+a.className},l[0]),c.a.createElement("div",{className:"col-right "+a.className},l[1]))}function i(e){return c.a.createElement("div",Object.assign({},e,{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}}),e.children)}},Dujm:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("zLVn"),l=a("q1tI"),c=a.n(l),r=a("7ljp"),i=function(e){return c.a.cloneElement(e,{className:"fragment"})},b={ul:function(e){var t=e.children;Object(n.a)(e,["children"]);return c.a.createElement("ul",null,c.a.Children.map(t,i))},ol:function(e){var t=e.children;Object(n.a)(e,["children"]);return c.a.createElement("ol",null,c.a.Children.map(t,i))},table:function(e){var t=e.children,a=Object(n.a)(e,["children"]),l=c.a.Children.map(t,(function(e){if("tbody"==e.props.originalType){var t=c.a.Children.map(e.props.children,(function(e){var t=c.a.Children.map(e.props.children,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement("tr",{},t)}));return c.a.createElement("tbody",{},t)}return e}));return c.a.createElement("table",{props:a},l)}};function o(e){var t=e.children,a=Object(n.a)(e,["children"]),l=c.a.Children.map(t,(function(e){return c.a.cloneElement(e,{className:"fragment"})}));return c.a.createElement(r.a,Object.assign({},a,{components:b}),l)}},WLIS:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),c=a.n(l),r=a("7ljp"),i=(a("ZrE4"),a("ejmO"),a("g8K8")),b=a("nF89"),o=a("t6Qi"),s=a("Dujm"),u=a("dbrF"),d=a("Bl7J"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:i.a,TitleSlide:o.a,Animate:s.a,PSection:b.a,Example:u.b,Tooltip:u.d,Definition:u.a,TwoCols:d.b,Flex:d.a};return c.a.createElement("div",{style:{height:"95vh"}},c.a.createElement("div",{className:"reveal"},c.a.createElement("div",{className:"slides"},c.a.createElement(r.a,{components:e},this.props.children))))},t}(c.a.Component);t.a=m},ZrE4:function(e,t,a){},ejmO:function(e,t,a){},g8K8:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n);function c(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}},nF89:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n);function c(e){var t=l.a.Children.map(e.children,(function(t,a){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}},t6Qi:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n);function c(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}},tY1x:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return j}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("WLIS"),r={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},b=i("TitleSlide"),o=i("PSection"),s=i("Slide"),u=i("Animate"),d=i("TwoCols"),m={_frontmatter:r},p=c.a;function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b,{clase:"Metodologías de Investigación",title:"Introducción",mdxType:"TitleSlide"}),Object(l.b)(o,{title:"¡Presentémonos!",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Quién soy?"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Filósofo de la Universidad del Rosario."),Object(l.b)("p",null,"Máster y doctor de la Berlin School of Mind and Brain (Humboldt-Universität zu Berlin)"),Object(l.b)("p",null,"Profesor e investigador de la Universidad del Rosario."),Object(l.b)("p",null,"Áreas principales de investigación:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Filosofía y psicología de las emociones"),Object(l.b)("li",{parentName:"ul"},"Filosofía de las neurociencias")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Y ustedes?"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Nombre"),Object(l.b)("li",{parentName:"ul"},"Carrera"),Object(l.b)("li",{parentName:"ul"},"Si pudieran escribir un libro, ¿de qué sería?"),Object(l.b)("li",{parentName:"ul"},"¿Qué es ",Object(l.b)("strong",{parentName:"li"},"investigar"),"? ¿Qué hace un/a ",Object(l.b)("strong",{parentName:"li"},"investigador/a"),"?"))))),Object(l.b)(o,{title:"¿Para qué metodología?",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("iframe",{src:"https://embed.polleverywhere.com/discourses/LJoZB5x1ucTuErpxWK88c?controls=none&short_poll=true",width:"1000",height:"600px"})),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Qué es investigar?"),Object(l.b)("p",null,"En el sentido más general, investigar es ",Object(l.b)("strong",{parentName:"p"},"averiguar algo"),"."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pregunta: Aquello que no sabemos y queremos saber."),Object(l.b)("li",{parentName:"ul"},"Método: Modo en el que vamos a averiguar lo que queremos saber."),Object(l.b)("li",{parentName:"ul"},"Resultado: Averiguación.")),Object(l.b)("p",null,"Esto implica que toda investigación implica un ",Object(l.b)("strong",{parentName:"p"},"método"),"."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,'¿Qué es un "método"?'),Object(l.b)("p",null,'Por "método" podemos entender una serie de ',Object(l.b)("strong",{parentName:"p"},"procedimientos")," para lograr algo (en nuestro caso, investigar)."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"No todo método sirve para cualquier pregunta."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Ejemplo: Averiguar cuán buenos son ustedes en matemáticas haciéndoles escribir un ensayo.")),Object(l.b)("p",null,"Esto implica que tenemos que saber qué métodos se ajustan a qué preguntas."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Método y metodología"),Object(l.b)("p",null,'La "',Object(l.b)("strong",{parentName:"p"},"metodología"),'" es el estudio del método.'),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Cómo funciona un método?"),Object(l.b)("li",{parentName:"ul"},"¿Cuándo es un método el correcto?"),Object(l.b)("li",{parentName:"ul"},"¿Qué preguntas puede responder un método?")),Object(l.b)("p",null,"La metodología nos da normas para aplicar bien los procedimientos para investigar (i.e., nos permite pasar de la ",Object(l.b)("strong",{parentName:"p"},"epistemología a la práctica"),")."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Metodología en ciencias sociales"),Object(l.b)("p",null,"En las ciencias sociales, hay dos familias grandes de metodologías."),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("div",null,Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Metodologías cualitativas"),"\nEtnografía, entrevista, grupo focal, análisis visual...")),Object(l.b)("div",null,Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Metodologías cuantitativas"),"\nEncuesta, análisis de redes, humanidades digitales...")))),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Estas dos metodologías a veces se presentan como opuestas, ¡pero no tienen que serlo!"),Object(l.b)("p",null,"Las metodologías cuantitativas y cualitativas responden a formas diferentes de producir conocimiento."))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Plan de trabajo"),Object(l.b)("p",null,"En este curso, haremos un paneo general de la metodología desde la ",Object(l.b)("strong",{parentName:"p"},"epistemología")," hasta la ",Object(l.b)("strong",{parentName:"p"},"práctica"),"."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"¿Qué es investigar? ¿Qué es producir conocimiento?"),Object(l.b)("li",{parentName:"ol"},"¿Qué sabemos ya? ¿Cómo lo averiguamos?"),Object(l.b)("li",{parentName:"ol"},"¿Qué métodos tenemos para averiguar cosas?",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Métodos cuantitativos"),Object(l.b)("li",{parentName:"ul"},"Métodos cualitativos"))),Object(l.b)("li",{parentName:"ol"},"¿Cómo formulamos un proyecto de investigación?"))))),Object(l.b)(o,{title:"Logística",mdxType:"PSection"},Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Programa"),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)("div",{style:{fontSize:"90%"}},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"I. Conceptos generales de investigación"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conceptos básicos"),Object(l.b)("li",{parentName:"ul"},"Búsqueda de bibliografía"),Object(l.b)("li",{parentName:"ul"},"Cómo leer literatura empírica"),Object(l.b)("li",{parentName:"ul"},"Introducción a las metodologías")),Object(l.b)("p",null,"II. Métodos cuantitativos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Planteamiento de preguntas"),Object(l.b)("li",{parentName:"ul"},"Muestreo y diseño de instrumentos"),Object(l.b)("li",{parentName:"ul"},"Análisis descriptivo")))),Object(l.b)("div",{style:{fontSize:"90%"}},Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"III. Métodos cualitativos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Planteamiento de preguntas"),Object(l.b)("li",{parentName:"ul"},"Observación participante"),Object(l.b)("li",{parentName:"ul"},"Entrevista y grupo focal"),Object(l.b)("li",{parentName:"ul"},"Historia de vida")),Object(l.b)("p",null,"IV. Proyectos de investigación"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Planteamiento de proyectos"),Object(l.b)("li",{parentName:"ul"},"Financiación de la investigación")))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Entregas"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Todas las entregas se harán por medio de ",Object(l.b)("strong",{parentName:"li"},"e-aulas"),"."),Object(l.b)("li",{parentName:"ul"},"¡No se aceptarán entregas por correo electrónico sin previo aviso!"),Object(l.b)("li",{parentName:"ul"},"Se calificará el uso del formato de citación (APA, 7ma edición)"),Object(l.b)("li",{parentName:"ul"},"Penalización por faltas de ortografía y gramática"),Object(l.b)("li",{parentName:"ul"},"Se recomienda usar el formato disponible en e-aulas")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Evaluación"),Object(l.b)(d,{mdxType:"TwoCols"},Object(l.b)("div",null,Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Talleres:")," Ejercicios para practicar los temas de la unidad."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Abiertos durante una semana calendario"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("p",{parentName:"blockquote"},"i.e., martes 11:00 hasta domingo 23:59."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Se desarrollan de manera grupal (máx. 3 personas)"))))),Object(l.b)("div",null,Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parcial"),": Conceptos básicos"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Selección múltiple, única respuesta.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Comprensión de conceptos.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Dos horas durante la sesión."))))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Trabajo grupal"),Object(l.b)("p",null,"Durante todo el semestre desarrollaremos un proyecto de investigación."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Recolección de literatura")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fichas metodológicas",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Resúmenes de dos páginas de un artículo empírico."),Object(l.b)("li",{parentName:"ul"},"Tres (3) fichas por estudiante de artículos diferentes."))),Object(l.b)("li",{parentName:"ul"},"Revisión de literatura",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Síntesis del estado del arte"),Object(l.b)("li",{parentName:"ul"},"Una (1) por grupo"),Object(l.b)("li",{parentName:"ul"},"Mínimo 5 referencias por persona del grupo.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"e.g., Grupo de 3 personas = 15 referencias")))))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Proyecto de investigación"),Object(l.b)("p",null,"Propuesta de investigación sobre el tema de elección."),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Uno (1) por grupo."),Object(l.b)("li",{parentName:"ul"},"Establece un estado del arte y formula una pregunta de investigación."),Object(l.b)("li",{parentName:"ul"},"Propone una metodología adecuada para resolver la pregunta."),Object(l.b)("li",{parentName:"ul"},"Presenta un plan de trabajo y un presupuesto.")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen de evaluaciones"),Object(l.b)("table",{style:{margin:"auto",fontSize:"80%"}},Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Fecha"),Object(l.b)("th",null,"Corte"),Object(l.b)("th",null,"Actividad de evaluación"),Object(l.b)("th",null,"%"))),Object(l.b)("tbody",null,Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"19.01"),Object(l.b)("td",{rowSpan:"2"},"1"),Object(l.b)("td",null,"Taller: Revisión bibliográfica "),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"05.03"),Object(l.b)("td",null,"Parcial: Conceptos básicos de investigación "),Object(l.b)("td",null,"20%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"22.02 – 14.03"),Object(l.b)("td",{rowSpan:"2"},"2"),Object(l.b)("td",null,"Fichas metodológicas (3) "),Object(l.b)("td",null,"10%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"26.03"),Object(l.b)("td",null,"Revisión de literatura "),Object(l.b)("td",null,"15%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"09.04"),Object(l.b)("td",{rowSpan:"4"},"3"),Object(l.b)("td",null,"Taller: Investigación cuantitativa "),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"27.04"),Object(l.b)("td",null,"Taller: Investigación cualitativa "),Object(l.b)("td",null,"5%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"30.04 – 07.05"),Object(l.b)("td",null,"Presentación oral de revisión de literatura "),Object(l.b)("td",null,"10%")),Object(l.b)("tr",{className:"fragment"},Object(l.b)("td",{style:{fontSize:"80%"}},"18.05"),Object(l.b)("td",null,"Proyecto de investigación "),Object(l.b)("td",null,"30%"))))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("h1",null,"Comunicación"),Object(l.b)(u,{mdxType:"Animate"},Object(l.b)("p",null,"Correo electrónico: ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"mailto:juan.loaiza@urosario.edu.co"}),"juan.loaiza@urosario.edu.co")),Object(l.b)("p",null,"Moodle (e-aulas)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Por favor agreguen una foto o una imagen distintiva para reconocerles en e-aulas y en Zoom y aprenderme mejor sus nombres.")),Object(l.b)("p",null,"Mediante la monitora")))),Object(l.b)(s,{mdxType:"Slide"},Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)("h1",null,"¡Gracias!"),Object(l.b)("p",null,"¡Les deseo un muy buen comienzo de semestre!"),Object(l.b)("p",null,"Y nos vemos el viernes..."))))}j.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-metodologias-1-introduccion-mdx-1499312d276299ce1b2b.js.map