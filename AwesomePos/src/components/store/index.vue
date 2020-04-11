<template>
  <div class="pos">
    <div>
      <el-row >
        <el-col :span='7' class="pos-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border show-summary style="width: 100%" >
              <el-table-column prop="goodsName" label="商品"  ></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column  label="操作" width="100px" fixed="right">
                  <template scope="scope">
                      <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                      <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
              </el-table-column>
              </el-table>
              <div class="div-btn">
                  <el-button type="warning">挂单</el-button>
                  <el-button type="danger" @click="delAllGoods()">删除</el-button>
                  <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
            挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
            外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="17" id="order-list">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="goods in oftenGoods" :key=goods.id @click="addOrderList(goods)">
                    <span>{{goods.goodsName}}</span>
                    <span class="o-price">￥{{goods.price}}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                    <ul class='cookList'>
                        <li v-for="goods in type0Goods" :key=goods.index @click="addOrderList(goods)">
                            <span class="foodImg"><img :src="goods.goodsImg" height=100px width=100px></span>
                            <span class="foodName">{{goods.goodsName}}</span>
                            <span class="foodPrice">￥{{goods.price}}元</span>
                        </li>
                    </ul>
                </div>
                </el-tab-pane>
                <el-tab-pane label="小食">
                    <div>
                        <ul class='cookList'>
                            <li v-for="goods in type1Goods" :key=goods.index @click="addOrderList(goods)">
                                <span class="foodImg"><img :src="goods.goodsImg" height=100px width=100px></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                    <div>
                        <ul class='cookList'>
                            <li v-for="goods in type2Goods" :key=goods.index @click="addOrderList(goods)">
                                <span class="foodImg"><img :src="goods.goodsImg" height=100px width=100px></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                    <div>
                        <ul class='cookList'>
                            <li v-for="goods in type3Goods" :key=goods.index @click="addOrderList(goods)">
                                <span class="foodImg"><img :src="goods.goodsImg" height=100px width=100px></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'Store',
    data () {
    return { 
        tableData: [],
        type0Goods:[],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
    }
     },
    methods:{
        //删除单个商品,可以使用computed
      delSingleGoods(goods){
        console.log(goods);
        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
      },
            //删除所有商品
        delAllGoods() {
        this.tableData = [];
        },
      
      //添加订单列表的方法
      addOrderList(goods){
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
            }
      }
    },
    created(){
    axios.get('https://www.fastmock.site/mock/dbde3142958da212261741354b8c56d2/oftenGoods/oftenGoods')
    .then(response=>{
        console.log(response);
        this.oftenGoods=response.data;
    })
    .catch(error=>{
        console.log(error);
        alert('网络错误，不能访问');
    })
    //读取分类商品列表
    axios.get('https://www.fastmock.site/mock/dbde3142958da212261741354b8c56d2/oftenGoods/typeGoods')
    .then(response=>{
        console.log(response);
        //this.oftenGoods=response.data;
        this.type0Goods=response.data[0];
        this.type1Goods=response.data[1];
        this.type2Goods=response.data[2];
        this.type3Goods=response.data[3];

    })
    .catch(error=>{
        console.log(error);
        alert('网络错误，不能访问');
    })
    },
    mounted:function(){
      var orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px';
  },

}
</script>
<style scoped>
    .pos-order{
        background-color: #F9FAFC;
        border-right: 1px solid #C0CCDA;
        height: 100%;
    }
    .div-btn{
        margin:10px auto;
        /* text-align: center; */
    }
     .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }
   .goods-type{
       clear: both;
       padding-left: 5px;
   }
   .cookList li{
       list-style: none;
       width:23%;
       /* height: 23%; */
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px 2px;

   }
   .cookList li span{

        display: block;
        float:left;
        text-align: center;
   }
   .foodImg{
       /* width: 40%; */
   }
   .foodName{
       font-size: 16px;
       padding-top: 10px;
       padding-left: 10px;
       color:brown;
       

   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>