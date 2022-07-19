<template>
    <div class="container">
        <div class="friend-form">
            <input type="text" placeholder="First Name" class="input-group">
            <input type="text" placeholder="Last Name" class="input-group">
            <input type="text" placeholder="Comment" class="input-group">
            <button class="input-group btn-add">ADD</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>
    .container{
            width: 50%;
            margin: 3rem auto ;
        }
        .friend-form{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .input-group{
            width: 90%;
            height: 5vh;
            margin: 5px;
            border-radius: 5px;
        }
        .btn-add{
            background: rgb(161, 142, 142);
            border: navajowhite;
        }
</style>