<template>
<tr class="bleu">
  <td><input type="text" class="form-control" v-model="input.article" ref="modif" placeholder="Article"></td>
  <td><input type="text" class="form-control" v-model="input.quantite" placeholder="Quantité"></td>
  <td><input type="text" class="form-control" v-model="input.prix" placeholder="Prix"></td>
  <td colspan="3"><button class="btn btn-primary btn-block" @click="ajouter()">Ajouter</button></td>
</tr>
</template>
 
<script>
export default {
  props: ['article'],
  computed: {
    input: function() {
      return this.article;
    }
  },
  methods: {
    ajouter: function() {
      this.$emit('add', this.input);
    }
  }  
}
</script>

<style lang="scss">
  $fond: lightblue;
  .bleu {
    background-color: $fond !important;
  }
</style> 