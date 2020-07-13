<template>
  <v-app dark>
    <!-- header -->
    <v-app-bar>
    </v-app-bar>

    <!-- content -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- footer -->
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
