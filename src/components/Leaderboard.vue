<template>
  <div>
    <h1>Select Period</h1>
    <div class="time">
      <table class="time1">
            <thead>
                <tr>
                <th>Start Date</th>
                <th>End Date</th>
              
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr>
                    <td><input type="date"></td>
                    <td><input type="date"></td>
                   
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>

    </div>
    
    <div>
        <table class="table2">
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Total Point</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(income, index) in income" :key="index" class="income"> -->
                <tr class="rankUser" v-for="(user, index) in usersData" :key="index" >
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.total_points }}</td>
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>
        <!-- <button @click="descending">มาก-น้อย</button>
        <button @click="ascending">น้อย-มาก</button> -->

    </div>
    
    
    
  </div>
</template>

<script>
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
         return {
             usersData: []
             }
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.usersData = UsersApi.getters.data.sort(function(a, b){return b.total_points - a.total_points})
        console.log(this.usersData)
        // let user = AuthUser.getters.user.user_data
        // this.historyPoint = user.points_usage_history_tables
    },
    methods:{
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