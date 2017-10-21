<template>
<div class="app-content">
	<div class="app-list">
		<div class="band-list">
		  <div v-for="band in bands" class="band-item col-sm-12" @hover="showOptions = band" @click="selectBand(band)" :class="{ active: selectedBand == band }">
		    <div>
		    	<div class="band-options">
		    		<!-- <div class="glyphicon" :class="band.favorited ? 'glyphicon-star' : 'glyphicon-star-empty'"></div> -->
		    		<!-- <div class="glyphicon glyphicon-pencil"></div> -->
		    		<!-- <div class="glyphicon glyphicon-remove"></div> -->
		    	</div>
		    	{{ band.name }}
		    </div>
		    <div class="song-list" v-if="selectedBand == band">
			    <div v-for="song in band.songs" class="song-item" @click="selectSong(band, song)" :class="{ active: selectedSong == song }">
			        {{ song && song.title }}
			    </div>
		    </div>
		  </div>
		</div>
	</div>
	<div v-if="songContent" class="song-overlay" @click="songContent = ''"></div>
	<div class="song-overview" v-if="songContent">
		<div class="song-header">
			{{ selectedBand.name }} - {{ selectedSong.title }}
		</div>
		<div class="song-content" v-html="songContent"></div>
	</div>
</div>
</template>

<script>
export default {
	name: 'SongList',
	props: [ 'bands' ],
	data () {
		return {
			selectedBand: '',
			selectedSong: '',
			songContent: ''
		}
	},
	methods: {
		formatSong: function (song) {
			song.content
		},
		selectBand: function (band) {
			this.selectedBand = band
			// this.songContent = ''
		},
		selectSong: function (band, song) {
			this.selectedSong = song
			this.songContent = song.content
						.replace(/;/g, '<br/>')
						.replace(/\[(.+?)\]/g, '<sup><strong>$1</strong></sup>')
		}
	}
}	
</script>

<style scoped>
	.app-content {
	  display: flex;
	}
	.band-list {
	  display: flex;
	  flex-flow: wrap;
	}
	.band-item {
	  display: flex;
	  padding: 10px;
	  align-items: center;
	  justify-content: center;
	  background: whitesmoke;
	  border-right: 1px solid #ddd;
	  border-bottom: 1px solid #ddd;
	  width: 100vw;
	  height: 7vh;
	  font-size: 16px;
	  position: relative;
	  box-sizing: border-box;
	  overflow: hidden;
	  transition: height 0.3s;
	}
	.band-item.active {
	  background: white;
	  font-weight: bold;
	  font-size: 100px;
	  white-space: nowrap;
	  box-shadow: inset 0 0 30px -10px #fff;
	  height: 20vh;
	}
	.band-item:hover {
	  cursor: pointer;
	  background: #fefefe;
	}
	.band-options {
		display: none;
		position: absolute;
		right: 0;
		top: 0;
	}
	.band-options .glyphicon {
		font-size: 30px;
		color: #666;
	}
	.band-options .glyphicon:hover {
		color: #000;
	}
	.band-item:hover .band-options {
		display: block;
	}
	.song-list  {
	  background: rgba(255,255,255,0.9);
	  position: absolute;
	  top: 0;
	  left: 0;
	  margin: auto;
	  text-align: center;
	  width: 100%;
	  min-height: 20vh;
	  height: 100%;
	  max-height: 100%;
	  overflow: scroll;
	  font-size: 18px;
	  padding: 10px;
	}
	.song-item {
		padding: 5px 0;
		white-space: nowrap;
		overflow: scroll;
	}
	.song-overlay {
	  width: 100%;
	  height: 100%;
	  background: rgba(0,0,0,0.6);
	  position: fixed;
	  left: 0;
	  top: 0;
	  z-index: 1;
	}
	.song-overview {
	  position: fixed;
	  left: 50%;
	  top: 50%;
	  z-index: 2;
	  transform: translate(-50%,-50%);
	  background: white;
	  box-shadow: 0 0 100px -20px #333;
	  padding: 20px;
	  height: 90%;
	  min-width: 50%;
	  max-width: 90%;
	  font-size: 18px;
	}
	.song-header {
	  font-weight: 700;
	  text-align: center;
	}
	.song-content {
	  min-width: 50%;
	  margin: 0 auto;
	  overflow: scroll;
	  max-height: 98%;
	}
</style>