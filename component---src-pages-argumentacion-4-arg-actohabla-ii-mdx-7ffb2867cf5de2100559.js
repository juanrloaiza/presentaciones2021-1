(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),l=a("q1tI"),r=a.n(l),c=a("7ljp");a("ZrE4"),a("ejmO");function b(e){return r.a.createElement("section",null,r.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function i(e){var t=r.a.Children.map(e.children,(function(t,a){return r.a.cloneElement(t,{secTitle:e.title})}));return r.a.createElement("section",null,t)}function s(e){var t=(new Date).getFullYear();return r.a.createElement("section",{className:"title"},r.a.createElement("h3",null,e.clase),r.a.createElement("h1",null," ",e.title),r.a.createElement("div",{className:"author"},"Juan R. Loaiza"),r.a.createElement("small",null,"Escuela de Ciencias Humanas ",r.a.createElement("br",null),"Universidad del Rosario ",r.a.createElement("br",null),t))}var o=a("rePB"),p=a("zLVn");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=function(e){return r.a.cloneElement(e,{className:"fragment"})},m={ul:function(e){var t=e.children;Object(p.a)(e,["children"]);return r.a.createElement("ul",null,r.a.Children.map(t,d))},ol:function(e){var t=e.children;Object(p.a)(e,["children"]);return r.a.createElement("ol",null,r.a.Children.map(t,d))},table:function(e){var t=e.children,a=Object(p.a)(e,["children"]),n=r.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=r.a.Children.map(e.props.children,(function(e){var t=r.a.Children.map(e.props.children,(function(e){return r.a.cloneElement(e,{className:"fragment"})}));return r.a.createElement("tr",{},t)}));return r.a.createElement("tbody",{},t)}return e}));return r.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function j(e){var t=e.children,a=Object(p.a)(e,["children"]),n=r.a.Children.map(t,(function(e){return r.a.cloneElement(e,{className:"fragment"})}));return r.a.createElement(c.a,Object.assign({},a,{components:m}),n)}var O=a("dbrF");function g(e){var t=e.children,a=Object(p.a)(e,["children"]),n=r.a.Children.toArray(t);return r.a.createElement("div",Object.assign({className:"two-cols"},a),r.a.createElement("div",{className:"col-left "+a.className},n[0]),r.a.createElement("div",{className:"col-right "+a.className},n[1]))}function N(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function y(e){return r.a.createElement("div",{className:"card"},e.title?r.a.createElement("div",{className:"card-title"},e.title):null,r.a.createElement("div",{className:"card-body"},e.children))}var f=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:b,TitleSlide:s,Animate:j,PSection:i,Example:O.b,Tooltip:O.d,Definition:O.a,TwoCols:g,Flex:N,Card:y};return r.a.createElement("div",{style:{height:"95vh"}},r.a.createElement("div",{className:"reveal"},r.a.createElement("div",{className:"slides"},r.a.createElement(c.a,{components:e},this.props.children))))},t}(r.a.Component);t.a=f},YrEp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return y}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("WLIS"),c=a("dbrF"),b={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},s=i("TitleSlide"),o=i("Slide"),p=i("Animate"),u=i("PSection"),d=i("Definition"),m=i("Example"),j=i("Flex"),O=i("Tooltip"),g={_frontmatter:b},N=r.a;function y(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(N,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{title:"La argumentación como acto de habla II",clase:"Argumentación",mdxType:"TitleSlide"}),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"En el capítulo anterior..."),Object(l.b)("p",null,"Hemos dicho antes que argumentar es la ",Object(l.b)("strong",{parentName:"p"},"búsqueda de un acuerdo"),"."),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"Este ejercicio es un ",Object(l.b)("strong",{parentName:"p"},"acto de habla complejo")," en el que tenemos:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"La ",Object(l.b)("strong",{parentName:"li"},"defensa")," de una tesis."),Object(l.b)("li",{parentName:"ul"},"Se ",Object(l.b)("strong",{parentName:"li"},"afirman")," razones en soporte de la tesis.")),Object(l.b)("p",null,"Esto además puede incluir de manera ",Object(l.b)("strong",{parentName:"p"},"explícita")," o ",Object(l.b)("strong",{parentName:"p"},"implícita"),"."))),Object(l.b)(u,{title:"Creencias",mdxType:"PSection"},Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Proposiciones y creencias"),Object(l.b)("p",null,"¿Qué queremos decir cuando una persona tiene una ",Object(l.b)("strong",{parentName:"p"},"creencia"),"?"),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"Una creencia es una ",Object(l.b)("strong",{parentName:"p"},"actitud")," frente a una ",Object(l.b)("strong",{parentName:"p"},"proposición"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Si creemos que P, estamos comprometidos con la verdad de P.")),Object(l.b)("p",null,"Otras ",Object(l.b)("strong",{parentName:"p"},"actitudes proposicionales")," incluyen:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Dudar de P"),Object(l.b)("li",{parentName:"ul"},"Asegurar que P"),Object(l.b)("li",{parentName:"ul"},"Sospechar de que P")),Object(l.b)("p",null,"Distintas actitudes proposicionales implican distintos ",Object(l.b)("strong",{parentName:"p"},"grados de compromiso"),"."))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Justificación de creencias"),Object(l.b)("p",null,"Podemos tener ",Object(l.b)("strong",{parentName:"p"},"buenas o malas razones")," para tener una creencia."),Object(l.b)(d,{word:"Justificación",animate:!0,mdxType:"Definition"},"Razones en soporte de la presunción de verdad de P."),Object(l.b)(m,{animate:!0,mdxType:"Example"},"Creo que saldrá el sol mañana pues todos los días ha salido."),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Creencia: ",Object(l.b)("em",{parentName:"li"},"Saldrá el sol mañana")),Object(l.b)("li",{parentName:"ul"},"Justificación: ",Object(l.b)("em",{parentName:"li"},"Todos los días ha salido el sol"))))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Justificación y verdad"),Object(l.b)("p",null,"Es importante distinguir entre la ",Object(l.b)("strong",{parentName:"p"},"justificación")," y la ",Object(l.b)("strong",{parentName:"p"},"verdad")," de una creencia."),Object(l.b)(j,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Creo que no quedo embarazado porque tomo pastillas anticonceptivas.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Creencia verdadera"),Object(l.b)("li",{parentName:"ul"},"Mala justificación")))),Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Creo que todos los políticos son corruptos en algún grado porque muchos lo son.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Creencia probablemente falsa"),Object(l.b)("li",{parentName:"ul"},"Buena justificación"))))),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"La justificación depende de los ",Object(l.b)("strong",{parentName:"p"},"estándares")," (lógicos, retóricos) con los que se ",Object(l.b)("strong",{parentName:"p"},"juzgue")," una proposición. La verdad depende de cómo sea el mundo."))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Ejemplos"),Object(l.b)("p",null,"A continuación veremos varias creencias posibles. ¿Qué podría contar como justificación? ¿Es esta justificación buena o mala?"),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"La pandemia acabará en el 2022."),Object(l.b)("li",{parentName:"ul"},"Los estudiantes de la ECH son hippies."),Object(l.b)("li",{parentName:"ul"},"La Tierra es plana."),Object(l.b)("li",{parentName:"ul"},"Habrá problemas con la repartición de vacunas en Colombia."))))),Object(l.b)(u,{title:"Disputas",mdxType:"PSection"},Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"¿Qué es una disputa?"),Object(l.b)("p",null,"Una disputa es un ",Object(l.b)("strong",{parentName:"p"},"intercambio")," en el que se dirime un ",Object(l.b)("strong",{parentName:"p"},"desacuerdo"),"."),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"La disputa deja de existir cuando se ",Object(l.b)("strong",{parentName:"p"},"resuelve")," (encontraste con ",Object(l.b)("strong",{parentName:"p"},"zanjarla"),")."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Una de las partes ",Object(l.b)("strong",{parentName:"li"},"concede")," y ",Object(l.b)("strong",{parentName:"li"},"acepta")," las razones del interlocutor.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ha sido ",Object(l.b)("strong",{parentName:"li"},"convencida")," de las razones del interlocutor."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Retira")," su tesis frente a las razones del interlocutor.")))),Object(l.b)("p",null,"Lo que está en juego en una disputa es la ",Object(l.b)("strong",{parentName:"p"},"justificación")," de nuestras ",Object(l.b)("strong",{parentName:"p"},"creencias"),"."))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Etapas de la disputa"),Object(l.b)("p",null,"van Eemeren y Grootendorst sostienen que hay ",Object(l.b)("strong",{parentName:"p"},"cuatro etapas")," de resolución."),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Etapa de confrontación"),Object(l.b)("li",{parentName:"ol"},"Etapa de apertura"),Object(l.b)("li",{parentName:"ol"},"Etapa de argumentación"),Object(l.b)("li",{parentName:"ol"},"Etapa de clausura")))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Etapa de confrontación"),Object(l.b)("p",null,"Para que exista una disputa, debe ponerse algún desacuerdo sobre la mesa."),Object(l.b)(j,{mdxType:"Flex"},Object(l.b)(c.c,{mdxType:"Person"}),Object(l.b)("div",{align:"center"},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"A cree que ",Object(l.b)("em",{parentName:"p"},"P"),", B cree que ",Object(l.b)("em",{parentName:"p"},"no-P"),"."),Object(l.b)("p",null,"A cree que ",Object(l.b)("em",{parentName:"p"},"P"),", B duda de que ",Object(l.b)("em",{parentName:"p"},"P"),"."),Object(l.b)("p",null,"A cree que ",Object(l.b)("em",{parentName:"p"},"P"),", B pretende dudar de que ",Object(l.b)("em",{parentName:"p"},"P"),"."))),Object(l.b)(c.c,{mdxType:"Person"})),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"Se requiere que ambas personas estén en ",Object(l.b)("strong",{parentName:"p"},"capacidad")," de expresar sus creencias."))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Etapa de apertura"),Object(l.b)("p",null,"Una vez establecido el desacuerdo, se establecen roles."),Object(l.b)(j,{mdxType:"Flex"},Object(l.b)("div",{style:{textAlign:"center",width:"35%"},className:"fragment"},Object(l.b)(c.c,{mdxType:"Person"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Defensor")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Persona que defiende P"))),Object(l.b)("div",{style:{textAlign:"center",width:"35%"},className:"fragment"},Object(l.b)(c.c,{mdxType:"Person"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Antagonista")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Persona que ofrece razones en contra de P")))),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"Establecidos esos roles, se establecen ",Object(l.b)("strong",{parentName:"p"},"puntos de acuerdo iniciales"),"."))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Etapa de argumentación"),Object(l.b)("p",null,"Generalmente, el ",Object(l.b)("strong",{parentName:"p"},"defensor")," comienza ofreciendo razones ",Object(l.b)("strong",{parentName:"p"},"en favor")," de ",Object(l.b)("em",{parentName:"p"},"P"),"."),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"A continuación, el ",Object(l.b)("strong",{parentName:"p"},"antagonista")," ofrece razones en contra de las razones del defensor.")),Object(l.b)(j,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"100%"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Contra-argumento")),Object(l.b)("p",null,"Argumento cuya conclusión implica la ",Object(l.b)("strong",{parentName:"p"},"negación de una de las premisas"),"."))),Object(l.b)("div",{style:{width:"100%"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Contraejemplo")),Object(l.b)("p",null,"Demostración de la ",Object(l.b)("strong",{parentName:"p"},"invalidez")," del argumento del defensor.")))),Object(l.b)(O,{animate:!0,mdxType:"Tooltip"},Object(l.b)("p",null,"Refutar un argumento no es simplemente ",Object(l.b)("strong",{parentName:"p"},"negar su conclusión"),"."))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Etapa de clausura"),Object(l.b)("p",null,"Finalmente se determinan si las razones del antagonista son ",Object(l.b)("strong",{parentName:"p"},"exitosas"),"."),Object(l.b)(j,{mdxType:"Flex"},Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Si el antagonista es exitoso...")),Object(l.b)("p",null,"...el defensor debe:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Convencerse de las razones"),Object(l.b)("li",{parentName:"ul"},"Retirar su tesis")),Object(l.b)("p",null,"...o puede:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ofrecer nuevas razones"),Object(l.b)("li",{parentName:"ul"},"Regreso a la etapa de argumentación")))),Object(l.b)("div",{style:{width:"45%"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Si el antagonista no es exitoso...")),Object(l.b)("p",null,"...el antagonista debe:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ofrecer nuevas razones")),Object(l.b)("p",null,"...o puede:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conceder la tesis"),Object(l.b)("li",{parentName:"ul"},"Retirar su duda")))))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen"),Object(l.b)(j,{mdxType:"Flex"},Object(l.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Etapa de confrontación")),Object(l.b)("p",null,"Se establece el ",Object(l.b)("strong",{parentName:"p"},"desacuerdo"),"."),Object(l.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(l.b)("li",null,"A cree que P, B cree que no-P"),Object(l.b)("li",null,"A cree que P, B duda de que P."),Object(l.b)("li",null,"A cree que P, B pretende dudar de P.")))),Object(l.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Etapa de apertura")),Object(l.b)("p",null,"Se establecen roles de ",Object(l.b)("strong",{parentName:"p"},"defensor")," y ",Object(l.b)("strong",{parentName:"p"},"antagonista"),"."),Object(l.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(l.b)("li",null,"Defensor: cree que P."),Object(l.b)("li",null,"Antagonista: duda de P.")))),Object(l.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Etapa de argumentación")),Object(l.b)("p",null,"El antagonista ofrece razones en contra de la tesis del defensor."),Object(l.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(l.b)("li",null,"Contra-argumento"),Object(l.b)("li",null,"Contra-ejemplo")))),Object(l.b)("div",{style:{textAlign:"center",width:"19%",fontSize:"80%",border:"1px solid #aaa",padding:"1rem",borderRadius:"5px"}},Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Etapa de clausura")),Object(l.b)("p",null,"¿En favor de quién se dirime el desacuerdo?"),Object(l.b)("ul",{style:{listStyleType:"none",textAlign:"left",paddingLeft:"0.5rem"}},Object(l.b)("li",null,"El antagonista acepta P."),Object(l.b)("li",null,"El defensor retira P."),Object(l.b)("li",null,"Se ofrecen nuevos argumentos."))))))),Object(l.b)(o,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("p",null,"En grupos generados al azar, estructuremos una discusión usando las distintas etapas que hemos tratado."),Object(l.b)(p,{mdxType:"Animate"},Object(l.b)("p",null,"Recuerden identificar correctamente las siguientes partes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Qué ",Object(l.b)("strong",{parentName:"li"},"cree")," cada parte?"),Object(l.b)("li",{parentName:"ul"},"¿Quién ",Object(l.b)("strong",{parentName:"li"},"defiende")," qué?"),Object(l.b)("li",{parentName:"ul"},"¿Qué simplemente se ",Object(l.b)("strong",{parentName:"li"},"afirma")," y qué está en discusión?")),Object(l.b)("p",null,"Escribamos un pequeño guión mostrando la disputa."))))}y.isMDXComponent=!0},ZrE4:function(e,t,a){},ejmO:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-argumentacion-4-arg-actohabla-ii-mdx-7ffb2867cf5de2100559.js.map