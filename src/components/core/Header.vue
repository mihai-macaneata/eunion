<template>
    <div>
        <div class="header" v-if="!content">
            <!-- <img id="searchImg" src="/images/background/search.svg" alt=""> -->
            <div></div>
            <img style="width: 550px" :src="`/images/background/${logoSrc}.svg`" alt="logo">
        </div>
        <div class="header" v-else>
            <div></div>
                <router-link style="z-index: 1" :to="{name: 'Home'}">
                    <img class="page-logo" src="/images/background/logo-page.svg" alt="">
                </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        logoVariant: String,
        content: Boolean,
    },
    computed: {
        logoSrc(){
            if(!this.logoVariant) {
                return 'logo_white'
            } else {
                return this.logoVariant
            }
        },
    }
}
</script>
<style lang="scss">
#searchImg {
    width: 300px;
}

.header {
    position: absolute;
    width: 100%;
    height: 115px;
    display: flex;
    justify-content: space-between;
    top:0;
    align-items: center;
    @media (max-width: 700px) {
        padding: 5px;
    }

    img {
      @media (max-width: 700px) {
          width: 100%;
          margin-top: .5rem;
      }
      z-index: 1;
    }
    .page-logo {
        width: 750px;
    }
}

.content-page {

    h3 {
        font-size: 1.4rem!important;
    }
    h2 {
        font-size: 1.6rem!important;
    }
}
</style>


