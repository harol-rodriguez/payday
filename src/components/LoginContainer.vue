<template>
  <ion-content :fullscreen="true" class="full-color">
    <ion-grid>
      <ion-row class="ion-justify-content-left header-icon">
        <ion-icon :icon="chevronBack" @click="() => router.push(back)"></ion-icon>
      </ion-row>
      <ion-row class="header ion-margin-bottom ion-justify-content-left ion-align-items-end">
        <h1>{{ title }}</h1>
        <span>{{ subtitle }}</span>
      </ion-row>
      <ion-row class="login-body ion-justify-content-left">
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
  name: 'LoginContainer',
  components: { IonGrid, IonRow, IonContent, IonIcon },
  props: ['title', 'subtitle', 'back'],
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
.login {
  &-body {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: calc(100vh - 174px);
    background: #ffffff;
    padding: 20px 19px 0;
  }
}
</style>