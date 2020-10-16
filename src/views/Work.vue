<template>
  <v-container class="pa-0" fluid>
    <Work />
  </v-container>
</template>

<script>
import Work from "@/components/Work";
export default {
  components: {
    Work,
  },
  created() {
    window.scrollTo(0, 0);
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
