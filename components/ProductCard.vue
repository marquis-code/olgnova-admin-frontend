<template>
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <!-- Product Image -->
      <div class="relative h-48 bg-gray-100 overflow-hidden">
        <img
          v-if="product.imageUrl"
          :src="product.imageUrl"
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          v-else
          class="w-full h-full flex items-center justify-center"
        >
          <Package class="w-12 h-12 text-gray-400" />
        </div>
        
        <!-- Status Badge -->
        <div class="absolute top-3 left-3">
          <span
            :class="[
              'px-2 py-1 text-xs font-semibold rounded-full',
              getStatusColor(product.status)
            ]"
          >
            {{ formatStatus(product.status) }}
          </span>
        </div>
  
        <!-- Category Badge -->
        <div class="absolute top-3 right-3">
          <span class="px-2 py-1 text-xs font-medium bg-white bg-opacity-90 text-gray-700 rounded-full">
            {{ formatCategoryName(product.category) }}
          </span>
        </div>
  
        <!-- Digital Badge -->
        <div v-if="product.isDigital" class="absolute bottom-3 left-3">
          <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full flex items-center space-x-1">
            <Download class="w-3 h-3" />
            <span>Digital</span>
          </span>
        </div>
  
        <!-- Sale Badge -->
        <div v-if="product.originalPrice && product.originalPrice > product.price" class="absolute bottom-3 right-3">
          <span class="px-2 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
            {{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}% OFF
          </span>
        </div>
      </div>
  
      <!-- Product Content -->
      <div class="p-4">
        <!-- Title and Author -->
        <div class="mb-3">
          <h3 class="font-semibold text-gray-900 line-clamp-2 group-hover:text-indigo-700 transition-colors mb-1">
            {{ product.name }}
          </h3>
          <p class="text-sm text-gray-600">by {{ product.author }}</p>
        </div>
  
        <!-- Description -->
        <p class="text-sm text-gray-600 line-clamp-2 mb-3">
          {{ product.description }}
        </p>
  
        <!-- Price -->
        <div class="flex items-center space-x-2 mb-3">
          <span class="text-lg font-bold text-gray-900">₦{{ formatPrice(product.price) }}</span>
          <span
            v-if="product.originalPrice && product.originalPrice > product.price"
            class="text-sm text-gray-500 line-through"
          >
            ₦{{ formatPrice(product.originalPrice) }}
          </span>
        </div>
  
        <!-- Stock and Availability -->
        <div class="flex items-center justify-between mb-3 text-sm">
          <div class="flex items-center space-x-1">
            <Package class="w-4 h-4 text-gray-400" />
            <span class="text-gray-600">Stock:</span>
            <span
              :class="[
                'font-medium',
                product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'
              ]"
            >
              {{ product.stock }}
            </span>
          </div>
          <span
            :class="[
              'px-2 py-1 text-xs font-medium rounded-full',
              product.availability === 'available' 
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            ]"
          >
            {{ product.availability === 'available' ? 'Available' : 'Unavailable' }}
          </span>
        </div>
  
        <!-- Stats -->
        <div class="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div class="flex items-center space-x-3">
            <span class="flex items-center space-x-1">
              <Eye class="w-3 h-3" />
              <span>{{ product.viewCount || 0 }}</span>
            </span>
            <span class="flex items-center space-x-1">
              <ShoppingCart class="w-3 h-3" />
              <span>{{ product.salesCount || 0 }}</span>
            </span>
            <span class="flex items-center space-x-1">
              <Star class="w-3 h-3" />
              <span>{{ product.rating || 0 }}</span>
            </span>
          </div>
        </div>
  
        <!-- Tags -->
        <div v-if="product.tags?.length" class="flex flex-wrap gap-1 mb-4">
          <span
            v-for="tag in product.tags.slice(0, 3)"
            :key="tag"
            class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
          >
            {{ tag }}
          </span>
          <span
            v-if="product.tags.length > 3"
            class="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
          >
            +{{ product.tags.length - 3 }}
          </span>
        </div>
  
        <!-- Action Buttons -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1">
            <button
              @click="viewProduct"
              class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              title="View Details"
            >
              <Eye class="w-4 h-4" />
            </button>
            <button
              @click="editProduct"
              class="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              title="Edit Product"
            >
              <Edit class="w-4 h-4" />
            </button>
            <button
              @click="showStockModal = true"
              class="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
              title="Update Stock"
            >
              <Package class="w-4 h-4" />
            </button>
            <button
              @click="deleteProduct"
              class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              title="Delete Product"
            >
              <Trash2 class="w-4 h-4" />
            </button>
          </div>
  
          <!-- Quick Stock Update -->
          <div class="flex items-center space-x-1">
            <button
              @click="updateStock(-1)"
              :disabled="product.stock <= 0"
              class="p-1 text-gray-600 hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus class="w-3 h-3" />
            </button>
            <button
              @click="updateStock(1)"
              class="p-1 text-gray-600 hover:text-green-600"
            >
              <Plus class="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
  
      <!-- Stock Update Modal -->
      <Modal v-model="showStockModal" title="Update Stock" size="sm">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Current Stock: {{ product.stock }}
            </label>
            <input
              v-model.number="newStock"
              type="number"
              min="0"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter new stock quantity"
            />
          </div>
          <div class="flex justify-end space-x-3">
            <button
              @click="showStockModal = false"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              @click="confirmStockUpdate"
              class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import {
    Package, Download, Eye, Edit, Trash2, ShoppingCart, Star,
    Plus, Minus
  } from 'lucide-vue-next'
  import Modal from './Modal.vue'
  
  interface Props {
    product: any
  }
  
  const props = defineProps<Props>()
  
  const showStockModal = ref(false)
  const newStock = ref(props.product.stock)
  
  const productEmit = defineEmits<{
    view: [product: any]
    edit: [product: any]
    delete: [product: any]
    'update-stock': [productId: string, newStock: number]
  }>()
  
  const updateStock = (change: number) => {
    const newValue = props.product.stock + change
    if (newValue >= 0) {
      productEmit('update-stock', props.product._id, newValue)
    }
  }
  
  const confirmStockUpdate = () => {
    productEmit('update-stock', props.product._id, newStock.value)
    showStockModal.value = false
  }
  
  const viewProduct = () => {
    productEmit('view', props.product)
  }
  
  const editProduct = () => {
    productEmit('edit', props.product)
  }
  
  const deleteProduct = () => {
    productEmit('delete', props.product)
  }
  
  const getStatusColor = (status: string) => {
    const colors = {
      'active': 'bg-green-100 text-green-800',
      'inactive': 'bg-red-100 text-red-800',
      'draft': 'bg-gray-100 text-gray-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }
  
  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }
  
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG').format(price)
  }
  </script>
  