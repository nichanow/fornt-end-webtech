<template>
  <div>
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
            
        </div> 


        <div class="point">Point</div>
        <div class="table1">
            <h1>daily reward</h1>
            <table>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                    <tr class="reward">
                        <td>รางวัลที่ 1</td>
                        <td>รางวัลที่ 2</td>
                        <td>รางวัลที่ 3</td>
                        <td>รางวัลที่ 4</td>
                        <td>รางวัลที่ 5</td>
                        <td>รางวัลที่ 6</td>
                        <td>รางวัลที่ 7</td>
                        
                    </tr>
                    <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
                    <tr class="collect">
                        <td><button>collect</button></td>
                        <td><button>collect</button></td>
                        <td><button>collect</button></td>
                        <td><button>collect</button></td>
                        <td><button>collect</button></td>
                        <td><button>collect</button></td>
                        <td><button>collect</button></td>
                    </tr>
                </tbody>
            </table>

        </div>

       
        <div class="table2">
             <h1>Hot item reward</h1>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Item</th>
                        <th>Name</th>
                        <th>Point</th>
                        <th>Exchange</th>
                        
                        
                    </tr>
                </thead>

                <tbody>
                    <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                    <tr v-for="(stock, index) in stocks" :key="index" class="item">
                      <!-- <img: src="stock.picture">  -->
                        <td>{{stock.number}}</td>
                        <td><img :src="'../assets/' + stock.picture"></td>
                        <td>{{stock.name}}</td>
                        <td>{{stock.point}}</td>
                        <td><button @click="addStock">Exchange</button></td>
                  
                    </tr>
                    <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->

                </tbody>
            </table>
            <!-- <div>
              <div v-for="(stock, index) in stocks" :key="index">
                 <div>
                   {{stock.name}}
                 </div>
                 <div>
                   {{stock.number}}
                 </div>
                 <div>
                   {{stock.point}}
                 </div>
                 <div>
                   <img :src="`@/assets/${stock.picture}`">
                   <img :src="'../assets' + stock.picture">
                 </div>
              </div>

            </div> -->
          
        </div>

         

    
  </div>
</template>

<script>
import StockStore from '@/store/stock'
export default {
    data(){
      return {
        form: {
          picture: "",
          name: "",
          point: null,
          rewardDate: null,
          exchange: "",
        },
        stocks: []
      }
    },

    // data(){
    //     return {
    //       stocks: []
    //     }
    //   },
      created(){
        this.fetchStock()
      },
    methods: {
      fetchStock(){
        StockStore.dispatch("fetchStock")
        this.stocks = StockStore.getters.stock
        console.log(this.stocks[0].picture)
      },
      history() {
        this.$router.push('/userHistory')
      },
      Profile() {
        this.$router.push('/Profile')
      },
      Point() {
        this.$router.push('/Point')
      },

      addStock(){
        let payload = {
          picture: this.form.picture,
          point: this.form.point,
          rewardDate: this.form.rewardDate,
          exchange: this.form.exchange
        }
        console.log(payload)
        StockStore.dispatch('addStock', payload)
      }

      
    }
}
</script>

<style>

* {box-sizing: border-box;}

.table1{
    
    position: relative;
    top: 50px;

}
.table2{
    position: relative;
    top: 200px;
}
.point{
    font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #388edd;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    width: 8%;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    position: relative;
    
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