<template>
<div>
    
    <head-bar-cus-page></head-bar-cus-page>
    <div class="table1">
        <h3>Receive Point</h3>
        <div class="totalPoint">points  {{ total_points }}</div>
        <footer></footer>

        </div>
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
                <tr class="reward" v-for="(it, index) in historyPoint" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ it.type }}</td>
                    <td>{{ it.prize }}</td>
                    <td>{{ it.points }}</td>
                    <td>{{ it.created_at }}</td>
                    
                    
                </tr>
                <!-- <tr v-for="(expense, index) in expense" :key="index" class = "expense"> -->
            
            </tbody>
        </table>
   
</div>
</template>

<script>
import HeadBarCusPage from '@/components/headbar/HeadBarCusPage'
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
         return {
             historyPoint: {},
             total_points:""
             }
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.historyPoint = UsersApi.getters.data[id-1].history_of_points_earned_tables
        this.total_points = UsersApi.getters.data[id-1].total_points
        
        
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
    components:{
        HeadBarCusPage
    },
    methods:{
        isAuthen(){
            return AuthUser.getters.isAuthen
        }
    }
}
</script>

<style scoped>
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
*{
    margin: 0;
    padding: 0;
    outline: 0;
}
.table1{
    margin-top: 20px;
}
 
table{
    margin-top: 50px;
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
th{
    background: #ba68ca;
    color: white;
    text-transform: uppercase;
}

th, td{
    padding: 10px 15px;

}
footer{
    height: 20px;
}

</style>