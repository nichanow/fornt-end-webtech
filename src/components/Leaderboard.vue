<template>
  <div>
     <div class = "headbar">
            <h1>ADMIN HOMEPAGE</h1>
            <div>
                <b-button @click="Logout" size="sm" class="mb-2">
                    <b-icon icon="key" aria-hidden="true"></b-icon> LOG-OUT
                </b-button>
            </div>
        </div>

    
  </div>
</template>

<script>
export default {
    methods: {
      Logout() {
        this.$router.push('/')
      }
    }
}
</script>

<style>

</style>