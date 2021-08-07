<template>
<div>
    <div class="logohead">
            <h1 class="aa">CS SHOP</h1>
            
    </div>
    <body>
        <div class="topnav">
            <router-link to="/">CS SHOP</router-link> 
            <!-- <router-link to="/Point">POINT</router-link> 
            <router-link to="/cart">SHOPPING BAG</router-link> 
            <router-link to="/Profile">PROFILE</router-link>  -->
            <router-link class="active" to="/SignUp">SIGN-UP</router-link> 
        </div>
    </body>
    
    

    <div class="body">
        <h3>Create CS Account</h3>
        

        <form @submit.prevent="signup" class="box">
            <div class="content">
                <label for="img">Profile</label>
                <input type="file" id="img" name="img" accept="image/*">
            </div> 

            <div class="content">
                <label for="username">Username</label>
                <input v-model="form.username" type="text" autocomplete=off placeholder="username">
            </div>


            <div class="content">
                <label for="email">Email</label>
                <input v-model="form.email" type="text" autocomplete=off placeholder="email">
            </div>

            <div class="content">
                <label for="password">Password</label>
                <input v-model="form.password" type="password" >
            </div>

            <div class="content">
                <label for="confirm-password">Confirm Password</label>
                <input v-model="form.confirmpassword" type="password" >
            </div>

            <div class="btn">
                <button type="submit">sign up</button>
            </div>

        </form>
        

    </div>

    <footer>
        <p>
            about us <br>
            <!-- ong007 <br>
            Blackplasma88 <br>
            nichanow <br> -->
            <a href="https://github.com/ong007">ong007</a> <br>
            <a href="https://github.com/Blackplasma88">Blackplasma88</a> <br>
            <a href="https://github.com/nichanow">nichanow</a> <br>
        </p>
        
        
    </footer>
 
    
</div>
</template>



<script>
//จำลองเก็บข้อมูล register

export default {
     data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
                confirmpassword: '',
            },
            
        }
    },
    methods:{
        async signup(){
            if (this.form.password === this.form.confirmpassword){
                // //let res = await AuthService.register(this.form)
                // let res = await AuthUser.dispatch('register', this.form)
                // if (res.success){
                //     this.$swal("Register Success", `Welcome ${res.user.username}`, "success")
                //     this.$router.push("/")
                // } else{
                //     this.$swal("Register Failed", res.message, "error")
                // } 
                console.log("signup")
            } else{
                
                console.log("fail")
                console.log(this.form.username)
                console.log(this.form.email)
                console.log(this.form.password)
                console.log(this.form.confirmpassword)
                    
            }
            this.clearForm()
        },
        // signup(){
        //     let payload = {
        //         username: this.form.username,
        //         email: this.form.email,
        //         password: this.form.password,
        //         comfirmpassword: this.form.comfirmpassword,
        //     }
        //     this.clearForm()
        //     console.log(this.form.username)
        //     console.log(this.form.email)
        //     console.log(this.form.password)
        //     console.log(this.form.comfirmpassword)
        // },
        clearForm(){
            this.form = {
                username: '',
                email: '',
                password: '',
                comfirmpassword: '',
            }
        }
    }
}
</script>



<style lang="scss" scoped>
.topnav{
    overflow: hidden;
    background-color: rgb(3, 3, 3);
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: rgb(199, 196, 196);
  color: black;
}
.topnav a.active {
  background-color: #194381;
  color: rgb(255, 255, 255);
}
.body{
    
    padding: 40px 90px 90px 90px;
    background-color: rgb(202, 202, 202);
}
.body h3{
    padding-top: 30px;
}

.box{
    width: 35%;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    padding: auto;
    text-align: left
}
.content{
    display: grid;
    grid-template-columns: 1fr 1fr
}
input{
    margin-bottom: 10px;
}

.btn{
    width: 30%;
    margin: 0px 150px;
    padding: auto;
    text-align: auto
}
.logohead{
    // background-color: black;
    // color: white;
    padding-bottom: 10px;
   
}
footer{
    // position: fixed;
    // left: 0;
    // bottom: 0;
    // padding-top: 160px;
    
    // width: 100%;
    // background-color: rgb(0, 0, 0);
    // color: white;
    // text-align: center;
    height: 110px;
    // padding-bottom: 10px;
    font-weight: 300;
    font-style: normal;
    background: #1b1b1b;
    color: rgb(197, 197, 197);
    position: relative;
    width: 100%;
    

}
footer p{
    text-align: left;
    margin-left: 20px;
    padding-top: 10px;
}

footer a{
    color: rgb(197, 197, 197);
}



</style>