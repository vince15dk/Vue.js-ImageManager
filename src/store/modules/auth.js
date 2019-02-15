import api from '../../api/imgur'

const state = {
    token : null
};

const getters = {
    isLoggedIn: (state) => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    logout: ({ commit }) => {
        commit('setToken', null)
    }
};

const mutations = {
    setToken: (state, token)=>{
        state.token = token;      
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

// https://api.imgur.com/oauth2/authorize?
// client_id=YOUR_CLIENT_ID
// &response_type=token
// &state=APPLICATION_STATE