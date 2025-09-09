<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Mi App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/crud">CRUD</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/acerca">Acerca de</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenido dinámico -->
    <div class="container mt-4">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: { RouterLink, RouterView }
}
</script>
