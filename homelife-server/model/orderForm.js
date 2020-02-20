const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var orderFormSchema = new Schema({
    user_id: {
        type: String,
        required: [true, '用户ID不能为空'],
    },
    brand: {
        type: String,
        required: [true, '商品品牌不能为空'],
    },
    category: {
        type: String,
        required: [true, '商品类别不能为空'],
    }, 
    goodsNumber: {
        type: String,
        required: [true, '商品货号不能为空'],
    }, 
    nickname: {
        type: String,
        required: [true, '用户昵称不能为空'],
    }, 
    realname: {
        type: String,
        required: [true, '用户真实姓名不能为空'],
    },
    mobileNum: {
        type: String,
        required: [true, '用户手机号码不能为空'],
    },
    address: {
        type: String,
        required: [true, '用户家庭地址不能为空'],
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
})
//根据Scheme创建一个模型层类
var OrderForm = mongoose.model('OrderForm', orderFormSchema);

//处理提交购买意向表单处理
async function addOrder(order_data) {
    var order = new OrderForm(order_data);
    let result = await order.save();
    return {code:101,msg:"提交购买意向表单成功！"};
}

exports.addOrder = addOrder;
