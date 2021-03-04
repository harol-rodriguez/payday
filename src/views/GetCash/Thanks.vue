<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" v-show="false">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <default-layout :mode="'ticket'">
        <div class="payment-thanks">
          <div class="check">
            <img src="/assets/check.png" alt="check">
          </div>
          
          <div class="amount">
            <h1>$1,200</h1>
          </div>
          <div class="amount-text">
            <ion-grid>
              <ion-row>
                <ion-col class="left">
                  To
                </ion-col>
                <ion-col>
                  Bank of America – 9999
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col class="left">
                  Repayment scheduled <br>for
                </ion-col>
                <ion-col>
                  31st of Januay 2020 <br> ($1,250.00)
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <div class="message">
            Your advance payment will be available within 24 hours. You can choose to get instant cash by using the immediate deposit
          </div>
          <div class="buttonForm">
            <ion-button size="large" @click="() => router.push('/menu/')">
              Done
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
  

.payment-thanks
  width: 100%
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
  .check
    img
      width: 115px
      margin-bottom: 11px
  .message
    font-size: 13px
    text-align: left
    color: #7b7b7b
  .amount
    padding: 5px
    border-top: 1px dashed #919191
    border-bottom: 1px dashed #919191
    h1
      margin: 5px 0
    &-text
      margin: 25px 0
      ion-grid
        padding: 0
      ion-col
        text-align: right
        font-size: 13px
        &.left
          text-align: left
          color: #5e92f5
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
      background: #9d9d9d
  .buttonForm
    margin-top: 40px
    width: 100%
    display: flex
    justify-content: center
    &>.button
      width: 250px
</style>