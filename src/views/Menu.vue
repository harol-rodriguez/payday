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
          <!-- <ion-icon :icon="chevronBack"></ion-icon> -->
        </ion-row>
        <ion-row class="header ion-margin-bottom ion-justify-content-left ion-align-items-end">
          <div v-if="false">
            <h1>
              Let’s get started
            </h1>
            <span>Let’s start your financial journey:</span>
          </div>
          <div v-if="true">
            <h1>
              Hi Jhon Doe
            </h1>
            <div style="position: absolute;top: 77px;right: 50px;">
              <ionAvatar>
                <img src="/assets/avatar.svg">
              </ionAvatar>
            </div>
            <span>Select an option to start</span>
          </div>
        </ion-row>
        <ion-row class="ion-justify-content-left menu-content">
          <ion-card @click="() => router.push('/menu/getcash')">
            <ion-card-header>
              <ion-card-subtitle>Get cash anytime</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="line" />
              Advance your wage on demand. Receive up to $400 upfront for your first advance.
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Financial Management</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="line" />
              Build your credit score and optimize your expenses to get the most of your money.
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Invest</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="line" />
              Set your goals and start trading – start with $1 only
            </ion-card-content>
          </ion-card>
        </ion-row>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonAvatar, IonCardContent, IonCardSubtitle, IonTitle, IonHeader, IonCardHeader, IonToolbar, IonCard, IonGrid, IonRow, IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'home',
  components: { IonAvatar, IonCardContent, IonCardSubtitle, IonTitle, IonHeader, IonCardHeader, IonToolbar, IonCard ,IonGrid, IonRow, IonContent, IonPage },
  setup() {
    const router = useRouter();
    return {
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
.full-menu
  ion-card-header
    padding-bottom: 0
  ion-card-subtitle
    color: #5a81f2 !important
  ion-card
    width: 100%
    margin: 24px 35px 0px
    color: #a1a1a1
  ion-card-content
    font-size: 14px
    .line
      margin: 11px 0
      border-top: 1px dashed #a7a7a7

</style>