<template>
  <ion-page>
    <full-layout back="/singup/" mode="full-color">
      <div class="confirma">
        <h1>Confirm your <br>details</h1>
        <span>Please make sure your information is accurate</span>
        <br>
        <ion-row class="ion-justify-content-left menu-content">
          <ion-card @click="() => router.push('/menu/getcash')">
            <ion-card-header>
              <ion-card-subtitle>Personal info</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="line" />
              <ion-grid>
                <ion-row>
                  <ion-col class="left">
                    Name
                  </ion-col>
                  <ion-col>
                    Joe Bruin
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col class="left">
                    Email
                  </ion-col>
                  <ion-col>
                    joe.bruin@ucla.edu
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col class="left">
                    Phone
                  </ion-col>
                  <ion-col>
                    +1 400 44-2222
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col class="left">
                    SSN
                  </ion-col>
                  <ion-col>
                    *** ** XXXX
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>ID verification info</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="line" />
              <ion-grid>
                <ion-row>
                  <ion-col class="left">
                    Birthday
                  </ion-col>
                  <ion-col>
                    01/01/2020
                  </ion-col>
                </ion-row>
                <ion-row>
                  <ion-col class="left">
                    Address
                  </ion-col>
                  <ion-col>
                    111 Santa Monica Ave, CA 90049
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-header>
              <ion-card-subtitle>Employer</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <div class="line" />
                <ion-grid>
                  <ion-row>
                    <ion-col class="left">
                      Company
                    </ion-col>
                    <ion-col>
                      PayDay Inc
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col class="left">
                      Employee ID
                    </ion-col>
                    <ion-col>
                      103-545-4444
                    </ion-col>
                  </ion-row>
                </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-row>
        <ion-button class="ion-margin-top" @click="() => router.push('/menu')">
          Verify my identity
        </ion-button>
      </div>
    </full-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage, IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/vue';
import { eye, toggle } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import FullLayout from '../../layouts/FullLayout.vue';


export default  {
  name: 'Tab1',
  components: { IonButton, IonPage, FullLayout, IonCard, IonCardHeader, IonCardSubtitle },
  setup() {
    const router = useRouter();
    return {
      eye,
      toggle,
      router
    }
  },
  data(){
    return {
      showPassword: false,
      password: ''
    }
  },
  methods: {
    login() {
      // router.push('login')
    }
  }
}
</script>
<style lang="sass" scoped>
h1
  font-weight: bold
span
  font-size: 14px
.confirma
  display: flex
  flex-direction: column
  
  ion-col
    padding: 0
  ion-card-header
    padding-bottom: 0
  ion-card-subtitle
    color: #5a81f2 !important
  ion-card
    width: 100%
    color: #a1a1a1
    margin: 0 0 15px
  ion-card-content
    font-size: 14px
    .line
      margin: 11px 0
      border-top: 1px dashed #a7a7a7
  .content
    display: flex
    flex-direction: column
    align-items: center
    width: 75%
    margin: 70px auto
    img
      width: 100px
      height: 100px
      margin-bottom: 10px
</style>