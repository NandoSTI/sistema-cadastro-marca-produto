<template>
  <div class="main-container">
    <FormMarcaContainer/>
  </div>
</template>

<script>
import FormMarcaContainer from './components/FormMarcaComponent.vue'

  export default{
    name: 'App',
    components: {
      FormMarcaContainer,
    }
  }
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

body{
  background-color: #dee2e6;
  color: rgb(54, 52, 52);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}



</style>
