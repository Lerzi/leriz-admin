<script setup lang="ts">
import { useUserStore } from '~/store/user';

const formValue = ref({
  userName: 'admin',
  password: 'admin123',
});
const rules = ref();
const router = useRouter();

function login() {
  console.log('formValue :>> ', formValue);
  const userStore = useUserStore();

  userStore
    .login(formValue.value.userName, formValue.value.password)
    .then(() => {
      router.push({
        path: '/index',
      });
    })
    .catch(err => {
      window.$message.error(`${err}`);
    });
}
</script>
<template>
  <div class="app-container">
    <n-card title="登录" hoverable>
      <n-form
        ref="formRef"
        :label-width="80"
        :model="formValue"
        :rules="rules"
        :show-label="false"
      >
        <n-form-item label="用户名" path="userName">
          <n-input
            v-model:value="formValue.userName"
            placeholder="输入用户名"
          />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input
            v-model:value="formValue.password"
            placeholder="密码"
            type="password"
            show-password-on="mousedown"
          />
        </n-form-item>
        <n-form-item>
          <n-button
            attr-type="button"
            @click="login"
            type="primary"
            style="width: 100%"
          >
            登录
          </n-button>
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
