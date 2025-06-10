import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useHabitsStore = defineStore("counter", () => {
  const habits = ref([]);

  const addHabit = (habit) => {
    habits.value.push(habit);
    console.log(habits.value);
  };

  return { habits, addHabit };
});
