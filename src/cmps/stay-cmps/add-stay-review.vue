<template>
<!-- todo -->
<!-- addreview functionality -->
<!-- name & date -->
<section class="add-review flex column">

    <h2>add review</h2>
    <div class="add-review-header flex ">
        <img src="~@/assets/images/review-avatar.png" alt="" class="host-img">
        <div class="review-date-name">
            <h3>demo name</h3>
            <h4>demo date</h4>
        </div>
    </div>
    <add-review-ctgs />
    
    <div class="add-review-text">   
        <textarea type="text" name="txt" autocomplete="off" placeholder="Write your opinion about this stay..."></textarea>
        <button class="add-review-btn clean-btn" @click="addReview()"> send </button>
    </div>
    
</section>
</template>

<script>

import addReviewCtgs from "@/cmps/stay-cmps/add-review-ctgs.vue";


export default {
    name: "addStayReview",
    components: {
    addReviewCtgs
    },

    methods: {
       addReview(){
           console.log('review added')
       }
    }
}
</script>

<style>


</style>