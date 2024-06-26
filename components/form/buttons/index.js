import './index.css'

export default {
  template: `<div class="lstLbl l-label"></div><fieldset class="lstBtns l-fx"></fieldset>`,
  props: {
    proxies: {
      value: {},
      disabled: {},
      error: {}
    },
    params: {
      size: { default: 'small' },
      name: { default: '' },
      type: {
        type: 'string'
      },
      text: {},
      options: {
        default: {}
      }
    },
    methods: {
      change: {}
    }
  },
  nodes() {
    return {
      lstLbl: {
        _text: () => this.param.text
      },
      lstBtns: {
        name: this.param.name,
        _class: {
          'l-radio': this.param.type === 'radio'
        },
        _html: () => this.method.render(),
        onclick: (event) => {
          if (event.target.closest('.lstBtns > button')) {
            const index = +event.target.closest('.lstBtns > button').dataset.index - 1
            const buttons = this.param.options.buttons
            this.method.change?.(this.param.name, buttons[index], index)
          }
        }
      }
    }
  },
  methods: {
    isActive(el) {
      return Array.isArray(this.proxy.value) ? this.proxy.value.includes(el) : this.proxy.value === el
    },
    render() {
      const buttons = this.param.options.buttons
      return buttons?.reduce((accum, el, index) => accum + `
        <button class="${ this.method.isActive(el) ? 'l-active' : ''}" data-index="${index + 1}" size="${ this.param.size }" ${ this.proxy.disabled ? 'disabled' : '' }><span>${el}</span></button>
        `, '')
    },
    update(v) {
      this.proxy.value = v
    }
  }
}
