/*
 * @Author: ZhuQiMing
 * @CreateTime: 2019/10/16 15:09
 */
let skill = [
    {
        label: '市场',
        children: '人际关系处理,服务意识,分析性思维,基本的策划,商务礼仪,发散性思维,分析性思维,渠道维护,事件营销,销售,活动执行,市场推广,活动策划,文案/策划,营销,市场分析,消费者分析,营销策略,数据分析,新媒体运营,营销管理,微信运营,推广,市场拓展,营销策划,市场竞争分析,市场,商务,线下拓展,整合营销,市场策划,BD,渠道,行业分析,地推,海外市场,策划,互动营销,微博运营,市场顾问,商业策划,代理商,展览,会展拓展,外企,会务管理,SEO,会务策划,数字营销,SEM,产销协调,ASO'
    }, {
        label: '财务',
        children: '应变能力,会计学,业务能力,分析判断,组织领导,管理学,基本理论,经济学,信息获取,熟悉政策法规,会计,财务,出纳,税务,会计学的定性,应收应付,成本,审计,定量分析,国际会计惯例,总账,往来,熟悉国内外方针,统计,结算,分析,资产管理,尽职调查,风控,资产/项目评估,海外业务,清算,跨境业务,上市,不良资产处置,并购,资产重组,专利'
    }, {
        label: '法务',
        children: '沟通能力,逻辑思维能力,文字功底,分析能力,应变能力,相关企业法律,合同法,掌握公司法,合同法,知识产权,精通公司法,法务,专利,律师,尽职调查,合规,海外业务,不良资产处置,跨境业务,资产重组'
    }, {
        label: '人事',
        children: '沟通能力,团队合作,执行能力,自我管理,组织能力,人力资源管理,情绪管理,应变能力,语言表达,协调能力,英语口语,观察力,逻辑能力,文字表述,沟通技能,压力管理,时间管理,信息收集,基本分析,认识能力,员工关系,招聘,人力资源,人事,行政,员工培训,薪酬福利,培训,绩效管理,社保,HR,绩效考核,HRBP,组织发展（OD）,知识管理,HRM,商家培训,HRIS,HRD,HRMS'
    }, {
        label: '行政',
        children: '沟通能力,执行能力,团队合作,自我管理,应变能力,协调能力,语言表达,文字表述,组织能力,时间管理,观察力,英语口语,情绪管理,逻辑能力,沟通技能,信息收集,压力管理,基本分析,行政,文员,认识能力,人力资源管理,助理,前台,档案,后勤,商务驾驶,文秘,总经理助理,后勤保障,秘书,总裁助理,物业,顾问,工会'
    }, {
        label: '技术',
        children: 'Java,HTML,Javascript,web前端,数据库管理,C,Linux系统基础,C++,Python,MySQL,PHP,C#,Node.js,网络服务,shell脚本,数据库,.NET,SQLServer,JS,Linux/Unix,数据采集,数据挖掘,语音/视频/图形开发,Oracle,后端,Hadoop,Redis,网页,文本处理命令,Android,监控工具,VB,软件测试,J2EE,图像处理,推荐算法,机器学习,自然语言处理,软件开发,功能测试,C#/.NET,Windows,移动开发,数据分析,分布式,搜索算法,移动端,awk工具,算法,MongoDB,嵌入式,docker,通信,sed工具,Goang,硬件测试,性能测试,黑盒测试,爬虫,自动化测试,网络爬虫,数据处理,Web测试,自动化,网络优化,app测试,测试,云计算,服务器端,解决方案,产品测试,Jmeter,中间件,IOS,Shell,Ruby,数字信号处理,全栈,游戏测试,Delphi,系统架构,Selenium,数据库开发,Android测试,Erlang,Perl,GO,白盒测试,QT,测试开发,ERP,Laravel,脚本,人脸识别,音频处理,Loadrunner,音视频,Hive,客户端,Winform,Windows测试,信息检索,Spark,架构师,ETL,视频预处理,数据架构,脚本测试,SOA,ASP,数据仓库,Swift,区块链,爬虫架构,爬虫工程师,Golang,灰盒测试,模式识别,Server端测试,Yii,抓取,平台,NLP,Scala,搜索,IOS测试,DBA,MFC,SAP,视频流转码,DB2,驱动开发,数字音频水印,视频编解码,语音处理,语音算法,音频编解码,Flink,UE4,数据压缩,视频算法,视频识别,内核开发,Storm,Phalcon,Wpf,VOIP,纠错编码,流媒体转封装,PKI,Cassandrs,Rft'
    }, {
        label: '产品',
        children: 'Axure,用户研究,项目管理,组织协调,数据分析,交互设计,市场调查,移动产品,产品助理,需求分析,电子商务,商业策划,文案,数据运营,产品设计,文档,Sketch,产品策划,互联网金融,游戏,解决方案,数值策划,移动产品/APP,产品大牛,后台,数据库,游戏策划,广告,电商,手游,社交/SNS,视频,ERP,PMP,教育,网页,剧情,企业软件,系统,SaaS,端游,策略,敏捷,用户增长,过程管理,数据,实施,旅游,供应链,成本管理,金融,O2O,结构设计,医疗,智能硬件,商业产品,关卡,BI,风控,PMO,采购,客户端,数值,制作人,页游,QA,UED,推荐,搜索,反作弊,Prince,LBS'
    }, {
        label: '设计',
        children: 'Photoshop,Illustrator,平面设计,手绘,CAD,网页设计,3Dmax,领导力,UI,创意,After,Effects,PS,Dreamweaver,premiere,Sketch,Axure,APP设计,C4D,广告设计,Flash,视觉设计,Sai,交互设计,活动,MAYA,CAD制图,动画,部门管理,业务流程管理,Flash,3D场景,决策能力,网店装修,犀牛,插画,家居设计,美工,平面,工业设计,Painter,摄像,渲染,3D,家具设计,剪辑,UE,结构设计,电商美工,2D场景,包装,原画,机械,后期,橱柜设计,UX,美术设计,建筑设计,网页,广告,模具设计,画册,角色,UED,儿童美术,珠宝设计,Q版,视频,视觉,外观设计,用户体验,团队建设,VR,品牌,交互,Solidworks,ProE,U3D,场景,CG,多媒体,网店,特效,服装设计,移动交互,网页交互,AR,影视,2D,对外形象建立,目标管理,动作,硬件交互,KPI考核,制作人,Motiongraphics,导演,战略管理,无线交互,交互设计专家,OKR管理'
    }, {
        label: '运营编辑',
        children: '学习能力,承受压力,自我调节能力,文字功底,执行力,表达能力,数据分析,判断力,管理能力,洞察力,资源整合能力,营销技能,联想能力,新媒体运营,图片编辑,营销数据分析,文案,用户调查,微信运营,活动策划,英语,电商运营,视频编辑,内容运营,用户运营,产品运营,运营,策划,编辑,淘宝运营,软文,热点,微博运营,内容审核,新闻编辑,粉丝运营,用户增长,游戏运营,社区运营,网络运营,SEO,跨境电商,天猫运营,品牌运营,电商编辑,审核,网站编辑,采编,内容,广告,网站运营,校对,商品编辑,策略运营,数据审核,效果跟踪,商家运营,时尚编辑,记者,APP推广,美食编辑,用户,O2O运营,市场,网站推广,京东运营,商务,娱乐编辑,SEM,线下拓展,品类运营,旅游编辑,质检,信息,海外运营,网站分析,财经,科技,品控,医学,汽车编辑,资质认证,ASO,质量认证,ISO内审,ISO外审'
    }, {
        label: '银行',
        children: '责任感,敬业精神,职业道德,团队协作精神,交际能力,事业心,责任心,综合素质,善于分析,协调能力,销售技巧,银行业务,业务素质,了解金融政策,机智灵敏,个人业务,把握市场信息,筹划能力,信贷管理,营销技能与分析,零售业务,公司业务,资产管理,理财顾问（FA）,交易咨询,信用卡销售,资金结算,客户经理,商务渠道,柜员,国际业务管理,政策水平,风控,信托业务,大堂经理,同业金融,私人财富顾问,对公客户管理,电子银行管理,金融经纪人,投资银行,行长助理'
    }, {
        label: '证券基金',
        children: '证券分析,基金分析,操盘手,资产证券化,信托分析,行业研究,证券产品,基金产品,风控,分析师,策略设计,产品设计,第三方支付产品,资信评估,p2p产品,合规稽查,信用产品,跨境支付/结算,信托产品,众筹产品'
    }, {
        label: '保险',
        children: '业务管理,理赔,精算,销售,保险,产品设计,渠道,区域销售,客户代表'
    }, {
        label: '信托期货',
        children: '团队协作精神,综合素质,善于分析,协调能力,销售技巧,筹划能力,营销技能与分析,机智灵敏,责任感,敬业精神,把握市场信息,个人业务,交际能力,了解金融政策,责任心,业务素质,职业道德,政策水平,信贷管理,商务渠道,资产管理,信托期贷业务,交易咨询,信托业务,零售业务,公司业务,事业心,国际业务管理,理财顾问（FA）,资金结算,信用卡销售,项目基金,期货,外汇,操盘手,基金,资产证券化,证券经纪,证券分析,产业基金,基金管理,信托分析,融资租赁,Fund of Funds,基金分析,基金经纪,理财顾问,金融经纪人,证券,股票,信托经纪'
    }, {
        label: '房地产',
        children: '团队管理,地产销售,项目策划,地产置业,项目策划,物业接待,项目招投标,房地产投资分,营销,规划设计,规划与实施,地产评估,地产项目管理,房地产资产管理,房产中介,活动策划,物业管理,开发成本管理,开发报建,地产招采,经纪人,土地管理,物业项目管理,土地配套,物业招商管理,项目管理,商业办公,地产策划,招标,经济测算,工程,签约专员,投资,招商,写字楼,经理'
    }, {
        label: '土建',
        children: '细心严谨,团队精神,沟通协调,建筑施工,职业素质,基础理论,建筑工程,测绘,现场管理,工程结算,现场管理,质量管理,工程验收,知识结构,现场管理,外部协调,工程造价,超前意识,工程监控,施工员,排水施工技术,教育培训,最新技术,招投标技术评审,排水,安全员,监理,管理,建筑师,道桥,水电工,机电,弱电,工程主管,暖通,土建经理,景观工程师'
    }, {
        label: '物业',
        children: '物业管理,物业接待,日常监督,物业项目管理,秩序维护,安全防范,公共服务,卫生管理,设备管理,物业招商管理,物业维修,物业租赁销售,安全防范,绿化管理,维护,客服,治安,机电维修,专项服务,整治,修缮,提供有偿服务,物业主管,保安,市场拓展,工程主管,保安队长,收费由,监控管理,电梯工,项目投标,维修主管,招商主管,投标专员,水暖工,保洁员,发展专员,绿化工主管,内审员'
    }, {
        label: '设计',
        children: 'Photoshop,Illustrator,平面设计,手绘,CAD,网页设计,3Dmax,领导力,UI,创意,After,Effects,PS,Dreamweaver,premiere,Sketch,Axure,APP设计,C4D,广告设计,Flash,视觉设计,Sai,交互设计,活动,MAYA,CAD制图,动画,部门管理,业务流程管理,Flash,3D场景,决策能力,网店装修,犀牛,插画,家居设计,美工,平面,工业设计,Painter,摄像,渲染,3D,家具设计,剪辑,UE,结构设计,电商美工,2D场景,包装,原画,机械,后期,橱柜设计,UX,美术设计,建筑设计,网页,广告,模具设计,画册,角色,UED,儿童美术,珠宝设计,Q版,视频,视觉,外观设计,用户体验,团队建设,VR,品牌,交互,Solidworks,ProE,U3D,场景,CG,多媒体,网店,特效,服装设计,移动交互,网页交互,AR,影视,2D,对外形象建立,目标管理,动作,硬件交互,KPI考核,制作人,Motiongraphics,导演,战略管理,无线交互,交互设计专家,OKR管理'
    }, {
        label: '家装',
        children: '工作协调,现场处理,组织隐蔽工程验收,施工计划,质量验评,图纸会审,水电,安装施工,木工,日志记录,组织与计划,泥瓦,编制施工,决策,计量结算,验收记录,预防措施,安全监控,测量定位,工序验收,质量控制,方案编制,提交变更,抄平放线,事故分析,油漆,处理质量缺陷,主案设计,装潢设计,园林,硬装,质检员,项目经理,城市规划,首席设计师,软装,幕墙'
    }, {
        label: '旅游',
        children: '旅游策划,导游,旅游规划,旅游产品销售,带团,旅游路线开发,计调,领队,旅游路线开发,旅游策划,票务服务,旅游产品销售,讲解,带团,签证业务,旅游规划,领队,导游,票务服务,计调,签证业务,策划,接待员,票务,财务,安全员'
    }, {
        label: '酒店',
        children: '客户接待,餐饮管理,客户接待,宴会管理,前厅管理,餐饮管理,秩序维护,客房管理,秩序维护,登记查验,服务员,大堂管理,客户管理,登记查验,前厅管理,客户管理,车辆管理,楼面管理,楼面管理,消防检查,宴会管理,治安巡视,客房管理,厨师,礼宾员,治安巡视,消防检查,车辆管理,大堂管理,引领员,收银员,食品安全,酒水员,客房销售,总台,保管员,市场经理,保安服务,大堂经理'
    }, {
        label: '餐饮',
        children: '团结协作,相互协作虚心好学,服务,文化素质,烹调,收银,餐厅管理,精打细算,营运管理,原料处理,炒菜,烹饪美学,刀工,配菜,茶饮管理,营销管理,端菜,火候掌握,竞争力,服务员,评估质量,营养学,西餐,评估原料,烹饪化学,面点师,原料学,中餐,调酒师,传菜员,粤菜,湘菜,川菜,烧烤员'
    }, {
        label: '美容',
        children: '美容化妆品基础知识,基础皮肤知识,专柜彩妆,皮肤护理,彩妆培训,皮肤清洁,常规面护,化妆师,美容美体,保养,按摩,面部穴位知识,基本按摩技能,身体护理,高级按摩手法技能,眼部护理,SPA护理,美容师,胸部护理,发型师,美甲师,理疗,加强面护,销售员,瘦身护理,发型助理,香薰,培训师,美体师,护理员,整形师'
    }, {
        label: '体育保健',
        children: '健身,篮球,游泳,瘦身,羽毛球,足球,田径,乒乓球,拳击,自行车,网球,私人教练,瑜伽,排球,跆拳道,美体,健身顾问,体操,射击,举重,舞蹈,健身销售,水上项目,帆船帆板,柔道,棒球,击剑,摔跤,赛艇,垒球,皮划艇,现代五项,马术,铁人三项,曲棍球,射箭,按摩,游泳馆安全员,游泳教练,手球,足疗'
    }, {
        label: '生活',
        children: '有耐心,亲和力,制定主题,看书,做饭,唱歌,照看小孩,造型,婚礼策划,打扫卫生,基本护理,饮食,玩游戏,做纪录,基本检查,清洁,检查修理,散步,宠物喂养,宠物美容,买菜,宠物清洗,维修家电,修剪,宠物剪指甲,讲故事,染色,洗衣收衣,家政服务,月嫂,小孩托管,保姆,宠物寄养,钟点工,家电维修'
    }, {
        label: '教育',
        children: '英语教育,小学教育,教学管理,课程设计,助教,幼教,高中教育,生活教育,理科教育,音乐教育,计算机,教务管理,外语教育,课程编辑,成绩管理,计算机教育,培训讲师,小学英语,钢琴,体育教育,初中英语,幼儿英语,历史,水彩,大学英语,素描,民族舞,吉他,高中英语,古典舞,高数,现代舞,爵士舞,古筝,拉丁舞,微积分,地理,油画,街舞,芭蕾舞,小提琴,踢踏舞'
    }, {
        label: '培训',
        children: '培训策划,培训研究,课程规划,顾问,销售专员,JAVA培训,讲师助理,Web前端培训,策划,讲师,C++培训,UI设计培训,财会培训,HR培训,动漫培训,ios培训,PHP培训,.NET培训,Android培训,企业管理师,Unity3D培训'
    }, {
        label: '咨询',
        children: '数据分析,需求分析,市场调研,翻译,数据调研,人力资源咨询,教育,心理,财务咨询,咨询商务,战略咨询,咨询项目管理,咨询商务,品牌咨询,咨询项目管理,健康,服务行业,企业管理咨询,品牌咨询,企业管理咨询,猎头咨询,IT咨询,猎头咨询,法律,财务,投资'
    }, {
        label: '广告',
        children: '文案,活动策划,广告策划,微信运营,PR,活动执行,AE,品牌,数据分析,网络营销,视频广告,会展布置,市场推广,商务谈判,市场分析,市场策划,户外广告,广告协调,市场,app推广,平面广告,地推,渠道,广告创意,创意,广告美术,广告执行,策划,品牌传播/推广,广告活动,形象建设,公关（PR）,公共关系,品牌规划,品牌管理,电视广告,顾问,DSP,AD,AAE,AM'
    }, {
        label: '影视',
        children: '视频编辑,PR,后期编辑,AE,摄影,剪辑,摄像,影视制作,编导,影视策划,音频编辑,分镜绘制,3D特效,动画特效,配乐,配音录制,后期,灯光准备,化妆,艺术指导,剧务,编剧,造型设计,助理,服装整理,音效控制,灯光,摄像师,舞美设计,光线特效,制片人,编曲,音效,爆破特效,化妆师,演员替身,武术指导'
    }, {
        label: '媒体',
        children: '摄影,剪辑,视频编辑,PR,摄像,后期编辑,媒体制作,AE,化妆,音频编辑,编导,造型设计,文案,影视策划,配音录制,分镜绘制,艺术指导,服装整理,配乐,策划,动画特效,运营,剧务,3D特效,舞美设计,执行,音效控制,光线特效,公共关系,媒介,灯光准备,编曲,媒介合作,行政,公关（PR）,广告协调,品牌,爆破特效,政府关系（GR）,顾问,投放'
    }, {
        label: '娱乐',
        children: '表现力,专业,礼貌,临场发挥,精神面貌,音色,控场能力,口语能力,实战经验,语言,仪态,能力,英文,衣容,礼节,观念,行为,知识面,才华,主持人,粤语,外语,知识,演员,影响力,歌手,模特,练习生,德语,经纪人'
    }, {
        label: '医疗服务',
        children: '常规护理,查房协助,门诊接待,生活护理,术后护理,病区管理,心电图,标本采集,内科护理,健康检查,心理护理,健康咨询,儿科护理,中医护理,健康回访,推拿,针灸,康复训练,CT,物理治疗,康复评估,护士,心理治疗,言语治疗,核磁共振成像,康复咨询,护理,作业治疗,彩超,普外科,中医科,妇,科,产,科,DSA,儿,科,消化内科,PET,呼吸内科,心内科,口腔内科,超音波检查,口腔外科,内分泌,神经内科,钼靶,急诊内科,针,灸,影像科,推拿科,疼痛科,血液科,肿瘤科,康复医学科,放射科,心理咨询,口腔矫形,沁外科,肾内科,眼,科,皮肤科,耳鼻喉头,传染科,脑外科,妇科性病,心胸外科,保健科,护工,生殖科,整,形美容科,颈外科,烧伤科,核医学,移植科,矫外科,碎石中心'
    }, {
        label: '医疗器械',
        children: '信息收集,医疗器械研究,实验,文献检索,器械保养,数据挖掘,医疗咨询,预算把控,销售,采购,质量监控,数据建模,药理研究,医药信息采编,生物技术研究,数据库构建,生物统计学,临床研究,试验验收,临床协调CRC,器械维修,器械管理,维护,试验监查,临床项目管理,药学编辑,CRF设计,医学编辑,临床监察CRA,临床试验设计,保养'
    }, {
        label: '制药',
        children: '客户开发,客户管理,市场拓展,药店销售,医药研发,药检,医疗营销,药品鉴定,药品管理,质量监控,竞品分析,制剂研究,药剂,大客户销售,商务谈判,药品调配,药店管理,医效实验,产品销售,处方核实,销售,医药分析,药品盘存,药学编辑,产品研发,投标,产品管理,分销,招商'
    }, {
        label: '消费品',
        children: '供应链管理,仓储管理,贸易跟单,物流跟单,物仓调度,货运代理,质检,品控,审核,销售,跟单,仓储,零售,供应链,物流,结算,采购,商品,配送,外企,外贸,快消,买手,批发'
    }, {
        label: '贸易',
        children: 'CET4,订单跟进,CET6,商务谈判,制单结汇,报价核算,交易磋商,客户开发,团队管理,客户管理,售后服务,数据分析,外贸,TEM4,市场开拓,制单结汇,跟单,趋势判断,报检,市场开发,对账催收,质量控制,竞品分析,报价编制,风险控制,TEM8,销售,采购,外企,物流,买手,零售,供应链,结算,质检,仓储,审核,商品,批发,快消,配送,品控'
    }, {
        label: '交通运输',
        children: '乘务员,安检员,地勤,调度员,空姐,乘务长,飞行员,机务,列车长,水手,工程机驾驶员,公交司机,起重机驾驶员'
    }, {
        label: '物流仓储',
        children: '仓库管理,物流,订单处理,理货,快递,调度员,物流单证员,货运,集装箱,邮递'
    }, {
        label: '汽车制造',
        children: '机械设计,三维造型设计,汽车结构功能,零部件设计,汽车美容,质量把关,焊接,汽车设计,总装,质量管理,模型制作,底盘设计,工程项目管理,改装设计,整车架构,工艺设计,混合动力,动力系统设计,底盘设计,检测,电器工程设计,造型设计,汽车销售,变速器设计,质量检测,车身设计,电子工程设计,汽车评估,工程师,冲压,维修管理,内外饰设计,安全系统设计,车身控制系统设计,消声器设计,技术方案,空调系统设计,车灯设计,车身附件设计,安全员,电驱动系统集成,总线设计,功能标定,色彩面料设计,采购,滤清器设计,减震器设计,ADAS,离合器设计,部门经理,开闭件设计,施工管理,总装调配'
    }, {
        label: '机械制造',
        children: 'AutoCAD,机械设计,Solidworks,数控编程,UG,PRO/E,自动控制,v机电一体化,焊接,产品工艺,CAXA,机械铸造,冲压工艺,夹具,图纸设计,注塑工艺,自动化,机电,模具设计,维修管理,工程师,液压,CNC,材料采购,产品规划,水电工程,飞机维修,船舶,设备经理,技术经理,光伏'
    }, {
        label: '能源',
        children: '电力维修技术,输电线路工程,空调/热能工程,水利/水电工程,地质勘探,核力/火力工程,石油天然气开采,自动化技术,矿产勘探,设备维护,矿产管理,设备管理,工程师,新能源研发,冶金,热能开发,勘探,采矿,水利,钻井技术,测绘师'
    }, {
        label: '化工',
        children: '化学实验分析,化工技术应用,检测,检验,塑料工程,涂料研发,化妆品工艺,化妆品研发,食品/饮料研发,造纸研发,化妆品配方,操作员,统计员'
    }, {
        label: '公务事业',
        children: '心理素质,谦虚谨慎,身体素质,文化素质,业务素质,政治素质,敏锐的洞察力,处置突发事件,临危不惧,维护秩序,处理事故,实行监督,维护安全,实施安全工作,制止危险行为,维护治安,组织消防工作,公务员,维护治安,预防犯罪,国企,制止犯罪,教师,侦查违法,处理违法案件,秘书,警员,检察院,法院,督察'
    }, {
        label: '学术科研',
        children: '科学研究,分析问题,解决问题,人际关系,独力解决,自身修养,清晰表达自己,协调,自信,制定方案,领导能力,科学技术沟通,社交礼仪常识,技术开发,协助指导,社会调查,辅导答疑,社会服务,制定措施,决策,教学法研究,学术研究,助教,人脉,科研,印象,学术文献,坚持思想教育,预测,思想教育交往,落实教育方针,教授,资深教师'
    }, {
        label: '非盈利组织',
        children: '乐观向上,团队精神,协同合作,交流,诚实守信,公益实践,沟通联络,保持活力,组织,语言翻译,凝聚力,社区公益,礼宾接待,宣传活动,文化活动组织,提供帮助,教育培训,尊重隐私,大局观,环保,观众指引,责任,家教,激励表彰,扶贫,竞赛组织,向心力,医疗卫生,招募选拔,物品分发,安全保卫,就业,场馆运行,信念,交通运输,帮扶,环境保护,助残,助学,助老,道义'
    }, {
        label: '农林牧渔',
        children: '吃苦耐劳,责任心强,专业技术,基本知识,勤奋刻苦,农业技术,职业素养,热爱林业,动物营养,管理经验,组织实施,饲料研发,工作基础,可行性分析,现场管理,巡护森林,资源调查,制止破坏行为,园艺,科学种菜技术,技术措施,技术报告,掌握地形,农业,养殖,质量管理,法律法规,蔬菜科技开发,园林,林区火源管理,种植,科学技术推广,论证,饲养员,渔业'
    }
];
export { skill };
