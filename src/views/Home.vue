<template>
  <div class="home">
    <!-- <core-menu :toggleable="false" :background="'img'" :transition="'slide-fade'"></core-menu> -->
    <Menu v-if="!isMobile" :toggleable="false" :background="'img'" :transition="'slide-fade'"></Menu>
    <MenuMobile v-if="isMobile" :toggleable="false" :background="'img'" :transition="'fade'"></MenuMobile>
    
    <div class="container-fluid">
    </div>
  </div>
</template>

<script>
import Menu from '@/components/core/Menu'
import MenuMobile from '@/components/core/MenuMobile'

  export default {
    components: {
      Menu, MenuMobile
    },
    created() {
      if (window.matchMedia("(max-width: 700px)").matches) {
        this.isMobile = true
      } else {
        /* The viewport is greater than 700 pixels wide */
      }
    },
    data() {
      return {
        isMobile: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    @media (min-width: 700px) { 
      height: 100vh;
      overflow: hidden;
    }
    min-height: 100vh;
      color: #fff;
  }

</style>