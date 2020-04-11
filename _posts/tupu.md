---
layout:     post
title:      我的前端知识图谱构建
subtitle:   边学边更新
date:       2020-4-11
author:     Emily
catalog: 	 true
tags:
    - 前端
    - 知识图谱
---
# 前端知识图谱构建

## css

1. 盒模型

2. BFC

3. 页面布局

4. 各种垂直居中操作

5. 清除浮动

   

## html

1. dom操作
2. 

## javascript

1. 事件
   - 事件循环
   - 事件流
   - 事件委托/代理
2. 浏览器渲染
3. promise
   - 三个状态变化
   - 回调函数
4. 数据类型
   - 基本数据类型
   - 引用数据类型
5. 原型链
   - 构造函数
   - new create方法区别
   - 原型链
   - 组合继承/寄生组合继承
6. this
   - apply call bind 函数区别 应用 原理
7. 箭头函数
   - 特点
8. 作用域
   - let var const 区别

## vue

1. 生命周期

   - 钩子函数

2. mvvm模型

   - 数据双向绑定的流程 具体代码
   - 四个函数  一个是监听函数observer，其内部通过defineproperty方法给每个属性设置setter和get方法实现监听数据的变化。
   - 第二个是订阅器dep，采用“发布订阅”模式，如果数据有变化则通过订阅器更新数据
   - proxy

3. 虚拟dom 更新

   虚拟 DOM 的实现原理主要包括以下 3 部分：

   - 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
   - diff 算法 — 比较两棵虚拟 DOM 树的差异；
   - pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。
   - **这两个算法是怎么实现的**

## 网络

1. http请求
2. 输入url发生了什么
3. http头部内容
4. ajax请求
5. axios请求
6. 跨域问题
   - 同源策略
   - jsonp
   - fetch
7. 缓存
   - cookie
   - localstorage
   - sessionstorage

## 优化

## 算法

1. 剑指offer

2. 数据结构

   串 链表 栈 队列 树 哈希表 图

    
