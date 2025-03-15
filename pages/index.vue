<script setup lang="ts">
const config = ref<Config>()

onMounted(() => {
  getConfigApi().then((result) => {
    config.value = result.data
  })
})

const Methods = ['chacha20-ietf-poly1305']

const showPassword = (e: Event) => {
  const input = e.target as HTMLInputElement
  input.type = 'text'
}
const hidePassword = (e: Event) => {
  const input = e.target as HTMLInputElement
  input.type = 'password'
}

const add = () => {
  config.value?.servers.push({
    server_port: config.value?.servers[config.value?.servers.length - 1].server_port + 1,
    password: '123456',
    method: Methods[0],
    server: '0.0.0.0',
    timeout: 300
  })
}
const save = () => {
  if (!config.value) return
  saveConfigApi(config.value).then(() => {
    Toast.success('保存成功')
    restartContainer()
  })
}
const restartContainer = () => {
  restartContainerApi().then(() => {
    Toast.success('重启容器成功')
  })
}
</script>

<template>
  <div class="table-box">
    <table>
      <thead>
        <tr>
          <th>server_port</th>
          <th>password</th>
          <th>method</th>
          <th>server</th>
          <th>timeout</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="config" v-for="(item, index) in config.servers" :key="item.server_port">
          <td>
            <input type="number" v-model="config.servers[index].server_port" />
          </td>
          <td>
            <input type="password" @focus="showPassword" @blur="hidePassword" v-model="config.servers[index].password" />
          </td>
          <td>
            <select v-model="config.servers[index].method">
              <option v-for="method in Methods" :key="method" :value="method">
                {{ method }}
              </option>
            </select>
          </td>
          <td>
            <input type="text" v-model="config.servers[index].server" />
          </td>
          <td>
            <input type="number" v-model="config.servers[index].timeout" />
          </td>
          <td>
            <button @click="config.servers.splice(index, 1)">删除</button>
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <button style="width: 100%" @click="add">添加</button>
          </td>
        </tr>
        <tr>
          <td colspan="6">
            <button style="width: 100%" @click="save">保存</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="less">
.table-box {
  width: 100%;
  display: flex;
  justify-content: center;
}

table {
  border: var(--boder);
  margin-top: 20px;

  th,
  td {
    border: var(--boder);
    text-align: center;
    padding: 5px;
  }
}
</style>
