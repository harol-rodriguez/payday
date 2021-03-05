<template>
  <ion-page>
    <login-container
      title="Create your account"
      back="/">
      <form>
        <ion-list>
          <ion-item>
            <ion-label position="floating">First Name</ion-label>
            <ion-input id="firstname" type="text" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Last Name</ion-label>
            <ion-input id="firstname" type="text" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email address</ion-label>
            <ion-input id="username" type="email" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input id="password" v-model="password" required :type="showPassword ? 'text' : 'password'"></ion-input>
            <a slot="end" class="password--show" @click="showPassword=!showPassword">
              <ion-icon :icon="eye" slot="end"></ion-icon>
            </a>
          </ion-item>
        </ion-list>
        
        <div class="terms">
          <ion-checkbox />
          <p>I agree to the: <br><a>Electronic Transaction Esign Consent</a></p>
        </div>
        <div class="terms">
          <ion-checkbox />
          <p>I agree to the:following agreements: <br><a>Arbitration & Waivers Agreements <br> Privacity Policy<br>Terms and Conditions<br>Membership Agreement</a></p>
        </div>
        <br>
        <br>
        <ion-button class="ion-margin-top" @click="() => router.push('/singup/personal-confirmation')">
          Confirm
        </ion-button>
      </form>
    </login-container>
  </ion-page>
</template>

<script lang="ts">
import { IonLabel, IonInput, IonItem, IonList, IonButton, IonPage, IonIcon } from '@ionic/vue';
import { eye, toggle } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import LoginContainer from '../../components/LoginContainer.vue';


export default  {
  name: 'Tab1',
  components: { IonLabel, IonInput, IonItem, IonList, IonButton, IonIcon, IonPage, LoginContainer },
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
form
  width: 100%
  ion-button 
    padding: 0 15px
    width: 100%
.terms
  display: flex
  margin-top: 25px
  font-size: 14px
  padding: 0 15px
  p
    margin: 0 15px
    color: #979797
    flex: 1
h1
  font-size: 37px
  font-weight: 800
  line-height: 1
  margin-bottom: 25px
span
  font-size: 16pt

.password--show
  padding-top: 30px

.register
  color: #000
  font-size: 13px
  text-align: center
  margin-top: 60px
</style>