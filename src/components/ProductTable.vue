<template>
  <div class="card p-4">
    <h4>Lista de Productos</h4>
    <table class="table table-bordered table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>Código</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(prod, index) in productos" :key="prod.codigo">
          <td>{{ prod.codigo }}</td>
          <td>{{ prod.descripcion }}</td>
          <td>${{ prod.precio.toFixed(2) }}</td>
          <td>
            <button class="btn btn-sm btn-warning me-2" @click="$emit('editar', index)">Editar</button>
            <button class="btn btn-sm btn-danger" @click="$emit('eliminar', index)">Eliminar</button>
          </td>
        </tr>
        <tr v-if="productos.length === 0">
          <td colspan="4" class="text-center">No hay productos registrados</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['productos']
}
</script>
