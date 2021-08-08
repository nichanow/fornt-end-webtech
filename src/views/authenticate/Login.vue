<template>
  <div>
      <button @click="toHome">CS SHOP</button>
      <h1>LOG IN</h1>
      <form @submit.prevent="login"> 
          <div>
              <label for="emailOrUsername">Username </label>
              <input v-model="form.email" type="text" placeholder="email or Username " autocomplete="off">
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
import AuthUser from "@/store/AuthUser"
export default {
    data(){
        return{
            form:{ 
                email:"",
                password:""
            }
        }
    },
    methods:{
        async login(){
            let res = await AuthUser.dispatch('login', this.form)
            if(res.success){
                // this.$swal("Login Success", `Wellcom ${res.user.username}`, "success")
                if(res.user.user_data.level === "admin"){
                    this.$router.push('/admin') 
                }else{
                    this.$router.push('/customer') 
                }
            }else{
                // this.$swal("Login Failed", res.message, "error") 
            }
        },
        toHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>