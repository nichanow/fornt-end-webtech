<template>
  <div>
    <!-- <div>
      <img src="" alt="">
    </div> -->
    <label for="fullname" >{{ profile.name }}</label> <br>
    <label for="email">{{ profile.username.email }}</label> <br>
    <label for="username">{{ profile.username.username }}</label> <br>
    <label for="point">{{ profile.total_points }}</label> <br>
    
  </div>
</template>

<script>
import UsersApi from '@/store/UsersApi'
import AuthUser from '@/store/AuthUser'
export default {
    data(){
      return {
         profile:{},
      }
    },
    async created(){
        let id = AuthUser.getters.user.id
        await UsersApi.dispatch('fetchData')
        this.profile = UsersApi.getters.data[id-1]
        // let user = AuthUser.getters.user.user_data
        // this.historyPoint = user.points_usage_history_tables
    },
    methods:{

    }
}
</script>

<style>

</style>