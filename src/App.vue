//1. Create a public github repo for this project, and commit everyday to get green squares (Done)
//1.1 pull from the repo because I changed the readme, and then push to the repo, and continue with adding the router (Done)
//2. Setup vue router, maybe with a whole new project setup, or integrate it into here. 
//3. Put the project up on AWS Amplify (or google or Azure - just for learning's sake)


<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default{
  
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
