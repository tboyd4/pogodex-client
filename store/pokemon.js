import PokeService from '@/services/PokeService';

export const state = {
    pokemon: 'pokemon'
}

export const mutations = {
    SET_POKEMON(state, pokemon) {
        state.pokemon = pokemon
    }
}

export const actions = {
    getPokemon({commit}, pokemon) {
        return PokeService.getPokemon(pokemon).then(response => {
            commit('SET_POKEMON', response.data.species.name)
        })
    }
}