<template>
  <!-- <div class="container">
    <div class="friend-card">
      <h1>Vichet Morm</h1>
      <p>Nice to meet you!</p>
    </div>
    <div class="friend-card">
      <h1>Vichet Morm</h1>
      <p>Nice to meet you!</p>
    </div>
  </div> -->
  <div class="container" >
    <div class="friend-card">
      <h1>{{friend.firstName}} {{friend.lastName}} </h1>
      <p> {{friend.comment}} </p>
    </div>
    
  </div>
</template>

<script>
export default{
  props:{
    friend:Object
  }
}
</script>


<style scoped>
.container {
  width: 50%;
  margin: 3rem auto;
  
}
.friend-card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 2rem;
  padding: 5px;
  border-radius: 25px;
}
</style>