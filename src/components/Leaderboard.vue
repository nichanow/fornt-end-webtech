<template>
  <div>
    <h1>Select Period</h1>
    <div class="time">
      
      <div class="start">
        <label for="startDate">Start Date</label>
        <input type="date">
      </div>

      <div class="end">
        <label for="endDate">End Date</label>
        <input type="date">
      </div>
    </div>
    
    <div class="table1">
        <table>
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
.time{
  display: grid;
  grid-template-columns:1fr 1fr;
}
table{
  margin-left: auto;
  margin-right: auto;
}
</style>