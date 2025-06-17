<template>
  <section class="tw:flex tw:flex-col tw:gap-3 tw:mt-3">
    <WeekDayHabits
      displayDayName="Segunda-Feira"
      day="monday"
      :habits="filterHabitsByWeekDay('monday')"
    />
    <WeekDayHabits
      displayDayName="Terça-Feira"
      day="tuesday"
      :habits="filterHabitsByWeekDay('tuesday')"
    />
    <WeekDayHabits
      displayDayName="Quarta-Feira"
      day="wednesday"
      :habits="filterHabitsByWeekDay('wednesday')"
    />
    <WeekDayHabits
      displayDayName="Quinta-Feira"
      day="thursday"
      :habits="filterHabitsByWeekDay('thursday')"
    />
    <WeekDayHabits
      displayDayName="Sexta-Feira"
      day="friday"
      :habits="filterHabitsByWeekDay('friday')"
    />
    <WeekDayHabits
      displayDayName="Sábado"
      day="saturday"
      :habits="filterHabitsByWeekDay('saturday')"
    />
    <WeekDayHabits
      displayDayName="Domingo"
      day="sunday"
      :habits="filterHabitsByWeekDay('sunday')"
    />
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useHabitsStore } from "@/stores/habitsStore";

import WeekDayHabits from "../components/WeekDayHabits.vue";

const habitsStore = useHabitsStore();

const filterHabitsByWeekDay = (weekDay) => {
  const weekDayHabits = habitsStore.habits.filter((habit) => habit.days.includes(weekDay));
  weekDayHabits.forEach((habit) => {
    habit.completed = habit.completions[weekDay]?.completed ?? false;
  });

  return weekDayHabits;
};

onMounted(() => {
  habitsStore.loadHabitsFromStorage();
});
</script>
