<template>
    <div>
        <div class="header" v-if="!content">
            <!-- <img id="searchImg" src="/images/background/search.svg" alt=""> -->
            <div></div>
            <img :src="`/images/background/${logoSrc}.png`" alt="logo">
        </div>
        <div class="header" v-else>
            <div></div>
                <router-link style="width: 75%" :to="{name: 'Home'}">
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
    z-index: 1;
    width: 100%;
    height: 115px;
    display: flex;
    justify-content: space-between;
    top:0;
    align-items: center;
      padding: 20px;

    img {
      margin-top: 30px;
      width: 500px;
    }
    .page-logo {
        width: 100%;
    }
}
</style>


