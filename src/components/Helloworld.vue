<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>

</template>
<script>
export default {
  data() {
    return {
      msg: "hello world?",
    };
  },
};
</script>
<style scoped>
/*scoped限定样式只对当前组件有效果,
原理当前组件的标签会自动添加一个特定的属性，
样式的选择器也添加了对应的属性选择  ===>不会匹配到其他组件的标签
*/
h2 {
  color: red;
}
</style>

