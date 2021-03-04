<template>
  <ion-content :fullscreen="true" class="default-layout" :class="[mode, mode==='ticket' ?'full-color2': null]">
    <ion-grid class="container">
      <ion-row class="ion-justify-content-left header-icon">
        <ion-icon :icon="chevronBack" @click="() => router.push(back)"></ion-icon>
      </ion-row>
      <ion-row class="login-body ion-justify-content-left" :class="mode">
        <div class="bullet-container" v-if="mode==='ticket'">
          <div class="bullet bullet-left"></div>
          <div class="bullet bullet-right"></div>
        </div>
        <div class="login-separator" v-if="mode!=='ticket'"/>
        <div class="logo-separator" v-else>payday</div>
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
.bullet {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #472fe6;
  border-radius: 30px;
  top: 95px;
  &-container{
    width: 100%;
    position: relative;
  }
  &-left {
    left: -35px;
  }
  &-right {
    left: 100%
  }
}
.logo {
  &-separator {
    position: absolute;
    width: 200px;
    height: 35px;
    left: calc(50% - 200px/2);
    top: -55px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
}
.login {
  &-separator {
    position: absolute;
    background: #ffffff;
    width: 60px;
    height: 5px;
    left: calc(50% - 60px/2);
    top: -15px;
  }
  &-body {
    position: relative;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: calc(100vh - 174px);
    background: #ffffff;
    padding: 20px 19px 0;
    &.ticket {
      margin: 80px 19px 40px;
      max-height: 490px;
      border-radius: 20px;
    }
  }
}
</style>