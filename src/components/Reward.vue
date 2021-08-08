<template>
  <div>
   <button v-if="num_pages === 0" @click="history" class="history">History Point</button>
   <div v-if="num_pages === 0">
    <div class="totalPoint"> point</div>
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
.totalPoint{
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
}

table{
    margin-left: auto;
    margin-right: auto;
}


</style>