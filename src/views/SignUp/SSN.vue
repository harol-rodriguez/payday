<template>
  <ion-page>
    <full-layout back="/signup/">
      <div class="register-step">
        <h1>Verification</h1>
        <span>We require this for anti-fraud purposes and to verify your identity. Your safety means a lot to us!</span>
        <br>
        <br>
        <br>
        <ion-item>
          <ion-label position="floating">Social Security Number (SSN)</ion-label>
          <ion-input id="ssn" type="tel" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Confirm SSN</ion-label>
          <ion-input id="confirm" type="tel" required></ion-input>
        </ion-item>
        <a class="tooltip">This step cannot be changed in the future</a>
        <ion-button class="ion-margin-top" @click="() => router.push('/signup/details')">
          Next
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
    margin-top: 70px
.tooltip
  width: 100%
  text-align: center
  display: block
  font-size: 14px
  margin-top: 5px
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