<template>
        <v-row class="fill-height" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" sm="4">
                <v-card-title primary-title class="text-h5">
                    Last Launches
                </v-card-title>
                <core-mission-item v-for="item in launchesPast"  :key="item.id" :mission="item"  v-show=" $vuetify.breakpoint.smAndUp || !missionExpanded.id " @target="missionExpanded = $event"/>
                <core-mission-card v-show="missionExpanded.id && $vuetify.breakpoint.xsOnly" />
            </v-col> 
            <v-col cols="12" sm="6">
                <core-mission-card v-show="missionExpanded.id && $vuetify.breakpoint.smAndUp" :mission="missionExpanded" />
            </v-col> 
        </v-row>
</template>

<script>
    import gql from 'graphql-tag'
  export default {
    name: 'Dashboard',

    data: () => ({
        missionExpanded: {}
    }),
    apollo: {
        launchesPast: gql`query {
            launchesPast(limit: 10, order: "field: id, direction: ASC") {
                    mission_name
                    launch_date_local
                    id
                    details
                    links {
                    article_link
                    video_link
                    flickr_images
                    }
                }
            }`,
        },
  }
</script>
