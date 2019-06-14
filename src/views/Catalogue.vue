<template>
  <div class="catalogue">
    <Header :content="true" logoVariant="logo-page"></Header>
    <Menu :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
    <PageHeader currentSubtopic="Catalogue"></PageHeader>

    <div class="cols content-cols">
      <div class="col-3 mt-4">
        <h1>Catalogue</h1>
      </div>
      <div class="col-7">
        <div class="content-page">
        
        </div>
      </div>
  
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/core/Header'
import Menu from '@/components/core/MenuOverlay'
import PageHeader from '@/components/core/PageHeader'
import topics from '@/assets/data/topics'
import { getObjById } from '@/utils/helpers'
import Footer from '@/components/core/Footer'

var pagemap = require('pagemap');

  export default {
    components: {
      Header, Menu, PageHeader, Footer
    },
    data(){
      return {

      }
    },
 
    computed: {
  
    },
    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cols {
    display: flex;
  }
  .content-page {
    background: white;
    padding: 2rem;
    color: #252525;
    margin-top: -7rem;
    font-family: lato;
    font-size: 18px;
  }
  .intro {
    font-weight: 300;
    font-style: italic;
    font-size: 16px;
  }

  .content-cols {
     .content-page {
      border-left: 1px solid #ddd;
    }
  }
  #minimap2 {
    display: none;
  }
  #minimap, #minimap2 {
    position: sticky;
    // top: 250px;
    top: 270px;
    right: 100px;
    min-width: 100px!important;
    height: 300px;
    z-index: 100;
  }

 .content-page * {
    max-width: 100%!important;
  }
  
</style>