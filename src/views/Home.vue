<template>
  <div >
    <button @click="toHome">CS SHOP</button>
    <button @click="login">LOGIN</button>
    <button @click="register">Register</button>
    <homepage></homepage>
  </div>
</template>

<script>
import Homepage from '@/components/Homepage'
export default {
  components: {
    Homepage
  },
  methods:{
    toHome(){
      this.$router.push('/')
    },
    login(){
      this.$router.push('/login')
    },
    register(){
      this.$router.push('/register')
    }
  }
}
</script>
