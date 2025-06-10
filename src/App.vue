<template>
  <header v-if="habitsHeaderIsVisible">
    <nav>
      <h6 class="max">Hábitos</h6>
      <button class="circle transparent" @click="toggleTheme">
        <i>contrast</i>
      </button>
      <RouterLink to="/new-habit">
        <button class="circle transparent">
          <i>add</i>
        </button>
      </RouterLink>
    </nav>
  </header>

  <header v-if="newHabitHeaderIsVisible">
    <nav>
      <RouterLink to="/">
        <button class="circle transparent">
          <i>arrow_back</i>
        </button>
      </RouterLink>
      <h6 class="max">Novo Hábito</h6>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const habitsHeaderIsVisible = computed(() => {
  return route.path === "/";
});

const newHabitHeaderIsVisible = computed(() => {
  return route.path === "/new-habit";
});

const toggleTheme = () => {
  document.body.classList.toggle("dark");
  // Opcional: avisa o Beer para atualizar
  ui("mode", document.body.classList.contains("dark") ? "dark" : "light");
};
</script>

<style scoped></style>
