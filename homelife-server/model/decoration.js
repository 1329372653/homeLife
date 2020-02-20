const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var decorationSchema = new Schema({
    category:{
        type:String,
        required:[true,'案例类别不能为空']
    },
    describe: {
        type: String,
        required: [true,'描述不能为空'],
    },
    imgArray:{
        type:Array,
        required:[true,'图片数组不能为空']
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
var Decoration = mongoose.model('Decoration', decorationSchema);

//添加装修案例的方法
async function addDecoration(decoration){
    var D = new Decoration(decoration);
    let result = await D.save();
    return { code: 101, msg: "添加案例数据成功！" };
}
//根据类别查询数据
async function getDecorationData(category){
    let result = await Decoration.find({category:category});
    return { code: 101, msg: "查询装修案例数据成功！" ,decorationData:result};
}
exports.addDecoration = addDecoration;
exports.getDecorationData = getDecorationData;
