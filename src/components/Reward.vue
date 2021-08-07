<template>
  <div>
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
export default {

}
</script>

<style>

</style>