<template>
  <div class="col-6 col-sm-4 col-md-3 col-xl-2">
    <div class="card">
      <div class="card__cover">
        <img :src="`https://image.tmdb.org/t/p/w300/${video.poster}`" alt="">
        <router-link :to="{ name: 'Video', params: { id: video.id } }" class="card__play">
          <i class="icon ion-ios-play"></i>
        </router-link>
        <span class="card__rate">{{ video.imdb_rating }}</span>
      </div>
      <div class="card__content">
        <h3 class="card__title"><router-link :to="{ name: 'Video', params: { id: video.id } }">{{ video.title }}</router-link></h3>
        <span class="card__category">
          <a href="#">Action</a>
          <a href="#">Thriller</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['video']
}
</script>

<style scoped>

</style>