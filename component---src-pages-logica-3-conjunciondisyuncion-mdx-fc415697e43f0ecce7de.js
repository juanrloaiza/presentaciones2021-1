(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Bl7J:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a("zLVn"),c=a("q1tI"),b=a.n(c);function r(e){var t=e.children,a=Object(n.a)(e,["children"]),c=b.a.Children.toArray(t);return b.a.createElement("div",Object.assign({className:"two-cols"},a),b.a.createElement("div",{className:"col-left "+a.className},c[0]),b.a.createElement("div",{className:"col-right "+a.className},c[1]))}function l(e){return b.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function i(e){return b.a.createElement("div",{className:"card"},e.title?b.a.createElement("div",{className:"card-title"},e.title):null,b.a.createElement("div",{className:"card-body"},e.children))}},Dujm:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("rePB"),c=a("zLVn"),b=a("q1tI"),r=a.n(b),l=a("7ljp");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var o=function(e){return r.a.cloneElement(e,{className:"fragment"})},s={ul:function(e){var t=e.children;Object(c.a)(e,["children"]);return r.a.createElement("ul",null,r.a.Children.map(t,o))},ol:function(e){var t=e.children;Object(c.a)(e,["children"]);return r.a.createElement("ol",null,r.a.Children.map(t,o))},table:function(e){var t=e.children,a=Object(c.a)(e,["children"]),b=r.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=r.a.Children.map(e.props.children,(function(e){var t=r.a.Children.map(e.props.children,(function(e){return r.a.cloneElement(e,{className:"fragment"})}));return r.a.createElement("tr",{},t)}));return r.a.createElement("tbody",{},t)}return e}));return r.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),b)}};function m(e){var t=e.children,a=Object(c.a)(e,["children"]),n=r.a.Children.map(t,(function(e){return r.a.cloneElement(e,{className:"fragment"})}));return r.a.createElement(l.a,Object.assign({},a,{components:s}),n)}},WLIS:function(e,t,a){"use strict";var n=a("dI71"),c=a("q1tI"),b=a.n(c),r=a("7ljp"),l=(a("ZrE4"),a("ejmO"),a("g8K8")),i=a("nF89"),o=a("t6Qi"),s=a("Dujm"),m=a("dbrF"),p=a("Bl7J"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:l.a,TitleSlide:o.a,Animate:s.a,PSection:i.a,Example:m.b,Tooltip:m.e,Definition:m.a,TwoCols:p.c,Flex:p.b,Card:p.a,Meta:m.c};return b.a.createElement("div",{style:{height:"95vh"}},b.a.createElement("div",{className:"reveal"},b.a.createElement("div",{className:"slides"},b.a.createElement(r.a,{components:e},this.props.children))))},t}(b.a.Component);t.a=d},ZrE4:function(e,t,a){},ejmO:function(e,t,a){},g8K8:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),c=a.n(n);function b(e){return c.a.createElement("section",null,c.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}},nF89:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),c=a.n(n);function b(e){var t=c.a.Children.map(e.children,(function(t,a){return c.a.cloneElement(t,{secTitle:e.title})}));return c.a.createElement("section",null,t)}},t6Qi:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),c=a.n(n);function b(e){var t=(new Date).getFullYear();return c.a.createElement("section",{className:"title"},c.a.createElement("h3",null,e.clase),c.a.createElement("h1",null," ",e.title),c.a.createElement("div",{className:"author"},"Juan R. Loaiza"),c.a.createElement("small",null,"Escuela de Ciencias Humanas ",c.a.createElement("br",null),"Universidad del Rosario ",c.a.createElement("br",null),t))}},ybGP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return N}));var n=a("zLVn"),c=(a("q1tI"),a("7ljp")),b=a("WLIS"),r=(a("sOF4"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},i=l("TitleSlide"),o=l("PSection"),s=l("Slide"),m=l("Animate"),p=l("Example"),d=l("Flex"),j=l("Definition"),u=l("Tooltip"),O={_frontmatter:r},g=b.a;function N(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(g,Object.assign({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i,{title:"Conjunciones y disyunciones",clase:"Lógica ECH",mdxType:"TitleSlide"}),Object(c.b)(o,{title:"Repaso",mdxType:"PSection"},Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conceptos clave"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Una proposición es aquello que podemos decir es ",Object(c.b)("strong",{parentName:"li"},"verdadero")," o ",Object(c.b)("strong",{parentName:"li"},"falso"),"."),Object(c.b)("li",{parentName:"ul"},"Varias oraciones pueden expresar la ",Object(c.b)("strong",{parentName:"li"},"misma")," proposición.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'"En Barranquilla hace mucho calor."'),Object(c.b)("li",{parentName:"ul"},'"Hace mucho calor en Barranquilla."'),Object(c.b)("li",{parentName:"ul"},'"It\'s very hot in Barranquilla."'))),Object(c.b)("li",{parentName:"ul"},"La misma oración puede expresar proposiciones ",Object(c.b)("strong",{parentName:"li"},"diferentes"),".",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'"Me gusta jugar ajedrez."')))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conceptos clave"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expresamos proposiciones atómicas distinguiendo ",Object(c.b)("strong",{parentName:"li"},"sujetos")," y ",Object(c.b)("strong",{parentName:"li"},"predicados"),".",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Constantes de sujeto: Letras minúsculas"),Object(c.b)("li",{parentName:"ul"},"Predicados: Letras mayúsculas"))),Object(c.b)("li",{parentName:"ul"},"Podemos expresar negaciones usando el símbolo '~'")))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejercicios de repaso"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Oración"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Formalización"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),'"Duque es presidente."'),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Pd")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),'"Duque no es futbolista."'),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Fd")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),'"Duque querió a Carlos Holmes."'),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Qdc")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),'"Carlos Holmes querió a Duque."'),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Qcd")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),'"Duque no querió a Santos."'),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Qds"))))))),Object(c.b)(o,{title:"Introducción",mdxType:"PSection"},Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Proposiciones atómicas"),Object(c.b)("p",null,"Recordemos que la forma más básica de una proposición es decir que un ",Object(c.b)("strong",{parentName:"p"},"sujeto")," tiene un ",Object(c.b)("strong",{parentName:"p"},"predicado"),"."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Juan juega ajedrez."),Object(c.b)("li",{parentName:"ul"},"Marcela juega ajedrez.")),Object(c.b)("p",null,"Estas proposiciones se conocen como ",Object(c.b)("strong",{parentName:"p"},"proposiciones atómicas")," (o ",Object(c.b)("strong",{parentName:"p"},"simples"),"), pues no pueden dividirse en ",Object(c.b)("strong",{parentName:"p"},"otras proposiciones"),"."),Object(c.b)("p",null,"Hay sin embargo proposiciones que sí pueden dividirse.")),Object(c.b)("div",{style:{display:"flex",flexDirection:"column"}},Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Juan juega ajedrez ",Object(c.b)("strong",{parentName:"p"},"y")," Marcela también.")),Object(c.b)("div",{style:{display:"flex",justifyContent:"space-around",color:"#aa50ad"}},Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Juan juega ajedrez."),Object(c.b)("p",null,"Marcela juega ajedrez."))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conectores lógicos"),Object(c.b)("p",null,"Podemos expresar ",Object(c.b)("strong",{parentName:"p"},"proposiciones complejas")," ",Object(c.b)("em",{parentName:"p"},"conectando")," varias proposiciones."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Para conectar proposiciones, podemos usar un tipo de operador: los ",Object(c.b)("strong",{parentName:"p"},"conectores lógicos"),"."),Object(c.b)("p",null,"Los conectores lógicos son operadores que ",Object(c.b)("em",{parentName:"p"},"conectan")," ",Object(c.b)("strong",{parentName:"p"},"dos")," proposiciones.")),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Juan juega ajedrez ",Object(c.b)("strong",{parentName:"p"},"y")," Marcela juega ajedrez.")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"En este curso usaremos cuatro conectores lógicos, y hoy introduciremos dos.")))),Object(c.b)(o,{title:"Conjunciones",mdxType:"PSection"},Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conjunción"),Object(c.b)(p,{mdxType:"Example"},"Juan juega ajedrez y Marcela también."),Object(c.b)("p",null,"En el español, la partícula ",Object(c.b)("strong",{parentName:"p"},"'y'")," a menudo expresa que dos proposiciones son verdaderas a la vez."),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)(d,{mdxType:"Flex"},"Juan juega ajedrez.",Object(c.b)("p",null,"Marcela juega ajedrez."))),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Estas proposiciones complejas se conocen como ",Object(c.b)("strong",{parentName:"p"},"conjunciones"),".")),Object(c.b)(j,{word:"P & Q",animate:!0,mdxType:"Definition"},Object(c.b)("p",null,"P es verdadera y Q también es verdadera.")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Para las conjunciones, podemos usar el símbolo '&' o el símbolo '∧'."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Formalización"),Object(c.b)(p,{mdxType:"Example"}," Juan juega ajedrez y Marcela también."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Para formalizar esta proposición, formalicemos primero las proposiciones que componen a esta conjunción.")),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"[Juan juega ajedrez]"," ",Object(c.b)("strong",{parentName:"p"},"y")," ","[Marcela juega ajedrez]","."),Object(c.b)("p",null,"[Aj]"," ",Object(c.b)("strong",{parentName:"p"},"y")," ","[Am]")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"A continuación, podemos formalizar esta conjunción uniendo ambas proposiciones con el símbolo '&'.")),Object(c.b)(p,{animate:!0,mdxType:"Example"},"Aj & Am"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Esto expresa que ambas proposiciones son verdaderas."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Agrupando proposiciones"),Object(c.b)("p",null,"¿Qué pasa cuando tenemos más de dos proposiciones?"),Object(c.b)(p,{animate:!0,mdxType:"Example"},"Juan, Marcela y Paula juegan ajedrez."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Un conector lógico siempre conecta ",Object(c.b)("strong",{parentName:"p"},"dos")," proposiciones. En ese sentido, la siguiente formalización sería incorrecta:")),Object(c.b)(p,{animate:!0,mdxType:"Example"},"Aj & Am & Ap")),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Agrupando proposiciones"),Object(c.b)(p,{mdxType:"Example"},"Aj & Am & Ap"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Para formalizar esta proposición correctamente, debemos formar grupos de dos proposiciones usando paréntesis.")),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)(d,{mdxType:"Flex"},Object(c.b)("p",null,"(Aj & Am) & Ap"),Object(c.b)("p",null,"Aj & (Am & Ap)"))),Object(c.b)(u,{animate:!0,mdxType:"Tooltip"},"No siempre dará lo mismo dónde pongamos los paréntesis (más adelante...)")),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplos"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Oración"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Proposición"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Germán y Carlos son simpáticos."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Sg & Sc")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Germán, Carlos y Fabio son simpáticos."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"(Sg & Sc) & Sf")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Germán es simpático y Carlos no."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Sg & ~Sc")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Germán y Fabio le caen bien a Carlos"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Cgc & Cfc")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Germán le cae bien a Fabio y Carlos no."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Cgf & ~Ccf")))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Otras formas de la conjunción"),Object(c.b)("p",null,"Hemos dicho que una conjunción es una proposición expresa que dos proposiciones son verdaderas."),Object(c.b)(p,{animate:!0,mdxType:"Example"},'"Germán es simpático pero Carlos no."'),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Esta oración usa la partícula 'pero' y expresa que ambas proposiciones son verdaderas."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'"Aunque Germán es simpático, Carlos no."'),Object(c.b)("li",{parentName:"ul"},'"Así como Germán, Carlos es simpático."'))),Object(c.b)(u,{animate:!0,mdxType:"Tooltip"},"La partícula 'y' no es la única que expresa conjunciones (ni lo hace en todos los casos).")),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Verdad y falsedad de la conjunción"),Object(c.b)("p",null,"Si una conjunción es una proposición expresa que dos proposiciones son verdaderas, ¿cuándo entonces decimos que una conjunción es falsa?"),Object(c.b)(p,{mdxType:"Example"},"Germán y Carlos son simpáticos."),Object(c.b)("table",{className:"truth-table"},Object(c.b)("tbody",null,Object(c.b)("tr",{className:"fragment","data-fragment-index":"2"},Object(c.b)("td",{className:""},"Sg"),Object(c.b)("td",{className:""}," &"),Object(c.b)("td",{className:""}," Sc ")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"}," ","V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"}," ","V"," ")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"6"}," ","F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"5"}," ","F"," ")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"7"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"8"}," ","F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"7"}," ","V"," ")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"9"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"10"}," ","F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"9"}," ","F"))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conjunciones y negaciones"),Object(c.b)("p",null,"Recordemos que podemos expresar la negación de una proposición usando el símbolo '~'."),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Gabriela no estudia sociología.",Object(c.b)("br",null),"\n~Sg")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"¿Qué pasa entonces si queremos expresar la negación de una conjunción?")),Object(c.b)(p,{animate:!0,mdxType:"Example"},"Gabriela no estudia sociología y antropología.")),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conjunciones y negaciones"),Object(c.b)(p,{mdxType:"Example"},"Gabriela no estudia sociología y antropología."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Como la vez pasada, reescribamos esta oración:")),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"No es verdad que")," Gabriela estudie sociología y antropología.")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Dado que podemos usar '~' para expresar 'No es verdad que...', podemos entonces formalizar así:")),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"~(Gabriela estudia sociología y antropología.)",Object(c.b)("br",null),"\n~(Sg & Ag)"))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Conjunciones y negaciones"),Object(c.b)("p",null,"Es importante notar que ",Object(c.b)("strong",{parentName:"p"},"~(Sg & Ag)")," no es lo mismo que ",Object(c.b)("strong",{parentName:"p"},"~Sg & ~Ag"),"."),Object(c.b)(d,{align:"center",mdxType:"Flex"},Object(c.b)("div",{className:"fragment"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"~(Sg & Ag)")),Object(c.b)("p",null,"Gabriela no estudia ambas carreras.")),Object(c.b)("div",{className:"fragment",style:{width:"50%"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"~Sg & ~Ag")),Object(c.b)("p",null,"Gabriela no estudia ninguna de las dos carreras."))),Object(c.b)(u,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Es distinta la ",Object(c.b)("strong",{parentName:"p"},"negación de una conjunción")," que la ",Object(c.b)("strong",{parentName:"p"},"conjunción de dos negaciones"),"."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Operador lógico principal"),Object(c.b)("p",null,"Cuando tenemos varios operadores lógicos (e.g., conjunciones y negaciones), habrá siempre un operador que sea prioridad."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)(d,{mdxType:"Flex"},Object(c.b)("div",null,Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"~"),"(Sg & Ag)")),Object(c.b)("div",null,Object(c.b)("p",null,"~Sg ",Object(c.b)("strong",{parentName:"p"},"&")," ~Ag")))),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Este operador se conoce como el ",Object(c.b)("strong",{parentName:"p"},"operador lógico principal")," y es el que le da sentido a toda la oración."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplos"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Oración"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Formalización"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Operador lógico principal"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gabriela no estudia ni antroplogía ni sociología."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Ag & ~Sg"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"&")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gabriela no estudia tanto antropología como sociología."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~(Ag & Sg)"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Bernal no tiene perro ni gato."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Pb & ~Gb"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"&")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Bernal no tiene tanto perro como gato."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~(Pb & Gb)"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Bernal tiene perro, pero no gato."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Pb & ~Gb"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"&"))))))),Object(c.b)(o,{title:"Disyunciones",mdxType:"PSection"},Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Disyunciones"),Object(c.b)("p",null,"Otra forma en la que podemos conectar proposiciones es afirmando que al menos una es verdadera (pero no necesariamente las dos)."),Object(c.b)(p,{animate:!0,mdxType:"Example"},'"Gómez es ingeniera o matemática."'),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Esta proposición dice que al menos una de las dos proposiciones es verdadera:")),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)(d,{mdxType:"Flex"},Object(c.b)("p",null,"Gómez es ingeniera."),Object(c.b)("p",null,"Gómez es matemática."))),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Sin embargo, la proposición no nos dice cuál de las dos proposiciones es verdadera."),Object(c.b)("p",null,"Este tipo de proposición se conoce como una ",Object(c.b)("strong",{parentName:"p"},"disyunción"),"."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Formalización"),Object(c.b)("p",null,"Para expresar una disyunción, podemos usar el símbolo 'v'."),Object(c.b)(p,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"Gómez es ingeniera o matemática."),Object(c.b)("p",null,"Ig v Mg")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"Es importante notar que en lógica, esta disyunción es ",Object(c.b)("strong",{parentName:"p"},"incluyente"),".")),Object(c.b)(d,{mdxType:"Flex"},Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Incluyente"),Object(c.b)("br",null),"\nAl menos una proposición es verdadera."),Object(c.b)("div",{style:{width:"50%"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Excluyente"),Object(c.b)("br",null),"\nAl menos una proposición es verdadera ",Object(c.b)("strong",{parentName:"p"},"pero no las dos"),"."))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Disyunciones y negaciones"),Object(c.b)("p",null,"¿Qué pasa cuando negamos una disyunción?"),Object(c.b)("p",null,"Si una disyunción dice que al menos una de las dos proposiciones es verdadera, su negación expresa que ninguna de las proposiciones es verdadera."),Object(c.b)("table",{className:"truth-table"},Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"1"},"Ig"),Object(c.b)("td",{className:"fragment","data-fragment-index":"1"},"v"),Object(c.b)("td",{className:"fragment","data-fragment-index":"1"},"Mg"," ")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"6"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"5"},"F")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"7"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"8"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"7"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"9"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"10"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"9"},"F")))),Object(c.b)(u,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Nuevamente, es distinto una ",Object(c.b)("strong",{parentName:"p"},"negación de una disyunción")," que una ",Object(c.b)("strong",{parentName:"p"},"disyunción de negaciones"),"."))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplos"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Oración"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Formalización"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gómez estudia matemáticas o artes."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Mg v Ag")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gómez no estudia matemáticas o artes."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~(Mg v Ag)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gómez no estudia matemáticas o no estudia artes."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Mg v ~Ag")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gómez no estudia matemáticas o estudiar artes."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"~Mg v Ag")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gómez estudia matemáticas o estudia artes y filosofía."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Mg v (Ag & Fg)")))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Disyunciones y conjunciones"),Object(c.b)("p",null,"Cuando usamos conjunciones y disyunciones, es central que nos fijemos en cuál de los dos operadores es el operador lógico principal."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'"María quiere una camioneta o una moto y un carro."'))),Object(c.b)(d,{mdxType:"Flex"},Object(c.b)("div",{className:"fragment"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Cm v (Mm & Rm)")),Object(c.b)("p",null,"Camioneta."),Object(c.b)("p",null,"Moto y carro.")),Object(c.b)("div",{className:"fragment"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"(Cm v Mm) & Rm")),Object(c.b)("p",null,"Camioneta y carro"),Object(c.b)("p",null,"Moto y carro"))))),Object(c.b)(s,{mdxType:"Slide"},Object(c.b)("h1",null,"Resumen"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Una ",Object(c.b)("strong",{parentName:"li"},"proposición compleja")," es una proposición compuesta de varias proposiciones."),Object(c.b)("li",{parentName:"ul"},"Para expresar proposiciones complejas, podemos usar ",Object(c.b)("strong",{parentName:"li"},"conectores loǵicos"),"."),Object(c.b)("li",{parentName:"ul"},"El operador de ",Object(c.b)("strong",{parentName:"li"},"conjunción")," ('&') dice que dos proposiciones son verdaderas."),Object(c.b)("li",{parentName:"ul"},"El operador de ",Object(c.b)("strong",{parentName:"li"},"disyunción")," ('v') dice que al menos una proposición es verdadera."),Object(c.b)("li",{parentName:"ul"},"Dependiendo de cómo organicemos la proposición, habrá distintos ",Object(c.b)("strong",{parentName:"li"},"operadores lógicos principales"),"."),Object(c.b)("li",{parentName:"ul"},"No es lo mismo la negación de una conjunción/disyunción que la conjunción/disyunción de negaciones.")))))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-logica-3-conjunciondisyuncion-mdx-fc415697e43f0ecce7de.js.map