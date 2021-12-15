(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(35),r=n.n(a),o=n(18),s=n.n(o),i=n(10),u=n(24),j=n(3),l=n(15),b=n.n(l),d=n(20),p=(n(64),n(1));var f=function(){return Object(p.jsx)("header",{children:Object(p.jsx)("h1",{children:"Pokemon Counter Calculator"})})},O=n(13);n(66);var h=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],r=n[1];return Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)("input",{type:"text",value:a,onChange:function(e){r(e.target.value)},placeholder:"Pokemon's Name"}),Object(p.jsx)(O.a,{className:"calculate-btn",onClick:function(){null!==a&&/\S/.test(a)&&e.onSubmit(a),r("")},children:"Calculate"})]})},m=n(9);n(67);var x=function(e){return Object(p.jsxs)(m.a,{className:"text-center poke-card",children:[Object(p.jsx)(m.a.Img,{variant:"top",src:e.image}),Object(p.jsxs)(m.a.Body,{children:[Object(p.jsx)(m.a.Title,{children:e.name}),Object(p.jsx)(m.a.Text,{children:function(e){var t="";return e.forEach((function(e){t+=e.type.name+", "})),t=t.replace(new RegExp(", $"),"")}(e.types)})]})]})},v=n(36),k=n(25);n(68);var y=function(e){return Object(p.jsxs)(m.a,{className:"mb-2 "+(e.isAttack?"attack":"defense"),style:{width:"18rem",margin:"0 auto"},children:[Object(p.jsxs)(m.a.Header,{children:[e.isAttack?"Attack":"Defense"," Counters"]}),Object(p.jsx)(m.a.Body,{children:Object(p.jsxs)(m.a.Text,{children:[Object(p.jsxs)("p",{children:[e.isAttack?"Super":"Not Very"," Effective: ",e.counters]}),e.doubleCounters.length>0&&Object(p.jsxs)("p",{children:["2x ",!e.isAttack&&"Not"," Effective: ",e.doubleCounters]})]})})]})};var g=function(e){function t(t){var n="",c="";return e.typeData.forEach((function(e){(t?e.double_damage_from:e.half_damage_to).forEach((function(e){var t=e.name;n.includes(t)?(c+=t+", ",n.replace(t+", ","")):n+=t+", "}))})),n=n.replace(new RegExp(", $"),""),c=c.replace(new RegExp(", $"),""),{counters:n,counters2x:c}}return Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{style:{maxWidth:"50rem"},children:Object(p.jsxs)(v.a,{xs:1,sm:1,md:2,children:[Object(p.jsx)(k.a,{children:Object(p.jsx)(y,{isAttack:!0,counters:t(!0).counters,doubleCounters:t(!0).counters2x})}),Object(p.jsx)(k.a,{children:Object(p.jsx)(y,{isAttack:!1,counters:t(!1).counters,doubleCounters:t(!1).counters2x})})]})})})};var S=function(e){return e.isPokemon&&e.pokemon.hasOwnProperty("error")?Object(p.jsx)("h5",{children:e.pokemon.error}):Object(p.jsxs)("div",{children:[e.isPokemon&&Object(p.jsx)(x,{name:e.pokemon.name,image:e.pokemon.sprites.front_default,types:e.pokemon.types}),Object(p.jsx)(g,{typeData:e.typeData})]})};n(69);var C=function(e){var t=Object(c.useState)(!0),n=Object(j.a)(t,2),a=n[0],r=n[1];function o(t){var n="pokemon"===t.target.value;r(n),e.onSelect(n)}return Object(p.jsxs)("div",{className:"selector",children:[Object(p.jsx)("input",{checked:a,type:"radio",value:"pokemon",id:"pokemon",onChange:o}),Object(p.jsx)("label",{htmlFor:"pokemon",children:"By Pokemon"}),Object(p.jsx)("input",{checked:!a,type:"radio",value:"type",id:"type",onChange:o}),Object(p.jsx)("label",{htmlFor:"type",children:"By Type"})]})},w=n(11);var N=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)("none"),s=Object(j.a)(o,2),i=s[0],u=s[1];function l(t){t.preventDefault(),u(t.target.text),e.onSelect(e.name,t.target.text)}return Object(c.useEffect)((function(){var e=!0;return b.a.get("https://pokeapi.co/api/v2/type").then((function(t){e&&r(t.data.results.map((function(e){return e.name})))})).catch((function(e){console.log(e)})),function(){e=!1}}),[]),Object(p.jsxs)(w.a,{className:"drop-down",children:[Object(p.jsx)(w.a.Toggle,{variant:"light",children:i}),Object(p.jsxs)(w.a.Menu,{children:[Object(p.jsx)(w.a.Item,{onClick:l,children:"none"}),Object(p.jsx)(w.a.Divider,{}),a.map((function(e){return Object(p.jsx)(w.a.Item,{onClick:l,children:e},e)}))]})]})};n(70);var E=function(e){var t=Object(c.useState)(["none","none"]),n=Object(j.a)(t,2),a=n[0],r=n[1];function o(e,t){var n=a;"sel1"===e?n[0]=t:n[1]=t,r(n)}return Object(p.jsxs)("div",{className:"type-select",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(N,{name:"sel1",onSelect:o}),Object(p.jsx)(N,{name:"sel2",onSelect:o})]}),Object(p.jsx)(O.a,{className:"calculate-btn",onClick:function(){e.onSubmit(a)},children:"Calculate"})]})};n(71);var D=function(){return Object(p.jsx)("div",{className:"loading-container",children:Object(p.jsx)("div",{className:"loading"})})};n(72);var A=function(){return Object(p.jsx)("footer",{children:"Developed by Sam Hilliard"})};n(73);var P=function(){var e="https://pokeapi.co/api/v2/",t=Object(c.useState)({}),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),l=Object(j.a)(o,2),O=l[0],m=l[1],x=Object(c.useState)(!0),v=Object(j.a)(x,2),k=v[0],y=v[1],g=Object(c.useState)(!1),w=Object(j.a)(g,2),N=w[0],P=w[1],_=Object(c.useState)(!1),B=Object(j.a)(_,2),T=B[0],I=B[1];function R(e){P(!0),k?function(e){$.apply(this,arguments)}(e):function(e){F.apply(this,arguments)}(e)}function $(){return($=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m([]),t.next=3,b.a.get(e+"pokemon/"+n.toLowerCase()).then((function(e){r(e.data),e.data.types.map((function(e){return e.type.url})).forEach((function(e){b.a.get(e).then((function(e){m((function(t){return[].concat(Object(i.a)(t),[e.data.damage_relations])}))})).catch((function(){m((function(e){return[].concat(Object(i.a)(e),[{error:'Could not find type with name, "'.concat(n,'."')}])}))}))}))})).catch((function(){r({error:'Could not find pokemon with name, "'.concat(n,'."')})}));case 3:P(!1),I(!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m([]),(n=Object(i.a)(new Set(n))).forEach((function(t){"none"!==t&&b.a.get(e+"type/"+t).then((function(e){m((function(t){return[].concat(Object(i.a)(t),[e.data.damage_relations])}))})).catch((function(){m((function(e){return[].concat(Object(i.a)(e),[{error:'Could not find type with name, "'.concat(n,'."')}])}))}))})),P(!1),I(!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{}),Object(p.jsxs)(d.a,{className:"centered",children:[k?Object(p.jsx)(h,{onSubmit:R}):Object(p.jsx)(E,{onSubmit:R}),Object(p.jsx)(C,{onSelect:function(e){y(e),I(!1)}}),!N&&T&&Object(p.jsx)(S,{pokemon:a,typeData:O,isPokemon:k}),N&&Object(p.jsx)(D,{})]}),Object(p.jsx)(A,{})]})};n(74);r.a.render(Object(p.jsx)(P,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.1eb2b818.chunk.js.map