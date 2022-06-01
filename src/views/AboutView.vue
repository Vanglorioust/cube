<template>
  <div class="About">
    <div class="col-sm-6 px-0 d-none d-sm-block">
            <img src="@/assets/Cube.png"
              alt="about image"  style="object-fit: fill; object-position: center;">
    </div>
    <h1>IOTCube</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
    }
  },
  created(){
    this.ruta()
  }
}
</script>