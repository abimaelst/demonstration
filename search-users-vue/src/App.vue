<template>
  <h2>Buscar Usuários Vue</h2>
  <BaseInput
    placeholder="digite aqui..."
    label="Buscar Usuários"
    @input="setFilter($event)"
    @search-users="getFilteredUsers"
  />
  <Users :users="filteredUsers" />
</template>

<script>
import ServiceApi from "@/services/ServiceApi";
import Users from "@/components/Users.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
  data() {
    return {
      allUsers: [],
      filteredUsers: [],
      filter: "",
    };
  },
  components: {
    Users,
    BaseInput,
  },
  created() {
    ServiceApi.getUsers().then((res) => {
      this.allUsers = res.results;
      this.filteredUsers = res.results;
    });
  },
  methods: {
    setFilter(e) {
      this.filter = e.target.value.toString();
    },
    getFilteredUsers() {
      this.filteredUsers = this.allUsers.filter((user) =>
        user.name.first.includes(this.filter)
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
