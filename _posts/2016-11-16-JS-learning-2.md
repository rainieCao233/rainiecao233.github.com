---
layout: post
title: NodeJS总结
category: JavaScript
tags: 
- NodeJS
---

> http://www.imooc.com/learn/348

### 安装NodeJS与尝鲜

 - 启用一个web服务器
```
var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```
```
D:/NodeJS/imooc/beginning>node server.js
```
结果如下：
![result_1.png](http://upload-images.jianshu.io/upload_images/1801528-48f3239fe4883fd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 - 命令行体验
  ![cmd.png](http://upload-images.jianshu.io/upload_images/1801528-2975e99ebd445b4c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 - NodeJS 模块
> 模块分为核心模块( http / fs / path )、第三方模块、以及文件模块
> 模块的流程：创建模块->导出模块->引入模块->使用模块

  ```
  ---------------------- student.js ----------------------
  function add(student){
  	console.log("add student: " + student);
  }
  exports.add = add;
  ---------------------- teacher.js ----------------------
  function add(teacher){
  	console.log("add teacher: " + teacher);
  }
  exports.add = add;
  ---------------------- klass.js ----------------------
  var student = require('./student')
  var teacher = require('./teacher')
  // teacher.add("rainie")
  function add(tn,ss){
  	teacher.add(tn);
  	ss.forEach(function(item, index){
  		student.add(item)
  	})
  }
  exports.add = add; //对象实例, 推荐使用该方法
  // module.exports = add;  //让模块成为一个特别的对象类型
  ---------------------- index.js ----------------------
  var klass = require('./klass')
  // klass.add('Scott', ['a', 'b']) //Funtion1
  exports.add = function(klasses){    // 方法2, 将方法暴露出去
  	klasses.forEach(function(item, index){
  		var _klass = item;
  		var tn = item.tn;
  		var ss = item.ss;

  		klass.add(tn, ss);
  	})
  }
  ```
  ![resultOfFunction1.png](http://upload-images.jianshu.io/upload_images/1801528-cfb19eae1f0986ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 - CommonJS 规范

 > 留个口子，有时间了总结一下 

### Node.js API 讲解
 - URL
 > URL 是统一资源定位符 / URI 是统一资源标识符(一种规范)

   - url.parse('http://www.imooc.com:8080/video/6710?from=scott&a=b#s')
  
   ![parseWithoutTrue.png](http://upload-images.jianshu.io/upload_images/1801528-c633202237b66727.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   - url.parse('http://www.imooc.com:8080/video/6710?from=scott&a=b#s',true)
  
    ![parseWithTrue.png](http://upload-images.jianshu.io/upload_images/1801528-752499d27f700d2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   -  url.parse('//imooc.com/cour/list') / url.parse('//imooc.com/cour/list', true)
  
    ![parseWithoutportWithOut2true.png](http://upload-images.jianshu.io/upload_images/1801528-98053e935c2a5c01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   - url.parse('//imooc.com/cour/list', true, true)
  
    ![parseWith2true.png](http://upload-images.jianshu.io/upload_images/1801528-60cc0cf7e89ff85f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   - url.format('http://www.imooc.com:8080/video/6710?from=scott&a=b#s')
  
    ![format.png](http://upload-images.jianshu.io/upload_images/1801528-dfc20a87a852067b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

   - url.resolve('http://imooc.com','/course/list')
  
    ![resolve.png](http://upload-images.jianshu.io/upload_images/1801528-031e28aacc496993.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- Query String

    ![stringify.png](http://upload-images.jianshu.io/upload_images/1801528-ba3fb35ca5f82eea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    ![parse.png](http://upload-images.jianshu.io/upload_images/1801528-6c86f3b193c93922.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    ![escape.png](http://upload-images.jianshu.io/upload_images/1801528-4a61195785a32f0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- HTTP
 - 概念
    

### Node.js 搭建小应用




















