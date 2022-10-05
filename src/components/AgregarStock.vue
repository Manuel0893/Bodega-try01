<template>
    <button
        class="btn btn-primary"
        aria-controls="addStockModal"
        @click="addStockModal=true"
    >
        Agregar Stock
</button>
    <MDBModal
        id="addStockModal"
        tabindex="-1"
        labelledby="addStockLabel"
        v-model="addStockModal"
    >
        <MDBModalHeader>
        <MDBModalTitle id="addStockModalLabel"> Nuevo Ingreso </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <MDBInput label="Ingresar Cantidad" v-model="input1" />
            <MDBInput label="Ingresar Marca" v-model="input1" />
            <MDBInput label="Ingresar Modelo" v-model="input1" />
            <MDBInput label="Ingresar Codigo" v-model="input1" />
        </MDBModalBody>
    <MDBModalFooter>
      <button class="btn btn-secondary" @click="addStockModal = false">Close</button>
      <button class="btn btn-primary" @click="addStockModal = false">Save changes</button>
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
        const addStockModal = ref(false);
        return {
          addStockModal,
        };
      },
    };
  </script>
