<template>
  <ion-page>
    <ion-content :fullscreen="true" class="full-color">
      <ion-header collapse="condense" v-show="false">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'transaction',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>