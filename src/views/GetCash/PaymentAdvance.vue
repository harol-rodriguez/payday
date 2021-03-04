<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" v-show="false">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <default-layout back="/menu/">
        <div class="payment-advance">
          <h3>Payment Advance</h3>
          <form>
            <ion-item>
              <ion-label position="floating">How much do you want to advance?</ion-label>
              <ion-input :value="amount" @ionFocus="selectAmount" id="amount" placeholder="$00.00" required></ion-input>
            </ion-item>
            <ion-grid>
              <ion-row>
                <ion-col style="padding-top: 28px;padding-left: 14px; font-size: 13px">
                  <ion-label position="floating">Available balance</ion-label>
                </ion-col>
                <ion-col>
                  <h2>$ 1200.00</h2>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <ion-button @click="advanceType = 'immediate'" :color="advanceType !== 'immediate'?'light':null">
                    Immediate cash
                  </ion-button>
                </ion-col>
                <ion-col>
                  <ion-button @click="advanceType = 'regular'" :color="advanceType === 'immediate'?'light':null">
                    Regular Times
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
            <div class="bankSelector-container" @click="selectBank">
              <div class="bankSelector">
                <div class="bankSelector-logo"><img :src="'/banks/'+ bank + '.png'" alt="" srcset=""></div>
                <div class="bankSelector-description">
                    <span>Immediate deposit to</span>
                    <span class="bank">Bank of America ending in 9999</span>
                </div>
              </div>
              <span class="selectBankButton">Select/Link other bank account</span>
            </div>
            <div class="buttonForm">
              <ion-button size="large" @click="() => router.push('/menu/getcash/confirm')">
                Next
              </ion-button>
            </div>
          </form>
        </div>
      </default-layout>
      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, modalController  } from '@ionic/vue';
import AmountSelect from '@/components/AmountSelect.vue';
import BankSelect from '@/components/BankSelect.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useRouter } from 'vue-router';

export default  {
  name: 'transaction',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, DefaultLayout, IonLabel, IonInput },
  setup() {
    const router = useRouter();
    return {
      router
    }
  },
  data() {
    return {
      advanceType: 'immediate',
      amount: '',
      bank: 'bank1'
    }
  },
  methods: {
    closeModal (amount) {
      this.amount = amount
      // console.log(e);
      
    },
    closeModalBank (bank) {
      this.bank = bank
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
    },
    async selectBank () {
      const modal = await modalController
        .create({
          component: BankSelect,
          componentProps: {
            title: '',
            close: (bank) => {modal.dismiss(), this.closeModalBank(bank)}
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
  

.payment-advance
  width: 100%
  padding-top: 40px
  h3
    color: #000
    text-align: center
    font-size: 20px
    font-weight: 600
    margin-bottom: 20px
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