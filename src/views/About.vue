<template>
    <h3>Hello, this is the About Page</h3>
    <button @click="imageClick()">button one</button>
    
</template>

<script>
export default {
  name: 'About',
  props: {
  },
  methods: {
    imageClick() {
        alert('button click!')
        console.log("image was clicked!")
    },
  },
}
</script>
