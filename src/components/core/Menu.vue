<template>
  <div id="app-menu">
    <div style="position:relative;z-index: 1">
      <Header :logoVariant="logoSrc"></Header>
    </div>

    <transition :name="transition">
      <div id="app-menu-content" :class="[toggleable ? 'absolute' : 'relative']" v-show="menuOpened">
        <div :class="overlayClass" id="menu-underlay"></div>
        <div id="menu-background" :class="backgroundClass"></div>
        <div :class="overlayClass" id="menu-background-overlay"></div>
        
        <transition :name="transition">
            <div v-if="!activeMenu" class="floating-chart">
              <h1><b>Welcome</b></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam vero odio reiciendis et id placeat beatae incidunt, doloremque, deleniti veniam alias. Debitis, deserunt! Ad totam delectus molestias sed? Nesciunt?
              </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam vero odio reiciendis et id placeat beatae incidunt, doloremque, deleniti veniam alias. Debitis, deserunt! Ad totam delectus molestias sed? Nesciunt?
              </p>
              <!-- <img src="/images/background/infographic.svg"> -->
            </div>
        </transition>
        <div class="menu">
        <div class="menu-items">
            <!-- <div class="menu-items-header">
              <img class="" src="/images/background/logo_white_small.svg" alt="">
              <label class="searchbar">
                <i @click="goToCatalogue" class="fa fa-search" aria-hidden="true"></i>
                <input type="text" value="Search" v-model="searchText">
              </label>
            </div> -->
            <div 
              class="menu-item"
              :class="{active: activeMenu === key}"
              :key="key"
              v-for="(menu, key) in menus"
              >

              <div v-if="!menu.path">
                <h2 class="menu-title" @click="onMenuChange(key)">{{ key }}</h2>
              </div>
              <router-link v-else :to="menu.path">
                <h2 class="menu-title">{{ key }}</h2>
              </router-link>
             
            </div>
          </div>

          <transition :name="transition">
            <div 
              class="sub-menu"
              :class="[gridClass]"
              v-if="hasSubMenuItems && gridReady">
              <div class="sub-menu-item" v-for="(item, key) in subMenuItems" :key="key">
                <h4
                  class="sub-menu-title"
                  :class="{active: activeSubMenuId === item.id}"
                  v-if="item.name" 
                  @click="onSubMenuChange(item.id)">{{ item.name }}</h4>
                <h4 
                  class="sub-menu-title" 
                  v-else-if="item.country" 
                  >
                  <router-link :to="{name: 'Countries', query: {country: item.id}}">
                      {{item.country}}
                    </router-link>
                  </h4>
              </div>
            </div>
          </transition>

          <transition :name="transition">
            <div 
              class="sub-topics"
              :class="[gridClass]"
              v-if="hasSubTopics && subTopics && gridReady">
                <h4 style="font-weight: 600;" class="mb-2"><i>{{subMenuItems.find((item) => item.id === activeSubMenuId ).name}}</i></h4>
                <p class="mb-5"><i>Subtopics</i></p>
                <div class="sub-topic-item" v-for="(item, key) in subTopics" :key="key">
                  <h5
                    :class="{active: activeSubTopicId === item.id}"
                    class="sub-topic-title">
                    <router-link :to="{name: 'Topics', query: {subtopic: item.id, topic: activeSubMenuId}}">
                      {{item.name}}
                    </router-link>
                  </h5>
            </div>
            </div>
          </transition>
        </div>
        <!-- <transition :name="transition">
          <div class="content">
          <h3 class="mb-3">Welcome</h3>
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi optio eveniet distinctio non ullam fugiat incidunt libero dolores. Vitae molestiae tempora odio labore reprehenderit et modi nisi dolore voluptatem molestias!
              </p>
            </div>
            <h4>Introduction</h4>
            <div class="introduction">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque quaerat reiciendis animi aut ab et dignissimos pariatur, impedit nihil dolore iure, quas laboriosam. Accusamus, possimus ut. Excepturi, porro vero.</p>
            </div>
          </div>
        </transition> -->
      </div>
    </transition>
  </div>
</template>

<script>
  import resources from '@/assets/data/menu'
  import Header from '@/components/core/Header'
  import { setTimeout } from 'timers'
  import CatalogueMenu from '@/views/CatalogueMenu'
  export default {
    data() {
      return {
        menus: resources,
        activeMenu: null,
        activeSubMenuId: 0,
        searchText: 'Search',
        activeSubTopicId: 0,
        activeCountryId: 0,
        menuOpened: true,
        gridReady: true,
        customBackground: null,
        overlayCurrentClass: null,
        logoSrc: null
      }
    },
    props: {
      toggleable: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: 'teal'
      },
      transition: {
        type: String,
        default: 'fade'
      }
    },
    components: {
      Header, CatalogueMenu
    },
    computed: {
      backgroundClass() {
        if (!this.customBackground) {
          return 'background-' + this.background 
        }
        return 'background-' + this.customBackground         
      },
      overlayClass() {
        if (this.overlayCurrentClass) {
          return this.overlayCurrentClass
        }
      },
      subMenuItems() {
        if (this.menus[this.activeMenu]) {
          return this.menus[this.activeMenu]
        }
        return false
      },

 
      hasSubMenuItems() {
        if (Array.isArray(this.subMenuItems)) {
          return this.subMenuItems.length > 0
        }
        return false
      },
      hasSubTopics() {
        if (this.hasSubMenuItems && this.subMenuItems[0].subtopics) {
          return this.subMenuItems[0].subtopics.length > 0
        }
        return false
      },
      subTopics() {
        if (this.hasSubTopics) {
          if (this.activeSubMenuId > 0) {
            return this.subMenuItems.find(x => x.id === this.activeSubMenuId).subtopics
          }
          return false
        }
        return false
      },
      columns() {
        let cols = 1
        if (this.hasSubMenuItems) {
          cols++
        }
        if (this.hasSubTopics) {
          cols++
        }
        return cols
      },
      gridClass() {
        return 'columns-' + this.columns
      },
      content() {
        if (this.subTopics) {
          return this.subTopics.filter(x => x.id === this.activeSubTopicId)[0]
        } else if (this.hasSubMenuItems) {
          return this.subMenuItems.filter(x => x.id === this.activeCountryId)[0]
        }
      }
    },
    mounted () {
      // this.activeMenu = 'Topics'
      // this.$nextTick(() => {
      //   setTimeout( () => {
      //   },500)
      // })
    },
    methods: {
   
      onMenuChange(target) {
        if(target === 'Countries') {
          this.customBackground = 'countries'
          this.overlayCurrentClass = 'blue'
        } else {
          this.customBackground = null
          this.overlayCurrentClass = null
        }
        if(this.activeMenu == target) {
          console.log('here')
          this.activeMenu = null
          return
        }

        if (this.gridReady) {
          let self = this
          if (this.hasSubMenuItems) {
            this.gridReady = false;
            // setTimeout(function() {
            //   self.activeMenu = ''
            // }, 500)
            setTimeout(function() {
              self.activeMenu = target
              self.gridReady = true;
            }, 600)
          } else {
            self.activeMenu = target
          }
          this.activeSubMenuId = 0;
          this.activeSubTopicId = 0;
          this.activeCountryId = 0;
        }
      },
      onSubMenuChange(target) {
        if (this.activeSubMenuId !== target) {
          if (this.activeSubMenuId != 0) {
            let self = this
            this.activeSubMenuId = 0
            setTimeout(function() {
              self.activeSubMenuId = target
            }, 600)
          } else {
            this.activeSubMenuId = target
          }
        } else {
          this.activeSubMenuId = 0
        }
      },
      onCountryChange(target) {
        if (this.activeCountryId !== target) {
          if (this.activeCountryId != 0) {
            let self = this
            this.activeCountryId = 0
            setTimeout(function() {
              self.activeCountryId = target
            }, 600)
          } else {
            this.activeCountryId = target
          }
        } else {
          this.activeCountryId = 0
        }
      },
      onSubTopicChange(target) {
        // if (this.activeSubTopicId !== target) {
        //   if (this.activeSubTopicId != 0) {
        //     let self = this
        //     this.activeSubTopicId = 0
        //     setTimeout(function() {
        //       self.activeSubTopicId = target
        //     }, 600)
        //   } else {
        //     this.activeSubTopicId = target
        //   }
        // } else {
        //   this.activeSubTopicId = 0
        // }
        if(this.activeSubTopicId === target) {
          return
        } else {
            this.activeSubTopicId = 0 
            this.activeSubTopicId = target
        }
        // this.activeSubTopicId = target
      },
      onMenuToggle() {
        this.menuOpened = !this.menuOpened
      },
      isEmpty(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            return false;
          }
        }
        return true;
      }
    },
    watch: {
      activeSubTopicId: {
        handler(new_val, old_val) {
          if((old_val !== new_val) && new_val !== 0) {
            this.logoSrc = 'logo'
          } else if (new_val === 0) {
            this.logoSrc = null
          }
        }
      },
      activeCountryId: {
        handler(new_val, old_val) {
          if((old_val !== new_val) && new_val !== 0) {
            this.logoSrc = 'logo'
          } else if (new_val === 0) {
            this.logoSrc = null
          }
        }
      },
      activeMenu: {
        handler(new_val, old_val) {
          if((old_val !== new_val) && new_val == 'Catalogue') {
            this.logoSrc = 'logo'
          } else {
            this.logoSrc = null
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>


#menu-background,
#menu-background-overlay,
#menu-underlay {
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}
#menu-background-overlay {
  background: rgba(0,0,0,0.45);
  &.blue {
    background: transparent;
  }
}

#menu-underlay {
  background: transparent; 
    &.blue {
      background: #004B87;
    }
}

.menu {
  padding-top: 150px;

  width: 60%;
  height: 100%;
  float: left;
  min-height: max-content;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  a {
    color: #fff;
    &.router-link-exact-active {
      color: #fff;
    }
    &:hover {
      text-decoration: none;
    }
  }

  .sub-menu {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .sub-menu-item {
      width: 100%;
      margin-bottom: .8rem;
      .sub-menu-title {
        cursor: pointer;
        &.active {
          font-weight: 400;
        }
        margin: 0;
        font-weight: 100;
        text-align: left;
        &:hover {
          font-weight: 400;
        }
      }
    }
    &.columns-2 {
      .sub-menu-item {
        width: 33.33%;
      }
    }
  }
  .sub-topics {
    padding-top: 150px;
    margin-top: -150px;
    height: calc(100% + 150px);
    background: rgba(255, 255, 255, 0.80);
    .sub-topic-item {
      margin-bottom: 2.5rem;
      h4 {
        &.active {
          font-weight: 400;
        }
      }
      cursor: pointer;
      .sub-topic-title {
        font-weight: 100;
        a {
          color: #444;
        }
        &:hover {
          font-weight: 400;
        }
      }
    }
  }
}

.floating-chart {
  // display: none;
    position: absolute;
    left: 33%;
    width: 66%;
    height: calc(100vh - 150px);
    top: 150px;
    bottom: 0;
    max-width: 700px;
    padding-bottom: 2rem;
    padding-right: 1rem;
    img {
      width: 100%;
      max-height: 100%;
      padding-left: 300px;
    }
}

.content {
  padding: 0 24px;
  color: #000;
  padding-top: 150px;
  height: 100%;
  float: right;
  width: 40%;
  position: relative;
  color: #000;
  background: rgba(255, 255, 255, 0.95);
}

//  Props clases
.absolute {
  position: absolute;
  top: 0;
  left: 0;
}
.relative {
  position: relative;
}
.background-transparent {
  background-color: transparent;
}
.background-teal {
  background-color: rgba(47, 119, 101, 0.85);
}
.background-peach {
  background-color: rgba(155, 61, 56, 0.85);
}
.background-aqua {
  background-color: rgba(31, 105, 182, 0.85);
}
.background-img {
  background-image: url('/images/background/home.jpg')
}

.background-countries {
  background-image: url('/images/background/countries.png');
  background-size: contain!important;
  background-repeat: no-repeat;
  background-position-x: 50%;
  mix-blend-mode: multiply;
}


.app-menu-toolbar {
    position: absolute;
    width: 30%;
    z-index: 1;
}
</style>