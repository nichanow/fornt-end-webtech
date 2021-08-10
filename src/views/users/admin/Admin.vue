<template>
  <div>
      <head-bar-admin-page></head-bar-admin-page>
    <div class="list_option">
      <div class="option">
        <img  src='@/assets/coin.jpg' >
        <button @click="leaderBoard" type="button" class="btn btn-outline-secondary">LEADERBOARD</button>
      </div>

      <div class="option">
          <img  src='@/assets/prize.jpg' >
          <button @click="prize" type="button" class="btn btn-outline-success">PRIZE</button>
        </div>
    </div>
  </div>
</template>

<script>
import HeadBarAdminPage from '@/components/headbar/HeadBarAdminPage'
import AuthUser from "@/store/AuthUser"

export default {
    components:{
        HeadBarAdminPage
    },
    mounted(){ 
        if(!this.isAuthen()){
            // this.$swal("Restricted Area", "You have no permission", "warning")
            alert("Restricted Area")
            this.$router.push('/')
        }else if(AuthUser.getters.user.role.name === "Authenticated"){
            alert("You is not admin")
            this.$router.push('/customer')
        }   
    },
    methods:{
        leaderBoard(){
            this.$router.push('/admin/leader-board')
            
        },
        prize(){
            this.$router.push('/admin/stock-prize')
        },
        logout(){
            AuthUser.dispatch('logout')
            this.$router.push('/')
        },
        isAuthen(){
            return AuthUser.getters.isAuthen
        } 
    }

}
</script>

<style lang="scss" scoped>
  .list_option{
      display: grid;
      grid-template-columns:1fr 1fr;
      position: relative;
      top: 130px;
      
  }

  .option img{
      width: 300px;
      height: 300px;
  }

  .list_option .btn-outline-success{
      position: relative;
      top: 190px;
      right: 180px;
  }

  .list_option .btn-outline-secondary{
      position: relative;
      top: 180px;
      right: 217px;
  }
.back{
    position: relative;
    left: 600px;
}

* {box-sizing: border-box;}

h1{
    margin-top: 30px;
  margin-bottom: 50px;
}
.headbar {
  overflow: hidden;
  background-color: #000000;
 
}

.headbar .icon{
  width: 20px;
  height: 20px;
  position: relative;
    left: 100px;
}
.headbar button {
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  background: none;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border: black;
}

.headbar button:hover {
  background-color: rgb(248, 248, 248);
  color: rgb(0, 0, 0);
}

.headbar button.active{
  background-color:rgb(134, 102, 102);
}
</style>