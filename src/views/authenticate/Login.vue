<template>
  <div class="loginpage">
        <h1>CS SHOP</h1>
        <div class="topnav">
            <div class = "headbar">
                <button @click="toHome">CS SHOP</button>
                <button @click="login" class="active">LOGIN</button>
                <button @click="register">Register</button>
            </div>
        </div>
       
      <div class="body">  
        <form @submit.prevent="login" class="box" method="POST"> 
            <h3>LOG IN</h3>
             
                <div>   
                    <label for="emailOrUsername">Username </label>
                    <input v-model="form.email" type="text" placeholder="email or username " autocomplete="off">
                </div>
                <div>
                    <label for="password">Password </label>
                    <input v-model="form.password" type="password" placeholder="password" autocomplete="off">
                </div>
                <div>
                <!-- <button class="loginbtn">Log in</button> -->
                    <input type="submit" value="login">
                </div>

        </form>

      </div>
      
     
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
                this.$swal("Login Success", `Welcome ${res.user.username}`, "success")

                if(res.user.role.name === "Admin"){
                    this.$router.push('/admin') 
                }else{
                    this.$router.push('/customer') 
                }
            }else{
                this.$swal("Login Failed", res.message, "error") 
            }
        },
        toHome(){
            this.$router.push('/')
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

h3{
    margin-top: 70px;
}

.body{
    background-image: url("../../assets/background-login.jpg");
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 701.35px;
    font-family: sans-serif;
    background-color: brown;
}
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
.box h3{
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: 700;
    
}
.box input[type = "text"], .box input[type = "password"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 3px solid #0367fd;
    padding: 14px 10px ;
    width: 220px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25px;
}
.box input[type = "text"]:focus, .box input[type = "password"]:focus{
   
    border-color: #ffc400ec;
}
.box input[type = "submit"]{
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 3px solid #ffc400ec;
    padding: 14px 10px ;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25px;
    cursor: pointer;
}
.box input[type = "submit"]:hover{
    background: #ffc400ec;
}

label{
    color: aliceblue;
}


</style>