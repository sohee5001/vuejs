<template>
  <div class="hello">
    <DefaultHeader/>
    <Title :name=name></Title>
  </div>
</template>

<script>
  import DefaultHeader from '@/layouts/DefaultHeader'
  import Title from '@/components/Title'
export default {
  name: 'services',
  components: {DefaultHeader,Title},
  data(){
    return {
      name : "services"
    }
  }
}
</script>
