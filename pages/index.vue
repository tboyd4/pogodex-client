<template>
  <div>
    <h1>Hello {{name}}</h1>
    <h2>{{pokemon}}</h2>
    <v-text-field label="Enter a Mon" v-model="sendingPokemon"></v-text-field>
    <v-btn color="primary" @click="getPokemon">Search</v-btn>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        name: "Tyler",
        sendingPokemon: ''
      }
    },
    methods: {
      async getPokemon() {
        await this.$store.dispatch('pokemon/getPokemon', this.sendingPokemon)
      }
    },
    computed: mapState({
      pokemon: state => state.pokemon.pokemon
    })
  }
</script>

<style scoped>

</style>
