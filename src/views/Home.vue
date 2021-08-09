<template>
  <div >
    <h1>CS SHOP</h1>
    <div class="topnav">
      <div class = "headbar">
        <button @click="toHome" class="active">HOME</button>
        <button @click="login">LOGIN</button>
        <button @click="register">Register</button>
      </div>
    </div>
    <homepage></homepage>
  </div>
</template>

<script>
import Homepage from '@/components/Homepage'
export default {
  components: {
    Homepage
  },
  methods:{
    toHome(){
      this.$router.push('/')
    },
    login(){
      this.$router.push('/login')
    },
    register(){
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>

* {box-sizing: border-box;}

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