<template>
  <v-card class="pa-2 ma-2" outlined @click="$emit('target',mission)">
  <h1 class="green--text">{{mission.id}} </h1>
  </v-card>
</template>

<script>
  export default {
    name: 'MissionItem',

    data: () => ({
    }),
    props: {
      mission: {
        type: Object,
        required: true,
      },
    },
  }
</script>
