<template>
  <v-container class="grey lighten-4" fluid>
    <h2 class="font-weight-light text-center mt-8 green--text mb-4">SKILLS</h2>
    <div class="d-flex justify-space-between">
      <SkillList :items="$store.state.langs" :title="'Languages'" />
      <SkillList :items="$store.state.frameworks" :title="'CSS Libraries'" />
      <SkillList :items="$store.state.softwares" :title="'Software'" />
      <SkillList :items="$store.state.additionals" :title="'Additional'" />
      <SkillList :items="$store.state.experiences" :title="'Experience With'" />
    </div>
  </v-container>
</template>

<script>
import SkillList from "@/components/SkillList";
export default {
  components: {
    SkillList,
  },
};
</script>

<style scoped></style>
