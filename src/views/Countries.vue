<template>
  <div class="countries">
    <Header :content="true" logoVariant="logo-page"></Header>
    <Menu :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
    <PageHeader :currentSubtopic="country_data.country"></PageHeader>

    <div class="cols content-cols">
      <div class="col-3 mt-4">
        <p>Chose a section for the <b> {{ country_data.country }} </b> subtopic</p>
        <Tabs :tabs="tabs" :currentTab="currentTab" @onClick="handleClick"></Tabs>
      </div>
      <div class="col-7">
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
      <div id="minimap-container" class="col-2">
        <canvas v-if="actual_data" class='minimap' id="minimap2" ref="minimap"></canvas>
        <canvas v-if="actual_data" class='minimap' id="minimap" ref="minimap"></canvas>
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
        currentTab: 'main'
      }
    },
  updated: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered

        setTimeout( () => {

        let minimapEl = document.getElementById('minimap')
        let clone = document.getElementById('minimap2').cloneNode(true)
        clone.id = 'minimap'
        minimapEl.parentNode.removeChild(minimapEl)
        document.getElementById('minimap-container').appendChild(clone)
        
        if(minimapEl != undefined) {
          let minimapEl = this.$refs.minimap
          pagemap(document.querySelector('#minimap'));
        }
        },500)

      })
    },
    mounted: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered

        setTimeout( () => {

        let minimapEl = document.getElementById('minimap')
        
        if(minimapEl != undefined) {
        let minimapEl = this.$refs.minimap
          pagemap(document.querySelector('#minimap'));
          }
        },100)

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
    margin-top: -12rem;
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
    top: 470px;
    right: 100px;
    min-width: 100px!important;
    height: 300px;
    z-index: 100;
  }

 .content-page * {
    max-width: 100%!important;
  }
  
</style>