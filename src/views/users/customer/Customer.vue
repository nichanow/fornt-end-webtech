<template>
  <div >
      <head-bar-cus-page></head-bar-cus-page>
      <homepage></homepage>
  </div>

</template>

<script>
import HeadBarCusPage from '@/components/headbar/HeadBarCusPage'
import Homepage from '@/components/Homepage'
import AuthUser from '@/store/AuthUser'
 

export default {
    components:{
        HeadBarCusPage,
        Homepage
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
    methods:{
        isAuthen(){
            return AuthUser.getters.isAuthen
        } 
    }
}
</script>

<style scoped>

</style>