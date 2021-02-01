<template>
  <ion-page>
    <login-container
      title="Welcome back!"
      subtitle="Log back into your account"
      back="/">
      <form>
        <ion-list>
          <ion-item>
            <ion-label position="floating">Username</ion-label>
            <ion-input id="username" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input id="password" required type="password"></ion-input>
            <a slot="end" class="password--show">
              <ion-icon :icon="eye" slot="end"></ion-icon>
            </a>
          </ion-item>
          <ion-text color="dark">
            <p class="ion-margin">
              <ion-icon :icon="toggle"></ion-icon>
              Remember
            </p>
            <p>Forgot password?</p>
          </ion-text>
        </ion-list>
        <ion-button class="ion-margin-top" @click="() => router.push('/menu/')">
          Sing in
        </ion-button>
      </form>
    </login-container>
  </ion-page>
</template>

<script lang="ts">
import { IonText, IonLabel, IonInput, IonItem, IonList, IonButton, IonPage, IonIcon } from '@ionic/vue';
import { eye, toggle } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import LoginContainer from '../components/LoginContainer.vue';


export default  {
  name: 'Tab1',
  components: { IonText, IonLabel, IonInput, IonItem, IonList, IonButton, IonIcon, IonPage, LoginContainer },
  setup() {
    const router = useRouter();
    return {
      eye,
      toggle,
      router
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
form
  width: 100%
  ion-button 
    padding: 0 15px
    width: 100%
h1
  font-size: 37px
  font-weight: 800
  line-height: 1
  margin-bottom: 25px
span
  font-size: 16pt

.password--show
  padding-top: 30px
</style>