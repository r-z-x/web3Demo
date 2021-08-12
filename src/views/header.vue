<template>
  <div class="headerLayout">
    <div class="container flex justify-between items-center">
      <div class="menu-wrapper flex items-center">
        <img src="../common/img/logo-npm.svg" alt="logo">
        <nav class="menu">
          <!-- <router-link to="/" active-class="active">
            首页
          </router-link> -->
          <router-link to="/" active-class="active">
            交易对
          </router-link>
        </nav>
      </div>
      <div v-if="!address">
        <button class="btn" @click="contect">
          连接钱包
        </button>
      </div>
      <div v-else class="connected-content flex justify-start items-center">
        <img src="../common/img/metamask18.svg" alt="metamask">
        <span>{{ shortAddress }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import abi from "./abi.json";
export default {
  data() {
    return {
      chainId: "",
      shortAddress: "",
      address:"",
      abi,
      web3:{},
    };
  },
  methods: {
    async contect() {
      try {
        let web3Provider;

        if (window.ethereum) {
          web3Provider = window.ethereum;
        } else if (window.web3) {
          // 老版 MetaMask Legacy dapp browsers...
          web3Provider = window.web3.currentProvider;
        } else {
          console.log("链接钱包失败！");
          return false;
        }
        const providers = new Web3(web3Provider);
        this.web3 = providers;

        // 获取当前chainId
        const chainId = await providers.eth.getChainId();
        console.log(chainId);
        
        // 获取当前账号地址
        const ETHaddress = await providers.eth.getAccounts();
        this.address = ETHaddress;
        this.shortAddress =`${ETHaddress[0].slice(0, 6)}...${ETHaddress[0].slice(-6)}`;
        console.log(ETHaddress);

        // 获取账户余额
        const balance = await providers.eth.getBalance(ETHaddress[0]);//注意单位wei
        console.log(balance);

        // 初始化合约
          await this.initContract();

      } catch (error) {
        console.log(error);
      }
    },

    //初始化合约
    async initContract() {
      const contractAddress = this.address;
      const abi = this.abi;
      try {
        const contract = await new this.web3.eth.Contract(abi, contractAddress);
        console.log(contract);

        //调用合约中的transferFrom
        const result = await contract.methods.transferFrom(this.address,this.address,1);
        console.log(result);

      } catch (error) {
        console.log({ error });
      }
    },
    
  },
  mounted(){

  },
  computed: {

  },
};
</script>

<style lang="less" scoped>
.headerLayout {
  width: 100%;
  height: 80px;
  background: #12161c;
  .container {
    width: 1200px;
    margin: auto;
    .menu-wrapper {
      img {
        max-width: 80px;
        margin-right: 40px;
      }
      a {
        height: 22px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
        margin: 0 20px;
      }
      .active{
          color:#aaa;
      }
    }
    .connected-content{
        img{
            margin-right: 8px;
        }
        color: #fff;
    }
    .btn {
      width: 148px;
      height: 40px;
      background: #f5b712;
      border-radius: 20px;
    }
  }
}
</style>
