<template>
  <ion-page>
    <ion-content :fullscreen="true" class="home-color">
      <ion-grid class="ion-margin">
        <ion-row class="ion-margin ion-justify-content-left ion-align-items-end" style="height:150px">
          <img src="/assets/logo.png">
        </ion-row>
        <ion-row class="ion-margin-start ion-margin-bottom ion-justify-content-left">
          <h1>Welcome to payday</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
        </ion-row>
        <ion-row class="ion-margin ion-align-items-end" style="height:150px">
          <ion-button class="ion-margin-top" color="light" @click="() => router.push('/login')">
            Start now
            <ion-icon slot="end" :icon="arrowForward"></ion-icon>
          </ion-button>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonGrid, IonRow, IonPage, IonIcon, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { arrowForward } from 'ionicons/icons';
import { useRouter } from 'vue-router';


export default  {
  name: 'Tab1',
  components: { IonButton, IonGrid, IonRow, IonIcon, IonContent, IonPage },
  setup() {
    const router = useRouter();
    return {
      arrowForward,
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
h1
  font-size: 37px
  font-weight: 800
  line-height: 1
  margin-bottom: 25px
span
  font-size: 16pt
</style>