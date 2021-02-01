<template>
  <ion-page>
    <ion-content :fullscreen="true" class="full-menu">
      <ion-header collapse="condense" v-show="false">
        <ion-toolbar>
          <ion-title size="large">menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row class="ion-margin ion-justify-content-left header-icon">
          <ion-icon :icon="chevronBack"></ion-icon>
        </ion-row>
        <ion-row class="header ion-margin-bottom ion-justify-content-left ion-align-items-end">
          <div>
            <h1>
              Let’s get started
            </h1>
            <span>Let’s start your financial journey:</span>
          </div>
        </ion-row>
        <ion-row class="ion-justify-content-left menu-content">
          <ion-card @click="() => router.push('/menu/getcash')">
            <ion-card-header>
              <ion-card-subtitle>Get cash anytime</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              Advance your wage on demand. Receive up to $XXX upfront for your first advance.
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Financial Management</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              Advance your wage on demand. Receive up to $XXX upfront for your first advance.
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Invest</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              Advance your wage on demand. Receive up to $XXX upfront for your first advance.
            </ion-card-content>
          </ion-card>
        </ion-row>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonCardContent, IonCardSubtitle, IonCard, IonGrid, IonRow, IonPage, IonContent, IonIcon } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'home',
  components: { IonCardContent, IonCardSubtitle, IonCard ,IonGrid, IonRow, IonContent, IonPage, IonIcon },
  setup() {
    const router = useRouter();
    return {
      chevronBack,
      router
    }
  }
}
</script>
<style lang="sass" scoped>
.header
  height: 110px
  padding: 0 35px
  h1
    font-weight: 800
ion-card
  width: 100%
  margin: 24px 35px 0px
</style>