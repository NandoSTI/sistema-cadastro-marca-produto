(function(){"use strict";var o={4666:function(o,t,a){var r=a(9242),e=a(3396);const n={class:"main-container"};function i(o,t,a,r,i,c){const l=(0,e.up)("FormMarcaContainer");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e.Wm)(l)])}var c=a(7139);const l={class:"container"},u=(0,e._)("h2",{class:"title"},"Cadastro de Marcas",-1),s=(0,e._)("label",{for:"marca",class:"label"},null,-1),d=(0,e._)("button",{class:"btn",type:"submit"},"Cadastrar",-1),p=(0,e._)("h2",{class:"title"},"Cadastro de Produtos",-1),f=(0,e._)("label",{for:"marcaProduto"},null,-1),m=(0,e._)("option",{value:""},"Selecione uma marca",-1),v=["value"],h=(0,e._)("label",{for:"descricao",class:"label"},null,-1),b=(0,e._)("label",{for:"valor",class:"label"},null,-1),_={class:"table"},y=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Marca"),(0,e._)("th",null,"Descrição"),(0,e._)("th",null,"Valor"),(0,e._)("th",null,"Ações")])],-1),g={class:"icon"},w=["onClick"],S=(0,e._)("i",{class:"fa-regular fa-pen-to-square"},null,-1),P=[S],k=["onClick"],C=(0,e._)("i",{class:"fa-sharp fa-solid fa-circle-xmark"},null,-1),M=[C];function D(o,t,a,n,i,S){return(0,e.wg)(),(0,e.iD)("div",l,[u,(0,e._)("form",{onSubmit:t[1]||(t[1]=(0,r.iM)(((...o)=>S.cadastrarMarca&&S.cadastrarMarca(...o)),["prevent"])),class:"form"},[(0,e._)("div",null,[s,(0,e.wy)((0,e._)("input",{type:"text",id:"marca","onUpdate:modelValue":t[0]||(t[0]=o=>i.novaMarca=o),required:"",class:"input",placeholder:"Cadastre a marca do produto"},null,512),[[r.nr,i.novaMarca]])]),d],32),p,(0,e._)("form",{onSubmit:t[6]||(t[6]=(0,r.iM)(((...o)=>S.cadastrarProduto&&S.cadastrarProduto(...o)),["prevent"])),class:"form"},[(0,e._)("form",{onSubmit:t[5]||(t[5]=(0,r.iM)((o=>-1===i.produtoSelecionado?S.cadastrarProduto():S.atualizarProduto(i.produtoSelecionado)),["prevent"])),class:"form"},[(0,e._)("div",null,[f,(0,e.wy)((0,e._)("select",{id:"marcaProduto","onUpdate:modelValue":t[2]||(t[2]=o=>i.marcaSelecionada=o),required:"",class:"select"},[m,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.marcas,(o=>((0,e.wg)(),(0,e.iD)("option",{value:o,key:o,class:"option"},(0,c.zw)(o),9,v)))),128))],512),[[r.bM,i.marcaSelecionada]])]),(0,e._)("div",null,[h,(0,e.wy)((0,e._)("input",{type:"text",id:"descricao","onUpdate:modelValue":t[3]||(t[3]=o=>i.novaDescricao=o),required:"",class:"input",placeholder:"Descrição do produto"},null,512),[[r.nr,i.novaDescricao]])]),(0,e._)("div",null,[b,(0,e.wy)((0,e._)("input",{type:"number",id:"valor","onUpdate:modelValue":t[4]||(t[4]=o=>i.novoValor=o),required:"",class:"input",placeholder:"Valor do produto"},null,512),[[r.nr,i.novoValor]])]),(0,e._)("button",{class:(0,c.C_)(["btn",{"btn-atualizar":-1!==i.produtoSelecionado}]),type:"submit"},(0,c.zw)(-1===i.produtoSelecionado?"Cadastrar":"Atualizar"),3)],32)],32),(0,e.wy)((0,e._)("div",null,[(0,e._)("table",_,[y,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.produtos,((o,t)=>((0,e.wg)(),(0,e.iD)("tr",{key:t},[(0,e._)("td",null,(0,c.zw)(o.marca),1),(0,e._)("td",null,(0,c.zw)(o.descricao),1),(0,e._)("td",null,(0,c.zw)(o.valor),1),(0,e._)("td",null,[(0,e._)("div",g,[(0,e._)("button",{class:"btn-action-edit",onClick:o=>S.editarProduto(t)},P,8,w),(0,e._)("button",{class:"btn-action-close",onClick:o=>S.excluirProduto(t)},M,8,k)])])])))),128))])])],512),[[r.F8,S.temProdutos]])])}a(7658);var O={data(){return{marcas:[],novaMarca:"",marcaSelecionada:"",novaDescricao:"",novoValor:"",produtos:[],produtoSelecionado:-1,marcaCadastrada:!1}},computed:{temProdutos(){return this.produtos.length>0}},methods:{cadastrarMarca(){this.marcas.push(this.novaMarca),this.novaMarca=""},cadastrarProduto(){this.produtos.push({marca:this.marcaSelecionada,descricao:this.novaDescricao,valor:this.novoValor}),this.marcaSelecionada="",this.novaDescricao="",this.novoValor=""},editarProduto(o){this.produtoSelecionado=o,this.marcaSelecionada=this.produtos[o].marca,this.novaDescricao=this.produtos[o].descricao,this.novoValor=this.produtos[o].valor},excluirProduto(o){this.produtos.splice(o,1)},atualizarProduto(o){-1!==this.produtoSelecionado&&(this.produtos[this.produtoSelecionado].marca=this.marcaSelecionada,this.produtos[this.produtoSelecionado].descricao=this.novaDescricao,this.produtos[this.produtoSelecionado].valor=this.novoValor,this.produtoSelecionado=-1,this.marcaSelecionada="",this.novaDescricao="",this.novoValor="")}}},V=a(89);const j=(0,V.Z)(O,[["render",D]]);var x=j,z={name:"App",components:{FormMarcaContainer:x}};const A=(0,V.Z)(z,[["render",i]]);var T=A,q=a(2483);const E={class:"home"};function F(o,t){return(0,e.wg)(),(0,e.iD)("div",E)}const U={},N=(0,V.Z)(U,[["render",F]]);var Z=N;const H=[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,833))}],K=(0,q.p7)({history:(0,q.PO)("/"),routes:H});var L=K;(0,r.ri)(T).use(L).mount("#app")}},t={};function a(r){var e=t[r];if(void 0!==e)return e.exports;var n=t[r]={exports:{}};return o[r].call(n.exports,n,n.exports,a),n.exports}a.m=o,function(){var o=[];a.O=function(t,r,e,n){if(!r){var i=1/0;for(s=0;s<o.length;s++){r=o[s][0],e=o[s][1],n=o[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(o){return a.O[o](r[l])}))?r.splice(l--,1):(c=!1,n<i&&(i=n));if(c){o.splice(s--,1);var u=e();void 0!==u&&(t=u)}}return t}n=n||0;for(var s=o.length;s>0&&o[s-1][2]>n;s--)o[s]=o[s-1];o[s]=[r,e,n]}}(),function(){a.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return a.d(t,{a:t}),t}}(),function(){a.d=function(o,t){for(var r in t)a.o(t,r)&&!a.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(o){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](o,t),t}),[]))}}(),function(){a.u=function(o){return"js/about.4c8f483f.js"}}(),function(){a.miniCssF=function(o){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){a.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={},t="smart-system:";a.l=function(r,e,n,i){if(o[r])o[r].push(e);else{var c,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",t+n),c.src=r),o[r]=[e];var p=function(t,a){c.onerror=c.onload=null,clearTimeout(f);var e=o[r];if(delete o[r],c.parentNode&&c.parentNode.removeChild(c),e&&e.forEach((function(o){return o(a)})),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){a.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var o={143:0};a.f.j=function(t,r){var e=a.o(o,t)?o[t]:void 0;if(0!==e)if(e)r.push(e[2]);else{var n=new Promise((function(a,r){e=o[t]=[a,r]}));r.push(e[2]=n);var i=a.p+a.u(t),c=new Error,l=function(r){if(a.o(o,t)&&(e=o[t],0!==e&&(o[t]=void 0),e)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,e[1](c)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===o[t]};var t=function(t,r){var e,n,i=r[0],c=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==o[t]}))){for(e in c)a.o(c,e)&&(a.m[e]=c[e]);if(l)var s=l(a)}for(t&&t(r);u<i.length;u++)n=i[u],a.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return a.O(s)},r=self["webpackChunksmart_system"]=self["webpackChunksmart_system"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(4666)}));r=a.O(r)})();
//# sourceMappingURL=app.182e284a.js.map