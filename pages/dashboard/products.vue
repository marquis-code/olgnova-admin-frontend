<template>
    <div>
      <div class="flex items-center space-x-3 pb-6">
            <button
              @click="showBatchModal = true"
              class="inline-flex items-center px-4 py-2 border border-indigo-300 text-indigo-700 text-sm font-medium rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <Upload class="w-4 h-4 mr-2" />
              Batch Import
            </button>
            <button
              @click="showCreateModal = true"
              class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus class="w-4 h-4 mr-2" />
              Add Product
            </button>
          </div>
  

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Products"
          :value="products?.length || 0"
          icon="lucide:package"
          color="blue"
          :loading="productStatsLoading"
        />
        <StatsCard
          title="In Stock"
          :value="inStockProducts?.length || 0"
          icon="lucide:check-circle"
          color="green"
          :loading="inStockProductsLoading"
        />
        <StatsCard
          title="Out of Stock"
          :value="outOfStockProducts?.length || 0"
          icon="lucide:alert-circle"
          color="red"
          :loading="outOfStockProductsLoading"
        />
        <StatsCard
          title="Total Sales"
          :value="productStats?.totalSales || 0"
          icon="lucide:trending-up"
          color="purple"
          :loading="productStatsLoading"
        />
      </div>
  

     <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div class="relative">
              <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                @input="debouncedSearch"
              />
            </div>
          </div>
  

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              v-model="selectedCategory"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="applyFilters"
            >
              <option value="">All Categories</option>
              <option v-for="category in availableCategories" :key="category.name" :value="category.name">
                {{ formatCategoryName(category.name) }} ({{ category.count }})
              </option>
            </select>
          </div>
  

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Author</label>
            <select
              v-model="selectedAuthor"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="applyFilters"
            >
              <option value="">All Authors</option>
              <option v-for="author in availableAuthors" :key="author" :value="author">
                {{ author }}
              </option>
            </select>
          </div>
  
   
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              v-model="selectedStatus"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="applyFilters"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="draft">Draft</option>
            </select>
          </div>
  

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              v-model="sortBy"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              @change="applyFilters"
            >
              <option value="createdAt:desc">Latest First</option>
              <option value="createdAt:asc">Oldest First</option>
              <option value="name:asc">Name A-Z</option>
              <option value="name:desc">Name Z-A</option>
              <option value="price:asc">Price Low-High</option>
              <option value="price:desc">Price High-Low</option>
              <option value="salesCount:desc">Best Selling</option>
            </select>
          </div>
        </div>
  

        <div class="flex flex-wrap gap-2 mt-4">
          <button
            @click="loadFeaturedProducts"
            :class="[
              'px-3 py-1 text-sm rounded-full transition-colors',
              activeQuickFilter === 'featured'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            Featured
          </button>
          <button
            @click="loadBestSellers"
            :class="[
              'px-3 py-1 text-sm rounded-full transition-colors',
              activeQuickFilter === 'bestsellers'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            Best Sellers
          </button>
          <button
            @click="loadNewArrivals"
            :class="[
              'px-3 py-1 text-sm rounded-full transition-colors',
              activeQuickFilter === 'new'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            New Arrivals
          </button>
          <button
            @click="loadProductsOnSale"
            :class="[
              'px-3 py-1 text-sm rounded-full transition-colors',
              activeQuickFilter === 'sale'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            On Sale
          </button>
          <button
            @click="loadDigitalProducts"
            :class="[
              'px-3 py-1 text-sm rounded-full transition-colors',
              activeQuickFilter === 'digital'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            Digital
          </button>
        </div>
      </div>
  

   <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div v-if="allProductsLoading" class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="i in 6" :key="i" class="animate-pulse">
              <div class="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <div class="space-y-2">
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                <div class="h-3 bg-gray-200 rounded w-1/2"></div>
                <div class="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
  
        <div v-else-if="currentProducts?.length" class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              v-for="product in currentProducts"
              :key="product._id"
              :product="product"
              @edit="editProduct"
              @delete="deleteProductFromGrid"
              @view="viewProduct"
              @update-stock="updateProductStock"
            />
          </div>
        </div>
  
        <div v-else class="p-12 text-center">
          <Package class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p class="text-gray-500 mb-6">Get started by adding your first product.</p>
          <button
            @click="showCreateModal = true"
            class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus class="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>
  

      <Pagination
        v-if="currentProducts?.length"
        :current-page="currentPageNumber"
        :total-count="totalProductCount"
        :per-page="perPage"
        @page-change="changePage"
        class="mt-6"
      />
  

      <Modal v-model="showCreateModal" title="Product Details" size="4xl" :close-on-outside="false">
        <ProductForm
          :product="editingProduct"
          @saved="handleProductSaved"
          @cancel="closeCreateModal"
        />
      </Modal>
  
      <Modal v-model="showViewModal" title="Product Details" size="4xl">
        <ProductView
          v-if="viewingProduct"
          :product="viewingProduct"
          @close="closeViewModal"
          @edit="editFromView"
        />
      </Modal>
  
      <Modal v-model="showBatchModal" title="Batch Import Products" size="lg">
        <BatchImportForm
          @imported="handleBatchImported"
          @cancel="showBatchModal = false"
        />
      </Modal>
  

      <ConfirmModal
        v-model="showDeleteModal"
        title="Delete Product"
        :message="`Are you sure you want to delete '${deletingProduct?.name}'? This action cannot be undone.`"
        confirm-text="Delete"
        confirm-class="bg-red-600 hover:bg-red-700"
        @confirm="confirmDelete"
      /> 
    </div>
  </template>
  
  <script setup lang="ts">
  import { definePageMeta, ref, computed, onMounted } from '#imports'
  import { useDebounceFn } from '@vueuse/core'
  import { Search, Plus, Upload, Package } from 'lucide-vue-next'
  
  // Import all the composables
  import { useGetProducts } from "@/composables/modules/products/useGetProducts"
  import { useGetProductStats } from "@/composables/modules/products/useGetProductStats"
  import { useGetInStockProducts } from "@/composables/modules/products/useGetInStockProducts"
  import { useGetOutOfStockProducts } from "@/composables/modules/products/useGetOutOfStockProducts"
  import { useGetFeaturedProducts } from "@/composables/modules/products/useGetFeaturedProducts"
  import { useGetBestSellers } from "@/composables/modules/products/useGetBestSellers"
  import { useGetNewArrivals } from "@/composables/modules/products/useGetNewArrivals"
  import { useGetProductsOnSale } from "@/composables/modules/products/useGetProductsOnSale"
  import { useGetDigitalProducts } from "@/composables/modules/products/useGetDigitalProducts"
  import { useSearchProducts } from "@/composables/modules/products/useSearchProducts"
  import { useDeleteProduct } from "@/composables/modules/products/useDeleteProduct"
  import { useUpdateProductStock } from "@/composables/modules/products/useUpdateProductStock"
  
  definePageMeta({
    layout: 'dashboard'
  })
  
  // Reactive state
  const showCreateModal = ref(false)
  const showViewModal = ref(false)
  const showBatchModal = ref(false)
  const showDeleteModal = ref(false)
  const editingProduct = ref(null)
  const viewingProduct = ref(null)
  const deletingProduct = ref(null)
  const searchQuery = ref('')
  const selectedCategory = ref('')
  const selectedAuthor = ref('')
  const selectedStatus = ref('')
  const sortBy = ref('createdAt:desc')
  const activeQuickFilter = ref('')
  const perPage = 12
  
  // Composables - destructured
  const { 
    products, 
    loading: productsLoading, 
    totalCount, 
    currentPage, 
    filters, 
    getProducts 
  } = useGetProducts()
  
  const { 
    stats, 
    loading: productStatsLoading
  } = useGetProductStats()
  
  const { 
    inStockProducts, 
    loading: inStockProductsLoading, 
    getInStockProducts 
  } = useGetInStockProducts()
  
  const { 
    outOfStockProducts, 
    loading: outOfStockProductsLoading, 
    getOutOfStockProducts 
  } = useGetOutOfStockProducts()
  
  const { 
    featuredProducts, 
    loading: featuredProductsLoading, 
    getFeaturedProducts 
  } = useGetFeaturedProducts()
  
  const { 
    bestSellers, 
    loading: bestSellersLoading, 
    getBestSellers 
  } = useGetBestSellers()
  
  const { 
    newArrivals, 
    loading: newArrivalsLoading, 
    getNewArrivals 
  } = useGetNewArrivals()
  
  const { 
    productsOnSale, 
    loading: productsOnSaleLoading, 
    getProductsOnSale 
  } = useGetProductsOnSale()
  
  const { 
    digitalProducts, 
    loading: digitalProductsLoading, 
    getDigitalProducts 
  } = useGetDigitalProducts()
  
  const { 
    searchResults, 
    loading: searchProductsLoading, 
    // totalCount: searchTotalCount, 
    // currentPage: searchCurrentPage, 
    searchProducts: performSearchProducts, 
    resetState: resetSearchState 
  } = useSearchProducts()
  
  const { 
    loading: deleteLoading, 
    success: deleteSuccess, 
    deleteProduct, 
    resetState: resetDeleteState 
  } = useDeleteProduct()
  
  const { 
    loading: updateStockLoading, 
    success: updateStockSuccess, 
    updateProductStock: updateStock, 
    resetState: resetUpdateStockState 
  } = useUpdateProductStock()
  
  // Computed
  const allProductsLoading = computed(() => {
    return productsLoading.value || 
           featuredProductsLoading.value || 
           bestSellersLoading.value || 
           newArrivalsLoading.value || 
           productsOnSaleLoading.value || 
           digitalProductsLoading.value ||
           searchProductsLoading.value
  })
  
  const currentProducts = computed(() => {
    if (searchQuery.value && searchProductsData.value) {
      return searchProductsData.value
    }
    
    switch (activeQuickFilter.value) {
      case 'featured':
        return featuredProducts.value
      case 'bestsellers':
        return bestSellers.value
      case 'new':
        return newArrivals.value
      case 'sale':
        return productsOnSale.value
      case 'digital':
        return digitalProducts.value
      default:
        return products.value
    }
  })
  
  const totalProductCount = computed(() => {
    if (searchQuery.value) {
      return searchTotalCount.value || 0
    }
    return totalCount.value || 0
  })
  
  const currentPageNumber = computed(() => {
    if (searchQuery.value) {
      return searchCurrentPage.value || 1
    }
    return currentPage.value || 1
  })
  
  const availableCategories = computed(() => {
    return filters.value?.categories || []
  })
  
  const availableAuthors = computed(() => {
    return filters.value?.authors || []
  })
  
  // Methods
  const loadProducts = async (page = 1) => {
    activeQuickFilter.value = ''
    const filters = {
      page,
      limit: perPage,
      sort: sortBy.value
    }
  
    if (selectedCategory.value) {
      filters.category = selectedCategory.value
    }
  
    if (selectedAuthor.value) {
      filters.author = selectedAuthor.value
    }
  
    if (selectedStatus.value) {
      filters.status = selectedStatus.value
    }
  
    // await getProducts(filters)
  }
  
  const loadFeaturedProducts = async () => {
    activeQuickFilter.value = 'featured'
    await getFeaturedProducts()
  }
  
  const loadBestSellers = async () => {
    activeQuickFilter.value = 'bestsellers'
    await getBestSellers()
  }
  
  const loadNewArrivals = async () => {
    activeQuickFilter.value = 'new'
    await getNewArrivals()
  }
  
  const loadProductsOnSale = async () => {
    activeQuickFilter.value = 'sale'
    await getProductsOnSale()
  }
  
  const loadDigitalProducts = async () => {
    activeQuickFilter.value = 'digital'
    await getDigitalProducts()
  }
  
  const applyFilters = () => {
    if (searchQuery.value) {
      searchQuery.value = ''
    }
    loadProducts(1)
  }
  
  const debouncedSearch = useDebounceFn(async () => {
    if (searchQuery.value.trim()) {
      activeQuickFilter.value = ''
      await performSearchProducts({
        query: searchQuery.value,
        limit: perPage
      })
    } else {
      resetSearchState()
      await loadProducts(1)
    }
  }, 300)
  
  const changePage = (page: number) => {
    if (searchQuery.value) {
      performSearchProducts({
        query: searchQuery.value,
        page,
        limit: perPage
      })
    } else {
      loadProducts(page)
    }
  }
  
  const editProduct = (product) => {
    editingProduct.value = product
    showCreateModal.value = true
  }
  
  const viewProduct = (product) => {
    viewingProduct.value = product
    showViewModal.value = true
  }
  
  const editFromView = (product) => {
    closeViewModal()
    editProduct(product)
  }
  
  const confirmDelete = async () => {
    if (deletingProduct.value) {
      await deleteProduct(deletingProduct.value._id)
      if (deleteSuccess.value) {
        showDeleteModal.value = false
        deletingProduct.value = null
        await loadProducts(currentPageNumber.value)
      }
    }
  }
  
  const updateProductStock = async (productId: string, newStock: number) => {
    await updateStock(productId, { stock: newStock })
    if (updateStockSuccess.value) {
      await loadProducts(currentPageNumber.value)
    }
  }
  
  const handleProductSaved = () => {
    closeCreateModal()
    loadProducts(currentPageNumber.value)
  }
  
  const handleBatchImported = () => {
    showBatchModal.value = false
    loadProducts(1)
  }
  
  const closeCreateModal = () => {
    showCreateModal.value = false
    editingProduct.value = null
  }
  
  const closeViewModal = () => {
    showViewModal.value = false
    viewingProduct.value = null
  }
  
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }
  
  // Load data on mount
  onMounted(async () => {
    await Promise.all([
      getProducts(),
    //   getInStockProducts(),
      getOutOfStockProducts()
    ])
  })
  </script>
  