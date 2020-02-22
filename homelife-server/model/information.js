const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("已连接前沿资讯数据库......")
});
var Schema = mongoose.Schema;
var InformationSchema = new Schema({
    title:{
        type:String,
        required:[true,'资讯标题不能为空']
    },
    content: {
        type: String,
        required: [true,'资讯内容不能为空'],
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
var Information = mongoose.model('Information', InformationSchema);

//添加前沿资讯的方法
async function addInformation(information){
    var I = new Information(information);
    let result = await I.save();
    return { code: 101, msg: "添加前沿资讯数据成功！" };
}
//查询前沿资讯的方法
async function getInformationData(){
    let result = await Information.find()
    return { code:101,msg: "查询前沿资讯数据成功！",InformationData:result}
}
//通过_id查询前沿资讯的方法
async function getInformationDetail(_id){
    let result = await Information.find({ _id: _id})
    return { code:101,msg: "查询前沿资讯数据成功！",InformationDetail:result}
}
exports.addInformation = addInformation;
exports.getInformationData = getInformationData;
exports.getInformationDetail = getInformationDetail;

