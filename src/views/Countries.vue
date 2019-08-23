<template>
  <div id="top" class="countries">
    <!-- <Header :content="true" logoVariant="logo-page"></Header> -->
    <Menu :name="country_data.country" currentPage="Countries" :tabs="tabs" :currentTab="currentTab" :handleClick="handleClick" :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
    
    <PageHeader :currentSubtopic="country_data.country"></PageHeader>

    <div class="cols content-cols">
      <div class="col-3 mt-4">
      
      </div>
      <div class="col-6">
        <div v-if="country_data && actual_data" class="content-page">
          <h1>{{country_data.country}}</h1>
          <hr>
          <div v-if="currentTab === 'main'" id="main">
            <h2>Main</h2>
            <p class="intro">{{actual_data.introduction.join('\n')}}</p>
            <div v-html="actual_data.main"></div>
          </div>
          <div v-if="currentTab === '1'" id="data">
            <h2>Data</h2>
            <div v-html="data"></div>
          </div>
          <div v-if="currentTab === '2'" id="indicators">
            <div v-html="indicators"></div>
          </div>
          <div v-if="currentTab === '3'" id="briefing">
            <div v-html="briefing"></div>
          </div>
          <div v-if="currentTab === '4'" id="report">
            <div v-html="report"></div>
          </div>
             <div v-if="currentTab === '5'" id="indicators">
            <div v-html="indicators"></div>
          </div>
          <div v-if="currentTab === '6'" id="briefing">
            <div v-html="briefing"></div>
          </div>
          <div v-if="currentTab === '7'" id="report">
            <div v-html="report"></div>
          </div>
          <div v-if="currentTab === '8'" id="data">
            <div v-html="data"></div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="headings_navigation" v-if="headings">
          <h5 class=""><b>In page navigation</b></h5>
          <ul  class="headings_navigation_list">
            <li v-for="heading in headings" :key="heading.id">
              <a v-scroll-to="`#${heading.id}`">{{heading.text}}</a>
            </li>
          </ul>
        </div>
        <a class="back_to_top" v-scroll-to="'#top'"><i class="fa fa-chevron-up"></i> back to top</a>
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