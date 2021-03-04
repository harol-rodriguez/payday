<template>
  <div>
    <ion-header>
        <ion-toolbar v-show="false">
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content class="full-color amount-select__container">
      <div class="amount-select">
        <h3><b>How much you want to advance?</b></h3>
        <div class="selector">
          <ion-icon :icon="chevronBack"></ion-icon>
          <div class="selector-wrapper">
            <div class="selector-container">
              <div class="item" :class="amount === actual ? 'actual' : null" @click="selectAmount(amount)" v-for="amount in amounts" :key="amount">${{ amount }}</div>
            </div>
          </div>
          <ion-icon :icon="chevronForward"></ion-icon>
        </div>
        <div class="anotherAmount">
          <p>Enter another amount</p>
          <div>
            <ion-input @ionFocus="anotherAmount" id="amount" type="number" v-model="actual">
            $</ion-input>
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
.amount-select
  padding: 80px 60px
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
      &-container
        display: flex
        flex-direction: column
        flex: 1
        align-items: center
        justify-content: space-around
        width: 220px
      &-wrapper
        max-height: 100px
        overflow-x: hidden
        overflow-y: scroll
        -webkit-overflow-scrolling: touch
        &::-webkit-scrollbar 
          display: none
        .item
          border: 1px solid #ffffff
          min-width: 65px
          height: 40px
          border-radius: 12px
          display: flex
          justify-content: center
          align-items: center
          padding: 8px 12px
          margin-bottom: 12px
          &.actual
            // min-width: 73px
            // max-width: 100px
            // height: 50px
            // font-size: 20px
            // text-align: center
            background-color: #fff
            color: #304ae7
            font-weight: bold
          input
            background-color: transparent
            border: none
            text-align: center
            width: 100%
</style>
