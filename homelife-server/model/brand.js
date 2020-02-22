const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var brandSchema = new Schema({
    brand:{
        type:String,
        required:[true,'品牌名称不能为空']
    },
    describe: {
        type: String,
        required: [true,'描述不能为空'],
    },
    image:{
        type:String,
        required:[true,'图片不能为空']
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
var Brand = mongoose.model('Brand', brandSchema);

//添加装修案例的方法
async function addBrand(brand){
    var B = new Brand(brand);
    let result = await B.save();
    return { code: 101, msg: "添加品牌数据成功！" };
}
//根据品牌名称查询数据
async function getBrandData(brand){
    let result = await Brand.find({brand:brand});
    return { code: 101, msg: "查询品牌数据信息成功" ,BrandData:result};
}
exports.addBrand = addBrand;
exports.getBrandData = getBrandData;
