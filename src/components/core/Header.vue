<template>
    <div class="header">
        <img id="searchImg" src="/images/background/search.svg" alt="">
        <img :src="`/images/background/${logoSrc}.png`" alt="logo">
    </div>
</template>
<script>
export default {
    props: {
        logoVariant: String
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
    align-items: center;
      padding: 20px;

    img {
      margin-top: 30px;
      width: 500px;
    }
}
</style>


