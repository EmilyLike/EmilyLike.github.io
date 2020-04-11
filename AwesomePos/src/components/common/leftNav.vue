<template>
<div class="left-nav">
    <el-container>
        <!-- <el-header class="header">
            <span>快餐店收银系统</span>
        </el-header> -->
        <el-container>
            <el-aside class="aside">                   
                <el-menu
                background-color="#1D8ce0"
                text-color = "#fff"
                active-text-color="#f391a9"
                router
                >
                    <el-menu-item index="pos">
                        <template slot="title">
                        <i class="icon iconfont icon-zuanshi"></i>
                        <span>收银</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="store">
                        <template slot="title">
                        <i class="icon iconfont icon-dianpu"></i>
                        <span>店铺</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="shangpin">
                        <template slot="title">
                        <i class="icon iconfont icon-hanbao"></i>
                        <span>商品</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="vip">
                        <template slot="title">
                        <i class="icon iconfont icon-huiyuanqia"></i>
                        <span>会员</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="count">
                        <template slot="title">
                        <i class="icon iconfont icon-jifen"></i>
                        <span>统计</span>
                        </template>
                    </el-menu-item>
                </el-menu>            
            </el-aside>
            <el-main class="main">
              <router-view/>
            </el-main>
        </el-container>
    </el-container>
</div>

</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.left-nav {
  height: 100%;
  overflow: hidden;
  .el-container,
  .el-aside {
    height: 100%;
  }
  .header {
    background: #2196f3;
    line-height: 40px;
    height: 40px;
    color: #fff;
  }
  .aside {
    width: 200px !important;
    flex: none;
    background-color: #262d37;
    border-right: solid 1px #e6e6e6;
    .el-menu {
      background: inherit;
      border-right: none;
    }
  }
  .main {
    height: 100%;
    padding: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>