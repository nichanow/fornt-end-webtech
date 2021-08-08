<template>
    <div>
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
                    <tr class="item" v-for="(it, index) in historyPoint" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ it.image[0] }}</td>
                        <td>{{ it.item }}</td>
                        <td>{{ it.points_usage }}</td>
                        <td>{{ it.created_at }}</td>
                    
                        
                    </tr>
                    <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
                    

                </tbody>
            </table>
            

        </div>
    </div>
</template>

<script>
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
         return {
             historyPoint: []
             }
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.historyPoint = UsersApi.getters.data[id-1].points_usage_history_tables
        // let user = AuthUser.getters.user.user_data
        // this.historyPoint = user.points_usage_history_tables
    },
    methods:{

    }
}
</script>

<style scoped>
table{
    margin-left: auto;
    margin-right: auto;
}
</style>