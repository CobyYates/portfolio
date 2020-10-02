<template>
      <v-row>
          <v-col sm="3">
              <v-card
                class="d-flex flex-column justify-center align-center text-left"
                flat
                width="100%"
            >
                <p>{{title}}</p>
                <div
                    v-for="item in items"
                    :key="item.i"
                    class="d-flex align-baseline"
                >
                    <v-icon :color="item.color" class="mr-2">{{item.icon}}</v-icon>
                    <p>{{item.title}}</p>
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

<style scoped></style>
