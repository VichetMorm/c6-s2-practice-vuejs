<template>
  <friend-nav></friend-nav>
  <friend-form></friend-form>
  <friend-card v-for="friend of friends" :key="friend" :friend='friend'></friend-card>
</template>

<script>
export default{
data(){
  return{
    friends:[
      {firstName:'vichet',lastName:'morm',comment:'you are the best for this year!'},
      {firstName:'nga',lastName:'houen',comment:'you are the best for this year!'},
      {firstName:'tim',lastName:'bin',comment:'you are the best for this year!'},
    ]
  }
}
}
</script>

<style>

</style>
