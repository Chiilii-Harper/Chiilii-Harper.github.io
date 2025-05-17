// 定义各选项的列表
const nations = ["Le continent magique", "月海宫", "留仙洲", "真武宫", "冥河大陆", "天机门", "幽灵盟"];
const genders = ["男", "女"];
const races = Array(30).fill('人族').concat(["龙族", "凤族", "妖族", "魔族", "仙族", "神族", "鬼族", "精灵族", "修罗族", "魂族", "翼族", "冥族", "海族", "兽族", "灵族", "矮人族", "亡灵族", "恶魔族", "巨人族", "鱼人族", "狼人族", "血族", "天使族", "麒麟族", "巨魔族", "机械族", "帕瓦"]);
const occupations = ["炼丹师", "炼器师", "阵法师", "符篆师", "灵兽师", "傀儡师", "灵植师", "魔法师", "战士", "龙骑士", "骑士", "风水师", "音魂师", "牧师", "祭司", "巫师", "恶魔", "异能者", "召唤师", "魂术师", "蛊师", "剑士", "拳师", "机械师", "刀客", "枪手", "弓箭手", "狂战士", "法师", "魔修", "仙修", "灵画师", "灵梦师", "医师", "刺客", "毒师", "谋士", "士兵", "将军", "统帅", "元帅", "军师", "特工", "僧人", "道士", "神父", "教授", "主教", "修女", "商人", "银行家", "当铺老板", "酒馆老板", "旅店老板", "掮客（中介）", "送信人", "皇帝", "王子", "公主", "将军", "侍卫", "太监", "宫女", "妃子", "贵族", "书生", "诗人", "画家", "江湖侠客", "神医", "尼姑", "文官", "武将", "御史", "大臣", "宰相", "首相", "铁匠", "铸造师", "武器匠", "盔甲匠", "金银匠", "珠宝匠", "钟表匠", "石匠", "泥瓦匠", "木匠", "纺织工", "印染工", "裁缝", "陶瓷工", "造纸工", "印刷工", "建筑工", "画家", "雕刻家", "作家", "诗人", "散文家", "小说家", "剧作家", "编剧", "学者", "教师", "教授", "法学家", "医生", "翻译", "吟游诗人", "乐手", "舞女", "演员", "导演", "农民", "菜农", "棉农", "猪农", "豆农", "渔民", "牧民", "瓜农", "果农", "茶农", "药农", "猎人", "樵夫", "妓女", "侍女", "厨师", "招待", "马夫", "管事", "守卫", "治安官", "法官", "收税人", "行刑人", "刽子手", "乞丐", "流浪汉", "骗子", "小偷", "劫匪", "打手"];
const elements = ["听诊器", "兔子", "蛋糕", "皇冠", "金钱", "机械脑", "水滴", "心脏", "牛", "多手", "流星", "鳄鱼", "盲人", "云朵", "狮子", "火焰", "鸭子", "鱼", "电脑", "书本", "眼镜", "铅笔", "猫", "叶子", "独角兽", "时钟", "苹果", "汉堡", "天使", "悲观", "乐观", "游戏", "音乐", "法庭", "聋子", "树", "蝴蝶", "花朵", "公文包", "双面人", "电影", "画架", "地球", "胡子", "烟花", "鸟", "气球", "调皮", "照相机", "裙子", "化学实验", "恶魔"];

// 获取按钮元素
const nationButton = document.getElementById('nation');
const genderButton = document.getElementById('gender');
const raceButton = document.getElementById('race');
const occupationButton = document.getElementById('occupation');
const elementButton = document.getElementById('element');

// 为按钮添加点击事件监听器
nationButton.addEventListener('click', () => {
    nationButton.textContent = getRandomItem(nations);
});

genderButton.addEventListener('click', () => {
    genderButton.textContent = getRandomItem(genders);
});

raceButton.addEventListener('click', () => {
    raceButton.textContent = getRandomItem(races);
});

occupationButton.addEventListener('click', () => {
    occupationButton.textContent = getRandomItem(occupations);
});

elementButton.addEventListener('click', () => {
    elementButton.textContent = getRandomItem(elements);
});

// 随机选择函数
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getRandomElement() {
    return elements[Math.floor(Math.random() * elements.length)];
}

const element6Button = document.getElementById('element6');
const element7Button = document.getElementById('element7');

if (element6Button) {
    element6Button.addEventListener('click', () => {
        element6Button.textContent = getRandomElement();
    });
}

if (element7Button) {
    element7Button.addEventListener('click', () => {
        element7Button.textContent = getRandomElement();
    });
}