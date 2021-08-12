<template>
  <div class="home-wrapper container">
    <div class="flex items-center justify-between pt-12">
      <div class="left-wrapper">
        <h2 class="title">
          ETH/USDT
        </h2>
        <div class="img-wrapper">
          <img src="../common/img/line.png" alt="line">
        </div>
      </div>
      <div class="right-wrapper">
        <h2 class="title">
          系统数据
        </h2>
        <div class="mt-8">
          <p>价格<span>$12,312.34</span></p>
          <p>流动性金额<span>5,489,302</span></p>
        </div>
        <div class="line" />
        <div>
          <p>成交量<span>12,312.34</span></p>
          <p>最近7天盈利值<span>5,489,302</span></p>
        </div>
      </div>
    </div>

    <div class="table-wrapper">
      <h2 class="title">
        搜索最近7天交易对排行
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  margin: auto;
  .title {
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #14171c;
    line-height: 28px;
  }
  .left-wrapper {
    width: 65%;
    padding: 30px;
    height: 300px;
    background: #fff;
    border-radius: 12px;
  }
  .right-wrapper {
    width: 32%;
    padding: 30px;
    height: 300px;
    background: #fff;
    border-radius: 12px;
    p {
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #8690a8;
      line-height: 22px;
      margin-bottom: 16px;
      display: flex;
      span {
        height: 20px;
        font-size: 16px;
        font-family: DIN-Medium, DIN;
        font-weight: 500;
        color: #14171c;
        line-height: 20px;
        flex: 1;
        text-align: right;
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 16px;
    }
  }
  .table-wrapper {
    padding: 30px;
    height: 440px;
    margin-top: 20px;
    border-radius: 12px;
    background: #fff;
  }
}
</style>