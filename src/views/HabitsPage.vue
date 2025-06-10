<template>
  <section class="tw:flex tw:flex-col tw:gap-3 tw:mt-3">
    <WeekDayHabits
      day="Segunda-Feira"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('monday'))"
    />
    <WeekDayHabits
      day="Terça-Feira"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('tuesday'))"
    />
    <WeekDayHabits
      day="Quarta-Feira"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('wednesday'))"
    />
    <WeekDayHabits
      day="Quinta-Feira"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('thursday'))"
    />
    <WeekDayHabits
      day="Sexta-Feira"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('friday'))"
    />
    <WeekDayHabits
      day="Sábado"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('saturday'))"
    />
    <WeekDayHabits
      day="Domingo"
      :habits="habitsStore.habits.filter((habit) => habit.days.includes('sunday'))"
    />
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useHabitsStore } from "@/stores/habitsStore";

import WeekDayHabits from "../components/WeekDayHabits.vue";

const habitsStore = useHabitsStore();
</script>
