const plans = {
  abu: {
    title: "A. 有阿布辛贝",
    summary:
      "更完整的埃及主线。开罗之后进入阿斯旺，加入阿布辛贝，再北上卢克索，最后用红海收尾。",
    verdict:
      "适合你想把第一次埃及的文明线走得更完整。代价是红海只剩一个完整休息日，转场密度明显更高。",
    scores: {
      completeness: "高",
      ease: "中",
      transit: "高",
    },
    intro:
      "这版把阿斯旺和阿布辛贝放进来，体验更饱满，但每天之间的连接要更严谨，尤其 9/30 到 10/4 这一段。",
    route: [
      [30.0444, 31.2357],
      [29.9773, 31.1325],
      [24.0889, 32.8998],
      [22.3372, 31.6258],
      [24.4529, 32.9283],
      [25.6872, 32.6396],
      [27.2579, 33.8116],
      [30.0444, 31.2357],
    ],
    days: [
      {
        day: "D1",
        date: "9/25 周五",
        title: "抵达开罗，先把身体放稳",
        city: "开罗",
        coords: [30.0444, 31.2357],
        morning: "北京夜航后抵达开罗，入境、取行李、换少量现金或取现。",
        afternoon: "入住酒店，午后只安排恢复。可以在 Zamalek 或尼罗河边轻轻走一段。",
        evening: "早晚饭都简单处理。今晚的目标不是开始冲景点，而是把时差和体力接住。",
        tags: ["入住", "低强度", "开罗"],
        places: [
          { id: "abu-cairo", name: "开罗市区", coords: [30.0444, 31.2357] },
          { id: "abu-zamalek", name: "Zamalek", coords: [30.0611, 31.2197] },
        ],
      },
      {
        day: "D2",
        date: "9/26 周六",
        title: "GEM，大埃及博物馆建立世界观",
        city: "吉萨",
        coords: [29.9937, 31.1194],
        morning: "前往 Grand Egyptian Museum。建议提前订票，上午先看主线展厅。",
        afternoon: "继续 GEM，不急着把当天塞满。博物馆结束后回酒店休息。",
        evening: "Zamalek 或 Downtown 吃饭，留一个城市散步的口子。",
        tags: ["博物馆", "古埃及主线", "建议预约"],
        places: [{ id: "abu-gem", name: "GEM", coords: [29.9937, 31.1194] }],
      },
      {
        day: "D3",
        date: "9/27 周日",
        title: "吉萨金字塔群和狮身人面像",
        city: "吉萨",
        coords: [29.9773, 31.1325],
        morning: "早些出发，吉萨高原、胡夫金字塔、观景点。建议请靠谱导游。",
        afternoon: "狮身人面像和周边收尾。不要再硬塞大量开罗景点。",
        evening: "回酒店休息，晚餐轻松一点。",
        tags: ["必看", "建议导游", "高热量日"],
        places: [
          { id: "abu-giza", name: "吉萨金字塔群", coords: [29.9773, 31.1325] },
          { id: "abu-sphinx", name: "狮身人面像", coords: [29.9753, 31.1376] },
        ],
      },
      {
        day: "D4",
        date: "9/28 周一",
        title: "Saqqara / Dahshur，夜飞阿斯旺",
        city: "开罗到阿斯旺",
        coords: [29.8713, 31.2165],
        morning: "Saqqara 和 Dahshur 半日，补上金字塔演化脉络。",
        afternoon: "回开罗取行李，预留充足机场时间。",
        evening: "飞阿斯旺，抵达后直接入住。",
        tags: ["转场", "古迹", "夜飞"],
        places: [
          { id: "abu-saqqara", name: "Saqqara", coords: [29.8713, 31.2165] },
          { id: "abu-dahshur", name: "Dahshur", coords: [29.8069, 31.2086] },
        ],
      },
      {
        day: "D5",
        date: "9/29 周二",
        title: "阿斯旺，尼罗河和边境感",
        city: "阿斯旺",
        coords: [24.0889, 32.8998],
        morning: "Philae Temple，适合慢一点看水、岛和神庙空间。",
        afternoon: "Nubian Museum。这里能补上努比亚和上埃及的文化层次。",
        evening: "尼罗河边吃饭或短暂 felucca，保持轻量。",
        tags: ["Philae", "Nubian Museum", "慢节奏"],
        places: [
          { id: "abu-philae", name: "Philae Temple", coords: [24.025, 32.8841] },
          { id: "abu-nubian", name: "Nubian Museum", coords: [24.0816, 32.8892] },
        ],
      },
      {
        day: "D6",
        date: "9/30 周三",
        title: "阿布辛贝一日",
        city: "阿布辛贝",
        coords: [22.3372, 31.6258],
        morning: "清晨出发前往 Abu Simbel。可以小团、包车或看当年航班衔接。",
        afternoon: "返回阿斯旺。当天不要再排重内容。",
        evening: "休息，整理行李，为第二天北上卢克索做准备。",
        tags: ["早起", "大强度", "文明高光"],
        places: [{ id: "abu-abu-simbel", name: "阿布辛贝", coords: [22.3372, 31.6258] }],
      },
      {
        day: "D7",
        date: "10/1 周四",
        title: "阿斯旺到卢克索，转场本身有内容",
        city: "尼罗河谷",
        coords: [24.4529, 32.9283],
        morning: "包车北上，先看 Kom Ombo Temple。",
        afternoon: "继续到 Edfu Temple of Horus，再抵达卢克索。",
        evening: "入住卢克索。今晚不要安排夜游。",
        tags: ["包车", "Kom Ombo", "Edfu"],
        places: [
          { id: "abu-kom-ombo", name: "Kom Ombo", coords: [24.4529, 32.9283] },
          { id: "abu-edfu", name: "Edfu", coords: [24.9781, 32.8735] },
        ],
      },
      {
        day: "D8",
        date: "10/2 周五",
        title: "卢克索西岸，帝王谷和哈特谢普苏特",
        city: "卢克索",
        coords: [25.7402, 32.6014],
        morning: "帝王谷。建议请导游，挑重点墓室，不追求数量。",
        afternoon: "哈特谢普苏特神庙、门农巨像。状态好再加 Medinet Habu。",
        evening: "回酒店恢复，尤其推荐住带尼罗河景或泳池的地方。",
        tags: ["建议导游", "帝王谷", "西岸"],
        places: [
          { id: "abu-valley-kings", name: "帝王谷", coords: [25.7402, 32.6014] },
          { id: "abu-hatshepsut", name: "哈特谢普苏特神庙", coords: [25.7386, 32.6066] },
          { id: "abu-medinet", name: "Medinet Habu", coords: [25.7195, 32.6006] },
        ],
      },
      {
        day: "D9",
        date: "10/3 周六",
        title: "Karnak 和 Luxor Temple",
        city: "卢克索",
        coords: [25.7188, 32.6573],
        morning: "Karnak。这里值得慢看，不要赶。",
        afternoon: "中午和下午前半段留白，回酒店休息。",
        evening: "Luxor Temple 傍晚到夜里去，光线和氛围更好。",
        tags: ["Karnak", "Luxor Temple", "留白"],
        places: [
          { id: "abu-karnak", name: "Karnak", coords: [25.7188, 32.6573] },
          { id: "abu-luxor-temple", name: "Luxor Temple", coords: [25.6995, 32.6391] },
        ],
      },
      {
        day: "D10",
        date: "10/4 周日",
        title: "卢克索到红海",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "从卢克索去红海，优先看包车到 Hurghada / Soma Bay / Makadi Bay。",
        afternoon: "入住海边酒店，下午不排项目。",
        evening: "海边晚饭，开始进入恢复段。",
        tags: ["转场", "红海", "休息"],
        places: [{ id: "abu-red-sea", name: "红海度假区", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D11",
        date: "10/5 周一",
        title: "红海整日",
        city: "红海",
        coords: [27.2579, 33.8116],
        morning: "你可以躺海边或轻浮潜，男友可以安排潜水。",
        afternoon: "继续休息。不要把这天改成沙漠冲项目。",
        evening: "海边晚餐，给这趟高密度文明线一个真正的落点。",
        tags: ["潜水", "浮潜", "恢复"],
        places: [{ id: "abu-hurghada", name: "Hurghada / Soma Bay", coords: [27.2579, 33.8116] }],
      },
      {
        day: "D12",
        date: "10/6 周二",
        title: "从红海或开罗返程",
        city: "返程",
        coords: [30.0444, 31.2357],
        morning: "根据航班选择从红海飞开罗，或前一天已回开罗。",
        afternoon: "预留国际航班衔接时间。",
        evening: "从埃及返程，10/7 国内落地。",
        tags: ["返程", "预留缓冲", "10/7 到家"],
        places: [{ id: "abu-cairo-airport", name: "开罗机场", coords: [30.1219, 31.4056] }],
      },
    ],
  },
  lean: {
    title: "B. 没阿布辛贝",
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
    title: "C. 豆包修正版",
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

let activePlanKey = "abu";
let map;
let view;
let routeSource;
let placeSource;
let routeLayer;
let placeLayer;
const placeFeatures = new Map();
let activePlaceId = null;

const tabs = document.querySelectorAll(".plan-tab");
const title = document.querySelector("#planTitle");
const summary = document.querySelector("#planSummary");
const completeness = document.querySelector("#scoreCompleteness");
const ease = document.querySelector("#scoreEase");
const transit = document.querySelector("#scoreTransit");
const verdict = document.querySelector("#planVerdict");
const intro = document.querySelector("#timelineIntro");
const timeline = document.querySelector("#timeline");
const fallback = document.querySelector("#mapFallback");
const fitRouteButton = document.querySelector("#fitRouteButton");
const activePlaceButton = document.querySelector("#activePlaceButton");
const mapStatus = document.querySelector("#mapStatus strong");
const placeInsightCard = document.querySelector("#placeInsightCard");
const placeInsightClose = document.querySelector("#placeInsightClose");
const placeInsightKicker = document.querySelector("#placeInsightKicker");
const placeInsightTitle = document.querySelector("#placeInsightTitle");
const placeInsightDescription = document.querySelector("#placeInsightDescription");
const placeInsightReason = document.querySelector("#placeInsightReason");
let currentRouteExtent = null;
const pinIconCache = new Map();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTimeline(plan) {
  timeline.innerHTML = plan.days
    .map(
      (day) => `
        <article class="day-card" id="${day.day}">
          <div>
            <div class="day-number">${escapeHtml(day.day)}</div>
            <span class="day-meta">${escapeHtml(day.date)} · ${escapeHtml(day.city)}</span>
          </div>
          <div>
            <h3 class="day-title">${escapeHtml(day.title)}</h3>
            <div class="place-list" aria-label="${escapeHtml(day.day)} 地点">
              ${day.places.map((place) => `<button class="place-button" type="button" data-place-id="${escapeHtml(place.id)}">${escapeHtml(place.name)}</button>`).join("")}
            </div>
            <div class="day-grid">
              <div class="day-block">
                <span>上午</span>
                <p>${escapeHtml(day.morning)}</p>
              </div>
              <div class="day-block">
                <span>下午</span>
                <p>${escapeHtml(day.afternoon)}</p>
              </div>
              <div class="day-block">
                <span>晚上</span>
                <p>${escapeHtml(day.evening)}</p>
              </div>
            </div>
            <div class="day-footer">
              ${day.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
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

  const routeFeature = new ol.Feature({
    geometry: new ol.geom.LineString(plan.route.map(toMapCoord)),
  });
  routeSource.addFeature(routeFeature);
  currentRouteExtent = routeFeature.getGeometry().getExtent();

  plan.days.forEach((day) => {
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
  });

  clearActivePlace();
  scheduleMapRefresh({ fitRoute: true });
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

function routeStyle() {
  return new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: getToken("--route"),
      width: 5,
      lineCap: "round",
      lineJoin: "round",
    }),
  });
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

function buildPlaceInsight(entry) {
  const { day, place } = entry;
  const description = [day.morning, day.afternoon, day.evening].join(" ");
  const reason = day.tags.length
    ? `推荐理由：${day.tags.slice(0, 3).join(" / ")}，适合作为这一天「${day.title}」的重点锚点。`
    : `推荐理由：它是这一天「${day.title}」里最容易帮你建立空间感的点。`;

  return {
    kicker: `${day.day} · ${day.date} · ${day.city}`,
    title: place.name,
    description,
    reason,
  };
}

function updatePlaceInsight(entry) {
  const insight = buildPlaceInsight(entry);
  placeInsightKicker.textContent = insight.kicker;
  placeInsightTitle.textContent = insight.title;
  placeInsightDescription.textContent = insight.description;
  placeInsightReason.textContent = insight.reason;
  placeInsightCard.hidden = false;
}

function clearActivePlace(options = {}) {
  activePlaceId = null;
  placeLayer?.changed();
  document.querySelectorAll(".place-button.is-active").forEach((button) => button.classList.remove("is-active"));
  document.querySelectorAll(".day-card.is-active").forEach((card) => card.classList.remove("is-active"));
  placeInsightCard.hidden = true;
  mapStatus.textContent = "全程路线";

  if (options.fitRoute) {
    scheduleMapRefresh({ fitRoute: true });
  }
}

function activatePlace(placeId, options = {}) {
  const entry = placeFeatures.get(placeId);
  if (!entry || !map) return;

  activePlaceId = placeId;
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
  mapStatus.textContent = `${entry.place.name} · ${entry.dayId}`;
  updatePlaceInsight(entry);
  if (options.scroll) {
    document.querySelector(`#${entry.dayId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function renderPlan(planKey) {
  const plan = plans[planKey];
  activePlanKey = planKey;

  title.textContent = plan.title;
  summary.textContent = plan.summary;
  completeness.textContent = plan.scores.completeness;
  ease.textContent = plan.scores.ease;
  transit.textContent = plan.scores.transit;
  verdict.textContent = plan.verdict;
  intro.textContent = plan.intro;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.plan === planKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  renderTimeline(plan);
  renderMap(plan);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderPlan(tab.dataset.plan));
});

timeline.addEventListener("click", (event) => {
  const button = event.target.closest(".place-button");
  if (!button) return;
  activatePlace(button.dataset.placeId);
});

fitRouteButton.addEventListener("click", () => {
  clearActivePlace({ fitRoute: true });
});

activePlaceButton.addEventListener("click", () => {
  if (activePlaceId) {
    activatePlace(activePlaceId);
    return;
  }
  scheduleMapRefresh({ fitRoute: true });
});

placeInsightClose.addEventListener("click", () => clearActivePlace());

initMap();
renderPlan(activePlanKey);
