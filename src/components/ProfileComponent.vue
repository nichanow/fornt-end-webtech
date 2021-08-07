<template>
  <div>
      <h1>CS SHOP</h1>
      <div class="topnav">
            <div class = "headbar">
                
                    <div>
                      <b-button @click="Point" size="sm" class="mb-2">
                        <b-icon icon="wallet" aria-hidden="true"></b-icon> Point
                      </b-button>
                    </div>

                    <div>
                      <b-button @click="history" size="sm" class="mb-2">
                        <b-icon icon="wallet" aria-hidden="true"></b-icon> History
                      </b-button>
                    </div>
                
                   
                
                    <div>
                      <b-button @click="Profile" size="sm" class="mb-2">
                        <b-icon icon="file-person" aria-hidden="true"></b-icon> PROFILE
                      </b-button>
                    </div>
                
            </div>

            <div class="body">
                <h3>Profile</h3>
                
                <div class="content">
                    <div class="picture">--แสดงรูปที่นี่--</div>
                    <label for="userame">Username :</label> <br>
                    <label for="email">Email :</label> <br>
                    <label for="point">Point :</label> <br>
                </div>
                
            </div>

            <footer></footer>
            
        </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.body{
    background-color: rgb(201, 201, 201);
    height: 450px;
}
footer{
    background-color: black;
    height: 100px;
}
h3{
    padding-top: 40px;
}
.content{
    padding: 30px;
}
label{
    padding-top: 30px;
}

</style>