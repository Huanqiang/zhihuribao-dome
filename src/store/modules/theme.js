// 每一个 modules 都应该包含属于自己的 state、getters、actions、mutations

import * as types from "../mutation-types"
import axios from 'axios'

const state = {
    themes: []
}

const getters = {
	getThemes: state => state.themes
}

const actions = {
    fetchThemes ({ commit }) {
        axios.get('/api/4/themes')
        	.then((response) => commit(types.FETCH_THEMES, response.data.others)
            ).catch(function(error) {
                console.log(error)
            })
    }
}

const mutations = {
	[types.FETCH_THEMES](state, themes) {
		state.themes = themes
	}
}

export default {
    state,
    getters,
    actions,
    mutations
}
