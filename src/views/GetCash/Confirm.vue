<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" v-show="false">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <default-layout class="full-color2" back="/menu/getcash">
        <div class="payment-confirm">
          <h3>Payment Advance</h3>
          <h1>$1,200.00</h1>
          <p>Wage Advance</p>
          
          <div class="bankSelector-container">
            <div class="bankSelector">
              <div class="bankSelector-logo"><img :src="'/banks/bank1.png'" alt="" srcset=""></div>
              <div class="bankSelector-description">
                <span>Immediate deposit to</span>
                <span class="bank">Bank of America ending in 9999</span>
              </div>
            </div>
          </div>
          <div class="amount-confirm-text">
            <span>Payday fee </span> <span class="amount"> $50</span>
          </div>
          <div class="buttonForm">
            <ion-button size="large" @click="() => router.push('/menu/getcash/thanks')">
              Confirm
            </ion-button>
          </div>
        </div>
      </default-layout>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, modalController  } from '@ionic/vue';
import AmountSelect from '@/components/AmountSelect.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useRouter } from 'vue-router';

export default  {
  name: 'transaction',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, DefaultLayout, },
  setup() {
    const router = useRouter();
    return {
      router
    }
  },
  data() {
    return {
      advanceType: 'immediate',
      amount: ''
    }
  },
  methods: {
    closeModal (amount) {
      this.amount = amount
      // console.log(e);
      
    },
    async selectAmount () {
      const modal = await modalController
        .create({
          component: AmountSelect,
          componentProps: {
            title: '',
            close: (amount) => {modal.dismiss(), this.closeModal(amount)}
          },
        })
      return modal.present();
    }
  }
}
</script>
<style lang="sass" scoped>

form
  width: 100%
  color: #000
  h2
    font-weight: bold
  

.payment-confirm
  width: 100%
  padding-top: 40px
  color: #000
  text-align: center
  h1
    font-size: 30px
    font-weight: 600
  h3
    color: #000
    text-align: center
    font-size: 20px
    font-weight: 600
    margin-bottom: 20px
  .amount-confirm-text
    margin-top: 50px
    display: flex
    justify-content: center
    align-items: center
    font-size: 19px
    .amount
      font-weight: bold
      font-size: 24px
      padding-left: 6px
  .bankSelector
    margin-top: 30px
    border-radius: 18px
    background-color: #f4f5f8
    width: 100%
    min-height: 80px
    display: flex
    padding: 20px 20px
    &-container
      .selectBankButton
        cursor: pointer
        display: block
        color: #5e92f5
        font-size: 12pt
        padding-left: 17px
        margin-top: 20px
    &-description
      flex: 1
      padding-left: 15px
      text-align: left
      span
        display: block
        font-size: 10pt
        color: #9d9d9d
        &.bank
          color: #000
          font-weight: bold
    &-logo
      width: 42.0px
      height: 42.0px
      background: #f4f5f8
      display: flex
      justify-content: center
      align-items: center
  .buttonForm
    margin-top: 40px
    width: 100%
    display: flex
    justify-content: center
    &>.button
      width: 250px
</style>