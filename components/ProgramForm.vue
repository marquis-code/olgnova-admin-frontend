<template>
  <div class="">
    <!-- Progress Steps -->
    <div class="mb-8">
  <!-- Desktop Layout -->
  <!-- Mobile Layout -->
  <div class="">
    <div class="flex flex-wrap gap-4">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center min-w-0"
      >
        <div
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200',
            currentStep > index
              ? 'bg-indigo-600 text-white'
              : currentStep === index
              ? 'bg-indigo-100 text-indigo-600 border-2 border-indigo-600'
              : 'bg-gray-100 text-gray-400'
          ]"
        >
          <Check v-if="currentStep > index" class="w-4 h-4" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <span
          :class="[
            'ml-2 text-sm font-medium whitespace-nowrap',
            currentStep >= index ? 'text-indigo-600' : 'text-gray-400'
          ]"
        >
          {{ step.title }}
        </span>
      </div>
    </div>
  </div>
</div>

    <!-- Step Content -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Step 1: Basic Information -->
      <div v-if="currentStep === 0" class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Basic Program Information</h3>
          <p class="text-sm text-gray-600">Let's start with the essential details of your program</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Program Title *
          </label>
          <input
            v-model="form.title"
            type="text"
            required
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter program title..."
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Category *
          </label>
          <select
            v-model="form.category"
            required
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select category</option>
            <option value="Technology Training">Technology Training</option>
            <option value="Business Development">Business Development</option>
            <option value="Design & Creative">Design & Creative</option>
            <option value="Marketing & Sales">Marketing & Sales</option>
            <option value="Data Science">Data Science</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Description *
          </label>
          <textarea
            v-model="form.description"
            rows="6"
            required
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Provide a detailed description of your program..."
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Duration *
          </label>
          <input
            v-model="form.duration"
            type="text"
            required
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., 4 months, 12 weeks, 6 sessions"
          />
        </div>
      </div>

      <!-- Step 2: Program Details -->
      <div v-if="currentStep === 1" class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Program Details</h3>
          <p class="text-sm text-gray-600">Define the focus areas, outcomes, and responsibilities</p>
        </div>

        <!-- Focus Areas -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Focus Areas
          </label>
          <div class="space-y-2">
            <div
              v-for="(area, index) in form.focusAreas"
              :key="index"
              class="flex items-center space-x-2"
            >
              <input
                v-model="form.focusAreas[index]"
                type="text"
                class="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter focus area..."
              />
              <button
                v-if="form.focusAreas.length > 1"
                @click="removeFocusArea(index)"
                type="button"
                class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
            <button
              @click="addFocusArea"
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Plus class="w-4 h-4 mr-1" />
              Add Focus Area
            </button>
          </div>
        </div>

        <!-- Outcomes -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Learning Outcomes
          </label>
          <div class="space-y-2">
            <div
              v-for="(outcome, index) in form.outcomes"
              :key="index"
              class="flex items-center space-x-2"
            >
              <input
                v-model="form.outcomes[index]"
                type="text"
                class="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter learning outcome..."
              />
              <button
                v-if="form.outcomes.length > 1"
                @click="removeOutcome(index)"
                type="button"
                class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
            <button
              @click="addOutcome"
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Plus class="w-4 h-4 mr-1" />
              Add Outcome
            </button>
          </div>
        </div>

        <!-- Key Responsibilities -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Key Responsibilities
          </label>
          <div class="space-y-2">
            <div
              v-for="(responsibility, index) in form.keyResponsibilities"
              :key="index"
              class="flex items-center space-x-2"
            >
              <input
                v-model="form.keyResponsibilities[index]"
                type="text"
                class="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter key responsibility..."
              />
              <button
                v-if="form.keyResponsibilities.length > 1"
                @click="removeResponsibility(index)"
                type="button"
                class="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </div>
            <button
              @click="addResponsibility"
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Plus class="w-4 h-4 mr-1" />
              Add Responsibility
            </button>
          </div>
        </div>
      </div>

      <!-- Step 3: Images and Highlights -->
      <div v-if="currentStep === 2" class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Images & Highlights</h3>
          <p class="text-sm text-gray-600">Add visual content and program highlights</p>
        </div>

        <!-- Main Image Upload -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Main Program Image
          </label>
          <ImageUpload
            v-model="form.image"
            :multiple="false"
            folder="programs"
            class="mb-4"
          />
        </div>

        <!-- Additional Images -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Additional Images
          </label>
          <ImageUpload
            v-model="form.images"
            :multiple="true"
            folder="programs"
            class="mb-4"
          />
        </div>

        <!-- Highlights -->
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2">
            Program Highlights
          </label>
          <div class="space-y-4">
            <div
              v-for="(highlight, index) in form.highlights"
              :key="index"
              class="p-4 border border-slate-200 rounded-lg space-y-3"
            >
              <div class="flex items-center justify-between">
                <h4 class="font-medium text-slate-900">Highlight {{ index + 1 }}</h4>
                <button
                  v-if="form.highlights.length > 1"
                  @click="removeHighlight(index)"
                  type="button"
                  class="p-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
              <input
                v-model="highlight.title"
                type="text"
                placeholder="Highlight title..."
                class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
              <textarea
                v-model="highlight.description"
                rows="2"
                placeholder="Highlight description..."
                class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
              ></textarea>
            </div>
            <button
              @click="addHighlight"
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Plus class="w-4 h-4 mr-1" />
              Add Highlight
            </button>
          </div>
        </div>
      </div>

      <!-- Step 4: Application Form Builder -->
      <div v-if="currentStep === 3" class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Application Form</h3>
          <p class="text-sm text-gray-600">Create the application form for your program</p>
        </div>

        <!-- Form Title and Instructions -->
        <div class="grid grid-cols-1 gap-6">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">
              Form Title *
            </label>
            <input
              v-model="form.formTitle"
              type="text"
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              placeholder="e.g., Program Application Form"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">
              Form Instructions
            </label>
            <textarea
              v-model="form.formInstructions"
              rows="3"
              class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Provide instructions for applicants..."
            ></textarea>
          </div>
        </div>

        <!-- Form Fields Builder -->
        <div>
          <div class="flex items-center justify-between mb-4">
            <label class="block text-sm font-medium text-slate-700">
              Form Fields
            </label>
            <button
              @click="addFormField"
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus class="w-4 h-4 mr-1" />
              Add Field
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="(field, index) in form.formFields"
              :key="field.id || index"
              class="p-4 border border-slate-200 rounded-lg space-y-3"
            >
              <div class="flex items-center justify-between">
                <h4 class="font-medium text-slate-900">Field {{ index + 1 }}</h4>
                <button
                  @click="removeFormField(index)"
                  type="button"
                  class="p-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  v-model="field.label"
                  type="text"
                  placeholder="Field label..."
                  class="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
                <select
                  v-model="field.type"
                  class="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                  <option value="textarea">Textarea</option>
                  <option value="select">Select</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                </select>
              </div>

              <input
                v-model="field.placeholder"
                type="text"
                placeholder="Placeholder text..."
                class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />

              <div v-if="['select', 'radio', 'checkbox'].includes(field.type)" class="space-y-2">
                <label class="block text-xs font-medium text-slate-600">Options (one per line)</label>
                <textarea
                  v-model="field.optionsText"
                  @input="updateFieldOptions(field)"
                  rows="3"
                  placeholder="Option 1&#10;Option 2&#10;Option 3"
                  class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none text-sm"
                ></textarea>
              </div>

              <div class="flex items-center space-x-4">
                <label class="flex items-center">
                  <input
                    v-model="field.required"
                    type="checkbox"
                    class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span class="ml-2 text-sm text-slate-700">Required</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 5: Review -->
      <div v-if="currentStep === 4" class="space-y-6">
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Review & Submit</h3>
          <p class="text-sm text-gray-600">Review your program details before submitting</p>
        </div>

        <div class="bg-slate-50 rounded-xl p-6 space-y-4">
          <div>
            <h4 class="font-semibold text-slate-900 mb-2">Program Overview</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span class="text-slate-600">Title:</span>
                <span class="ml-2 font-medium">{{ form.title }}</span>
              </div>
              <div>
                <span class="text-slate-600">Category:</span>
                <span class="ml-2 font-medium">{{ form.category }}</span>
              </div>
              <div>
                <span class="text-slate-600">Duration:</span>
                <span class="ml-2 font-medium">{{ form.duration }}</span>
              </div>
              <div>
                <span class="text-slate-600">Focus Areas:</span>
                <span class="ml-2 font-medium">{{ form.focusAreas.filter(a => a).length }}</span>
              </div>
              <div>
                <span class="text-slate-600">Outcomes:</span>
                <span class="ml-2 font-medium">{{ form.outcomes.filter(o => o).length }}</span>
              </div>
              <div>
                <span class="text-slate-600">Form Fields:</span>
                <span class="ml-2 font-medium">{{ form.formFields.length }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <label class="flex items-center">
            <input
              v-model="form.status"
              type="radio"
              value="draft"
              class="text-indigo-600 focus:ring-indigo-500"
            />
            <span class="ml-2 text-sm text-slate-700">Save as Draft</span>
          </label>
          <label class="flex items-center">
            <input
              v-model="form.status"
              type="radio"
              value="active"
              class="text-indigo-600 focus:ring-indigo-500"
            />
            <span class="ml-2 text-sm text-slate-700">Publish Program</span>
          </label>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between pt-6 border-t border-slate-200">
        <div>
          <button
            v-if="currentStep > 0"
            @click="previousStep"
            type="button"
            class="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <ChevronLeft class="w-4 h-4" />
            <span>Previous</span>
          </button>
        </div>

        <div class="flex space-x-3">
          <button
            @click="$emit('cancel')"
            type="button"
            class="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200"
          >
            Cancel
          </button>
          
          <button
            v-if="currentStep < steps.length - 1"
            @click="nextStep"
            type="button"
            class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight class="w-4 h-4" />
          </button>
          
          <button
            v-else
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-2"
          >
            <Loader2 v-if="isSubmitting" class="w-4 h-4 animate-spin" />
            <span>{{ program ? 'Update' : 'Create' }} Program</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import {
  Check, Plus, Trash2, ChevronLeft, ChevronRight, Loader2
} from 'lucide-vue-next'

interface Props {
  program?: any
}

const props = defineProps<Props>()
const emit = defineEmits(['save', 'cancel'])

const currentStep = ref(0)
const isSubmitting = ref(false)

const steps = [
  { title: 'Basic Info', description: 'Program details' },
  { title: 'Details', description: 'Focus & outcomes' },
  { title: 'Media', description: 'Images & highlights' },
  { title: 'Form', description: 'Application form' },
  { title: 'Review', description: 'Final review' }
]

const form = reactive({
  title: '',
  category: '',
  description: '',
  duration: '',
  focusAreas: [''],
  outcomes: [''],
  keyResponsibilities: [''],
  image: '',
  images: [] as string[],
  highlights: [{ title: '', description: '' }],
  formTitle: '',
  formInstructions: '',
  formFields: [] as any[],
  status: 'draft'
})

// Initialize form with program data if editing
watchEffect(() => {
  if (props.program) {
    Object.assign(form, {
      title: props.program.title || '',
      category: props.program.category || '',
      description: props.program.description || '',
      duration: props.program.duration || '',
      focusAreas: props.program.focusAreas?.length ? props.program.focusAreas : [''],
      outcomes: props.program.outcomes?.length ? props.program.outcomes : [''],
      keyResponsibilities: props.program.keyResponsibilities?.length ? props.program.keyResponsibilities : [''],
      image: props.program.image || '',
      images: props.program.images || [],
      highlights: props.program.highlights?.length ? props.program.highlights : [{ title: '', description: '' }],
      formTitle: props.program.formTitle || '',
      formInstructions: props.program.formInstructions || '',
      formFields: props.program.formFields || [],
      status: props.program.status || 'draft'
    })
  } else {
    // Reset form for new program
    Object.assign(form, {
      title: '',
      category: '',
      description: '',
      duration: '',
      focusAreas: [''],
      outcomes: [''],
      keyResponsibilities: [''],
      image: '',
      images: [],
      highlights: [{ title: '', description: '' }],
      formTitle: '',
      formInstructions: '',
      formFields: [],
      status: 'draft'
    })
  }
})

// Navigation methods
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

// Array management methods
const addFocusArea = () => form.focusAreas.push('')
const removeFocusArea = (index: number) => form.focusAreas.splice(index, 1)

const addOutcome = () => form.outcomes.push('')
const removeOutcome = (index: number) => form.outcomes.splice(index, 1)

const addResponsibility = () => form.keyResponsibilities.push('')
const removeResponsibility = (index: number) => form.keyResponsibilities.splice(index, 1)

const addHighlight = () => form.highlights.push({ title: '', description: '' })
const removeHighlight = (index: number) => form.highlights.splice(index, 1)

const addFormField = () => {
  form.formFields.push({
    id: `field_${Date.now()}`,
    label: '',
    type: 'text',
    required: false,
    options: [],
    placeholder: '',
    optionsText: ''
  })
}

const removeFormField = (index: number) => form.formFields.splice(index, 1)

const updateFieldOptions = (field: any) => {
  if (field.optionsText) {
    field.options = field.optionsText.split('\n').filter((option: string) => option.trim())
  } else {
    field.options = []
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Clean up arrays
    const cleanedForm = {
      ...form,
      focusAreas: form.focusAreas.filter(area => area.trim()),
      outcomes: form.outcomes.filter(outcome => outcome.trim()),
      keyResponsibilities: form.keyResponsibilities.filter(resp => resp.trim()),
      highlights: form.highlights.filter(h => h.title.trim() || h.description.trim()),
      formFields: form.formFields.map(field => {
        const { optionsText, ...cleanField } = field
        return cleanField
      })
    }
    
    await emit('save', cleanedForm)
  } finally {
    isSubmitting.value = false
  }
}
</script>
