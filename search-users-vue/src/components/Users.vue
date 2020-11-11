<template>
  <div class="grid">
    <ul class="card" v-for="user in users" :key="user.login.uuid">
      <li><img :src="user.picture.thumbnail" alt="" /></li>
      <li>name: {{ user.name.first + " " + user.name.last }}</li>
      <li>login: {{ user.login.username }}</li>
      <li>idade: {{ user.dob.age }}</li>
      <li>sexo: {{ user.gender }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="css" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
}
ul li {
  list-style-type: none;
}

ul {
  background: #303a52;
  border-radius: 16px;
  color: white;
  border-left: 18px solid#364f6b;
}

ul li img {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}

.card {
  padding: 8px;
  max-width: 300px;
  min-width: 300px;
  display: grid;
  align-items: center;
  grid-template:
    "img name"
    "img login"
    "img idade"
    "img sexo";
  grid-template-columns: 60px 1fr;
  margin: 8px;
}

ul li:nth-child(1) {
  grid-area: img;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
