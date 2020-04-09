<template>
    <a :herf="link">click me</a>
    <p v-if="number > 3">Show me if number more than 3</p>
    <p v-else>Show me if number less than 3</p>
</template>

<script>
export default {
  name: 'Demo',
  data: {
    link: 'http://localost:8080', 
    number: 3
  }
}
</script>

