<template>
  <div>
    <h2>
      {{ msg }}
    </h2>
    <HelloWorld />
    <hello-world />
  </div>
</template>
<script>
import HelloWorld from "./components/Helloworld";  //通过webpack配置了resolve，省略了vue后缀名
export default {
  //   name: "app",
  data() {
    return {
      msg: "hello vue",
    };
  },
  components: {
    //局部注册组件，只能在当前组件使用
    HelloWorld,
  },
};
</script>
<style>
div {
  color: red;
}
</style>