<template>
  <div class="cardInput">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button type="submit" name="action" @click="dispatchSearchUsers">
      Buscar
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    dispatchSearchUsers() {
      this.$emit("search-users");
    },
  },
};
</script>

<style lang="css" scoped>
.cardInput {
  margin: 0 auto;
  background: #f0f0f0;
  width: 600px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
input {
  width: 500px;
  border: none;
  outline: none;

  font-size: 1.2rem;
  padding: 10px 2px 0;
  border-bottom: 2px solid #e0e0e0;
}

input label {
  color: #bdbdbd;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

input:focus + label,
input:valid + label {
  top: 0;
  font-size: 1rem;
  background-color: white;
}

button {
  background: #a4243b;
  color: white;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 25px;
  text-decoration: none;
}

button:hover {
  background: #4b111b;
}
</style>
