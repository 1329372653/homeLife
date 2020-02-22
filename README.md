# HomeLife家居生活网站

## 1.说明：

​		使用react框架搭建的一个家居生活网站，麻雀虽小，五脏俱全，适合react的入门学习。

​		如果对您有帮助请点击右上角的“star”支持一下！谢谢！ ^_^，如果项目存在哪些问题，请联系我进行更正哦！

## 2.项目运行：

```
#克隆整个项目到本地：
		git clone https://github.com/1329372653/homeLife.git
#安装MongoDB数据库：
		安装步骤不一一介绍，不懂的自行查阅，谢谢！
#导入MongoDB数据（论坛的一些用于展示的数据）：
		打开MongoDB文件夹，里面有个文件homelife.js，将此文件的数据导入到MongoDB数据库即可。
#开启MongoDB服务：
		Mac系统在终端输入：sudo mongod命令，输入电脑密码即可开启服务。（Windows系统不再介绍）
#进入后台homelife-server文件夹:
		cd homelife-server
#安装依赖：
		npm install
#开启本地服务器localhost:8899
		node server.js
#进入前台homelife文件夹：
		cd homelife
#安装依赖：
		npm install
#开启本地服务localhost:3000
		npm run start  或者 使用yarn命令：yarn start（推荐）
#发布环境：
		npm run build  或者 使用yarn命令：yarn build（推荐）

```

## 3.效果演示：

## [项目线上展示](http://godfy.cn:6789)



## 4.项目功能介绍

本项目主要实现了以下功能：

```
#用户的注册登录以及退出登录
#用户个人信息查询
#用户个人信息修改
#用户密码修改
#家居产品的分类展示
#区域展示、套件展示、室内装饰展示、精选案例展示
#好货研究所
#品牌推荐
#装修案例的展示
#产品优选
#前沿家居资讯
#商品的搜索
#提交订单
```

## 5.项目上线准备

本项目上线需要修改以下数据：

1.修改homelife目录下的src/pages/下的每个页面代码中的图片的src路径

```
比如：<img className="Brand_img" src={'http://localhost:8899' + this.state.BrandData.image} alt={this.state.BrandData.brand}></img>
修改为：<img className="Brand_img" src={'http://您的服务器公网地址:8899' + this.state.BrandData.image} alt={this.state.BrandData.brand}></img>
```

2.修改setupProxy.js

```
将下面代码中的target目标服务器地址修改为：您的服务器地址
const proxy = require("http-proxy-middleware");
 
module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:8899/",
      changeOrigin: true
    })
  );
};
```

3.npm run build进行项目打包，生成build文件夹

## 6.关注我的博客

https://1329372653.github.io

关注我的博客获取更多！