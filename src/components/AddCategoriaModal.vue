<template>
    <button
        class="btn btn-primary"
        aria-controls="addCatModal"
        @click="addStockModal=true"
    >
        Agregar Stock
</button>
    <MDBModal
        id="addCatModal"
        tabindex="-1"
        labelledby="addCatabel"
        v-model="addCatModal"
    >
        <MDBModalHeader>
        <MDBModalTitle id="addCatModalLabel"> Nueva Categoria </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <MDBInput label="Ingresar Categoria" v-model="input1" />
            <MDBInput label="Agregar Descripcion" v-model="input1" />
        </MDBModalBody>
    <MDBModalFooter>
      <button class="btn btn-secondary" @click="addCatModal = false">Close</button>
      <button class="btn btn-primary" @click="addCatModal = false">Save changes</button>
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
        const addCatModal = ref(false);
        return {
          addCatModal,
        };
      },
    };
  </script>