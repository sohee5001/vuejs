<template>
  <div >
    <DefaultHeader/>
    <Title :name=name></Title>
  </div>
</template>

<script>
  import DefaultHeader from '@/layouts/DefaultHeader'
  import Title from '@/components/Title'
  export default {
    name: 'blog',
    components: {DefaultHeader,Title},
    data(){
      return {
        name : "blog"
      }
    }
}
</script>
