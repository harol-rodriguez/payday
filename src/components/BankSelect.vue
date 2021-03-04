<template>
  <div>
    <ion-header>
        <ion-toolbar v-show="false">
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content class="bank-select__container">
      <div class="bank-select">
        <div class="back" @click="close('')">
          <ion-icon :icon="chevronBack"></ion-icon>
        </div>
        <h3><b>Select your bank</b></h3>
        
        <ion-item v-show="false">
          <ion-input id="username" type="text" required></ion-input>
        </ion-item>
        <div class="selector">
          <div class="card" @click="close('bank1')">
            <img src="/banks/bank1.png" alt="" srcset="">
          </div>
          <div class="card" @click="close('bank2')">
            <img src="/banks/bank2.png" alt="" srcset="">
          </div>
          <div class="card" @click="close('bank3')">
            <img src="/banks/bank3.png" alt="" srcset="">
          </div>
          <div class="card" @click="close('bank4')">
            <img src="/banks/bank4.png" alt="" srcset="">
          </div>
          <div class="card" @click="close('bank5')">
            <img src="/banks/bank5.png" alt="" srcset="">
          </div>
          <div class="card" @click="close('bank6')">
            <img src="/banks/bank6.png" alt="" srcset="">
          </div>
        </div>
        <ion-button v-show="actual !== null" class="ion-margin-top" color="light" @click="close('$'+actual)">
          Select
        </ion-button>
      </div>
    </ion-content>
  </div>
</template>

<script>
import { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { chevronForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  components: { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon },
  props: {
    title: { type: String, default: 'Super Modal' },
    close: { type: Function }
  },
  setup() {
    return {
      chevronBack,
      chevronForward
    }
  },
  data() {
    return {
      amounts: [20, 35, 40, 50, 100, 300, 500, 700, 1000, 1200, 1500, 2800, 3500],
      actual: null
    }
  },
  methods: {
    anotherAmount () {
      console.log('jeje');
      this.actual = ''
    },
    selectAmount (amount) {
      this.actual = amount
    }
  },
  computed: {
    prevArray () {
      const actualIndex = this.amounts.indexOf(this.actual)
      return actualIndex-1
    },
    nextArray () {
      const actualIndex = this.amounts.indexOf(this.actual)
      return actualIndex+1
    }
  }
});
</script>
<style lang="sass" scoped>
.bank-select
  padding: 80px 60px
  .back
    position: absolute
    left: 51px
    top: 37px
    ion-icon
      font-size: 25px
  &__container
    height: 100vh
    .anotherAmount
      display: flex
      align-items: center
      margin-top: 40px
      margin-bottom: 50px
      p
        margin-right: 25px
        font-size: 14px
      ion-input
        user-select: none
        width: 90px
        padding: 2px 0px 2px 10px!important
        border: 1px solid #fff
        border-radius: 20px
        text-align: center
    .selector
      margin-top: 80px
      display: flex
      justify-content: space-around
      align-items: center
      flex-wrap: wrap
      .card
        width: 70px
        height: 70px
        background-color: #fcfcfc
        box-shadow: 0px 1px 4px rgba(0,0,0,0.18)
        border-radius: 14px
        margin-bottom: 25px
        display: flex
        justify-content: center
        align-items: center
        &:hover
          box-shadow: 1px 1px 7px 1px rgba(99,111,255,0.46)
</style>
