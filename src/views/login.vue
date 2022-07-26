<script setup lang="ts">
const formValue = ref({
  userName: '',
  password: '',
});
const rules = ref();

function login() {}
</script>
<template>
  <div class="app-container">
    <n-card title="登录" hoverable>
      <n-form
        ref="formRef"
        :label-width="80"
        :model="formValue"
        :rules="rules"
        size="small"
        :show-label="false"
      >
        <n-form-item label="用户名" path="userName">
          <n-input
            v-model:value="formValue.userName"
            placeholder="输入用户名"
          />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input v-model:value="formValue.password" placeholder="密码" />
        </n-form-item>
        <n-form-item>
          <n-button attr-type="button" @click="login"> 登录 </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .n-card {
    max-width: 350px;
  }
}
</style>
