<template>
    <div class="page-header">
    <fixed-header :threshold="250">
             <div class="header-navbar">
                <div class="navbar-body cols">
                    
                    <router-link class="col-3" :to="{name: 'Home'}">
                        <img class="page-logo-sm" src="/images/background/logo_white_small.svg" alt="">
                    </router-link>
                    <div class="col-6" style="padding: .8rem 2.5rem;"><h3 class="thin">{{currentSubtopic}}</h3></div>
                    <div class="col-3">

                        <label class="searchbar" style="margin: 0; margin-top: 1rem">
                            <input type="text" value="Search" v-model="searchText">
                            <i @click="goToCatalogue" class="fa fa-search" aria-hidden="true"></i>
                        </label>
                    </div>
                </div>
            </div>
        </fixed-header>
       <div class="page-bg"></div>
       <div class="page-bg-overlay"></div>
 
    </div>
</template>
<script>
import FixedHeader from 'vue-fixed-header'

export default {
    props: {
        currentSubtopic: String
    },
    components: {
        FixedHeader
    }
}
</script>
<style lang="scss">
    .catalogue {

    .navbar-body {
            display: flex;
    justify-content: space-between;
    height: 57px;
    }

    .page-logo-sm {
        position: absolute;
    }
    .header-navbar {
         position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
               background-image: url(/images/background/topic-bg.jpg);
  background-size: cover;
        .navbar-body {
        background: rgba(0,0,0,0.5);
        }

        color: white;
    }
    .header-navbar.vue-fixed-header--isFixed {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
                background-image: url(/images/background/topic-bg.jpg);
  background-size: cover;
        .navbar-body {
        background: rgba(0,0,0,0.5);
        }
        color: white;
        z-index: 100;
    }
    .page-header {
        width: 100%;
        height:250px;
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
        // background: #008675;
        background: rgba(0,0,0, 0.35);
    }
    h1 {
        font-weight: bold;
    }
    .page-logo-sm {
        width: 350px;
        top: -10px;
        right: 2rem;
    }
    }
</style>


