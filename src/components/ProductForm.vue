<template>
  <div class="card p-4 mb-4">
    <h4>{{ editIndex !== null ? 'Editar Producto' : 'Agregar Producto' }}</h4>
    <form @submit.prevent="submitForm">
      <div class="row g-3">
        <div class="col-md-3">
          <label class="form-label">Código</label>
          <input type="text" v-model="localProducto.codigo" class="form-control" required />
        </div>
        <div class="col-md-5">
          <label class="form-label">Descripción</label>
          <input type="text" v-model="localProducto.descripcion" class="form-control" required />
        </div>
        <div class="col-md-2">
          <label class="form-label">Precio</label>
          <input type="number" v-model.number="localProducto.precio" class="form-control" required min="0" />
        </div>
        <div class="col-md-2 d-flex align-items-end gap-2">
          <button class="btn btn-primary w-100" type="submit">
            {{ editIndex !== null ? 'Actualizar' : 'Agregar' }}
          </button>
          <button v-if="editIndex !== null" type="button" class="btn btn-secondary w-100" @click="$emit('cancelar')">
            Cancelar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['producto', 'editIndex'],
  data() {
    return {
      localProducto: { ...this.producto }
    }
  },
  watch: {
    producto: {
      handler(newVal) {
        this.localProducto = { ...newVal }
      },
      deep: true
    }
  },
  methods: {
    submitForm() {
      this.$emit('guardar', this.localProducto)
      this.localProducto = { codigo: '', descripcion: '', precio: 0 }
    }
  }
}
</script>
