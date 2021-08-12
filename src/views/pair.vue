<template>
  <div class="pair-wrapper">
    <div>
      转出账户：
      <input v-model="fromAddress" type="text">
    </div>
    <div>
      转入账户：
      <input v-model="toAddress" type="text">
    </div>
    <div>
      交易金额：
      <input v-model="ETHvalue" type="text">
    </div>

    <button @click="tansfer">
      转账
    </button>
  </div>
</template>

<script>
import Web3 from "web3";
export default {
  data() {
    return {
      fromAddress: "",
      toAddress: "",
      ETHvalue:""
    };
  },
  methods: {
    async tansfer() {
      let web3Provider;

      if (window.ethereum) {
        web3Provider = window.ethereum;
      } else if (window.web3) {
        web3Provider = window.web3.currentProvider;
      } else {
        console.log("链接钱包失败！");
        return false;
      }
      const providers = new Web3(web3Provider);
      const value = providers.utils.toWei("1", "ether");
      const message = {
        from: this.fromAddress,
        to: this.toAddress,
        value: this.ETHvalue,
      };

      await providers.eth.sendTransaction(message, (err, res) => {
        if (!err) {
          console.log("交易哈希生成"+res);
        } else {
          console.log(err);
        }
      });
    },
  },
};
</script>

<style scoped>
.pair-wrapper {
  width: 500px;
  margin: auto;
}
input {
  width: 80%;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px 10px;
  margin-top: 40px;
  outline: none;
}
button {
  margin-top: 40px;
  width: 100%;
  font-size: 24px;
  color: black;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
}
</style>