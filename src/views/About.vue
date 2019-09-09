<template>
  <div id="top" class="topics">
    <Header :content="true" logoVariant="logo-page"></Header>
    
    <PageHeader currentSubtopic="About"></PageHeader>

    <div class="cols content-cols">
      <div class="col-3 mt-4">
        <Menu name="about" currentPage="Countries" :currentTab="currentTab" :handleClick="handleClick" :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
      </div>
      <div class="col-8">
        <div class="content-page">
          
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis laborum ducimus consequatur quis architecto at incidunt optio, obcaecati dolor totam est nemo provident, quas debitis, rerum veniam cupiditate sunt?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cumque dolores neque nihil magni amet inventore numquam omnis alias velit itaque quas magnam vel explicabo voluptates eveniet voluptatum? Temporibus, officiis!</p>

        </div>
      </div>
    
    </div>
    <Footer></Footer>

  </div>
</template>

<script>

import Header from '@/components/core/Header'
import Menu from '@/components/core/MenuOverlay'
import PageHeader from '@/components/core/PageHeaderCountry'
import countries from '@/assets/data/countries'
import { getObjById } from '@/utils/helpers'
import Tabs from 'vue-tabs-with-active-line'
import { type } from 'os';
import Footer from '@/components/core/Footer'


import data from '@/assets/data/htmlstrings/data'
import indicators from '@/assets/data/htmlstrings/indicators'
import briefing from '@/assets/data/htmlstrings/briefing'
import report from '@/assets/data/htmlstrings/report'

var pagemap = require('pagemap');

  export default {
    components: {
      Header, Menu, PageHeader, Tabs, Footer
    },
    data(){
      return {
        data,
        indicators,
        briefing,
        report,
        country: this.$route.query.country, 
        currentTab: 'main',
        headings: null
      }
    },
  updated: function () {
    
    },
    mounted: function () {
      this.$nextTick(function () {
        this.makeHeadings()
      })
    },
    computed: {
      tabs() {
        const tabs = []
        Object.keys(countries[0]).filter(key => parseInt(key)).forEach(key => {
          tabs.push({title: countries[0][key], value: key})
        })
        tabs.unshift({title: 'Main', value: 'main'})
        console.log(tabs)
        return tabs
      },
      country_data() {
        return countries.find(c => c.id == this.country)
      },
      actual_data() {
        return countries[0]
      }
    },
    methods: {
      handleClick(newTab) {
        this.currentTab = newTab;
        this.$nextTick(function () {
          this.makeHeadings()
        })
      },
      makeHeadings() {
        this.headings  = Array.from(document.querySelectorAll('.content-page h3')).map((el,index) => {
          const id = `${this.currentTab}_${index}`
          el.setAttribute('id', id)
          const text = el.innerText;
          console.log(text)
          return {id, text}
        })
      }
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
 

 .content-page * {
    max-width: 100%!important;
  }
  
</style>