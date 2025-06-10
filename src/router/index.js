import { createRouter, createWebHistory } from "vue-router";
import HabitsPage from "@/views/HabitsPage.vue";
import NewHabitPage from "@/views/NewHabitPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "habits",
      component: HabitsPage,
    },
    {
      path: "/new-Habit",
      name: "newHabit",
      component: NewHabitPage,
    },
  ],
});

export default router;
