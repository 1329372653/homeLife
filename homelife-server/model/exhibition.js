const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var exhibitionSchema = new Schema({
    category: {
        type: String,
        required: [true, "类别不能为空"]
    },
    imgArray: {
        type: Array,
        required: [true, "图片不能为空"]
    },
    describe: {
        type: String,
        required: [true, "描述不能为空"]
    },
    label: {
        type: String,
        required: [true,"标签不能为空"]
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
var Exhibition = mongoose.model('exhibition', exhibitionSchema);


//添加展示数据的方法
async function addExhibition(exhibition) {
    var E = new Exhibition(exhibition);
    let result = await E.save();
    return { code: 101, msg: "添加展示数据成功！" };
}
//根据类别查询数据
async function getExhibitionData(category){
    let result = await Exhibition.find({category:category});
    return { code: 101, msg: "查询展示区域数据成功！" ,exhibitionData:result};
}

exports.addExhibition = addExhibition;
exports.getExhibitionData = getExhibitionData;
