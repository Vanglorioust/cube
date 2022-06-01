<template>
  
  <div class="About">
    <div><input v-model="prefix" placeholder="Filter prefix"></div>
    <select size="5" v-model="selected">
    <option v-for="name in filteredNames">{{ name }}</option>
  </select>

  <form @submit.prevent="registerProd(producto)">
      <label>Name: <input v-model="first"></label>
      <label>Serial: <input v-model="last"></label>

    <div class="buttons">
      <button class="btn btn-info btn-lg btn-block" @click="create">Create</button>
      <button class="btn btn-info btn-lg btn-block" @click="update">Update</button>
      <button class="btn btn-info btn-lg btn-block" @click="del">Delete</button>
      <button class="btn btn-info btn-lg btn-block" @click="cerrarSesion" a href="http://localhost:8080/register">Cerrar Sesion</button> 
    </div>
  </form>
    
  </div>

</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive([''])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}
</script>

<script>
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
export default {
  created(){
    this.ruta()
  },
  computed: {
    ...mapState(['token'])
  },
  methods: {
    async ruta(){
      try {
        const res = await fetch('https://jwt-cube-api.herokuapp.com/api/admin', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.token
          },
        })
        const resDB = await res.json()
        console.log(resDB)
      } catch (error) {
        console.log(error)
      }
    },
    ...mapActions(['obtenerToken','cerrarSesion'])
  },
  created(){
    this.ruta(),
    this.obtenerToken()
  }
}
</script>

<style>
* {
  font-size: inherit;
}

input {
  display: block;
  margin-bottom: 10px;
}

select {
  float: left;
  margin: 0 1em 1em 0;
  width: 14em;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style>