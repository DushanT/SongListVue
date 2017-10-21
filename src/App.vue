<template>
  <div id="app">

    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            SongList
          </a>
        </div>
        <form onSubmit="event.preventDefault()" class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Filter" v-model="filter">
          </div>
        </form>
      </div>
    </nav>

    <SongList :bands="bandsFiltered"></SongList>

  </div>
</template>

<script>
import SongList from './components/SongList.vue'

import db from './Database'
let bandsRef = db.ref('bands')

export default {
  name: 'app',
  firebase: function() {
    return {
      bands: bandsRef
    }
  },
  data () {
    return {
      filter: ''
    }
  },
  components: {
    SongList
  },
  computed: {
    bandsSorted: function () {
      return this.bands.sort(function(a,b){
        if(a.name > b.name)
          return 1
        else if(a.name < b.name)
          return -1

        return 0
      })
    },
    bandsFiltered: function() {
      return this.bandsSorted.filter((band) => {
        return band.name.match(new RegExp(this.filter, 'i'))
      })
    }
  }
}
</script>

<style scoped>
  #app {
    margin-top: 60px;
  }
  .navbar {
    margin-bottom: 0;
    border-bottom: 10px solid #ddd;
  }
</style>
