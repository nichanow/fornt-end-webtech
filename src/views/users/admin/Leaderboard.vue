<template>
  <div>
      <head-bar-admin-page></head-bar-admin-page>
    <h1>Select Period</h1>
    <button @click="total_p">total points</button>
    <button @click="get_p">get points</button>
    <button @click="used_p">used points</button>
    <div class="time">
      <table class="time1">
            <thead>
                <tr>
                <th>Start Date</th>
               
              
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr>
                    <td><input type="date" v-model="date_start"></td>
                    
                   
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>

    </div>
    
    <div>
        <table class="table2" v-if="check_table === 0">
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Total Point</th>
                </tr>
            </thead>
            <tbody>
                <tr class="rankUser" v-for="(user, index) in usersData" :key="index" >
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.total_points }}</td>
                </tr>
            
            </tbody>
        </table>
        <table class="table2" v-if="check_table === 1">
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Total Point</th>
                </tr>
            </thead>
            <tbody>
                <tr class="rankUser" v-for="(data, index) in his_show_data" :key="index" >
                    <td>{{ index + 1 }}</td>
                    <td>{{ data[0] }}</td>
                    <td>{{ data[1] }}</td>
                 </tr>
            
            </tbody>
        </table>
        <table class="table2" v-if="check_table === 2">
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Total Point</th>
                </tr>
            </thead>
            <tbody>
                <tr class="rankUser" v-for="(data, index) in his_show_data" :key="index" >
                    <td>{{ index + 1 }}</td>
                    <td>{{ data[0] }}</td>
                    <td>{{ data[1] }}</td>
                 </tr>
            
            </tbody>
        </table>
        <!-- <button @click="descending">มาก-น้อย</button>
        <button @click="ascending">น้อย-มาก</button> -->

    </div>
    
    
    
  </div>
</template>

<script>
import HeadBarAdminPage from '@/components/headbar/HeadBarAdminPage'
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
import HistoryApi from '@/store/HistoryApi'
export default {
    data(){
         return {
             usersData: [],
             his_get_data:[],
             his_show_data:[],
             his_show_name:[],
             date_start:"",
             date_end:"",
             check_table:0
             }
    },
    components:{
        HeadBarAdminPage
      
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.usersData = UsersApi.getters.data.sort(function(a, b){return b.total_points - a.total_points})

    },
    mounted(){ // ใช้ดักว่าถ้าไม่ได้ log in ห้ามเข้า
        if(!this.isAuthen()){
            alert("Restricted Area")
            this.$router.push('/')
        }else if(AuthUser.getters.user.role.name === "Authenticated"){
            alert("You is not admin")
            this.$router.push('/customer')
        }   
    },
    methods:{
        isAuthen(){
            return AuthUser.getters.isAuthen
        },
        sortData(check){
            let arr = []
            let tmp1 = []
            if(check === "get"){
                for( let data in this.his_get_data){
                    if(this.his_get_data[data].created_at.substring(0,10) >= this.date_start){
                        if( tmp1.includes(this.his_get_data[data].user.name)){
                        arr[this.his_get_data[data].user.name] += this.his_get_data[data].points
                         }else{
                        arr[this.his_get_data[data].user.name] = this.his_get_data[data].points
                            tmp1.push(this.his_get_data[data].user.name)
                        }  
                    } 
                }
            }else if(check === "use"){ 
                for( let data in this.his_get_data){
                    if(this.his_get_data[data].created_at.substring(0,10) >= this.date_start){
                        if( tmp1.includes(this.his_get_data[data].user.name)){
                            arr[this.his_get_data[data].user.name] += this.his_get_data[data].points_usage
                        }else{
                             arr[this.his_get_data[data].user.name] = this.his_get_data[data].points_usage
                            tmp1.push(this.his_get_data[data].user.name)
                        }  
                    }
                }
            }
            let tmp2 = []
            for(let i=0;i<tmp1.length;i++){ 
                tmp2[i] = [tmp1[i] ,arr[tmp1[i]]]
            }
            this.his_show_data = tmp2
        },
        total_p(){
            this.check_table = 0
        },
        async get_p(){
            await HistoryApi.dispatch('fetchDataGet')
            this.his_get_data = HistoryApi.getters.data
            this.sortData("get")
            this.check_table = 1
        },
        async used_p(){
            await HistoryApi.dispatch('fetchDataUse')
            this.his_get_data = HistoryApi.getters.data
            this.sortData("use")
            this.check_table = 2
        }
      // descending(){
      //   this.usersData.sort(function(a, b){return b.total_points - a.total_points})
      // },
      // ascending(){
      //   this.usersData.sort(function(a, b){return a.total_points - b.total_points})
      // }
    }
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    outline: 0;
}

.table2{
    margin-top: 200px;
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
.table2 th{
    background: #196b39;
    color: white;
    text-transform: uppercase;
}

.table2 th, .table2 td{
    padding: 10px 15px;

}


.time1{
    /* margin-bottom: 600px; */
    
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
.time1 th{
    background: #93dfb0;
    color: rgb(6, 88, 61);
    text-transform: uppercase;
}

.time1 th, .time1 td{
    padding: 15px 15px;

}
.time1 td{
  
  width: 30%;
}
footer{
    height: 20px;
}

</style>