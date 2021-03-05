<template>
  <ion-page>
    <full-layout back="/signup/" mode="full-color">
      <div class="personal-confirmation">
        <h1>Personal <br>confirmation</h1>
        <div class="content">
          <img src="/assets/personal-confirmation.png" alt="personal-confirmation" width="90" height="90">

          <p>Please help us with a few more details to secure your identify so you can start getting the ca$h.</p>
        </div>
        <ion-button class="ion-margin-top" @click="() => router.push('/signup/birth')">
          Continue
        </ion-button>
      </div>
    </full-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage } from '@ionic/vue';
import { eye, toggle } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import FullLayout from '../../layouts/FullLayout.vue';


export default  {
  name: 'Tab1',
  components: { IonButton, IonPage, FullLayout },
  setup() {
    const router = useRouter();
    return {
      eye,
      toggle,
      router
    }
  },
  data(){
    return {
      showPassword: false,
      password: ''
    }
  },
  methods: {
    login() {
      // router.push('login')
    }
  }
}
</script>
<style lang="sass" scoped>
h1
  font-weight: bold
.personal-confirmation
  display: flex
  flex-direction: column
  .content
    display: flex
    flex-direction: column
    align-items: center
    width: 75%
    margin: 70px auto
    img
      width: 100px
      height: 100px
      margin-bottom: 10px
</style>