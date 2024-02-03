import { createApp } from 'lesta'
import '/components/general.css'
import accordion from '/components/accordion'
import button from '/components/form/button'
import '/components/accordion/index.css'

const root = document.querySelector('#root')
const app = createApp()

const component = {
  template: `
  <div class="example1"></div>
  <div class="example2"></div>
  <div class="example3"></div>
  <hr>
  <div class="example4"></div>
  <div class="l-fx l-gap">
    <div class="btn1"></div>
    <div class="btn2"></div>
  </div>
  `,
  proxies: {
    value1: true,
    value2: true,
    value3: true,
    value4: true,
    disabled: false
  },
  nodes () {
    return {
      example1: {
        component: {
          src: accordion,
          proxies: {
            value: () => this.proxy.value1
          },
          params: {
            name: 'about',
            text: 'About'
          },
          methods: {
            action: (n, v) => {
              this.proxy.value1 = !this.proxy.value1
              this.proxy.value2 = this.proxy.value3 = true
            }
          },
          sections: {
            content: {
              src: {
                template: `It is an component Accordion of framework Lesta`
              }
            }
          }
        }
      },
      example2: {
        component: {
          src: accordion,
          proxies: {
            value: () => this.proxy.value2
          },
          params: {
            name: 'cont',
            text: 'Contacts'
          },
          methods: {
            action: (n, v) => {
              this.proxy.value1 = this.proxy.value3 = true
              this.proxy.value2 = !this.proxy.value2
            }
          },
          sections: {
            content: {
              src: {
                template: `+7-800-555-35-35`
              }
            }
          }
        }
      },
      example3: {
        component: {
          src: accordion,
          proxies: {
            value: () => this.proxy.value3
          },
          params: {
            name: 'faq',
            text: 'FAQ'
          },
          methods: {
            action: (n, v) => {
              this.proxy.value1 = this.proxy.value2 = true
              this.proxy.value3 = !this.proxy.value3
            }
          },
          sections: {
            content: {
              src: {
                template: `There are all FAQs`
              }
            }
          }
        }
      },
      example4: {
        component: {
          src: accordion,
          proxies: {
            value: () => this.proxy.value4,
            disabled: () => this.proxy.disabled
          },
          params: {
            name: 'test',
            text: 'Test change'
          },
          methods: {
            action: (n, v) => {
              this.proxy.value4 = !this.proxy.value4
            }
          },
          sections: {
            content: {
              src: {
                template: `With this accordion you can use the rest of the functionality of this component.`
              }
            }
          }
        }
      },
      btn1: {
        component: {
          src: button,
          proxies: {
            value: () => this.proxy.disabled ? 'Enabled' : 'Disabled'
          },
          methods: {
            action: () => {
              this.proxy.disabled = !this.proxy.disabled
            }
          }
        }
      },
      btn2: {
        component: {
          src: button,
          proxies: {
            value: () => this.proxy.value4 ? 'Open' : 'Close'
          },
          methods: {
            action: () => {
              this.proxy.value4 = !this.proxy.value4
            }
          }
        }
      }
    }
  }
}

app.mount(component, root, {params: {}})
