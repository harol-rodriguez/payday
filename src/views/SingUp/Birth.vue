<template>
  <ion-page>
    <full-layout back="/singup/">
      <div class="register-step">
        <h1>What’s your date <br>of birth?</h1>
         <ion-item>
            <ion-label position="floating">MM/DD/YYYY</ion-label>
            <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09"></ion-datetime>
          </ion-item>
        <ion-button class="ion-margin-top" @click="() => router.push('/singup/address')">
          Next
        </ion-button>
      </div>
    </full-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonDatetime, IonItem, IonLabel } from '@ionic/vue';
import { eye, toggle } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import FullLayout from '../../layouts/FullLayout.vue';


export default  {
  name: 'Tab1',
  components: { IonDatetime, IonItem, IonLabel, IonButton, IonPage, FullLayout },
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
.register-step
  width: 100%
  ion-item
    margin: 40px 0 100px
</style>