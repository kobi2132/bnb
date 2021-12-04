<template>
  <div class="add-review-ctgs">
        <div class="add-review-ctg">
            <label for="Cleanliness">Cleanliness</label>
                <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Cleanliness}" class="fa fa-star" @click="changeColor(num, 'Cleanliness')"></span>
        </div>
        <div class="add-review-ctg">
            <label for="Communication">Communication</label>
                <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Communication}" class="fa fa-star" @click="changeColor(num, 'Communication')"></span>
        </div>
        <div class="add-review-ctg">
            <label for="CheckIn">Check-in</label>
                <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=CheckIn}" class="fa fa-star" @click="changeColor(num, 'CheckIn')"></span>
        </div>
        <div class="add-review-ctg">
            <label for="Accuracy">Accuracy</label>
                <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Accuracy}" class="fa fa-star" @click="changeColor(num, 'Accuracy')"></span>
        </div>
        <div class="add-review-ctg">
            <label for="Location">Location</label>
                <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Location}" class="fa fa-star" @click="changeColor(num, 'Location')"></span>
        </div>
        <div class="add-review-ctg">
            <label for="Accessibility">Accessibility</label>
                <span v-for="(num, idx) in 5" :key="idx" :class="{checked:num<=Accessibility}" class="fa fa-star" @click="changeColor(num, 'Accessibility')"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "addReviewCtgs",
    data(){
        return {
            rate: 3,
            Cleanliness: 1,
            Communication:3,
            CheckIn:5,
            Accuracy:1,
            Location:2,
            Accessibility:4
        }   
    },
    methods: {
        
        changeColor(num, type){
            this[type] = num
        }
    }
}
</script>

<style>

</style>