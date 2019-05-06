const props = {
  propC: {
    type: String,
    required: true,
  },
  // Number with a default value
  propD: {
    type: Number,
    default: 100,
  },
  // Object with a default value
  propE: {
    type: Object,
    // Object or array defaults must be returned from
    // a factory function
    default() {
      return { message: 'hello' }
    },
  },
  // Custom validator function
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].indexOf(value) !== -1
    },
  },
}
