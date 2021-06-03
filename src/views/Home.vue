<template>
  <!-- content -->
  <section class="home home--bg">
    <div class="container">
      <div class="row">
        <!-- card -->
        <Card v-for="video in videos" :key="video.id" :video="video"/>
        <!-- end card -->
      </div>
    </div>
  </section>
  <!-- end content -->
</template>

<script>
// @ is an alias to /src

import Card from "../components/Card";
export default {
  name: 'Home',
  components: {Card},
  data() {
    return {
      popularVideos: [],
      videos: [],
      newVideos: [],
    }
  },
  methods: {
    getHome() {
      this.$api.get('home')
          .then(res => {
            this.popularVideos = res.data.popularVideos
            this.videos = res.data.videos
            this.newVideos = res.data.newVideos
          }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getHome()
  }
}
</script>
