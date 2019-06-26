<template>
  <div id="app-menu-overlay" :class="[menuOpened ? 'active' : '']">
    <div class="app-menu-toolbar" v-if="toggleable">
      <i  v-if="menuOpened" @click="onMenuToggle" class="menu-control fa fa-times" aria-hidden="true"></i>
      <i  v-else-if="!menuOpened" @click="onMenuToggle" class="menu-control fa fa-bars" aria-hidden="true"></i>
      <label class="searchbar">
        <input type="text" value="Search" v-model="searchText">
        <i @click="goToCatalogue" class="fa fa-search" aria-hidden="true"></i>
      </label>
    </div>
    <transition :name="transition">
      <div id="app-menu-content" v-show="menuOpened">
    <Header :logoVariant="logoSrc"></Header>
        <div :class="overlayClass" id="menu-underlay"></div>
        <div id="menu-background" :class="backgroundClass"></div>
        <div :class="overlayClass" id="menu-background-overlay"></div>
        <div class="menu">
          <div class="menu-items">
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
                  @click="onCountryChange(item.id)">{{ item.country }}</h4>
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
                    class="sub-topic-title" @click="onSubTopicChange(item.id)">{{ item.name }}
                  </h5>
                </div>
            </div>
          </transition>
        </div>
        <transition :name="transition">
          <div class="content" v-if="content">
          <h3 class="mb-3">{{content.name || content.country}}</h3>
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
        </transition>
        
        <transition :name="transition">
          <div class="catalogue-menu" v-if="activeMenu === 'Catalogue'">
            <cat-menu menu="true"></cat-menu>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  import resources from '@/assets/data/menu'
  import CatalogueMenu from '@/views/CatalogueMenu'
  import Header from '@/components/core/Header'
  export default {
    data() {
      return {
        menus: resources,
        activeMenu: 'Topics',
        activeSubMenuId: 0,
        activeSubTopicId: 0,
        activeCountryId: 0,
        menuOpened: false,
        gridReady: true,
        searchText: 'Search',
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
      Header, 'cat-menu': CatalogueMenu
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
    },
    methods: {
      goToCatalogue() {
        this.$router.push({
          name: 'Catalogue',
          query: {searchTerm: this.searchText}
        })
      },
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
#app-menu-overlay,
#app-menu-content {
  font-family: 'Roboto Condensed', sans-serif;
  width: 100%;
  height: 100%;
  min-height: max-content;
  font-weight: 100;
  color: white;
}

#app-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 71px;
    z-index: 99999;
    overflow: hidden;
    transition: none;
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
  &.blue {
    background: transparent;
  }
}

#menu-underlay {
  background: transparent; 
    &.blue {
      background: #004B87;
      opacity: 0.95;
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
  .menu-items {
    width: 33.33%;
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
  background-color: rgba(0, 134, 117, 0.95);
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

.app-menu-toolbar {
    position: absolute;
    width: 30%;
    z-index: 1;
}

.background-countries {
  background-size: contain!important;
  background-repeat: no-repeat;
  background-position-x: 50%;
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
.menu-control {
    font-size: 2rem;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    width: 30px;
    margin-left: 2rem;
}

#app-menu-overlay.active {
    z-index: 9999;
    height: 100%;
    bottom: 0;
    overflow: unset;
}
</style>