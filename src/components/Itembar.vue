<template>
    <div>
        <div class="logohead">
            <h1 class="aa">CS SHOP</h1>
        </div>
        <div class="topnav">
          
            <div class = "headbar">
                <!-- <router-link to="/point" active-class="active" tag="button" exact class="side-btn"> -->
                    <!-- <div>
                      
                      <b-button @click="Point" size="sm" class="mb-2">
                        <b-icon icon="wallet" aria-hidden="true"></b-icon> Point
                      </b-button>
                    </div> -->
                <!-- </router-link> -->
                <!-- <router-link to="/cart" active-class="active" tag="button" exact class="side-btn"> -->
                    <!-- <div>
                      <b-button @click="Cart" size="sm" class="mb-2">
                        <b-icon icon="cart3" aria-hidden="true"></b-icon> SHOPPING BAG
                      </b-button>
                    </div> -->
                <!-- </router-link> -->
                <!-- <router-link to="/profile" active-class="active" tag="button" exact class="side-btn"> -->
                    <!-- <div>
                      <b-button @click="Profile" size="sm" class="mb-2">
                        <b-icon icon="file-person" aria-hidden="true"></b-icon> PROFILE
                      </b-button>
                    </div> -->
                <!-- </router-link> -->
                <!-- <router-link to="/signup" active-class="active" tag="button" exact class="side-btn"> -->
                    <div>
                      <b-button @click="Signup" size="sm" class="mb-2">
                        <b-icon icon="key" aria-hidden="true"></b-icon> SIGN-UP
                      </b-button>
                    </div>
                <!-- </router-link> -->
            </div>
            <div class="login-container">
                <form action="/action_page.php">
                    <input class="username" type="text" placeholder="Username" name="username">
                    <input class="password" type="password" placeholder="Password" name="psw">
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    methods: {
      // Point() {
      //   this.$router.push('/Point')
      // },
      // Cart() {
      //   this.$router.push('/cart')
      // },
      // Profile() {
      //   this.$router.push('/Profile')
      // },
      Signup() {
        this.$router.push('/SignUp')
      },
    }
}
</script>

<style scoped>

* {box-sizing: border-box;}

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

.headbar .login-container {
  float: right;
}


.headbar input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  width: 150px; 
}


.headbar .login-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: rgb(0, 0, 0);
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.headbar .login-container button:hover {
  background: rgb(219, 9, 9);
}

@media screen and (max-width: 600px) {
  .headbar .login-container {
    float: none;
  }
  .headbar input[type=text], .headbar .login-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .headbar input[type=text] {
    border: 1px solid #ccc;
  }
}

.username{
    position: relative;
    right: 15px;
}

.password{
    position: relative;
    right: 5px;
}

.headbar button{
    position: relative;
    top: 5px;
    left: 1950px;
}

.login-container{
    position: relative;
    left: 630px;
    bottom: 46px;
}

.topnav{
    position: relative;
    top: 29px;
}
    
</style>