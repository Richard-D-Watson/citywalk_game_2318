// City Walk 闯关 - 静态网页项目（无真实地图/无定位）
// 数据来自 Excel 关卡表；图片当前使用占位图，可后续替换为真实路径。
// 路由：#/map  #/scene/<id>  #/bonus/<id>  #/summary
// 存储：localStorage（注意：上传照片 DataURL 可能较大）

const STORAGE_KEY = "citywalk_project_v2";

const scenes = [
  {
    "id": "level-1",
    "order": 1,
    "title": "前滩休闲公园",
    "coverImageUrl": "./img/scene_1/cover.png",
    "shortDesc": "在公园里完成三处主题场景打卡，用照片收集今天的第一组回忆。",
    "longDesc": "前滩休闲公园于2015年12月31日作为前滩地区三大滨江绿地中首个开放的公园正式启用。公园沿黄浦江岸线延伸2公里，占地约60.6公顷，通过四季分明的植被景观和“生态+人文”设计理念，打造出包含樱花步道、芦苇荡等特色景观的滨江生态空间。",
    "navigationHint": "页面顶部提供的地图能帮助你更好地定位噢～",
    "unlock": { "type": "always" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "打卡：感官花园",
        "promptText": "前滩休闲公园包括三个主题场景：珠蚌宫、流动滩涂和波浪森林。请找到「感官花园」，并在这里拍一张照片上传。",
        "promptImageUrls": ["./img/scene_1/task.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-1-t1",
        "order": 1
      },
      {
        "type": "upload",
        "title": "打卡：粉红沙滩",
        "promptText": "前滩休闲公园包括三个主题场景：珠蚌宫、流动滩涂和波浪森林。请找到「粉红沙滩」，并在这里拍一张照片上传。",
        "promptImageUrls": [],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-1-t2",
        "order": 2
      },
      {
        "type": "upload",
        "title": "打卡：森林密道",
        "promptText": "前滩休闲公园包括三个主题场景：珠蚌宫、流动滩涂和波浪森林。请找到「森林密道」，并在这里拍一张照片上传。",
        "promptImageUrls": [],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-1-t3",
        "order": 3
      }
    ],
    "bonusTasks": []
  },
  {
    "id": "level-2",
    "order": 2,
    "title": "友城公园",
    "coverImageUrl": "./img/scene_2/cover.png",
    "shortDesc": "找花坛、数树、认河名：这一关更像“城市观察力测验”。",
    "longDesc": "友城公园，被称为“前滩之眼”，位于前滩地区的滨水前沿，拥有近600米亲水岸线，绿色慢行步道则蜿蜒环绕于公园之中；春季的樱花、海棠；夏季的紫薇、绣球；秋季的桂花、木槿；冬季的月见草、玉簪等花草树木错落有致，形成四季不同的景观。无论是闲庭信步，还是江畔赏舟，都别有一番韵味。",
    "navigationHint": "按照任务顺序进行探索会更高效噢～",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-1" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "差异花坛：现场找一找",
        "promptText": "下面两幅卫星图分别来自 Google 和高德，展示了友城公园的同一位置，但花坛区域存在区别。请你找到这个花坛，并拍一张照片上传。哪一张图更符合1月的友城公园呢？",
        "promptImageUrls": ["./img/scene_2/task_1a.png", "./img/scene_2/task_1b.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-2-t1",
        "order": 1
      },
      {
        "type": "input",
        "title": "数树：最大一群有几棵？",
        "promptText": "友城公园的最北侧有一片开阔地，这里的树被人为分成了 4 群。请你数一数：最大的那一群有几棵树呢？",
        "promptImageUrls": [],
        "input": { "placeholder": "请输入答案", "inputMode": "numeric" },
        "validation": { "required": true, "mode": "exact", "answer": "6", "normalize": "extractNumber" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-2-t2",
        "order": 2
      },
      {
        "type": "choice",
        "title": "河名：脚下这条河叫什么？",
        "promptText": "请你们从最北侧的东岸绿道离开友城公园。脚下的这条河的名字是什么？请选一选～\nA. 川杨河\nB. 彭越河\nC. 长浜河\nD. 云枫河",
        "promptImageUrls": [],
        "options": ["A. 川杨河", "B. 彭越河", "C. 长浜河", "D. 云枫河"],
        "validation": { "required": true, "mode": "exact", "answer": "A", "normalize": "trimSpaces" },
        "feedback": { "correctText": "答对啦！", "wrongText": "再想想～" },
        "reward": { "stars": 1 },
        "id": "level-2-t3",
        "order": 3
      }
    ],
    "bonusTasks": []
  },
  {
    "id": "level-3",
    "order": 3,
    "title": "耀华滨江绿地",
    "coverImageUrl": "./img/scene_3/cover.png",
    "shortDesc": "探索帐篷营地与主题彩绘，在江边绿地里寻找城市里的“神奇动物”树洞画。",
    "longDesc": "耀华滨江绿地是位于浦东新区前滩的一个绿地，东临耀江路，南临后滩公园，北临前滩友城公园。总面积约17公顷。原本为临时苗圃，2017年黄浦江两岸贯通时，临时苗圃成为耀华滨江绿地。2021年，绿地新增观赏地被和花卉数万平方米，并且在原防汛墙内侧画上“海洋缤纷”、“烂漫时光”、“林下鹿憩”、“梦幻树屋”等四大主题彩绘。2021年8月18日，耀华滨江绿地开放帐篷营地的预约功能，该地可以容纳200顶常规帐篷，也成为黄浦江东岸第一个对市民开放的帐篷露营地。",
    "navigationHint": "茶馆在远离黄浦江的深面，小心不要遗漏啦！",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-2" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "神奇动物在树洞",
        "promptText": "最近，东岸滨江公共空间的树洞里住进了许多“神奇动物”，你能找到嘛？请在这里留下你最喜欢的一幅树洞画吧～",
        "promptImageUrls": ["./img/scene_3/task_1.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-3-t1",
        "order": 1
      },
      {
        "type": "upload",
        "title": "打卡四大主题涂鸦墙",
        "promptText": "江边的墙上有这样的涂鸦，分为“海洋缤纷”、“烂漫时光”、“林下鹿憩”、“梦幻树屋”四大主题。请你找到一处你最喜欢的一处涂鸦，让对方为你拍一张照片吧～",
        "promptImageUrls": ["./img/scene_3/task_2.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-3-t2",
        "order": 2
      },
      {
        "type": "choice",
        "title": "猜猜茶馆名",
        "promptText": "耀华滨江内有2座茶馆，你知道它们的牌子上写的内容是什么吗？请选一选～\nA. 清心茶韵\nB. 武夷山水\nC. 竹里闲居\nD. 云水禅茶",
        "promptImageUrls": [],
        "options": ["A. 清心茶韵", "B. 武夷山水", "C. 竹里闲居", "D. 云水禅茶"],
        "validation": { "required": true, "mode": "exact", "answer": "B", "normalize": "trimSpaces" },
        "feedback": { "correctText": "答对啦！", "wrongText": "再想想～" },
        "reward": { "stars": 1 },
        "id": "level-3-t3",
        "order": 3
      }
    ],
    "bonusTasks": []
  },
  {
    "id": "level-4",
    "order": 4,
    "title": "世博文化公园-世界花艺园",
    "coverImageUrl": "./img/scene_4/cover.png",
    "shortDesc": "探访四季有花的世界花艺园，在台地园、禅境园、竹境园等特色花园中领略园艺之美。",
    "longDesc": "世界花艺园位于公园西南侧，由地面公园区域和地下配套空间组成。地面主题园由台地园、新境园、禅境园、竹境园和岩石花园等特色鲜明的花艺游园组成，打造一个四季有花可观、全年有景可赏的四季园艺精品花园。",
    "navigationHint": "请合理安排本关时间，接下来的两个关卡都是限时开放噢！完成任意3个任务即算通关～",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-3" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "岩石花园寻宝",
        "promptText": "岩石花园以特色岩石搭配草花组景，以刚硬的岩石搭配柔美的植物形成奇特的景观。逾千种来自世界各地的花草树木精致地配置于石湾探秘、片岩石林等多个岩生环境，形成花石相生、四季有花、移步换景的游园意境。\n你最喜欢哪一种植物？为它拍一张照片吧～",
        "promptImageUrls": ["./img/scene_4/task_1.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-4-t1",
        "order": 1
      },
      {
        "type": "upload",
        "title": "寻找禅境园蓬莱石组",
        "promptText": "禅境园以传统造园理论中四神相应为布局依据，以三山五岳为文化依托，以池泉园结合枯山水组合为表达形式，格调高致，意境深远。园中池岸茶亭、蓬莱石组为全园观景的两处绝佳位置，其中“池”也是“海”的缩影，通过护岸石组来表现海岸景观。从水池的东侧到南侧，再现海滩景观，包括“石滩”和“岩岛”。龟、鹤双岛都具有吉祥长寿的主题寓意，而石滩的延伸过渡到了西南方向的枯山水石组，用于砂的造型和砂与景石的艺术展示空间，同时寓意大海的无限及形式的多变。在庭园中最高的地点，设置了一座3.5米高表示“须弥”（蓬莱）的石组，“须弥”和“蓬莱”都代表着仙境，通过攀爬枯瀑石组到达，预示着积极向上的生活态度。\n你能根据描述，找到“蓬莱石组”嘛？为它拍一张照片上传吧～",
        "promptImageUrls": ["./img/scene_4/task_2.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-4-t2",
        "order": 2
      },
      {
        "type": "choice",
        "title": "竹境园的诗情画意",
        "promptText": "竹境园以诗画中的东方韵味为文化内核，由清幽竹径、萱草坡地、竹影清晖和竹林七贤四个节点串联游览路线，以丰富多样的竹子品种为基调，搭配松树、梅花和萱草等植物，在曲径通幽中品味传统东方美学。\n请你来到图中竹林围绕的小屋前，哪句诗句最符合你当下的心境？\nA. 疏影横斜水清浅，暗香浮动月黄昏\nB. 独坐幽篁里，弹琴复长啸\nC. 竹喧归浣女，莲动下渔舟\nD. 曲径通幽处，禅房花木深",
        "promptImageUrls": ["./img/scene_4/task_3.png"],
        "options": ["A. 疏影横斜水清浅，暗香浮动月黄昏", "B. 独坐幽篁里，弹琴复长啸", "C. 竹喧归浣女，莲动下渔舟", "D. 曲径通幽处，禅房花木深"],
        "validation": { "required": true, "mode": "exact", "answer": "D", "normalize": "trimSpaces" },
        "feedback": { "correctText": "答对啦！", "wrongText": "再想想～" },
        "reward": { "stars": 1 },
        "id": "level-4-t3",
        "order": 3
      },
      {
        "type": "upload",
        "title": "捕捉新境园的蝴蝶",
        "promptText": "新境园位于世界花艺园的北部，以绚丽多姿的花境组合为主要造景要素，花瀑、花径、花溪、花海融汇衔接，带给大家强烈的视觉冲击。居于核心位置的七个花瓣形构架，撑起整片花园的竖向骨架空间，同时与层次丰富的组团花境前后辉映，共同营造了梦游仙境般的花园之境。\n请你也为图中的蝴蝶拍一张照片吧～",
        "promptImageUrls": ["./img/scene_4/task_4.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-4-t4",
        "order": 4
      },
      {
        "type": "input",
        "title": "登高台地园",
        "promptText": "台地园以中轴对称式的扇形台地展开设计，以整形绿篱、自然花境结合人文雕塑水景为主要景观要素。场地最高处的八角亭廊与对面草坪上简欧式凉亭形成轴线景观，在东方杉、欧洲鹅耳枥、金叶榆等组成的高大背景林的掩映之下，模拟欧式台地花园的特色景观风貌。\n请你以扇形台地的最低处作为起点，向八角亭廊走去。沿途你迈过了多少级台阶？",
        "promptImageUrls": ["./img/scene_4/task_5.png"],
        "input": { "placeholder": "请输入答案", "inputMode": "numeric" },
        "validation": { "required": true, "mode": "exact", "answer": "36", "normalize": "extractNumber" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-4-t5",
        "order": 5
      }
    ],
    "bonusTasks": [
      {
        "type": "input",
        "bonusType": "challenge",
        "title": "默契大挑战",
        "promptText": "在上述你参观的游园中，你最喜欢哪一个？请填在这里，并让对方猜一猜吧～",
        "input": { "placeholder": "请输入你最喜欢的游园", "inputMode": "text" },
        "validation": { "required": false, mode: "alwaysTrue" },
        "promptImageUrls": [],
        "id": "level-4-t6",
        "order": 6
      }
    ]
  },
  {
    "id": "level-5",
    "order": 5,
    "title": "世博文化公园-上海温室花园",
    "coverImageUrl": "./img/scene_5/cover.png",
    "shortDesc": "沉浸式探访三大生态温室，在“海市沙洲”、“云上森林”和“云雾峡谷”中感受热带奇观。",
    "longDesc": "上海温室花园位于上海世博文化公园中心位置，紧邻中心湖，背靠双子山，占地约2.2万平方米，是集观赏游览、休闲娱乐为一体的多功能生态综合体。它由1个游客服务中心和1号馆海市沙洲、2号馆云上森林和3号馆云雾峡谷等三大主题场馆组成。\n三大主题场馆是根据植物的生境进行分类设置，结合建筑的空间结构，择取世界生态系统中的典型生态片段，打造热带干旱、热带湿生耐荫、热带湿生喜阳三种环境类型，分别展示热带干旱植物、热带雨林植物与热带花卉植物。展示形式上力求表现植物到“博物+文化”的延展，从而打造好看、好玩的沉浸式展览温室。",
    "navigationHint": "本关限时开放，而且有神秘奖励！完成全部任务后解锁噢～",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-4" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "探访干旱生态“海市沙洲”",
        "promptText": "“海市沙洲”占地面积3033平方米，模拟了炎热干旱地区的生态环境，以山体为中心，打造山、谷、洞、沙洲四大地貌空间，以“变异的叶”为植物主题，展现刺状叶、肉质叶、膨大茎等沙洲植物特有的特征。同时，融合多媒体影像技术，形成亦真亦幻的沙洲海市，使人感受干旱地区自然的变幻与植物演化，体会生命的顽强。\n请你在“海市沙洲”留下一张最喜欢的照片，并放在这里吧～",
        "promptImageUrls": ["./img/scene_5/task_1.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-5-t1",
        "order": 1
      },
      {
        "type": "upload",
        "title": "漫步雨林“云上森林”",
        "promptText": "“云上森林”是上海温室花园中的一个主题场馆，占地面积4207平方米，模拟热带雨林环境，以“会呼吸的根”为植物主题，设有水上森林、水底森林、雾隐森林、鹿角森林四大景观空间，重点展示板根、支柱根、气生根等热带雨林植物特有的根系奇观。\n请你在“云上森林”留下一张最喜欢的照片，并放在这里吧～",
        "promptImageUrls": ["./img/scene_5/task_2.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-5-t2",
        "order": 2
      },
      {
        "type": "upload",
        "title": "邂逅花卉天堂“云雾峡谷”",
        "promptText": "“云雾峡谷”是上海温室花园的主题场馆之一，占地面积8037㎡，模拟热带花卉植物环境，以“空中的花”为设计主题，通过凝萃桥、台、峡、谷的空间特征，打造了“空中花园、棕榈花溪、幽峡寻兰、云栖花谷”四大景观空间，集中展示地生、树上、空中等不同形态的热带奇花异卉，让游客体验生命的多彩与绚烂。\n请你在“云雾峡谷”留下一张最喜欢的照片，并放在这里吧～",
        "promptImageUrls": ["./img/scene_5/task_3.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-5-t3",
        "order": 3
      }
    ],
    "bonusTasks": [
      {
        "type": "bonus",
        "bonusType": "reward",
        "title": "JingleJungle叮当丛林",
        "promptText": "走了这么久，是时候来点隐藏奖励啦！出口/入口处有一处“叮当丛林”，请你找到它。一杯特调或是一件纪念品？It's my treat~",
        "promptImageUrls": ["./img/scene_5/bonus.png"],
        "id": "level-5-t4",
        "order": 4
      }
    ]
  },
  {
    "id": "level-6",
    "order": 6,
    "title": "世博文化公园-双子山",
    "coverImageUrl": "./img/scene_6/cover.png",
    "shortDesc": "登顶国内首座空腔结构人工山林，在山巅俯瞰中心湖，寻找地标答案。",
    "longDesc": "双子山位于公园东南侧，占地达30万平方米，由48米高的主峰和37米高的次峰组成，山体种植7000多棵乔木，山体内部采用空腔结构，设置展厅、停车库、变电站等功能设施，是国内第一座高度超过40米的空腔结构人工仿自然山林。",
    "navigationHint": "此关卡为限时开放，请注意时间安排噢～",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-5" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "input",
        "title": "数桥孔",
        "promptText": "在双子山上眺望中心湖上的桥，请你数一数：它的主体有几个孔洞呢？",
        "promptImageUrls": [],
        "input": { "placeholder": "请输入答案", "inputMode": "numeric" },
        "validation": { "required": true, "mode": "exact", "answer": "11", "normalize": "extractNumber" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-6-t1",
        "order": 1
      },
      {
        "type": "input",
        "title": "寻主峰海拔",
        "promptText": "双子山主峰的海拔为多少？注意单位名称噢～(提示：请你来到这处地标前寻找答案吧～)",
        "promptImageUrls": ["./img/scene_6/task_2.png"],
        "input": { "placeholder": "请输入答案", "inputMode": "text" },
        "validation": { "required": true, "mode": "exact", "answer": "4800cm", "normalize": "trimSpaces" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-6-t2",
        "order": 2
      },
      {
        "type": "upload",
        "title": "双子山留念",
        "promptText": "请你们挑选一处风景优美的地方，合照留念一下吧～",
        "promptImageUrls": [],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "id": "level-6-t3",
        "order": 3
      }
    ],
    "bonusTasks": []
  },
  {
    "id": "level-7",
    "order": 7,
    "title": "世博文化公园-世博花园",
    "coverImageUrl": "./img/scene_7/cover.png",
    "shortDesc": "漫步世博记忆花园，在时光印记大道和保留展馆中，感受从工业时代到生态文明的演进。",
    "longDesc": "世博花园位于公园北部核心景区，面积约7.2公顷，依托上海世博会四个保留场馆，以樱花环道串联精致花园、海棠花甸等景观，通过自然与文化的融合展示世博记忆。园内集中呈现各类春花植物，1公顷中心草坪四周分布有欧洲风情的精致花园、西南侧的百米紫藤长廊、北侧的白玉兰花林，形成以春花为特色的游览胜地。",
    "navigationHint": "从双子山离开后，一路向北走，就能找到世博花园啦！注意“时光印记大道”是东西走向的，不要错过了噢～",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-6" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "时光印记大道",
        "promptText": "时光印记大道是一条长约400米的线性花园，以“时间线”为设计理念，自东向西分为三段，依次展示公园所在场地的历史变迁：从钢铁工业时期到世博会时期，再演变至世博文化公园时期，体现了从工业时代到生态文明时代的演进历程。该设计将历史叙事与游憩功能相结合，打造出既可游览、又可驻足休憩的开放式花园空间。\n请你们找到图中的两幅场景，选择对方更喜欢的一处，并为对方拍一张照片吧～",
        "promptImageUrls": ["./img/scene_7/task_1a.png", "./img/scene_7/task_1b.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-7-t1",
        "order": 1
      },
      {
        "type": "input",
        "title": "原法国馆",
        "promptText": "法国馆的设计主题为“感性城市”，灵感来源于“雅致的生活态度”，通过视觉、触觉、听觉、嗅觉和味觉相交融的“五感”之旅，欣赏关于城市和生活艺术的法式风情。展馆建筑为钢制细网结构，被线网素裹“肌体”，仿佛悬于浅水之上的“白色宫殿”，尽显未来色彩和水韵之美。馆内为纯正法式庭院，通过游线一侧巨型影像幕墙，演绎法国城市印象。顶层法式餐厅和屋顶花园，在享受法国餐饮文化精致与浪漫的同时，浦江美景尽收眼底。\n若时间允许，请在此处驻足，在下方填写你最喜欢的一件作品～",
        "promptImageUrls": ["./img/scene_7/task_2.png"],
        "input": { "placeholder": "你最喜欢哪一件作品呢？写在这里吧～", "inputMode": "text" },
        "validation": { "required": false, "mode": "alwaysTrue" },
        "reward": { "stars": 1 },
        "id": "level-7-t2",
        "order": 2
      },
      {
        "type": "input",
        "title": "原卢森堡馆",
        "promptText": "卢森堡馆的设计主题为____(4个字)，灵感来自于“卢森堡”在中文里“森林和堡垒”含义的联想。展馆建筑材料全部采用钢、木头和玻璃等可回收材料，体现出环保、高效、可持续的当代理念。展馆天台花园上，融入了浮萍、园林、篱笆等元素，不仅给游客带来清凉的惬意，也展示了卢森堡人的无限创意。\n提示：请参考馆外的题字～",
        "promptImageUrls": ["./img/scene_7/task_3.png"],
        "input": { "placeholder": "请输入答案", "inputMode": "text" },
        "validation": { "required": true, "mode": "exact", "answer": "亦小亦美", "normalize": "trimSpaces" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-7-t3",
        "order": 3
      }
    ],
    "bonusTasks": []
  },
  {
    "id": "level-8",
    "order": 8,
    "title": "世博文化公园-申园",
    "coverImageUrl": "./img/scene_8/cover.png",
    "shortDesc": "步入经典的江南园林，在“醉红映霞”、“古柯晚渡”等八景中，领略咫尺山林的东方美学意境。",
    "longDesc": "申园是上海世博文化公园中独具江南园林文化特色的园中园，总占地达5公顷。园内摄山理水、筑房建桥，总体规划形成北山、南水、东园、西苑的空间布局，山环水抱之中的建筑群落呈现明清时期江南传统园林风格。申园着力构筑醉红映霞、古柯晚渡、玉堂春满、松石泉流、曲韵天香、烟雨蓬莱、秋江落照、荷风鱼乐八景，在现代时空里，营造一座经典的江南园林，表现江南之态，传达江南之魂。咫尺山林，创一代沪上新名园、中国园林新典范。",
    "navigationHint": "从原卢森堡馆出来后向西行走就能找到申园啦！傍晚游园更有一番风味噢～",
    "unlock": { "type": "afterScenePassed", "sceneId": "level-7" },
    "passRule": { "type": "anyTaskCompleted" },
    "tasks": [
      {
        "type": "upload",
        "title": "古柯晚渡",
        "promptText": "古柯晚渡位于玉兰馆门口临近的水岸边，景象以古柯、石矶和湖面景观为主。通过参天古木强化宅院的历史感，石矶码头暗含了传统江南水乡临水而居的生活模式。于此同时周围水面较开阔，傍晚时分云霞倒映水面，又多了一重晚渡的心理景观。\n请你也以古柯、石矶和湖面为意象，拍一张照片吧～",
        "promptImageUrls": ["./img/scene_8/task_1.png"],
        "validation": { "required": true, "accept": ["image/*"], "mode": "file-selected" },
        "reward": { "stars": 1 },
        "id": "level-8-t1",
        "order": 1
      },
      {
        "type": "input",
        "title": "寻景问雅名",
        "promptText": "请你找到此处景观，你知道此景的雅名嘛？提示：四个字，可结合“申园”的介绍～",
        "promptImageUrls": ["./img/scene_8/task_2.png"],
        "input": { "placeholder": "请输入答案", "inputMode": "text" },
        "validation": { "required": true, "mode": "exact", "answer": "松石泉流", "normalize": "trimSpaces" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-8-t2",
        "order": 2
      },
      {
        "type": "input",
        "title": "烟雨蓬莱",
        "promptText": "烟雨蓬莱位于园林西侧丹枫湖一带，整体自然飘逸，只一湖一楼一轩尔。丹枫湖上有三岛，分别为“蓬莱”、“方丈”和“____”，传承中国传统园林中一池三山的做法。湖边楼名“烟雨楼”——是对江南地域特色风景“杏花春雨”的写照，依山傍水，登高望远，湖畔秋叶风景尽收眼底。\n提示：“一池三山”",
        "promptImageUrls": ["./img/scene_8/task_3.png"],
        "input": { "placeholder": "请输入答案", "inputMode": "text" },
        "validation": { "required": true, "mode": "exact", "answer": "瀛洲", "normalize": "trimSpaces" },
        "feedback": { "correctText": "正确！", "wrongText": "不对哦，再试试～" },
        "reward": { "stars": 1 },
        "id": "level-8-t3",
        "order": 3
      }
    ],
    "bonusTasks": [
      {
        "type": "bonus",
        "bonusType": "reward",
        "title": "申园文创",
        "promptText": "一日行程即将接近尾声，请你在申园内找到文创店，并挑选一件纪念品吧！It's on me~",
        "promptImageUrls": ["./img/scene_8/bonus.png"],
        "id": "level-8-t4",
        "order": 4
      }
    ]
  }
].sort((a, b) => a.order - b.order);

function now(){ return Date.now(); }

function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return { startedAt:null, endedAt:null, scenes:{} };
  try{
    const parsed = JSON.parse(raw);

    // Backward-compat migration:
    // Earlier versions stored photo previews (DataURL) inside localStorage (slot.fileDataUrl / slot.fileThumbDataUrl).
    // This can easily exceed browser quota and break progress saving.
    // Newer versions store photos as Blobs in IndexedDB and keep localStorage tiny.
    // To *avoid any upload/save failures*, we proactively strip any legacy DataURLs from the state.
    if(parsed?.scenes){
      for(const sceneId of Object.keys(parsed.scenes)){
        const sc = parsed.scenes[sceneId];
        if(!sc?.tasks) continue;
        for(const taskId of Object.keys(sc.tasks)){
          const slot = sc.tasks[taskId];
          if(!slot) continue;
          // remove heavy fields to prevent quota issues
          if(slot.fileThumbDataUrl) delete slot.fileThumbDataUrl;
          if(slot.fileDataUrl) delete slot.fileDataUrl;
        }
      }
    }
    return parsed;
  }catch(e){
    return { startedAt:null, endedAt:null, scenes:{} };
  }
}
function saveState(s){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    return true;
  }catch(e){
    console.error("Failed to save state (possibly storage quota exceeded).", e);
    return false;
  }
}

function initStateIfNeeded(){
  const s = loadState();
  if(!s.scenes) s.scenes = {};
  for(const scene of scenes){
    if(!s.scenes[scene.id]){
      s.scenes[scene.id] = {
        unlocked: scene.unlock?.type === "always",
        tasks: {},
        bonus: { done:false, updatedAt:null, values:{} }
      };
    }
    // backward compatible: ensure bonus container exists
    if(!s.scenes[scene.id].bonus) s.scenes[scene.id].bonus = { done:false, updatedAt:null, values:{} };
    if(typeof s.scenes[scene.id].bonus.values !== "object" || s.scenes[scene.id].bonus.values === null){
      s.scenes[scene.id].bonus.values = {};
    }
    for(const t of (scene.tasks||[])){
      if(!s.scenes[scene.id].tasks[t.id]){
        s.scenes[scene.id].tasks[t.id] = { done:false, value:null, fileThumbDataUrl:null, fileImageId:null, fileDataUrl:null, updatedAt:null };
      }
    }
  }
  if(!s.startedAt) s.startedAt = now();
  saveState(s);
  return s;
}

function normalizeInput(val, mode){
  const v = (val ?? "").toString();
  if(mode === "trimSpaces") return v.replace(/\s+/g,"").trim();
  if(mode === "extractNumber") {
    const m = v.match(/-?\d+(\.\d+)?/);
    return m ? m[0] : "";
  }
  return v.trim();
}

function evaluateTask(task, userValue){
  const v = task.validation || {};
  if(v.mode === "alwaysTrue") return true;
  if(task.type === "upload") return !!userValue;
  if(task.type === "choice" || task.type === "input") {
    const norm = v.normalize ? normalizeInput(userValue, v.normalize) : (userValue ?? "").toString().trim();
    const ans = v.normalize ? normalizeInput(v.answer, v.normalize) : (v.answer ?? "").toString().trim();
    if(v.mode === "exact") return norm === ans;
    if(v.mode === "match" && v.match === "contains") return norm.includes(ans);
    return norm === ans;
  }
  return false;
}

function starsForScene(state, sceneId){
  const sc = state.scenes[sceneId];
  if(!sc) return 0;
  const scene = scenes.find(x=>x.id===sceneId);
  let done = 0;
  for(const t of (scene.tasks||[])) if(sc.tasks?.[t.id]?.done) done += 1;
  return done;
}

function isScenePassed(state, scene){
  const rule = scene.passRule?.type || "anyTaskCompleted";
  if(rule === "anyTaskCompleted") return starsForScene(state, scene.id) >= 1;
  if(rule === "allTasksCompleted") return starsForScene(state, scene.id) >= (scene.tasks?.length||0);
  return starsForScene(state, scene.id) >= 1;
}

function isSceneAllTasksDone(state, scene){
  const total = (scene.tasks||[]).length;
  if(total === 0) return true;
  return starsForScene(state, scene.id) >= total;
}

function hasBonus(scene){ return !!(scene.bonusTasks && scene.bonusTasks.length); }

function computeUnlocks(state){
  for(const scene of scenes){
    if(scene.unlock?.type === "always"){ state.scenes[scene.id].unlocked = true; continue; }
    if(scene.unlock?.type === "afterScenePassed") {
      const prev = scenes.find(x=>x.id===scene.unlock.sceneId);
      state.scenes[scene.id].unlocked = prev ? isScenePassed(state, prev) : false;
      continue;
    }
    state.scenes[scene.id].unlocked = false;
  }
}

function totalStars(state){ return scenes.reduce((a,s)=>a + starsForScene(state,s.id), 0); }
function maxStars(){ return scenes.reduce((a,s)=>a + (s.tasks?.length||0), 0); }
function formatDuration(ms){
  const sec = Math.max(0, Math.floor(ms/1000));
  const m = Math.floor(sec/60);
  const r = sec%60;
  return `${m}分${String(r).padStart(2,"0")}秒`;
}

/* Router */
function route(){
  const h = location.hash || "#/map";
  const m1 = h.match(/^#\/scene\/([^\/]+)$/);
  if(m1) return { name:"scene", id:m1[1] };
  const m2 = h.match(/^#\/bonus\/([^\/]+)$/);
  if(m2) return { name:"bonus", id:m2[1] };
  if(h.startsWith("#/summary")) return { name:"summary" };
  return { name:"map" };
}

/* Bottom Sheet */
const sheet = document.getElementById("sheet");
const sheetBackdrop = document.getElementById("sheetBackdrop");
const sheetContent = document.getElementById("sheetContent");
document.getElementById("sheetClose").addEventListener("click", closeSheet);
sheetBackdrop.addEventListener("click", closeSheet);

function openSheet(html){
  sheetContent.innerHTML = html;
  sheetBackdrop.classList.remove("hidden");
  sheet.classList.remove("hidden");
  sheetBackdrop.setAttribute("aria-hidden", "false");
}
function closeSheet(){
  sheetBackdrop.classList.add("hidden");
  sheet.classList.add("hidden");
  sheetBackdrop.setAttribute("aria-hidden", "true");
}

/* Render */
function render(){
  if(typeof revokePreviewObjectUrls === 'function') revokePreviewObjectUrls();
  const state = initStateIfNeeded();
  computeUnlocks(state);
  saveState(state);

  const r = route();
  if(r.name === "map") return renderMap(state);
  if(r.name === "scene") return renderScene(state, r.id);
  if(r.name === "bonus") return renderBonus(state, r.id);
  if(r.name === "summary") return renderSummary(state);
}

function layoutHeader(title, rightHtml=""){
  return `
    <div class="header">
      <div><h1>${escapeHtml(title)}</h1></div>
      <div>${rightHtml}</div>
    </div>
  `;
}
function renderStars(stars, max){
  const filled = "★".repeat(stars);
  const empty = "☆".repeat(Math.max(0, max-stars));
  return `${filled}<span class="empty">${empty}</span>`;
}

function renderMap(state){
  const app = document.getElementById("app");
  const total = totalStars(state);
  const max = maxStars();
  const pct = max ? Math.round((total/max)*100) : 0;
  const unlockedCount = scenes.filter(s=>state.scenes[s.id].unlocked).length;

  app.innerHTML = `
    ${layoutHeader("City Walk 闯关", `<button class="iconBtn" id="resetBtn" title="重置进度">↺</button>`)}
    <div class="card">
      <div class="row spaceBetween">
        <div class="badges">
          <span class="badge">总星：${total}/${max}</span>
          <span class="badge badgeMuted">已解锁：${unlockedCount}/${scenes.length}</span>
        </div>
        <small>${pct}%</small>
      </div>
      <div style="height:10px"></div>
      <div class="progressBar"><div style="width:${pct}%"></div></div>
      <p class="muted" style="margin-top:10px">点击关卡查看预览；完成任务会点亮星星并解锁后续关卡。</p>
    </div>

    <div class="timeline">
      ${scenes.map((scene, idx) => {
        const unlocked = state.scenes[scene.id].unlocked;
        const stars = starsForScene(state, scene.id);
        const done = (scene.tasks?.length||0) ? (stars === scene.tasks.length) : true;
        const bonusAvailable = hasBonus(scene);
        const bonusDone = state.scenes[scene.id]?.bonus?.done;
        const bonusBadge = bonusAvailable ? `<span class="badge ${bonusDone ? "" : "badgeMuted"}">${bonusDone ? "挑战/奖励 已完成" : "有挑战/奖励"}</span>` : "";
        return `
          <div class="node" data-scene="${scene.id}">
            <div class="rail">
              <div class="dot ${!unlocked ? "locked" : (done ? "done" : "")}"></div>
              ${idx < scenes.length-1 ? `<div class="line"></div>` : ``}
            </div>
            <div class="nodeCard ${!unlocked ? "locked" : ""}">
              <img class="thumb" src="${escapeAttr(scene.coverImageUrl)}" alt="" />
              <div style="flex:1">
                <div class="row spaceBetween">
                  <div class="nodeTitle">第 ${scene.order} 关 · ${escapeHtml(scene.title)}</div>
                  <div class="stars">${renderStars(stars, scene.tasks?.length||0)}</div>
                </div>
                <div class="nodeMeta">${escapeHtml(scene.shortDesc || "")}</div>
                <div style="height:6px"></div>
                <div class="badges">${bonusBadge}</div>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <div class="footerBar">
      <div class="footerInner">
        <button class="btn btnGhost" id="goSummary">结束行程</button>
        <button class="btn btnPrimary" id="continueBtn">继续下一关</button>
      </div>
    </div>
  `;

  document.getElementById("resetBtn").onclick = () => {
    localStorage.removeItem(STORAGE_KEY);
    location.hash = "#/map";
    render();
  };
  document.getElementById("goSummary").onclick = () => {
    const s = loadState();
    if(!s.endedAt) s.endedAt = now();
    saveState(s);
    location.hash = "#/summary";
  };

  app.querySelectorAll(".node").forEach(el=>{
    el.addEventListener("click", ()=>{
      const sceneId = el.getAttribute("data-scene");
      const scene = scenes.find(x=>x.id===sceneId);
      openScenePreview(state, scene);
    });
  });

  document.getElementById("continueBtn").onclick = ()=>{
    const unlockedScenes = scenes.filter(s=>state.scenes[s.id].unlocked);
    const target = unlockedScenes.find(s=>starsForScene(state, s.id) < (s.tasks?.length||0)) || unlockedScenes[unlockedScenes.length-1];
    if(target) openScenePreview(state, target, true);
  };
}

function openScenePreview(state, scene, autoEnter=false){
  const unlocked = state.scenes[scene.id].unlocked;
  const stars = starsForScene(state, scene.id);
  const total = scene.tasks?.length||0;
  const allDone = isSceneAllTasksDone(state, scene);
  const bonusAvailable = hasBonus(scene);
  const bonusDone = state.scenes[scene.id]?.bonus?.done;

  const lockedHint = (scene.unlock?.type === "afterScenePassed") ? `完成上一关任意一个任务即可解锁。` : `尚未解锁`;
  const btnText = unlocked ? "进入场景" : "未解锁";
  const btnDisabled = unlocked ? "" : "disabled";

  const bonusHtml = (unlocked && allDone && bonusAvailable)
    ? `<button class="btn btnGhost" id="openBonusBtn">${bonusDone ? "查看挑战/奖励" : "进入挑战/奖励"}</button>`
    : "";

  const html = `
    <img class="cover" src="${escapeAttr(scene.coverImageUrl)}" alt="" />
    <div style="height:10px"></div>
    <div class="row spaceBetween">
      <div>
        <div class="badge">第 ${scene.order} 关</div>
        <h2 style="margin-top:10px">${escapeHtml(scene.title)}</h2>
      </div>
      <div class="stars">${renderStars(stars, total)}</div>
    </div>
    <p class="muted">${escapeHtml(scene.shortDesc || "")}</p>
    <hr class="hr" />
    <p>${escapeHtml(scene.longDesc || "")}</p>
    <p class="muted">提示：${escapeHtml(scene.navigationHint || "—")}</p>
    ${!unlocked ? `<p class="muted">🔒 ${escapeHtml(lockedHint)}</p>` : ``}
    <div style="height:12px"></div>
    <button class="btn btnPrimary" id="enterSceneBtn" ${btnDisabled}>${escapeHtml(btnText)}</button>
    <div style="height:10px"></div>
    ${bonusHtml}
  `;
  openSheet(html);

  const enterBtn = document.getElementById("enterSceneBtn");
  if(enterBtn){
    enterBtn.onclick = ()=>{ closeSheet(); location.hash = `#/scene/${scene.id}`; };
    if(autoEnter && unlocked) enterBtn.click();
  }
  const bonusBtn = document.getElementById("openBonusBtn");
  if(bonusBtn){
    bonusBtn.onclick = ()=>{ closeSheet(); location.hash = `#/bonus/${scene.id}`; };
  }
}

function renderScene(state, sceneId){
  const app = document.getElementById("app");
  const scene = scenes.find(s=>s.id === sceneId);
  if(!scene){ location.hash = "#/map"; return; }
  if(!state.scenes[scene.id].unlocked){ location.hash = "#/map"; return; }

  const stars = starsForScene(state, scene.id);
  const total = scene.tasks?.length||0;
  const pct = total ? Math.round((stars/total)*100) : 100;

  app.innerHTML = `
    <div class="row spaceBetween" style="margin-bottom:12px">
      <button class="iconBtn" id="backBtn">← 返回</button>
      <div class="badge">第 ${scene.order} 关</div>
      <button class="iconBtn" id="toSummaryBtn">总结</button>
    </div>

    <div class="card">
      <img class="cover" src="${escapeAttr(scene.coverImageUrl)}" alt="" />
      <div style="height:10px"></div>
      <div class="row spaceBetween">
        <h2 style="margin:0">${escapeHtml(scene.title)}</h2>
        <div class="stars">${renderStars(stars, total)}</div>
      </div>
      <p class="muted">${escapeHtml(scene.shortDesc || "")}</p>
      <p>${escapeHtml(scene.longDesc || "")}</p>
      <p class="muted">提示：${escapeHtml(scene.navigationHint || "—")}</p>
    </div>

    <div class="card" style="margin-top:12px">
      <div class="row spaceBetween">
        <div class="badge badgeMuted">本关进度：${stars}/${total}</div>
        <small>${pct}%</small>
      </div>
      <div style="height:10px"></div>
      <div class="progressBar"><div style="width:${pct}%"></div></div>
      <p class="muted" style="margin-top:10px">完成任意一个任务即可解锁下一关；全部任务完成后会自动进入「挑战/奖励」页（如果该关有）。</p>
    </div>

    <div id="tasks"></div>

    <div class="footerBar">
      <div class="footerInner">
        <button class="btn btnGhost" id="saveExitBtn">保存并退出</button>
        <button class="btn btnPrimary" id="nextBtn">去下一关</button>
      </div>
    </div>
  `;

  document.getElementById("backBtn").onclick = ()=>{ location.hash = "#/map"; };
  document.getElementById("saveExitBtn").onclick = ()=>{ location.hash = "#/map"; };
  document.getElementById("toSummaryBtn").onclick = ()=>{
    const s = loadState();
    if(!s.endedAt) s.endedAt = now();
    saveState(s);
    location.hash = "#/summary";
  };

  renderTasks(state, scene);
  hydrateImagePreviews(document.getElementById('app'));

  document.getElementById("nextBtn").onclick = ()=>{
    const idx = scenes.findIndex(s=>s.id===scene.id);
    const next = scenes[idx+1];
    if(next && state.scenes[next.id].unlocked) location.hash = `#/scene/${next.id}`;
    else location.hash = "#/map";
  };
}

function renderTasks(state, scene){
  const tasksWrap = document.getElementById("tasks");
  const list = scene.tasks || [];
  tasksWrap.innerHTML = list.map(task=>{
    const saved = state.scenes[scene.id].tasks[task.id];
    const done = !!saved.done;
    return `
      <div class="taskCard" data-task="${task.id}">
        <div class="taskTop">
          <div>
            <div class="taskTitle">${escapeHtml(task.title || "任务")}</div>
            <p class="muted" style="margin-top:6px">${escapeHtml(task.promptText || "")}</p>
          </div>
          <div class="taskStatus ${done ? "done": ""}">${done ? "已完成 ✅" : "未完成"}</div>
        </div>

        ${task.promptImageUrls && task.promptImageUrls.length ? `
          <div class="previewGrid">
            ${task.promptImageUrls.map(u=>`<img src="${escapeAttr(u)}" alt="" />`).join("")}
          </div>
        ` : ``}

        <div style="height:10px"></div>
        ${renderTaskInput(task, saved)}
        <div style="height:10px"></div>
        <div class="row gap8">
          <button class="btn btnPrimary" data-action="submit">提交</button>
          <button class="btn btnGhost" data-action="clear">清空</button>
        </div>
        <div class="muted" data-role="feedback" style="margin-top:10px"></div>
      </div>
    `;
  }).join("");

  tasksWrap.querySelectorAll(".taskCard").forEach(card=>{
    const taskId = card.getAttribute("data-task");
    const task = (scene.tasks||[]).find(t=>t.id===taskId);
    const feedbackEl = card.querySelector('[data-role="feedback"]');

    card.querySelector('[data-action="clear"]').onclick = async ()=>{
  const st = loadState();
  const prev = st.scenes[scene.id].tasks[taskId];
  if(prev?.fileImageId){
    await deleteImageBlob(prev.fileImageId);
  }
  st.scenes[scene.id].tasks[taskId] = { done:false, value:null, fileThumbDataUrl:null, fileImageId:null, fileDataUrl:null, updatedAt: now() };
  const okSave = saveState(st);
  if(!okSave){
    alert("保存失败：可能是浏览器存储空间不足。建议删除部分任务照片后重试，或在浏览器设置中清理站点数据后重新开始。");
  }
  render();
};

    card.querySelector('[data-action="submit"]').onclick = async ()=>{
      const st = loadState();
      const slot = st.scenes[scene.id].tasks[taskId];

      let userValue = null;
      let fileDataUrl = null;

      if(task.type === "upload") {
        const input = card.querySelector('input[type="file"]');
        const file = input?.files?.[0];
        if(!file){ feedbackEl.textContent = "请先选择一张图片。"; return; }

        // Store image Blob in IndexedDB. Keep localStorage state small to avoid quota failures.
        if(slot.fileImageId){ await deleteImageBlob(slot.fileImageId); }
        const imageId = makeImageId(taskId);
        const stored = await putImageBlob(imageId, file);
        if(stored){
          slot.fileImageId = imageId;
        }else{
          // If IndexedDB fails, we still allow completing the task (but preview won't persist).
          slot.fileImageId = null;
        }

        fileDataUrl = null;
        userValue = file.name || "image";
      } else if(task.type === "choice") {
        const checked = card.querySelector('input[type="radio"]:checked');
        userValue = checked ? checked.value : "";
      } else {
        const input = card.querySelector('input[type="text"], input[type="number"]');
        userValue = input ? input.value : "";
      }

      const ok = evaluateTask(task, userValue);

      if(ok) {
        slot.done = true;
        slot.value = userValue;
        // Previews are not stored in localStorage to avoid quota issues.
        slot.fileThumbDataUrl = null;
        slot.fileDataUrl = null;
        slot.updatedAt = now();
        st.scenes[scene.id].tasks[taskId] = slot;

        computeUnlocks(st);
        const okSave = saveState(st);
        if(!okSave){
          feedbackEl.textContent = "完成 ✅（但保存失败：可能是浏览器存储空间不足）";
          return;
        }

        feedbackEl.textContent = task.feedback?.correctText || "完成 ✅";

        const currentScene = scenes.find(x=>x.id===scene.id);
        const allDone = isSceneAllTasksDone(st, currentScene);
        if(allDone && hasBonus(currentScene) && !st.scenes[scene.id].bonus?.done) {
          location.hash = `#/bonus/${scene.id}`;
          return;
        }
        render();
      } else {
        slot.done = false;
        slot.value = userValue;
        slot.updatedAt = now();
        st.scenes[scene.id].tasks[taskId] = slot;
        saveState(st);
        feedbackEl.textContent = task.feedback?.wrongText || "答案不对，再试试～";
      }
    };
  });
}

function renderTaskInput(task, saved){
  if(task.type === "upload") {
    const legacyPreviewSrc = saved.fileThumbDataUrl || saved.fileDataUrl;
    const hasLegacyPreview = !!legacyPreviewSrc;
    const hasBlob = !!saved.fileImageId;
    return `
      <input class="input" type="file" accept="image/*" />
      ${hasBlob ? `
        <div class="previewGrid" style="margin-top:10px">
          <img data-image-id="${escapeAttr(saved.fileImageId)}" alt="预览" />
        </div>
      ` : (hasLegacyPreview ? `
        <div class="previewGrid" style="margin-top:10px">
          <img src="${escapeAttr(legacyPreviewSrc)}" alt="预览" />
        </div>
      `: `<div class="muted">提示：选择图片后点击提交即可完成。</div>`)}
    `;
  }
  if(task.type === "choice") {
    const opts = task.options || ["A","B","C","D"];
    return `
      <div class="radioGroup">
        ${opts.map(o=>{
          const m = o.match(/^([A-D])/);
          const val = m ? m[1] : o;
          return `
            <label class="radioOpt">
              <input type="radio" name="${escapeAttr(task.id)}" value="${escapeAttr(val)}" ${saved.value===val?"checked":""}/>
              <span>${escapeHtml(o)}</span>
            </label>
          `;
        }).join("")}
      </div>
    `;
  }
  const mode = task.input?.inputMode || "text";
  const placeholder = task.input?.placeholder || "请输入";
  return `<input class="input" type="text" inputmode="${escapeAttr(mode)}" placeholder="${escapeAttr(placeholder)}" value="${escapeAttr(saved.value || "")}" />`;
}

function renderBonusTaskInput(bt, savedValue){
  if(bt.type !== "input") return "";
  const mode = bt.input?.inputMode || "text";
  const placeholder = bt.input?.placeholder || "请输入";
  return `
    <div style="height:10px"></div>
    <input class="input" id="bonus-input-${escapeAttr(bt.id)}" type="text" inputmode="${escapeAttr(mode)}" placeholder="${escapeAttr(placeholder)}" value="${escapeAttr(savedValue || "")}" />
  `;
}

function renderBonus(state, sceneId){
  const app = document.getElementById("app");
  const scene = scenes.find(s=>s.id===sceneId);
  if(!scene){ location.hash="#/map"; return; }
  if(!state.scenes[scene.id].unlocked){ location.hash="#/map"; return; }
  if(!isSceneAllTasksDone(state, scene)){ location.hash = `#/scene/${scene.id}`; return; }

  const bonusTasks = scene.bonusTasks || [];
  if(!bonusTasks.length){ location.hash = `#/scene/${scene.id}`; return; }

  const alreadyDone = state.scenes[scene.id]?.bonus?.done;
  const savedBonusValues = state.scenes[scene.id]?.bonus?.values || {};

  app.innerHTML = `
    <div class="row spaceBetween" style="margin-bottom:12px">
      <button class="iconBtn" id="backSceneBtn">← 返回关卡</button>
      <div class="badge">${alreadyDone ? "挑战/奖励（已完成）" : "挑战/奖励"}</div>
      <button class="iconBtn" id="toMapBtn">主页面</button>
    </div>

    <div class="card">
      <h2 style="margin:0">${escapeHtml(scene.title)}</h2>
      <p class="muted">恭喜完成本关全部任务！下面是本关解锁的「挑战/奖励」。</p>
      <hr class="hr" />
      ${bonusTasks.map(bt=>{
        const typeText = bt.bonusType === "reward" ? "奖励" : "挑战";
        return `
          <div class="taskCard" style="margin-top:0">
            <div class="taskTop">
              <div>
                <div class="taskTitle">${escapeHtml(typeText)} · ${escapeHtml(bt.title || "")}</div>
                <p class="muted" style="margin-top:6px">${escapeHtml(bt.promptText || "")}</p>
              </div>
              <div class="taskStatus ${alreadyDone ? "done": ""}">${alreadyDone ? "已完成 ✅" : "待完成"}</div>
            </div>
            ${bt.promptImageUrls && bt.promptImageUrls.length ? `
              <div class="previewGrid">
                ${bt.promptImageUrls.map(u=>`<img src="${escapeAttr(u)}" alt="" />`).join("")}
              </div>
            ` : ``}
            ${renderBonusTaskInput(bt, savedBonusValues?.[bt.id])}
          </div>
        `;
      }).join("<div style='height:10px'></div>")}

      <div style="height:12px"></div>
      <div class="row gap8">
        <button class="btn btnPrimary" id="bonusDoneBtn">${alreadyDone ? "已完成" : "我已完成/领取 ✅"}</button>
        <button class="btn btnGhost" id="bonusLaterBtn">稍后再说</button>
      </div>
      <div id="bonusFeedback" class="muted" style="margin-top:10px"></div>
      <p class="muted" style="margin-top:10px">备注：挑战/奖励页不影响解锁进度噢～</p>
    </div>
  `;

  document.getElementById("backSceneBtn").onclick = ()=>{ location.hash = `#/scene/${scene.id}`; };
  document.getElementById("toMapBtn").onclick = ()=>{ location.hash = "#/map"; };
  document.getElementById("bonusLaterBtn").onclick = ()=>{ location.hash = "#/map"; };
  document.getElementById("bonusDoneBtn").onclick = ()=>{
    const st = loadState();
    // collect optional bonus input values
    const values = (st.scenes[scene.id].bonus && typeof st.scenes[scene.id].bonus.values === "object") ? st.scenes[scene.id].bonus.values : {};
    for(const bt of (scene.bonusTasks || [])){
      if(bt.type !== "input") continue;
      const el = document.getElementById(`bonus-input-${bt.id}`);
      const v = el ? (el.value || "").toString() : "";
      const required = !!bt.validation?.required;
      if(required && !v.trim()){
        const fb = document.getElementById("bonusFeedback");
        if(fb) fb.textContent = "请先填写内容再完成～";
        return;
      }
      values[bt.id] = v;
    }
    st.scenes[scene.id].bonus = { done:true, updatedAt: now(), values };
    saveState(st);
    location.hash = "#/map";
  };
}

function renderSummary(state){
  const app = document.getElementById("app");
  const endAt = state.endedAt || now();
  const dur = state.startedAt ? formatDuration(endAt - state.startedAt) : "—";
  const total = totalStars(state);
  const max = maxStars();
  const pct = max ? Math.round((total/max)*100) : 0;

  const title = pct >= 85 ? "城市观察家" : (pct >= 55 ? "路线闯关者" : "随性漫游者");

  let best = scenes[0];
  let bestStars = -1;
  for(const s of scenes){
    const st = starsForScene(state, s.id);
    if(st > bestStars){ bestStars = st; best = s; }
  }

  app.innerHTML = `
    ${layoutHeader("总结", `<button class="iconBtn" id="backMap">←</button>`)}
    <div class="card">
      <div class="badges">
        <span class="badge">今日称号：${escapeHtml(title)}</span>
        <span class="badge badgeMuted">用时：${escapeHtml(dur)}</span>
      </div>
      <div style="height:10px"></div>
      <div class="row spaceBetween">
        <div class="badge">总星：${total}/${max}</div>
        <small>${pct}%</small>
      </div>
      <div style="height:10px"></div>
      <div class="progressBar"><div style="width:${pct}%"></div></div>

      <hr class="hr" />
      <div class="kv">
        <div class="item">
          <div class="label">完成关卡</div>
          <div class="value">${scenes.filter(s=>starsForScene(state, s.id) > 0).length}/${scenes.length}</div>
        </div>
        <div class="item">
          <div class="label">最佳关卡</div>
          <div class="value">${escapeHtml(best.title)} · ${bestStars}⭐</div>
        </div>
        <div class="item">
          <div class="label">挑战/奖励完成</div>
          <div class="value">${scenes.filter(s=>hasBonus(s) && state.scenes[s.id]?.bonus?.done).length}/${scenes.filter(hasBonus).length}</div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:12px">
      <h2>行程回忆卡</h2>
      <p class="muted">按关卡回顾你们的答案与照片。</p>
      <hr class="hr" />
      ${scenes.map(scene=>{
        const st = state.scenes[scene.id];
        const stars = starsForScene(state, scene.id);
        const doneText = stars ? `已获得 ${stars}/${scene.tasks?.length||0}⭐` : "未开始";
        const bonusDone = st?.bonus?.done;
        const bonusAvailable = hasBonus(scene);
        return `
          <div class="card" style="margin:12px 0; background:#f9fafb; box-shadow:none">
            <div class="row spaceBetween">
              <div><b>第 ${scene.order} 关 · ${escapeHtml(scene.title)}</b></div>
              <div class="stars">${renderStars(stars, scene.tasks?.length||0)}</div>
            </div>
            <div class="muted" style="margin-top:6px">${escapeHtml(doneText)} ${bonusAvailable ? ` · 挑战/奖励：${bonusDone?"✅":"—"}`:""}</div>
            <div style="height:8px"></div>
            ${(scene.tasks||[]).map(t=>{
              const slot = st?.tasks?.[t.id];
              const ok = slot?.done;
              const value = slot?.value;
              const imgData = slot?.fileThumbDataUrl || slot?.fileDataUrl;
              const imgId = slot?.fileImageId;
              return `
                <div style="padding:10px 10px; border:1px solid #e5e7eb; border-radius:14px; background:#fff; margin-top:8px">
                  <div class="row spaceBetween">
                    <div style="font-weight:650">${escapeHtml(t.title || "")}</div>
                    <div class="taskStatus ${ok ? "done": ""}">${ok ? "完成 ✅" : "未完成"}</div>
                  </div>
                  ${ok && t.type !== "upload" ? `<div class="muted" style="margin-top:6px">你的答案：${escapeHtml(String(value ?? ""))}</div>` : ``}
                  ${ok && t.type === "upload" && (imgId || imgData) ? `
                    <div class="previewGrid" style="margin-top:8px">
                      ${imgId ? `<img data-image-id="${escapeAttr(imgId)}" alt="上传照片" />` : `<img src="${escapeAttr(imgData)}" alt="上传照片" />`}
                    </div>
                  ` : (t.type==="upload" ? `<div class="muted" style="margin-top:6px">（本任务需要上传照片）</div>` : ``)}
                </div>
              `;
            }).join("")}
          </div>
        `;
      }).join("")}
    </div>

    <div class="footerBar">
      <div class="footerInner">
        <button class="btn btnGhost" id="restart">重新开始</button>
        <button class="btn btnPrimary" id="backToMapBtn">回到主页面</button>
      </div>
    </div>
  `;

  document.getElementById("backMap").onclick = ()=>{ location.hash = "#/map"; };
  document.getElementById("backToMapBtn").onclick = ()=>{ location.hash = "#/map"; };
  document.getElementById("restart").onclick = ()=>{
    localStorage.removeItem(STORAGE_KEY);
    location.hash = "#/map";
    render();
  };

  hydrateImagePreviews(document.getElementById('app'));
}



// ===== Preview helpers (ObjectURL) =====
let __previewObjectUrls = [];
function revokePreviewObjectUrls(){
  for(const u of __previewObjectUrls){
    try{ URL.revokeObjectURL(u); }catch(e){}
  }
  __previewObjectUrls = [];
}

async function getImageBlob(id){
  if(!id) return null;
  try{
    const db = await openImageDB();
    const res = await new Promise((resolve, reject)=>{
      const tx = db.transaction(IMAGE_STORE, "readonly");
      tx.onerror = ()=> reject(tx.error);
      const req = tx.objectStore(IMAGE_STORE).get(id);
      req.onsuccess = ()=> resolve(req.result || null);
      req.onerror = ()=> reject(req.error);
    });
    db.close();
    return res?.blob || null;
  }catch(e){
    return null;
  }
}

function hydrateImagePreviews(root=document){
  const imgs = Array.from(root.querySelectorAll('img[data-image-id]'));
  imgs.forEach(async (img)=>{
    const id = img.getAttribute('data-image-id');
    if(!id) return;
    const blob = await getImageBlob(id);
    if(!blob) return;
    const url = URL.createObjectURL(blob);
    __previewObjectUrls.push(url);
    img.src = url;
  });
}

// ===== End preview helpers =====
// ===== Image storage helpers (IndexedDB) =====
// We store full image Blobs in IndexedDB to avoid exceeding localStorage quota.
// In localStorage we only keep a small thumbnail DataURL for preview.

const IMAGE_DB_NAME = "citywalk_project_images_v1";
const IMAGE_STORE = "images";

function openImageDB(){
  return new Promise((resolve, reject)=>{
    if(!("indexedDB" in window)) return reject(new Error("IndexedDB not supported"));
    const req = indexedDB.open(IMAGE_DB_NAME, 1);
    req.onupgradeneeded = ()=>{
      const db = req.result;
      if(!db.objectStoreNames.contains(IMAGE_STORE)){
        db.createObjectStore(IMAGE_STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = ()=> resolve(req.result);
    req.onerror = ()=> reject(req.error);
  });
}

async function putImageBlob(id, fileOrBlob){
  try{
    const db = await openImageDB();
    await new Promise((resolve, reject)=>{
      const tx = db.transaction(IMAGE_STORE, "readwrite");
      tx.oncomplete = ()=> resolve();
      tx.onerror = ()=> reject(tx.error);
      tx.objectStore(IMAGE_STORE).put({ id, blob: fileOrBlob });
    });
    db.close();
    return true;
  }catch(e){
    // If IndexedDB fails, we still fall back to thumbnail-only storage.
    console.warn("IndexedDB put failed; falling back to no-persist preview.", e);
    return false;
  }
}

async function deleteImageBlob(id){
  if(!id) return;
  try{
    const db = await openImageDB();
    await new Promise((resolve, reject)=>{
      const tx = db.transaction(IMAGE_STORE, "readwrite");
      tx.oncomplete = ()=> resolve();
      tx.onerror = ()=> reject(tx.error);
      tx.objectStore(IMAGE_STORE).delete(id);
    });
    db.close();
  }catch(e){
    // ignore
  }
}

function makeImageId(taskId){
  // reasonably unique, small
  return `${taskId}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function createThumbnailDataUrl(file, maxDim = 1100, quality = 0.82){
  // Returns a small-ish JPEG DataURL for preview/storage. Falls back to original DataURL if conversion fails.
  try{
    // Prefer createImageBitmap when available (faster, less memory)
    let bitmap = null;
    if("createImageBitmap" in window){
      bitmap = await createImageBitmap(file);
    }

    let w, h;
    if(bitmap){
      w = bitmap.width; h = bitmap.height;
    }else{
      // fallback to HTMLImageElement
      const dataUrl = await readFileAsDataURL(file);
      const img = await new Promise((resolve, reject)=>{
        const im = new Image();
        im.onload = ()=> resolve(im);
        im.onerror = reject;
        im.src = dataUrl;
      });
      w = img.naturalWidth; h = img.naturalHeight;
      bitmap = img;
    }

    const scale = Math.min(1, maxDim / Math.max(w, h));
    const tw = Math.max(1, Math.round(w * scale));
    const th = Math.max(1, Math.round(h * scale));

    const canvas = document.createElement("canvas");
    canvas.width = tw;
    canvas.height = th;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0, tw, th);

    if(bitmap && bitmap.close) bitmap.close();

    // JPEG is usually much smaller than PNG for photos
    return canvas.toDataURL("image/jpeg", quality);
  }catch(e){
    return await readFileAsDataURL(file);
  }
}

// ===== End image helpers =====

function escapeHtml(str){
  return (str ?? "").toString()
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
}
function escapeAttr(str){ return escapeHtml(str); }

function readFileAsDataURL(file){
  return new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.onload = ()=> resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

window.addEventListener("hashchange", render);
if(!location.hash) location.hash = "#/map";
render();
