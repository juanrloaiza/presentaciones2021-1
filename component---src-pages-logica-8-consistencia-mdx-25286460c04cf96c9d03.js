(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{WLIS:function(e,t,a){"use strict";var n=a("dI71"),c=a("q1tI"),b=a.n(c),i=a("7ljp");a("ZrE4"),a("ejmO");function s(e){return b.a.createElement("section",null,b.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function r(e){var t=b.a.Children.map(e.children,(function(t,a){return b.a.cloneElement(t,{secTitle:e.title})}));return b.a.createElement("section",null,t)}function l(e){var t=(new Date).getFullYear();return b.a.createElement("section",{className:"title"},b.a.createElement("h3",null,e.clase),b.a.createElement("h1",null," ",e.title),b.a.createElement("div",{className:"author"},"Juan R. Loaiza"),b.a.createElement("small",null,"Escuela de Ciencias Humanas ",b.a.createElement("br",null),"Universidad del Rosario ",b.a.createElement("br",null),t))}var d=a("rePB"),m=a("zLVn");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var o=function(e){return b.a.cloneElement(e,{className:"fragment"})},u={ul:function(e){var t=e.children;Object(m.a)(e,["children"]);return b.a.createElement("ul",null,b.a.Children.map(t,o))},ol:function(e){var t=e.children;Object(m.a)(e,["children"]);return b.a.createElement("ol",null,b.a.Children.map(t,o))},table:function(e){var t=e.children,a=Object(m.a)(e,["children"]),n=b.a.Children.map(t,(function(e){if("tbody"===e.props.originalType){var t=b.a.Children.map(e.props.children,(function(e){var t=b.a.Children.map(e.props.children,(function(e){return b.a.cloneElement(e,{className:"fragment"})}));return b.a.createElement("tr",{},t)}));return b.a.createElement("tbody",{},t)}return e}));return b.a.createElement("table",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a),n)}};function O(e){var t=e.children,a=Object(m.a)(e,["children"]),n=b.a.Children.map(t,(function(e){return b.a.cloneElement(e,{className:"fragment"})}));return b.a.createElement(i.a,Object.assign({},a,{components:u}),n)}var g=a("dbrF");function N(e){var t=e.children,a=Object(m.a)(e,["children"]),n=b.a.Children.toArray(t);return b.a.createElement("div",Object.assign({className:"two-cols"},a),b.a.createElement("div",{className:"col-left "+a.className},n[0]),b.a.createElement("div",{className:"col-right "+a.className},n[1]))}function M(e){return b.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function p(e){return b.a.createElement("div",{className:"card"},e.title?b.a.createElement("div",{className:"card-title"},e.title):null,b.a.createElement("div",{className:"card-body"},e.children))}var L=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e={Slide:s,TitleSlide:l,Animate:O,PSection:r,Example:g.b,Tooltip:g.e,Definition:g.a,TwoCols:N,Flex:M,Card:p,Meta:g.c};return b.a.createElement("div",{style:{height:"95vh"}},b.a.createElement("div",{className:"reveal"},b.a.createElement("div",{className:"slides"},b.a.createElement(i.a,{components:e},this.props.children))))},t}(b.a.Component);t.a=L},YxKu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return M}));var n=a("zLVn"),c=(a("q1tI"),a("7ljp")),b=a("WLIS"),i=(a("sOF4"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},r=s("TitleSlide"),l=s("Slide"),d=s("Definition"),m=s("Animate"),j=s("Meta"),o=s("PSection"),u=s("Example"),O=s("Tooltip"),g={_frontmatter:i},N=b.a;function M(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(N,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(r,{title:"Consistencia",clase:"Lógica ECH",mdxType:"TitleSlide"}),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"En el capítulo anterior..."),Object(c.b)("p",null,'Podemos estudiar cuándo dos proposiciones "dicen lo mismo", i.e., son ',Object(c.b)("strong",{parentName:"p"},"equivalentes"),"."),Object(c.b)(d,{animate:!0,word:"Equivalencia",mdxType:"Definition"},Object(c.b)("p",null,"Dos proposiciones son equivalentes sii tienen las ",Object(c.b)("strong",{parentName:"p"},"mismas condiciones de verdad"),".")),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)(j,{mdxType:"Meta"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si ",Object(c.b)("em",{parentName:"td"},"P")," y ",Object(c.b)("em",{parentName:"td"},"Q")," son equivalentes, ",Object(c.b)("em",{parentName:"td"},"P")," → ",Object(c.b)("em",{parentName:"td"},"Q")," es una tautología."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si ",Object(c.b)("em",{parentName:"td"},"P")," y ",Object(c.b)("em",{parentName:"td"},"Q")," son equivalentes, ",Object(c.b)("em",{parentName:"td"},"P")," v ",Object(c.b)("em",{parentName:"td"},"Q")," es una tautología."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si ",Object(c.b)("em",{parentName:"td"},"P")," es una contradicción y ",Object(c.b)("em",{parentName:"td"},"Q")," es una tautología, ",Object(c.b)("em",{parentName:"td"},"P")," es equivalente a ~",Object(c.b)("em",{parentName:"td"},"Q")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero"))))))),Object(c.b)(o,{title:"Consistencia",mdxType:"PSection"},Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"Seamos coherentes"),Object(c.b)("p",null,"En la vida diaria, criticamos a las personas que son ",Object(c.b)("strong",{parentName:"p"},"incoherentes"),"."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},'"Todos los estudiantes deben hacer el examen. Sin embargo, aunque Carlos es estudiante, él no tiene que hacer el examen."')),Object(c.b)("p",null,"Parece que alguien que dice esto se está ",Object(c.b)("strong",{parentName:"p"},"contradiciendo"),"."),Object(c.b)("p",null,"El concepto lógico que captura esta idea es el de la ",Object(c.b)("strong",{parentName:"p"},"consistencia lógica"),"."))),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"Consistencia"),Object(c.b)("p",null,"La ",Object(c.b)("strong",{parentName:"p"},"consistencia lógica")," es una propiedad que aplica sobre ",Object(c.b)("strong",{parentName:"p"},"conjuntos de proposiciones"),"."),Object(c.b)(d,{animate:!0,word:"Consistencia",mdxType:"Definition"},Object(c.b)(j,{mdxType:"Meta"},Object(c.b)("p",null,"Un conjunto de proposiciones {",Object(c.b)("em",{parentName:"p"},"P"),", ",Object(c.b)("em",{parentName:"p"},"Q"),", ... ",Object(c.b)("em",{parentName:"p"},"R"),"} es consistente sii es ",Object(c.b)("strong",{parentName:"p"},"posible")," que todas sus proposiciones sean verdaderas al tiempo."))),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"En el caso anterior, tenemos tres proposiciones que no pueden ser verdaderas a la vez:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Todos los estudiantes deben hacer el examen."),Object(c.b)("li",{parentName:"ul"},"Carlos es estudiante"),Object(c.b)("li",{parentName:"ul"},"Carlos no tiene que hacer el examen.")))),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"Con tablas de verdad"),Object(c.b)("p",null,"En una tabla de verdad, podemos evaluar si un conjunto de proposiciones es consistente si ",Object(c.b)("strong",{parentName:"p"},"existe al menos una situación")," en la que todas las proposiciones sean ",Object(c.b)("strong",{parentName:"p"},"verdaderas"),"."),Object(c.b)("div",{className:"fragment","data-fragment-index":"1"},Object(c.b)(u,{mdxType:"Example"},Object(c.b)("p",null,"{"," Si Carlos es estudiante, tiene que hacer el examen;",Object(c.b)("br",null)," Carlos es estudiante;",Object(c.b)("br",null)," Carlos no tiene que hacer el examen ","}"))),Object(c.b)("table",{className:"truth-table"},Object(c.b)("thead",null,Object(c.b)("tr",{className:"fragment","data-fragment-index":"2"},Object(c.b)("th",null,"Ec"),Object(c.b)("th",null,"Hc"),Object(c.b)("th",{className:"divides"},"Ec"),Object(c.b)("th",null,"→"),Object(c.b)("th",null,"Hc"),Object(c.b)("th",{className:"divides"},"Ec"),Object(c.b)("th",{className:"divides"},"~"),Object(c.b)("th",null,"Hc"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"fragment divides ","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment main","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"6"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"fragment divides ","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment main","data-fragment-index":"5"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"6"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"F")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"fragment divides ","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment  main","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"6"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"fragment divides ","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment main","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment divides main","data-fragment-index":"6"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"F"))))),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"Ejemplo"),Object(c.b)(u,{mdxType:"Example"},Object(c.b)("p",null,"{","\nHarry Potter vive sólo si Voldemort muere. ",Object(c.b)("br",null),"\nVoldemort muere. ",Object(c.b)("br",null),"\nHarry Potter muere.\n","}")),Object(c.b)("table",{className:"truth-table"},Object(c.b)("thead",null,Object(c.b)("tr",{className:"fragment","data-fragment-index":"1"},Object(c.b)("th",null,"Vh"),Object(c.b)("th",null,"Vv"),Object(c.b)("th",{className:"divides"},"Vh"),Object(c.b)("th",null,"→"),Object(c.b)("th",null,"~"),Object(c.b)("th",null,"Vv"),Object(c.b)("th",{className:"divides"},"~"),Object(c.b)("th",null,"Vv"),Object(c.b)("th",{className:"divides"},"~"),Object(c.b)("th",null,"Vh"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"V"),Object(c.b)("td",{className:"divides fragment ","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"main fragment","data-fragment-index":"5"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"6"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"7"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"F"),Object(c.b)("td",{className:"divides fragment ","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"main fragment","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"6"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"7"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"V"),Object(c.b)("td",{className:"divides fragment ","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"main fragment","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"6"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"V"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"7"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F")),Object(c.b)("tr",null,Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"F"),Object(c.b)("td",{className:"fragment","data-fragment-index":"2"},"F"),Object(c.b)("td",{className:"divides fragment ","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"main fragment","data-fragment-index":"5"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"4"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"6"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F"),Object(c.b)("td",{className:"divides fragment main","data-fragment-index":"7"},"V"),Object(c.b)("td",{className:"fragment","data-fragment-index":"3"},"F")))))),Object(c.b)(o,{title:"Notas importantes",mdxType:"PSection"},Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"¿Y si las proposiciones no son verdaderas?"),Object(c.b)("p",null,"La definición de consistencia nos dice que debe ser ",Object(c.b)("strong",{parentName:"p"},"posible")," que todas las proposiciones sean verdaderas al tiempo."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("p",null,"¿Qué pasa cuando las proposiciones ",Object(c.b)("em",{parentName:"p"},"no son")," verdaderas de hecho?"),Object(c.b)(u,{animate:!0,mdxType:"Example"},Object(c.b)("p",null,"{","\nBogotá tiene 100 habitantes; ",Object(c.b)("br",null),"\nCali tiene 1000 habitantes; ",Object(c.b)("br",null),"\nMedellín tiene 10'000,000 de habitantes\n","}")),Object(c.b)("p",null,"Este conjunto es de todos modos ",Object(c.b)("strong",{parentName:"p"},"consistente"),", pues ",Object(c.b)("strong",{parentName:"p"},"es posible")," que estas tres proposiciones sean verdaderas (aunque en el mundo real no lo son).")),Object(c.b)(O,{animate:!0,mdxType:"Tooltip"},Object(c.b)("p",null,"Es importante saber diferenciar que algo ",Object(c.b)("strong",{parentName:"p"},"sea verdadero/falso")," a que ",Object(c.b)("strong",{parentName:"p"},"pueda ser verdadero/falso"),"."))),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"¿Qué es un conjunto?"),Object(c.b)("p",null,"Es importante recordar que la consistencia es una propiedad de ",Object(c.b)("strong",{parentName:"p"},"conjuntos de proposiciones"),"."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)(j,{mdxType:"Meta"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Un conjunto de proposiciones se escribe con ","{","...","}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Un conjunto de proposiciones puede tener una o más proposiciones:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"{",Object(c.b)("em",{parentName:"li"},"P"),"}"),Object(c.b)("li",{parentName:"ul"},"{",Object(c.b)("em",{parentName:"li"},"P"),", ",Object(c.b)("em",{parentName:"li"},"Q"),"}"),Object(c.b)("li",{parentName:"ul"},"{",Object(c.b)("em",{parentName:"li"},"P"),", ",Object(c.b)("em",{parentName:"li"},"Q"),", ",Object(c.b)("em",{parentName:"li"},"R"),"}"))))))),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"Distinguiendo propiedades"),Object(c.b)("p",null,"No decimos de ",Object(c.b)("strong",{parentName:"p"},"proposiciones individuales")," que son consistentes o inconsistentes."),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)("table",null,Object(c.b)("tbody",null,Object(c.b)("tr",{style:{borderBottom:"1px solid black"}},Object(c.b)("td",{style:{textAlign:"right",width:"50%"}},"Proposiciones individuales"),Object(c.b)("td",null,"Tautologías ",Object(c.b)("br",null)," Contradicciones ",Object(c.b)("br",null)," Contingencias")),Object(c.b)("tr",{style:{borderBottom:"1px solid black"}},Object(c.b)("td",{style:{textAlign:"right",width:"50%"}},"Dos proposiciones"),Object(c.b)("td",null,"Equivalentes ",Object(c.b)("br",null)," No equivalentes")),Object(c.b)("tr",null,Object(c.b)("td",{style:{textAlign:"right",width:"50%"}},"Conjuntos de proposiciones"),Object(c.b)("td",null,"Consistente ",Object(c.b)("br",null)," Inconsistente"))))))),Object(c.b)(l,{mdxType:"Slide"},Object(c.b)("h1",null,"Curiosidades lógicas"),Object(c.b)("p",null,"¿Verdadero o falso?"),Object(c.b)(m,{mdxType:"Animate"},Object(c.b)(j,{mdxType:"Meta"},Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null})))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si {",Object(c.b)("em",{parentName:"td"},"P"),", ",Object(c.b)("em",{parentName:"td"},"Q"),"} es consistente, ",Object(c.b)("em",{parentName:"td"},"P")," no es una contradicción."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si {",Object(c.b)("em",{parentName:"td"},"P"),"} es inconsistente, ",Object(c.b)("em",{parentName:"td"},"P")," es una contradicción."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si ",Object(c.b)("em",{parentName:"td"},"P")," es una tautología, {",Object(c.b)("em",{parentName:"td"},"P"),", ",Object(c.b)("em",{parentName:"td"},"Q"),"} es consistente."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Falso")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si ",Object(c.b)("em",{parentName:"td"},"P")," es una contingencia, {",Object(c.b)("em",{parentName:"td"},"P"),"} es consistente."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Si ",Object(c.b)("em",{parentName:"td"},"P")," es una contingencia, {",Object(c.b)("em",{parentName:"td"},"P")," v ",Object(c.b)("em",{parentName:"td"},"Q"),", ",Object(c.b)("em",{parentName:"td"},"P"),"} es consistente."),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Verdadero"))))))))}M.isMDXComponent=!0},ZrE4:function(e,t,a){},dbrF:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return l}));var n=a("q1tI"),c=a.n(n);function b(e){var t="example";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function i(e){var t="meta";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),e.children)}function s(e){var t="tooltip";t=e.animate?t+" fragment":t;return c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("img",{alt:"lightbulb",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC4zNTMgMTAwLjM1MjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwMC4zNTMgMTAwLjM1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTY5LjI5NCwxMS40NDJjLTYuNzg4LTUuNTk0LTE1LjcyNC03LjgyLTI0LjUxMi02LjEwOUMzMi45NTEsNy42MzYsMjMuNDQ5LDE3LjYyMywyMS42NzUsMjkuNjIgIGMtMS40NDcsOS43OSwyLjAzMSwxOS41NjcsOS4zMDQsMjYuMTU1YzMuMjc3LDIuOTY4LDUuMjU0LDcuMjQzLDUuNTY4LDEyLjAzOWMwLjAwNiwwLjA4NywwLjAyMywwLjE3MSwwLjA0MiwwLjI1NHYxNS4wMzkgIGMwLDAuODI4LDAuNjcxLDEuNSwxLjUsMS41aDEuNDk1YzAuNjA5LDQuMzU5LDMuODEzLDcuNjk3LDcuNjcyLDcuNjk3aDYuODFjMy44NTksMCw3LjA2Mi0zLjMzOCw3LjY3MS03LjY5N2gxLjQ5NSAgYzAuODI4LDAsMS41LTAuNjcyLDEuNS0xLjVWNjcuODI4YzAtMC4wMDMsMC4wMDEtMC4wMDYsMC4wMDEtMC4wMWMwLTQuNDYyLDIuMDI2LTguNzcxLDUuNzA2LTEyLjEzMyAgYzYuMDYyLTUuNTM4LDkuNTM4LTEzLjQxNSw5LjUzOC0yMS42MUM3OS45NzgsMjUuMjg3LDc2LjA4NCwxNy4wMzcsNjkuMjk0LDExLjQ0MnogTTQ1LjM1NywzOS45MWgtMi4zMDUgIGMtMS4yNzEsMC0yLjMwNS0xLjAzNC0yLjMwNS0yLjMwNXMxLjAzNC0yLjMwNSwyLjMwNS0yLjMwNXMyLjMwNSwxLjAzNCwyLjMwNSwyLjMwNVYzOS45MXogTTU1Ljk2NiwzNy42MDUgIGMwLTEuMjcxLDEuMDM0LTIuMzA1LDIuMzA2LTIuMzA1YzEuMjcxLDAsMi4zMDUsMS4wMzQsMi4zMDUsMi4zMDVzLTEuMDM0LDIuMzA1LTIuMzA1LDIuMzA1aC0yLjMwM0w1NS45NjYsMzcuNjA1eiBNNTUuMDYzLDY5LjIxMSAgaDYuNjd2MTIuMzk2SDYwLjM2Yy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDFzLTAuMDA2LDAuMDAxLTAuMDEsMC4wMDFINDAuOTgyYy0wLjAwMywwLTAuMDA2LTAuMDAxLTAuMDEtMC4wMDEgIHMtMC4wMDYsMC4wMDEtMC4wMSwwLjAwMUgzOS41OVY2OS4yMTFoMTQuMzY2IE00OC4zNTcsNjYuMjExVjQyLjkxaDQuNjE3bDAuMDM0LDIzLjMwMUg0OC4zNTd6IE01NC4wNjYsODkuMzA0aC02LjgxICBjLTIuMjM4LDAtNC4xMTctMi4wMDQtNC42MzctNC42OTdoMTYuMDgzQzU4LjE4Myw4Ny4zLDU2LjMwNCw4OS4zMDQsNTQuMDY2LDg5LjMwNHogTTY4LjQxNiw1My40NzEgIGMtMy44NzIsMy41MzctNi4xNjQsOC4wMTMtNi41OTMsMTIuNzRoLTUuODE2TDU1Ljk3NCw0Mi45MWgyLjI5OGMyLjkyNSwwLDUuMzA1LTIuMzgsNS4zMDUtNS4zMDVjMC0yLjkyNS0yLjM4LTUuMzA1LTUuMzA1LTUuMzA1ICBjLTIuOTI2LDAtNS4zMDYsMi4zOC01LjMwNiw1LjMwN2wwLjAwMywyLjMwM2gtNC42MTJ2LTIuMzA1YzAtMi45MjUtMi4zOC01LjMwNS01LjMwNS01LjMwNWMtMi45MjUsMC01LjMwNSwyLjM4LTUuMzA1LDUuMzA1ICBjMCwyLjkyNSwyLjM4LDUuMzA1LDUuMzA1LDUuMzA1aDIuMzA1djIzLjMwMWgtNS45NzJjLTAuNjM2LTUuMDA1LTIuODY0LTkuNDY1LTYuMzkzLTEyLjY2Yy02LjUyOC01LjkxNC05LjY1LTE0LjY5Ni04LjM1LTIzLjQ5MyAgYzEuNTkxLTEwLjc2LDEwLjEwOC0xOS43MTYsMjAuNzEyLTIxLjc4MWM3LjkwOC0xLjUzOCwxNS45MzgsMC40NTgsMjIuMDMsNS40OGM2LjA5Niw1LjAyMyw5LjU5MiwxMi40MjksOS41OTIsMjAuMzE5ICBDNzYuOTc4LDQxLjQzLDczLjg1Nyw0OC41LDY4LjQxNiw1My40NzF6Ii8+PC9zdmc+"}),c.a.createElement("div",null,e.notitle?"":c.a.createElement("div",{className:"tooltip-title"},"¡Ojo!"),e.children))}function r(e){var t="definition";return t=e.animate?t+" fragment":t,c.a.createElement("div",Object.assign({},e,{className:t}),c.a.createElement("span",{className:"definitionWord"},e.word,":")," ",e.children)}function l(){return c.a.createElement("img",{style:{maxHeight:"250px",maxWidth:"100px"},alt:"person",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4xIgogICBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjt0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247aW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsiCiAgIHZpZXdCb3g9IjAgMCA4NDcgMTA1OC43NSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIGZpbGwtcnVsZT0iZXZlbm9kZCIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBpZD0ic3ZnMTQiPjxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTE4Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPjxkYzp0aXRsZT48L2RjOnRpdGxlPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT48ZGVmcwogICAgIGlkPSJkZWZzNCI+PHN0eWxlCiAgICAgICB0eXBlPSJ0ZXh0L2NzcyIKICAgICAgIGlkPSJzdHlsZTIiPgogICAKICAgIC5maWwwIHtmaWxsOmJsYWNrfQogICAKICA8L3N0eWxlPjwvZGVmcz48ZwogICAgIGlkPSJnOCI+PHBhdGgKICAgICAgIGNsYXNzPSJmaWwwIgogICAgICAgZD0iTTQyMSAxMWMxMjUsMCAyMjcsMTAyIDIyNywyMjcgMCwxMjYgLTEwMiwyMjggLTIyNywyMjggLTEyNiwwIC0yMjgsLTEwMiAtMjI4LC0yMjggMCwtMTI1IDEwMiwtMjI3IDIyOCwtMjI3em0wIDQ1YzEwMCwwIDE4Miw4MiAxODIsMTgyIDAsMTAxIC04MiwxODMgLTE4MiwxODMgLTEwMSwwIC0xODMsLTgyIC0xODMsLTE4MyAwLC0xMDAgODIsLTE4MiAxODMsLTE4MnptLTEyNiA0NjVjODUsMCAxNzEsMCAyNTcsMCA4NywwIDE1OSw3MiAxNTksMTU5IDAsNTIgMCwxMDQgMCwxNTYgMTUsMCAzMCwwIDQ1LDAgMCwtNTIgMCwtMTA0IDAsLTE1NiAwLC0xMTIgLTkyLC0yMDQgLTIwNCwtMjA0IC04NiwwIC0xNzIsMCAtMjU3LDAgLTExMywwIC0yMDQsOTIgLTIwNCwyMDQgMCw1MiAwLDEwNCAwLDE1NiAxNSwwIDMwLDAgNDUsMCAwLC01MiAwLC0xMDQgMCwtMTU2IDAsLTg3IDcxLC0xNTkgMTU5LC0xNTl6IgogICAgICAgaWQ9InBhdGg2IiAvPjwvZz48L3N2Zz4K"})}},ejmO:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-logica-8-consistencia-mdx-25286460c04cf96c9d03.js.map