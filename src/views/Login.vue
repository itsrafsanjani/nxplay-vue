<template>
  <div class="sign section--bg" data-bg="img/section/section.jpg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sign__content">
            <!-- authorization form -->
            <form class="sign__form" @submit.prevent="login">
              <a href="index.html" class="sign__logo">
                <img src="img/logo.svg" alt="">
              </a>
              <div class="sign__group">
                <input type="text" class="sign__input" name="email" id="email" placeholder="Email"
                       v-model="loginForm.email">
              </div>

              <div class="sign__group">
                <input type="password" class="sign__input" name="password" id="password" placeholder="Password"
                       v-model="loginForm.password">
              </div>

              <div class="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked="checked">
                <label for="remember">Remember Me</label>
              </div>

              <button class="sign__btn" type="submit">Sign in</button>

              <span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

              <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
            </form>
            <!-- end authorization form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {Form} from "vform";

export default {
  name: 'Login',
  data() {
    return {
      loginForm: new Form({
        email: 'mdrafsanjanirafin@gmail.com',
        password: 'password'
      })
    }
  },
  methods: {
    login() {
      this.$siteUrl.get('sanctum/csrf-cookie')
          .then(response => {
            console.log(response.data)
            this.$siteUrl.post('/login', {
              email: this.loginForm.email,
              password: this.loginForm.password,
            }).then(response => {
              this.$router.push({name: 'Home'})
              console.log(response.data)
              this.getUserData()
            })
          });
    },
    getUserData() {
      this.$api.get('user').then(response => {
        console.log(response.data)
        let user = response.data
        this.$store.commit('SET_USER', user)
        this.$store.commit('SET_AUTHENTICATED', true)

        localStorage.setItem('auth', true);
      })
    }
  }
}
</script>
