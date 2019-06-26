<template>
  <div class="catalogue">
    <div class="cols content-cols">
      <div class="col-9 mt-4">
        <div class="content-page">
          <div class="catalogue-header">
            <input type="text" v-model="searchText" placeholder="Search">
            <i @click="goToCatalogue" v-model="searchText" class="fa fa-search" aria-hidden="true"></i>
          </div>
          <div class="catalogue-body" :class="{'full-width': fullWidth}">
            <div class="catalogue-controls mb-4">
              <div>
                <label for="">Per page:</label> &nbsp;
                  <select v-model="perPage">
                  <option v-for="option in options" :value="option">{{ option }}</option>
                  </select>
              </div>
              <button class="btn btn-sm btn-outline-primary" @click="fullWidth = !fullWidth">Toggle display type</button>
            </div>
          
             <div class="cards">
     
               <div class="card" v-for="card in perPage">
                 <a class="card-content" href="#">
                 <div class="card-image">
                   <img :src='imageList[card] || imageList[[Math.floor(Math.random() * imageList.length-1) + 1]]' alt="">
                 </div>
                  <div v-if="!fullWidth" class="card-title">
                    {{titles[card]}}
                    <div class="created"> {{getRandomDate(435,24,2)}}</div>
                  </div>
                </a>
                  <div class="card-detail with-content">
                    <h5 v-if="fullWidth" class="card-title mb-2" style="padding:0">
                      {{titles[card]}}
                      <div class="created"> {{getRandomDate(2,8,2)}}</div>
                    </h5>
                      {{ content[card] }}
                      <div class="mt-2" v-if="fullWidth">
                        <p>
                          {{ content[card+1]}}
                        </p>
                        <p>
                          {{ content[card+2]}}
                        </p>
                      </div>
                </div> 
                <div class="card-detail" :class="{'floating': fullWidth}">
                  <div class="card-detail-right">
                    <div class="badge">{{ type[card]}}</div>
                  </div>
                </div>
               </div>

             </div>
          </div>
        </div>
      </div>
      <div class="col-3 mt-4">
        <div class="content-page filter-results-section">
          <h3><b>Filter results</b></h3>



  <div class="collapsible-wrapper">

        <CollapsiblePanel
          class="accordion-item"
            :isExpanded="collapse.topics"
            @onToggle="handleToggle('topics')"
        >
          <div slot="header"><h4><b> Topics</b> </h4></div>
          <div class="filters-list">
              <div @click="topic.selected = !topic.selected" v-for="topic in topics" class="filter" :class="{'selected': topic.selected}">
                <i v-if="!topic.selected" class="fa fa-dot-circle"></i> 
                <i v-if="topic.selected" class="fa fa-times"></i>
                {{topic.name}}
              </div>
          </div>
        </CollapsiblePanel>
          <div class="filters-list">
              <div v-if="!collapse.topics" @click="topic.selected = !topic.selected" v-for="topic in topics.filter(t => t.selected)" class="filter" :class="{'selected': topic.selected}">
                <i v-if="!topic.selected" class="fa fa-dot-circle"></i> 
                <i v-if="topic.selected" class="fa fa-times"></i>
                {{topic.name}}
              </div>
          </div>
  </div>

  <div class="collapsible-wrapper">


      <CollapsiblePanel
              class="accordion-item"
              :isExpanded="collapse.states"
              @onToggle="handleToggle('states')"
            >
              <div slot="header"><h4><b>States</b></h4></div>
              <div class="filters-list">
                  <div @click="topic.selected = !topic.selected" v-for="topic in states" class="filter" :class="{'selected': topic.selected}">
                    <i v-if="!topic.selected" class="fa fa-dot-circle"></i> 
                    <i v-if="topic.selected" class="fa fa-times"></i>
                    {{topic.name}}
                  </div>
              </div>
      </CollapsiblePanel>
          <div class="filters-list">
              <div v-if="!collapse.states" @click="topic.selected = !topic.selected" v-for="topic in states.filter(t => t.selected)" class="filter" :class="{'selected': topic.selected}">
                <i v-if="!topic.selected" class="fa fa-dot-circle"></i> 
                <i v-if="topic.selected" class="fa fa-times"></i>
                {{topic.name}}
              </div>
          </div>
  </div>
  <div class="collapsible-wrapper">

      <CollapsiblePanel
        class="accordion-item"
        :isExpanded="collapse.type"
        @onToggle="handleToggle('type')"
      >
          <div slot="header"><h4><b>Types</b></h4></div>
             <div class="filters-list">
                  <div @click="topic.selected = !topic.selected" v-for="topic in types" class="filter" :class="{'selected': topic.selected}">
                    <i v-if="!topic.selected" class="fa fa-dot-circle"></i> 
                    <i v-if="topic.selected" class="fa fa-times"></i>
                    {{topic.name}}
                  </div>
              </div>
        </CollapsiblePanel>
        <div class="filters-list">
              <div v-if="!collapse.type" @click="topic.selected = !topic.selected" v-for="topic in types.filter(t => t.selected)" class="filter" :class="{'selected': topic.selected}">
                <i v-if="!topic.selected" class="fa fa-dot-circle"></i> 
                <i v-if="topic.selected" class="fa fa-times"></i>
                {{topic.name}}
              </div>
          </div>
  </div>
        </div>
      </div>
  
    </div>
    <div v-if="spin" class="spin-wrapper">

      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>
  </div>
</template>

<script>

import topics from '@/assets/data/topics'
import { getObjById } from '@/utils/helpers'
import Footer from '@/components/core/Footer'
import { CollapsiblePanel } from 'vue-translate3d-collapsible'
import countries from '@/assets/data/countries'
import { setTimeout } from 'timers';

  export default {
    components: {
      CollapsiblePanel
    },
    data(){
      return {
        type: [],
        spin: false,
        collapse: {
          topics: true,
          states: false,
          type: false
        },
        searchText: 'Search',

        topics: topics.map(t => ({name: t.name, selected: false})),
        states: countries.map(t => ({name: t.country, selected: false})),
        types:   ['Data reults page (interactive data)', 'Topic page', 'Country page', 'Assesments result page'].map(t => ({name: t, selected: false})),
        imageList: [],
        perPage: 9,
        fullWidth: true,
        searchText: 'Enter search terms here',
        options: [3,6,9, 18],
        titles : [],
        content: [],
      }
    },
    created() {
      this.generateImageUrls()
      this.generateTitles()
      this.generateContent()
      this.generateType()
      this.searchText = this.$route.query.searchTerm
    },

    methods: {
      goToCatalogue() {
        this.$router.push({
          name: 'Catalogue',
          query: {searchTerm: this.searchText}
        })
      },
      generateStuff(){
          this.generateImageUrls()
          this.generateTitles()
          this.generateContent()
          this.generateType()
      },

      generateImageUrls() {
        this.imageList = []
        for(let i=1; i <= 10; i++) {
            this.imageList.push(`/images/catalogue/${i}.jpg`)
        }
        this.shuffleArray(this.imageList)

      },
      
      shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
      },

      shuffleEverything() {
        this.shuffleArray(this.imageList)
        this.shuffleArray(this.titles)
        this.shuffleArray(this.content)
        this.shuffleArray(this.type)
      },
      
      generateTitles() {
        this.titles = []
        const titles = ['Greenhouse gas emissions and projections', 'Renewable energy', 'Energy efficiency','Transport', 'Ozone-depleting substances', 'Fluorinated greenhouse gases, EU and national targets', 'National emissions', 'Adaptation to climate change', 'Land and forests', 'Fluorinated greenhouse gases']
        for(let i=0; i <= 50; i++) {
          this.titles.push(titles[Math.floor(Math.random() * titles.length-1) + 1])
        }
      },

      generateType(){
        this.type = []
        const type = ['Data reults page (interactive data)', 'Topic page', 'Country page', 'Assesments result page']
        for(let i=0; i <= 50; i++) {
          this.type.push(type[Math.floor(Math.random() * type.length-1) + 1])
        }
      },

      generateContent() {
        const content =  ['Et reprehenderit ipsum labore non in aliqua exercitation minim enim consequat adipisicing. Et reprehenderit ipsum labore non in aliqua exercitation minim enim consequat adipisicing', 'Esse deserunt pariatur dolore ut amet enim ullamco cillum adipisicing ipsum ex aliquip.', 'Voluptate minim excepteur non dolor irure Lorem esse ut nisi reprehenderit minim laboris.', 'Sint amet esse incididunt veniam qui do amet duis ut occaecat laborum voluptate ut aliqua.', 'Anim eu officia non exercitation reprehenderit excepteur anim minim ut officia. Voluptate minim excepteur non dolor irure Lorem esse ut nisi reprehenderit minim laboris','Voluptate minim excepteur non dolor irure Lorem esse ut nisi reprehenderit minim laboris Duis ipsum eiusmod ea sit aliquip dolore velit est.', 'Ad consectetur do amet sit sit et consectetur adipisicing sit.', 'Deserunt exercitation reprehenderit ullamco nulla dolore. Cillum magna excepteur eiusmod sint laborum consequat irure aliqua deserunt. Aute cillum exercitation aute id elit anim incididunt. Sunt irure occaecat nisi anim aute Lorem enim.', 'Eu consequat Lorem excepteur qui non id excepteur quis ea aute adipisicing sint. Enim non laboris voluptate eu sint pariatur veniam aliquip. Officia enim ullamco velit sit commodo quis ipsum dolore nulla laborum laborum. Ea dolor officia do in aliquip culpa pariatur aute sint ea pariatur elit. Occaecat mollit deserunt est ad labore sunt ex pariatur elit nostrud in. Deserunt consequat reprehenderit incididunt in Lorem aute in eiusmod aliquip ipsum cillum veniam. Qui reprehenderit est voluptate velit ipsum pariatur adipisicing in.', 'Proident et non ex ut laboris cupidatat cupidatat reprehenderit non. Nisi cillum aliqua nulla laborum mollit consequat enim culpa minim aliquip ex cupidatat minim. Amet occaecat irure mollit cillum ut nulla sint exercitation proident commodo. Aute irure duis est elit eiusmod dolor proident magna nostrud.']
         for(let i=0; i <= 50; i++) {
          this.content.push(content[Math.floor(Math.random() * content.length-1) + 1])
        }
      
      },

      handleToggle(section) {
        this.collapse[section] = !this.collapse[section];
      },

      handleClick(newTab) {
        this.currentTab = newTab;
      },
    getRandomDate(rangeOfDays,startHour,hourRange){
      var today = new Date(Date.now());
      var date = new Date(today.getYear()+1900,today.getMonth(), today.getDate()+Math.random() *rangeOfDays)
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleString('en', options)
      },
      generateRandomStuff() {
        return Math.floor(Math.random() * 6)
      }
    },
    watch: {
      topics: {
          handler(val, oldVal) {
            if(oldVal === null) {
              return
            }
            this.shuffleEverything()
        },
        deep: true
      },
      types: {
          handler(val, oldVal) {
            if(oldVal === null) {
              return
            }
            this.shuffleEverything()

        },
        deep: true
      },
      states: {
          handler(val, oldVal) {
            if(oldVal === null) {
              return
            }
           this.shuffleEverything()

        },
        deep: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.filter-results-section{
    position: sticky;
    top:0;
}
.catalogue{
    font-family: Lato;
    z-index: 1;
    position: relative;
        overflow: auto;
    height: 100%;
        display: block;
    font-weight: initial;
        margin-top: 7rem;
    padding-bottom: 2rem;
    .content-cols {
    }
}
  .filters-list {
    .filter {
      margin-bottom: .5rem;
      position: relative;
      border: 1px solid transparent;
      padding-left: 1.7rem;
      cursor: pointer;
      transition: all 200ms;
      &.selected{
        border-color: red;
        border-radius: 6px;
        i {
          color: red;
        }
      }
      &:hover {
        border-color: #aaa;
      }
      i {
        font-size: .8rem;
        color: rgba(3, 26, 78, 1);
        position: absolute;
        left: .3rem;
        // top: 50%;
        top: 0;
        line-height: 1.3;
        // transform: translateY(-50%);
      }
    }
  }

  .catalogue-header {
    position: relative;
    i {
      position: absolute;
      right: 1rem;
      font-size: 2rem;
      top: 50%;
      transform:translateY(-50%);
      cursor: pointer;
    }
    input {
      width: 100%;
    font-size: 1.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    }
  }

  .catalogue-body {
    padding: 1rem;
    margin-top: -1px;
  }
  .cols {
    display: flex;
  }
  .content-page {
    padding: 2rem;
    color: #252525;
    font-family: lato;
    font-size: 12px;
  }
  .intro {
    font-weight: 300;
    font-style: italic;
    font-size: 12px;
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

  .badge {
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: .8rem;
    padding: .5rem .8rem;
    background: #eee;
  }
  
// cards
.cards{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 2rem;
  padding-bottom: 50px;
  a {
    color: inherit;
    text-decoration: none!important;
  }
  .card{
    overflow:hidden;
    border-radius: 4px;
    display:flex;
    flex-direction: column;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.05);
    height: 100%;
        justify-content: space-between;
    transition: box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out;
    &:hover{
      transform: translate(0, -4px);
      box-shadow: rgba(45,45,45,0.05) 0px 2px 2px, rgba(49,49,49,0.05) 0px 4px 4px, rgba(42,42,42,0.05) 0px 8px 8px, rgba(32,32,32,0.05) 0px 16px 16px, rgba(49,49,49,0.05) 0px 32px 32px, rgba(35,35,35,0.05) 0px 64px 64px;
    }
    &-image{
    overflow: hidden;
    height: 180px;
    display: block;
    position: relative;
      img{
        object-position: center;
        object-fit: cover;
        width: 100%;
        height:100%;
            top: -50%;
    position: absolute;
    transform: translateY(50%);
      }
    }
    &-title{
      padding:.5rem;
      display:flex;
      flex-direction:column;
      margin-bottom: 0;
      justify-content:center;
      font-weight: bold;
      .created{
        font-size: 0.7rem;
        color: rgba(179,192,200,0.8);
      }
    }
    &-detail{
      font-size: .8rem;
      &.with-content {
        flex: 1 0;
      }
      &.floating {
        position: absolute;
        top: .2rem;
        right: .2rem;
        border-top: none;
        margin-left: 0!important;
        margin-right: 0!important;
      }
      &:after {
        content: "";
        display: table;
        clear: both;
      }
      &-left{
        float:left;
      }
      &-right {
        float:right;
      }
      button{
        border:none;
        background-color: transparent;
        color: #B3C0C8;        
        cursor:pointer;
        transition:color 0.2s ease;
        &:hover{
          color: #778D99;
        }
      }
      border-top: 1px solid #EAF1F6;
      padding:.5rem;      
    }
  }
  
}

.catalogue-controls {
  display: flex;
  justify-content: space-between;
}

.full-width {
  .cards {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      .card {
        a {
              display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-detail {
          flex: 1 auto;
          margin-left: .5rem;
          margin-right: .5rem;
        }
            flex-direction: row;
            .card-image {
                  width: 250px;
                  height: 100%;
            }
      }
  }
}


.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  
  -webkit-animation: sk-rotate 2.0s infinite linear;
  animation: sk-rotate 2.0s infinite linear;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: blue;
  border-radius: 100%;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.spin-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>