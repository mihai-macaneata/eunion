<template>
  <div id="app-menu">
    <div class="app-menu-toolbar" v-if="toggleable">
      <button v-if="menuOpened" @click="onMenuToggle">Close</button>
      <button v-else-if="!menuOpened" @click="onMenuToggle">Open</button>
      <input type="text" value="Search">
    </div>
    <transition :name="transition">
      <div id="app-menu-content" :class="[toggleable ? 'absolute' : 'relative', backgroundClass]" v-show="menuOpened">
        <div class="menu">
          <div class="menu-items">
            <button v-if="toggleable" @click="onMenuToggle">Close</button>
            <div 
              class="menu-item" 
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
                <div class="sub-topic-item" v-for="(item, key) in subTopics" :key="key">
                  <h4 class="sub-topic-title" @click="onSubTopicChange(item.id)">{{ item.name }}</h4>
                </div>
            </div>
          </transition>
        </div>
        <transition :name="transition">
          <div class="content" v-if="content">
            <div class="description">
              <p v-for="(description, key) in content.description" :key="key"> {{ description }}</p>
            </div>
            <div class="introduction">
              <p v-for="(intro, key) in content.introduction" :key="key"> {{ intro }}</p>
            </div>
            <router-link :to="'/topics/' + content.id">
              <h2>More</h2>
            </router-link>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
  import resources from '@/assets/data/menu'

  export default {
    data() {
      return {
        menus: resources,
        activeMenu: 'Topics',
        activeSubMenuId: 0,
        activeSubTopicId: 0,
        activeCountryId: 0,
        menuOpened: true,
        gridReady: true
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
    computed: {
      backgroundClass() {
        return 'background-' + this.background 
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
      onMenuChange(target) {
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
        if (this.activeSubTopicId !== target) {
          if (this.activeSubTopicId != 0) {
            let self = this
            this.activeSubTopicId = 0
            setTimeout(function() {
              self.activeSubTopicId = target
            }, 600)
          } else {
            this.activeSubTopicId = target
          }
        } else {
          this.activeSubTopicId = 0
        }
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
  }
</script>

<style lang="scss" scoped>
#app-menu,
#app-menu-content {
  width: 100%;
  height: 100%;
  min-height: max-content;
}
.menu {
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
    .menu-item {
      position: relative;
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
        letter-spacing: -2px;
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
      .sub-menu-title {
        cursor: pointer;
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
    color: #000;
    height: 100%;
    background: rgba(255, 255, 255, 0.80);
    .sub-topic-item {
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
  float: right;
  width: 40%;
  height: 100%;
  padding: 0 24px;
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
//  Grid
.columns-2 {
  position: relative;
  width: 66.66%;
  padding: 0 24px;
}
.columns-3 {
  position: relative;
  width: 33.333%;
  padding: 0 24px;

}

//  Transitions
/* Fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide fade */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* Bounce */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>