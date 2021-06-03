<template>
  <div>
    <!-- details -->
    <section class="section section--details section--bg" data-bg="img/section/details.jpg">
      <!-- details content -->
      <div class="container">
        <div class="row">
          <!-- title -->
          <div class="col-12">
            <h1 class="section__title">{{ video.title }}</h1>
          </div>
          <!-- end title -->

          <!-- content -->
          <div class="col-12 col-lg-6">
            <div class="card card--details">
              <div class="row">
                <!-- card cover -->
                <div class="col-12 col-sm-5 col-lg-6 col-xl-5">
                  <div class="card__cover">
                    <img v-if="video.poster" :src="`https://image.tmdb.org/t/p/w300/${video.poster}`" alt="">
                    <span class="card__rate card__rate--green">{{ video.imdb_rating }}</span>
                  </div>
                </div>
                <!-- end card cover -->

                <!-- card content -->
                <div class="col-12 col-sm-7 col-lg-6 col-xl-7">
                  <div class="card__content">
                    <ul class="card__meta">
                      <li><span>Director:</span>
                        <a v-for="director in directors" :key="director.index">{{ director }}</a>
                      </li>
                      <li><span>Cast:</span> <a v-for="actor in actors" :key="actor.index">{{ actor }}</a></li>
                      <li><span>Genre:</span> <a v-for="genre in genres" :key="genre.index">{{ genre }}</a></li>
                      <li><span>Release year:</span> {{ video.year }}</li>
                      <li><span>Running time:</span> {{ video.runtime }}</li>
                      <li><span>Country:</span> <a v-for="country in countries" :key="country.index">{{ country }}</a></li>
                    </ul>
                    <div class="card__description">
                      {{ video.description }}
                    </div>
                  </div>
                </div>
                <!-- end card content -->
              </div>
            </div>
          </div>
          <!-- end content -->

          <!-- player -->
          <div class="col-12 col-lg-6">
            <!-- video element -->
            <video-player class="video-player-box vjs-big-play-centered"
                          ref="videoPlayer"
                          :options="playerOptions">
            </video-player>
          </div>
          <!-- end player -->
        </div>
      </div>
      <!-- end details content -->
    </section>
    <!-- end details -->

    <Contents />
  </div>

</template>

<script>
// @ is an alias to /src
// require styles
import 'video.js/dist/video-js.css'

import {videoPlayer} from 'vue-video-player'
import Contents from "../components/Contents";


export default {
  name: 'Video',
  components: {
    Contents,
    videoPlayer
  },
  data() {
    return {
      video: {},
      videoSource: '',
      playerOptions: {},
      directors: {},
      actors: {},
      countries: {},
      genres: {}
    }
  },
  methods: {
    getVideoDetails() {
      this.$api.get('videos/' + this.$route.params.id)
          .then(res => {
            this.video = res.data
            this.videoSource = 'http://nxplay.test' + res.data.video
            this.directors = JSON.parse(res.data.directors)
            this.actors = JSON.parse(res.data.actors)
            this.countries = JSON.parse(res.data.country)
            this.genres = JSON.parse(res.data.genres)
                this.playerOptions = {
                  // video js options
                  fluid: true,
                  language: 'en',
                  playbackRates: [0.7, 1.0, 1.5, 2.0],
                  sources: [{
                    type: "video/mp4",
                    src: this.videoSource
                  }],
                  poster: "https://image.tmdb.org/t/p/w300/" + this.video.poster,
                }
            console.log(res.data);
          }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getVideoDetails()
  },
}
</script>
