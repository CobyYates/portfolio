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
    return {
      metaInfo() {
      return {
        title: "Home - Work",
        meta: [
          {
            name: "description",
            content: `I have experience in multiple languages and platforms. Check it out!`,
          },
          { property: "og:title", content: "Home - Projects" },
          { property: "og:site_name", content: "Home" },
          { property: "og:type", content: "website" },
          { name: "robots", content: "index,follow" },
        ],
      };
    },
    };
  },
};
</script>

<style scoped></style>
