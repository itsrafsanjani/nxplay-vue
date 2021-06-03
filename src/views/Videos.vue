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
import Card from "../components/Card";
export default {
  name: 'Videos',
  components: {Card},
  data() {
    return {
      videos: [],
    }
  },
  methods: {
    getVideos() {
      this.$api.get('videos')
          .then(res => {
            this.videos = res.data.data
          }).catch(err => {
        console.log(err)
      })
    }
  },
  created() {
    this.getVideos()
  }
}
</script>

<style scoped>

</style>