Vue.use(window.vuelidate.default);
const { required, minLength } = window.validators

//input component
Vue.component('custom-input', {
  props: ['title', 'v', 'value', 'type'],
  template: '#custom-input-template'
})

//radio component
Vue.component('custom-input-radio', {
  props: ['value', 'label', 'id', 'type', 'name', 'checked'],
  template: '#radio-input-template'
})

//radio group component
Vue.component('custom-input-radio-group', {
  props: ['title', 'items', 'type'],
  template: '#radio-input-group-template'
})

new Vue({
  el: '#app',
  data: {
    username: '',
    surname: '',
    patronymic: '',
    date: '',
    phone: '',
    index: '',
    country: '',
    region: '',
    city: '',
    street: '',
    house: '',
    series: '',
    num: '',
    issuedby: '',
    dateissue: '',
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        alert('Заполните все обязательные поля')
      } else {
        alert('Новый клиент успешно создан!')
      }
    },
  },
  validations: {
    username: { 
      required: validators.required
    },
    surname: {
      required: validators.required
    },
    date: {
      required: validators.required
    },
    phone: {
      required: validators.required
    },
    city: {
      required: validators.required
    },
    dateissue: {
      required: validators.required
    }
  }
})
