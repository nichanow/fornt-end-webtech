<template>
  <div>
   <button v-if="num_pages === 0" @click="history" class="history">History Point</button>
   <div v-if="num_pages === 0">
    <div class="totalPoint">Total point</div>
      <div class="table1">
            <h1>Daily reward</h1>
            <table class="daily">
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
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        
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

       <footer></footer>
        <div class="table2">
             <h1>Hot item reward</h1>
            <table class="hotitem">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Item</th>
                        <th>Image</th>
                        <th>Point</th>
                        <th>Total</th>
                        <th>Exchange</th>
                        
                        
                    </tr>
                </thead>

                <tbody>
                    <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                    <tr v-for="(stock, index) in stockItems" :key="index" class="item">
                      <!-- <img: src="stock.picture">  -->
                      <td>{{ index + 1 }}</td>
                        <td>{{stock.item}}</td>
                        <td><img :src="'../assets/' + stock.picture"></td>
                        <td>{{stock.points}}</td>
                        <td>{{stock.amounts}}</td> 
                        <td><button @click="addStock">Exchange</button></td>
                  
                    </tr>
                    <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->

                </tbody>
            </table>
            <footer class="footer2"></footer>
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

        <div v-if="num_pages === 1"><used-points-history></used-points-history></div>
  </div>
</template>

<script>
import UsedPointsHistory from '@/components/UsedPointsHistory'
import StockItemsApi from '@/store/StockItemsApi'
// import AuthUser from '@/store/AuthUser'
export default {
  data(){
  
        return{
            num_pages:0,
            stockItems: []
        }
    },
    async created(){
        await StockItemsApi.dispatch('fetchData')
        this.stockItems = StockItemsApi.getters.data
        // let user = AuthUser.getters.user.user_data
        // this.historyPoint = user.points_usage_history_tables
    },
    components: { UsedPointsHistory },
    methods:{
    history(){
      this.num_pages = 1
    },
  }
}
</script>

<style scoped>
.history{
  margin-left: 885px;
  margin-top: 50px;

}
.footer2{
  height: 100px;
}
.totalPoint{
    margin-left: auto;
    margin-right: auto;
    font-family: 'Fira Code', 'Fira Sans', sans-serif;
    background-color: #388edd;
    color: #FFF;
    font-size: 20px;
    font-weight: 900;
    padding: 5px 10px;
    width: 15%;
    text-align: center;
    border-radius: 8px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}
.table1{
    margin-top: 20px;
}


.daily{
  margin-top: 110px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    box-shadow: 0 12px 5px rgba(32, 32, 32, .3);
    position: absolute;
    /* z-index: 2; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    background: white;
    text-align: center;
}
.daily th{
    background: #6e790e;
    color: white;
    text-transform: uppercase;
}

.daily th, .daily td{
    padding: 10px 15px;

}
footer{
  height: 200px;
}

.hotitem{
    margin-top: 310px;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    box-shadow: 0 12px 5px rgba(32, 32, 32, .3);
    position: absolute;
    /* z-index: 2; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    background: white;
    text-align: center;
}
.hotitem th{
    background: #ca6f68;
    color: white;
    text-transform: uppercase;
}

.hotitem th, .hotitem td{
    padding: 10px 15px;

}
.reward{
  font-size: 24px;
}




</style>