<template>
  <div>
    <Carousel v-model="val" loop>
      <CarouselItem>
        <div>1</div>
      </CarouselItem>
      <CarouselItem>
        <div>2</div>
      </CarouselItem>
    </Carousel>

  </div>



</template>
<script>

  export default {
    data () {
      return {
        val: 0
      }
    }

  }


</script>
<style>

</style>
