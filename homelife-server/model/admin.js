const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var adminSchema = new Schema({
    email: {
        type: String,
        //表单验证
        validate: {
            validator: function(v) {
                return /^\w+@\w+\.\w+(\.\w+)?$/.test(v);
            },
            message: "邮箱格式不正确"
        },
        required: [true,'邮箱不能为空'],
    },
    nickname: {
        type: String,
        required: [true,'昵称不能为空'],
    },
    password: {
        type: String,
        required: [true,'密码不能为空'],
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
var Admin = mongoose.model('Admin', adminSchema);

//登录的方法
async function login(admin){
    let admins = await Admin.find({email:admin.email,password:admin.password});
    if(admins.length >0){
        return {code:101,msg:"登录成功！",admins:admins[0]};
    }
    else{
        return {code:100,msg:"用户名/密码错误"};
    }
}

exports.login = login;
