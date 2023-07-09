<template>
  <div class="container">

      <h2 class="title">Cadastro de Marcas</h2>
  
      <form @submit.prevent="cadastrarMarca" class="form">
        <div>
          <label for="marca" class="label"></label>
          <input type="text" id="marca" v-model="novaMarca" required class="input" placeholder="Cadastre a marca do produto">
        </div>
        <button class="btn" type="submit">Cadastrar</button>
      </form>
      
        <h2 class="title">Cadastro de Produtos</h2>
        
      <form @submit.prevent="cadastrarProduto" class="form">
      <form @submit.prevent="produtoSelecionado === -1 ? cadastrarProduto() : atualizarProduto(produtoSelecionado)" class="form">
        <div>
          <label for="marcaProduto"></label>
          <select id="marcaProduto" v-model="marcaSelecionada" required class="select">
            <option value="" >Selecione uma marca</option>
            <option v-for="marca in marcas" :value="marca" :key="marca" class="option">{{ marca }}</option>
          </select>
        </div>
  
        <div>
          <label for="descricao" class="label"></label>
          <input type="text" id="descricao" v-model="novaDescricao" required class="input" placeholder="Descrição do produto">
        </div>
  
        <div>
          <label for="valor" class="label"></label>
          <input type="number" id="valor" v-model="novoValor" required class="input" placeholder="Valor do produto">
        </div>
        <button class="btn" type="submit" v-bind:class="{ 'btn-atualizar': produtoSelecionado !== -1 }">{{ produtoSelecionado === -1 ? 'Cadastrar' : 'Atualizar' }}</button>
      </form>
      </form>
    <div v-show="temProdutos">
        <table class="table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produto, index) in produtos" :key="index">
            <td>{{ produto.marca }}</td>
            <td>{{ produto.descricao }}</td>
            <td>{{ produto.valor }}</td>
            <td>
            <div class="icon">
              <button class="btn-action-edit" @click="editarProduto(index)"><i class="fa-regular fa-pen-to-square"></i></button>
              <button class="btn-action-close" @click="excluirProduto(index)"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        marcas: [],
        novaMarca: '',
        marcaSelecionada: '',
        novaDescricao: '',
        novoValor: '',
        produtos: [],
        produtoSelecionado: -1,
        marcaCadastrada: false
      };
    },

    computed: {
      temProdutos() {
      return this.produtos.length > 0;
  },
},

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

<style>

.icon{
  display: flex;
}

.container {
  width: 420px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #adabab;
  border-radius: 5px;
  box-shadow: 2px 2px #aaa9a9;
}

.select{
  margin-top: 10px;
  
}


.form {
  margin-bottom: 20px;
}

.label {
  display: block;
  margin-bottom: 10px;
}


.input {
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
}


.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 10px;
    border: 1px solid #ccc;
}

.table th {
    background-color: #f0f0f0;
}

.btn {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #97bee7;
    color: #180c0c;
    border: none;
    cursor: pointer;
    transition: .3s ease-in-out;
}

.btn:hover {
    background-color:#007bff;
    color: #f0f0f0;
}


.btn-action-edit{
  margin-left: 5px;
  padding: 10px 20px;
  background-color: #50da72;
  border-radius: 4px;
  color: #180c0c;
  border: none;
  cursor: pointer;
  transition: .3s ease-in-out;
}

.btn-action-edit:hover{
  color: #f0f0f0;
}

.btn-action-close{
  margin-left: 5px;
  padding: 10px 20px;
  background-color: #dd1f1f;
  border-radius: 4px;
  color: #180c0c;
  border: none;
  cursor: pointer;
  transition: .3s ease-in-out;
}

.btn-action-close:hover{
  color: #f0f0f0;
}

.btn-action:hover {
    background-color:#007bff;
    color: #f0f0f0;
}

.btn-atualizar {
    background-color: #50da72;
}

.btn-atualizar:hover{
  background-color: #14cf43;
}

  .btn-action-edit{
   margin-bottom: 2px;
   margin-left: 10px;
  } 

#marcaProduto{
    width: 100%;
    height: 20px;
}

@media (max-width: 425px){
  .container{
    max-width:400px;
  }

}


</style>





