const Mock = require('mockjs');

const address = [
  "冬天的早班飞机",
  "我们始终没有牵手旅行",
  "不想告别的夏天",
  "最初的爱情",
  "最后的仪式",
  "十一种孤独",
  "一部法国小说",
  "还乡之谜",
  "地下时光",
  "给樱桃以性别",
  "天使与昆虫",
  "在路上",
  "绿皮书",
  "老人与海",
  "追风筝的人",
  "小王子",
  "百年孤独",
  "人类简史",
  "时间简史",
  "心有林夕",
  "麦田里的守望者"
]

const data = Mock.mock({
  "list|1-10": [{
    "id|+1": 1,
    "name": "@cname",
    "address|+1": address,
    "unitPrice": 5.64,
    "worldPrice": 7.56,
    "range": 0.34,
    "remarks|1-3": [
      {
        "id|+1": 1,
        "type|+1": ['服', '惠'],
        "remark": '服务优先'
      }
    ],
  }]
})

export default data