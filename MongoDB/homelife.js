/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 40200
 Source Host           : localhost:27017
 Source Schema         : homelife

 Target Server Type    : MongoDB
 Target Server Version : 40200
 File Encoding         : 65001

 Date: 21/02/2020 23:41:51
*/


// ----------------------------
// Collection structure for admins
// ----------------------------
db.getCollection("admins").drop();
db.createCollection("admins");

// ----------------------------
// Documents of admins
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("admins").insert([ {
    _id: ObjectId("5e0b3fcfd3879e0d2d243e30"),
    email: "1329372653@qq.com",
    nickname: "admin",
    password: "12345678"
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for brands
// ----------------------------
db.getCollection("brands").drop();
db.createCollection("brands");

// ----------------------------
// Documents of brands
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f703a31f0a3246b0f07b3"),
    brand: "全友",
    describe: "全友家居创建于1986年，经过三十余载的励精图治，已发展成为集研、产、销一体的大型现代化家居企业。全友家居一直秉承绿色的核心理念，以“鱼水文化、绿色文化”为企业核心文化理念。在全友，绿色不仅是全友品牌的基础色调和核心基因，更是全友人的价值信仰和精神高地；绿色不仅是对产品全流程品质的精心打造，更是对员工、事业伙伴、用户、社会的责任和担当。绿色思考，绿色行动；绿色全友，温馨世界！",
    image: "/public/img/1582264378844-1557213805.jpg",
    "created_time": ISODate("2020-02-21T05:52:58.849Z"),
    "last_modified_time": ISODate("2020-02-21T05:52:58.849Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f710d31f0a3246b0f07b4"),
    brand: "芝华仕",
    describe: "CHEERS芝华仕沙发，把舒适、健康带回家。芝华仕沙发是敏华控股（HK01999）旗下家居品牌。 自创立以来，芝华仕沙发始终专注于品牌全球化发展战略。目前，芝华仕沙发在中国拥有超1300家品牌专卖店，在全球拥有超过3000个销售终端，产品畅销美国、英国、加拿大、中国等80多个国家及地区，运营网络横跨亚、美、欧、澳等大洲，被运用于高铁、机场、酒店、游艇、会所、影院等多个领域。",
    image: "/public/img/1582264589216-150779970966381j0ql.jpg",
    "created_time": ISODate("2020-02-21T05:56:29.281Z"),
    "last_modified_time": ISODate("2020-02-21T05:56:29.281Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f722631f0a3246b0f07b5"),
    brand: "林氏木业",
    describe: "林氏木业，创立于2007年。一直以来，林氏木业以精准的大数据运营为核心，通过多风格全品类的家具产品布局、专业贴心的家居服务、轻松便捷的购物体验，践行“家居空间解决方案智造者”的品牌定位，为消费者创造更美好的生活方式。    11年的运营与发展，林氏木业积极探索家具新零售发展之路，一次次实现行业里程碑意义的突破，成为互联网家具标志性品牌之一。与此同时，林氏木业始终坚持以“首个超百亿家具品牌”“家居行业领导品牌”为企业的发展目标。",
    image: "/public/img/1582264870354-2018-5-10-bbfe144c4bd1-4e58-92f6-a638f6887ec4.jpg",
    "created_time": ISODate("2020-02-21T06:01:10.362Z"),
    "last_modified_time": ISODate("2020-02-21T06:01:10.362Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f746531f0a3246b0f07b6"),
    brand: "索菲亚",
    describe: "索菲亚家居股份有限公司是一家主要经营定制衣柜及全屋配套定制家具的研发、生产和销售的公司。公司于2003年开始生产、销售“索菲亚”品牌定制衣柜以来，凭借量身定做的定制衣柜和壁柜门相结合的崭新产品概念，成功把定制衣柜推向市场并获得中国消费者的认同。公司于2011年在深交所成功上市，是定制衣柜行业内首家A股上市公司（股票代码：002572）  索菲亚通过个性化设计及高效运营为顾客提供美好体验，致力于成为值得信赖、全球领先的家居企业，以“用科技和创意轻松装好家，让世界的美融入新的生活”为企业发展使命。自成立以来，积极创立和引进优秀的产品和品牌，给消费者带来更好的家装体验，与消费者一起定制美好生活。目前，公司业务涵盖定制衣柜及配套家具、定制橱柜、定制木门、木地板、配套五金、家具家品、定制大宗业务等。",
    image: "/public/img/1582265445886-屏幕快照 2020-02-21 下午2.08.15.png",
    "created_time": ISODate("2020-02-21T06:10:45.916Z"),
    "last_modified_time": ISODate("2020-02-21T06:10:45.916Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f970731f0a3246b0f07b8"),
    brand: "凯佳蒂",
    describe: "凯佳蒂家具严格执行七天无理由退换服务，提供正规发票，为您呈现不一样的服务；凯佳蒂家具官方新品上线，更多新品等你来购！现如今已经占据大部分使用网上购物，其中的便捷性是为主大多人看重，亚洲是最大的综合性购物平台。已经拥有4亿多买家，10万多品牌商家，多种新型网络营销模式正在不断被开创。",
    image: "/public/img/1582274311994-1566202563.jpg",
    "created_time": ISODate("2020-02-21T08:38:31.998Z"),
    "last_modified_time": ISODate("2020-02-21T08:38:31.998Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f978031f0a3246b0f07b9"),
    brand: "慕梵迪",
    describe: "2014年品牌创始人李中文感受到年轻人的家具不应该只是传统木质，每个人的家装也不应该千篇一律，每个年轻人都应该是个有想法的独一无二的个体，每个人都应该有属于自己独特的家，不应被老旧的审美和观念给束缚，秉着生活不应该被将就的品牌理念，带领一群有梦想的青年一起创办了慕梵迪品牌。",
    image: "/public/img/1582274432779-111+(1).jpg",
    "created_time": ISODate("2020-02-21T08:40:32.784Z"),
    "last_modified_time": ISODate("2020-02-21T08:40:32.784Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f984231f0a3246b0f07ba"),
    brand: "太子",
    describe: "太子家居有限公司始创于1999年，位于四川邛崃。公司以“智造舒适生活”为使命，以“打造具有国际视野的民族品牌”为愿景，多年来，太子家居专注于全屋设计、定制、家具、软装等家居产品的研发、生产和销售。产品涵盖欧式、美式、中式、时尚现代四大风格20余类产品系列，公司拥有约1300亩家居产品智造基地，现有近3000名员工1500多家专卖店遍布全国各地。太子家居着力打造国际化的设计研发中心、质量检测中心、智能制造中心及仓储物流中心等。太子家居将通过“工业+旅游”开创家居行业新模式、新业态、新生态，高效整合行业资源，全面融合三产互动。",
    image: "/public/img/1582274626341-1559373840.jpg",
    "created_time": ISODate("2020-02-21T08:43:46.348Z"),
    "last_modified_time": ISODate("2020-02-21T08:43:46.348Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("brands").insert([ {
    _id: ObjectId("5e4f989131f0a3246b0f07bb"),
    brand: "凯瑞佳",
    describe: "凯瑞佳，之于家，之于生活 我们无时无刻都在寻找 直抵内心的柔软。精益求精是一种使命 太子家居的匠人们回归单纯的世界 专注于眼前，不惧枯燥和漫长 为接近极致，倾注一生。",
    image: "/public/img/1582274705824-1559373866.jpg",
    "created_time": ISODate("2020-02-21T08:45:05.833Z"),
    "last_modified_time": ISODate("2020-02-21T08:45:05.833Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for decorations
// ----------------------------
db.getCollection("decorations").drop();
db.createCollection("decorations");

// ----------------------------
// Documents of decorations
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f999231f0a3246b0f07bc"),
    imgArray: [
        "/public/img/1582274962795-QYJJWebSet20190117160606.jpg",
        "/public/img/1582274962800-QYJJWebSet20190117161408.jpg",
        "/public/img/1582274962806-QYJJWebSet20190117161601.jpg",
        "/public/img/1582274962809-QYJJWebSet20190117161706.jpg",
        "/public/img/1582274962811-QYJJWebSet20190403165418.jpg",
        "/public/img/1582274962812-QYJJWebSet20190403165451.jpg",
        "/public/img/1582274962813-QYJJWebSet20190403170429.jpg",
        "/public/img/1582274962814-QYJJWebSet20190403170452.jpg"
    ],
    category: "卧室",
    describe: "在舒适的卧室来一场甜蜜的约会",
    "created_time": ISODate("2020-02-21T08:49:22.816Z"),
    "last_modified_time": ISODate("2020-02-21T08:49:22.816Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9aaf31f0a3246b0f07bd"),
    imgArray: [
        "/public/img/1582275247337-1nRFkf8MZcobssYTM9Zze8.jpg",
        "/public/img/1582275247339-1GzI_EWNd9ZG54vUZlfSOG.jpg",
        "/public/img/1582275247340-1d09z8UTZ8_EUPMwh5iPah.jpg",
        "/public/img/1582275247341-1-jLuppNVfRFtH6F_2RAji.jpg",
        "/public/img/1582275247347-2hMJQYC_98fWpEF_6H1blU.jpg",
        "/public/img/1582275247352-1Ao4rtZ0pdMUlaB8ODdAOq.jpg",
        "/public/img/1582275247354-2VxUIZX_F1ap___WiUfM1j.jpg",
        "/public/img/1582275247356-19BQGLGfVeracX06wdcbdu.jpg"
    ],
    category: "浴室",
    describe: "浴室",
    "created_time": ISODate("2020-02-21T08:54:07.358Z"),
    "last_modified_time": ISODate("2020-02-21T08:54:07.358Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9b0c31f0a3246b0f07be"),
    imgArray: [
        "/public/img/1582275340862-QYJJWebSet20190117173600.jpg",
        "/public/img/1582275340864-QYJJWebSet20190117173738.jpg",
        "/public/img/1582275340869-QYJJWebSet20190117173832.jpg",
        "/public/img/1582275340875-QYJJWebSet20190117173933.jpg",
        "/public/img/1582275340877-QYJJWebSet20190410135408.jpg",
        "/public/img/1582275340877-QYJJWebSet20190410135436.jpg",
        "/public/img/1582275340879-QYJJWebSet20190410140508.jpg",
        "/public/img/1582275340881-QYJJWebSet20190410140541.jpg"
    ],
    category: "客厅",
    describe: "客厅",
    "created_time": ISODate("2020-02-21T08:55:40.883Z"),
    "last_modified_time": ISODate("2020-02-21T08:55:40.883Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9b6231f0a3246b0f07bf"),
    imgArray: [
        "/public/img/1582275426092-QYJJWebSet20180604164020.jpeg",
        "/public/img/1582275426093-QYJJWebSet20180604164036.jpeg",
        "/public/img/1582275426096-QYJJWebSet20190118173403.jpg",
        "/public/img/1582275426102-QYJJWebSet20190118173148.jpg",
        "/public/img/1582275426107-QYJJWebSet20190118173449.jpg",
        "/public/img/1582275426111-QYJJWebSet20190118173542.jpg",
        "/public/img/1582275426114-QYJJWebSet20190118173638.jpg",
        "/public/img/1582275426118-QYJJWebSet20190402173022.jpg"
    ],
    category: "厨房",
    describe: "厨房",
    "created_time": ISODate("2020-02-21T08:57:06.12Z"),
    "last_modified_time": ISODate("2020-02-21T08:57:06.12Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9bb531f0a3246b0f07c0"),
    imgArray: [
        "/public/img/1582275509169-QYJJWebSet20180604114121.jpeg",
        "/public/img/1582275509177-QYJJWebSet20180604114144.jpeg",
        "/public/img/1582275509182-QYJJWebSet20180604114220.jpeg",
        "/public/img/1582275509184-QYJJWebSet20180604114301.jpeg",
        "/public/img/1582275509185-QYJJWebSet20180604114350.jpeg",
        "/public/img/1582275509185-QYJJWebSet20180604114328.jpeg",
        "/public/img/1582275509187-QYJJWebSet20190117174447.jpg",
        "/public/img/1582275509194-QYJJWebSet20190117174551.jpg"
    ],
    category: "餐厅",
    describe: "餐厅",
    "created_time": ISODate("2020-02-21T08:58:29.198Z"),
    "last_modified_time": ISODate("2020-02-21T08:58:29.198Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9c0131f0a3246b0f07c1"),
    imgArray: [
        "/public/img/1582275585423-QYJJWebSet20180604103639.jpeg",
        "/public/img/1582275585424-QYJJWebSet20180604103750.jpeg",
        "/public/img/1582275585425-QYJJWebSet20180604103841.jpeg",
        "/public/img/1582275585426-QYJJWebSet20180604104052.jpeg",
        "/public/img/1582275585429-QYJJWebSet20180604104123.jpeg",
        "/public/img/1582275585431-QYJJWebSet20180604104150.jpeg",
        "/public/img/1582275585432-QYJJWebSet20180604104211.jpeg",
        "/public/img/1582275585433-QYJJWebSet20180604104233.jpeg"
    ],
    category: "儿童房",
    describe: "儿童房",
    "created_time": ISODate("2020-02-21T08:59:45.436Z"),
    "last_modified_time": ISODate("2020-02-21T08:59:45.436Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9c4831f0a3246b0f07c2"),
    imgArray: [
        "/public/img/1582275656871-QYJJWebSet20180604100008.jpeg",
        "/public/img/1582275656873-QYJJWebSet20180604100032.jpeg",
        "/public/img/1582275656876-QYJJWebSet20180604100113.jpeg",
        "/public/img/1582275656878-QYJJWebSet20180604100316.jpeg",
        "/public/img/1582275656880-QYJJWebSet20190118113102.jpg",
        "/public/img/1582275656889-QYJJWebSet20190118113225.jpg",
        "/public/img/1582275656891-QYJJWebSet20190118113356.jpg",
        "/public/img/1582275656893-QYJJWebSet20190118113817.jpg"
    ],
    category: "书房",
    describe: "书房",
    "created_time": ISODate("2020-02-21T09:00:56.895Z"),
    "last_modified_time": ISODate("2020-02-21T09:00:56.895Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("decorations").insert([ {
    _id: ObjectId("5e4f9d5931f0a3246b0f07c3"),
    imgArray: [
        "/public/img/1582275929357-25350047.jpg",
        "/public/img/1582275929362-25350022.jpg",
        "/public/img/1582275929363-25350024.jpg",
        "/public/img/1582275929364-25350021.jpg",
        "/public/img/1582275929365-25350004.jpg",
        "/public/img/1582275929369-25350003.jpg",
        "/public/img/1582275929370-25349703.jpg",
        "/public/img/1582275929371-0d338744ebf81a4c7815c3f6de2a6059252da6ed.jpg"
    ],
    category: "阳台",
    describe: "阳台",
    "created_time": ISODate("2020-02-21T09:05:29.374Z"),
    "last_modified_time": ISODate("2020-02-21T09:05:29.374Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for exhibitions
// ----------------------------
db.getCollection("exhibitions").drop();
db.createCollection("exhibitions");

// ----------------------------
// Documents of exhibitions
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4e9f4f31f0a3246b0f07ab"),
    imgArray: [
        "/public/img/1582210894979-屏幕快照 2020-02-20 下午11.00.28.png",
        "/public/img/1582210894991-屏幕快照 2020-02-20 下午9.44.53.png",
        "/public/img/1582210894996-屏幕快照 2020-02-20 下午9.36.59.png",
        "/public/img/1582210895021-屏幕快照 2020-02-20 下午9.35.36.png"
    ],
    category: "区域展示",
    describe: "卧室",
    label: "卧室",
    "created_time": ISODate("2020-02-20T15:01:35.029Z"),
    "last_modified_time": ISODate("2020-02-20T15:01:35.029Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4ea16231f0a3246b0f07ac"),
    imgArray: [
        "/public/img/1582211426946-屏幕快照 2020-02-20 下午11.10.07.png",
        "/public/img/1582211426954-屏幕快照 2020-02-20 下午11.08.41.png",
        "/public/img/1582211426961-屏幕快照 2020-02-20 下午11.07.49.png",
        "/public/img/1582211426977-屏幕快照 2020-02-20 下午11.05.52.png"
    ],
    category: "区域展示",
    describe: "客厅",
    label: "客厅",
    "created_time": ISODate("2020-02-20T15:10:26.991Z"),
    "last_modified_time": ISODate("2020-02-20T15:10:26.991Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4f65a531f0a3246b0f07ad"),
    imgArray: [
        "/public/img/1582261669888-QYJJWebSet20180604100032.jpeg",
        "/public/img/1582261669893-QYJJWebSet20180604100227.jpeg",
        "/public/img/1582261669894-QYJJWebSet20190118113225.jpg",
        "/public/img/1582261669898-QYJJWebSet20190118113817.jpg"
    ],
    category: "区域展示",
    describe: "书房",
    label: "书房",
    "created_time": ISODate("2020-02-21T05:07:49.909Z"),
    "last_modified_time": ISODate("2020-02-21T05:07:49.909Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4f677a31f0a3246b0f07ae"),
    imgArray: [
        "/public/img/1582262138500-QYJJWebSet20180604164036.jpeg",
        "/public/img/1582262138501-QYJJWebSet20190118173148.jpg",
        "/public/img/1582262138510-QYJJWebSet20190118173542.jpg",
        "/public/img/1582262138515-QYJJWebSet20190402173022.jpg"
    ],
    category: "套件展示",
    describe: "橱柜",
    label: "橱柜",
    "created_time": ISODate("2020-02-21T05:15:38.52Z"),
    "last_modified_time": ISODate("2020-02-21T05:15:38.52Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4f67f531f0a3246b0f07af"),
    imgArray: [
        "/public/img/1582262261355-QYJJWebSet20190117173255.jpg",
        "/public/img/1582262261359-QYJJWebSet20190117173738.jpg",
        "/public/img/1582262261362-QYJJWebSet20190117173832.jpg",
        "/public/img/1582262261368-QYJJWebSet20190117173933.jpg"
    ],
    category: "套件展示",
    describe: "沙发",
    label: "沙发",
    "created_time": ISODate("2020-02-21T05:17:41.374Z"),
    "last_modified_time": ISODate("2020-02-21T05:17:41.374Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4f69ce31f0a3246b0f07b0"),
    imgArray: [
        "/public/img/1582262733974-fb937a77d231a939.jpg",
        "/public/img/1582262733980-屏幕快照 2020-02-21 下午1.24.23.png",
        "/public/img/1582262733994-屏幕快照 2020-02-21 下午1.23.20.png",
        "/public/img/1582262734006-屏幕快照 2020-02-21 下午1.22.26.png"
    ],
    category: "室内装饰展示",
    describe: "摆件",
    label: "摆件",
    "created_time": ISODate("2020-02-21T05:25:34.023Z"),
    "last_modified_time": ISODate("2020-02-21T05:25:34.023Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4f6aa831f0a3246b0f07b1"),
    imgArray: [
        "/public/img/1582262952137-QYJJWebSet20190118173449.jpg",
        "/public/img/1582262952146-QYJJWebSet20180605025400.jpeg",
        "/public/img/1582262952149-QYJJWebSet20180605025559.jpeg",
        "/public/img/1582262952153-QYJJWebSet20180605025546.jpeg"
    ],
    category: "精选案例展示",
    describe: "案例一",
    label: "案例一",
    "created_time": ISODate("2020-02-21T05:29:12.156Z"),
    "last_modified_time": ISODate("2020-02-21T05:29:12.156Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("exhibitions").insert([ {
    _id: ObjectId("5e4f6dbb31f0a3246b0f07b2"),
    imgArray: [
        "/public/img/1582263739740-QYJJWebSet20180821140952.png",
        "/public/img/1582263739748-QYJJWebSet20180604164036.jpeg",
        "/public/img/1582263739749-QYJJWebSet20180605025451.jpeg",
        "/public/img/1582263739752-QYJJWebSet20180605025513.jpeg"
    ],
    category: "精选案例展示",
    describe: "案例二",
    label: "案例二",
    "created_time": ISODate("2020-02-21T05:42:19.759Z"),
    "last_modified_time": ISODate("2020-02-21T05:42:19.759Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for goods
// ----------------------------
db.getCollection("goods").drop();
db.createCollection("goods");

// ----------------------------
// Documents of goods
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e6f3731f0a3246b0f0793"),
    pictures: [
        "/public/img/1582198583576-屏幕快照 2020-02-20 下午7.33.12.png",
        "/public/img/1582198583587-屏幕快照 2020-02-20 下午7.32.48.png",
        "/public/img/1582198583602-屏幕快照 2020-02-20 下午7.32.10.png"
    ],
    brand: "全友",
    category: "床",
    price: NumberInt("1867"),
    describe: "北欧实木床1.8米双人床1.5米单人床1.2米1.35米床 现代简约布艺床可拆洗软包靠背松木出租房 浅灰色软靠 原木裸床 1500*2000",
    goodsNumber: NumberInt("1"),
    stock: NumberInt("100"),
    label: "好货",
    mainImg: "/public/img/1582198583576-屏幕快照 2020-02-20 下午7.33.12.png",
    "created_time": ISODate("2020-02-20T11:36:23.62Z"),
    "last_modified_time": ISODate("2020-02-20T11:36:23.62Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e6ff431f0a3246b0f0794"),
    pictures: [
        "/public/img/1582198772019-屏幕快照 2020-02-20 下午7.38.09.png",
        "/public/img/1582198772031-屏幕快照 2020-02-20 下午7.37.56.png"
    ],
    brand: "芝华仕",
    category: "床",
    price: NumberInt("1356"),
    describe: "北欧实木床1.8米松木床单人床1.2米木床双人床卧室大床2米全实木 原木无漆床送3厘米椰梦维床垫 1.5米*2米",
    goodsNumber: NumberInt("2"),
    stock: NumberInt("45"),
    label: "好货",
    mainImg: "/public/img/1582198772019-屏幕快照 2020-02-20 下午7.38.09.png",
    "created_time": ISODate("2020-02-20T11:39:32.041Z"),
    "last_modified_time": ISODate("2020-02-20T11:39:32.041Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e70e231f0a3246b0f0795"),
    pictures: [
        "/public/img/1582199010310-屏幕快照 2020-02-20 下午7.42.20.png",
        "/public/img/1582199010315-屏幕快照 2020-02-20 下午7.42.07.png",
        "/public/img/1582199010323-屏幕快照 2020-02-20 下午7.41.57.png",
        "/public/img/1582199010331-屏幕快照 2020-02-20 下午7.41.41.png",
        "/public/img/1582199010336-屏幕快照 2020-02-20 下午7.41.25.png"
    ],
    brand: "林氏木业",
    category: "床",
    price: NumberInt("2690"),
    describe: "北欧实木床1.8米双人床1.5米单人床1.2米1.35米床 现代简约布艺床可拆洗软包靠背松木出租房 浅灰色软靠 原木裸床 1500*2000",
    goodsNumber: NumberInt("3"),
    stock: NumberInt("34"),
    label: "好货",
    mainImg: "/public/img/1582199010310-屏幕快照 2020-02-20 下午7.42.20.png",
    "created_time": ISODate("2020-02-20T11:43:30.341Z"),
    "last_modified_time": ISODate("2020-02-20T11:43:30.341Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e71d731f0a3246b0f0796"),
    pictures: [
        "/public/img/1582199255759-屏幕快照 2020-02-20 下午7.45.50.png",
        "/public/img/1582199255764-屏幕快照 2020-02-20 下午7.45.36.png",
        "/public/img/1582199255773-屏幕快照 2020-02-20 下午7.45.14.png"
    ],
    brand: "索菲亚",
    category: "床",
    price: NumberInt("1999"),
    describe: "实木床双人床单人床1.2米1.5米1.8米公主床美式床现代简约欧式床大床 原木无抽送3E椰梦维床垫 1.5*米*2米",
    goodsNumber: NumberInt("4"),
    stock: NumberInt("98"),
    label: "好货",
    mainImg: "/public/img/1582199255759-屏幕快照 2020-02-20 下午7.45.50.png",
    "created_time": ISODate("2020-02-20T11:47:35.778Z"),
    "last_modified_time": ISODate("2020-02-20T11:47:35.778Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e72e031f0a3246b0f0797"),
    pictures: [
        "/public/img/1582199520960-屏幕快照 2020-02-20 下午7.51.01.png",
        "/public/img/1582199520972-屏幕快照 2020-02-20 下午7.49.50.png",
        "/public/img/1582199520978-屏幕快照 2020-02-20 下午7.49.11.png"
    ],
    brand: "凯佳蒂",
    category: "床",
    price: NumberInt("2346"),
    describe: "北欧简约双人床高箱储物床布艺软靠床婚床 雅致 【木纹灰色】高箱床+23cm床垫 1.8*2.0米",
    goodsNumber: NumberInt("5"),
    stock: NumberInt("100"),
    label: "好货",
    mainImg: "/public/img/1582199520960-屏幕快照 2020-02-20 下午7.51.01.png",
    "created_time": ISODate("2020-02-20T11:52:00.985Z"),
    "last_modified_time": ISODate("2020-02-20T11:52:00.985Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e73bf31f0a3246b0f0798"),
    pictures: [
        "/public/img/1582199743938-屏幕快照 2020-02-20 下午7.54.46.png",
        "/public/img/1582199743944-屏幕快照 2020-02-20 下午7.54.37.png",
        "/public/img/1582199743954-屏幕快照 2020-02-20 下午7.54.25.png",
        "/public/img/1582199743960-屏幕快照 2020-02-20 下午7.54.09.png",
        "/public/img/1582199743968-屏幕快照 2020-02-20 下午7.53.42.png",
        "/public/img/1582199743972-屏幕快照 2020-02-20 下午7.49.50.png"
    ],
    brand: "慕梵迪",
    category: "床",
    price: NumberInt("2589"),
    describe: "双人床实木床简约布艺可拆洗北欧1.8米 小户型软包布床 家具套装组合 标准单床（备注颜色） 1800*2000",
    goodsNumber: NumberInt("6"),
    stock: NumberInt("78"),
    label: "好货",
    mainImg: "/public/img/1582199743938-屏幕快照 2020-02-20 下午7.54.46.png",
    "created_time": ISODate("2020-02-20T11:55:43.987Z"),
    "last_modified_time": ISODate("2020-02-20T11:55:43.987Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e747931f0a3246b0f0799"),
    pictures: [
        "/public/img/1582199929009-屏幕快照 2020-02-20 下午7.57.54.png",
        "/public/img/1582199929023-屏幕快照 2020-02-20 下午7.57.42.png",
        "/public/img/1582199929028-屏幕快照 2020-02-20 下午7.57.29.png",
        "/public/img/1582199929037-屏幕快照 2020-02-20 下午7.57.13.png",
        "/public/img/1582199929042-屏幕快照 2020-02-20 下午7.49.50.png"
    ],
    brand: "凯瑞佳",
    category: "床",
    price: NumberInt("1679"),
    describe: "美式实木床1.8米双人床主卧室床 1.5m白色现代简约韩式公主床单人床 单床（颜色拍下备注） 框架结构1800mm*2000mm",
    goodsNumber: NumberInt("7"),
    stock: NumberInt("100"),
    label: "好货",
    mainImg: "/public/img/1582199929009-屏幕快照 2020-02-20 下午7.57.54.png",
    "created_time": ISODate("2020-02-20T11:58:49.054Z"),
    "last_modified_time": ISODate("2020-02-20T11:58:49.054Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e751431f0a3246b0f079a"),
    pictures: [
        "/public/img/1582200084697-屏幕快照 2020-02-20 下午8.00.42.png",
        "/public/img/1582200084706-屏幕快照 2020-02-20 下午8.00.31.png",
        "/public/img/1582200084712-屏幕快照 2020-02-20 下午8.00.08.png",
        "/public/img/1582200084722-屏幕快照 2020-02-20 下午7.49.50.png"
    ],
    brand: "太子",
    category: "床",
    price: NumberInt("1769"),
    describe: "北欧简约主卧1.8米双人床现代简约公主婚床卧室家具 高箱储物床 1.8*2米",
    goodsNumber: NumberInt("8"),
    stock: NumberInt("46"),
    label: "好货",
    mainImg: "/public/img/1582200084697-屏幕快照 2020-02-20 下午8.00.42.png",
    "created_time": ISODate("2020-02-20T12:01:24.737Z"),
    "last_modified_time": ISODate("2020-02-20T12:01:24.737Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e763f31f0a3246b0f079c"),
    pictures: [
        "/public/img/1582200383667-屏幕快照 2020-02-20 下午8.03.43.png",
        "/public/img/1582200383684-屏幕快照 2020-02-20 下午8.03.30.png",
        "/public/img/1582200383700-屏幕快照 2020-02-20 下午8.03.19.png",
        "/public/img/1582200383728-屏幕快照 2020-02-20 下午8.02.58.png"
    ],
    brand: "全友",
    category: "衣柜",
    price: NumberInt("1645"),
    describe: "北欧简约现代推拉门组合衣柜 移门大衣橱卧室家具 雅致 木纹色单衣柜 2.0米",
    goodsNumber: NumberInt("10"),
    stock: NumberInt("100"),
    label: "好货",
    mainImg: "/public/img/1582200383667-屏幕快照 2020-02-20 下午8.03.43.png",
    "created_time": ISODate("2020-02-20T12:06:23.788Z"),
    "last_modified_time": ISODate("2020-02-20T12:06:23.788Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e770131f0a3246b0f079d"),
    pictures: [
        "/public/img/1582200577492-4560549572be6fed.jpg",
        "/public/img/1582200577496-fcd95aec5dfe6853.jpg"
    ],
    brand: "林氏木业",
    category: "衣柜",
    price: NumberInt("1089"),
    describe: "北欧简约平开门组合大衣柜衣橱 迪洛系列 4门 单衣柜",
    goodsNumber: NumberInt("11"),
    stock: NumberInt("20"),
    label: "好货",
    mainImg: "/public/img/1582200577492-4560549572be6fed.jpg",
    "created_time": ISODate("2020-02-20T12:09:37.502Z"),
    "last_modified_time": ISODate("2020-02-20T12:09:37.502Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e781e31f0a3246b0f079e"),
    pictures: [
        "/public/img/1582200862670-屏幕快照 2020-02-20 下午8.13.26.png",
        "/public/img/1582200862682-屏幕快照 2020-02-20 下午8.13.02.png",
        "/public/img/1582200862697-屏幕快照 2020-02-20 下午8.12.22.png"
    ],
    brand: "全友",
    category: "沙发",
    price: NumberInt("2089"),
    describe: "简约现代布艺沙发组合套装大小户型可拆洗乳胶功能布沙发客厅整装家具 三人位【赠送两个布凳】",
    goodsNumber: NumberInt("12"),
    stock: NumberInt("27"),
    label: "好货",
    mainImg: "/public/img/1582200862670-屏幕快照 2020-02-20 下午8.13.26.png",
    "created_time": ISODate("2020-02-20T12:14:22.709Z"),
    "last_modified_time": ISODate("2020-02-20T12:14:22.709Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e78b031f0a3246b0f079f"),
    pictures: [
        "/public/img/1582201008368-屏幕快照 2020-02-20 下午8.16.04.png",
        "/public/img/1582201008374-屏幕快照 2020-02-20 下午8.15.54.png",
        "/public/img/1582201008385-屏幕快照 2020-02-20 下午8.15.41.png"
    ],
    brand: "林氏木业",
    category: "沙发",
    price: NumberInt("3899"),
    describe: "北欧真皮沙发头层牛皮三人位小户型简约现代客厅家具组合 A50#三人位（颜色备注）",
    goodsNumber: NumberInt("13"),
    stock: NumberInt("89"),
    label: "好货",
    mainImg: "/public/img/1582201008368-屏幕快照 2020-02-20 下午8.16.04.png",
    "created_time": ISODate("2020-02-20T12:16:48.396Z"),
    "last_modified_time": ISODate("2020-02-20T12:16:48.396Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e793f31f0a3246b0f07a0"),
    pictures: [
        "/public/img/1582201151391-屏幕快照 2020-02-20 下午8.18.27.png",
        "/public/img/1582201151402-屏幕快照 2020-02-20 下午8.18.16.png",
        "/public/img/1582201151429-屏幕快照 2020-02-20 下午8.17.58.png"
    ],
    brand: "全友",
    category: "餐桌",
    price: NumberInt("1099"),
    describe: "北欧餐桌椅组合现代简约大小户型白蜡木实木餐桌长方形饭桌 雅致 【1.4米】单餐桌",
    goodsNumber: NumberInt("13"),
    stock: NumberInt("76"),
    label: "好货",
    mainImg: "/public/img/1582201151391-屏幕快照 2020-02-20 下午8.18.27.png",
    "created_time": ISODate("2020-02-20T12:19:11.438Z"),
    "last_modified_time": ISODate("2020-02-20T12:19:11.438Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e7a2a31f0a3246b0f07a1"),
    pictures: [
        "/public/img/1582201385988-屏幕快照 2020-02-20 下午8.21.56.png",
        "/public/img/1582201386000-屏幕快照 2020-02-20 下午8.20.58.png",
        "/public/img/1582201386014-屏幕快照 2020-02-20 下午8.20.35.png"
    ],
    brand: "索菲亚",
    category: "餐桌",
    price: NumberInt("1399"),
    describe: "实木餐桌椅组合 现代简约大理石餐桌椅套装 高级灰 单独餐桌(1.3米)",
    goodsNumber: NumberInt("14"),
    stock: NumberInt("46"),
    label: "好货",
    mainImg: "/public/img/1582201385988-屏幕快照 2020-02-20 下午8.21.56.png",
    "created_time": ISODate("2020-02-20T12:23:06.027Z"),
    "last_modified_time": ISODate("2020-02-20T12:23:06.027Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e7b0231f0a3246b0f07a2"),
    pictures: [
        "/public/img/1582201602832-屏幕快照 2020-02-20 下午8.25.25.png"
    ],
    brand: "太子",
    category: "书桌",
    price: NumberInt("289"),
    describe: "电脑桌台式家用简约书桌办公桌带书架电竞桌 120CM",
    goodsNumber: NumberInt("15"),
    stock: NumberInt("24"),
    label: "普通产品",
    mainImg: "/public/img/1582201602832-屏幕快照 2020-02-20 下午8.25.25.png",
    "created_time": ISODate("2020-02-20T12:26:42.85Z"),
    "last_modified_time": ISODate("2020-02-20T12:26:42.85Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e7bdc31f0a3246b0f07a3"),
    pictures: [
        "/public/img/1582201820472-屏幕快照 2020-02-20 下午8.29.10.png"
    ],
    brand: "凯瑞佳",
    category: "椅子",
    price: NumberInt("129"),
    describe: "休闲椅电脑椅时尚北欧伊姆斯椅子现代简约实木休闲餐椅洽谈椅餐厅塑料椅子 灰色",
    goodsNumber: NumberInt("16"),
    stock: NumberInt("34"),
    label: "产品优选",
    mainImg: "/public/img/1582201820472-屏幕快照 2020-02-20 下午8.29.10.png",
    "created_time": ISODate("2020-02-20T12:30:20.486Z"),
    "last_modified_time": ISODate("2020-02-20T12:30:20.486Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e7ca331f0a3246b0f07a4"),
    pictures: [
        "/public/img/1582202018455-屏幕快照 2020-02-20 下午8.32.50.png",
        "/public/img/1582202018723-屏幕快照 2020-02-20 下午8.32.30.png",
        "/public/img/1582202018733-屏幕快照 2020-02-20 下午8.32.17.png",
        "/public/img/1582202018949-屏幕快照 2020-02-20 下午8.31.56.png"
    ],
    brand: "TCL",
    category: "灯具",
    price: NumberInt("124"),
    describe: "TCL照明 灯led吸顶灯新中式客厅灯餐厅灯卧室灯圆形现代简约薄灯具 儿童房灯饰 鸟巢24W三色调光直径38cm",
    goodsNumber: NumberInt("17"),
    stock: NumberInt("455"),
    label: "产品优选",
    mainImg: "/public/img/1582202018455-屏幕快照 2020-02-20 下午8.32.50.png",
    "created_time": ISODate("2020-02-20T12:33:39.133Z"),
    "last_modified_time": ISODate("2020-02-20T12:33:39.133Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e7d9631f0a3246b0f07a5"),
    pictures: [
        "/public/img/1582202262049-屏幕快照 2020-02-20 下午8.36.14.png"
    ],
    brand: "宜家",
    category: "纺织品",
    price: NumberInt("79"),
    describe: "简易窗帘魔术贴粘贴 免打孔安装全遮光窗帘成品简约现代出租房卧室飘窗小窗帘纯色短帘 蓝色免打孔安装 宽1.5米*高2米/1片",
    goodsNumber: NumberInt("18"),
    stock: NumberInt("899"),
    label: "产品优选",
    mainImg: "/public/img/1582202262049-屏幕快照 2020-02-20 下午8.36.14.png",
    "created_time": ISODate("2020-02-20T12:37:42.102Z"),
    "last_modified_time": ISODate("2020-02-20T12:37:42.102Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e895131f0a3246b0f07a6"),
    pictures: [
        "/public/img/1582205263735-屏幕快照 2020-02-20 下午9.26.47.png",
        "/public/img/1582205264001-屏幕快照 2020-02-20 下午9.26.36.png",
        "/public/img/1582205264316-屏幕快照 2020-02-20 下午9.26.28.png",
        "/public/img/1582205264664-屏幕快照 2020-02-20 下午9.26.09.png",
        "/public/img/1582205264735-屏幕快照 2020-02-20 下午9.25.50.png"
    ],
    brand: "宜家",
    category: "镜子",
    price: NumberInt("99"),
    describe: "浴室镜子免打孔无框洗手间卫浴镜穿衣镜卫生间镜壁挂镜子贴墙化妆镜粘贴 直角30*42（粘胶+免钉胶） 标准",
    goodsNumber: NumberInt("19"),
    stock: NumberInt("98"),
    label: "产品优选",
    mainImg: "/public/img/1582205263735-屏幕快照 2020-02-20 下午9.26.47.png",
    "created_time": ISODate("2020-02-20T13:27:45.118Z"),
    "last_modified_time": ISODate("2020-02-20T13:27:45.118Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("goods").insert([ {
    _id: ObjectId("5e4e8a2b31f0a3246b0f07a7"),
    pictures: [
        "/public/img/1582205482805-屏幕快照 2020-02-20 下午9.30.31.png",
        "/public/img/1582205482981-屏幕快照 2020-02-20 下午9.30.17.png",
        "/public/img/1582205483167-屏幕快照 2020-02-20 下午9.29.44.png",
        "/public/img/1582205483403-屏幕快照 2020-02-20 下午9.29.26.png"
    ],
    brand: "宜家",
    category: "床垫",
    price: NumberInt("1298"),
    describe: "床垫 乳胶床垫 席梦思弹簧床垫 乳胶+直筒簧 软硬两用 J10 1.8米*2米*0.22米",
    goodsNumber: NumberInt("20"),
    stock: NumberInt("23"),
    label: "产品优选",
    mainImg: "/public/img/1582205482805-屏幕快照 2020-02-20 下午9.30.31.png",
    "created_time": ISODate("2020-02-20T13:31:23.735Z"),
    "last_modified_time": ISODate("2020-02-20T13:31:23.735Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for information
// ----------------------------
db.getCollection("information").drop();
db.createCollection("information");

// ----------------------------
// Documents of information
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("information").insert([ {
    _id: ObjectId("5e4ff6cef16078373f6f7555"),
    title: "洞见2020｜洞见疫情下的家居行业发展趋势",
    content: "<p>2020年初，新型冠状病毒的突然爆发，对中国医疗卫生事业带来巨大挑战的同时，经济环境同样不容乐观。仅春节假期10天以来，消费几乎停摆、零售和餐饮业收⼊锐减，旅游相关⾏业陷⼊冰冻状态。专家估算，仅零售、餐饮和旅游市场的直接损失就超过1万亿元。</p><p>  在如此严峻的态势面前，中国家居行业应该如何正确应对？新浪家居邀请12位行业大咖，一起洞见疫情下的家居行业发展趋势。</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/037952150792518236.jpg\" style=\"max-width: 100%;\"><br></p><p><strong>【独家连线<a href=\"http://jiancai.jiaju.sina.com.cn/maichang-20.html?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">居然之家</a>湖北公司|强防疫做线上 疫后或迎爆发】</strong><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/064794012021961.jpg\" style=\"max-width: 100%;\"><strong><br></strong></p><p>卢治中认为，此次疫情的发生对于家居行业的影响未必是消极的，他表示，与快销品、百货相比，消费者的<a href=\"http://jiaju.sina.com.cn/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">装修</a>需求是不会消失的，疫情过后或迎来一个爆发期。他说到，当下居然之家的精力集中在支持政府打赢疫情这场硬仗，疫情过后会与商户站在一起，共克时艰。对于商户来讲，消费者的需求并没有减少，各个品牌在这段时间也有了充足的时间进行战略与布局的思考，疫情过后或将迎来新机会。<br></p><p><strong>【尚层装饰林云松：疫情后或加速两级分化 头部企业更存机会】</strong><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/058549057627622414.jpg\" style=\"max-width: 100%;\">&nbsp; &nbsp;&nbsp;</p><p>尚层装饰林云松表示：此次疫情的发生，会加速整个行业的两级分化与优胜劣汰。家居<a href=\"http://jiaju.sina.com.cn/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">家装</a>行业历来都是大行业小企业的状态，鱼龙混杂，疫情带来的压力加快了对落后企业的淘汰速度，对于有核心竞争力的企业、有互联网基因的企业来讲，2020年存在更多机会。&nbsp;&nbsp;&nbsp;&nbsp;<strong><br></strong></p>",
    "created_time": ISODate("2020-02-21T15:27:10.625Z"),
    "last_modified_time": ISODate("2020-02-21T15:27:10.625Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("information").insert([ {
    _id: ObjectId("5e4ff73ff16078373f6f7556"),
    title: "美克家居面对疫情“下半场” 勇为抗疫从容复工",
    content: "<p>2020年初，新型冠状病毒在我国湖北省首先爆发开始蔓延全国，<a href=\"http://zx.jiaju.sina.com.cn/bj/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">北京</a>时间1月31日凌晨WHO宣布，将新型冠状病毒肺炎疫情列为国际关注的突发公共卫生事件（PHEIC），一场影响着整个中国的“黑天鹅”事件就此产生。</p><p>  疫情“上半场”举国上下，全民一心，众志成城，勇为抗疫。那些全力奋战的医护人员、努力筹备防护品的志愿者、挨家挨户排查的社区工作者、默默奉献的“逆行者”等各方力量已经为我们打赢了疫情防控阻击第一战。目前疫情进入“下半场”的攻坚战，上半场是责任，下半场是发展。经济不能停摆，恢复经营生产刻不容缓。对于企业来说，此时要一手抓防控疫情，一手抓复工复产，认真贯彻落实习近平总书记重要指示精神，坚决打赢疫情防控攻坚战。</p><p>  <strong>一、&nbsp;勇为抗疫，不忘初心</strong></p><p>  作为2020年的第一只“黑天鹅”，此次疫情已成为广大企业经营中的不可抗力事件，给企业带来了诸多的问题和挑战。在此特殊时刻，企业应积极行动，践行社会责任；作为社会的一个关键环节，企业妥善安排好自己的员工更是基本的社会责任。面对此次疫情，美克<a href=\"http://jiaju.sina.com.cn/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">家居</a>提出“抗击疫情十项应急举措”：</p><p>  1、&nbsp;建立紧急事件决策机构：“疫情管理委员会”及“疫情应对小组”；</p><p>  2、&nbsp;委员会和应对小组根据自己的业务特点评估风险，明确紧急事件的响应机制、预案和人员分工；</p><p>  3、&nbsp;建立正面、积极的对外信息沟通机制；</p><p>  4、&nbsp;维护员工身体及心理健康，根据不同业务和工作岗位性质采取相适应的复工方案；</p><p>  5、&nbsp;供应链风险应对举措；</p><p>  6、&nbsp;对于短期内无法恢复生产带来的客户关系维护风险制定解决方案；</p><p>  7、&nbsp;践行社会责任，做好利益相关方的管理；</p><p>  8、&nbsp;想方设法增长业绩；</p><p>  9、&nbsp;化危为机，寻找机会；</p><p>  10、&nbsp;积累正能量的“心理资本”。</p><p>  面对疫情，企业应及时评估市场变化及自身长期战略规划，不因短期挑战影</p><p>  响长期战略目标达成。抗击疫情，信心是第一剂良药。疫情对企业是一场“倒逼”，对于如美克家居这样的“坚定信心型企业”，能够坚守到疫情结束，同时又拥有业务机会和客户，利用这一时期在用心服务客户的同时，深入开展前瞻性研究，探索企业战略调整、商业模式和转型升级，这是企业难得一遇的战略机遇期。面对运营的逐步恢复，美克家居各部门在董事会和高管层的统一指挥下，有节奏的按照“一城一策”的部署各司其职，实现从容复工。</p><p>  <strong>二、以人为本，宕机重启</strong></p><p>  坚持使命、愿景、价值观导向，这是能够指导所有人去做正确事情的行为准则。如果企业在这一点上是缺失的，很有可能在遇到黑天鹅事件时手足无措。在危机来临的时候，要开始强调人的作用，重视人的主观努力，强调企业自身的能力。任何企业应当首先将员工的安全及健康放在首位。人才是推动增长与变革的第一要素，保护好现有人才是企业在这一阶段的重中之重。</p><p>  此次疫情对很多企业来说，是压倒骆驼的最后一根稻草。而对于经营基础扎实，品牌和市场沉淀深厚的企业来说，与其说是危机，不如说是一次“宕机重启”：企业可以借助“宕机”，减轻包袱，优化组织，重塑团队。同时，为了更好的“重启”，企业要做好“组织准备、心态重整、防疫准备、经营准备、办公准备以及资金准备”。</p><p>  打好国际供应链保卫战。此次疫情中，中国被列为PHEIC，越南与之相比，其防控级别是完全不同的。美克家居在越南深耕多年，作为美克<a href=\"http://zx.jiaju.sina.com.cn/tj/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">天津</a>制造基地以外的海外制造基地，是公司全球供应链的重要组成部分。在目前中国举国抗疫的情况下，美克家居在越南股权投资的两家公司通过这几年“心理资本”的积累，在此关键时刻没有“掉链子”，未受国内疫情的影响，满怀信心，“开足马力”，一天工作没有耽误，积极弥补了由于目前天津制造基地复工仍存在不确定性给供应链带来的暂时性扰动，保障美克家居美国MIBD公司的产品供应，确保美国业务不受影响，为上市公司做出应有的贡献。</p><p> <strong> 三、危机管理，变中求胜</strong></p><p>  在特殊时期，短期内市场及客户端均发生较大波动与变化，企业应当迅速对当前业务及运营模式进行转变，来适应疫情期间的市场环境。在疫情后的中长期，准确识别市场与客户需求的“新常态”，前、中、后台及时调整当前产品供应、销售模式、渠道合作伙伴以及营销手段，即短期“赢得客户和员工信任”，中期“提升老客户和新客户留存”，长期“满足全渠道需求”，“强化供应链建设”。</p><p>  面对此次疫情的影响，美克家居迅速调整经营策略，利用已建成的零售大中台系统，实现快速线上化，推动全面平台化，尽快实现向“全渠道平台”的转型。</p><p>  1、快速线上化</p><p>  美克家居将依靠自身已建立的数字化平台能力，推动实现门店业务在线展示、在线设计、在线下单、在线预约配送、在线售后客服。除了布局在传统的天猫和京东旗舰店之外，美克家居通过自建官网、社交小程序等各类线上“工具矩阵”的应用，还原真实门店场景、布展、商品，消费者可以通过手机方式，在线逛店浏览，预约在线设计顾问沟通了解产品。设计顾问可以足不出户在家为客户设计各种软装方案，并通过微信将方案分享给客户，让消费者“宅在家”也可以拥有自己设计的家。</p><p>  美克家居一直致力于全球化供应链布局，在全国各地和海外建设供应链配送能力与制造能力，以应对全球化供应链风险。同时通过持续建设数字化供应链来打造无声贸易体系，管理全球化供应链网络。在需求管理、自动化补货、供应链全球化协同、端到端供应链交付、数字化制造、供应商协同等方面进行数字化，目前已经全面实现供应链全链条线上化管理，通过柔性供应链应对突发疫情，为消费者提供端到端的交付能力。</p><p>  2、线下门店调整经营策略</p><p>  美克家居多年坚持以直营为主的经营模式，拥有从商品迭代创新、智能制造、零售多品牌至售后服务，端对端完全自主可控的供应链体系，具备快速响应和资源调动能力。公司在全国拥有超过100家独立门店，独立制定经营策略，在特殊时期不受<a href=\"http://jiaju.sina.com.cn/products/maichang/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">卖场</a>环境因素限制。</p><p>  面对疫情，美克家居全国各城市的门店将在疫情期间建立清洁、接待流程、配送送货的标准化流程，确保为客户提供安心的服务。无论从前端的零售和加盟系统，还是后端的制造业基地、以及中台的支持部门，及时启动自我防护机制，实现“无一例感染”，无论疫情防疫期间还是疫情胜利后都将提供更佳优良的服务。</p><p>  3、永远将客户放在首位</p><p>  公司的可持续发展，归根结底是满足客户需求。所以公司的激励体系要向服务客户倾向，要以“客户满意是衡量一切工作的准绳”为导向；通过精准激励机制，整合聚焦“以客户为中心”的统一工作方向；通过激励体系的重塑，构建新的业务导向关系，势必会打破既有激励格局建立新的激励框架，从而为公司各业务职能主体（研发、生产、供应、营销、售后、数字化等等）的业务重心，提供更明晰的预期与发展动力。疫情当前，<a href=\"http://jiancai.jiaju.sina.com.cn/pinpai/brand-423.html?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">美克美家</a>将延续一直以来提倡的美好生活方式，以家为媒，通过线上传播和互动的形式，进行会员的心理建设；通过自己的UGC平台，与用户互动，引导用户展示宅家生活日常，以正能量的方式鼓励更多的人利用在家时间，享受生活，珍惜与家人的美好时光，传递美好的生活理念的同时，从而建立健康、可持续的客户关系。</p><p>  面对疫情“下半场”，美克家居有条不紊、积极应对，从容复工。坚信在党中央、国务院及各级政府的领导下，全国人民同心协力、同舟共济、共克时艰，一定能打赢这场“攻坚战”，“飞雪迎春，否极泰来”。</p>",
    "created_time": ISODate("2020-02-21T15:29:03.707Z"),
    "last_modified_time": ISODate("2020-02-21T15:29:03.707Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("information").insert([ {
    _id: ObjectId("5e4ff7ddf16078373f6f7557"),
    title: "家装售后有据可依 质保年限更为关键",
    content: "<p> 据消费者协会统计，家居消费投诉中家装售后类投诉占18.23%，排在第三。数据表明，消费者开始意识到家装售后服务的重要性，这其中质保年限更为重要。</p><p>  <strong>消费者意识增强 家装售后仍是“老大难”</strong></p><p>  2019年有关家装售后的投诉在黑猫平台上达2459例，其中保修期外维修维护问题590例占24%，<a href=\"http://jiaju.sina.com.cn/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">装修</a>售后问题已成为消费者共同的困扰。</p><p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/8785004609056681.png\" style=\"max-width: 100%;\"><br></p><p>不少消费者在选择<a href=\"http://zx.jiaju.sina.com.cn/zhuanjia/t4/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">装修公司</a>时，往往将价钱作为最重要的因素，而忽略了售后服务，选择那些收费低、不正规是装修公司，实际上也放弃了售后保修服务，而选择一家正规公司不仅能保证售后且年限一般更长，这一点尤为重要。<br></p><p><strong>售后有法可依 质保年限很关键</strong></p><p>  2019年4月23日发布并执行的《建设工程质量管理条例》中关于建设工程质量保修的相关法律规定，质量保修期限为其它工程2年，防水工程5年。</p><p>  这是目前具有法律效用的关于装修保修的强制规定，而好的装修公司，其保修期限一般会比规定的要长。据了解，<a href=\"http://anli.jiaju.sina.com.cn/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">业之峰</a>装饰集团在2019年10月推出了“十年质保服务承诺”，将工程质保提升到10年，即自基础装修工程竣工之日起，为基础装修工程质量保修十年。对于消费者而言，这样的企业越多，家装售后的顽疾或许能够越快的剔除。据了解，之所以推出“十年质保”，源自于业之峰人秉持的一颗真诚为客户服务的心。</p><p>  无论是法律层面或是正规家装公司对消费者售后的保障，都更加完善，更长的质保年限，才能更好的提升家居生活的满意度。</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/6636853553341837.png\" style=\"max-width: 100%;\">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></p><p><strong>选好家装公司 售后更专业</strong></p><p>  装修工程的顺利完工同时还能保质保量，选择一家品质好的装修公司尤为重要，售后服务也更有保障。</p><p>  一般来讲，正规、完善的家装公司都会设立专门的售后服务人员，提供及时周到、正规的专业服务，完善的售后服务更有质量保证。以业之峰为例，敢于提出“十年质保”承诺，源自于其雄厚的实力和深厚的底蕴。据了解，2006年开始，业之峰便推出了“蓝钻工程”，专注于整个施工过程的系统化，为消费者带来国际上最新的和最具系统性的家庭装修施工和管理标准。随后，不断对“蓝钻工程”进行升级，保持着材料和工艺的领先。于此同时，一大批国内外一流的战略合作伙伴也成为业之峰为消费者提供后续售后服务的保障。</p><p>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/7863304020410797.png\" style=\"max-width: 100%;\">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></p><p>家装售后一直以来都被消费者诟病，家装公司的参差不齐，即便有法律规定的售后年限，依然有公司不去遵循，但却也有着如业之峰一般，主动提出“十年质保”的行业标杆性企业。<br></p>",
    "created_time": ISODate("2020-02-21T15:31:41.603Z"),
    "last_modified_time": ISODate("2020-02-21T15:31:41.603Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("information").insert([ {
    _id: ObjectId("5e4ff82bf16078373f6f7558"),
    title: "快讯：鑫迪木门拿出全年销售额2% 补贴经销商",
    content: "<p>截止2020年2月6日，从<a href=\"http://zx.jiaju.sina.com.cn/wh/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">武汉</a>爆发的新型冠状肺炎病毒依然牵动着所有人的心脏。当医护人员拼尽全力从生死线上为更多的生命抢夺时间，留下的人们唯愿在自己的行业里、岗位上散发光热。</p><p>  众志成城，这不仅仅是一句口号。不少<a href=\"http://jiaju.sina.com.cn/?utm_source=snjj&amp;utm_medium=newsdetailr\" target=\"_blank\">家居</a>行业品牌用自己的行动，肩负起了特殊时期企业应该具有的社会责任感。除了为一线捐赠物资，以线下为根据地的渠道商、经销商正在承受租金、人流、薪资等方面的巨大压力，不少家居企业发布了经销商的帮扶策略。</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<img src=\"http://localhost:8899/public/uploadfiles/884240926690999.jpg\" style=\"max-width: 100%;\"><br></p><p>共克时艰！<strong>鑫迪木门宣布，将拿出全年销售额的2%用于经销商店长、导购全年工资补贴。</strong>在无情的病毒和疫情面前，家居人的温情相信会给行业带来信心的提振。</p><p>  特殊时期，家居企业主动让利，为的是维持行业生态的平衡，在疫情结束后保障经销商群体也能够迅速复原，回到正轨。</p>",
    "created_time": ISODate("2020-02-21T15:32:59.312Z"),
    "last_modified_time": ISODate("2020-02-21T15:32:59.312Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for orderforms
// ----------------------------
db.getCollection("orderforms").drop();
db.createCollection("orderforms");

// ----------------------------
// Documents of orderforms
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("orderforms").insert([ {
    _id: ObjectId("5e4ff352f16078373f6f754a"),
    "user_id": "5e4e71d731f0a3246b0f0796",
    brand: "索菲亚",
    category: "床",
    goodsNumber: "4",
    nickname: "高飞",
    realname: "高飞",
    mobileNum: "13339288656",
    address: "安徽省合肥市",
    "created_time": ISODate("2020-02-21T15:12:18.152Z"),
    "last_modified_time": ISODate("2020-02-21T15:12:18.152Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orderforms").insert([ {
    _id: ObjectId("5e4ff35bf16078373f6f754b"),
    "user_id": "5e4e7bdc31f0a3246b0f07a3",
    brand: "凯瑞佳",
    category: "椅子",
    goodsNumber: "16",
    nickname: "高飞",
    realname: "高飞",
    mobileNum: "13339288656",
    address: "安徽省合肥市",
    "created_time": ISODate("2020-02-21T15:12:27.639Z"),
    "last_modified_time": ISODate("2020-02-21T15:12:27.639Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orderforms").insert([ {
    _id: ObjectId("5e4ff3b3f16078373f6f754d"),
    "user_id": "5e4e78b031f0a3246b0f079f",
    brand: "林氏木业",
    category: "沙发",
    goodsNumber: "13",
    nickname: "张三",
    realname: "张三",
    mobileNum: "13355614534",
    address: "安徽省上海市",
    "created_time": ISODate("2020-02-21T15:13:55.117Z"),
    "last_modified_time": ISODate("2020-02-21T15:13:55.117Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("orderforms").insert([ {
    _id: ObjectId("5e4ff3bdf16078373f6f754e"),
    "user_id": "5e4e781e31f0a3246b0f079e",
    brand: "全友",
    category: "沙发",
    goodsNumber: "12",
    nickname: "张三",
    realname: "张三",
    mobileNum: "13355614534",
    address: "安徽省上海市",
    "created_time": ISODate("2020-02-21T15:14:05.58Z"),
    "last_modified_time": ISODate("2020-02-21T15:14:05.58Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("homelife");
db.getCollection("users").insert([ {
    _id: ObjectId("5e4fb8c531f0a3246b0f07c5"),
    avatar: "/public/img/1582282986159-下载.jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    email: "1329372653@qq.com",
    password: "12345678",
    nickname: "高飞",
    mobileNum: "13339288656",
    address: "安徽省合肥市",
    "created_time": ISODate("2020-02-21T11:02:29.012Z"),
    "last_modified_time": ISODate("2020-02-21T11:02:29.012Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5e4ff383f16078373f6f754c"),
    avatar: "/public/img/1582298021922-下载.jpeg",
    bio: "Hello，记录美好生活！",
    gender: NumberInt("-1"),
    email: "912455894@qq.com",
    password: "12345678",
    nickname: "张三",
    mobileNum: "13355614534",
    address: "安徽省上海市",
    "created_time": ISODate("2020-02-21T15:13:07.722Z"),
    "last_modified_time": ISODate("2020-02-21T15:13:07.722Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();
