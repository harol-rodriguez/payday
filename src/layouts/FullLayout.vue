<template>
  <ion-content :fullscreen="true" :class="mode">
    <ion-grid class="container">
      <ion-row class="ion-justify-content-left header-icon">
        <ion-icon :icon="chevronBack" @click="() => router.push(back)"></ion-icon>
      </ion-row>
      <ion-row class="full-body ion-justify-content-left" :class="mode">
        <slot />
      </ion-row>
    </ion-grid>
  </ion-content>
</template>


<script lang="ts">

import { IonGrid, IonRow, IonContent, IonIcon } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default {
  name: 'DefaultLayout',
  components: { IonGrid, IonRow, IonContent, IonIcon },
  props: ['back', 'mode'],
  setup() {
    const router = useRouter();
    return {
      chevronBack,
      router
    }
  }
}
</script>

<style lang="scss" scoped>
.default {
  &-layout {
    &.ticket {
      .container
      {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
    }
    .container
    {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
h1 {
  width: 100%;
  font-weight: 800;
}
.header {
  padding-top: 30px;
  padding-left: 38px;
  h1 {
    width: 100%;
    font-weight: 800;
  }
  span {
    font-size: 10.5pt;
  }
  &-icon{
    padding-top: 26px;
    font-size: 19pt;
    margin-left: 9px;
  }
}
ion-grid {
  margin: 0;
  padding: 0;
  height: 100%;
}
.full {
  &-body {
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: calc(100vh - 174px);
    padding: 20px 45px 0;
    &.ticket {
      margin: 80px 19px 40px;
      max-height: 490px;
      border-radius: 20px;
    }
    h1 {
      font-weight: bold
    }
  }
}
</style>