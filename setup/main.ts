import { defineAppSetup } from '@slidev/types'
import VueParticles from 'vue-particles'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(VueParticles)
})