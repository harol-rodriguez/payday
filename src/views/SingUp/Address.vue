<template>
  <ion-page>
    <full-layout back="/singup/">
      <div class="register-step">
        <h1>What’s your address?</h1>
        <span>Make sure it’s your registered home address</span>
        <br>
        <br>
        <br>
        <ion-item>
          <ion-label position="floating">Street address</ion-label>
          <ion-input id="street" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Apt / Suite (optional)</ion-label>
          <ion-input id="suite" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">City</ion-label>
          <ion-input id="suite" type="text" required></ion-input>
        </ion-item>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item>
                <ion-label position="floating">State</ion-label>
                <ion-input id="state" type="text" required></ion-input>
              </ion-item>
            </ion-col>
            <ion-col>
              <ion-item>
                <ion-label position="floating">Zip</ion-label>
                <ion-input id="zip" type="text" required></ion-input>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-button class="ion-margin-top" @click="() => router.push('/singup/phone')">
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
    margin-top: 40px
</style>