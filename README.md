# Test_InfoSystem

## 测试系统的练手计划
### 计划
先做vue+node再做jsp




## 框架安装
```
	1. npm install ---save art-template
	2. npm install ---save express-art-template
	// 模板替换，render
	3. npm install ---save vue
	4. npm install ---save vue-cli
	//vue
	5. npm i -S bootstrap@4.6
	//前端风格
	6. npm install --save body-parse
    //后端
	7. npm install axios -S
	//异步ajax的promise
```

### vue_node
#### 设计思路
<pre>
主体框架用后端框架
// 因为主要以实现功能为主，不纠结前端  
登录页点击后，身份验证后，后端渲染模板，模板里使用vue组件  
主要由vue组件来向后端提需求  

后端render
if {条件} 才渲染
src=组件.js

优势
- 前后端分离
- 权限控制
  - 非public资源无法请求访问
  - 非权限功能组件直接后端不向前端渲染，安全隔离
</pre>
#### 页面
- 登录页
- 管理页

#### 组件
##### 前端
- bootstrap

##### 后端

## 启动
```
node app.js

or

nodemon app.js
```