<template>
  <div>
    <h2 class="text-center mb-4">Gestión de Productos</h2>
    <ProductForm
      :producto="producto"
      :editIndex="editIndex"
      @guardar="guardarProducto"
      @cancelar="cancelarEdicion"
    />
    <ProductTable
      :productos="productos"
      @editar="editarProducto"
      @eliminar="eliminarProducto"
    />
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue'
import ProductTable from '../components/ProductTable.vue'

export default {
  components: { ProductForm, ProductTable },
  data() {
    return {
      productos: [],
      producto: { codigo: '', descripcion: '', precio: 0 },
      editIndex: null
    }
  },
  mounted() {
    this.cargarProductos()
  },
  methods: {
    guardarProducto(producto) {
      if (this.editIndex === null) {
        this.productos.push({ ...producto })
      } else {
        this.productos[this.editIndex] = { ...producto }
        this.editIndex = null
      }
      this.guardarEnLocalStorage()
      this.resetForm()
    },
    editarProducto(index) {
      this.producto = { ...this.productos[index] }
      this.editIndex = index
    },
    eliminarProducto(index) {
      if (confirm('¿Seguro que deseas eliminar este producto?')) {
        this.productos.splice(index, 1)
        this.guardarEnLocalStorage()
      }
    },
    cancelarEdicion() {
      this.editIndex = null
      this.resetForm()
    },
    guardarEnLocalStorage() {
      localStorage.setItem('productos', JSON.stringify(this.productos))
    },
    cargarProductos() {
      const data = localStorage.getItem('productos')
      if (data) {
        this.productos = JSON.parse(data)
      }
    },
    resetForm() {
      this.producto = { codigo: '', descripcion: '', precio: 0 }
    }
  }
}
</script>
