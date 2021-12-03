<template>
<section class="add-review flex column">

    <h2>add review</h2>
    <div class="add-review-header flex ">
        <img src="~@/assets/images/review-avatar.png"
 alt="" class="host-img">
        <!-- img not rendering -->
        <div class="review-date-name">
            <h3>name</h3>
            <h4>date</h4>
        </div>
    </div>
    <add-review-ctgs />
    
    <div class="add-review-text">   
        <textarea type="text" name="txt" autocomplete="off" placeholder="Write your opinion about this stay..."></textarea>
        <button> send </button>
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
        // changeColor(num){
        //     console.log('hello change color', num)
        //     this.rate = num
        // }
    }
}
</script>

<style>


</style>