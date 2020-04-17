---
layout:     post
title:      this和手动实现apply、call、bind
subtitle:   小白学习前端的记录
date:       2020-4-17
author:     Emily
catalog: 	 true
tags:
    - js源码
    - this
    - apply
    - bind
    - call
---
# this 和手动实现

**知识点：**

​	**a. arguments 类数组**

​	**b. eval函数**

​	**c. this指针**

​	**d. 柯里化传参**


1. 手动实现call
语法：
> fun.call(thisArg, arg1, arg2, ...)

其中thisArg取值可能为：
- 不传，或者传null，undefined， this指向window对象
-  传递另一个函数的函数名fun2，this指向函数fun2的引用
- 值为原始值(数字，字符串，布尔值),this会指向该原始值的自动包装对象，如 String、Number、Boolean
- 传递一个对象，函数中的this指向这个对象

```javascript
Function.prototype.call = function (context) {
	// 判断context对象类型 如果为undefined或null则进行对象修改为windows
	  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  //在context上定义函数fn
  context.fn = this;
  //保存传递进来的参数
  var args = [];
  for(var i = 1; i < arguments.length; i++){
  	args.push('arguments['+ i +']');
  }
  //通过eval函数执行fn方法
  var result = eval('context.fn(' + args.join(',') + ')');
  // 删除fn方法
  delete context.fn;
  //返回结果值
  return result;
}
```
2. 手动实现apply
apply语法：
> fun.apply(thisArg, [argsArray])

argsArray: 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。
```javascript
Function.prototype.myApply = function (context, arr) {
  // 判断context对象类型 如果为undefined或null则进行对象修改为windows
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  //在context上定义函数fn,指向目标函数
  context.fn = this;
  var result;
  if (!arr) {
      result = context.fn();
  }
  else {
      //保存传递进来的参数
      var args = [];
      for(var i = 1; i < arguments.length; i++){
        args.push('arguments['+ i +']');
      }
      //通过eval函数执行fn方法
      result = eval('context.fn(' + args.join(',') + ')');
  }
  // 删除fn方法
  delete context.fn;
  //返回结果值
  return result;
}
```

------
总结：
apply和call都是用来改变函数的this指向的。
区别在于传参形式不同。
其实现方法类似于一次性的。
3. 手动实现bind

bind语法

> func.bind(thisArg[, arg1[, arg2[, ...]]])

bind功能：
bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
特点：
1. 返回一个函数
2. 可以传入参数
3. 支持柯里化传参
3. 当bind绑定后的函数作为构造函数时，绑定的this失效。实例的原型对象指向绑定前的构造函数原型。但是参数会继续传递。
```javascript
Function.prototype.myBind = function(context) {
	//判定其是否为函数，如果不是函数则抛出异常
	if(typeof this !== "function") {
		throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	}
	//获取参数
    //这里的this指的是bind前的函数
	var self = this;
	var args = Array.prototype.slice.call(arguments, 1);
	var fNOP = function () {};
	var fBound = function () {
		//这里的 arguments是bind返回的函数传入的参数
		var bindArgs = Array.prototype.slice.call(arguments);
        //判断返回的函数中的this是全局函数调用还是new 构造函数调用
		return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
	}
	fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

哎，最后这几句绑定还是没怎么看懂。。。

