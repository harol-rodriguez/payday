<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="transaction" href="/menu/getcash">
          <ion-icon :icon="walletOutline">Transaction</ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/menu/index">
          <ion-icon :icon="homeOutline">Home</ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="wallet" disabled>
          <ion-icon :icon="pieChartOutline">Wallet</ion-icon>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import { walletOutline, pieChartOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonPage, IonIcon },
  setup() {
    return {
      walletOutline, 
      pieChartOutline, 
      homeOutline,
    }
  }
}
</script>
<style lang="sass" scoped>
ion-tab-button
  object
    width: 25px

</style>