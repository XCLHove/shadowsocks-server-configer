<script setup lang="ts">


import EncryptUtil from "~/utils/EncryptUtil";

const formData = ref<LoginForm>({
  username: '',
  password: ''
})

const login = (event: Event) => {
  event.preventDefault()
  loginApi({
    username: formData.value.username,
    password: EncryptUtil.encrypt(formData.value.password, formData.value.username)
  }).then((result) => {
    Toast.success('登录成功')
    ClientTokenUtil.set(result.data)
    navigateTo('/')
  })
}
</script>

<template>
  <div class="form-box">
    <form @submit="login">
      <h2 class="title">登录</h2>
      <div class="item">
        <span class="label">username</span>
        <input v-model="formData.username"></input>
      </div>
      <div class="item">
        <span class="label">password</span>
        <input v-model="formData.password" type="password"></input>
      </div>
      <div class="item">
        <button>登录</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="less">
.form-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    border: var(--boder);
    border-radius: var(--boder-radius);
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 400px;

    .title {
      text-align: center;
    }

    .item {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 10px 0;

      .label {
        width: 75px;
      }

      input {
        flex-grow: 1;
      }

      button {
        width: 100%;
      }
    }
  }
}
</style>
