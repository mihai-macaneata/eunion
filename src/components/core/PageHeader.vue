<template>
    <div class="page-header">
       <div class="page-bg"></div>
       <div class="page-bg-overlay"></div>
    </div>
</template>
<script>
export default {
    props: {
    },
    computed: {

    }
}
</script>
<style lang="scss">
    .page-header {
        width: 100%;
        height: 250px;
        position: relative;
        // position: absolute;
    }
    .page-bg,
    .page-bg-overlay {
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: url('/images/background/topic-bg.jpg');
        background-position-y: -100%;
    }

    .page-bg-overlay {
        background: rgba(0,0,0,0.5);
    }
    h1 {
        font-weight: bold;
    }

</style>


