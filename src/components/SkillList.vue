<template>
      <v-row class="justify-center">
          <v-col sm="3">
              <v-card
                class="d-flex flex-column justify-center align-center text-left"
                flat
                color="transparent"
                width="100%"
            >
                <p class="title text-no-wrap">{{title}}</p>
                <div
                    v-for="item in items"
                    :key="item.i"
                    class="d-flex align-baseline"
                >
                    <v-icon :color="item.color" class="mr-2">{{item.icon}}</v-icon>
                    <p class="text-no-wrap">{{item.title}}</p>
                </div>
              </v-card>
          </v-col>
      </v-row>
</template>

<script>
export default {
    props: ['items', 'title']
};
</script>

<style scoped>

</style>
