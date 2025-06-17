<template>
  <details>
    <summary>
      <article class="secondary no-elevate">
        <nav>
          <div class="max">{{ displayDayName }}</div>
          <i>expand_more</i>
        </nav>
      </article>
    </summary>

    <fieldset v-if="habits.length > 0">
      <legend>Hábitos</legend>
      <nav class="vertical">
        <label class="checkbox" v-for="habit in habits" :key="habit.id">
          <input
            type="checkbox"
            :checked="habit.completions[day]?.completed"
            @change="habitsStore.changeHabitCompletion(habit.id, day)"
          />
          <span>{{ habit.timeBegin }} - {{ habit.timeEnd }} | {{ habit.name }}</span>
        </label>
      </nav>
    </fieldset>

    <p v-else class="tw:flex tw:justify-center">Não há hábitos para esse dia.</p>
  </details>
</template>

<script setup>
import { useHabitsStore } from "@/stores/habitsStore";

const props = defineProps({
  day: String,
  habits: Array,
  displayDayName: String,
});

const habitsStore = useHabitsStore();
</script>
