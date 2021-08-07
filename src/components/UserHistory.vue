<template>
  <div>
  
    <div class="topnav">
            <div class = "headbar">
          
                    <div>
                      <b-button @click="point" size="sm" class="mb-2">
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
          </div> 

          <div class="table1">
            <h1>Receive Point</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Type</th>
                        <th>Prize</th>
                        <th>Point</th>
                        <th>Date</th>
                          
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                    <tr class="reward">
                        <td>1</td>
                        <td>Shopping</td>
                        <td>400</td>
                        <td>+20</td>
                        <td>7/8/2564</td>
                      
                        
                    </tr>
                    <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
                
                </tbody>
            </table>

        </div>

       
        <div class="table2">
             <h1>Purchase Point</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Picture Item</th>
                        <th>Name</th>
                        <th>Point</th>
                        <th>Date</th>
                        
                        
                    </tr>
                </thead>

                <tbody>
                    <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                    <tr class="item">
                        <td>1</td>
                        <td>รูปรางวัล</td>
                        <td>IphoneX</td>
                        <td>-500</td>
                        <td>7/8/2564</td>
                    
                        
                    </tr>
                    <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->

                </tbody>
            </table>
            

        </div>
  </div>
</template>

<script>
export default {
      point() {
        this.$router.push('/point')
      },
      
      Profile() {
        this.$router.push('/Profile')
      },
     
}
</script>

<style>
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
/* 
.headbar button:active {
  background-color: #194381;
  color: rgb(255, 255, 255);
} */

.headbar button:hover {
  background-color: rgb(248, 248, 248);
  color: rgb(0, 0, 0);
}




/* @media screen and (max-width: 100px) {

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
} */



.headbar button{
    position: relative;
    top: 5px;
    /* right: 1200px; */
    margin-left: auto;
    margin-right: auto;
}



.topnav{
    position: relative;
    top: 29px;
    
}
</style>