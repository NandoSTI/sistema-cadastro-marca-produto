# Sistema de cadastro de marca e produto

#### Desenvolvi esse projeto no intuito criar um sistema de cadastro simples construido com a tecnologia VUE 3, HTML5 e CSS3. Nesse sistema poderá ser cadastrado várias marcas e, a partir do cadastro dessas marcas, escolher uma das marcas para continuar o cadastro de um produto, a descrição do produto e o valor do produto. Muito obrigado por visitar essa página."


## Índice

- [Visão geral](#visão-geral)
- [Captura de tela](#captura-de-tela)
- [Links](#links)
- [Construído com](#construído-com)
- [O que aprendi](#o-que-aprendi)
- [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Recursos úteis](#recursos-úteis)
- [Fernando Mendes](#autor)
- [Agradecimentos](#agradecimentos)



## Visão geral

### Captura de tela

#### Tela Desktop

<img src="desktop.gif" alt="Tela desktop exibindo funcionalidades">

#### Tela Responsiva

<img src="mobile.gif" alt="Exibindo responsividade">

### Links

- Site URL: https://nandosti.github.io/cadastro-marca-produto/

### Construído com

<div style="display: inline_block"><br>
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> 
  <img align="center" alt="Vue" height="30" width="40" 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />      
</div>


### O que aprendi

Nesse projeto envolvendo VUE, HTML, CSS e JavaScript, aprendi conceitos importantes. Através do CSS, aprendi a dar estilo e formatar elementos HTML, explorando propriedades como cores, fontes, posicionamento,animações e responsividade. 

Com JavaScript pude adicionar interatividade e dinamismo ao projeto. Com ele, aprendi a manipular elementos HTML, responder a eventos do usuário, criar animações e implementar lógica complexa.

Ao trabalhar com CSS e JavaScript em conjunto, aprendi a integrar essas duas linguagens para criar experiências ricas e interativas. Pude usar JavaScript para controlar o comportamento do CSS, modificando estilos com base em ações do usuário ou em eventos específicos.

No processo de aprendizado, foi importante entender os conceitos fundamentais de cada linguagem, como as diretivas no VUE, caixas-modelo, fluxo de renderização, manipulação do DOM, eventos, funções e estruturas de controle do JavaScript. Praticar esses conceitos em projetos reais nos ajuda a aprimorar nossas habilidades e explorar diferentes técnicas e soluções para os desafios que encontramos.

Concluir esse projeto, mesmo que só a primeira parte da ideia geral, me deu confiança para a construção de interfaces web cada vez mais atrativas e funcionais. 

## Trechos de códigos

``` 
    methods: {
      cadastrarMarca() {
        this.marcas.push(this.novaMarca);
        this.novaMarca = '';
        
      },
      cadastrarProduto() {
        this.produtos.push({
          marca: this.marcaSelecionada,
          descricao: this.novaDescricao,
          valor: this.novoValor
        });
        this.marcaSelecionada = '';
        this.novaDescricao = '';
        this.novoValor = '';
      },
      editarProduto(index) {
        this.produtoSelecionado = index;
        this.marcaSelecionada = this.produtos[index].marca;
        this.novaDescricao = this.produtos[index].descricao;
        this.novoValor = this.produtos[index].valor;
      },
      excluirProduto(index) {
        this.produtos.splice(index, 1);
      },
      atualizarProduto(index) {
      if (this.produtoSelecionado !== -1) {
        this.produtos[this.produtoSelecionado].marca = this.marcaSelecionada;
        this.produtos[this.produtoSelecionado].descricao = this.novaDescricao;
        this.produtos[this.produtoSelecionado].valor = this.novoValor;
        this.produtoSelecionado = -1; 
        this.marcaSelecionada = '';
        this.novaDescricao = '';
        this.novoValor = '';
      }
    },

    }
  };
</script>

```

### Desenvolvimento contínuo

Pretendo continuar focado em construir um conhecimento sólido nessas limguagens. Ainda há muitos conceitos importantes para serem desenvolvidos. Todos os dias são gradativamente adicionados ao meu repertório de ferramentas.

### Recursos úteis

- [W3School](https://www.w3schools.com/css/default.asp) - Esse site sempre me ajuda a resolver qualquer problema relacionados a códigos de uma maneira fácil e muito rápida.
- [Dev em Dobro](https://www.youtube.com/@DevemDobro) - Este é um canal onde encontro muito material. Tem muito conteúdo relacionado ao desenvolvimento. Recomendo a todos que querem aprender sobre esse e outros conceitos relacionados.

## Autor

[Fernando Mendes](https://www.linkedin.com/in/fernandomendesti/)






