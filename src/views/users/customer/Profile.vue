<template>
  <div>
    <head-bar-cus-page></head-bar-cus-page>
    <body>
      <div class="card">
        <div class="upper">
        </div>
        <div class="lower">

        </div>
      </div>

      <div>
        <label>Fullname :</label>
        <label for="fullname" >{{ profile.name }}</label> <br>
      </div>
    
      <div>
        <label>Email :</label>
        <label for="email">{{ profile.username.email }}</label> <br>
      </div>

      <div>
        <label>Username :</label>
        <label for="username">{{ profile.username.username }}</label> <br>
      </div>
      
      <div>
        <label>Point :</label>
        <label for="point">{{ profile.total_points }}</label> <br>
      </div>
    </body>

    
    
    
    
  </div>
</template>

<script>
import HeadBarCusPage from '@/components/headbar/HeadBarCusPage'
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
      return {
         profile:{}
      }
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.profile = UsersApi.getters.data[id-1]
    },
    mounted(){ // ใช้ดักว่าถ้าไม่ได้ log in ห้ามเข้า
        if(!this.isAuthen()){
            alert("Restricted Area")
            this.$router.push('/')
        }else if(AuthUser.getters.user.role.name === "Admin"){
            alert("You is not customer")
            this.$router.push('/admin')
        }   
    },
    components:{
        HeadBarCusPage
    },
    methods:{
        isAuthen(){
            return AuthUser.getters.isAuthen
        }
    }
}
</script>

<style lang="scss" scoped>
.image{
  width: 30%;
  height: 50%;
}
</style>

