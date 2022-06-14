import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import { registerSW } from 'virtual:pwa-register'
import './main.scss'
import './style.css'
document.querySelector('#app').innerHTML = `
<h1>Hello Vite!</h1>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
<div class='container'>
<h4>Sass is so good, I just want to update the site </h4>
</div>
`
const updateSW = registerSW({
  onNeedRefresh() {
    Toastify({
      text: `<h4 style='display: inline'>An update is available!</h4>
      <br><br>
      <a class='do-sw-update'>Click to update and reload</a>  `,
      escapeMarkup: false,
      gravity: 'bottom',
      onclick() {
        updateSW(true)
      },
    }).showToast()
  },
  // onOfflineReady() {},
})
if ('serviceWorker' in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW()
}
