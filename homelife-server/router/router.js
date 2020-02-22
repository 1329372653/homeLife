const express = require('express');
const router = express.Router();
const multer = require('multer');
const Admin = require('../model/admin');
const User = require('../model/user');
const Goods = require('../model/goods');
const path = require('path');
const OrderForm = require('../model/orderForm')
const Exhibition = require('../model/exhibition')
const Decoration = require('../model/decoration')
const Brand = require('../model/brand')
const Information = require('../model/information')


//配置multer存储文件的信息(包含要存储的文件的名字已经文件存在哪里)
var storage = multer.diskStorage({
    //配置图片存储的位置
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/img'))
    },
    //配置图片保存的名字
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

//创建一个multer对象用来处理文件上传
//multer 可以帮我们解析 content-type:mulipart/form-data这种方式提交的请求数据
var upload = multer({ storage: storage })

//后台管理系统

//来到后台系统登录
router.get("/login", async (req, res) => {

    res.render("login.html")
})

//来到后台管理系统
router.get("/index", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        res.render("index.html", { admin: admin })
    } else {
        res.redirect("/login");
    }
})
//来到添加展示数据的页面
router.get("/addExhibition", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        res.render("addExhibition.html", { admin: admin })
    } else {
        res.redirect("/login");
    }
})
//来到添加案例的页面
router.get("/addDecoration", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        res.render("addDecoration.html", { admin: admin })
    } else {
        res.redirect("/login");
    }
})
//来到添加品牌信息的页面
router.get("/addBrand", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        res.render("addBrand.html", { admin: admin })
    } else {
        res.redirect("/login");
    }
})
//来到添加前沿资讯的页面
router.get("/addInformation", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        res.render("addInformation.html", { admin: admin })
    } else {
        res.redirect("/login");
    }
})
//来到查看订单的页面
router.get("/getOrderForm", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        var result = await OrderForm.getAllOrder();
        var AllOrder = result.AllOrder;
        AllOrder = AllOrder.map((item) => {
            //将mongoose封装的数据类型转换成js的对象
            item = item.toObject();
            item.created_time = new Date(item.created_time).toLocaleString();
            return item;
        })
        res.render("getOrderForm.html", { admin: admin,AllOrder:AllOrder })
    } else {
        res.redirect("/login");
    }
})
//来到订单详情页面
router.get("/orderDetail/:id", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        var _id = req.params['id']
        let result = await OrderForm.getOrderDetail(_id)
        var orderDetail = result.orderDetail;
        orderDetail = orderDetail.map((item) => {
            //将mongoose封装的数据类型转换成js的对象
            item = item.toObject();
            item.created_time = new Date(item.created_time).toLocaleString();
            return item;
        })
        res.render("orderDetail.html", { admin: admin,orderDetail:orderDetail[0] })
    } else {
        res.redirect("/login");
    }
})
//删除订单的处理
router.get("/deleteOrder/:id", async (req, res) => {
    if (req.session.admin) {
        var admin = req.session.admin;
        var _id = req.params['id']
        let result = await OrderForm.deleteOrder(_id)
        if(result.code == 101){
            res.redirect("/getOrderForm")
        }
    } else {
        res.redirect("/login");
    }
})
//处理登录后台系统请求
router.post("/login", async (req, res) => {
    let result = await Admin.login(req.body);
    //登录成功
    if (result.code == 101) {
        //把用户的信息保存到session中
        req.session.admin = result.admins;
        //来到index.html
        res.redirect("/index");
    }
    //登录失败
    else {
        res.render("login.html", { err_message: result.msg })
    }
})
//退出登录
router.get("/logout", (req, res) => {
    req.session.admin = null;
    res.redirect("/login")
})
//增加商品
router.post("/addgoods", upload.array('pictures', 9), async (req, res) => {
    if (req.session.admin) {
        var files = req.files;
        var pictures = [];
        //获取文件保存的路径
        files.map(item => {
            var savepath = path.join("/public/img", item.filename);
            pictures.push(savepath)
        })
        req.body.pictures = pictures;
        req.body.mainImg = pictures[0]
        let result = await Goods.addGoods(req.body);
        if (result.code == 101) {
            res.redirect("/index");
        }
    } else {
        res.redirect("/login");
    }
})
//增加展示数据
router.post("/addExhibitionData", upload.array('pictures', 9), async (req, res) => {
    if (req.session.admin) {
        var files = req.files;
        var pictures = [];
        //获取文件保存的路径
        files.map(item => {
            var savepath = path.join("/public/img", item.filename);
            pictures.push(savepath)
        })
        req.body.imgArray = pictures;
        let result = await Exhibition.addExhibition(req.body);
        if (result.code == 101) {
            res.redirect("/addExhibition");
        }
    } else {
        res.redirect("/login");
    }
})
//添加案例的操作
router.post("/addDecorationData", upload.array('pictures', 9), async (req, res) => {
    if (req.session.admin) {
        var files = req.files;
        var pictures = [];
        //获取文件保存的路径
        files.map(item => {
            var savepath = path.join("/public/img", item.filename);
            pictures.push(savepath)
        })
        req.body.imgArray = pictures;
        let result = await Decoration.addDecoration(req.body);
        if (result.code == 101) {
            res.redirect("/addDecoration");
        }
    } else {
        res.redirect("/login");
    }
})
//处理品牌信息添加
router.post("/addBrandData", upload.single('image'), async (req, res) => {
    var file = req.file;
    var savepath = path.join("/public/img", file.filename);
    req.body.image = savepath;
    let result = await Brand.addBrand(req.body);
    if (result.code == 101) {
        res.redirect("/addBrand");
    }
    else {
        res.redirect("/login");
    }
})
//处理添加前沿资讯的页面
router.post("/addInformation", async (req, res) => {
    let result = await Information.addInformation(req.body);
    if (result.code == 101) {
        res.redirect("/addInformation");
    }
    else {
        res.redirect("/login");
    }
})


//前台

//处理登录请求
router.post("/api/login", async (req, res) => {
    if (req.body.password == req.body.confirmPassword) {
        let result = await User.login(req.body);
        // 登录成功
        if (result.code == 101) {
            //把用户的信息保存到session中
            req.session.user = result.user;
            res.json(result);
        }
        //登录失败
        else {
            res.json(result);
        }
    }
    else {
        res.json({ code: 102, msg: '两次输入的密码不正确！' })
    }
})

//处理注册用户的请求
router.post("/api/register", async (req, res) => {
    let result = await User.register(req.body);
    res.json(result)
})
//获取session数据的请求
router.get("/api/getsession", async (req, res) => {
    if (req.session.user) {
        var user = req.session.user;
        res.json({ code: 101, msg: "查询成功！", user });
    }
    else {
        res.json({ code: 100, msg: "未登录，请登录后再试！" })
    }
})

//退出登录
router.get("/api/logout", (req, res) => {
    req.session.user = null;
    res.json({ code: 101, msg: "退出登录成功！" })
})


//处理用户信息修改
router.post("/api/settings/person", upload.single('avatar'), async (req, res) => {
    var file = req.file;
    //获取文件保存的路径
    var savepath = path.join("/public/img", file.filename);
    //将文件保存的路径信息放入到req.body里面
    req.body.avatar = savepath;
    let result = await User.ModifyUserMessage(req.body._id, req.body);
    if (result.code == 101) {
        //当修改用户信息成功之后，我们需要将最新的user重新保存到session
        req.session.user = result.user;
        res.json({ code: 101, msg: "个人信息修改成功！", user: result.user })
    }
    else {
        res.json({ code: 100, msg: "个人信息修改失败！" })
    }
})

//处理修改密码的请求
router.post("/api/settings/password", async (req, res) => {
    //修改密码
    var body = req.body;
    //1.判断用户输入的原密码和当前的session中所保存的用户密码是否一致
    if (body.oldPassword == req.session.user.password) {
        //2.如果一致，说明用户输入的原密码正确，则继续判断用户输入的密码和确认密码是否一致，如果一致，则可以修改密码
        if (body.confirmPassword == body.newPassword) {
            //3.执行修改密码操作
            let result = await User.ModifyPwd(body.newPassword, req.session.user._id);
            //4.修改密码成功
            if (result.code == 101) {
                req.session.user.password = body.newPassword;
                res.json(result);
            }
        }
        //用户输入的两次密码不一致
        else {
            res.json({ code: 100, msg: "两次密码不一致" });
        }
    }
    //用户输入的原密码错误
    else {
        res.json({ code: 100, msg: "原密码错误" });
    }
})
//获取catagory类别商品
router.post("/api/getCategory", async (req, res) => {
    let result = await Goods.getCategory(req.body.category)
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取类别商品成功！", category: result.result })
    }
    else {
        res.json({ code: 100, msg: "获取类别商品失败！" })
    }
})
//通过商品_id查询商品详情信息
router.post("/api/getGoodDetail", async (req, res) => {
    let result = await Goods.getGoodDetail(req.body._id)
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取商品详情信息成功！", goodDetail: result.goodDetail })
    } else {
        res.json({ code: 100, msg: "获取商品详情信息失败！" })
    }
})
//处理购买意向申请表的提交
router.post("/api/submitPurpose", async (req, res) => {
    let result = await OrderForm.addOrder(req.body)
    if (result.code == 101) {
        res.json({ code: 101, msg: "提交购买意向表单成功！" })
    } else {
        res.json({ code: 100, msg: "提交购买意向表单失败！" })
    }
})
//获取轮播图的数据的处理
router.get("/api/getCarouselData", async (req, res) => {
    let result = await Goods.getCarouselData()
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取轮播数据成功！", CarouselData: result.CarouselData })
    } else {
        res.json({ code: 100, msg: "获取轮播数据失败！" })
    }
})
//获取好货研究所数据
router.get("/api/getgoodGoods", async (req, res) => {
    let result = await Goods.getgoodGoods()
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取好货研究所数据成功！", goodGoodsData: result.goodGoodsData })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//根据类别获取展示区域的数据
router.post("/api/getExhibitionData", async (req, res) => {
    let result = await Exhibition.getExhibitionData(req.body.category)
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取展示区域数据成功！", exhibitionData: result.exhibitionData })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//根据类别获取装修案例数据
router.post("/api/getDecorationData", async (req, res) => {
    let result = await Decoration.getDecorationData(req.body.category)
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取装修数据成功！", decorationData: result.decorationData })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//根据品牌名称查询品牌相关信息
router.post("/api/getBrandData", async (req, res) => {
    var brand = req.body.brand
    let result = await Brand.getBrandData(brand)
    var BrandData = result.BrandData[0]
    if (result.code == 101) {
        let result2 = await Goods.getGoodsByBrand(brand)
        res.json({ code: 101, msg: "获取装修数据成功！", BrandData: BrandData,goodsData: result2.goods })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//查询产品优选信息
router.get("/api/getOptimizationData", async (req, res) => {
    let result = await Goods.getOptimizationData()
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取产品优选数据成功！", OptimizationData: result.OptimizationData })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//查询前沿资讯的处理
router.get("/api/getInformationData", async (req, res) => {
    let result = await Information.getInformationData()
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取前沿资讯数据成功！", InformationData: result.InformationData })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//通过_id查询前沿资讯
router.post("/api/getInformationDetail", async (req, res) => {
    let result = await Information.getInformationDetail(req.body._id)
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取前沿资讯数据成功！", InformationDetail: result.InformationDetail })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
//搜索功能的实现
router.post("/api/search", async (req, res) => {
    var searchContent = req.body.searchContent
    let result = await Goods.getSearchResult(searchContent)
    if (result.code == 101) {
        res.json({ code: 101, msg: "获取搜索结果成功！", searchContent: result.searchResult })
    } else {
        res.json({ code: 100, msg: "获取数据失败！" })
    }
})
module.exports = router;