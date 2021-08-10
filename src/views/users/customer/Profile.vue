<template>
  <div>
    <head-bar-cus-page></head-bar-cus-page>
    <body>

      <div class="body">
        <div class="box">
          <div>
            <label class="topic">Fullname :</label>
            <label for="fullname" class="sentent" >{{ profile.name }}</label> <br>
          </div>
        
          <div>
            <label class="topic">Email :</label>
            <label for="email" class="sentent">{{ profile.username.email }}</label> <br>
          </div>

          <div>
            <label class="topic">Username :</label>
            <label for="username" class="sentent">{{ profile.username.username }}</label> <br>
          </div>
          
          <div>
            <label class="topic">Point :</label>
            <label for="point" class="sentent">{{ profile.total_points }}</label> <br>
          </div>
        </div>
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
.box{

    width: 300px;
    padding: 30px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
}
.box .topic{
    color: rgb(246, 250, 209);
    text-transform: uppercase;
    font-weight: 700;
    
}
.box .sentent{
   color: rgb(255, 255, 255);
    
    font-weight: 500;
}
.body{
    background-color: rgb(99, 99, 99);
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 701.35px;
    font-family: sans-serif;
   
}
</style>

