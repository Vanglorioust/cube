import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async login({ commit }, usuario) {
      try {
        const res = await fetch('http://localhost:3000/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const usuarioDB = await res.json()
        console.log(usuarioDB.data.token)
        commit('setToken', usuarioDB.data.token)
        localStorage.setItem('token', usuarioDB.data.token)
      } catch (error) {
        console.log('error: ', error)
        this.mensaje = "Usuario o contraseña errados"
      }
    },
    async register({ commit }, usuario) {
      try {
        const res = await fetch('http://localhost:3000/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const usuarioDB = await res.json()
        commit('setToken', usuarioDB.data.token)
        localStorage.setItem('token', usuarioDB.data.token)
      } catch (error) {
        console.log('error: ', error)
      }
      location.reload()   
    },
    async registerProd({ commit }, producto) {
      try {
        const res = await fetch('http://localhost:3000/api/user/registerProd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(producto)
        })
        const usuarioDB = await res.json()
        commit('setToken', usuarioDB.data.token)
        localStorage.setItem('token', usuarioDB.data.token)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    obtenerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    cerrarSesion({ commit }) {
      commit('setToken', null)
      localStorage.removeItem('token')
      location.reload()   
  }
  }, mnodules:{

  }
})
