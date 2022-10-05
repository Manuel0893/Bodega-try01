<template>
    <button
        class="btn btn-primary"
        aria-controls="signUpModal"
        @click="signUpModal=true"
    >
        Iniciar Sesion
</button>
    <MDBModal
        id="signUpModal"
        tabindex="-1"
        labelledby="signUpLabel"
        v-model="signUpModal"
    >
        <MDBModalHeader>
        <MDBModalTitle id="signUpStockModalLabel"> Nuevo Ingreso </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <MDBInput label="Ingresar Correo" v-model="input1" />
            <MDBInput label="Ingresar Contraseña" v-model="input1" />
            <MDBInput label="¿Olvido su contraseña?" v-model="input1" />
        </MDBModalBody>
    <MDBModalFooter>
      <button class="btn btn-primary" @click="signUpModal = false">Close</button>
      <button class="btn btn-secondary" @click="signUpModal = false">Save changes</button>
    </MDBModalFooter>
  </MDBModal>
</template>
<script>
    import {
      MDBModal,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
      MDBInput,
    } from 'mdb-vue-ui-kit';
    import { ref } from 'vue';
    export default {
      components: {
        MDBInput,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
      },
      setup() {
        const signUpModal = ref(false);
        return {
          signUpModal,
        };
      },
    };
  </script>