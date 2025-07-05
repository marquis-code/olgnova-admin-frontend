<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="$emit('update:modelValue', false)"
      >
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div
              v-if="modelValue"
              class="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg"
            >
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ episode ? 'Edit Episode' : 'Create New Episode' }}
                </h3>
                <button
                  @click="$emit('update:modelValue', false)"
                  class="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X class="w-6 h-6" />
                </button>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Title -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      v-model="form.title"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Episode title"
                    />
                  </div>

                  <!-- Description -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      v-model="form.description"
                      required
                      rows="3"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Episode description"
                    ></textarea>
                  </div>

                  <!-- Season & Episode -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Season *
                    </label>
                    <input
                      v-model.number="form.season"
                      type="number"
                      required
                      min="1"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Episode *
                    </label>
                    <input
                      v-model.number="form.episode"
                      type="number"
                      required
                      min="1"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <!-- Duration -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Duration (minutes) *
                    </label>
                    <input
                      v-model.number="form.duration"
                      type="number"
                      required
                      min="1"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <!-- Published Date -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Published Date *
                    </label>
                    <input
                      v-model="form.publishedAt"
                      type="datetime-local"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <!-- Thumbnail Upload -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Thumbnail Image *
                    </label>
                    <div class="space-y-4">
                      <div
                        @click="triggerThumbnailUpload"
                        @dragover.prevent="handleDragOver('thumbnail')"
                        @dragleave.prevent="handleDragLeave('thumbnail')"
                        @drop.prevent="handleThumbnailDrop"
                        class="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors cursor-pointer group"
                        :class="{ 'border-blue-500 bg-blue-50': thumbnailDragOver }"
                      >
                        <input
                          ref="thumbnailInput"
                          type="file"
                          accept="image/*"
                          class="hidden"
                          @change="handleThumbnailUpload"
                        />
                        
                        <div v-if="!form.thumbnailUrl && !thumbnailUploading" class="text-center">
                          <ImagePlus class="mx-auto h-12 w-12 text-gray-400 group-hover:text-gray-500 transition-colors" />
                          <div class="mt-4">
                            <p class="text-sm text-gray-600">
                              <span class="font-medium text-blue-600 hover:text-blue-500">Click to upload</span>
                              or drag and drop
                            </p>
                            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>

                        <div v-else-if="thumbnailUploading" class="text-center">
                          <Loader2 class="mx-auto h-8 w-8 text-blue-600 animate-spin" />
                          <p class="mt-2 text-sm text-gray-600">Uploading thumbnail...</p>
                        </div>

                        <div v-else class="relative">
                          <img
                            :src="form.thumbnailUrl"
                            alt="Thumbnail preview"
                            class="w-full h-48 object-cover rounded-lg"
                          />
                          <button
                            @click.stop="removeThumbnail"
                            type="button"
                            class="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                          >
                            <X class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Episode Image Upload -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Episode Cover Image
                    </label>
                    <div class="space-y-4">
                      <div
                        @click="triggerImageUpload"
                        @dragover.prevent="handleDragOver('image')"
                        @dragleave.prevent="handleDragLeave('image')"
                        @drop.prevent="handleImageDrop"
                        class="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors cursor-pointer group"
                        :class="{ 'border-blue-500 bg-blue-50': imageDragOver }"
                      >
                        <input
                          ref="imageInput"
                          type="file"
                          accept="image/*"
                          class="hidden"
                          @change="handleImageUpload"
                        />
                        
                        <div v-if="!form.image && !imageUploading" class="text-center">
                          <Image class="mx-auto h-12 w-12 text-gray-400 group-hover:text-gray-500 transition-colors" />
                          <div class="mt-4">
                            <p class="text-sm text-gray-600">
                              <span class="font-medium text-blue-600 hover:text-blue-500">Click to upload</span>
                              or drag and drop
                            </p>
                            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>

                        <div v-else-if="imageUploading" class="text-center">
                          <Loader2 class="mx-auto h-8 w-8 text-blue-600 animate-spin" />
                          <p class="mt-2 text-sm text-gray-600">Uploading image...</p>
                        </div>

                        <div v-else class="relative">
                          <img
                            :src="getImageUrl(form.image)"
                            alt="Episode cover preview"
                            class="w-full h-48 object-cover rounded-lg"
                          />
                          <button
                            @click.stop="removeImage"
                            type="button"
                            class="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                          >
                            <X class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Hosts -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Hosts *
                    </label>
                    <div class="space-y-2">
                      <TransitionGroup
                        enter-active-class="transition-all duration-300 ease-out"
                        enter-from-class="opacity-0 scale-95 translate-x-4"
                        enter-to-class="opacity-100 scale-100 translate-x-0"
                        leave-active-class="transition-all duration-200 ease-in"
                        leave-from-class="opacity-100 scale-100 translate-x-0"
                        leave-to-class="opacity-0 scale-95 -translate-x-4"
                        tag="div"
                        class="space-y-2"
                      >
                        <div
                          v-for="(host, index) in form.hosts"
                          :key="`host-${index}`"
                          class="flex items-center space-x-2"
                        >
                          <input
                            v-model="form.hosts[index]"
                            type="text"
                            required
                            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Host name"
                          />
                          <button
                            v-if="form.hosts.length > 1"
                            @click="removeHost(index)"
                            type="button"
                            class="p-2 text-red-600 hover:text-red-700 transition-colors"
                          >
                            <Trash2 class="w-4 h-4" />
                          </button>
                        </div>
                      </TransitionGroup>
                      <button
                        @click="addHost"
                        type="button"
                        class="inline-flex items-center px-3 py-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Plus class="w-4 h-4 mr-1" />
                        Add Host
                      </button>
                    </div>
                  </div>

                  <!-- Guest -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Guest Name
                    </label>
                    <input
                      v-model="form.guest"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Guest name"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Guest Title
                    </label>
                    <input
                      v-model="form.guestTitle"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Guest title/profession"
                    />
                  </div>

                  <!-- URLs -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Spotify URL
                    </label>
                    <input
                      v-model="form.spotifyUrl"
                      type="url"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://open.spotify.com/episode/..."
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Apple Podcasts URL
                    </label>
                    <input
                      v-model="form.appleUrl"
                      type="url"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://podcasts.apple.com/..."
                    />
                  </div>

                  <!-- Tags -->
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <input
                      v-model="tagsInput"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter tags separated by commas"
                      @input="updateTags"
                    />
                    <TransitionGroup
                      v-if="form.tags.length"
                      enter-active-class="transition-all duration-300 ease-out"
                      enter-from-class="opacity-0 scale-95"
                      enter-to-class="opacity-100 scale-100"
                      leave-active-class="transition-all duration-200 ease-in"
                      leave-from-class="opacity-100 scale-100"
                      leave-to-class="opacity-0 scale-95"
                      tag="div"
                      class="flex flex-wrap gap-2 mt-2"
                    >
                      <span
                        v-for="tag in form.tags"
                        :key="tag"
                        class="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {{ tag }}
                        <button
                          @click="removeTag(tag)"
                          type="button"
                          class="ml-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <X class="w-3 h-3" />
                        </button>
                      </span>
                    </TransitionGroup>
                  </div>

                  <!-- Status -->
                  <div class="md:col-span-2">
                    <label class="flex items-center">
                      <input
                        v-model="form.isActive"
                        type="checkbox"
                        class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all duration-200"
                      />
                      <span class="ml-2 text-sm font-medium text-gray-700">
                        Active (published)
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Form Actions -->
                <div class="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                  <button
                    @click="$emit('update:modelValue', false)"
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <Loader2
                      v-if="isSubmitting"
                      class="w-4 h-4 mr-2 animate-spin"
                    />
                    {{ episode ? 'Update Episode' : 'Create Episode' }}
                  </button>
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { LabCast, CreateLabCastData } from '@/types/labcast'
import { useCreateLabCast } from "@/composables/modules/labcast/useCreateLabCast"
import { useUpdateLabCast } from "@/composables/modules/labcast/useUpdateLabCast"
// Assuming you have an image upload composable - adjust the import path as needed
import { useSingleUploadFile } from '@/composables/core/useSingleUpload'
// import { useImageUpload } from "@/composables/useImageUpload"
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
import { 
  X, 
  Plus, 
  Trash2, 
  ImagePlus, 
  Image, 
  Loader2 
} from 'lucide-vue-next'

interface Props {
  modelValue: boolean
  episode?: LabCast | null
}

const props = defineProps<Props>()
  const { singleUploadFile, loading: uploadingSingle, uploadResponse: singleUploadResponse } = useSingleUploadFile()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  saved: []
}>()

// Composables
const {
  loading: createLoading,
  error: createError,
  success: createSuccess,
  labcastData: createLabcastData,
  createLabCast,
  resetState: resetCreateState
} = useCreateLabCast()

const {
  loading: updateLoading,
  error: updateError,
  success: updateSuccess,
  labcast: updateLabcast,
  updateLabCast,
  resetState: resetUpdateState
} = useUpdateLabCast()

// Image upload composable - adjust based on your actual composable structure
// const {
//   uploadImage,
//   loading: imageUploadLoading,
//   error: imageUploadError
// } = useImageUpload()

// Refs
const thumbnailInput = ref<HTMLInputElement>()
const imageInput = ref<HTMLInputElement>()
const thumbnailDragOver = ref(false)
const imageDragOver = ref(false)
const thumbnailUploading = ref(false)
const imageUploading = ref(false)

// Form state
const form = ref<CreateLabCastData>({
  title: '',
  description: '',
  season: 1,
  episode: 1,
  hosts: [''],
  guest: '',
  guestTitle: '',
  thumbnailUrl: '',
  spotifyUrl: '',
  appleUrl: '',
  image: '',
  publishedAt: new Date().toISOString().slice(0, 16),
  isActive: true,
  tags: [],
  duration: 30
})

const tagsInput = ref('')
const isSubmitting = computed(() => createLoading.value || updateLoading.value)

// Image upload methods
const triggerThumbnailUpload = () => {
  thumbnailInput.value?.click()
}

const triggerImageUpload = () => {
  imageInput.value?.click()
}

const handleThumbnailUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    await uploadThumbnail(file)
  }
}

const handleImageUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    await uploadEpisodeImage(file)
  }
}

const handleThumbnailDrop = async (event: DragEvent) => {
  thumbnailDragOver.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) {
    await uploadThumbnail(file)
  }
}

const handleImageDrop = async (event: DragEvent) => {
  imageDragOver.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) {
    await uploadEpisodeImage(file)
  }
}

const uploadThumbnail = async (file: File) => {
  try {
    thumbnailUploading.value = true
    // Adjust this based on your actual upload composable
    const response = await singleUploadFile(file)
    form.value.thumbnailUrl = response.url
  } catch (error) {
    console.error('Thumbnail upload failed:', error)
    // Handle error - maybe show a toast notification
  } finally {
    thumbnailUploading.value = false
  }
}

const uploadEpisodeImage = async (file: File) => {
  try {
    imageUploading.value = true
    // Adjust this based on your actual upload composable
    const response = await singleUploadFile(file)
    form.value.image = response.filename || response.url
  } catch (error) {
    console.error('Image upload failed:', error)
    // Handle error - maybe show a toast notification
  } finally {
    imageUploading.value = false
  }
}

const removeThumbnail = () => {
  form.value.thumbnailUrl = ''
  if (thumbnailInput.value) {
    thumbnailInput.value.value = ''
  }
}

const removeImage = () => {
  form.value.image = ''
  if (imageInput.value) {
    imageInput.value.value = ''
  }
}

const getImageUrl = (image: string) => {
  // Adjust this based on how your images are served
  if (image.startsWith('http')) {
    return image
  }
  return `/images/episodes/${image}`
}

// Drag and drop handlers
const handleDragOver = (type: 'thumbnail' | 'image') => {
  if (type === 'thumbnail') {
    thumbnailDragOver.value = true
  } else {
    imageDragOver.value = true
  }
}

const handleDragLeave = (type: 'thumbnail' | 'image') => {
  if (type === 'thumbnail') {
    thumbnailDragOver.value = false
  } else {
    imageDragOver.value = false
  }
}

// Existing methods
const resetForm = () => {
  form.value = {
    title: '',
    description: '',
    season: 1,
    episode: 1,
    hosts: [''],
    guest: '',
    guestTitle: '',
    thumbnailUrl: '',
    spotifyUrl: '',
    appleUrl: '',
    image: '',
    publishedAt: new Date().toISOString().slice(0, 16),
    isActive: true,
    tags: [],
    duration: 30
  }
  tagsInput.value = ''
}

const populateForm = (episode: LabCast) => {
  form.value = {
    title: episode.title,
    description: episode.description,
    season: episode.season,
    episode: episode.episode,
    hosts: [...episode.hosts],
    guest: episode.guest,
    guestTitle: episode.guestTitle,
    thumbnailUrl: episode.thumbnailUrl,
    spotifyUrl: episode.spotifyUrl,
    appleUrl: episode.appleUrl,
    image: episode.image,
    publishedAt: new Date(episode.publishedAt).toISOString().slice(0, 16),
    isActive: episode.isActive,
    tags: [...episode.tags],
    duration: episode.duration
  }
  tagsInput.value = episode.tags.join(', ')
}

const addHost = () => {
  form.value.hosts.push('')
}

const removeHost = (index: number) => {
  form.value.hosts.splice(index, 1)
}

const updateTags = () => {
  form.value.tags = tagsInput.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)
}

const removeTag = (tagToRemove: string) => {
  form.value.tags = form.value.tags.filter(tag => tag !== tagToRemove)
  tagsInput.value = form.value.tags.join(', ')
}

const handleSubmit = async () => {
  // Clean up hosts array
  form.value.hosts = form.value.hosts.filter(host => host.trim().length > 0)
  
  if (props.episode) {
    // Update existing episode
    await updateLabCast(props.episode._id, form.value)
    if (updateSuccess.value) {
      emit('saved')
      resetForm()
    }
  } else {
    // Create new episode
    await createLabCast(form.value)
    if (createSuccess.value) {
      emit('saved')
      resetForm()
    }
  }
}

// Watch for episode changes
watch(() => props.episode, (episode) => {
  if (episode) {
    populateForm(episode)
  } else {
    resetForm()
  }
}, { immediate: true })

// Watch for modal close
watch(() => props.modelValue, (isOpen) => {
  if (!isOpen) {
    resetForm()
    resetCreateState()
    resetUpdateState()
  }
})
</script>
