<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/menu/index">
          <ion-icon src="/assets/icon/home.svg">Home</ion-icon>
        </ion-tab-button>
          
        <ion-tab-button tab="wallet" disabled>
          <ion-icon src="/assets/icon/wallet.svg">Wallet</ion-icon>
        </ion-tab-button>
        
        <ion-tab-button tab="transaction" href="/menu/getcash">
          <ion-icon src="/assets/icon/transaction.svg">Transaction</ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonPage } from '@ionic/vue';
// import { walletOutline, square, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonPage },
  setup() {
    return {
      // walletOutline, 
      // square, 
      // homeOutline,
    }
  }
}
</script>
<style lang="sass" scoped>
ion-tab-button
  object
    width: 25px

</style>