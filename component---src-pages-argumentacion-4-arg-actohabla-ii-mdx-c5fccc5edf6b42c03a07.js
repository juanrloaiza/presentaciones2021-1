(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),c=a("q1tI"),l=a.n(c),r=a("7ljp");a("ZrE4"),a("ejmO");function i(e){return l.a.createElement("section",null,l.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function b(e){var t=l.a.Children.map(e.children,(function(t,a){return l.a.cloneElement(t,{secTitle:e.title})}));return l.a.createElement("section",null,t)}function s(e){var t=(new Date).getFullYear();return l.a.createElement("section",{className:"title"},l.a.createElement("h3",null,e.clase),l.a.createElement("h1",null," ",e.title),l.a.createElement("div",{className:"author"},"Juan R. Loaiza"),l.a.createElement("small",null,"Escuela de Ciencias Humanas ",l.a.createElement("br",null),"Universidad del Rosario ",l.a.createElement("br",null),t))}var u=a("rePB"),o=a("zLVn");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=function(e){return l.a.cloneElement(e,{className:"fragment"})},p={ul:function(e){var t=e.children;Object(o.a)(e,["children"]);return l.a.createElement("ul",null,l.a.Children.map(t,d))},ol:function(e){var t=e.children;Object(o.a)(e,["children"]);return l.a.createElement("ol",null,l.a.Children.map(t,d))},table:function(e){var t=e.children,a=Object(o.a)(e,["children"]),n=l.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=l.a.Children.map(e.props.children,(function(e){var t=l.a.Children.map(e.props.children,(function(e){return l.a.cloneElement(e,{className:"fragment"})}));return l.a.createElement("tr",{},t)}));return l.a.createElement("tbody",{},t)}return e}));return l.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function m(e){var t=e.children,a=Object(o.a)(e,["children"]),n=l.a.Children.map(t,(function(e){return l.a.cloneElement(e,{className:e.props.className+" fragment"})}));return l.a.createElement(r.a,Object.assign({},a,{components:p}),n)}var O=a("dbrF");function M(e){var t=e.children,a=Object(o.a)(e,["children"]),n=l.a.Children.toArray(t);return l.a.createElement("div",Object.assign({className:"two-cols"},a),l.a.createElement("div",{className:"col-left "+a.className},n[0]),l.a.createElement("div",{className:"col-right "+a.className},n[1]))}function N(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function g(e){return l.a.createElement("div",{className:"card"},e.title?l.a.createElement("div",{className:"card-title"},e.title):null,l.a.createElement("div",{className:"card-body"},e.children))}var L=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:i,TitleSlide:s,Animate:m,PSection:b,Emphasis:O.b,Tooltip:O.g,Definition:O.a,TwoCols:M,Flex:N,Card:g,Meta:O.e,FQ:O.d,Example:O.c};return l.a.createElement("div",{style:{height:"95vh"}},l.a.createElement("div",{className:"reveal"},l.a.createElement("div",{className:"slides"},l.a.createElement(r.a,{components:e},this.props.children))))},t}(l.a.Component);t.a=L},YrEp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return g}));var n=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("WLIS"),r=a("dbrF"),i={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},s=b("TitleSlide"),u=b("Slide"),o=b("Animate"),j=b("PSection"),d=b("Definition"),p=b("Emphasis"),m=b("Flex"),O=b("Tooltip"),M={_frontmatter:i},N=l.a;function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(N,Object.assign({},M,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(s,{title:"La argumentación como acto de habla II",clase:"Argumentación",mdxType:"TitleSlide"}),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"En el capítulo anterior..."),Object(c.b)("p",null,"Hemos dicho antes que argumentar es la ",Object(c.b)("strong",{parentName:"p"},"búsqueda de un acuerdo"),"."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Este ejercicio es un ",Object(c.b)("strong",{parentName:"p"},"acto de habla complejo")," en el que tenemos:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"La ",Object(c.b)("strong",{parentName:"li"},"defensa")," de una tesis."),Object(c.b)("li",{parentName:"ul"},"Se ",Object(c.b)("strong",{parentName:"li"},"afirman")," razones en soporte de la tesis.")),Object(c.b)("p",null,"Esto además puede incluir de manera ",Object(c.b)("strong",{parentName:"p"},"explícita")," o ",Object(c.b)("strong",{parentName:"p"},"implícita"),"."))),Object(c.b)(j,{title:"Creencias",mdxType:"PSection"},Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Proposiciones y creencias"),Object(c.b)("p",null,"¿Qué queremos decir cuando una persona tiene una ",Object(c.b)("strong",{parentName:"p"},"creencia"),"?"),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Una creencia es una ",Object(c.b)("strong",{parentName:"p"},"actitud")," frente a una ",Object(c.b)("strong",{parentName:"p"},"proposición"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Si creemos que P, estamos comprometidos con la verdad de P.")),Object(c.b)("p",null,"Otras ",Object(c.b)("strong",{parentName:"p"},"actitudes proposicionales")," incluyen:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dudar de P"),Object(c.b)("li",{parentName:"ul"},"Asegurar que P"),Object(c.b)("li",{parentName:"ul"},"Sospechar de que P")),Object(c.b)("p",null,"Distintas actitudes proposicionales implican distintos ",Object(c.b)("strong",{parentName:"p"},"grados de compromiso"),"."))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Justificación de creencias"),Object(c.b)("p",null,"Podemos tener ",Object(c.b)("strong",{parentName:"p"},"buenas o malas razones")," para tener una creencia."),Object(c.b)(d,{word:"Justificación",animate:!0,mdxType:"Definition"},"Razones en soporte de la presunción de verdad de P."),Object(c.b)(p,{animate:!0,mdxType:"Emphasis"},"Creo que saldrá el sol mañana pues todos los días ha salido."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Creencia: ",Object(c.b)("em",{parentName:"li"},"Saldrá el sol mañana")),Object(c.b)("li",{parentName:"ul"},"Justificación: ",Object(c.b)("em",{parentName:"li"},"Todos los días ha salido el sol"))))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Justificación y verdad"),Object(c.b)("p",null,"Es importante distinguir entre la ",Object(c.b)("strong",{parentName:"p"},"justificación")," y la ",Object(c.b)("strong",{parentName:"p"},"verdad")," de una creencia."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{width:"45%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Creo que no quedo embarazado porque tomo pastillas anticonceptivas.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Creencia verdadera"),Object(c.b)("li",{parentName:"ul"},"Mala justificación")))),Object(c.b)("div",{style:{width:"45%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Creo que todos los políticos son corruptos en algún grado porque muchos lo son.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Creencia probablemente falsa"),Object(c.b)("li",{parentName:"ul"},"Buena justificación"))))),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"La justificación depende de los ",Object(c.b)("strong",{parentName:"p"},"estándares")," (lógicos, retóricos) con los que se ",Object(c.b)("strong",{parentName:"p"},"juzgue")," una proposición. La verdad depende de cómo sea el mundo."))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplos"),Object(c.b)("p",null,"A continuación veremos varias creencias posibles. ¿Qué podría contar como justificación? ¿Es esta justificación buena o mala?"),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"La pandemia acabará en el 2022."),Object(c.b)("li",{parentName:"ul"},"Los estudiantes de la ECH son hippies."),Object(c.b)("li",{parentName:"ul"},"La Tierra es plana."),Object(c.b)("li",{parentName:"ul"},"Habrá problemas con la repartición de vacunas en Colombia."))))),Object(c.b)(j,{title:"Disputas",mdxType:"PSection"},Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"¿Qué es una disputa?"),Object(c.b)("p",null,"Una disputa es un ",Object(c.b)("strong",{parentName:"p"},"intercambio")," en el que se dirime un ",Object(c.b)("strong",{parentName:"p"},"desacuerdo"),"."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"La disputa deja de existir cuando se ",Object(c.b)("strong",{parentName:"p"},"resuelve")," (encontraste con ",Object(c.b)("strong",{parentName:"p"},"zanjarla"),")."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Una de las partes ",Object(c.b)("strong",{parentName:"li"},"concede")," y ",Object(c.b)("strong",{parentName:"li"},"acepta")," las razones del interlocutor.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Ha sido ",Object(c.b)("strong",{parentName:"li"},"convencida")," de las razones del interlocutor."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Retira")," su tesis frente a las razones del interlocutor.")))),Object(c.b)("p",null,"Lo que está en juego en una disputa es la ",Object(c.b)("strong",{parentName:"p"},"justificación")," de nuestras ",Object(c.b)("strong",{parentName:"p"},"creencias"),"."))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Etapas de la disputa"),Object(c.b)("p",null,"van Eemeren y Grootendorst sostienen que hay ",Object(c.b)("strong",{parentName:"p"},"cuatro etapas")," de resolución."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Etapa de confrontación"),Object(c.b)("li",{parentName:"ol"},"Etapa de apertura"),Object(c.b)("li",{parentName:"ol"},"Etapa de argumentación"),Object(c.b)("li",{parentName:"ol"},"Etapa de clausura")))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Etapa de confrontación"),Object(c.b)("p",null,"Para que exista una disputa, debe ponerse algún desacuerdo sobre la mesa."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)(r.f,{mdxType:"Person"}),Object(c.b)("div",{align:"center"},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"A cree que ",Object(c.b)("em",{parentName:"p"},"P"),", B cree que ",Object(c.b)("em",{parentName:"p"},"no-P"),"."),Object(c.b)("p",null,"A cree que ",Object(c.b)("em",{parentName:"p"},"P"),", B duda de que ",Object(c.b)("em",{parentName:"p"},"P"),"."),Object(c.b)("p",null,"A cree que ",Object(c.b)("em",{parentName:"p"},"P"),", B pretende dudar de que ",Object(c.b)("em",{parentName:"p"},"P"),"."))),Object(c.b)(r.f,{mdxType:"Person"})),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Se requiere que ambas personas estén en ",Object(c.b)("strong",{parentName:"p"},"capacidad")," de expresar sus creencias."))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Etapa de apertura"),Object(c.b)("p",null,"Una vez establecido el desacuerdo, se establecen roles."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{textAlign:"center",width:"35%"},className:"fragment"},Object(c.b)(r.f,{mdxType:"Person"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Defensor")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Persona que defiende P"))),Object(c.b)("div",{style:{textAlign:"center",width:"35%"},className:"fragment"},Object(c.b)(r.f,{mdxType:"Person"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Antagonista")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Persona que ofrece razones en contra de P")))),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Establecidos esos roles, se establecen ",Object(c.b)("strong",{parentName:"p"},"puntos de acuerdo iniciales"),"."))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Etapa de argumentación"),Object(c.b)("p",null,"Generalmente, el ",Object(c.b)("strong",{parentName:"p"},"defensor")," comienza ofreciendo razones ",Object(c.b)("strong",{parentName:"p"},"en favor")," de ",Object(c.b)("em",{parentName:"p"},"P"),"."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"A continuación, el ",Object(c.b)("strong",{parentName:"p"},"antagonista")," ofrece razones en contra de las razones del defensor.")),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{width:"100%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Contra-argumento")),Object(c.b)("p",null,"Argumento cuya conclusión implica la ",Object(c.b)("strong",{parentName:"p"},"negación de una de las premisas"),"."))),Object(c.b)("div",{style:{width:"100%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Contraejemplo")),Object(c.b)("p",null,"Demostración de la ",Object(c.b)("strong",{parentName:"p"},"invalidez")," del argumento del defensor.")))),Object(c.b)(O,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Refutar un argumento no es simplemente ",Object(c.b)("strong",{parentName:"p"},"negar su conclusión"),"."))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Etapa de clausura"),Object(c.b)("p",null,"Finalmente se determinan si las razones del antagonista son ",Object(c.b)("strong",{parentName:"p"},"exitosas"),"."),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{width:"45%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Si el antagonista es exitoso...")),Object(c.b)("p",null,"...el defensor debe:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Convencerse de las razones"),Object(c.b)("li",{parentName:"ul"},"Retirar su tesis")),Object(c.b)("p",null,"...o puede:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Ofrecer nuevas razones"),Object(c.b)("li",{parentName:"ul"},"Regreso a la etapa de argumentación")))),Object(c.b)("div",{style:{width:"45%"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Si el antagonista no es exitoso...")),Object(c.b)("p",null,"...el antagonista debe:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Ofrecer nuevas razones")),Object(c.b)("p",null,"...o puede:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Conceder la tesis"),Object(c.b)("li",{parentName:"ul"},"Retirar su duda")))))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Resumen"),Object(c.b)(m,{mdxType:"Flex"},Object(c.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Etapa de confrontación")),Object(c.b)("p",null,"Se establece el ",Object(c.b)("strong",{parentName:"p"},"desacuerdo"),"."),Object(c.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(c.b)("li",null,"A cree que P, B cree que no-P"),Object(c.b)("li",null,"A cree que P, B duda de que P."),Object(c.b)("li",null,"A cree que P, B pretende dudar de P.")))),Object(c.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Etapa de apertura")),Object(c.b)("p",null,"Se establecen roles de ",Object(c.b)("strong",{parentName:"p"},"defensor")," y ",Object(c.b)("strong",{parentName:"p"},"antagonista"),"."),Object(c.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(c.b)("li",null,"Defensor: cree que P."),Object(c.b)("li",null,"Antagonista: duda de P.")))),Object(c.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Etapa de argumentación")),Object(c.b)("p",null,"El antagonista ofrece razones en contra de la tesis del defensor."),Object(c.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(c.b)("li",null,"Contra-argumento"),Object(c.b)("li",null,"Contra-ejemplo")))),Object(c.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Etapa de clausura")),Object(c.b)("p",null,"¿En favor de quién se dirime el desacuerdo?"),Object(c.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(c.b)("li",null,"El antagonista acepta P."),Object(c.b)("li",null,"El defensor retira P."),Object(c.b)("li",null,"Se ofrecen nuevos argumentos."))))))),Object(c.b)(u,{mdxType:"Slide"},Object(c.b)("h1",null,"Actividad"),Object(c.b)("p",null,"En grupos generados al azar, estructuremos una discusión usando las distintas etapas que hemos tratado."),Object(c.b)(o,{mdxType:"Animate"},Object(c.b)("p",null,"Recuerden identificar correctamente las siguientes partes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"¿Qué ",Object(c.b)("strong",{parentName:"li"},"cree")," cada parte?"),Object(c.b)("li",{parentName:"ul"},"¿Quién ",Object(c.b)("strong",{parentName:"li"},"defiende")," qué?"),Object(c.b)("li",{parentName:"ul"},"¿Qué simplemente se ",Object(c.b)("strong",{parentName:"li"},"afirma")," y qué está en discusión?")),Object(c.b)("p",null,"Escribamos un pequeño guión mostrando la disputa."))))}g.isMDXComponent=!0},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"g",(function(){return b})),a.d(t,"a",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return j}));var n=a("zLVn"),c=a("q1tI"),l=a.n(c);function r(e){var t="example";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function i(e){var t="meta";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function b(e){var t="tooltip";t=e.animate?t+" fragment":t;return l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),l.a.createElement("div",null,e.notitle?"":l.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function s(e){var t="definition";return t=e.animate?t+" fragment":t,l.a.createElement("div",Object.assign({},e,{className:t}),l.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function u(){return l.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}function o(e){return"«"+e.children+"»"}function j(e){var t=e.children,a=Object(n.a)(e,["children"]);return l.a.createElement("div",Object.assign({style:{borderLeft:"5px solid #ccc",marginLeft:"1rem",paddingLeft:"1rem"}},a),t)}},ejmO:function(e,t,a){},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-argumentacion-4-arg-actohabla-ii-mdx-c5fccc5edf6b42c03a07.js.map