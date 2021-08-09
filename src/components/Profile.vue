<template>
  <div>
    <!-- <div>
      <img src="" alt="">
    </div> -->
    <!-- <img :src="api_endpoint + profile.profile_pic.url" class="image"> -->
    <body>
      <div class="card">
        <div class="upper">

        </div>
        <div class="lower">

        </div>
      </div>

      <div>
        <label>Fullname :</label>
        <label for="fullname" >{{ profile.name }}</label> <br>
      </div>
    
      <div>
        <label>Email :</label>
        <label for="email">{{ profile.username.email }}</label> <br>
      </div>

      <div>
        <label>Username :</label>
        <label for="username">{{ profile.username.username }}</label> <br>
      </div>
      
      <div>
        <label>Point :</label>
        <label for="point">{{ profile.total_points }}</label> <br>
      </div>
    </body>

    
    
    
    
  </div>
</template>

<script>
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
      return {
         profile:{},
         api_endpoint: process.env.VUE_APP_POKEDEX_ENDPOINT || "http://localhost:1337"
      }
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.profile = UsersApi.getters.data[id-1]
        console.log(this.profile)
        // let user = AuthUser.getters.user.user_data
        // this.historyPoint = user.points_usage_history_tables
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
.image{
  width: 30%;
  height: 50%;
}
</style>

