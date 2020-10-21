<template>
  <v-card>
    <v-img
      src="@/assets/placeholder.png"
    ></v-img>
  <v-card-title class="justify-center">
   {{mission.mission_name}}
  </v-card-title>
  <v-card-text>
     <span>{{mission.details}}</span>
  </v-card-text>
     <div class="text-center pa-4"><v-btn color="primary" class="fl">See more</v-btn></div>
  </v-card>
</template>

<script>
  export default {
    name: 'MissionCard',
    data: () => ({
    }),
    props: {
      mission: {
        type: Object,
        default: () => ({})
      },
    },
  }
</script>
