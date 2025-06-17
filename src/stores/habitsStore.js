import { ref } from "vue";
import { defineStore } from "pinia";
import { getWeekNumber } from "@/utils/dateUtils";

export const useHabitsStore = defineStore("counter", () => {
  const habits = ref([]);

  const loadHabitsFromStorage = () => {
    const stored = localStorage.getItem("habits");
    if (stored) {
      habits.value = JSON.parse(stored);
    }
    resetCompletionIfNewWeek();
  };

  const saveHabits = () => {
    localStorage.setItem("habits", JSON.stringify(habits.value));
  };

  const addHabit = (habit) => {
    habits.value.push(habit);
    saveHabits();
  };

  const resetCompletionIfNewWeek = () => {
    const currentWeek = getWeekNumber();
    habits.value.forEach((habit) => {
      if (habit.lastUpdatedWeek !== currentWeek) {
        habit.lastUpdatedWeek = currentWeek;
        Object.values(habit.completions).forEach((c) => (c.completed = false));
      }
    });
  };

  const changeHabitCompletion = (id, day) => {
    const habit = habits.value.find((habit) => habit.id === id);
    if (habit) {
      habit.completions[day].completed = !habit.completions[day].completed;
      habit.lastUpdatedWeek = getWeekNumber();
      saveHabits();
    }
  };

  return { habits, loadHabitsFromStorage, addHabit, changeHabitCompletion };
});
