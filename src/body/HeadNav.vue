<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/App">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/inventory">Inventario</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/SignUp">Registrarse</a>
          </li>
          <li class="nav-item">
            <SignIn/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->

  <!-- Jumbotron -->
  <div class="p-5 text-center bg-light">
    <h1 class="mb-3">Inventario</h1>
    <h4 class="mb-3">control de existencias</h4>
    <a class="btn btn-primary" href="" role="button">Call to action</a>
  </div>
  <!-- Jumbotron -->
</template>

<script>
import SignIn from '@/components/sign-in.vue';
import Inventario from '@/components/InventarioMain.vue'
export default {
  data(){ Inventario},
    components: { SignIn }
}

</script>
