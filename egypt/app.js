const plans = {
  abu: {
    title: "A. 开罗 2.5 天 + 阿布辛贝",
    summary:
      "在 C 版基础上把开罗拉到 2.5 天：落地下午看 GEM，第二天金字塔线，第三天补开罗城市面，再晚飞阿斯旺。",
    verdict:
      "当前推荐：保留阿斯旺和阿布辛贝，10/3 上午转红海，10/6 早班机回开罗接 15:00 返程。",
    scores: {
      completeness: "高",
      ease: "中高",
      transit: "中高",
    },
    intro:
      "这版把开罗补到更完整，同时保留阿斯旺、阿布辛贝和卢克索主线。红海不是两个完整自然日，但 10/3 下午、10/4 全天、10/5 半天加起来接近两天度假体感。",
    route: [
      [30.0444, 31.2357],
      [29.9937, 31.1194],
      [29.9773, 31.1325],
      [29.8713, 31.2165],
      [24.0889, 32.8998],
      [22.3372, 31.6258],
      [24.4529, 32.9283],
      [24.9781, 32.8735],
      [25.6872, 32.6396],
      [27.2579, 33.8116],
      [30.0444, 31.2357],
    ],
    days: [
      {
        day: "D1",
        date: "9/25 周五",
        title: "抵达开罗，下午 GEM",
        city: "开罗",
        coords: [30.0444, 31.2357],
        morning: "清晨抵达开罗，入境、取行李、换钱或取现，去酒店放行李。能 early check-in 就先休息。",
        afternoon: "前往 GEM 大埃及博物馆，把它作为当天唯一主内容。建议住吉萨或 GEM 附近，减少落地日通勤。",
        evening: "轻量吃饭，早点收。今晚不用再加老城或夜市。",
        tags: ["落地日", "GEM", "轻量"],
        places: [
          { id: "abu-cairo", name: "开罗市区", coords: [30.0444, 31.2357] },
          { id: "abu-gem", name: "GEM", coords: [29.9937, 31.1194] },
        ],
      },
      {
        day: "D2",
        date: "9/26 周六",
        title: "吉萨、萨卡拉、达舒尔",
        city: "吉萨与孟菲斯墓葬区",
        coords: [29.9773, 31.1325],
        morning: "吉萨金字塔群 + 狮身人面像。建议请导游或包车，早出发，减少现场拉扯。",
        afternoon: "萨卡拉阶梯金字塔 + 达舒尔。只抓主线，不追求每个点都深挖。",
        evening: "回酒店休息。今晚不要飞阿斯旺，把开罗城市日留出来。",
        tags: ["强执行", "金字塔线", "建议包车"],
        places: [
          { id: "abu-giza", name: "吉萨金字塔群", coords: [29.9773, 31.1325] },
          { id: "abu-sphinx", name: "狮身人面像", coords: [29.9753, 31.1376] },
          { id: "abu-saqqara", name: "Saqqara", coords: [29.8713, 31.2165] },
          { id: "abu-dahshur", name: "Dahshur", coords: [29.8069, 31.2086] },
        ],
      },
      {
        day: "D3",
        date: "9/27 周日",
        title: "开罗城市日，晚上飞阿斯旺",
        city: "开罗到阿斯旺",
        coords: [30.0444, 31.2357],
        morning: "开罗城市线择一条：老开罗、伊斯兰开罗，或埃及文明博物馆。不要三条都塞。",
        afternoon: "哈利利市场或 Zamalek 慢走，留出回酒店取行李和去机场的时间。",
        evening: "晚飞阿斯旺，抵达后直接入住。尽量选不太晚的航班。",
        tags: ["开罗城市", "弹性", "夜飞"],
        places: [
          { id: "abu-old-cairo", name: "老开罗", coords: [30.0061, 31.2308] },
          { id: "abu-islamic-cairo", name: "伊斯兰开罗", coords: [30.0477, 31.2628] },
          { id: "abu-zamalek", name: "Zamalek", coords: [30.0611, 31.2197] },
          { id: "abu-cairo-airport-out", name: "开罗机场", coords: [30.1219, 31.4056] },
          { id: "abu-aswan-arrive", name: "阿斯旺", coords: [24.0889, 32.8998] },
        ],
      },
      {
        day: "D4",
        date: "9/28 周一",
        title: "阿斯旺，尼罗河和边境感",
        city: "阿斯旺",
        coords: [24.0889, 32.8998],
        morning: "Philae Temple，慢一点看水、岛和神庙空间。",
        afternoon: "Nubian Museum 或酒店休息。这里是从开罗强执行切回身体节奏的一天。",
        evening: "尼罗河边吃饭或短暂 felucca，保持轻量，为阿布辛贝早起留体力。",
        tags: ["Philae", "Nubian Museum", "慢节奏"],
        places: [
          { id: "abu-philae", name: "Philae Temple", coords: [24.025, 32.8841] },
          { id: "abu-nubian", name: "Nubian Museum", coords: [24.0816, 32.8892] },
        ],
      },
      {
        day: "D5",
        date: "9/29 周二",
        title: "阿布辛贝一日往返",
        city: "阿布辛贝",
        coords: [22.3372, 31.6258],
        morning: "清晨出发前往阿布辛贝。小团、包车或航班都提前看好。",
        afternoon: "返回阿斯旺。当天不再排重内容。",
        evening: "继续住阿斯旺，早点休息。",
        tags: ["阿布辛贝", "早起", "文明高光"],
        places: [{ id: "abu-abu-simbel", name: "阿布辛贝", coords: [22.3372, 31.6258] }],
      },
      {
        day: "D6",
        date: "9/30 周三",
        title: "阿斯旺包车北上卢克索",
        city: "尼罗河谷",
        coords: [24.4529, 32.9283],
        morning: "从阿斯旺包车出发，先看康翁波神庙。",
        afternoon: "继续看埃德富神庙，再前往卢克索。",
        evening: "傍晚或晚上抵达卢克索入住。今晚不要安排夜游。",
        tags: ["包车", "Kom Ombo", "Edfu"],
        places: [
          { id: "abu-kom-ombo", name: "Kom Ombo", coords: [24.4529, 32.9283] },
          { id: "abu-edfu", name: "Edfu", coords: [24.9781, 32.8735] },
          { id: "abu-luxor-arrive", name: "卢克索", coords: [25.6872, 32.6396] },
        ],
      },
      {
        day: "D7",
        date: "10/1 周四",
        title: "卢克索西岸",
        city: "卢克索",
        coords: [25.7402, 32.6014],
        morning: "帝王谷。建议请导游，挑重点墓室看。",
        afternoon: "哈特谢普苏特神庙、门农巨像。体力好可加 Medinet Habu。",
        evening: "回酒店恢复。卢克索这两晚尽量住舒服一点。",
        tags: ["西岸", "建议导游", "帝王谷"],
        places: [
          { id: "abu-valley-kings", name: "帝王谷", coords: [25.7402, 32.6014] },
          { id: "abu-hatshepsut", name: "哈特谢普苏特神庙", coords: [25.7386, 32.6066] },
          { id: "abu-colossi", name: "门农巨像", coords: [25.7206, 32.6106] },
          { id: "abu-medinet", name: "Medinet Habu", coords: [25.7195, 32.6006] },
        ],
      },
      {
        day: "D8",
        date: "10/2 周五",
        title: "卢克索东岸",
        city: "卢克索",
        coords: [25.7188, 32.6573],
        morning: "卡纳克神庙，留足时间慢看。",
        afternoon: "中午和下午前半段回酒店休息。",
        evening: "傍晚到夜里去卢克索神庙。灯光秀只作为体力好时的可选项。",
        tags: ["Karnak", "Luxor Temple", "灯光秀可选"],
        places: [
          { id: "abu-karnak", name: "Karnak", coords: [25.7188, 32.6573] },
          { id: "abu-luxor-temple", name: "Luxor Temple", coords: [25.6995, 32.6391] },
        ],
      },
      {
        day: "D9",
        date: "10/3 周六",
        title: "上午去红海，下午切换度假",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "从卢克索出发前往红海，按 4.5-5 小时车程预估，优先考虑 Hurghada / Soma Bay / Makadi Bay / El Gouna。",
        afternoon: "入住海边酒店，吃点东西、换衣服，下午后半段开始海边休息。",
        evening: "海边晚饭，正式进入恢复段。",
        tags: ["转场", "红海", "休息"],
        places: [{ id: "abu-red-sea", name: "红海度假区", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D10",
        date: "10/4 周日",
        title: "红海整日",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "出海深潜或轻浮潜，男友可以安排潜水。",
        afternoon: "沙滩、泳池、SPA 或继续看海，不安排景点赶路。",
        evening: "海边晚餐，保住这趟行程的身体感。",
        tags: ["潜水", "完整休息日", "红海"],
        places: [{ id: "abu-hurghada", name: "Hurghada / Soma Bay", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D11",
        date: "10/5 周一",
        title: "红海完整日",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "继续海边休息，或补一个轻量海上项目。",
        afternoon: "泳池、浮潜、SPA 或留白。不再安排沙漠和长途项目。",
        evening: "早点收行李，为 10/6 早班机回开罗留体力。",
        tags: ["完整休息日", "红海", "返程准备"],
        places: [{ id: "abu-red-sea-return", name: "红海度假区", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D12",
        date: "10/6 周二",
        title: "早班机回开罗，15:00 返程",
        city: "返程",
        coords: [30.1219, 31.4056],
        morning: "从红海飞开罗，优先选 07:40 或 09:45 到达 CAI 的航班，给重新值机和出境留余量。",
        afternoon: "15:00 从开罗起飞，经阿布扎比转机。",
        evening: "飞行途中，10/7 09:00 抵达北京。",
        tags: ["早班机", "开罗机场", "10/7 到家"],
        places: [
          { id: "abu-red-sea-final", name: "红海度假区", coords: [27.2579, 33.8116] },
          { id: "abu-cairo-airport", name: "开罗机场", coords: [30.1219, 31.4056] },
        ],
      },
    ],
  },
  lean: {
    title: "C. 无阿布辛贝版",
    summary:
      "更像你的节奏。开罗和卢克索主线打稳，把阿斯旺和阿布辛贝让出去，换回完整红海恢复段。",
    verdict:
      "适合你想让这趟旅行真的有感受力。少一点完整感，但身体节奏更稳，红海也不再只是匆匆路过。",
    scores: {
      completeness: "中高",
      ease: "高",
      transit: "中",
    },
    intro:
      "这版减少大转场，把精力留给开罗、卢克索和红海。它不是少玩，而是把第一次埃及的主线和恢复段都保住。",
    route: [
      [30.0444, 31.2357],
      [29.9773, 31.1325],
      [25.6872, 32.6396],
      [26.1419, 32.6709],
      [27.2579, 33.8116],
      [30.0444, 31.2357],
    ],
    days: [
      {
        day: "D1",
        date: "9/25 周五",
        title: "抵达开罗，轻量进入埃及",
        city: "开罗",
        coords: [30.0444, 31.2357],
        morning: "抵达开罗，完成入境和酒店入住。",
        afternoon: "只安排恢复。可以在 Zamalek 或尼罗河边轻轻走一段。",
        evening: "简单晚饭，早点睡。第一天不用证明什么。",
        tags: ["入住", "低强度", "开罗"],
        places: [
          { id: "lean-cairo", name: "开罗市区", coords: [30.0444, 31.2357] },
          { id: "lean-zamalek", name: "Zamalek", coords: [30.0611, 31.2197] },
        ],
      },
      {
        day: "D2",
        date: "9/26 周六",
        title: "GEM，大埃及博物馆",
        city: "吉萨",
        coords: [29.9937, 31.1194],
        morning: "Grand Egyptian Museum。上午先看最核心展陈。",
        afternoon: "继续 GEM，给图坦卡蒙和主线文物留足时间。",
        evening: "回城吃饭，轻松散步。",
        tags: ["博物馆", "古埃及主线", "建议预约"],
        places: [{ id: "lean-gem", name: "GEM", coords: [29.9937, 31.1194] }],
      },
      {
        day: "D3",
        date: "9/27 周日",
        title: "吉萨金字塔群和狮身人面像",
        city: "吉萨",
        coords: [29.9773, 31.1325],
        morning: "吉萨高原和金字塔群。建议请导游，减少现场消耗。",
        afternoon: "狮身人面像和观景点收尾。",
        evening: "回酒店休息，避免继续硬塞。",
        tags: ["必看", "建议导游", "高热量日"],
        places: [
          { id: "lean-giza", name: "吉萨金字塔群", coords: [29.9773, 31.1325] },
          { id: "lean-sphinx", name: "狮身人面像", coords: [29.9753, 31.1376] },
        ],
      },
      {
        day: "D4",
        date: "9/28 周一",
        title: "Saqqara / Dahshur，夜飞卢克索",
        city: "开罗到卢克索",
        coords: [29.8713, 31.2165],
        morning: "Saqqara 和 Dahshur 半日，补上金字塔体系的前史。",
        afternoon: "回开罗取行李，预留机场时间。",
        evening: "飞卢克索，抵达后入住。",
        tags: ["转场", "古迹", "夜飞"],
        places: [
          { id: "lean-saqqara", name: "Saqqara", coords: [29.8713, 31.2165] },
          { id: "lean-dahshur", name: "Dahshur", coords: [29.8069, 31.2086] },
        ],
      },
      {
        day: "D5",
        date: "9/29 周二",
        title: "卢克索西岸",
        city: "卢克索",
        coords: [25.7402, 32.6014],
        morning: "帝王谷。建议请导游，重点看几座墓，不用追求数量。",
        afternoon: "哈特谢普苏特神庙、门农巨像。状态好可加 Medinet Habu。",
        evening: "酒店恢复。卢克索这段住舒服一点很值。",
        tags: ["建议导游", "帝王谷", "西岸"],
        places: [
          { id: "lean-valley-kings", name: "帝王谷", coords: [25.7402, 32.6014] },
          { id: "lean-hatshepsut", name: "哈特谢普苏特神庙", coords: [25.7386, 32.6066] },
          { id: "lean-medinet", name: "Medinet Habu", coords: [25.7195, 32.6006] },
        ],
      },
      {
        day: "D6",
        date: "9/30 周三",
        title: "Karnak 和 Luxor Temple",
        city: "卢克索",
        coords: [25.7188, 32.6573],
        morning: "Karnak。慢慢看柱厅和神庙尺度。",
        afternoon: "回酒店休息，不安排密集转场。",
        evening: "Luxor Temple 傍晚到夜里去。",
        tags: ["Karnak", "Luxor Temple", "留白"],
        places: [
          { id: "lean-karnak", name: "Karnak", coords: [25.7188, 32.6573] },
          { id: "lean-luxor-temple", name: "Luxor Temple", coords: [25.6995, 32.6391] },
        ],
      },
      {
        day: "D7",
        date: "10/1 周四",
        title: "Dendera 半日或卢克索慢走",
        city: "Dendera",
        coords: [26.1419, 32.6709],
        morning: "如果状态好，包车去 Dendera Temple of Hathor。",
        afternoon: "回卢克索后休息。若前几天累，这天可直接改成酒店和尼罗河边慢走。",
        evening: "轻松晚饭，为红海段留体力。",
        tags: ["弹性日", "Dendera", "可替换"],
        places: [{ id: "lean-dendera", name: "Dendera", coords: [26.1419, 32.6709] }],
      },
      {
        day: "D8",
        date: "10/2 周五",
        title: "卢克索到红海",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "从卢克索去红海，建议住 Soma Bay / Makadi Bay / El Gouna 这类更适合休息的区域。",
        afternoon: "入住海边酒店，不排项目。",
        evening: "海边晚饭，切换到度假节奏。",
        tags: ["转场", "红海", "休息"],
        places: [{ id: "lean-red-sea", name: "红海度假区", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D9",
        date: "10/3 周六",
        title: "红海整日",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "你躺海边或轻浮潜，男友安排潜水。",
        afternoon: "继续休息，可以做 SPA 或只看海。",
        evening: "海边晚餐。",
        tags: ["潜水", "浮潜", "恢复"],
        places: [{ id: "lean-hurghada-1", name: "Hurghada / Soma Bay", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D10",
        date: "10/4 周日",
        title: "红海第二整日",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "继续海边恢复。若前一天潜水，这天适合更松。",
        afternoon: "轻浮潜、泳池、读书或发呆。",
        evening: "不赶路，保住这趟的身体感。",
        tags: ["完整休息日", "红海", "低强度"],
        places: [{ id: "lean-hurghada-2", name: "红海海岸", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D11",
        date: "10/5 周一",
        title: "红海机动日",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "半天继续休息，或补一个轻量海上项目。",
        afternoon: "根据 10/6 航班决定是否提前回开罗。",
        evening: "如果国际航班衔接紧，建议今晚回开罗住一晚。",
        tags: ["机动", "缓冲", "返程准备"],
        places: [
          { id: "lean-red-sea-buffer", name: "红海度假区", coords: [27.2579, 33.8116] },
          { id: "lean-cairo-buffer", name: "开罗", coords: [30.0444, 31.2357] },
        ],
      },
      {
        day: "D12",
        date: "10/6 周二",
        title: "从埃及返程",
        city: "返程",
        coords: [30.0444, 31.2357],
        morning: "红海飞开罗或已在开罗，按国际航班办理返程。",
        afternoon: "预留足够转机和出境时间。",
        evening: "从埃及返程，10/7 国内落地。",
        tags: ["返程", "预留缓冲", "10/7 到家"],
        places: [{ id: "lean-cairo-airport", name: "开罗机场", coords: [30.1219, 31.4056] }],
      },
    ],
  },
  doubao: {
    title: "B. 原 C：豆包修正版",
    summary:
      "基于豆包方案微调：GEM 放到落地日下午，阿斯旺到卢克索改为包车北上。完整度高，同时保住红海两个完整日。",
    verdict:
      "这是一个强行平衡但可成立的版本。它保留阿布辛贝和阿斯旺，也保住红海两整天，代价是开罗被压缩，9/26 和 9/29 都需要执行力。",
    scores: {
      completeness: "高",
      ease: "中高",
      transit: "中高",
    },
    intro:
      "这版适合你想保留阿布辛贝，又不想让红海只剩匆匆一晚。重点是第一天不要硬逛老城，9/29 用包车完成 Kom Ombo + Edfu + 卢克索转场。",
    route: [
      [30.0444, 31.2357],
      [29.9937, 31.1194],
      [29.9773, 31.1325],
      [29.8713, 31.2165],
      [24.0889, 32.8998],
      [22.3372, 31.6258],
      [24.4529, 32.9283],
      [24.9781, 32.8735],
      [25.6872, 32.6396],
      [27.2579, 33.8116],
      [30.0444, 31.2357],
    ],
    days: [
      {
        day: "D1",
        date: "9/25 周五",
        title: "抵达开罗，下午 GEM",
        city: "开罗",
        coords: [30.0444, 31.2357],
        morning: "清晨抵达开罗，入境、取行李、换钱或取现，去酒店放行李。能 early check-in 就先休息。",
        afternoon: "前往 GEM 大埃及博物馆，把它作为当天唯一主内容。",
        evening: "轻量吃饭，尼罗河边或 Zamalek 简单散步。",
        tags: ["落地日", "GEM", "轻量"],
        places: [
          { id: "doubao-cairo", name: "开罗市区", coords: [30.0444, 31.2357] },
          { id: "doubao-gem", name: "GEM", coords: [29.9937, 31.1194] },
          { id: "doubao-zamalek", name: "Zamalek", coords: [30.0611, 31.2197] },
        ],
      },
      {
        day: "D2",
        date: "9/26 周六",
        title: "吉萨、萨卡拉、达舒尔，晚飞阿斯旺",
        city: "开罗到阿斯旺",
        coords: [29.9773, 31.1325],
        morning: "吉萨金字塔群 + 狮身人面像。建议请导游或包车，早出发。",
        afternoon: "萨卡拉阶梯金字塔 + 达舒尔弯曲金字塔，之后回开罗取行李去机场。",
        evening: "傍晚或晚上飞阿斯旺，抵达后直接入住。",
        tags: ["强执行", "金字塔线", "夜飞"],
        places: [
          { id: "doubao-giza", name: "吉萨金字塔群", coords: [29.9773, 31.1325] },
          { id: "doubao-sphinx", name: "狮身人面像", coords: [29.9753, 31.1376] },
          { id: "doubao-saqqara", name: "Saqqara", coords: [29.8713, 31.2165] },
          { id: "doubao-dahshur", name: "Dahshur", coords: [29.8069, 31.2086] },
        ],
      },
      {
        day: "D3",
        date: "9/27 周日",
        title: "阿斯旺和菲莱神庙",
        city: "阿斯旺",
        coords: [24.0889, 32.8998],
        morning: "菲莱神庙，慢一点看水、岛和神庙空间。",
        afternoon: "阿斯旺市区轻量游览，可加努比亚博物馆。",
        evening: "尼罗河边散步或 felucca，保持松一点。",
        tags: ["Philae", "Nubian Museum", "缓冲"],
        places: [
          { id: "doubao-philae", name: "Philae Temple", coords: [24.025, 32.8841] },
          { id: "doubao-nubian", name: "Nubian Museum", coords: [24.0816, 32.8892] },
          { id: "doubao-aswan", name: "阿斯旺", coords: [24.0889, 32.8998] },
        ],
      },
      {
        day: "D4",
        date: "9/28 周一",
        title: "阿布辛贝一日往返",
        city: "阿布辛贝",
        coords: [22.3372, 31.6258],
        morning: "清晨出发前往阿布辛贝。小团、包车或航班都要提前看好。",
        afternoon: "返回阿斯旺，当天不再排重内容。",
        evening: "继续住阿斯旺，早点休息。",
        tags: ["阿布辛贝", "早起", "文明高光"],
        places: [{ id: "doubao-abu-simbel", name: "阿布辛贝", coords: [22.3372, 31.6258] }],
      },
      {
        day: "D5",
        date: "9/29 周二",
        title: "阿斯旺包车北上卢克索",
        city: "尼罗河谷",
        coords: [24.4529, 32.9283],
        morning: "从阿斯旺包车出发，先看康翁波神庙。",
        afternoon: "继续看埃德富神庙，再前往卢克索。",
        evening: "傍晚或晚上抵达卢克索入住。",
        tags: ["包车", "Kom Ombo", "Edfu"],
        places: [
          { id: "doubao-kom-ombo", name: "Kom Ombo", coords: [24.4529, 32.9283] },
          { id: "doubao-edfu", name: "Edfu", coords: [24.9781, 32.8735] },
          { id: "doubao-luxor-arrive", name: "卢克索", coords: [25.6872, 32.6396] },
        ],
      },
      {
        day: "D6",
        date: "9/30 周三",
        title: "卢克索西岸",
        city: "卢克索",
        coords: [25.7402, 32.6014],
        morning: "帝王谷。建议请导游，挑重点墓室看。",
        afternoon: "哈特谢普苏特神庙、门农巨像。体力好可加 Medinet Habu。",
        evening: "回酒店恢复。",
        tags: ["西岸", "建议导游", "帝王谷"],
        places: [
          { id: "doubao-valley-kings", name: "帝王谷", coords: [25.7402, 32.6014] },
          { id: "doubao-hatshepsut", name: "哈特谢普苏特神庙", coords: [25.7386, 32.6066] },
          { id: "doubao-colossi", name: "门农巨像", coords: [25.7206, 32.6106] },
          { id: "doubao-medinet", name: "Medinet Habu", coords: [25.7195, 32.6006] },
        ],
      },
      {
        day: "D7",
        date: "10/1 周四",
        title: "卢克索东岸",
        city: "卢克索",
        coords: [25.7188, 32.6573],
        morning: "卡纳克神庙，留足时间慢看。",
        afternoon: "中午和下午前半段回酒店休息。",
        evening: "傍晚到夜里去卢克索神庙。灯光秀只作为体力好时的可选项。",
        tags: ["Karnak", "Luxor Temple", "灯光秀可选"],
        places: [
          { id: "doubao-karnak", name: "Karnak", coords: [25.7188, 32.6573] },
          { id: "doubao-luxor-temple", name: "Luxor Temple", coords: [25.6995, 32.6391] },
        ],
      },
      {
        day: "D8",
        date: "10/2 周五",
        title: "卢克索到红海",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "从卢克索出发前往红海，优先考虑 Hurghada / Soma Bay / Makadi Bay / El Gouna。",
        afternoon: "入住海边酒店，自由适应海滩。",
        evening: "海边晚饭，切换到恢复节奏。",
        tags: ["转场", "红海", "休息"],
        places: [{ id: "doubao-red-sea-arrive", name: "红海度假区", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D9",
        date: "10/3 周六",
        title: "红海完整全天 1",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "出海深潜或轻浮潜，男友可以安排潜水。",
        afternoon: "沙滩度假，不安排景点赶路。",
        evening: "海边晚餐。",
        tags: ["潜水", "完整休息日", "红海"],
        places: [{ id: "doubao-red-sea-1", name: "Hurghada / Soma Bay", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D10",
        date: "10/4 周日",
        title: "红海完整全天 2",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "浮潜、泳池、看海，节奏放慢。",
        afternoon: "继续躺平休闲。",
        evening: "把这天保成纯度假第二天。",
        tags: ["浮潜", "躺平", "恢复"],
        places: [{ id: "doubao-red-sea-2", name: "红海海岸", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D11",
        date: "10/5 周一",
        title: "红海回开罗",
        city: "红海到开罗",
        coords: [30.0444, 31.2357],
        morning: "红海慢一点，退房前不排重项目。",
        afternoon: "中午或下午返回开罗。优先看航班，其次包车。",
        evening: "傍晚或晚上抵达开罗，以休息为主。伴手礼只是有余力再买。",
        tags: ["返程缓冲", "开罗最后一晚", "伴手礼可选"],
        places: [
          { id: "doubao-red-sea-return", name: "红海度假区", coords: [27.2579, 33.8116] },
          { id: "doubao-cairo-final", name: "开罗", coords: [30.0444, 31.2357] },
        ],
      },
      {
        day: "D12",
        date: "10/6 周二",
        title: "开罗机场返程",
        city: "返程",
        coords: [30.1219, 31.4056],
        morning: "从开罗酒店前往机场，预留足够出境和退税/安检时间。",
        afternoon: "搭乘国际航班返程。",
        evening: "飞行途中，10/7 国内落地。",
        tags: ["返程", "开罗机场", "10/7 到家"],
        places: [{ id: "doubao-cairo-airport", name: "开罗机场", coords: [30.1219, 31.4056] }],
      },
    ],
  },
};

const planOrder = ["abu", "doubao", "lean"];
const planMenuLabels = {
  abu: "推荐行程",
  doubao: "原 C",
  lean: "无阿布辛贝",
};

const comparisonMeta = {
  abu: {
    label: "A 新推荐",
    shortName: "开罗 2.5 天 + 阿布辛贝",
    metrics: [
      ["开罗", "2.5 天"],
      ["红海", "约 3 天"],
      ["阿布辛贝", "保留"],
      ["压力点", "10/6 衔接"],
    ],
    pros: ["开罗层次更完整", "保留阿斯旺和阿布辛贝", "红海时间更完整"],
    cons: ["10/6 需要国内航班衔接国际航班", "10/3 卢克索到红海会吃掉上午", "9/27 晚飞阿斯旺要看航班"],
    notes: ["10/6 优先选 07:40 或 09:45 到达 CAI", "10:10 到达可用但余量更薄", "开罗城市日只选一条主线"],
    stays: [
      ["开罗", 2.5],
      ["阿斯旺", 1],
      ["阿布辛贝", 0.5],
      ["Kom Ombo / Edfu", 0.5],
      ["卢克索", 2],
      ["红海", 3],
    ],
  },
  doubao: {
    label: "B 原 C",
    shortName: "豆包修正版",
    metrics: [
      ["开罗", "1.5 天"],
      ["红海", "约 3 天"],
      ["阿布辛贝", "保留"],
      ["压力点", "9/26 强执行"],
    ],
    pros: ["阿斯旺和阿布辛贝都保留", "红海时间最扎实", "后半程恢复感最好"],
    cons: ["开罗被压缩", "9/26 金字塔线后晚飞阿斯旺较硬", "落地日 GEM 容错不高"],
    notes: ["适合更重视红海完整度", "9/26 建议包车和导游", "若落地疲劳明显，D1 GEM 体验会打折"],
    stays: [
      ["开罗", 1.5],
      ["阿斯旺", 1],
      ["阿布辛贝", 0.5],
      ["Kom Ombo / Edfu", 0.5],
      ["卢克索", 2],
      ["红海", 3],
    ],
  },
  lean: {
    label: "C 无阿布辛贝",
    shortName: "舒适版",
    metrics: [
      ["开罗", "约 3 天"],
      ["红海", "约 3 天"],
      ["阿布辛贝", "放弃"],
      ["压力点", "最低"],
    ],
    pros: ["整体最松", "红海恢复最稳定", "卢克索有弹性日"],
    cons: ["放弃阿斯旺和阿布辛贝", "第一次埃及完整度降低", "以后单独补阿布辛贝概率低"],
    notes: ["Dendera 可按体力替换为卢克索慢走", "适合优先保护体力和体验质量", "如果阿布辛贝是执念，这版心理遗憾最大"],
    stays: [
      ["开罗", 3],
      ["卢克索", 2],
      ["Dendera", 0.5],
      ["红海", 3],
    ],
  },
};

let activePlanKey = "abu";
let map;
let view;
let routeSource;
let placeSource;
let routeLayer;
let placeLayer;
const placeFeatures = new Map();
let activePlaceId = null;
let activeRouteDayId = null;

const planMenu = document.querySelector("#planMenu");
const planMenuButton = document.querySelector("#planMenuButton");
const planMenuList = document.querySelector("#planMenuList");
const planMenuOptions = Array.from(document.querySelectorAll(".plan-menu-option"));
const compareToggleButton = document.querySelector("#compareToggleButton");
const comparisonDialog = document.querySelector("#comparisonDialog");
const comparisonClose = document.querySelector("#comparisonClose");
const title = document.querySelector("#planTitle");
const summary = document.querySelector("#planSummary");
const completeness = document.querySelector("#scoreCompleteness");
const ease = document.querySelector("#scoreEase");
const transit = document.querySelector("#scoreTransit");
const verdict = document.querySelector("#planVerdict");
const intro = document.querySelector("#timelineIntro");
const timeline = document.querySelector("#timeline");
const comparisonOverview = document.querySelector("#comparisonOverview");
const comparisonTable = document.querySelector("#comparisonTable");
const fallback = document.querySelector("#mapFallback");
const fitRouteButton = document.querySelector("#fitRouteButton");
const placeInsightCard = document.querySelector("#placeInsightCard");
const placeInsightClose = document.querySelector("#placeInsightClose");
const placeInsightTitle = document.querySelector("#placeInsightTitle");
const placeInsightNames = document.querySelector("#placeInsightNames");
const placeInsightDescription = document.querySelector("#placeInsightDescription");
const placeInsightReason = document.querySelector("#placeInsightReason");
let currentRouteExtent = null;
const pinIconCache = new Map();
const placeInsights = {
  开罗市区: {
    description: "埃及首都的现实切面：尼罗河、老城区、车流和日常生活混在一起，适合用低强度方式进入旅行状态。",
    reason: "推荐作为抵达后的缓冲点，先建立开罗的城市感，而不是一落地就冲重景点。",
  },
  开罗: {
    description: "开罗是埃及旅行的交通和文化入口，古埃及遗产、伊斯兰城区和现代城市生活在这里叠在一起。",
    reason: "适合作为行程开合点：既方便国际航班衔接，也能补采购、餐厅和城市散步。",
  },
  Zamalek: {
    description: "尼罗河中 Gezira 岛上的使馆区与生活街区，咖啡馆、餐厅、树荫街道和河景都比较集中。",
    reason: "推荐给抵达日或恢复日，安全感和松弛度相对更好，适合不赶景点地散步吃饭。",
  },
  GEM: {
    description: "大埃及博物馆位于吉萨附近，是理解古埃及文明主线的最佳开场之一，适合先看文物再去遗址现场。",
    reason: "推荐放在金字塔前后，能先建立时间线和审美框架，后面看神庙、墓室会更有上下文。",
  },
  吉萨金字塔群: {
    description: "埃及最标志性的古王国遗址，包含胡夫、哈夫拉、孟卡拉三大金字塔和吉萨高原景观。",
    reason: "第一次埃及几乎必去。建议早到并请靠谱导游，减少现场拉扯，把体力留给观看本身。",
  },
  狮身人面像: {
    description: "吉萨高原的经典符号，身体为狮、头部为法老形象，和金字塔共同构成最具辨识度的埃及画面。",
    reason: "推荐和吉萨金字塔同日顺路看，停留不用太久，但很适合作为金字塔日的视觉收束。",
  },
  Saqqara: {
    description: "萨卡拉是孟菲斯古城墓葬区，阶梯金字塔在这里展开了埃及金字塔形制的早期实验。",
    reason: "推荐给想看懂金字塔演化的人，比单看吉萨更完整，也能避开一点纯打卡感。",
  },
  Dahshur: {
    description: "达舒尔以弯曲金字塔和红色金字塔闻名，游客密度通常低于吉萨，荒漠感更明显。",
    reason: "推荐和 Saqqara 组合，能看到金字塔从实验走向成熟的过程，摄影和空间感都更好。",
  },
  "Philae Temple": {
    description: "菲莱神庙位于阿斯旺水域中的岛上，以伊西斯崇拜和水上抵达体验著名，空间氛围很柔和。",
    reason: "推荐作为阿斯旺核心点，船行、岛屿和神庙结合，节奏比大遗址日更舒展。",
  },
  "Nubian Museum": {
    description: "努比亚博物馆展示尼罗河上游与努比亚文化，能补足埃及南部不只是法老神庙的一面。",
    reason: "推荐给对文化层次敏感的人，看完会更理解阿斯旺、阿布辛贝和埃及南部的边境感。",
  },
  阿斯旺: {
    description: "阿斯旺位于埃及南部，尼罗河、花岗岩、努比亚文化和更慢的城市节奏构成它的气质。",
    reason: "推荐作为阿布辛贝和菲莱神庙的基地，也适合在高密度古迹之间换一口气。",
  },
  阿布辛贝: {
    description: "拉美西斯二世在埃及南部修建的巨型岩窟神庙，正立面四尊坐像极具压迫感和纪念碑性。",
    reason: "推荐给想要埃及文明高光的人。代价是早起和转场强度高，但视觉记忆点非常强。",
  },
  "Kom Ombo": {
    description: "康翁波神庙临近尼罗河，罕见地同时供奉鳄鱼神索贝克和鹰神荷鲁斯，左右对称结构很特别。",
    reason: "推荐作为阿斯旺到卢克索路上的中途点，不绕太多路，却能让转场日也有内容。",
  },
  Edfu: {
    description: "埃德富的荷鲁斯神庙保存度很高，塔门、庭院和浮雕体系完整，适合理解托勒密时期神庙空间。",
    reason: "推荐和 Kom Ombo 串联，能把尼罗河谷从南到北的神庙线补得更顺。",
  },
  卢克索: {
    description: "卢克索是古底比斯所在地，东岸看神庙，西岸看王陵，是埃及文明线最密集的区域之一。",
    reason: "推荐作为行程核心停留地，比开罗更适合沉浸式看古埃及遗址。",
  },
  帝王谷: {
    description: "新王国时期法老陵墓集中地，墓室壁画和地下空间是理解古埃及来世观的关键现场。",
    reason: "推荐请导游并挑重点墓室，不必追求数量；看懂几座比匆匆扫很多座更有价值。",
  },
  哈特谢普苏特神庙: {
    description: "依山而建的阶梯式神庙，属于女法老哈特谢普苏特，建筑线条在卢克索西岸非常醒目。",
    reason: "推荐和帝王谷同日看，能从墓葬空间切换到纪念建筑，视觉差异很强。",
  },
  门农巨像: {
    description: "两尊巨大的阿蒙霍特普三世坐像，是原祭庙遗址残存的地标，通常作为西岸行程短暂停靠点。",
    reason: "推荐顺路停 10-15 分钟，不必单独绕行，但很适合作为西岸尺度感的开场。",
  },
  "Medinet Habu": {
    description: "拉美西斯三世的祭庙，浮雕保存较好，游客相对少，色彩和墙面叙事都值得慢看。",
    reason: "推荐给状态好、想避开人群的人；它常被低估，但观感很扎实。",
  },
  Karnak: {
    description: "卡纳克神庙群规模巨大，柱厅、方尖碑、圣湖和多代法老扩建痕迹构成复杂的宗教空间。",
    reason: "推荐留足时间慢看，这是卢克索东岸的重头戏，不适合压缩成匆匆打卡。",
  },
  "Luxor Temple": {
    description: "卢克索神庙位于市中心，傍晚到夜间灯光下氛围很好，和卡纳克之间有古代大道相连。",
    reason: "推荐傍晚后去，光线更柔和，也能把卢克索的一天收束得更有仪式感。",
  },
  Dendera: {
    description: "丹德拉的哈索尔神庙以天花板、浮雕和保存度著称，位置在卢克索以北，通常需要专门安排半日。",
    reason: "推荐给不去阿斯旺但仍想增加神庙层次的方案；如果行程紧，它属于加分项而非刚需。",
  },
  红海度假区: {
    description: "赫尔格达、Soma Bay、Makadi Bay 一带主打海边酒店、浮潜、潜水和恢复体力。",
    reason: "推荐放在行程后段，用来消化开罗和卢克索的高密度古迹输入，让旅行不是一路硬冲。",
  },
  "Hurghada / Soma Bay": {
    description: "赫尔格达更方便热闹，Soma Bay 更度假和安静，二者都适合作为红海休整基地。",
    reason: "推荐根据酒店和潜水需求选择：想方便选 Hurghada，想躺平和海景体验选 Soma Bay。",
  },
  红海海岸: {
    description: "红海海岸以清澈海水、珊瑚、浮潜和海边酒店为核心，重点不是景点数量而是恢复节奏。",
    reason: "推荐至少留一个完整白天，不然红海会变成路过，而不是这趟行程的真正休息段。",
  },
  开罗机场: {
    description: "开罗国际机场是埃及主要国际进出港，也常用于衔接阿斯旺、卢克索、红海等国内段。",
    reason: "推荐给足缓冲时间，埃及转场变量不少，返程日不要把机场衔接压得太极限。",
  },
};

const placeNameMeta = {
  开罗市区: {
    zh: "开罗市区",
    en: "Cairo",
    abbr: "CAI",
    local: "القاهرة",
    duration: "1.5-3h",
  },
  开罗: {
    zh: "开罗",
    en: "Cairo",
    abbr: "CAI",
    local: "القاهرة",
    duration: "2-4h",
  },
  Zamalek: {
    zh: "扎马雷克",
    en: "Zamalek",
    local: "الزمالك",
    duration: "1-2h",
  },
  GEM: {
    zh: "大埃及博物馆",
    en: "Grand Egyptian Museum",
    abbr: "GEM",
    local: "المتحف المصري الكبير",
    duration: "4-5h",
  },
  吉萨金字塔群: {
    zh: "吉萨金字塔群",
    en: "Giza Pyramid Complex",
    local: "أهرامات الجيزة",
    duration: "2.5-3.5h",
  },
  狮身人面像: {
    zh: "狮身人面像",
    en: "Great Sphinx of Giza",
    local: "أبو الهول",
    duration: "0.5h",
  },
  Saqqara: {
    zh: "萨卡拉",
    en: "Saqqara",
    local: "سقارة",
    duration: "1.5-2h",
  },
  Dahshur: {
    zh: "达舒尔",
    en: "Dahshur",
    local: "دهشور",
    duration: "1-1.5h",
  },
  老开罗: {
    zh: "老开罗",
    en: "Old Cairo",
    local: "مصر القديمة",
    duration: "2-3h",
  },
  伊斯兰开罗: {
    zh: "伊斯兰开罗",
    en: "Islamic Cairo",
    local: "القاهرة الإسلامية",
    duration: "2-3h",
  },
  开罗机场: {
    zh: "开罗国际机场",
    en: "Cairo International Airport",
    abbr: "CAI",
    local: "مطار القاهرة الدولي",
    duration: "国内 1.5-2h / 国际 3h",
  },
  阿斯旺: {
    zh: "阿斯旺",
    en: "Aswan",
    abbr: "ASW",
    local: "أسوان",
    duration: "1.5-3h",
  },
  "Philae Temple": {
    zh: "菲莱神庙",
    en: "Philae Temple",
    local: "معبد فيلة",
    duration: "1.5-2h",
  },
  "Nubian Museum": {
    zh: "努比亚博物馆",
    en: "Nubian Museum",
    local: "متحف النوبة",
    duration: "1.5-2h",
  },
  阿布辛贝: {
    zh: "阿布辛贝",
    en: "Abu Simbel",
    local: "أبو سمبل",
    duration: "1.5-2h",
  },
  "Kom Ombo": {
    zh: "康翁波神庙",
    en: "Kom Ombo Temple",
    local: "معبد كوم أمبو",
    duration: "0.75-1h",
  },
  Edfu: {
    zh: "埃德富神庙",
    en: "Edfu Temple",
    local: "معبد إدفو",
    duration: "1-1.5h",
  },
  卢克索: {
    zh: "卢克索",
    en: "Luxor",
    abbr: "LXR",
    local: "الأقصر",
    duration: "1.5-3h",
  },
  帝王谷: {
    zh: "帝王谷",
    en: "Valley of the Kings",
    local: "وادي الملوك",
    duration: "2-3h",
  },
  哈特谢普苏特神庙: {
    zh: "哈特谢普苏特神庙",
    en: "Mortuary Temple of Hatshepsut",
    local: "معبد حتشبسوت",
    duration: "1-1.5h",
  },
  门农巨像: {
    zh: "门农巨像",
    en: "Colossi of Memnon",
    local: "تمثالا ممنون",
    duration: "0.25h",
  },
  "Medinet Habu": {
    zh: "哈布城",
    en: "Medinet Habu",
    local: "مدينة هابو",
    duration: "1-1.5h",
  },
  Karnak: {
    zh: "卡纳克神庙",
    en: "Karnak Temple Complex",
    local: "معبد الكرنك",
    duration: "2-3h",
  },
  "Luxor Temple": {
    zh: "卢克索神庙",
    en: "Luxor Temple",
    local: "معبد الأقصر",
    duration: "1-1.5h",
  },
  Dendera: {
    zh: "丹德拉神庙",
    en: "Dendera Temple Complex",
    local: "معبد دندرة",
    duration: "1.5-2h",
  },
  红海度假区: {
    zh: "红海度假区",
    en: "Red Sea Resort Area",
    local: "منطقة منتجعات البحر الأحمر",
    duration: "半天起",
  },
  "Hurghada / Soma Bay": {
    zh: "赫尔格达 / 索马湾",
    en: "Hurghada / Soma Bay",
    abbr: "HRG",
    local: "الغردقة / سوما باي",
    duration: "半天-全天",
  },
  红海海岸: {
    zh: "红海海岸",
    en: "Red Sea Coast",
    local: "ساحل البحر الأحمر",
    duration: "半天-全天",
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderComparison() {
  if (!comparisonOverview || !comparisonTable) return;

  comparisonOverview.innerHTML = planOrder.map((planKey) => renderPlanComparisonCard(planKey)).join("");
  comparisonTable.innerHTML = renderDailyComparisonTable();
  updateComparisonActive(activePlanKey);
}

function renderPlanComparisonCard(planKey) {
  const plan = plans[planKey];
  const meta = comparisonMeta[planKey];
  const maxStay = Math.max(...Object.values(comparisonMeta).flatMap((entry) => entry.stays.map(([, days]) => days)));

  return `
    <article class="comparison-card" data-compare-plan="${escapeHtml(planKey)}">
      <div class="comparison-card-head">
        <div>
          <p>${escapeHtml(meta.label)}</p>
          <h3>${escapeHtml(meta.shortName)}</h3>
        </div>
        <button class="compare-select-button" type="button" data-plan="${escapeHtml(planKey)}">查看</button>
      </div>
      <div class="metric-strip">
        ${meta.metrics
          .map(
            ([name, value]) => `
              <div>
                <span>${escapeHtml(name)}</span>
                <strong>${escapeHtml(value)}</strong>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="pros-cons-grid">
        <section>
          <h4>Pros</h4>
          <ul>${meta.pros.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section>
          <h4>Cons</h4>
          <ul>${meta.cons.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
      </div>
      <section class="note-list">
        <h4>注意事项</h4>
        <ul>${meta.notes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="stay-list">
        <h4>城市停留</h4>
        ${meta.stays
          .map(
            ([city, days]) => `
              <div class="stay-row">
                <span>${escapeHtml(city)}</span>
                <div class="stay-meter" aria-hidden="true"><i style="width: ${(days / maxStay) * 100}%"></i></div>
                <strong>${escapeHtml(days)} 天</strong>
              </div>
            `
          )
          .join("")}
      </section>
    </article>
  `;
}

function renderDailyComparisonTable() {
  const dates = plans.abu.days.map((day, index) => ({
    day: day.day,
    date: day.date,
    index,
  }));

  return `
    <table class="comparison-table">
      <thead>
        <tr>
          <th scope="col">日期</th>
          ${planOrder
            .map(
              (planKey) => `
                <th scope="col" data-compare-plan="${escapeHtml(planKey)}">
                  <button class="compare-plan-heading" type="button" data-plan="${escapeHtml(planKey)}">
                    <span>${escapeHtml(comparisonMeta[planKey].label)}</span>
                    <strong>${escapeHtml(comparisonMeta[planKey].shortName)}</strong>
                  </button>
                </th>
              `
            )
            .join("")}
        </tr>
      </thead>
      <tbody>
        ${dates
          .map(
            ({ day, date, index }) => `
              <tr>
                <th scope="row">
                  <strong>${escapeHtml(day)}</strong>
                  <span>${escapeHtml(date)}</span>
                </th>
                ${planOrder.map((planKey) => renderDailyComparisonCell(planKey, index)).join("")}
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderDailyComparisonCell(planKey, dayIndex) {
  const day = plans[planKey].days[dayIndex];
  if (!day) return `<td data-compare-plan="${escapeHtml(planKey)}"></td>`;

  return `
    <td data-compare-plan="${escapeHtml(planKey)}">
      <div class="comparison-day-cell">
        <p>${escapeHtml(day.city)}</p>
        <strong>${escapeHtml(day.title)}</strong>
        <span>${escapeHtml(day.tags.slice(0, 3).join(" · "))}</span>
      </div>
    </td>
  `;
}

function updateComparisonActive(planKey) {
  document.querySelectorAll("[data-compare-plan]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.comparePlan === planKey);
  });
}

function getTransitNote(day) {
  const text = `${day.title} ${day.city} ${day.morning} ${day.afternoon} ${day.evening}`;
  if (text.includes("开罗城市日") && text.includes("阿斯旺")) {
    return "跨城交通：开罗飞阿斯旺约 1h20m；包车约 10-12h，不建议当天这样走。";
  }
  if (text.includes("晚飞卢克索")) {
    return "跨城交通：开罗飞卢克索约 1h；若包车约 8-9h，不建议当天这样走。";
  }
  if (text.includes("晚飞阿斯旺")) {
    return "跨城交通：开罗飞阿斯旺约 1h20m；包车约 10-12h，不建议当天这样走。";
  }
  if (text.includes("阿布辛贝一日")) {
    return "跨城交通：阿斯旺往返阿布辛贝包车约 6-7h；若遇到合适航班，单程飞行约 45m。";
  }
  if (text.includes("阿斯旺包车北上卢克索")) {
    return "跨城交通：阿斯旺到卢克索包车约 4-5h；加 Kom Ombo、Edfu 停留后按全天转场估算。";
  }
  if (text.includes("卢克索到红海") || text.includes("上午去红海")) {
    return "跨城交通：卢克索到红海包车约 4.5-5h；若绕到机场飞行衔接通常不如包车直接。";
  }
  if (text.includes("红海回开罗")) {
    return "跨城交通：红海飞开罗约 1h；包车约 5-6h，建议优先看航班。";
  }
  if (text.includes("提前回开罗")) {
    return "跨城交通：红海飞开罗约 1h；包车约 5-6h，若要留缓冲可提前一晚回。";
  }
  if (text.includes("早班机回开罗") || text.includes("红海飞开罗")) {
    return "跨城交通：红海飞开罗约 1h；包车约 5-6h，返程日优先选早班机。";
  }
  if (text.includes("从红海或开罗返程")) {
    return "跨城交通：若当天从红海出发，飞开罗约 1h；包车约 5-6h。";
  }

  return "";
}

function getDayAdvice(day) {
  const text = [...day.tags, day.title, day.morning, day.afternoon, day.evening].join(" ");
  let advice = "只保留当天主线，临时加点以体力和交通余量为准。";
  if (text.includes("早班机")) advice = "优先选更早到 CAI 的航班，到开罗后直接按国际出发节奏走。";
  else if (text.includes("阿布辛贝")) advice = "早起强度高，当天只保留阿布辛贝，不再叠加重项目。";
  else if (text.includes("夜飞")) advice = "下午开始收束行程，给取行李、去机场和航班延误留余量。";
  else if (text.includes("强执行")) advice = "建议包车或导游，减少现场沟通成本，按主线看不贪多。";
  else if (text.includes("转场")) advice = "转场日按半天移动估算，到酒店后不再排硬项目。";
  else if (text.includes("红海")) advice = "这天的价值是恢复体力，避免再加长途或高强度项目。";
  else if (text.includes("卢克索")) advice = "古迹密度高，抓核心点，午后留出酒店恢复时间。";
  else if (text.includes("开罗城市")) advice = "城市线只选一条主线，不把老开罗、伊斯兰开罗和博物馆全塞满。";

  const transitNote = getTransitNote(day);
  return transitNote ? `${advice} ${transitNote}` : advice;
}

function renderPlaceTrail(day) {
  return day.places
    .map(
      (place, index) => `
        ${index > 0 ? `<span class="route-separator" aria-hidden="true">→</span>` : ""}
        <button class="place-button" type="button" data-place-id="${escapeHtml(place.id)}">${escapeHtml(place.name)}</button>
      `
    )
    .join("");
}

function renderTimeline(plan) {
  timeline.innerHTML = plan.days
    .map(
      (day) => `
        <article class="day-card" id="${day.day}">
          <div class="day-card-head">
            <span class="day-number">${escapeHtml(day.day)}</span>
            <span class="day-meta">${escapeHtml(day.date)} · ${escapeHtml(day.city)}</span>
          </div>
          <h3 class="day-title">${escapeHtml(day.title)}</h3>
          <div class="route-trail" aria-label="${escapeHtml(day.day)} 可点击地点">
            ${renderPlaceTrail(day)}
          </div>
          <p class="day-advice">${escapeHtml(getDayAdvice(day))}</p>
        </article>
      `
    )
    .join("");
}

function initMap() {
  if (!window.ol) {
    fallback.hidden = false;
    return;
  }

  routeSource = new ol.source.Vector();
  placeSource = new ol.source.Vector();
  view = new ol.View({
    center: toMapCoord([26.8, 32.2]),
    zoom: 6,
    minZoom: 4,
    maxZoom: 15,
  });

  routeLayer = new ol.layer.Vector({
    source: routeSource,
    style: routeStyle,
  });

  placeLayer = new ol.layer.Vector({
    source: placeSource,
    style: pointStyle,
  });

  map = new ol.Map({
    target: "map",
    view,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
      routeLayer,
      placeLayer,
    ],
  });

  map.on("click", (event) => {
    const feature = map.forEachFeatureAtPixel(event.pixel, (candidate) => candidate);
    if (feature?.get("placeId")) {
      activatePlace(feature.get("placeId"), { scroll: true });
    }
  });

  map.on("pointermove", (event) => {
    const hit = map.hasFeatureAtPixel(event.pixel);
    map.getTargetElement().style.cursor = hit ? "pointer" : "grab";
  });

  window.__mapDebug = {
    engine: "OpenLayers",
    interactions: "default",
  };

  const mapContainer = document.querySelector("#map");
  if ("ResizeObserver" in window && mapContainer) {
    new ResizeObserver(() => scheduleMapRefresh()).observe(mapContainer);
  }

  window.addEventListener("resize", scheduleMapRefresh);
  window.addEventListener("load", () => scheduleMapRefresh({ fitRoute: true }));
}

function renderMap(plan) {
  if (!map) return;

  routeSource.clear();
  placeSource.clear();
  placeFeatures.clear();
  activePlaceId = null;
  activeRouteDayId = null;

  const fullRouteFeature = new ol.Feature({
    geometry: new ol.geom.LineString(plan.route.map(toMapCoord)),
  });
  currentRouteExtent = fullRouteFeature.getGeometry().getExtent();

  let previousPlace = null;
  plan.days.forEach((day) => {
    if (previousPlace && day.places.length > 0) {
      addRouteSegment(day.day, [previousPlace.coords, day.places[0].coords], "transit");
    }

    if (day.places.length > 1) {
      addRouteSegment(
        day.day,
        day.places.map((place) => place.coords),
        "day"
      );
    }

    day.places.forEach((place) => {
      const feature = new ol.Feature({
        geometry: new ol.geom.Point(toMapCoord(place.coords)),
        placeId: place.id,
        dayId: day.day,
        placeName: place.name,
        title: day.title,
        date: day.date,
      });
      placeSource.addFeature(feature);
      placeFeatures.set(place.id, { feature, dayId: day.day, day, place });
    });

    if (day.places.length > 0) {
      previousPlace = day.places[day.places.length - 1];
    }
  });

  clearActivePlace();
  scheduleMapRefresh({ fitRoute: true });
}

function addRouteSegment(dayId, coords, routeType) {
  if (coords.length < 2) return;
  const feature = new ol.Feature({
    geometry: new ol.geom.LineString(coords.map(toMapCoord)),
    dayId,
    routeType,
  });
  routeSource.addFeature(feature);
}

function scheduleMapRefresh(options = {}) {
  if (!map) return;
  const run = () => {
    map.updateSize();
    if (options.fitRoute && currentRouteExtent) {
      view.fit(currentRouteExtent, {
        padding: [64, 64, 64, 64],
        maxZoom: 7,
        duration: 350,
      });
    }
  };

  requestAnimationFrame(run);
  requestAnimationFrame(() => requestAnimationFrame(run));
  [80, 240, 700].forEach((delay) => window.setTimeout(run, delay));
}

function toMapCoord(latLng) {
  return ol.proj.fromLonLat([latLng[1], latLng[0]]);
}

function routeStyle(feature) {
  const isInactive = activeRouteDayId && feature.get("dayId") !== activeRouteDayId;
  const routeType = feature.get("routeType");
  return new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: getRouteColor(isInactive ? 0.3 : 1),
      width: routeType === "transit" ? 4 : 5,
      lineCap: "round",
      lineJoin: "round",
    }),
  });
}

function getRouteColor(alpha) {
  const color = getToken("--route");
  if (!color.startsWith("#")) return color;

  const hex = color.slice(1);
  const normalized =
    hex.length === 3
      ? hex
          .split("")
          .map((char) => char + char)
          .join("")
      : hex;
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function pointStyle(feature) {
  const active = feature.get("placeId") === activePlaceId;
  if (active) {
    return new ol.style.Style({
      image: new ol.style.Icon({
        src: getPinIconSrc(),
        anchor: [0.5, 1],
        scale: 1,
      }),
      text: new ol.style.Text({
        text: feature.get("dayId"),
        offsetY: -34,
        fill: new ol.style.Fill({ color: getToken("--surface") }),
        stroke: new ol.style.Stroke({ color: getToken("--accent-dark"), width: 3 }),
        font: "800 13px sans-serif",
      }),
    });
  }

  return new ol.style.Style({
    image: new ol.style.Circle({
      radius: 8,
      fill: new ol.style.Fill({ color: getToken("--surface") }),
      stroke: new ol.style.Stroke({
        color: getToken("--accent"),
        width: 2,
      }),
    }),
    text: new ol.style.Text({
      text: feature.get("dayId"),
      offsetY: -20,
      fill: new ol.style.Fill({ color: getToken("--ink") }),
      stroke: new ol.style.Stroke({ color: getToken("--surface"), width: 4 }),
      font: "700 12px sans-serif",
    }),
  });
}

function getPinIconSrc() {
  const cacheKey = [getToken("--accent"), getToken("--accent-dark"), getToken("--surface")].join("|");
  if (pinIconCache.has(cacheKey)) return pinIconCache.get(cacheKey);

  const [accent, accentDark, surface] = cacheKey.split("|");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="68" viewBox="0 0 54 68">
      <path fill="${accent}" stroke="${accentDark}" stroke-width="4" d="M27 3C13.2 3 4 13.1 4 26.1C4 43.5 27 65 27 65S50 43.5 50 26.1C50 13.1 40.8 3 27 3Z"/>
      <circle cx="27" cy="27" r="12" fill="${surface}" stroke="${accentDark}" stroke-width="3"/>
    </svg>
  `;
  const src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  pinIconCache.set(cacheKey, src);
  return src;
}

function getToken(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function getPlaceNameMeta(placeName) {
  return (
    placeNameMeta[placeName] ?? {
      zh: placeName,
      en: placeName,
      local: "待确认",
      duration: "按当天节奏",
    }
  );
}

function renderPlaceNames(names) {
  const rows = [
    ["中文", names.zh],
    ["English", names.en],
    ["缩写", names.abbr],
    ["埃及阿语", names.local],
    ["推荐游览", names.duration],
  ].filter(([, value]) => value);

  return rows
    .map(
      ([label, value]) => `
        <div>
          <dt>${escapeHtml(label)}</dt>
          <dd>${escapeHtml(value)}</dd>
        </div>
      `
    )
    .join("");
}

function buildPlaceInsight(entry) {
  const { day, place } = entry;
  const insight = placeInsights[place.name] ?? {
    description: `${place.name} 是 ${day.city} 这一天的关键停靠点，适合结合当天路线顺路安排。`,
    reason: `推荐理由：它能帮你把「${day.title}」这一天的空间动线串起来。`,
  };

  return {
    title: place.name,
    names: getPlaceNameMeta(place.name),
    description: insight.description,
    reason: insight.reason,
  };
}

function updatePlaceInsight(entry) {
  const insight = buildPlaceInsight(entry);
  placeInsightTitle.textContent = insight.title;
  if (placeInsightNames) placeInsightNames.innerHTML = renderPlaceNames(insight.names);
  placeInsightDescription.textContent = insight.description;
  placeInsightReason.textContent = insight.reason;
  placeInsightCard.hidden = false;
}

function clearActivePlace(options = {}) {
  activePlaceId = null;
  activeRouteDayId = null;
  routeLayer?.changed();
  placeLayer?.changed();
  document.querySelectorAll(".place-button.is-active").forEach((button) => button.classList.remove("is-active"));
  document.querySelectorAll(".day-card.is-active").forEach((card) => card.classList.remove("is-active"));
  placeInsightCard.hidden = true;

  if (options.fitRoute) {
    scheduleMapRefresh({ fitRoute: true });
  }
}

function activatePlace(placeId, options = {}) {
  const entry = placeFeatures.get(placeId);
  if (!entry || !map) return;

  activePlaceId = placeId;
  activeRouteDayId = entry.dayId;
  routeLayer.changed();
  placeLayer.changed();

  document.querySelectorAll(".place-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.placeId === placeId);
  });

  document.querySelectorAll(".day-card").forEach((card) => {
    card.classList.toggle("is-active", card.id === entry.dayId);
  });

  view.animate({
    center: toMapCoord(entry.place.coords),
    zoom: Math.max(view.getZoom() || 7, 9),
    duration: 450,
  });
  updatePlaceInsight(entry);
  if (options.scroll) {
    document.querySelector(`#${entry.dayId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function closePlanMenu() {
  if (!planMenuButton || !planMenuList) return;
  planMenuList.hidden = true;
  planMenuButton.setAttribute("aria-expanded", "false");
  planMenu?.classList.remove("is-open");
}

function togglePlanMenu() {
  if (!planMenuButton || !planMenuList) return;
  const shouldOpen = planMenuList.hidden;
  planMenuList.hidden = !shouldOpen;
  planMenuButton.setAttribute("aria-expanded", String(shouldOpen));
  planMenu?.classList.toggle("is-open", shouldOpen);
}

function updatePlanMenuActive(planKey) {
  planMenuOptions.forEach((option) => {
    const isActive = option.dataset.plan === planKey;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });

  if (planMenuButton) {
    const activeLabel = planMenuLabels[planKey] ?? "其他行程方案";
    planMenuButton.innerHTML = `
      <span>${escapeHtml(activeLabel)}</span>
      <span class="menu-caret" aria-hidden="true"></span>
    `;
  }
}

function renderPlan(planKey) {
  const plan = plans[planKey];
  activePlanKey = planKey;

  if (title) title.textContent = plan.title;
  if (summary) summary.textContent = plan.summary;
  if (completeness) completeness.textContent = plan.scores.completeness;
  if (ease) ease.textContent = plan.scores.ease;
  if (transit) transit.textContent = plan.scores.transit;
  if (verdict) verdict.textContent = plan.verdict;
  if (intro) intro.textContent = plan.intro;

  updatePlanMenuActive(planKey);

  updateComparisonActive(planKey);
  renderTimeline(plan);
  renderMap(plan);
}

planMenuButton?.addEventListener("click", togglePlanMenu);

planMenuList?.addEventListener("click", (event) => {
  const option = event.target.closest(".plan-menu-option");
  if (!option) return;
  renderPlan(option.dataset.plan);
  closePlanMenu();
});

document.addEventListener("click", (event) => {
  if (!planMenu?.contains(event.target)) closePlanMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePlanMenu();
});

timeline.addEventListener("click", (event) => {
  const button = event.target.closest(".place-button");
  if (!button) return;
  activatePlace(button.dataset.placeId);
});

comparisonOverview?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-plan]");
  if (!button) return;
  renderPlan(button.dataset.plan);
});

comparisonTable?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-plan]");
  if (!button) return;
  renderPlan(button.dataset.plan);
});

compareToggleButton?.addEventListener("click", () => {
  closePlanMenu();
  comparisonDialog?.showModal();
});

comparisonClose?.addEventListener("click", () => comparisonDialog?.close());

comparisonDialog?.addEventListener("click", (event) => {
  if (event.target === comparisonDialog) comparisonDialog.close();
});

placeInsightClose.addEventListener("click", () => clearActivePlace());
fitRouteButton.addEventListener("click", () => clearActivePlace({ fitRoute: true }));

initMap();
renderComparison();
renderPlan(activePlanKey);
