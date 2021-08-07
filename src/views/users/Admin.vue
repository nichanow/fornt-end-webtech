<template>
  <div>
    <button @click="logout">logout</button>
    <h1>ADMIN HOMEPAGE</h1>
    <div v-if="num_pages === 0" class="list_option">
      <div class="option">
        <img  src='@/assets/coin.jpg' >
        <button @click="leaderBoard" type="button" class="btn btn-outline-secondary">LEADERBOARD</button>
      </div>

      <div class="option">
          <img  src='@/assets/prize.jpg' >
          <button @click="prize" type="button" class="btn btn-outline-success">PRIZE</button>
        </div>
    </div>

    <div v-if="num_pages === 1">
        <leader-board></leader-board>
    </div>
    <div v-if="num_pages === 2">
        <prize></prize>
    </div>
    <button v-if="num_pages !== 0" @click="back" class="back">back</button>
  </div>
</template>

<script>
import LeaderBoard from '@/components/Leaderboard'
import Prize from '@/components/Prize'
export default {
    data(){
        return{
            num_pages:0
        }
    },
    components:{
        LeaderBoard,
        Prize
    },
    methods:{
        leaderBoard(){
            this.num_pages = 1
        },
        prize(){
            this.num_pages = 2
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

<style >
  .list_option{
      display: grid;
      grid-template-columns:1fr 1fr;
      position: relative;
      top: 230px;
  }

  .option img{
      width: 300px;
      height: 300px;
  }

  .list_option .btn-outline-success{
      position: relative;
      top: 190px;
      right: 180px;
  }

  .list_option .btn-outline-secondary{
      position: relative;
      top: 180px;
      right: 217px;
  }
.back{
    position: relative;
    left: 600px;
}
</style>