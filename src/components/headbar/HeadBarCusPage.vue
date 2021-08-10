<template>
  <div>
      <h1>CS SHOP</h1>
        <div class="topnav">
            <div class = "headbar">
                    <button @click="logout">LOGOUT</button>
                    <button @click="historyGet" type="button" >Receive Point</button>
                    <button @click="reward" type="button" >Reward</button>
                    <button @click="profile" type="button" >Profile</button>
            </div>
         </div>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser"

export default {
    methods:{
        historyGet(){
            this.$router.push('/customer/history-recived-points')
        },
        reward(){
            this.$router.push('/customer/reward')
        },
        profile(){
            this.$router.push('/customer/profile')
        },
        logout(){
            AuthUser.dispatch('logout')
            this.$router.push('/')
        },
    }
}
</script>

<style>
h1{
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