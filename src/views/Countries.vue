<template>
  <div id="top" class="countries">
    <Header :content="true" logoVariant="logo-page"></Header>
    
    <PageHeader :currentSubtopic="country_data.country"></PageHeader>

    <div class="cols content-cols">
      <div class="col-3 mt-4">
    <Menu :name="country_data.country" currentPage="Countries" :currentTab="currentTab" :handleClick="handleClick" :toggleable="true" :background="'teal'" :transition="'slide-fade'"></Menu>
      
      </div>
      <div class="col-8">
        <div v-if="country_data && actual_data" class="content-page">
          <h1>{{country_data.country}}</h1>
          <hr>
          <div v-if="currentTab === 'main'" id="main">
            <h2>Main</h2>
            <p class="intro">{{actual_data.introduction.join('\n')}}</p>
          </div>
                <svg width="100%" height="495" aria-label="A chart." style="overflow: hidden;" xmlns="http://www.w3.org/2000/svg"><defs id="defs"><clipPath id="_ABSTRACT_RENDERER_ID_70"><rect x="71" y="49" width="623" height="321"></rect></clipPath></defs><rect x="0" y="0" width="718" height="495" stroke="none" stroke-width="0" fill="#ffffff"></rect><g><text text-anchor="start" x="71" y="28.7" font-family="Verdana" font-size="12" font-weight="bold" stroke="none" stroke-width="0" fill="#000000">GHG emissions in 1990 and 2010, in million tonnes — EU greenhouse gas emissions in 2010</text><rect x="71" y="18.5" width="623" height="12" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect></g><g><rect x="71" y="49" width="623" height="321" stroke="none" stroke-width="0" fill-opacity="0" fill="#ffffff"></rect><g clip-path="url(#_ABSTRACT_RENDERER_ID_70)"><g><rect x="71" y="369" width="623" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="71" y="289" width="623" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="71" y="209" width="623" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="71" y="129" width="623" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect><rect x="71" y="49" width="623" height="1" stroke="none" stroke-width="0" fill="#cccccc"></rect></g><g><rect x="76" y="354" width="7" height="15" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="99" y="341" width="7" height="28" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="122" y="356" width="7" height="13" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="145" y="356" width="7" height="13" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="168" y="258" width="7" height="111" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="191" y="121" width="7" height="248" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="214" y="349" width="7" height="20" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="237" y="359" width="7" height="10" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="260" y="266" width="7" height="103" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="283" y="367" width="7" height="2" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="306" y="328" width="7" height="41" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="329" y="358" width="7" height="11" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="352" y="313" width="7" height="56" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="375" y="355" width="7" height="14" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="398" y="217" width="7" height="152" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="421" y="347" width="7" height="22" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="444" y="368.46" width="7" height="1.0400000000000205" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="468" y="331" width="6" height="38" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="491" y="362" width="6" height="7" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="514" y="351" width="6" height="18" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="537" y="365" width="6" height="4" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="560" y="360" width="6" height="9" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="583" y="369.18" width="6" height="0.5" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="606" y="279" width="6" height="90" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="629" y="319" width="6" height="50" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="652" y="356" width="6" height="13" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="675" y="366" width="6" height="3" stroke="none" stroke-width="0" fill="#afbc21"></rect><rect x="84" y="353" width="6" height="16" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="107" y="344" width="6" height="25" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="130" y="358" width="6" height="11" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="153" y="355" width="6" height="14" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="176" y="266" width="6" height="103" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="199" y="183" width="6" height="186" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="222" y="346" width="6" height="23" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="245" y="358" width="6" height="11" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="268" y="270" width="6" height="99" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="291" y="367.56399999999996" width="6" height="1.9360000000000355" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="314" y="328" width="7" height="41" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="337" y="356" width="7" height="13" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="360" y="299" width="7" height="70" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="383" y="357" width="7" height="12" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="406" y="252" width="7" height="117" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="429" y="358" width="7" height="11" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="452" y="367.772" width="7" height="1.7280000000000086" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="475" y="342" width="7" height="27" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="498" y="366" width="7" height="3" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="521" y="356" width="7" height="13" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="544" y="367.56399999999996" width="7" height="1.9360000000000355" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="567" y="366" width="7" height="3" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="590" y="369.02" width="7" height="0.5" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="613" y="290" width="7" height="79" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="636" y="346" width="7" height="23" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="659" y="361" width="7" height="8" stroke="none" stroke-width="0" fill="#002c56"></rect><rect x="682" y="366" width="7" height="3" stroke="none" stroke-width="0" fill="#002c56"></rect></g><g><rect x="71" y="369" width="623" height="1" stroke="none" stroke-width="0" fill="#333333"></rect></g></g><g></g><g><g><text text-anchor="end" x="86.65582521441316" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 86.65582521441316 385.1)" stroke="none" stroke-width="0" fill="#222222">Austria</text></g><g><text text-anchor="end" x="109.6928622514502" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 109.6928622514502 385.1)" stroke="none" stroke-width="0" fill="#222222">Belgium</text></g><g><text text-anchor="end" x="132.72989928848725" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 132.72989928848725 385.1)" stroke="none" stroke-width="0" fill="#222222">Denmark</text></g><g><text text-anchor="end" x="155.76693632552426" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 155.76693632552426 385.1)" stroke="none" stroke-width="0" fill="#222222">Finland</text></g><g><text text-anchor="end" x="178.80397336256132" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 178.80397336256132 385.1)" stroke="none" stroke-width="0" fill="#222222">France</text></g><g><text text-anchor="end" x="201.84101039959833" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 201.84101039959833 385.1)" stroke="none" stroke-width="0" fill="#222222">Germany</text></g><g><text text-anchor="end" x="224.8780474366354" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 224.8780474366354 385.1)" stroke="none" stroke-width="0" fill="#222222">Greece</text></g><g><text text-anchor="end" x="247.9150844736724" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 247.9150844736724 385.1)" stroke="none" stroke-width="0" fill="#222222">Ireland</text></g><g><text text-anchor="end" x="270.9521215107095" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 270.9521215107095 385.1)" stroke="none" stroke-width="0" fill="#222222">Italy</text></g><g><text text-anchor="end" x="293.9891585477465" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 293.9891585477465 385.1)" stroke="none" stroke-width="0" fill="#222222">Luxembourg</text></g><g><text text-anchor="end" x="317.0261955847836" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 317.0261955847836 385.1)" stroke="none" stroke-width="0" fill="#222222">Netherlands</text></g><g><text text-anchor="end" x="340.0632326218206" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 340.0632326218206 385.1)" stroke="none" stroke-width="0" fill="#222222">Portugal</text></g><g><text text-anchor="end" x="363.10026965885766" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 363.10026965885766 385.1)" stroke="none" stroke-width="0" fill="#222222">Spain</text></g><g><text text-anchor="end" x="386.13730669589467" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 386.13730669589467 385.1)" stroke="none" stroke-width="0" fill="#222222">Sweden</text></g><g><text text-anchor="end" x="409.17434373293173" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 409.17434373293173 385.1)" stroke="none" stroke-width="0" fill="#222222">United Kingdom</text></g><g><text text-anchor="end" x="432.21138076996874" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 432.21138076996874 385.1)" stroke="none" stroke-width="0" fill="#222222">Bulgaria</text></g><g><text text-anchor="end" x="455.2484178070058" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 455.2484178070058 385.1)" stroke="none" stroke-width="0" fill="#222222">Cyprus</text></g><g><text text-anchor="end" x="478.2854548440428" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 478.2854548440428 385.1)" stroke="none" stroke-width="0" fill="#222222">Czech Republic</text></g><g><text text-anchor="end" x="501.3224918810799" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 501.3224918810799 385.1)" stroke="none" stroke-width="0" fill="#222222">Estonia</text></g><g><text text-anchor="end" x="524.3595289181168" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 524.3595289181168 385.1)" stroke="none" stroke-width="0" fill="#222222">Hungary</text></g><g><text text-anchor="end" x="547.396565955154" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 547.396565955154 385.1)" stroke="none" stroke-width="0" fill="#222222">Latvia</text></g><g><text text-anchor="end" x="570.4336029921909" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 570.4336029921909 385.1)" stroke="none" stroke-width="0" fill="#222222">Lithuania</text></g><g><text text-anchor="end" x="593.470640029228" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 593.470640029228 385.1)" stroke="none" stroke-width="0" fill="#222222">Malta</text></g><g><text text-anchor="end" x="616.507677066265" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 616.507677066265 385.1)" stroke="none" stroke-width="0" fill="#222222">Poland</text></g><g><text text-anchor="end" x="639.544714103302" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 639.544714103302 385.1)" stroke="none" stroke-width="0" fill="#222222">Romania</text></g><g><text text-anchor="end" x="662.5817511403391" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 662.5817511403391 385.1)" stroke="none" stroke-width="0" fill="#222222">Slovakia</text></g><g><text text-anchor="end" x="685.6187881773761" y="385.1" font-family="Verdana" font-size="12" transform="rotate(-60 685.6187881773761 385.1)" stroke="none" stroke-width="0" fill="#222222">Slovenia</text></g><g><text text-anchor="end" x="59" y="373.7" font-family="Verdana" font-size="12" stroke="none" stroke-width="0" fill="#444444">0</text></g><g><text text-anchor="end" x="59" y="293.7" font-family="Verdana" font-size="12" stroke="none" stroke-width="0" fill="#444444">400</text></g><g><text text-anchor="end" x="59" y="213.7" font-family="Verdana" font-size="12" stroke="none" stroke-width="0" fill="#444444">800</text></g><g><text text-anchor="end" x="59" y="133.7" font-family="Verdana" font-size="12" stroke="none" stroke-width="0" fill="#444444">1,200</text></g><g><text text-anchor="end" x="59" y="53.7" font-family="Verdana" font-size="12" stroke="none" stroke-width="0" fill="#444444">1,600</text></g></g></g><g></g></svg>
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