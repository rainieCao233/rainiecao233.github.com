---
layout: post
title: VueJS总结
category: JavaScript
tags: 
- VueJS
---

> :relaxed: http://cn.vuejs.org/

- 双向绑定
```
<div id="demo">
	<p>{{message}}</p>
	<input v-modal="message">
</div>
var demo = new Vue({
	el:"#demo",
	data:{
		message:"hello Vue.js"
	}
})
//修改页面上的值会绑定到JS里面
```

- 组件化
> 我们可以吧HTML/CSS/STYLE写在一个XXX.vue文件内，在文件内使用<template></template><script></script><style></style>标签将页面分为三个部分

- Vue.js组件的重要选项
```
new Vue({
	data:{
		a:1,
		items:[
                {
                    label:"apple"
                },
                {
                    label:"banana"
                }]
	},
	methods:{
		doSomething:function(){
			this.a++;
		}
	},
	watch:{  //对数据进行监听
		'a':function(val,oldVal){
			console.log(val, oldVal)
		}
	}
})
```

- 模板指令
 - 数据渲染：v-text \ v-html \ ({})

	```
	<p>({ a })</p>
	<p v-text="a"></p>
	<p v-html="a"></p>
	```

 - 控制模块隐藏：v-if \ v-show

	```
	<p v-if="a"></p>
	<p v-show="a"></p>
	//v-if的值若为false则不对DOM进行渲染，而v-show是通过display进行控制显示与隐藏
	```

 - 渲染循环列表：v-for

	```
	<ul>
	    <li v-for="item in items">
	        <p v-text="item.label"></p>
	    </li>
	</ul>
	```

 - 事件绑定：v-on

	```
	<button v-on:click="doSomething"></button>
	<button @click="doSomething"></button>
	```

 - 属性绑定：v-bind
 
	```
	<img v-bind:src="imageSrc">
	<div :class="{red: isred}"></div>
	<div :class="[classA, classB]"></div>
	<div :class="[classA, {classB: isB, classC: isC}]"></div
	```