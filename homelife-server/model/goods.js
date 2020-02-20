const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/homelife',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("已连接数据库......")
});
var Schema = mongoose.Schema;
var goodsSchema = new Schema({
    brand: {
        type: String,
        required: [true,'品牌不能为空']
    },
    category: {
        type: String,
        required: [true,'类别不能为空'],
    },
    price: {
        type: Number,
        required: [true,'价格不能为空'],
    },
    describe: {
        type: String,
        required: [true,'描述不能为空'],
    },
    goodsNumber :{
        type: Number,
        required: [true,'货号不能为空']
    },
    mainImg :{
        type: String,
        require: [true,'主图不能为空']
    },
    pictures :{
        type: Array,
        required: [true,'图片不能为空']
    },
    stock :{
        type: Number,
        required: [true,'库存不能为空']
    },
    label :{
        type: String,
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
var Goods = mongoose.model('Goods', goodsSchema);

//添加商品的处理
async function addGoods(goods){
    var g = new Goods(goods);
    let result = await g.save();
    return {code:101,msg:"添加商品成功！"};
}
//通过catagory查询相应类别的商品
async function getCategory(category){
    let result = await Goods.find({category:category});
    return {code:101,msg:"查询类别商品成功！",result};
}
//通过商品_id查询商品的详细信息
async function getGoodDetail(_id){
    let result = await Goods.find({_id:_id});
    return {code:101,msg:"查询商品信息成功！",goodDetail:result}
}
//获取轮播数据
async function getCarouselData(){
    let result = await Goods.aggregate( [ { $sample: { size: 5 } } ] )
    return {code:101,msg:"获取轮播数据成功！",CarouselData:result}
}
//获取好货研究所的数据
async function getgoodGoods(){
    let result = await Goods.find({label:'好货'});
    return {code:101,msg:"获取好货研究所数据成功！",goodGoodsData:result}
}
//根据商品品牌查询数据
async function getGoodsByBrand(brand){
    let result = await Goods.find({brand:brand});
    return {code:101,msg:"根据品牌获取商品成功！",goods:result}
}
//根据标签查询产品优选的操作
async function getOptimizationData(){
    let result = await Goods.find({label:'产品优选'});
    return {code:101,msg:"获取产品优选数据成功！",OptimizationData:result}
}
//搜索功能的实现
async function getSearchResult(searchContent){
    var Reg = new RegExp(searchContent);
    let result = await Goods.find({$or:[{brand:Reg},{category:Reg}]});
    return {code:101,msg:"获取搜索结果成功！",searchResult:result}
}
exports.addGoods = addGoods;
exports.getCategory = getCategory;
exports.getGoodDetail = getGoodDetail;
exports.getCarouselData = getCarouselData;
exports.getgoodGoods = getgoodGoods;
exports.getGoodsByBrand = getGoodsByBrand;
exports.getOptimizationData = getOptimizationData;
exports.getSearchResult = getSearchResult;
