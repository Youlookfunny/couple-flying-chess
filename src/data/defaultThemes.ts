import { Theme, ThemeMode } from '../types';

const DEFAULT_THEME_MODES: ThemeMode[] = ['board', 'card', 'mineTheme'];

const MINE_MODE_THEMES: Theme[] = [
  {
    id: 'mine_truth_default',
    name: '扫雷真心话',
    desc: '扫雷模式专用真心话题库',
    audience: 'common',
    modes: ['mineTruth'],
    tasks: [
      { text: '说出最近一次因为对方心动的具体瞬间', executor: 'both', moveDelta: 0 },
      { text: '回答：你最希望对方今晚主动做的一件小事是什么？', executor: 'both', moveDelta: 0 },
      { text: '说出一个你平时不好意思开口表达的需求', executor: 'both', moveDelta: 0 },
      { text: '回答：对方哪个细节最容易让你失去抵抗力？', executor: 'both', moveDelta: 0 },
      { text: '说出一件你想和对方一起尝试、但还没说出口的事', executor: 'both', moveDelta: 0 },
      { text: '回答：如果今晚只能保留一个亲密动作，你会选什么？', executor: 'both', moveDelta: 0 },
      { text: '说出你最喜欢对方夸你的哪一句话', executor: 'both', moveDelta: 0 },
      { text: '回答：你希望下一次约会出现在哪个场景里？', executor: 'both', moveDelta: 0 },
      { text: '说出一个你觉得对方特别可爱的习惯', executor: 'both', moveDelta: 0 },
      { text: '回答：你最想被对方怎样哄开心？', executor: 'both', moveDelta: 0 }
    ]
  },
  {
    id: 'mine_dare_default',
    name: '扫雷大冒险',
    desc: '扫雷模式专用大冒险题库',
    audience: 'common',
    modes: ['mineDare'],
    tasks: [
      { text: '看着对方眼睛，用认真语气夸对方三个优点', executor: 'both', moveDelta: 0 },
      { text: '给对方一个不少于20秒的拥抱', executor: 'both', moveDelta: 0 },
      { text: '用手指在对方掌心写一句暗号，让对方猜', executor: 'both', moveDelta: 0 },
      { text: '让对方指定一个称呼，并用这个称呼说一句情话', executor: 'both', moveDelta: 0 },
      { text: '为对方按摩肩颈1分钟', executor: 'both', moveDelta: 0 },
      { text: '贴近对方耳边，用很轻的声音说一句喜欢', executor: 'both', moveDelta: 0 },
      { text: '和对方十指紧扣，保持30秒不说话', executor: 'both', moveDelta: 0 },
      { text: '模仿对方撒娇或害羞的样子', executor: 'both', moveDelta: 0 },
      { text: '让对方选择一个脸颊或额头亲吻', executor: 'both', moveDelta: 0 },
      { text: '把下一分钟的主动权交给对方安排', executor: 'both', moveDelta: 0 }
    ]
  }
];

const DEFAULT_THEME_SEEDS: Array<Omit<Theme, 'modes'> & { modes?: ThemeMode[] }> = [
  {
    "id": "sweet",
    "name": "甜蜜日常",
    "desc": "床头夜话与温馨互动 (Level 1)",
    "audience": "common",
    "tasks": [
      {
        "text": "两人并在枕头上，对视30秒，谁先笑谁输",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把头埋在对方颈窝里，深呼吸闻对方的味道10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手指在对方手心写一个字，让对方猜",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴在对方胸口，静静听心跳1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方讲一个睡前小故事或者笑话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相挠痒痒，坚持10秒不许笑",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方捏捏肩膀或按按头2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用鼻尖蹭对方的鼻尖10下（爱斯基摩之吻）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "握着对方的手，十指紧扣1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后抱着对方，在他/她耳边说一句情话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手机拍一张对方现在的睡颜（不许丑照）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相分享一个童年的糗事",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "模仿对方生气的样子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸摸对方的头，说“乖，摸摸头”",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用脸颊蹭对方的脸颊，感受体温",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方暖暖手（或暖暖脚）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺在对方腿上，让对方帮你掏耳朵或者梳理头发",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "模仿猫咪叫声，并在对方怀里蹭几下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴唇轻轻触碰对方的额头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出对方最让你心动的三个优点",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相整理一下对方的刘海或碎发",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用被子把两人裹成一个“寿司卷”拥抱30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "玩一次石头剪刀布，输的人亲赢的人脸颊一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手指测量对方的睫毛有多长",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把手放在对方肚子上，感受呼吸起伏",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相喂对方喝一口水（假装是交杯酒）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用额头抵住对方额头，闭眼冥想30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出三个你对未来的共同规划",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "模仿对方第一次表白时的样子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手掌轻轻遮住对方眼睛，给一个惊喜的吻",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相按摩手掌的虎口穴位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "比一比谁的手掌大",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用一种奇怪的口音对对方说“我爱你”",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "做鬼脸逗笑对方",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "如果是周末，约定明天谁做早餐",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方起一个只有今晚能用的专属昵称",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "love",
    "name": "暧昧升温",
    "desc": "感官挑逗与浪漫前戏 (Level 2)",
    "audience": "common",
    "tasks": [
      {
        "text": "关灯（或调暗灯光），在黑暗中拥吻1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手指指腹沿着对方的脊椎骨轻轻划过，从脖子到腰",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻咬住对方的耳垂，坚持10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在对方锁骨处种一个轻轻的草莓（不要太深）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌尖舔过对方的嘴唇一圈",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把手伸进对方衣服里暖手（仅限腹部/背部）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在对方耳边用最性感的声音叫他/她的名字",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "隔着衣服轻轻抚摸对方的胸肌/胸部30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺平，让对方用发梢扫过你的脸和脖子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴解开对方睡衣的一颗扣子（如果没有扣子就轻轻拉下肩带）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方的手背、手腕、手肘内侧",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "大腿压在对方腿上，保持亲密姿势1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手指描绘对方的嘴唇轮廓",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方的手放在自己心口，告诉他/她现在的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻拍打对方的屁股3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在此后的3分钟内，只能用“嗯/啊”来回答对方的问题",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用气声在对方耳朵里吹气5次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "像考拉一样手脚并用缠在对方身上",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方颈动脉处最敏感的皮肤",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把腿伸进对方两腿之间磨蹭（隔着衣服）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "掀起对方上衣的一角，亲吻肚脐眼",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用下巴蹭对方的脖子，制造一点点刺痛感",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后抱住对方，手放在对方大腿根部不动",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌头舔舐对方的手指尖",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "两人鼻尖碰鼻尖，斗鸡眼看谁先笑",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相检查对方身上有没有“多余的肉肉”（借机乱摸）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴唇含住对方的下嘴唇，轻轻吸吮",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把手插进对方头发里，轻轻拉扯发根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在对方背上写字（如I Love U），让对方猜",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方膝盖内侧的敏感处",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用脚趾轻轻划过对方的小腿肚子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "深情注视对方嘴唇，但不许亲，坚持20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手背轻轻抚摸对方的脸庞轮廓",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "模仿电影里的经典接吻姿势",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出一个你对对方产生性幻想的场景",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "couple",
    "name": "干柴烈火",
    "desc": "褪去衣物与肌肤相亲 (Level 3)",
    "audience": "common",
    "tasks": [
      {
        "text": "脱掉对方的上衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方的所有裤子/裙子（只留内衣裤）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴把对方的内裤拉低一点点，再松开",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让对方躺下，你跨坐在对方身上（不脱内衣裤）扭动30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "湿吻对方的脖子，留下湿漉漉的痕迹",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双手被对方按在头顶，保持这个姿势被亲吻1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "隔着内裤抚摸对方的私密部位30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌头从对方喉结/锁骨一直舔到肚脐眼",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把脸埋进对方胸口，左右磨蹭20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方一只袜子，并亲吻脚背一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "两人脱光上身，肌肤紧贴拥抱1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "蒙上对方眼睛（用手或衣物），亲吻他/她身上的三个部位让其猜测",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻啃咬对方的肩膀",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生发出诱惑的声音叫床10秒，男生给女生做乳头按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手伸进对方内裤里轻轻挑逗，直到对方有反应",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在对方大腿内侧亲吻，离核心部位只有1厘米但绝不触碰",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相脱掉对方最后一件内衣/内裤",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "欣赏对方裸体1分钟，并夸赞三个性感的部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用大腿磨蹭对方的私密部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方的手指含在嘴里，模仿口交的动作吞吐20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "赤裸上半身，互相涂抹润肤乳（假装有油）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用自己的私处去蹭对方的大腿外侧",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生把手放在女生两腿之间取暖",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用胸部去夹男生的手臂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相检查对方身体的每一个角落（借口找伤疤/痣）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试用嘴解开对方内衣的扣子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把头钻进被窝里，只露出脚丫",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用一种挑逗的姿势躺在床上，让对方拍照（阅后即焚）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相轻咬对方的臀部肉肉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌头画圈舔舐对方的乳晕",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方的手按在自己的私密处，引导他/她该怎么动",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在对方耳边描述你现在最想对他/她做的事",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用屁股去蹭对方的下体",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "除了私密部位，全身任意地方狂吻一通",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "只穿内裤，模仿摔跤动作纠缠在一起",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "intimate",
    "name": "极度诱惑",
    "desc": "边缘性行为与深度取悦 (Level 4)",
    "audience": "common",
    "tasks": [
      {
        "text": "为对方进行口交（Oral Sex）30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相69姿势，互相服务1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用乳头/胸部摩擦对方的脸或丁丁",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让对方平躺，把腿架在肩膀上，仔细观察私密部位10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用丁丁或手指在洞口/顶端打转，坚持30秒不进入",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔舐对方的乳头，直到变硬",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手帮对方自慰（打飞机/揉豆豆）直到快要高潮时停下（Edging）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "种一个明显的吻痕在对方大腿内侧或胸口",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入姿势，仅仅是贴在一起磨蹭，不进入",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生跪趴，男生从后面轻轻拍打女生屁股直到变红",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "深喉挑战（Deep Throat）5秒（量力而行）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌头舔舐对方的蛋蛋或私处缝隙",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "面对面坐着，互相抚摸对方的性器官",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在这个环节结束前，必须一直赤裸身体",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一方躺着不动，另一方用尽浑身解数挑逗他/她，看能坚持多久不求饶",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "含一口温水（如果有）然后为对方口交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴唇抿住对方的乳头轻轻拉扯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生用丁丁拍打女生的脸颊或屁股",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生坐在男生脸上（Face Sitting）30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍摄一段10秒的私密特写视频（仅供两人欣赏，阅后即焚）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌尖快速弹动刺激对方的小豆豆/龟头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生把蛋蛋放在女生手里揉捏",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用胸部夹住男生的丁丁进行乳交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用脚（足交）刺激对方的私密部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轮流用手刺激对方，看谁先忍不住叫出声",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方的手绑住（用皮带或睡衣腰带），进行口交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在对方高潮临界点停下，命令对方求你",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌头深入探索对方的私处内部（如果卫生允许）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试毒龙钻（舔肛，需确保卫生和接受度）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相看着对方自慰，直到一方高潮",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用头发扫过对方敏感的龟头或阴蒂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "含住对方的一侧乳头，手玩弄另一侧",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用丁丁在女生的臀缝里抽插（不进入肛门）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用嘴把避孕套给男生戴上（如果需要戴套）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手指模仿抽插动作，快速进出30秒",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "advanced",
    "name": "灵肉合一",
    "desc": "实战冲刺与特殊玩法 (Level 5)",
    "audience": "common",
    "tasks": [
      {
        "text": "解锁一个从未尝试过的性爱姿势",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女上位，自己动1分钟，男生不许帮忙",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式抽插50下，不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一边接吻一边做爱",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生抱起女生（站立或跪立）悬空进行抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在快要高潮的时候停下来，冷静10秒再继续",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "看着镜子里的彼此做爱（如果床边有镜子）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "只能用一种极慢的速度抽插，感受每一寸的摩擦，持续2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生夹紧双腿，男生尝试从后面进入",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生必须在女生耳边详细描述现在的感觉，不少于5句话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为了惩罚/奖励，被打屁股10下后立刻插入",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试肛门指交（注意润滑和卫生，量力而行）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生控制节奏，命令男生“快”或“慢”或“停”",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "做爱时必须一直看着对方的眼睛，不许闭眼",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "最后冲刺阶段，必须大声喊出对方的名字",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用一种动物的姿势（如狗狗趴）进行交配",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "不带套内射（仅限长期稳定且有避孕措施的情侣，否则请忽略！）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "事后帮对方清理身体（用纸巾或去浴室）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "结束后拥抱10分钟，不许玩手机",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "立刻再来一次（如果不累的话）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "侧卧位进入（勺子式），最亲密的姿势",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方平躺，双腿高举过头顶（传教士变体）进行深插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试“剪刀式”体位（双方腿部交叉）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在插入状态下静止不动，仅靠括约肌收缩来挤压对方（凯格尔运动）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生跪姿，女生仰卧床边，腿挂在男生脖子上",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试站立后入（一方站在床边）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在这个任务期间，只能浅插，不许顶到底",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在这个任务期间，必须顶到底，不允许浅插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一边做爱一边互相扇巴掌（轻度助兴）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生背对男生坐在男生身上（反向女上位）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生抓住女生的手腕按在床上，进行强力冲刺",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "做爱时打开手机闪光灯照亮结合部（视觉刺激）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试同时高潮（虽然很难，但尽量配合）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生射精后，保持插入状态拥抱直到变软",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "做爱过程中，互相说出对方最让你淫荡的一面",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用枕头垫高臀部，进行深层次的冲撞",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-1",
    "name": "基础模式",
    "desc": "从旧版「基础模式」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "轻轻的在对方耳朵边吹气10下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在镜子前拥吻",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "依次亲吻对方脸脖子锁骨",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺下给对方按摩1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将对方压在身下做十个俯卧撑",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "两人钻进被窝里亲亲",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双方对视20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "当天一起洗澡",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "撅起PP，让对方打10下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻抚摸对方下面30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相拥抱1分钟，并且抚摸对方PP",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生公主抱女生，并坚持15秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "闭上眼睛让对方为所欲为1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方的脸颊",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "与对方舌吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻揉对方PP",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方指定的衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻抚摸对方xiong30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "和对方法式湿吻20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "单膝下跪亲吻对方的手",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抚摸对方的大腿30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲亲对方xiong30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "背对对方扭动屁股",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "什么都不做",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻舔对方的耳垂10秒钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用冰块在对方身上轻轻滑动，直到溶化",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方一个轻柔的脚部按摩，持续2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "展示一种性感的舞蹈，持续1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用丝巾或者眼罩绑住对方的眼睛，进行一个感官探索游戏",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在户外找一个安静的地方，亲吻对方的全身，同时享受大自然的美景",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "使用食物进行亲吻和舔舐，例如巧克力酱或者生果",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌尖轻轻刺激对方耳朵",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻咬住对方的耳垂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方做一个放松的肩部按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "闭上眼睛，让对方为你做任何事情一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻揉捏对方的PP",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "根据对方指定，脱掉任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "温柔地抚摸对方的胸部30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "相互用手掌轻轻触摸对方的敏感部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用冰块在对方身上滑动30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用口红在对方身上写下甜蜜的留言",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方唱一首歌或朗诵一段情诗",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "模仿对方的声音和样子，玩起角色扮演游戏",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在阳台或花园里裸露一会儿，享受自然的触感",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局比赛结束前用眼罩绑住眼睛",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-2",
    "name": "恋爱版",
    "desc": "从旧版「恋爱版」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "学猫叫三声",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起恶搞自拍",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方说悄悄话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按小腿1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视5秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喂对方喝水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手牵手30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拥抱30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视5秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试接吻的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说说初次见面的感受",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手牵手一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方闭上眼睛给你涂口红",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起给对方按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "猪八戒背媳妇",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸对方耳朵2秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸对方头10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方唱首歌",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起喝一杯水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试接吻的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍一段表白的视频留作纪念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方梳头发",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着喂食物",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按摩捶背1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "学猫叫三声",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方手背30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拥抱一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视5秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起恶搞自拍",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻一下对方的手",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】被挠痒痒30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后抱对方1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方额头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双方做一个温馨的拥抱，保持30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻咬对方耳垂，让对方感到痒痒和热情",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "公主抱对方10秒，也可以商量对方抱",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方按摩脚底一分钟，舒缓疲劳",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手托起对方的下巴，并申请注视20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对对方唱一首喜欢的网络热门歌曲",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用一个浪漫的姿势双方拍照留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "面无表情的捧着对方的脸对视 1 分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "告诉对方一个自己的小秘密",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "做一个自己最性感妩媚的动作，并拍照留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方互换一件自己指定的衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方脸颊一个轻轻的吻",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方脖子，然后轻轻吹气",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自拍一个双方亲亲的短视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方准备一种饮料，用嘴喂给对方",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双方十指相扣，深情对视，朗诵骆宾王的《鹅》",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用最暧昧的语气，对对方说一句情话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方的手臂，宣示你对对方的细心关注",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方坐下，自己躺下，将头枕在对方腿上，对视15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲一下对方的眼睛",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手轻轻挠对方手心5秒钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视30秒，谁先眨眼算输，输者被亲脸蛋",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "石头剪刀布，输者被刮鼻子3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被挠痒痒忍住不能笑，笑了被非礼",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "学猫叫3声，并翻译一下3声猫叫含义",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "选一个搞笑表情包让TA模仿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给TA捶背按肩1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "原话反说（举例：A.我不喜欢你 B.我很喜欢你）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "隔着玻璃或者透明物亲吻TA",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "十指相扣并拍照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "闭上眼睛为男涂口红，为女画胡子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在手心写整蛊或者情话让TA大声朗读",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说一个字让TA用屁股写字",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试初吻的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喂TA吃零食3次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴巴喂TA零食",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拥抱一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "告诉对方：爱你是小狗。然后学狗叫“汪汪汪”",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生被公主抱",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "吻一下TA的嘴唇",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-13",
    "name": "七夕特制",
    "desc": "从旧版「七夕特制」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "和对方舌吻15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手伸入对方内裤爱抚妹妹或弟弟10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "戴上眼罩享受对方轻舔奶头20秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "和对方亲吻并为对方脱掉一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抱紧对方舔对方耳垂30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方躺着，露出妹妹或弟弟让对方舔10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方，并为对方脱掉所有衣服，女方换情趣内衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方拖住双乳喂男方吃nai头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲舔对方丝袜腿",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "双方脱掉所有衣服，女方可以穿情趣内衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方为女方舔妹妹并用手指慢慢插入直到妹妹开始流水",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男方从后面缓慢插入妹妹20下，最后一下猛插到底",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "舔对方奶头并扣妹妹或撸弟弟30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "酸奶倒在女生丝足上舔干净",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "看着对方紫薇30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女上男下抽插30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抓住丝足把玩同时后入1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "什么也不做，休息一回合",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自己紫薇并用手插对方妹妹或撸弟弟30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一边做一边吻1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方翘起屁股扒开妹妹，给男方舔1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "找个最佳角度拍摄一张照片留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "闭眼被对方自由抚摸1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用镜子看着对方插入并抽插20下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "摆撑M脚，任由男方挑逗1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对方站着，自己跪着给对方kou30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "传教士姿势，快进快出50次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式相互kou交30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方扒开妹妹，并说老公来cao。男方手指插入30秒并舔妹妹",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "抱住丝臀cha入30下",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女方为男方kou交并玩弄弟弟30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女方掰开妹妹让男生进入1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "申请舌吻并舔对方脚20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用龟头抵住妹妹并摩擦20次（禁止插入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男方用2跟手指大力猛插妹妹30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男方含阴蒂吸吮直到女方喊停",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "选择发射部位（足、臀、内、胸、颜）。本局游戏结束后执行",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方从后面抽插，同时女方自己摸妹妹30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方用坐莲姿势来回30下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "一起洗澡，并给对方打上沐浴露，游戏结束前不准洗",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起洗澡，同时壁咚20下",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-3",
    "name": "情侣版",
    "desc": "从旧版「情侣版」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "脱掉对方一条内裤",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方耳朵10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按摩小腿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】躺下对方给你按摩一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方深情接吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "挠痒痒到对方求饶为止，至少10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方的所有衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "挑逗对方敏感部位15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方伸到内衣内抓胸10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女方被男方公主抱在房内绕一圈",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "把酒水或酸奶倒在自己身上对方舔干",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自拍一段接吻小视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝交杯酒并拍照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴吸吮对方手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方舔你上半身的各个部位超过30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自己趴着对方舔你后背20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸吮对方xiong20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方湿吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方大腿内侧10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将对方捆住双手直到惩罚结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸对方xiong或者打屁股一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方手伸进裤子随便摸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方口你下面30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "揉对方nai一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方脖子到胸口30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔或轻咬对方耳垂5下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪舔对方30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】躺下享受被对方舔遍全身1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "想尽办法弄对方勃起或者流水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相舌吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "伸手伸进对方衣服内挠痒痒10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方隔着衣服抚摸下体10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方伸进内裤抚摸20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "伸进衣服摸ta屁股30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "猜拳输的被脱光所有衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按摩小腿一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从后面抱着对方任意摩擦10秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "揉对方胸部10秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "捏ta奶头3下并配合呻吟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "摸对方胸部或打屁屁各3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被握住蛋蛋或奶头任意搓揉1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】被对手捆住双手任意处置1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "暴力撕破黑色丝袜并强吻30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生坐在男生身上扭动30秒",
        "executor": "female",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-11",
    "name": "百合拉拉",
    "desc": "从旧版「百合拉拉」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "在xiong/大腿内侧/屁股上任意一处写下羞辱词汇",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从现在开始不能说出《我》这个字，否则罚KJ",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局结束前奖励一次耍赖皮的机会",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "认认真真的帮对方用嘴洗手",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "直视对方的眼睛，表白",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在后入/站立/和女上位之间选择一个，KJ2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "请把耳朵给对方玩一首歌的时间",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "五个仰卧起坐由对方协助",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让对方在你身上随便哪里留下吻痕/草莓",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "KJ的时候试试看含一口酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍摄地图保存",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方压在身下，并做五个俯卧撑",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱到只剩一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍摄大尺度照片一张",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "今晚你受",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "滚床单时录像，拍完认真观看",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "请把坐姿变为盘腿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "五个抱头蹲起",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手沾满果酱，让对方舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "表演才艺",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局结束前奖励你一个耍赖皮的机会",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把酒倒在对方身上，并舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "蒙上眼睛让对方喂你一种食物，并猜出种类，失败请喝水/酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "仰天大笑30秒，不许中断",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "身体模仿任意字母",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯酒或三杯水，游戏结束前不许上厕所",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局游戏结束前请叫对方主人",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出你最喜欢的情趣用品",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从现在开始不能说出《的》这个字，否则罚酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出你的敏感带，并且让对方随意玩弄一首歌的时间",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴对嘴喂对方吃下巧克力一颗",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交换内衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "绑手+蒙眼play",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "别说话，吻我，就现在",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舌吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴巴解开对方身上扣子或者绳结",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪在对方腿间做出下流的姿势并拍照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方从颈椎舔到腰椎一次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "大字型躺平，在唱完一首歌之前任由对方欺负并录像",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-4",
    "name": "高级版",
    "desc": "从旧版「高级版」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "帮对手含住蛋蛋或阴蒂10秒舌头打转",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】撅起PP让对方打3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方给你口指定部位一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "涂上油，胸对胸帮对手推胸30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "舔对手的丝足或手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光衣服[或穿情趣内衣]",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手湿吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸吮对方手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女穿情超内衣,男舔对方后背1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用牙齿咬住乳头磨蹭10秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方含着水在你身上亲吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对手蛋蛋或阴蒂10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后伸手过来揉胸30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "后入抽搐20次不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跟对方乳交30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "被对方用牙齿咬住乳头磨蹭10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "将酸奶倒在对方乳头并舔干净吃掉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "揉对方胸3下或轻咬对方耳垂5下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "想尽办法弄对手勃起或流水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入插入20次并拍视频留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍一段给对方口的视频15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方站立抱起女方悬空插入20次不许射",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "对着镜子拍揉胸视频10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用胸或者JJ蹭对方的脸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方的脖子到胸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲30秒运动不许射",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方舔你身上的各个部位1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对手帮你舔全身各个部位2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对手蛋蛋或阴蒂30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用JJ打脸3下或B蹭脸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手扣自己下面1分钟，或撸30下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "口含热水给对手进行口30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "拍一段和对方爱爱的视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "口含冰水或冰块给对手进行口30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入抽插20次不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "相互拥抱并热情亲吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲30秒运动不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对着镜子啪啪后入1分钟不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩任由对方处置30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "相互摸对方下体1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生脱光穿上黑色丝袜",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方含水或果冻亲吻全身1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺在床上任由对方抚摸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺下享受被对方舔遍全身1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方站立抱起女方悬空插入20次不许射",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "撅起PP让对方打5下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式相互口交1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后伸手过来揉胸30秒并磨蹭下体",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "边插入边打对方屁股30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "爱抚TA勃起、出水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻吸吮TA乳头一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "把酸奶涂在胸部和腹部让TA舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给TA舌舔私处1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抚摸TA屁股与屁股沟30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式抽插20次，保证不she",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "含住乳头，舌头狂舔一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "丰胸按摩一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲，三浅一深",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女揉搓蛋蛋男含银地一分钟",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-5",
    "name": "羞羞版",
    "desc": "从旧版「羞羞版」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "和对方舌吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方弄硬或弄湿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对手的脖子到胸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】对方背对着坐到身上直到游戏结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方口交15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸咬对方的乳头20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方用嘴给你投食",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍一张给对方口交的照片",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方舌吻半分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对方的蛋蛋或阴蒂10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入抽插20次不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "揉一下对方的胸或揪一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跟对方乳交半分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将酸奶倒在对方乳头上舔干净吃掉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方拔一根毛",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "像口交一样吸吮对方手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "打开门，在门口口交10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对着镜子拍揉胸视频10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用奶或JJ蹭对方的脸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对方的蛋蛋或阴蒂10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方的脖子到胸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方用脚踩胸或蛋蛋10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方舌吻半分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对方的蛋蛋或阴蒂半分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸咬对方的乳头30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对着镜子后入一分钟，不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从额头一直往下舔到脚趾",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对手从大腿根部倒水你接着喝光",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "指定身上任意位置让对方舔20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "戴上眼罩享受对方舔任意部位一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴对嘴喂他喝一杯啤酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生让男生吸吮手指，另一只手抚摸他的JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女托双奶送男嘴里吸吮一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "吻遍TA每寸肌肤一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "角色互换，女学男抽搐，男学女叫床",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将奶油涂乳头上让对方舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男边亲女生边抚摸女生下体一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女握男根，用龟头绕乳头按摩",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "亲TA胸部同时爱抚TA的下体",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用JJ磨蹭女生下体一分钟（禁止进入）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一遍做爱一遍吻TA 1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式边做边摸她奈子",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女握男跟，撩拨自己私处并呻吟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生用嘴为男生带安全套",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲上下运动20次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式互相口交1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让TA带上眼罩舔自己任意部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸部涂油为男生按摩JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "后入式插入不动30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用屁股碰屁股3下（俗称定亲）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "边为男生路罐，边吸吮规头边揉蛋蛋",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "边吸吮阴蒂边摸柰子边食指抽插",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男含阴蒂并吸吮至女生尖叫",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "插入不动，等女生喊CAO我几次，男生抽插几次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "老汉推车，九浅一深，抽插一分钟",
        "executor": "male",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-6",
    "name": "羞羞进阶版",
    "desc": "从旧版「羞羞进阶版」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "跟TA舌吻一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抱紧TA舔TA耳朵后面30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女握男根，边帮男生口边用手玩弄30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "舔对方的脖子到胸一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生隔着内衣把女生私处摸到拉丝",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男生用JJ磨蹭女生私处一分钟（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男生躺在地上，女生蹲在男脸上让男观看15秒（禁止触摸）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吻遍TA身体每一寸肌肤",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将酸奶涂在MM/JJ上让TA舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生边亲女生边抚摸女生下体一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女边亲男生边用手帮男生玩弄一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "亲吻TA脚指头一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮TA胸部推油一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男轻轻进入两次，然后到底插入一次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "TA站着自己跪着帮TA口",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔TA的菊花15秒（询问感受）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "举起双手让TA任意玩弄一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用脚帮男生按摩下体一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "撕破女生内衣疯狂吸吮下体一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生喊爸爸CAO我男生疯狂抽插",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲上下运动20次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生蹲在男生脸上帮男生kou",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生蹲在男生脸上，男生帮女生kou",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式互相kou交一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴里含上kou交水帮TA kou一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "后入式抽插20次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男含女阴蒂吸吮直到女生喊停",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "拍一段跟TA爱爱的视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生拨开蜜穴求哥哥cha入一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "把TA绑在椅子上为所欲为一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸部涂油，女托双乳为男乳交一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "插入不动，女生喊几次CAO我男生抽插几次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男后入九浅一深，女边呻吟边摸阴蒂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男竖起JJ被女生强行坐入反复10次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩一动不动让TA任意玩弄一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男后入，女生喊口令（1、2、1）男听令行事",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从额头一直往下面舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮男生急速lu管直到男生喊停为止（禁止cha入）",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "下体滴满蜂蜜让TA舌舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用棒棒糖抽插后再舔食反复五次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "亲吻吸吮TA乳头一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生撅起屁股贴在男生脸上，男生舌舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生强jian女生，一分钟内插入即为胜利",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生跪着双手背靠后，后入抽插一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用手紫薇让男生吸吮手指",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男生躺下，女生把口水滴入男生嘴里",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲，左转三圈，右转三圈",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用龟头绕女蜜穴口正反画圆圈按摩（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女撅起屁股手拍屁股对男说：是男人就把我CAO死",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "she在女生脸上（颜she）",
        "executor": "male",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-7",
    "name": "御奴风尚",
    "desc": "从旧版「御奴风尚」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "带上眼罩让TA舔任意部位一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "边亲吻TA胸部边爱抚TA私处",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴里含酸奶流出来让TA舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用JJ磨蹭女生下体一分钟（禁止进入)",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "按住TA头帮自己舔任意部位30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让TA穿上内裤后舔勃起/出水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女用下体为男生JJ按摩一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生涂润滑油给TA按摩JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "JJ涂满奶油让女生舌舔干净",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "撅起PP让TA吸吮B30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "下体滴满蜂蜜让男生舌舔干净",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "带眼罩含着TA下体舌头打转30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "带上项圈被TA牵着绳子口交30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "拴上十字扣抽插一分钟不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女坐男脸上让TA舌舔私处一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手脚拷上让TA摧残30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "屁股填涂润滑油让TA边插边揉拍到泛红",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用捆绳捆住TA用皮鞭抽15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "坐到TA脸上让TA吸吮30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生含住龟头吸吮一分钟然后咬一下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩被TA无情任意宰割",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用黄瓜为女生按摩并测量下女生下体温度",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男用龟头绕女生蜜穴口正反画圈按摩（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "跪着张开嘴让TA下体磨蹭30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拴绳跪在TA面前口交30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻TA指定位置一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女拨开阴唇求TA舔一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男边吸吮阴蒂边用手抽插",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "吸吮TA脚指头30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "酸奶倒胸部至下体让TA舌舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸夹铃铛后入抽插一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "捆绑拉倒卫生间淋湿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "带上项圈牵到门口kou一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式，边用皮鞭抽屁股一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "穿上丝袜跪下让TA撕开丝袜抽插30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "全身涂润滑油然后观音坐莲",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生双手涂润滑油交替快速lu管",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男撅起JJ被女生强行坐入反复10次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被TA随意指定一项任务",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "皮鞭抽胸10下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "让ta嘴夹铃铛口交30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "按在地板上抽插30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "绑在椅子上紫薇给他看",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女张开嘴巴被男抽插一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男用JJ磨蹭女生下体一分钟（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "帮TA含蛋蛋或阴蒂10秒舌头打转",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "涂润滑油按摩TA私处3分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从额头一直往下面舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男后入，女生喊口令（1、2、1）男听令行事",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-8",
    "name": "绅士仆人",
    "desc": "从旧版「绅士仆人」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "被女王一边亲吻，一边用手隔着衣服抚摸男仆私处",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "命男仆跳劲爆脱衣舞，拖到只剩内裤后被女王使劲捏蛋蛋和JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "跪着忘情的吸舔女王的脚趾头知道女王满意",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王一只手托起下巴欣赏，另一只手伸进裤子把玩男仆JJ和蛋蛋",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王握住JJ拍张高清照设置为手机屏幕",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王量长度和直径，并被女王使劲撰握测试JJ硬度",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "命男仆隔着内裤舌舔亲吻私处",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "掀起内衣命令男仆亲吻胸部，同时扭动屁股摩擦男仆私处",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆亲吻脖颈部和酥胸同时掏出男仆JJ把玩",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "坐男仆身上抚摸胸部并掀起BRA用乳头碰他鼻尖挑逗",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命令男仆用舌头反复舔阴蒂和阴道",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "被女王坐在脸上反复摩擦嘴巴伸出舌头反复舔阴蒂和阴道",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王坐在脸上反复摩擦嘴巴伸出舌头疯狂舔",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王lu管膨胀到最大，被女王坐入使劲夹JJ",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王双腿锁住头部不停舌舔女王私处至女王松开腿",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "命男仆边亲吻奈子边抽插",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王用手紫薇后让男仆吸吮手指反复多次",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆用JJ在女王蜜穴用龟头打转",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王双腿抱住男仆腰部命其疯狂胡乱抽插一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "在男仆屁股上写某某的男仆让其撅屁股抓住JJ拍照留念",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王剥跟香蕉，反复紫薇后喂男仆吃掉",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆用JJ捶背两分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "让男仆舌头围阴蒂打转一分钟吸住阴蒂舌舔一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王把棒棒糖塞入私处让男仆舌舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "使劲攥握男根使其达到最大硬度，再被女王用大腿使劲夹住",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用gui头为女王胸部按摩两分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "用JJ为女王捶背一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "胸部涂抹酸奶让男仆舔干净",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "让男仆JJ在外阴摩擦三次然后内插一次，循环往复20次",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆用龟头不停摩擦阴蒂和阴道三分钟（禁止进入）",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用脉动瓶子给男仆紫薇，JJ涂油全部塞入瓶内",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命令男仆紫薇打飞机",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "在男仆勃起的JJ上写上女王名字问男仆这是谁的",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "骑男仆背上喊驾驾驾，用皮鞭抽腚演骑马游戏",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "含住男仆龟头用牙齿慢慢加力轻咬直到男仆求饶为止",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王脱光衣服命男仆吻遍全身每一寸肌肤",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命令男仆用JJ蘸番茄酱喂女王吃",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用老汉推车的招式伺候女王一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女王要体验不同抽插速度和抽插深度性交快感",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男仆为女王做背部推油，并JJ涂油为阴道推油",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男仆带眼罩为女王丰胸按摩两分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "双手被拷背后被女王强奸",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女王撅起屁股手拍屁股对男仆说：是男人就把我CAO死",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男仆抽插时双腿交叉着收紧阴道口",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆快速抽插拨出射在胸部涂抹均匀为胸部做jing液SPA",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "听女王喊口令（1、2、1）时快时慢，男仆按节奏抽插",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "命男仆内射再让其口交把淌出来的jing液舔干净",
        "executor": "female",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-9",
    "name": "甜心宝贝",
    "desc": "从旧版「甜心宝贝」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "为男主捏肩捶背并不断吸吮男主耳垂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为男主跳脱衣热舞掀衣让男主亲吻揉捏乳房",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主伸进内裤和私处，边呻吟边扭动屁股",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻吸吮男主脚趾头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主暴力揉搓乳房并用两指夹住乳头使劲揪",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被疯狂吸吮乳头并被男主伸进内裤用手指抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮男主从拉链处掏出JJ用舌尖刺激",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为主人爱抚JJ同时用舌头不停舔男主乳头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用双乳为男主推油按摩背部和臀部至男主满意",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "竖起男主JJ用私处为JJ做360度环绕按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪着双手拷背后为男主忘我的kou交并拍视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪着双手拷背后被男主疯狂的抽插嘴巴一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴着撅屁股男主快慢深浅不断变化的任意抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "平躺扒开小阴唇说：痒，主人行行好快来CAO我吧",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自摸胸部并扣模蜜穴说我好寂寞被男主拍视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被牵狗绳趴着为男主舔JJ舔不好就被狠抽皮鞭",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主用棒棒糖抽插后再甜食棒棒糖反复多次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自己扒开蜜穴后被男主用黄瓜疯狂抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主抽插3次下体接着被男主插3次嘴巴，反复3次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主再下体塞跳跳糖后猛烈抽插30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用酒瓶紫薇并被拍视频紫薇私处被拍高清照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "阴蒂被男主用嘴巴嘬住不放两分钟并不停舌舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "不断变化姿势让男主拍10张露yin道做手机壁纸",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男主JJ上涂番茄酱让女仆舔食干净反复数次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为男主表演老虎吃香肠的魔术把香肠塞入下体",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主后抱亲吻，左手捏熊右手抚摸抽插蜜穴",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主用色戒的姿势抽插一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴跪着被男主不断猛烈插入抽出数次至求饶为止",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主紧紧抓住两个基本点逐步深入一个中心",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸部涂油为男主不停nai交和kou交至男主满意",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主边CAO边亲一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "装醉酒女不省人事被主人任意摧残三分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "激烈反抗后被男主强奸，为了不吃亏把男主强奸",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双手涂油变换各种手势为男主JJ做精致SPA",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女仆用阴道吞下JJ收紧阴道为男主反复拔罐",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被JJ打脸后退3格",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后ru抽插20次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "再淋浴房开着淋浴帮男主kou交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "插入不动女仆喊CAO我一次随后男主抽插一次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "口含跳跳糖为男主kou交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在阴道中倒满啤酒/白水供男主引用",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴跪被男主双手抓胳膊用JJ爆菊花一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "撅腚剥开蜜穴自摸阴蒂求男主CAO死自己算了",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在女仆屁股写上：性奴 后疯狂抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "不断舌舔吸撸舌头打转让男主高潮口射并吞精",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-12",
    "name": "K歌必玩",
    "desc": "从旧版「K歌必玩」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "《吸星大法-全场》\n男女岔开坐成一圈，用嘴吸住一张扑克一个一个的往下传。你有足够的肺活量可以玩无限多动作，可以跨越N人去找你下一个人来接牌，牌掉了罚酒：）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手面对面坐到身上直到解除惩罚",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《撕纸-全场》\n差不多撕一长条餐巾纸含着用嘴一个一个撕下去，接过去后前一人嘴里必须留有纸，当然撕到后面纸是越来越少，放弃的罚两杯，尝试没成功的只罚一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "顺着抓全场异性xiong或裤裆内10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《我爱你VS不要脸-全场》\n听上去有些“暧昧”，实际上是个练反应的好游戏。众人围坐成一圈，规定只能对自己左边的人说“我爱你”，对右边的人说“不要脸”。两人之间只能连续对话3次。一旦有人说错，即受罚。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女性脱掉内衣套到男性头上或穿上",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用舌头从脖子慢慢舔到耳根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《江湖刀棍-双人》\n人在江湖混哪有不挨棍呀（人在江湖飘啊谁能不挨刀啊），我一（二三四五）棍（刀）砍死你呀（出手指，五大四四大三依次，一大于五）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手面对面坐到身上直到游戏结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手从后面伸进衣服抓胸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "顺着摸全场异性大腿内侧或屁股10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手背对坐到身上磨蹭10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《定时炸弹-全场》\n发起者用手机设定一个定时闹钟（推荐20s-2min），向下一人提问同时递出手机，回答方回答成功后可将手机递给下一人并提问。闹铃响起后手机在谁手中，谁就接受惩罚。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《跟唱-全场》\n每个人轮流唱一句歌词，接着下一个人继续唱，任何人如果跟不上节奏或者唱错了歌词，就要喝酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《禁酒令》\n规定某段时间内，不能说：喝、酒两个字，谁先口误或者说错了，就要喝酒。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《逢七过-全场》\n1、游戏参加者们围成一圈。\n2、从1开始轮流报数，但逢尾数是7或者7的倍数，则不能报数，要喊“过”。\n3、如果犯规则要“惩罚”，结束惩罚后，由受惩罚者开始报数，可以进行任意报数，不必从1开始。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手从后面伸进衣服抓胸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "顺着摸全场异性大腿内侧或屁股10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用舌头从脖子慢慢舔到耳根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手打屁股十下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手面对面坐到身上，直到游戏结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "坐对手旁边任由对手摸任何部位到解除惩罚",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被全场所有异性拥抱一次亲吻一口",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用舌头从脖子慢慢舔到耳根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手打屁股10下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被全场所有异性全身各部位按摩30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手隔着内裤摸下体10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  },
  {
    "id": "qlyx2-10",
    "name": "集合模式",
    "desc": "从旧版「集合模式」迁移",
    "audience": "common",
    "tasks": [
      {
        "text": "轻轻的在对方耳朵边吹气10下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在镜子前拥吻",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "依次亲吻对方脸脖子锁骨",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺下给对方按摩1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将对方压在身下做十个俯卧撑",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "两人钻进被窝里亲亲",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双方对视20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "当天一起洗澡",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "撅起PP，让对方打10下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻抚摸对方下面30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相拥抱1分钟，并且抚摸对方PP",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生公主抱女生，并坚持15秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "闭上眼睛让对方为所欲为1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方的脸颊",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "与对方舌吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻揉对方PP",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方指定的衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻抚摸对方xiong30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "和对方法式湿吻20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "单膝下跪亲吻对方的手",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抚摸对方的大腿30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲亲对方xiong30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "背对对方扭动屁股",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "什么都不做",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻舔对方的耳垂10秒钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用冰块在对方身上轻轻滑动，直到溶化",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方一个轻柔的脚部按摩，持续2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "展示一种性感的舞蹈，持续1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用丝巾或者眼罩绑住对方的眼睛，进行一个感官探索游戏",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在户外找一个安静的地方，亲吻对方的全身，同时享受大自然的美景",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "使用食物进行亲吻和舔舐，例如巧克力酱或者生果",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用舌尖轻轻刺激对方耳朵",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻咬住对方的耳垂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方做一个放松的肩部按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "闭上眼睛，让对方为你做任何事情一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻轻揉捏对方的PP",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "根据对方指定，脱掉任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "温柔地抚摸对方的胸部30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "相互用手掌轻轻触摸对方的敏感部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用冰块在对方身上滑动30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用口红在对方身上写下甜蜜的留言",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方唱一首歌或朗诵一段情诗",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "模仿对方的声音和样子，玩起角色扮演游戏",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在阳台或花园里裸露一会儿，享受自然的触感",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局比赛结束前用眼罩绑住眼睛",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "学猫叫三声",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起恶搞自拍",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方说悄悄话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按小腿1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视5秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喂对方喝水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手牵手30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拥抱30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视5秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试接吻的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说说初次见面的感受",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手牵手一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方闭上眼睛给你涂口红",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起给对方按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "猪八戒背媳妇",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸对方耳朵2秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸对方头10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方唱首歌",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起喝一杯水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试接吻的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍一段表白的视频留作纪念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方梳头发",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着喂食物",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按摩捶背1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "学猫叫三声",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方手背30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拥抱一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视5秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起恶搞自拍",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻一下对方的手",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】被挠痒痒30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后抱对方1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方额头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双方做一个温馨的拥抱，保持30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "轻咬对方耳垂，让对方感到痒痒和热情",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "公主抱对方10秒，也可以商量对方抱",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方按摩脚底一分钟，舒缓疲劳",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手托起对方的下巴，并申请注视20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对对方唱一首喜欢的网络热门歌曲",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用一个浪漫的姿势双方拍照留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "面无表情的捧着对方的脸对视 1 分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "告诉对方一个自己的小秘密",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "做一个自己最性感妩媚的动作，并拍照留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方互换一件自己指定的衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方脸颊一个轻轻的吻",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方脖子，然后轻轻吹气",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自拍一个双方亲亲的短视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为对方准备一种饮料，用嘴喂给对方",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双方十指相扣，深情对视，朗诵骆宾王的《鹅》",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用最暧昧的语气，对对方说一句情话",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方的手臂，宣示你对对方的细心关注",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方坐下，自己躺下，将头枕在对方腿上，对视15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲一下对方的眼睛",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手轻轻挠对方手心5秒钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对视30秒，谁先眨眼算输，输者被亲脸蛋",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "石头剪刀布，输者被刮鼻子3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被挠痒痒忍住不能笑，笑了被非礼",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "学猫叫3声，并翻译一下3声猫叫含义",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "选一个搞笑表情包让TA模仿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给TA捶背按肩1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "原话反说（举例：A.我不喜欢你 B.我很喜欢你）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "隔着玻璃或者透明物亲吻TA",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "十指相扣并拍照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "闭上眼睛为男涂口红，为女画胡子",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在手心写整蛊或者情话让TA大声朗读",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说一个字让TA用屁股写字",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "尝试初吻的感觉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喂TA吃零食3次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴巴喂TA零食",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拥抱一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "告诉对方：爱你是小狗。然后学狗叫“汪汪汪”",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生被公主抱",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "吻一下TA的嘴唇",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方舌吻15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手伸入对方内裤爱抚妹妹或弟弟10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "戴上眼罩享受对方轻舔奶头20秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "和对方亲吻并为对方脱掉一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抱紧对方舔对方耳垂30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方躺着，露出妹妹或弟弟让对方舔10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方，并为对方脱掉所有衣服，女方换情趣内衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方拖住双乳喂男方吃nai头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲舔对方丝袜腿",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "双方脱掉所有衣服，女方可以穿情趣内衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方为女方舔妹妹并用手指慢慢插入直到妹妹开始流水",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男方从后面缓慢插入妹妹20下，最后一下猛插到底",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "舔对方奶头并扣妹妹或撸弟弟30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "酸奶倒在女生丝足上舔干净",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "看着对方紫薇30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女上男下抽插30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抓住丝足把玩同时后入1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "什么也不做，休息一回合",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自己紫薇并用手插对方妹妹或撸弟弟30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一边做一边吻1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方翘起屁股扒开妹妹，给男方舔1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "找个最佳角度拍摄一张照片留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "闭眼被对方自由抚摸1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用镜子看着对方插入并抽插20下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "摆撑M脚，任由男方挑逗1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对方站着，自己跪着给对方kou30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "传教士姿势，快进快出50次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式相互kou交30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方扒开妹妹，并说老公来cao。男方手指插入30秒并舔妹妹",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "抱住丝臀cha入30下",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女方为男方kou交并玩弄弟弟30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女方掰开妹妹让男生进入1分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "申请舌吻并舔对方脚20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用龟头抵住妹妹并摩擦20次（禁止插入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男方用2跟手指大力猛插妹妹30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男方含阴蒂吸吮直到女方喊停",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "选择发射部位（足、臀、内、胸、颜）。本局游戏结束后执行",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方从后面抽插，同时女方自己摸妹妹30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女方用坐莲姿势来回30下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "一起洗澡，并给对方打上沐浴露，游戏结束前不准洗",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一起洗澡，同时壁咚20下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方一条内裤",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方耳朵10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按摩小腿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】躺下对方给你按摩一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方深情接吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "挠痒痒到对方求饶为止，至少10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉对方的所有衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "挑逗对方敏感部位15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方伸到内衣内抓胸10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女方被男方公主抱在房内绕一圈",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "把酒水或酸奶倒在自己身上对方舔干",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自拍一段接吻小视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝交杯酒并拍照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴吸吮对方手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方舔你上半身的各个部位超过30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自己趴着对方舔你后背20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸吮对方xiong20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方湿吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻对方大腿内侧10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将对方捆住双手直到惩罚结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "摸对方xiong或者打屁股一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方手伸进裤子随便摸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方口你下面30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "揉对方nai一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方脖子到胸口30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔或轻咬对方耳垂5下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪舔对方30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】躺下享受被对方舔遍全身1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "想尽办法弄对方勃起或者流水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "互相舌吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "伸手伸进对方衣服内挠痒痒10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方隔着衣服抚摸下体10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方伸进内裤抚摸20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "伸进衣服摸ta屁股30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "猜拳输的被脱光所有衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方按摩小腿一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从后面抱着对方任意摩擦10秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "揉对方胸部10秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "捏ta奶头3下并配合呻吟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "摸对方胸部或打屁屁各3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被握住蛋蛋或奶头任意搓揉1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】被对手捆住双手任意处置1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "暴力撕破黑色丝袜并强吻30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生坐在男生身上扭动30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "在xiong/大腿内侧/屁股上任意一处写下羞辱词汇",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从现在开始不能说出《我》这个字，否则罚KJ",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局结束前奖励一次耍赖皮的机会",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "认认真真的帮对方用嘴洗手",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "直视对方的眼睛，表白",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在后入/站立/和女上位之间选择一个，KJ2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "请把耳朵给对方玩一首歌的时间",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "五个仰卧起坐由对方协助",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让对方在你身上随便哪里留下吻痕/草莓",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "KJ的时候试试看含一口酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍摄地图保存",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方压在身下，并做五个俯卧撑",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱到只剩一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍摄大尺度照片一张",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "今晚你受",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "滚床单时录像，拍完认真观看",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "请把坐姿变为盘腿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "五个抱头蹲起",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手沾满果酱，让对方舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "表演才艺",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局结束前奖励你一个耍赖皮的机会",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把酒倒在对方身上，并舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "蒙上眼睛让对方喂你一种食物，并猜出种类，失败请喝水/酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "仰天大笑30秒，不许中断",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "身体模仿任意字母",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯酒或三杯水，游戏结束前不许上厕所",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱掉身上任意一件衣服",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "本局游戏结束前请叫对方主人",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出你最喜欢的情趣用品",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从现在开始不能说出《的》这个字，否则罚酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "说出你的敏感带，并且让对方随意玩弄一首歌的时间",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴对嘴喂对方吃下巧克力一颗",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交换内衣",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "绑手+蒙眼play",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "别说话，吻我，就现在",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舌吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴巴解开对方身上扣子或者绳结",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪在对方腿间做出下流的姿势并拍照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方从颈椎舔到腰椎一次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "大字型躺平，在唱完一首歌之前任由对方欺负并录像",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮对手含住蛋蛋或阴蒂10秒舌头打转",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】撅起PP让对方打3下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方给你口指定部位一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "涂上油，胸对胸帮对手推胸30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "舔对手的丝足或手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光衣服[或穿情趣内衣]",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手湿吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸吮对方手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女穿情超内衣,男舔对方后背1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用牙齿咬住乳头磨蹭10秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方含着水在你身上亲吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对手蛋蛋或阴蒂10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后伸手过来揉胸30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "后入抽搐20次不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跟对方乳交30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "被对方用牙齿咬住乳头磨蹭10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "将酸奶倒在对方乳头并舔干净吃掉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "揉对方胸3下或轻咬对方耳垂5下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "想尽办法弄对手勃起或流水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入插入20次并拍视频留念",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍一段给对方口的视频15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方站立抱起女方悬空插入20次不许射",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "对着镜子拍揉胸视频10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用胸或者JJ蹭对方的脸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方的脖子到胸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲30秒运动不许射",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方舔你身上的各个部位1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对手帮你舔全身各个部位2分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对手蛋蛋或阴蒂30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用JJ打脸3下或B蹭脸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用手扣自己下面1分钟，或撸30下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "口含热水给对手进行口30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "拍一段和对方爱爱的视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "口含冰水或冰块给对手进行口30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入抽插20次不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "相互拥抱并热情亲吻30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲30秒运动不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对着镜子啪啪后入1分钟不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩任由对方处置30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "相互摸对方下体1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生脱光穿上黑色丝袜",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方含水或果冻亲吻全身1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺在床上任由对方抚摸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "躺下享受被对方舔遍全身1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男方站立抱起女方悬空插入20次不许射",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "撅起PP让对方打5下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式相互口交1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从背后伸手过来揉胸30秒并磨蹭下体",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "边插入边打对方屁股30秒",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "爱抚TA勃起、出水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻吸吮TA乳头一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "把酸奶涂在胸部和腹部让TA舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给TA舌舔私处1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抚摸TA屁股与屁股沟30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式抽插20次，保证不she",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "含住乳头，舌头狂舔一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "丰胸按摩一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲，三浅一深",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女揉搓蛋蛋男含银地一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方舌吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "把对方弄硬或弄湿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对手的脖子到胸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【惩罚】对方背对着坐到身上直到游戏结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "给对方口交15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "脱光",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸咬对方的乳头20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "【福利】对方用嘴给你投食",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拍一张给对方口交的照片",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方舌吻半分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对方的蛋蛋或阴蒂10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入抽插20次不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "揉一下对方的胸或揪一下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跟对方乳交半分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将酸奶倒在对方乳头上舔干净吃掉",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方拔一根毛",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "像口交一样吸吮对方手指10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "打开门，在门口口交10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "对着镜子拍揉胸视频10秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用奶或JJ蹭对方的脸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对方的蛋蛋或阴蒂10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔对方的脖子到胸30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对方用脚踩胸或蛋蛋10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对方舌吻半分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用嘴含住对方的蛋蛋或阴蒂半分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吸咬对方的乳头30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对着镜子后入一分钟，不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对方站着自己跪着帮他（她）口一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从额头一直往下舔到脚趾",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "对手从大腿根部倒水你接着喝光",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "指定身上任意位置让对方舔20秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "戴上眼罩享受对方舔任意部位一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴对嘴喂他喝一杯啤酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生让男生吸吮手指，另一只手抚摸他的JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女托双奶送男嘴里吸吮一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "吻遍TA每寸肌肤一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "角色互换，女学男抽搐，男学女叫床",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将奶油涂乳头上让对方舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男边亲女生边抚摸女生下体一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女握男根，用龟头绕乳头按摩",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "亲TA胸部同时爱抚TA的下体",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用JJ磨蹭女生下体一分钟（禁止进入）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "一遍做爱一遍吻TA 1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式边做边摸她奈子",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女握男跟，撩拨自己私处并呻吟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生用嘴为男生带安全套",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲上下运动20次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式互相口交1分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让TA带上眼罩舔自己任意部位",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸部涂油为男生按摩JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "后入式插入不动30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用屁股碰屁股3下（俗称定亲）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "边为男生路罐，边吸吮规头边揉蛋蛋",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "边吸吮阴蒂边摸柰子边食指抽插",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男含阴蒂并吸吮至女生尖叫",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "插入不动，等女生喊CAO我几次，男生抽插几次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "老汉推车，九浅一深，抽插一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "跟TA舌吻一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "抱紧TA舔TA耳朵后面30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女握男根，边帮男生口边用手玩弄30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "舔对方的脖子到胸一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生隔着内衣把女生私处摸到拉丝",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男生用JJ磨蹭女生私处一分钟（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男生躺在地上，女生蹲在男脸上让男观看15秒（禁止触摸）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "吻遍TA身体每一寸肌肤",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "将酸奶涂在MM/JJ上让TA舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生边亲女生边抚摸女生下体一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女边亲男生边用手帮男生玩弄一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "亲吻TA脚指头一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮TA胸部推油一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男轻轻进入两次，然后到底插入一次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "TA站着自己跪着帮TA口",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "舔TA的菊花15秒（询问感受）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "举起双手让TA任意玩弄一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用脚帮男生按摩下体一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "撕破女生内衣疯狂吸吮下体一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生喊爸爸CAO我男生疯狂抽插",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲上下运动20次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生蹲在男生脸上帮男生kou",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生蹲在男生脸上，男生帮女生kou",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "69式互相kou交一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴里含上kou交水帮TA kou一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "后入式抽插20次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男含女阴蒂吸吮直到女生喊停",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "拍一段跟TA爱爱的视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生拨开蜜穴求哥哥cha入一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "把TA绑在椅子上为所欲为一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸部涂油，女托双乳为男乳交一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "插入不动，女生喊几次CAO我男生抽插几次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男后入九浅一深，女边呻吟边摸阴蒂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男竖起JJ被女生强行坐入反复10次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩一动不动让TA任意玩弄一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男后入，女生喊口令（1、2、1）男听令行事",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从额头一直往下面舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮男生急速lu管直到男生喊停为止（禁止cha入）",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "下体滴满蜂蜜让TA舌舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用棒棒糖抽插后再舔食反复五次",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "亲吻吸吮TA乳头一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生撅起屁股贴在男生脸上，男生舌舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男生强jian女生，一分钟内插入即为胜利",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女生跪着双手背靠后，后入抽插一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生用手紫薇让男生吸吮手指",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男生躺下，女生把口水滴入男生嘴里",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "观音坐莲，左转三圈，右转三圈",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用龟头绕女蜜穴口正反画圆圈按摩（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女撅起屁股手拍屁股对男说：是男人就把我CAO死",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "she在女生脸上（颜she）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩让TA舔任意部位一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "边亲吻TA胸部边爱抚TA私处",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "嘴里含酸奶流出来让TA舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男用JJ磨蹭女生下体一分钟（禁止进入)",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "按住TA头帮自己舔任意部位30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "让TA穿上内裤后舔勃起/出水",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女用下体为男生JJ按摩一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生涂润滑油给TA按摩JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "JJ涂满奶油让女生舌舔干净",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "撅起PP让TA吸吮B30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "下体滴满蜂蜜让男生舌舔干净",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "带眼罩含着TA下体舌头打转30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "带上项圈被TA牵着绳子口交30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "拴上十字扣抽插一分钟不许射",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女坐男脸上让TA舌舔私处一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "手脚拷上让TA摧残30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "屁股填涂润滑油让TA边插边揉拍到泛红",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用捆绳捆住TA用皮鞭抽15秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "坐到TA脸上让TA吸吮30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女生含住龟头吸吮一分钟然后咬一下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "带上眼罩被TA无情任意宰割",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用黄瓜为女生按摩并测量下女生下体温度",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男用龟头绕女生蜜穴口正反画圈按摩（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "跪着张开嘴让TA下体磨蹭30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "拴绳跪在TA面前口交30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻TA指定位置一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女拨开阴唇求TA舔一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男边吸吮阴蒂边用手抽插",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "吸吮TA脚指头30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "酸奶倒胸部至下体让TA舌舔干净",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸夹铃铛后入抽插一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "捆绑拉倒卫生间淋湿",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "带上项圈牵到门口kou一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后入式，边用皮鞭抽屁股一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "穿上丝袜跪下让TA撕开丝袜抽插30秒",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "全身涂润滑油然后观音坐莲",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女生双手涂润滑油交替快速lu管",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男撅起JJ被女生强行坐入反复10次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被TA随意指定一项任务",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "皮鞭抽胸10下",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "让ta嘴夹铃铛口交30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "按在地板上抽插30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "绑在椅子上紫薇给他看",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女张开嘴巴被男抽插一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男用JJ磨蹭女生下体一分钟（禁止进入）",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "帮TA含蛋蛋或阴蒂10秒舌头打转",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "涂润滑油按摩TA私处3分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "从额头一直往下面舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男后入，女生喊口令（1、2、1）男听令行事",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被女王一边亲吻，一边用手隔着衣服抚摸男仆私处",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "命男仆跳劲爆脱衣舞，拖到只剩内裤后被女王使劲捏蛋蛋和JJ",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "跪着忘情的吸舔女王的脚趾头知道女王满意",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王一只手托起下巴欣赏，另一只手伸进裤子把玩男仆JJ和蛋蛋",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王握住JJ拍张高清照设置为手机屏幕",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王量长度和直径，并被女王使劲撰握测试JJ硬度",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "命男仆隔着内裤舌舔亲吻私处",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "掀起内衣命令男仆亲吻胸部，同时扭动屁股摩擦男仆私处",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆亲吻脖颈部和酥胸同时掏出男仆JJ把玩",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "坐男仆身上抚摸胸部并掀起BRA用乳头碰他鼻尖挑逗",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命令男仆用舌头反复舔阴蒂和阴道",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "被女王坐在脸上反复摩擦嘴巴伸出舌头反复舔阴蒂和阴道",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王坐在脸上反复摩擦嘴巴伸出舌头疯狂舔",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王lu管膨胀到最大，被女王坐入使劲夹JJ",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "被女王双腿锁住头部不停舌舔女王私处至女王松开腿",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "命男仆边亲吻奈子边抽插",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王用手紫薇后让男仆吸吮手指反复多次",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆用JJ在女王蜜穴用龟头打转",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王双腿抱住男仆腰部命其疯狂胡乱抽插一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "在男仆屁股上写某某的男仆让其撅屁股抓住JJ拍照留念",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王剥跟香蕉，反复紫薇后喂男仆吃掉",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆用JJ捶背两分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "让男仆舌头围阴蒂打转一分钟吸住阴蒂舌舔一分钟",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王把棒棒糖塞入私处让男仆舌舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "使劲攥握男根使其达到最大硬度，再被女王用大腿使劲夹住",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用gui头为女王胸部按摩两分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "用JJ为女王捶背一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "胸部涂抹酸奶让男仆舔干净",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "让男仆JJ在外阴摩擦三次然后内插一次，循环往复20次",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆用龟头不停摩擦阴蒂和阴道三分钟（禁止进入）",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用脉动瓶子给男仆紫薇，JJ涂油全部塞入瓶内",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命令男仆紫薇打飞机",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "在男仆勃起的JJ上写上女王名字问男仆这是谁的",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "骑男仆背上喊驾驾驾，用皮鞭抽腚演骑马游戏",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "含住男仆龟头用牙齿慢慢加力轻咬直到男仆求饶为止",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "女王脱光衣服命男仆吻遍全身每一寸肌肤",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命令男仆用JJ蘸番茄酱喂女王吃",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "用老汉推车的招式伺候女王一分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女王要体验不同抽插速度和抽插深度性交快感",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男仆为女王做背部推油，并JJ涂油为阴道推油",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "男仆带眼罩为女王丰胸按摩两分钟",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "双手被拷背后被女王强奸",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "女王撅起屁股手拍屁股对男仆说：是男人就把我CAO死",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "男仆抽插时双腿交叉着收紧阴道口",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "命男仆快速抽插拨出射在胸部涂抹均匀为胸部做jing液SPA",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "听女王喊口令（1、2、1）时快时慢，男仆按节奏抽插",
        "executor": "male",
        "moveDelta": 0
      },
      {
        "text": "命男仆内射再让其口交把淌出来的jing液舔干净",
        "executor": "female",
        "moveDelta": 0
      },
      {
        "text": "为男主捏肩捶背并不断吸吮男主耳垂",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为男主跳脱衣热舞掀衣让男主亲吻揉捏乳房",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主伸进内裤和私处，边呻吟边扭动屁股",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "亲吻吸吮男主脚趾头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主暴力揉搓乳房并用两指夹住乳头使劲揪",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被疯狂吸吮乳头并被男主伸进内裤用手指抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "帮男主从拉链处掏出JJ用舌尖刺激",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为主人爱抚JJ同时用舌头不停舔男主乳头",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用双乳为男主推油按摩背部和臀部至男主满意",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "竖起男主JJ用私处为JJ做360度环绕按摩",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪着双手拷背后为男主忘我的kou交并拍视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "跪着双手拷背后被男主疯狂的抽插嘴巴一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴着撅屁股男主快慢深浅不断变化的任意抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "平躺扒开小阴唇说：痒，主人行行好快来CAO我吧",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自摸胸部并扣模蜜穴说我好寂寞被男主拍视频",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被牵狗绳趴着为男主舔JJ舔不好就被狠抽皮鞭",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主用棒棒糖抽插后再甜食棒棒糖反复多次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "自己扒开蜜穴后被男主用黄瓜疯狂抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主抽插3次下体接着被男主插3次嘴巴，反复3次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主再下体塞跳跳糖后猛烈抽插30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "用酒瓶紫薇并被拍视频紫薇私处被拍高清照",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "阴蒂被男主用嘴巴嘬住不放两分钟并不停舌舔",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "不断变化姿势让男主拍10张露yin道做手机壁纸",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "男主JJ上涂番茄酱让女仆舔食干净反复数次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "为男主表演老虎吃香肠的魔术把香肠塞入下体",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主后抱亲吻，左手捏熊右手抚摸抽插蜜穴",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主用色戒的姿势抽插一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴跪着被男主不断猛烈插入抽出数次至求饶为止",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主紧紧抓住两个基本点逐步深入一个中心",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "胸部涂油为男主不停nai交和kou交至男主满意",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被男主边CAO边亲一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "装醉酒女不省人事被主人任意摧残三分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "激烈反抗后被男主强奸，为了不吃亏把男主强奸",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "双手涂油变换各种手势为男主JJ做精致SPA",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女仆用阴道吞下JJ收紧阴道为男主反复拔罐",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被JJ打脸后退3格",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "后ru抽插20次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "再淋浴房开着淋浴帮男主kou交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "插入不动女仆喊CAO我一次随后男主抽插一次",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "口含跳跳糖为男主kou交",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在阴道中倒满啤酒/白水供男主引用",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "趴跪被男主双手抓胳膊用JJ爆菊花一分钟",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "撅腚剥开蜜穴自摸阴蒂求男主CAO死自己算了",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "在女仆屁股写上：性奴 后疯狂抽插",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "不断舌舔吸撸舌头打转让男主高潮口射并吞精",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《吸星大法-全场》\n男女岔开坐成一圈，用嘴吸住一张扑克一个一个的往下传。你有足够的肺活量可以玩无限多动作，可以跨越N人去找你下一个人来接牌，牌掉了罚酒：）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手面对面坐到身上直到解除惩罚",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《撕纸-全场》\n差不多撕一长条餐巾纸含着用嘴一个一个撕下去，接过去后前一人嘴里必须留有纸，当然撕到后面纸是越来越少，放弃的罚两杯，尝试没成功的只罚一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "顺着抓全场异性xiong或裤裆内10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《我爱你VS不要脸-全场》\n听上去有些“暧昧”，实际上是个练反应的好游戏。众人围坐成一圈，规定只能对自己左边的人说“我爱你”，对右边的人说“不要脸”。两人之间只能连续对话3次。一旦有人说错，即受罚。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "女性脱掉内衣套到男性头上或穿上",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用舌头从脖子慢慢舔到耳根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《江湖刀棍-双人》\n人在江湖混哪有不挨棍呀（人在江湖飘啊谁能不挨刀啊），我一（二三四五）棍（刀）砍死你呀（出手指，五大四四大三依次，一大于五）",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手面对面坐到身上直到游戏结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手从后面伸进衣服抓胸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "顺着摸全场异性大腿内侧或屁股10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手背对坐到身上磨蹭10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《定时炸弹-全场》\n发起者用手机设定一个定时闹钟（推荐20s-2min），向下一人提问同时递出手机，回答方回答成功后可将手机递给下一人并提问。闹铃响起后手机在谁手中，谁就接受惩罚。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《跟唱-全场》\n每个人轮流唱一句歌词，接着下一个人继续唱，任何人如果跟不上节奏或者唱错了歌词，就要喝酒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《禁酒令》\n规定某段时间内，不能说：喝、酒两个字，谁先口误或者说错了，就要喝酒。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "《逢七过-全场》\n1、游戏参加者们围成一圈。\n2、从1开始轮流报数，但逢尾数是7或者7的倍数，则不能报数，要喊“过”。\n3、如果犯规则要“惩罚”，结束惩罚后，由受惩罚者开始报数，可以进行任意报数，不必从1开始。",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手从后面伸进衣服抓胸10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "顺着摸全场异性大腿内侧或屁股10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用舌头从脖子慢慢舔到耳根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "交杯酒和对手一起喝半杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手打屁股十下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手面对面坐到身上，直到游戏结束",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "坐对手旁边任由对手摸任何部位到解除惩罚",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被全场所有异性拥抱一次亲吻一口",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "和对手亲吻10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手用舌头从脖子慢慢舔到耳根",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手打屁股10下",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被全场所有异性全身各部位按摩30秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "被对手隔着内裤摸下体10秒",
        "executor": "both",
        "moveDelta": 0
      },
      {
        "text": "喝一杯",
        "executor": "both",
        "moveDelta": 0
      }
    ]
  }
];

export const DEFAULT_THEMES: Theme[] = [
  ...MINE_MODE_THEMES,
  ...DEFAULT_THEME_SEEDS.map(theme => ({
    ...theme,
    modes: theme.modes || DEFAULT_THEME_MODES
  }))
];

