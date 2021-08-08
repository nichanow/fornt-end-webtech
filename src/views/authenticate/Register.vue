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
import AuthUser from "@/store/AuthUser"
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
            let res = await AuthUser.dispatch('register', this.form)
            if(res.success){
                // this.$swal("Register success", `Welcom ${res.user.username}`,"success")
                if(res.user.user_data.level === "admin"){
                    this.$router.push('/admin') 
                }else{
                    this.$router.push('/customer') 
                }
            }else{
                // this.$swal("Register failed", res.message,"error")
            }
        },
        toHome(){
            this.$router.push('/')
        }
    }

}
</script>
