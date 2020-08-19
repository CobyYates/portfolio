<template>
  <v-container fluid>
    <v-card
        flat
        color="transparent"
        class=""
    >
        <v-row>
            <v-col>
                <!-- <v-card-title class="white--text">About me...</v-card-title>
                <v-card-subtitle class="white--text font-weight-light">
                    I design and develop great looking websites. Learning is my passion.
                </v-card-subtitle> -->
            </v-col>
        </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                { icon: 'car-sports', text: 'Everything Cars' },
                { icon: 'airplane-takeoff', text: 'Traveling' },
                { icon: 'lightbulb-on', text: 'Business Ideation' },
                { icon: 'code-tags', text: 'Program' },
                { icon: 'youtube', text: 'Watching YouTube' },
            ]
        }
    }
}
</script>

<style>

</style>