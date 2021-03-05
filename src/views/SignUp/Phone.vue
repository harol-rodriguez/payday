<template>
  <ion-page>
    <full-layout back="/signup/">
      <div class="register-step">
        <h1>What is your mobile phone number?</h1>
        <br>
        <br>
        <br>
        <ion-item>
          <ion-label position="floating">Phone number</ion-label>
          <ion-input id="phone" type="tel" required></ion-input>
        </ion-item>
        <div class="terms">
          <ion-checkbox />
          <p>I consent to receive information on services, promotional or marketing information, discounts and savings from MoneyLion and its affiliates by voice or automatic telephone dialing system, including prerecorded messages and text messages. Standard data and message rates will apply. <a>SMS Text & Communication Consent.</a></p>
        </div>
        <ion-button class="ion-margin-top" @click="() => router.push('/signup/code')">
          Send code
        </ion-button>
      </div>
    </full-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonInput, IonItem, IonLabel } from '@ionic/vue';
import { eye, toggle } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import FullLayout from '../../layouts/FullLayout.vue';


export default  {
  name: 'Tab1',
  components: { IonInput, IonItem, IonLabel, IonButton, IonPage, FullLayout },
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
span
  font-size: 14px
.register-step
  width: 100%
  ion-button
    margin-top: 40px

.terms
  display: flex
  margin-top: 25px
  font-size: 14px
  padding: 0 15px
  p
    margin: 0 15px
    color: #979797
    flex: 1
</style>