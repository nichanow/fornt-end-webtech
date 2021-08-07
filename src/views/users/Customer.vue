<template>
  <div >
      <button @click="logout">logout</button>
      <div v-if="num_pages === 0" >
        <div >
            <button @click="historyGet" type="button" >historyGet</button>
            <button @click="reward" type="button" >Reward</button>
            <button @click="profile" type="button" >profile</button>
            <homepage></homepage>
        </div>        
      </div>
    <div v-if="num_pages === 1">
        <get-points-history></get-points-history>
    </div>
    <div v-if="num_pages === 2">
        <reward></reward>
    </div>
    <div v-if="num_pages === 3">
        <profile></profile>
    </div>
    <button v-if="num_pages !== 0" @click="back">back</button>
  </div>
</template>

<script>
import Homepage from '@/components/Homepage'
import GetPointsHistory from '@/components/GetPointsHistory'
import Reward from '@/components/Reward'
import Profile from '@/components/Profile'
export default {
    data(){
        return{
            num_pages:0
        }
    },
    components:{
        Homepage,
        GetPointsHistory,
        Reward,
        Profile
    },
    methods:{
        historyGet(){
            this.num_pages = 1
        },
        reward(){
            this.num_pages = 2
        },
        profile(){
            this.num_pages = 3
        },
        back(){
            this.num_pages = 0
        },
        logout(){
            this.$router.push('/')
        }
    }
}
</script>