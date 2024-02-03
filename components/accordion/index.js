import './index.css'

export default {
  template: `
    <div class="lstAccordion">
      <button class="lstAccordionBar"><span class="lstAccordionTxt"></span><i class="l-arrow"></i></button>
      <div class="lstAccordionWr">
          <div class="lstAccordionContent" section="content" section></div>
      </div>
      <hr>
    </div>`,
  props: {
    proxies: {
      value: {
        type: 'boolean',
        default: true
      },
      disabled: {
        type: 'boolean',
        default: false
      }
    },
    params: {
      name: { default: '' },
      text: {}
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      lstAccordion: {
        _class: {
          'l-active': () => this.proxy.value
        }
      },
      lstAccordionBar: {
        onclick: () => {
          this.proxy.value = !this.proxy.value
          this.method.action?.(this.proxy.value)
        },
        disabled: () => this.proxy.disabled
      },
      lstAccordionTxt: {
        _text: () => this.param.text,
      },
      lstAccordionWr: {
        hidden: () => this.proxy.value
      }
    }
  },
  methods: {
    set(v) {
      this.proxy.value = v
    }
  }
}
