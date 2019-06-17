<template>
  <div id="app-menu">
    <div style="position:relative;z-index: 1">
      <Header :logoVariant="logoSrc"></Header>
    </div>
    <!-- <div class="app-menu-toolbar">
      <label class="searchbar">
        <input type="text" value="Search">
        <i class="fa fa-search" aria-hidden="true"></i>
      </label>
    </div> -->
      <div id="app-menu-content" :class="[toggleable ? 'absolute' : 'relative']" v-show="menuOpened">
        <div :class="overlayClass" id="menu-underlay"></div>
        <div id="menu-background" :class="backgroundClass"></div>
        <div :class="overlayClass" id="menu-background-overlay"></div>
        <div class="menu" v-if="currentlevel < 3">
          <div v-if="currentlevel === 0" class="menu-items">
            <button v-if="toggleable" @click="onMenuToggle">Close</button>
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

            <div 
              class="sub-menu"
              v-if="hasSubMenuItems && gridReady && currentlevel === 1">
              <h2 class="mb-4" @click="activeMenu = 0"> <i class="fa fa-chevron-left" aria-hidden="true"></i> Menu</h2>
              <h4 style="    width: 100%;
    padding: 0 24px;" class="mb-4"><i>{{activeMenu}}</i></h4>
              <div class="sub-menu-item" v-for="(item, key) in subMenuItems" :key="key">
                <h4
                  class="sub-menu-title"
                  :class="{active: activeSubMenuId === item.id}"
                  v-if="item.name" 
                  @click="onSubMenuChange(item.id)">{{ item.name }}</h4>
                <h4 
                  class="sub-menu-title" 
                  v-else-if="item.country" 
                  @click="onCountryChange(item.id)">{{ item.country }}</h4>
              </div>
            </div>

            <div 
              class="sub-topics"
              v-if="hasSubTopics && subTopics && gridReady && currentlevel === 2">
                <h2 class="mb-4" @click="activeSubMenuId = 0"> <i class="fa fa-chevron-left mr-1" aria-hidden="true"></i> Topics</h2>
                <h4 style="font-weight: 400;" class="mb-2"><i>{{subMenuItems.find((item) => item.id === activeSubMenuId ).name}}</i></h4>
                <p class="mb-5"><i>Subtopics</i></p>
                <div class="sub-topic-item" v-for="(item, key) in subTopics" :key="key">
                  <h5
                    :class="{active: activeSubTopicId === item.id}"
                    class="sub-topic-title" @click="onSubTopicChange(item.id)">{{ item.name }}
                  </h5>
            </div>
            </div>
        </div>
          <div class="content" v-if="content && currentlevel === 3">
            <h2 class="mb-4" @click="activeSubTopicId = 0; activeCountryId = 0"> <i class="fa fa-chevron-left" aria-hidden="true"></i> {{ content.name ? 'Subtopics' : 'Countries'}}</h2>

          <h2 class="mb-3">{{content.name || content.country}}</h2>
            <div class="description">
              <p v-for="(description, key) in content.description" :key="key"> {{ description }}</p>
            </div>
            <h4>Introduction</h4>
            <div class="introduction">
              <p v-for="(intro, key) in content.introduction" :key="key"> {{ intro }}</p>
            </div>
            <router-link v-if="content.country" class="more" :to="{name: 'Countries', query: {country: content.id}}">
              <h3>More about <b>{{content.country}}</b></h3>
            </router-link>
            <router-link v-else class="more" :to="{name: 'Topics', query: {subtopic: content.id, topic: activeSubMenuId}}">
              <h3>More about <b>{{content.name}}</b></h3>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
  import resources from '@/assets/data/menu'
  import Header from '@/components/core/Header'
import { setTimeout } from 'timers';
  export default {
    data() {
      return {
        menus: resources,
        activeMenu: null,
        activeSubMenuId: 0,
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
      Header
    },
    computed: {
    currentlevel(){
        let currentLevel = 0
        if(this.activeMenu) {
            currentLevel = 1
        } 
        if (this.activeSubMenuId) {
            currentLevel = 2
        } 
        if (this.activeSubTopicId) {
            currentLevel = 3
        }
        if (this.activeCountryId) {
            currentLevel = 3
        }
        return currentLevel
    },
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

      content() {
        if (this.subTopics) {
          return this.subTopics.filter(x => x.id === this.activeSubTopicId)[0]
        } else if (this.hasSubMenuItems) {
          return this.subMenuItems.filter(x => x.id === this.activeCountryId)[0]
        }
      }
    },
    // mounted () {
    //   this.$nextTick(() => {
    //     setTimeout( () => {
    //       this.activeMenu = 'Topics'
    //     },500)
    //   })
    // },
    methods: {
      onMenuChange(target) {
        if(target === 'Countries') {
          this.customBackground = 'countries'
          this.overlayCurrentClass = 'blue'
        } else {
          this.customBackground = null
          this.overlayCurrentClass = null
        }
        if (this.gridReady) {
          let self = this
          if (this.hasSubMenuItems) {
            this.gridReady = false;
            setTimeout(function() {
              self.activeMenu = ''
            }, 500)
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
      }
    }
  }
</script>

<style lang="scss" scoped>
#app-menu,
#app-menu-content {
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  min-height: 100vh;
  font-weight: 100;
}

#menu-background,
#menu-background-overlay,
#menu-underlay {
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
}
#menu-background-overlay {
  background: rgba(0,0,0,0.35);
  &.blue {
    background: transparent;
  }
}

#menu-underlay {
  background: transparent; 
    &.blue {
      background: #1C6CBB;
    }
}

.menu {
  padding: 0 24px;
  padding-top: 120px;
  width: 100%;
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
  .menu-items {
    width: 100%;
    padding: 0 24px;
    height: 600px;
    display: flex;
    flex-direction: column;
    .menu-item {
      position: relative;
      margin-bottom: 3.5rem;
      h2 {
        font-size: 2.5rem;
      }
      color: #fff;
      &.active {
        .menu-title {
          font-weight: 400;
        }
      }
      .menu-title {
        margin: 0;
        text-transform: uppercase;
        text-align: left;
        font-weight: 100;
        cursor: pointer;
        &:hover {
          font-weight: 400;
        }
      }
    }
  }
  .sub-menu {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .sub-menu-item {
      width: 100%;
      margin-bottom: 1.2rem;
    padding: 0 24px;

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
        width: 100%;
      }
    }
  }
  .sub-topics {
    padding-top: 150px;
    margin-top: -150px;
    min-height: calc(100vh + 35px);
    position: relative;
    color: white;
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
    padding-right: 24px;
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
        &:hover {
          font-weight: 400;
        }
      }
    }
  }
}

.content {
  padding: 0 24px;
  color: #000;
  padding-top: 150px;
  height: 100%;
  min-height: 100vh;
  width: 100%;
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


.searchbar {
    margin-top:1rem;
    font-size: 1.5rem;
    margin-left: 2rem;
    i {
        margin-left: -2.5rem;
    }
    input {
        background: none;
        border: none;
        border-bottom: 1px solid white;
        color: white;
    }
}
.app-menu-toolbar {
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 6rem;
}
</style>