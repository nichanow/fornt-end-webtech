<template>
  <div>
      <button @click="toHome">CS SHOP</button>
      <h1>LOG IN</h1>
      <form @submit.prevent="login"> 
          <div>
              <label for="emailOrUsername">Username </label>
              <input v-model="form.emailOrUsername" type="text" placeholder="email or Username " autocomplete="off">
          </div>
          <div>
              <label for="password">Password </label>
              <input v-model="form.password" type="password" placeholder="password" autocomplete="off">
          </div>
          <div>
              <button>Log in</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{ 
                emailOrUsername:"",
                password:""
            }
        }
    },
    methods:{
        async login(){
            
        },
        toHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>