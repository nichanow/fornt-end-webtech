<template>
    <div>
        <button @click="toHome">CS SHOP</button>
        <h1>Register page</h1>
        <form @submit.prevent="register"> 
          <div>
              <label for="username">User Name</label>
              <input v-model="form.username" type="text" placeholder="User Name" autocomplete="off">
          </div>

          <div>
              <label for="email">Email </label>
              <input v-model="form.email" type="text" placeholder="email" autocomplete="off">
          </div>

          <div>
              <label for="password">Password </label>
              <input v-model="form.password" type="password" placeholder="password" autocomplete="off">
          </div>

          <div>
              <button type="submit">Register</button>
          </div>
      </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                username:"",
                email:"",
                password:""
            }
        }
    },
    methods:{
        async register(){
           
        },
        toHome(){
            this.$router.push('/')
        }
    }

}
</script>
