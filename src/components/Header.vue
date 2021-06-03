<template>
  <!-- header -->
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <!-- header logo -->
            <router-link to="/" class="header__logo">
              <img src="../assets/logo.svg" alt="">
            </router-link>
            <!-- end header logo -->

            <!-- header nav -->
            <ul class="header__nav">
              <!-- dropdown -->
<!--              <li class="header__nav-item">-->
<!--                <a class="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuHome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>-->

<!--                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuHome">-->
<!--                  <li><a href="#">Home slideshow bg</a></li>-->
<!--                  <li><a href="#">Home static bg</a></li>-->
<!--                </ul>-->
<!--              </li>-->
              <li class="header__nav-item">
                <router-link :to="{ name: 'Home' }" class="header__nav-link">Home</router-link>
              </li>
              <!-- end dropdown -->

              <!-- dropdown -->
<!--              <li class="header__nav-item">-->
<!--                <a class="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuCatalog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>-->

<!--                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">-->
<!--                  <li><a href="#">Catalog</a></li>-->
<!--                  <li><a href="#">Movie Detail</a></li>-->
<!--                </ul>-->
<!--              </li>-->

              <!-- end dropdown -->

              <li class="header__nav-item">
                <router-link :to="{ name: 'Videos' }" class="header__nav-link">Videos</router-link>
              </li>

              <li class="header__nav-item">
                <a href="#" class="header__nav-link">Help</a>
              </li>

              <!-- dropdown -->
              <li class="dropdown header__nav-item">
                <a class="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon ion-ios-more"></i></a>

                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Sign In</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Forgot password</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contacts</a></li>
                  <li><a href="#">404 Page</a></li>
                </ul>
              </li>
              <!-- end dropdown -->
            </ul>
            <!-- end header nav -->

            <!-- header auth -->
            <div class="header__auth">
              <form action="#" class="header__search">
                <input class="header__search-input" type="text" placeholder="Search...">
                <button class="header__search-button" type="button">
                  <i class="icon ion-ios-search"></i>
                </button>
                <button class="header__search-close" type="button">
                  <i class="icon ion-md-close"></i>
                </button>
              </form>

              <button class="header__search-btn" type="button">
                <i class="icon ion-ios-search"></i>
              </button>

              <!-- dropdown -->
              <!-- <div class="dropdown header__lang">
                <a class="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>

                <ul class="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLang">
                  <li><a href="#">English</a></li>
                  <li><a href="#">Spanish</a></li>
                  <li><a href="#">Russian</a></li>
                </ul>
              </div> -->
              <!-- end dropdown -->
              <img :src="user.avatar" :alt="user.name" :title="user.name" class="avatar-img" v-if="user">

              <a href="#" @click.prevent="logout" class="header__sign-in" v-if="auth">
                <i class="icon ion-ios-log-in"></i>
                <span>sign out</span>
              </a>
              <router-link :to="{ name: 'Login' }" class="header__sign-in" v-else>
                <i class="icon ion-ios-log-in"></i>
                <span>sign in</span>
              </router-link>
            </div>
            <!-- end header auth -->

            <!-- header menu btn -->
            <button class="header__btn" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <!-- end header menu btn -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->
</template>

<script>
export default {
name: "Header",
methods: {
        logout() {
            this.$siteUrl.post('/logout').then(response => {
                console.log(response, 'Logged out!');

                this.$store.commit('SET_AUTHENTICATED', false)
                this.$router.push({name: 'Login'})
            })
        }
    },
computed: {
        auth() {
            return this.$store.getters.getAuthenticated;
        },
        user() {
            return this.$store.getters.getUser;
        }
    }
}
</script>

<style scoped>
  .is-active {
    color: #ffd80e;
  }
  .avatar-img {
    border: 2px solid #1eff0e;
     border-radius: 50%;
     width: 40px;
     margin-right: -30px;
  }
</style>