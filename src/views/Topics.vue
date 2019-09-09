<template>
  <div id="top" class="topics">
    <Header :content="true" logoVariant="logo-page"></Header>

    <PageHeader :currentSubtopic="subtopic_data.name"></PageHeader>
    <div class="cols content-cols">
     <div class="col-3">
        <Menu :name="subtopic_data.name" currentPage="Topics" :currentTab="currentTab" :handleClick="handleClick" :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
     </div>
      <div class="col-6">

        <div v-if="topic_data && subtopic_data" class="content-page">
          <Tabs :tabs="tabs" :currentTab="currentTab" @onClick="handleClick"></Tabs>

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
        currentTab: 'main',
        headings: null
      }
    },
  updated: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered

      })
    },
    mounted: function () {
      this.$nextTick(function () {
        this.makeHeadings()
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
        this.$nextTick(function () {
          this.makeHeadings()
        })
      },
      makeHeadings() {
        this.headings  = Array.from(document.querySelectorAll('.content-page h3')).map((el,index) => {
          const id = `${this.currentTab}_${index}`
          el.setAttribute('id', id)
          const text = el.innerText;
          // console.log(text)
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