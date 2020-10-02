<template>
  <v-container fluid>
      <div class="d-flex justify-space-between">
        <SkillList :items="$store.state.langs" :title="'Languages'" />
        <SkillList :items="$store.state.frameworks" :title="'Frameworks'" />
        <SkillList :items="$store.state.softwares" :title="'Software'" />
        <SkillList :items="$store.state.additionals" :title="'Additional'" />
      </div>
  </v-container>
</template>

<script>
import SkillList from '@/components/SkillList'
export default {
    components: {
        SkillList
    }
};
</script>

<style scoped></style>
