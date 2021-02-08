(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{WLIS:function(e,a,t){"use strict";var n=t("dI71"),l=t("q1tI"),i=t.n(l),c=t("7ljp");t("ZrE4"),t("ejmO");function r(e){return i.a.createElement("section",null,i.a.createElement("h3",{className:"sectionTitle"},e.secTitle),e.children)}function s(e){var a=i.a.Children.map(e.children,(function(a,t){return i.a.cloneElement(a,{secTitle:e.title})}));return i.a.createElement("section",null,a)}function b(e){var a=(new Date).getFullYear();return i.a.createElement("section",{className:"title"},i.a.createElement("h3",null,e.clase),i.a.createElement("h1",null," ",e.title),i.a.createElement("div",{className:"author"},"Juan R. Loaiza"),i.a.createElement("small",null,"Escuela de Ciencias Humanas ",i.a.createElement("br",null),"Universidad del Rosario ",i.a.createElement("br",null),a))}var o=t("rePB"),m=t("zLVn");function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var u=function(e){return i.a.cloneElement(e,{className:"fragment"})},d={ul:function(e){var a=e.children;Object(m.a)(e,["children"]);return i.a.createElement("ul",null,i.a.Children.map(a,u))},ol:function(e){var a=e.children;Object(m.a)(e,["children"]);return i.a.createElement("ol",null,i.a.Children.map(a,u))},table:function(e){var a=e.children,t=Object(m.a)(e,["children"]),n=i.a.Children.map(a,(function(e){if("tbody"===e.props.originalType){var a=i.a.Children.map(e.props.children,(function(e){var a=i.a.Children.map(e.props.children,(function(e){return i.a.cloneElement(e,{className:"fragment"})}));return i.a.createElement("tr",{},a)}));return i.a.createElement("tbody",{},a)}return e}));return i.a.createElement("table",function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t),n)}};function j(e){var a=e.children,t=Object(m.a)(e,["children"]),n=i.a.Children.map(a,(function(e){return i.a.cloneElement(e,{className:"fragment"})}));return i.a.createElement(c.a,Object.assign({},t,{components:d}),n)}var O=t("dbrF");function g(e){var a=e.children,t=Object(m.a)(e,["children"]),n=i.a.Children.toArray(a);return i.a.createElement("div",Object.assign({className:"two-cols"},t),i.a.createElement("div",{className:"col-left "+t.className},n[0]),i.a.createElement("div",{className:"col-right "+t.className},n[1]))}function v(e){return i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"1rem"}},e.children)}function N(e){return i.a.createElement("div",{className:"card"},e.title?i.a.createElement("div",{className:"card-title"},e.title):null,i.a.createElement("div",{className:"card-body"},e.children))}var f=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e={Slide:r,TitleSlide:b,Animate:j,PSection:s,Example:O.b,Tooltip:O.d,Definition:O.a,TwoCols:g,Flex:v,Card:N};return i.a.createElement("div",{style:{height:"95vh"}},i.a.createElement("div",{className:"reveal"},i.a.createElement("div",{className:"slides"},i.a.createElement(c.a,{components:e},this.props.children))))},a}(i.a.Component);a.a=f},ZrE4:function(e,a,t){},ejmO:function(e,a,t){},uxaD:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return g}));var n=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("WLIS"),c={},r=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",a)}},s=r("TitleSlide"),b=r("Slide"),o=r("Animate"),m=r("Flex"),p=r("Example"),u=r("PSection"),d=r("Definition"),j={_frontmatter:c},O=i.a;function g(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)(O,Object.assign({},j,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)(s,{title:"Aproximaciones a la investigación",clase:"Metodologías de Investigación",mdxType:"TitleSlide"}),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"¿En qué consiste investigar"),Object(l.b)("p",null,"Cuando investigamos usamos ",Object(l.b)("strong",{parentName:"p"},"datos")," como ",Object(l.b)("strong",{parentName:"p"},"prueba")," de ",Object(l.b)("strong",{parentName:"p"},"ideas")," (Becker, 2017)."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Existen normas sobre cómo usar esos datos de manera correcta.")),Object(l.b)(m,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Investigación cuantitativa")),Object(l.b)("p",null,"Normas de inferencia estadística")),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Investigación cualitativa")),Object(l.b)("p",null,"Fidelidad a los significados en el fenómeno"))),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Podemos preguntarnos ahora:"),Object(l.b)(p,{animate:!0,mdxType:"Example"},"¿De dónde salen esas normas?"))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Aproximaciones a la investigación"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},'"',"[...]"," ",Object(l.b)("strong",{parentName:"p"},"planes")," o propuestas para conducir la investigación, involucra una intersección entre la ",Object(l.b)("strong",{parentName:"p"},"filosofía"),", los ",Object(l.b)("strong",{parentName:"p"},"diseños de investigación")," y los ",Object(l.b)("strong",{parentName:"p"},"métodos"),' específicos." (Creswell, p. 5)')),Object(l.b)("div",{className:"fragment",style:{marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Presuposiciones")),Object(l.b)("p",null,"Metafísicas, ontológicas, epistemológicas")),Object(l.b)("div",{className:"fragment",style:{marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Aplicación")),Object(l.b)("p",null,"Estrategias para conocer un fenómeno")),Object(l.b)("div",{className:"fragment",style:{marginBottom:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Desarrollo de métodos")),Object(l.b)("p",null,"Implementación de las estrategias para conocer"))),Object(l.b)(u,{title:"Presuposiciones filosóficas",mdxType:"PSection"},Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Presuposiciones filosóficas"),Object(l.b)("p",null,"¿Qué es ",Object(l.b)("strong",{parentName:"p"},"conocer")," un fenómeno?"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No hay respuesta clara. Variedad de propuestas.")),Object(l.b)("p",null,"Cada propuesta asume una ",Object(l.b)("strong",{parentName:"p"},"visión de mundo"),".")),Object(l.b)(d,{word:"Visión de mundo",animate:!0,mdxType:"Definition"},"Presuposiciones sobre cómo es el mundo y cómo nos acercamos a él."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Lo importante no es tener una respuesta, sino tener cada propuesta clara."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Presuposiciones filosóficas"),Object(l.b)("p",null,"Creswell menciona cuatro ",Object(l.b)("strong",{parentName:"p"},"aproximaciones a la investigación"),":"),Object(l.b)("div",{style:{display:"flex",width:"100%",justifyContent:"space-around"}},Object(l.b)("div",null,Object(l.b)("div",{className:"fragment",style:{padding:"1rem",boxShadow:"2px 2px 3px #aaa",margin:"2rem",textAlign:"center"}},"Post-positivismo"),Object(l.b)("div",{className:"fragment",style:{padding:"1rem",boxShadow:"2px 2px 3px #aaa",margin:"2rem"}},"Constructivismo")),Object(l.b)("div",null,Object(l.b)("div",{className:"fragment",style:{padding:"1rem",boxShadow:"2px 2px 3px #aaa",margin:"2rem",textAlign:"center"}},"Transformativismo"),Object(l.b)("div",{className:"fragment",style:{padding:"1rem",boxShadow:"2px 2px 3px #aaa",margin:"2rem",textAlign:"center"}},"Pragmatismo")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Post-positivismo"),Object(l.b)("p",null,"Suposición metafísica principal:"),Object(l.b)(p,{animate:!0,mdxType:"Example"},"Las causas determinan sus efectos."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Consecuencia:"),Object(l.b)(p,{animate:!0,mdxType:"Example"},"Si conocemos el estado del mundo en un momento dado, y tenemos conocimiento de las relaciones de causa-efecto, podemos predecir efectos futuros."),Object(l.b)("p",null,"Bajo esta suposición, ",Object(l.b)("strong",{parentName:"p"},"conocer")," es ",Object(l.b)("strong",{parentName:"p"},"develar relaciones causales"),"."),Object(l.b)("p",null,"La realidad es ",Object(l.b)("strong",{parentName:"p"},"independiente")," de nuestras actividades epistémicas. Las relaciones causales se ",Object(l.b)("strong",{parentName:"p"},"descubren"),"."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Post-positivismo"),Object(l.b)("p",null,"Si conocer es ",Object(l.b)("strong",{parentName:"p"},"develar relaciones causales"),", investigar es encontrar esas relaciones."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Controlar variables e intervenciones"),Object(l.b)("li",{parentName:"ul"},"Ganar capacidad predictiva (qué va a pasar después)"),Object(l.b)("li",{parentName:"ul"},"Énfasis en la generalidad")),Object(l.b)("p",null,"Privilegia los métodos ",Object(l.b)("strong",{parentName:"p"},"cuantitativos"),"."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Post-positivismo"),Object(l.b)("p",null,"Dificultades:"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Acusación de ",Object(l.b)("strong",{parentName:"li"},"reduccionismo")," y de ",Object(l.b)("strong",{parentName:"li"},"cientificismo"),"."),Object(l.b)("li",{parentName:"ul"},"Pérdida de ",Object(l.b)("strong",{parentName:"li"},"especificidad")," por la generalidad."),Object(l.b)("li",{parentName:"ul"},"Presuposiciones ",Object(l.b)("strong",{parentName:"li"},"metafísicas")," y ",Object(l.b)("strong",{parentName:"li"},"ontológicas")," fuertes.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Objetividad vs. subjetividad"),Object(l.b)("li",{parentName:"ul"},"Concepción fuerte de la verdad (correspondencia)"))),Object(l.b)("li",{parentName:"ul"},"Difícil enmarcar los métodos ",Object(l.b)("strong",{parentName:"li"},"cualitativos"),".")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Constructivismo"),Object(l.b)("p",null,"Suposición metafísica principal:"),Object(l.b)(p,{animate:!0,mdxType:"Example"},"El mundo no viene dado; lo construimos."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No hay mundo ",Object(l.b)("strong",{parentName:"li"},"predividido"),"."),Object(l.b)("li",{parentName:"ul"},"La verdad de una proposición depende de los ",Object(l.b)("strong",{parentName:"li"},"conceptos")," con que se construya.")),Object(l.b)("p",null,"Bajo esta suposición, ",Object(l.b)("strong",{parentName:"p"},"conocer")," es ",Object(l.b)("strong",{parentName:"p"},"construir redes de significado")," para darle sentido a la experiencia."),Object(l.b)("p",null,"La realidad se construye ",Object(l.b)("strong",{parentName:"p"},"intersubjetivamente"),"."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Constructivismo"),Object(l.b)("p",null,"Conocer es entonces ",Object(l.b)("strong",{parentName:"p"},"interpretar")," el mundo."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Aproxmación fenomenológica al objeto de estudio.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"El objeto se presenta."),Object(l.b)("li",{parentName:"ul"},"Investigar es describir el objeto como se presenta."),Object(l.b)("li",{parentName:"ul"},"Cómo un objeto se presente depende de mi lugar en el mundo."))),Object(l.b)("li",{parentName:"ul"},"Énfasis en las variaciones y multiplicidades.")),Object(l.b)("p",null,"Privilegia la investigación ",Object(l.b)("strong",{parentName:"p"},"cualitativa"),"."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Constructivismo"),Object(l.b)("p",null,"Dificultades:"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Cómo podemos ",Object(l.b)("strong",{parentName:"li"},"generalizar"),"?",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"¿Por qué lo observado en una muestra aplicaría a otra?"))),Object(l.b)("li",{parentName:"ul"},"Tendencia a formas de ",Object(l.b)("strong",{parentName:"li"},"relativismo")),Object(l.b)("li",{parentName:"ul"},"¿Qué hacemos con estructuras plausiblemente ",Object(l.b)("strong",{parentName:"li"},"universales")," (e.g., biología)?"),Object(l.b)("li",{parentName:"ul"},"Posibles ",Object(l.b)("strong",{parentName:"li"},"ambigüedades")," metodológicas.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"¿Cuándo es una construcción válida y cuándo no?")))))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Transformativismo"),Object(l.b)("p",null,"Metafísica ",Object(l.b)("strong",{parentName:"p"},"constructivista"),"."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Énfasis en la responsabilidad ",Object(l.b)("strong",{parentName:"p"},"política")," y poder transformativo."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Epistemología constructivista"),Object(l.b)("li",{parentName:"ul"},"La construcción de conocimiento tiene un propósito concreto.")),Object(l.b)("p",null,"Agendas de investigacón determinadas por ",Object(l.b)("strong",{parentName:"p"},"urgencias políticas"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Grupos marginales, interseccionalidad...")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Transformativismo"),Object(l.b)("p",null,"Dificultades:"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Mismas dificultades del constructivismo"),Object(l.b)("li",{parentName:"ul"},"¿Por qué exigir trasfondo político a toda investigación?"),Object(l.b)("li",{parentName:"ul"},"Posible confusión entre ",Object(l.b)("strong",{parentName:"li"},"comprender")," y ",Object(l.b)("strong",{parentName:"li"},"transformar"),".")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Pragmatismo"),Object(l.b)("p",null,"Metafísica constructivista débil."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Énfasis en las ",Object(l.b)("strong",{parentName:"p"},"posibilidades y consecuencias para la acción"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Qué posibilidades de acción ofrece saber algo?")),Object(l.b)("p",null,"Elección del método según improntas ",Object(l.b)("strong",{parentName:"p"},"instrumentales")," (lo que mejor sirva)."),Object(l.b)("p",null,"Dificultades: Tendencia al ",Object(l.b)("strong",{parentName:"p"},"relativismo"),"."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Aproximaciones a la investigación"),Object(l.b)("div",{style:{display:"flex"}},Object(l.b)("div",null,Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Post-positivismo")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conocer es revelar relaciones causales."),Object(l.b)("li",{parentName:"ul"},"Métodos cuantitativos"))),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Constructivismo")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conocer es construir redes de significado."),Object(l.b)("li",{parentName:"ul"},"Métodos cualitativos")))),Object(l.b)("div",null,Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Transformativismo")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conocer debe transformar"),Object(l.b)("li",{parentName:"ul"},"Métodos cualitativos"))),Object(l.b)("div",{className:"fragment"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Pragmatismo")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Conocer es una guía para la acción"),Object(l.b)("li",{parentName:"ul"},"Métodos mixtos"))))))),Object(l.b)(u,{title:"Diseños de investigación",mdxType:"PSection"},Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"¿De dónde salen entonces los métodos?"),Object(l.b)("p",null,"Cada trasfondo ",Object(l.b)("strong",{parentName:"p"},"metafísico")," y ",Object(l.b)("strong",{parentName:"p"},"epistemológico")," trae consigo ",Object(l.b)("strong",{parentName:"p"},"preferencias metodológicas"),"."),Object(l.b)(m,{mdxType:"Flex"},Object(l.b)("div",{className:"fragment",style:{margin:"0.5rem",boxShadow:"1px 2px 2px 2px #aaa",padding:"1rem",borderRadius:"5px"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Metafísica")),Object(l.b)("p",null,"¿Qué es el mundo?")),Object(l.b)("div",{className:"fragment",style:{margin:"0.5rem",boxShadow:"1px 2px 2px 2px #aaa",padding:"1rem",borderRadius:"5px"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Epistemología")),Object(l.b)("p",null,"¿Cómo se conoce el mundo?"))),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"La respuesta a estas preguntas nos puede llevar a ",Object(l.b)("strong",{parentName:"p"},"diseñar estrategias para conocer"),", y cómo implementamos esas estrategias constituye un ",Object(l.b)("strong",{parentName:"p"},"método"),"."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Diseños cuantitativos"),Object(l.b)("p",null,"Hay tres tipos de estudios cuantitativos."),Object(l.b)("div",{className:"fragment",style:{margin:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Experimentales")),Object(l.b)("p",null,"Controlo todas las variables")),Object(l.b)("div",{className:"fragment",style:{margin:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Cuasi-experimentales")),Object(l.b)("p",null,"Controlo las variables relevantes (sin asignación aleatoria)")),Object(l.b)("div",{className:"fragment",style:{margin:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"No experimental")),Object(l.b)("p",null,"Comparativo causal"),Object(l.b)("p",null,"Correlacional"))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Estudio experimental"),Object(l.b)("p",null,"Estudio sobre si una vacuna determinada es efectiva contra el COVID-19."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Asignamos ",Object(l.b)("strong",{parentName:"li"},"al azar")," personas de una muestra a dos grupos (vacuna y placebo)."),Object(l.b)("li",{parentName:"ul"},"La asignación es 100% ",Object(l.b)("strong",{parentName:"li"},"aleatoria"),".")),Object(l.b)("p",null,"La variable relevante es dar o no dar la vacuna. El resto de variables están controladas por la aleatoriedad del muestreo."))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Estudio cuasi-experimental"),Object(l.b)("p",null,"Quiero saber si el COVID-19 afecta más a hombres que a mujeres."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Asignamos un grupo de hombres y de mujeres a dos grupos (vacuna y placebo)."),Object(l.b)("li",{parentName:"ul"},"Controlamos todas las variables pero variamos la variable ",Object(l.b)("strong",{parentName:"li"},"sexo"),".",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Las personas llegan ya con un sexo asignado (no lo asignamos nosotros)."),Object(l.b)("li",{parentName:"ul"},"La asignación no es completamente aleatoria (mismas proporciones)."))),Object(l.b)("li",{parentName:"ul"},"Tratamos todo como si lo hubiésemos controlado.")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Estudio comparativo-causal y correlacional"),Object(l.b)("p",null,"Queremos saber si el COVID-19 afecta más según la edad."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Analizamos datos y correlacionamos la variable ",Object(l.b)("strong",{parentName:"li"},"edad")," con la variable ",Object(l.b)("strong",{parentName:"li"},"severidad del COVID-19"),"."),Object(l.b)("li",{parentName:"ul"},"Podemos usar datos existentes y variados.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No necesitamos control estricto de variables.")))))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Diseños cualitativos"),Object(l.b)("p",null,"Métodos variados, dependiendo del tipo de datos."),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Creswell menciona:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Investigación narrativa (historia de vida)"),Object(l.b)("li",{parentName:"ul"},"Fenomenología"),Object(l.b)("li",{parentName:"ul"},"Etnografía"),Object(l.b)("li",{parentName:"ul"},"Estudio de caso")),Object(l.b)("p",null,"Otros incluyen:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Entrevista y grupo focal")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Diseños cualitativos"),Object(l.b)(m,{mdxType:"Flex"},Object(l.b)("div",{style:{marginRight:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Investigacíon narrativa"),Object(l.b)("br",null),Object(l.b)("em",{parentName:"p"},"Historia de vida")),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"¿Cómo cuentan las personas los hechos?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Efectos de memoria y estilos narrativos"),Object(l.b)("li",{parentName:"ul"},"Matices específicos individuales")))),Object(l.b)("div",{style:{marginLeft:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Fenomenología")),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Describimos un fenómeno tal y como lo experimentamos."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Perspectiva de primera persona y experiencia vivida"),Object(l.b)("li",{parentName:"ul"},"Matices muy específicos de la experiencia")))))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Diseños cualitativos"),Object(l.b)(m,{mdxType:"Flex"},Object(l.b)("div",{style:{marginRight:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Etnografía"),Object(l.b)("br",null),Object(l.b)("em",{parentName:"p"},"Observación participante")),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Observamos un fenómeno participando de manera directa."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Distintas perspectivas sobre el fenómeno"),Object(l.b)("li",{parentName:"ul"},"Temporalmente extensa")))),Object(l.b)("div",{style:{marginLeft:"1rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Entrevista/grupo focal")),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("p",null,"Creamos una situación mediante preguntas e interacción"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Interacción entre entrevistador-sujeto / entre participantes."),Object(l.b)("li",{parentName:"ul"},"Perspectivas variadas")))))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Diseños mixtos"),Object(l.b)("p",null,"Hay distintas maneras de combinar métodos cuantitativos y cualitativos."),Object(l.b)("div",null,Object(l.b)("div",{className:"fragment",style:{margin:"1rem 2rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Diseño convergente-paralelo")),Object(l.b)("p",null,"Hacemos ambas investigaciones a la vez.")),Object(l.b)("div",{className:"fragment",style:{margin:"1rem 2rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Diseño secuencial-explicativo")),Object(l.b)("p",null,"Hacemos investigación general (cuantitativa) y la explicamos a la luz de investigación más específica (cualitativa).")),Object(l.b)("div",{className:"fragment",style:{margin:"1rem 2rem"}},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Diseño secuencial-exploratorio")),Object(l.b)("p",null,"Exploramos haciendo investigación específica (cualitativa) para luego buscar generalizarla (cuantitativa)."))))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Resumen"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"La elección de los métodos responde a presuposiciones filosóficas:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"¿Qué es el fenómeno que queremos conocer?"),Object(l.b)("li",{parentName:"ul"},"¿Cómo podemos conocer genuinamente ese fenómeno?"))),Object(l.b)("li",{parentName:"ul"},"Es importante dejar claras estas presuposiciones. Estas determinan la elección y el uso correcto de la metodología (i.e. el uso de datos como pruebas de ideas)."),Object(l.b)("li",{parentName:"ul"},"¿Todos los paradigmas son iguales? Quizás no...pero la discusión ya será filosófica.")))),Object(l.b)(b,{mdxType:"Slide"},Object(l.b)("h1",null,"Actividad"),Object(l.b)("p",null,"Nos dividimos en cuatro grupos y asignamos una aproximación a la investigación.\nEn los grupos discutimos:"),Object(l.b)(o,{mdxType:"Animate"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"¿Qué tipo de preguntas de investigación podríamos plantear? Planteemos una pregunta."),Object(l.b)("li",{parentName:"ul"},"¿Qué método usaríamos para resolver esa pregunta desde nuestro paradigma? Posibles ventajas y limitaciones."),Object(l.b)("li",{parentName:"ul"},"Proponemos una idea general de investigación basada en nuestro paradigma.")))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-metodologias-3-aproximaciones-mdx-c5b05227b68574867a24.js.map