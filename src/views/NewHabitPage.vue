<template>
  <main>
    <form @submit.prevent="saveHabit">
      <div class="field label fill large">
        <input type="text" v-model="newHabit.name" />
        <label>Nome do Hábito</label>
        <small class="custom-error"> {{ errors.name || "" }}</small>
      </div>

      <div class="field label fill large">
        <input type="time" v-model="newHabit.timeBegin" />
        <label>Início</label>
        <small class="custom-error"> {{ errors.timeBegin || "" }}</small>
      </div>

      <div class="field label fill large">
        <input type="time" v-model="newHabit.timeEnd" />
        <label>Fim</label>
        <small class="custom-error"> {{ errors.timeEnd || "" }}</small>
      </div>

      <fieldset>
        <legend>Dias</legend>
        <nav class="vertical" v-for="day in days" :key="day">
          <label class="checkbox">
            <input type="checkbox" :value="day.value" v-model="newHabit.days" />
            <span>{{ day.name }}</span>
          </label>
        </nav>
      </fieldset>
      <div class="tw:h-8 tw:flex tw:items-end">
        <small class="custom-error"> {{ errors.days || "" }}</small>
      </div>

      <div class="tw:flex tw:h-16 tw:items-end tw:justify-center">
        <button class="primary tw:w-full">Salvar</button>
      </div>
    </form>

    <div :class="{ snackbar: true, active: isSnackbarActive }">Novo hábito salvo!</div>
  </main>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { useHabitsStore } from "@/stores/habitsStore";
import * as yup from "yup";

const habitsStore = useHabitsStore();
const router = useRouter();
const isSnackbarActive = ref(false);

const days = [
  { name: "Segunda-Feira", value: "monday" },
  { name: "Terça-Feira", value: "tuesday" },
  { name: "Quarta-Feira", value: "wednesday" },
  { name: "Quinta-Feira", value: "thursday" },
  { name: "Sexta-Feira", value: "friday" },
  { name: "Sábado", value: "saturday" },
  { name: "Domingo", value: "sunday" },
];

const newHabit = reactive({
  name: "",
  timeBegin: "",
  timeEnd: "",
  days: [],
});

const errors = ref({});

const newHabitSchema = yup.object({
  name: yup.string().required("O título é obrigatório."),
  timeBegin: yup.string().required("O horário de início é obrigatório."),
  timeEnd: yup.string().required("O horário final é obrigatório."),
  days: yup.array().min(1, "Escolha pelo menos um dia.").required("Escolha pelo menos um dia."),
});

const saveHabit = async () => {
  const isValid = await validateForm();
  if (!isValid) return;

  habitsStore.addHabit(newHabit);
  isSnackbarActive.value = true;

  router.push("/");

  setTimeout(() => {
    isSnackbarActive.value = false;
  }, 3000);
};

const validateForm = async () => {
  try {
    errors.value = {};
    await newHabitSchema.validate(
      {
        ...newHabit,
      },
      { abortEarly: false }
    );
    return true;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      error.inner.forEach((e) => {
        errors.value[e.path] = e.message;
      });
    }
    return false;
  }
};
</script>
