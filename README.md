# Test_InfoSystem

## 测试系统的练手计划
### 计划
先做vue+node




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
    8. npm install vue-server-renderer --save
    //后端渲染
    9. npm i --save express-session
    //后端身份
	10. npm install moment --save
	//时间管理
```

### vue_node
#### 设计思路
<pre>
主体框架用vue+node
登录页点击后，身份验证后，后端渲染模板，模板里使用vue组件  
主要由axios组件来向后端提post需求 
后端拿到请求返回更新前端数组
vue组件响应式绑定 

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
node main.js

or

nodemon main.js
```

## STATUS_CODE

| CODE        | 内容    |  描述  |
| --------   | -----:   | :----: |
| 0        |    失败   |       |
| 1        |   成功    |       |
| 2        |     用户已存在  |       |
| 3        |       |       |
| 4        |       |       |
| 5        |       |       |	

## 数据库操作code
| CODE        | 内容    |  描述  |
| --------   | -----:   | :----: |
| 0        |       |       |
| 1        |   增    |       |
| 2        |    改   |       |
| 3        |     看  |       |
| 4        |       |       |
| 5        |       |       |	

## 目前问题
### 异步post无法redirect
解决方案  
- windows.location
### 双重render渲染
- express渲染前端
- vue spa模式前台渲染  
解决方案  
- express后端先渲染vue标签
### session性能


### 数据库异步
解决方案
- async es7解决方案
- es6要用promise，更早要嵌套callback

### vue没拆组件
components

### 重连和数据库异常响应

### SQL注入


### 生命周期细究

### 页面初始渲染
会出现模板


### 名称翻译
- 后端给翻译表
  - 后端翻译表的异步性能待查