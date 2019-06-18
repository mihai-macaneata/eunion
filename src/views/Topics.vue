<template>
  <div class="topics">
    <Header :content="true" logoVariant="logo-page"></Header>
    <Menu :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
    <PageHeader :currentSubtopic="subtopic_data.name"></PageHeader>

    <div class="cols content-cols">
      <div class="col-3 mt-4">
        <p>Chose a section for the <b> {{ subtopic_data.name }} </b> subtopic</p>
        <Tabs :tabs="tabs" :currentTab="currentTab" @onClick="handleClick"></Tabs>
      </div>
      <div class="col-7">
        <div v-if="topic_data && subtopic_data" class="content-page">
          <h1>{{subtopic_data.name}}</h1>
          <hr>
          <div v-if="currentTab === 'main'" id="main">
            <h2>Main</h2>
            <p class="intro">{{subtopic_data.introduction.join('\n')}}</p>
            <div v-html="subtopic_data.main"></div>
          </div>
          <div v-if="currentTab === 'data'" id="data">
            <h2>Data</h2>
            <div v-html="subtopic_data.data"></div>
          </div>
          <div v-if="currentTab === 'indicators'" id="indicators">
            <div v-html="subtopic_data.indicators"></div>
          </div>
          <div v-if="currentTab === 'briefing'" id="briefing">
            <div v-html="subtopic_data.briefing"></div>
          </div>
          <div v-if="currentTab === 'report'" id="report">
            <div v-html="subtopic_data.report"></div>
          </div>
        </div>
      </div>
      <div id="minimap-container" class="col-2">
        <canvas v-if="subtopic_data" class='minimap' id="minimap2" ref="minimap"></canvas>
        <canvas v-if="subtopic_data" class='minimap' id="minimap" ref="minimap"></canvas>
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
import Tabs from 'vue-tabs-with-active-line'
import Footer from '@/components/core/Footer'

var pagemap = require('pagemap');

  export default {
    components: {
      Header, Menu, PageHeader, Tabs, Footer
    },
    data(){
      return {
        subtopic: this.$route.query.subtopic, 
        topic: this.$route.query.topic,
        tabs: [
          { title: 'Main', value: 'main' },
          { title: 'Data', value: 'data' },
          { title: 'Indicators', value: 'indicators'},
          { title: 'Briefing', value: 'briefing' },
          { title: 'Report', value: 'report' }
        ],
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
      topic_data() {
        return topics.find(topic => topic.id == this.topic)
      },
      subtopic_data() {
        return this.topic_data.subtopics.find(subtopic => subtopic.id == this.subtopic)
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
    margin-top: -7rem;
    font-family: lato;
    font-size: 16px;
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