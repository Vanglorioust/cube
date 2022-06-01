<template>
  <div class="Home"> 
    <section class="vh-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 text-black">

            <div class="px-5 ms-xl-4">
              <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
              <span class="h1 fw-bold mb-0">IOTCube</span>
            </div>

            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

              <form @submit.prevent="login(usuario)" style="width: 23rem;">

                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>

                <div class="form-outline mb-4">
                  <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="usuario.email" />
                  <label class="form-label" for="form2Example18"> Email </label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="Contraseña" class="form-control form-control-lg" v-model="usuario.password"/>
                  <label class="form-label" for="Contraseña"> Password </label>
                </div>

                <div class="pt-1 mb-4">
                  <button class="btn btn-info btn-lg btn-block" type="submit"  >Login</button>
                </div>
    
                <p>Don't have an account? <a href="http://localhost:8080/register" class="link-info" router-link to="/register">Register here</a></p>

              </form>

            </div>
            

          </div>
          <div class="col-sm-6 px-0 d-none d-sm-block">
            <img src="https://iotcube.com/wp-content/themes/iotcube/images/bg-hexagon.jpg"
              alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
          </div>
        </div>
      </div>
    </section> 
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      usuario: {
        email: 'prueba4@prueba.com',
        password: '123456'
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>
