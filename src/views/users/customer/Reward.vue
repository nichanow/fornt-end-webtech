<template>
  <div>
      <head-bar-cus-page></head-bar-cus-page>
   <button v-if="num_pages === 0" @click="history" class="history">History Point</button>
   <div v-if="num_pages === 0">
    <div class="totalPoint"> points {{ total_points }}</div>
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
                    <tr class="reward">
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        <td>10 Points</td>
                        
                    </tr>
                    <tr class="collect">
                    
                        <td>
                            <div v-if="check_day !== 1 && num_day == 1">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td>
                        <td>
                            <div v-if="check_day !== 1 && num_day == 2">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td>
                        <td>
                            <div v-if="check_day !== 1 && num_day == 3">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td><td>
                            <div v-if="check_day !== 1 && num_day == 4">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td><td>
                            <div v-if="check_day !== 1 && num_day == 5">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td><td>
                            <div v-if="check_day !== 1 && num_day == 6">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td><td>
                            <div v-if="check_day !== 1 && num_day == 7">
                                <button @click="getPoints">collect</button>
                            </div>
                        </td>
                    
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
                        <td >{{stock.item}}</td>
                        <td><img :src="'../assets/' + stock.picture"></td>
                        <td>{{stock.points}}</td>
                        <td>{{stock.amounts}}</td> 
                        <td><button @click="exchange(stock)">Exchange</button></td>
                    </tr>
                </tbody>
            </table>
            <footer class="footer2"></footer>
        </div>
        </div>
  </div>
</template>

<script>
import HeadBarCusPage from '@/components/headbar/HeadBarCusPage'
import StockItemsApi from '@/store/StockItemsApi'
import UsersApi from '@/store/UsersApi'
import HistoryApi from '@/store/HistoryApi'
import AuthUser from '@/store/AuthUser'
export default {
  data(){
        return{
            check_day:0,
            num_day:0,
            num_pages:0,
            stockItems: [],
            user:{},
            total_points:""
        }
    },
    async created(){

        await StockItemsApi.dispatch('fetchData')
        this.stockItems = StockItemsApi.getters.data
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.user =  UsersApi.getters.data[id-1]
        let day = this.dateDateNow()
        let num_day = this.getNumDate()
        if(num_day <= 28){
            num_day %= 7
            this.num_day = num_day
        }
        if(this.user.check_date === day){
            this.check_day = 1
        }
        this.total_points = AuthUser.getters.user.user_data.total_points
    },
    mounted(){ // ใช้ดักว่าถ้าไม่ได้ log in ห้ามเข้า
        if(!this.isAuthen()){
            alert("Restricted Area")
            this.$router.push('/')
        }else if(AuthUser.getters.user.role.name === "Admin"){
            alert("You is not customer")
            this.$router.push('/admin')
        }   
    },
    components: { 
        HeadBarCusPage
    },
    methods:{
        dateDateNow(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today =  yyyy + '-' + mm + '-' + dd
        var day = today
        return day
        },
        history(){
        this.$router.push('/customer/history-used-points')
        },
        getNumDate(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            today =   dd;
            return today
        },
        async getPoints(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            today =  yyyy + '-' + mm + '-' + dd
            this.user.total_points += 10
            if(this.user.check_date !== today){
                this.user.check_date = today
            }
            await UsersApi.dispatch('editDataInUser',this.user)
            let payload = {
                points: 10,
                prize: 0,
                type: "daily_reward",
                user: [this.user.id]
            }
            let res = await HistoryApi.dispatch('addDataGet',payload)
            if(res.success){
                this.$swal("Success", "success")
            }else{
                this.$swal("Failed", "error") 
            }
            this.$router.push('/customer/history-recived-points')
        },
        async exchange(stock){
            this.user.total_points -= stock.points
            await UsersApi.dispatch('editDataInUser',this.user)
            
            let payload = {
                image:"",
                item: stock.item,
                points_usage: stock.points,
                user: [this.user.id]
            }
            await HistoryApi.dispatch('addDataUse',payload)
            payload = {
                id:stock.id,
                item: stock.item,
                points: stock.points,
                amounts: stock.amounts
            }
            let res = await StockItemsApi.dispatch('editDataInStock',payload)
            this.$swal("Success", "success")
            this.$router.push('/customer/history-used-points')    
        },
        isAuthen(){
            return AuthUser.getters.isAuthen
        }
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