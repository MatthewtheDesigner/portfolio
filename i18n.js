/* 中文 / EN 語言切換
 * - 在導覽列加入語言按鈕（中文 / EN），點擊向下滑出選單
 * - 以字典把中文文字節點與 alt / aria-label / title 換成英文，切回中文時還原
 * - 英文版全站字體改為 Roboto Condensed（見 DESIGN_SYSTEM.md 3.1）
 * - 選擇存在 localStorage，切換頁面時保留
 */
(function () {
  var EN = {
 "王韋仁 Matthew Wang — 工業設計": "Matthew Wang — Industrial Design",
 "關於": "About",
 "作品": "Work",
 "聯繫": "Contact",
 "履歷": "Resume",
 "← 返回": "← Back",
 "工業設計 · 國立成功大學 · 2026": "Industrial Design · National Cheng Kung University · 2026",
 "© 2026 王韋仁. 版權所有。": "© 2026 Matthew Wang. All rights reserved.",
 "台南 · 台灣": "Tainan · Taiwan",
 "工業設計師 · 國立成功大學": "Industrial Designer · National Cheng Kung University",
 "© 2026 王韋仁 Matthew Wang": "© 2026 Matthew Wang",
 "使用者": "User",
 "地點": "Location",
 "進行時長": "Duration",
 "使用軟體": "Software",
 "兩個月": "Two months",
 "三個月": "Three months",
 "01 — 設計概念": "01 — Design Concept",
 "工業設計": "Industrial Design",
 "工業設計師 · 成功大學": "Industrial Designer · NCKU",
 "向下捲動": "Scroll down",
 "01 — 關於": "01 — About",
 "學歷": "Education",
 "大學": "University",
 "工業設計學系": "Department of Industrial Design",
 "國立成功大學": "National Cheng Kung University",
 "高中": "High School",
 "英語國際部": "International English Program",
 "國立政治大學附屬高中（NCCU）": "Affiliated Senior High School of National Chengchi University (NCCU)",
 "英文能力：精通（雅思學術類：7.0）": "English: Proficient (IELTS Academic 7.0)",
 "經歷": "Experience",
 "工作經歷": "Work Experience",
 "工業設計實習生（2025/7–2025/8）": "Industrial Design Intern (Jul–Aug 2025)",
 "統亞科技電子股份有限公司": "Tong Yah Electronic Technology Co., Ltd.",
 "利用兩個月的時間，完成三隻機車方向燈的設計。中間涵蓋設計、機構組合設計、脫模與肉厚設定。": "Designed three motorcycle turn signals in two months, covering styling, mechanical assembly, draft and wall-thickness settings.",
 "主要經歷": "Key Experience",
 "教育部海外藝術與設計菁英培訓計畫": "Ministry of Education Overseas Art & Design Talent Program",
 "接待組組長 · 活動部": "Hospitality Lead · Events Team",
 "擔任國際教授的第一線接待窗口，在主辦單位與來賓之間扮演重要的溝通橋樑。": "Served as the first point of contact for visiting international professors, bridging communication between the organizers and guests.",
 "工作坊": "Workshop",
 "未來十年的城市設計": "City Design for the Next Decade",
 "日本 R.F.YAMAKAWA CO.,LTD. 工作坊": "R.F.YAMAKAWA CO.,LTD. (Japan) Workshop",
 "以「未來十年的大學校園」為主題，用微型移動座艙＋據點式營運的方式改善校園中日益加劇的高溫步行體驗。": "On the theme “the university campus in ten years”, we proposed micro-mobility pods with hub-based operation to ease walking on an increasingly hot campus.",
 "工作坊 · 2025": "Workshop · 2025",
 "日本九州大學 × 成功大學設計工作坊": "Kyushu University × NCKU Design Workshop",
 "重新設計公園與高齡聚會場所，利用經驗分享會、棋弈、主題之夜，解決高齡者面對失眠時，夜晚孤獨無去處、沒有歸屬感的問題。": "Redesigned parks and gathering spaces for older adults, using story-sharing sessions, board games and theme nights so seniors with insomnia have somewhere to go and a sense of belonging at night.",
 "2026屆工業設計畢業展": "2026 Industrial Design Graduation Exhibition",
 "交流部長": "Head of Outreach",
 "邀請設計界專業人士支持學生畢業作品，並籌辦交流活動以促進創意思維的碰撞。": "Invited design professionals to support students’ graduation projects and organized exchange events to spark new ideas.",
 "其他經歷": "Other Experience",
 "滑雪教練（NZSIA 認證，紐西蘭）": "Ski Instructor (NZSIA certified, New Zealand)",
 "02 — 作品": "02 — Work",
 "設計作品": "Selected Work",
 "工業設計 · 2026": "Industrial Design · 2026",
 "協助視障者獨立運動的瑜珈墊": "A yoga mat that helps visually impaired people exercise independently",
 "查看專案 →": "View project →",
 "機車方向燈": "Motorcycle turn signal",
 "工業設計 · 2025": "Industrial Design · 2025",
 "北市公車站重新設計": "Redesigning Taipei bus stops",
 "UI/UX 設計 · 2026": "UI/UX Design · 2026",
 "台北市公車站候車 App 設計": "A waiting app for Taipei bus stops",
 "焦慮感": "Anxiety",
 "使用者在練習過程中持續感到焦慮不安，影響呼吸與專注。": "Users feel anxious throughout practice, which disrupts breathing and focus.",
 "孤獨感": "Loneliness",
 "在課堂中感到自己與其他學員之間存在難以跨越的距離。": "In class they feel a hard-to-bridge distance from other students.",
 "覺得自己是負擔": "Feeling like a burden",
 "擔心需要他人額外協助而拖累課程節奏，產生愧疚感。": "Worried that needing extra help slows the class down, they feel guilty.",
 "自我懷疑": "Self-doubt",
 "無法即時確認動作正確性，導致對自身能力的懷疑。": "Not knowing right away whether a pose is correct leads to doubting their own ability.",
 "聽覺指令為線性的，而動作要求為同時性的": "Spoken cues are sequential, but poses are simultaneous",
 "口語只能依序傳達，但體位法常需多個身體部位同時調整，造成認知瓶頸。": "Speech can only deliver one cue at a time, yet poses need several body parts adjusted at once, creating a cognitive bottleneck.",
 "缺乏視覺經驗參照": "No visual reference",
 "無法透過觀看他人示範動作建立內部模板。": "They cannot build a mental model by watching someone demonstrate.",
 "不知道自己對不對": "Not knowing if it’s right",
 "缺乏即時回饋管道確認動作的角度、軸線與重心。": "There is no real-time feedback to check angle, alignment and balance.",
 "抽象詞彙與視覺隱喻的隔閡": "Gap between abstract words and visual metaphors",
 "老師以「像一棵樹」「打開胸口」等視覺性比喻描述動作，難以轉譯為身體經驗。": "Teachers use visual metaphors like “stand like a tree” or “open your chest”, which are hard to translate into bodily experience.",
 "需要一次同時處理大量指令": "Too many cues at once",
 "聽覺輸入為線性，而動作執行需多部位同步，認知負荷極高。": "Audio input is sequential while movement needs many parts in sync, so cognitive load is very high.",
 "找不到身體方位": "Losing body orientation",
 "失去空間參照後，難以判斷四肢相對於身體中軸的位置。": "Without spatial reference, it is hard to judge where the limbs are relative to the body’s midline.",
 "空間感迷失": "Lost sense of space",
 "對所處場域大小、形狀、邊界缺乏掌握。": "No grasp of the size, shape or edges of the space.",
 "恐懼感": "Fear",
 "對未知環境與潛在碰撞的長期警覺，難以放鬆身體。": "Constant alertness to an unknown space and possible collisions makes it hard to relax.",
 "不安感": "Unease",
 "即使在熟悉空間中，仍存在持續的不確定感。": "Even in familiar spaces there is ongoing uncertainty.",
 "沒有邊界的恐懼": "Fear of having no edges",
 "缺乏明確物理邊界，使移動範圍與安全區域模糊不清。": "Without clear physical edges, the range of movement and safe zone are unclear.",
 "需要明確物理邊界來建立安全範圍": "Needs clear physical edges to define a safe area",
 "可觸知的墊面邊界能定義「安全活動區」，降低焦慮。": "Tactile mat edges can define a “safe zone” and reduce anxiety.",
 "聲音回饋不足": "Too little audio feedback",
 "現有器材缺乏即時的聲響或語音引導，難以即時校正。": "Existing equipment gives no real-time sound or voice guidance, so corrections are hard to make in the moment.",
 "找不到墊子": "Can’t find the mat",
 "進場、移動後常找不回自己的瑜珈墊位置。": "After entering or moving around, they often can’t find their own mat again.",
 "缺乏「觸覺回饋」的瑜珈墊": "Mats with no tactile feedback",
 "平面化的墊面無法提供位置、方向與動作的觸覺線索。": "A flat surface gives no tactile cues for position, direction or movement.",
 "抓地力不足的輔具": "Props with poor grip",
 "輔具防滑性能不佳，影響姿勢穩定與安全。": "Props slip easily, which affects stability and safety.",
 "瑜珈墊設計渲染圖": "Yoga mat design rendering",
 "視障者": "Visually impaired people",
 "盲人": "Blind people",
 "住家": "Home",
 "個人作品": "Personal Project",
 "使用者研究": "User Research",
 "輔助器具": "Assistive Device",
 "尋找有關視障者的議題": "Exploring issues faced by visually impaired people",
 "鎖定視障者的運動方式與運動習慣為主軸。發現對於視障者來說，運動是為了改善心理狀態，讓自己感覺是健康的。面對到最大的問題是不想要每次運動時都需要旁人協助。": "I focused on how and how often visually impaired people exercise. I found that for them, exercise is mainly about improving their mental state and feeling healthy. The biggest problem is not wanting to need someone’s help every time they work out.",
 "02 — 使用者調查": "02 — User Research",
 "痛點想法與歸類": "Pain points and categories",
 "訪談結束之後，我以獨立自主加上增加心理舒適度的需求，並且以瑜珈墊為載體，發想視障者在使用瑜珈墊進行運動時會遇到的困境。以用戶需求、瑜珈的益處、市面上瑜珈課程的資料與瑜珈墊材質四大項分類": "After the interviews, I took independence and mental comfort as the core needs and used the yoga mat as the vehicle, mapping the difficulties visually impaired people face when exercising on a mat. I grouped them into four areas: user needs, benefits of yoga, existing yoga classes, and mat materials.",
 "(表一)從有動機到實際運動的人數統計": "(Table 1) From motivation to actually exercising",
 "缺乏人員引導與教學": "No guidance",
 "缺乏自主運動的能力": "Cannot exercise alone",
 "執行成功": "Succeeded",
 "10人參與研究": "10 participants",
 "20%參與者": "20% of participants",
 "不知道要做": "Didn’t know",
 "什麼運動": "what exercise to do",
 "60%參與者": "60% of participants",
 "不想麻煩別人": "Didn’t want to trouble others",
 "成功執行運動": "Exercised successfully",
 "使用者痛點分析": "User pain-point analysis",
 "將痛分類整理成身體、心理、課程、器材四大分類。 我重新連絡受訪者，詢問那些痛點的影響力比較嚴重。 得到痛點的重要性之後，我重新評估解決各個痛點所需要的時間與難度。 最後選定以器材-瑜珈墊的問題出發，用瑜珈墊解決視障者進行獨立運動時感受到的不安感與不確定性。": "I sorted the pain points into four groups: physical, psychological, course and equipment. I went back to the interviewees to ask which ones had the most impact. With that ranking, I re-assessed the time and difficulty of solving each one. In the end I chose to start from the equipment — the yoga mat — and use it to reduce the unease and uncertainty visually impaired people feel when exercising alone.",
 "痛點": "Pain points",
 "心理問題": "Psychological",
 "課程問題": "Course",
 "身體問題": "Physical",
 "器材問題": "Equipment",
 "問題象限圖": "Problem quadrant chart",
 "難度": "Difficulty",
 "影響力": "Impact",
 "03 — 使用者旅程地圖": "03 — User Journey Map",
 "瑜珈課程中的情緒歷程": "Emotions through a yoga class",
 "透過 User Journey Map 得到使用者最頭痛的點多半在進行主課程的時候，最讓使用者不舒服的地方為找不到方向，沒辦法定位。": "The user journey map showed that most pain comes during the main session, and the most uncomfortable moment is losing direction and being unable to orient.",
 "點此查看 User Journey Map →": "View the User Journey Map →",
 "使用者旅程地圖": "User Journey Map",
 "✕ 關閉": "✕ Close",
 "暖身與連結": "Warm-up & Connection",
 "主課程 — 根基與平衡": "Main Session — Grounding & Balance",
 "收操與深層修復": "Cool-down & Deep Recovery",
 "階段": "Stage",
 "環境定向": "Orientation",
 "與坐姿安頓": "& Settling In",
 "呼吸覺察": "Breath Awareness",
 "關節釋放": "Joint Release",
 "山式 Tadasana": "Mountain Pose (Tadasana)",
 "樹式 Tree Pose": "Tree Pose",
 "勇士二式 Warrior II": "Warrior II",
 "貓牛式 & 嬰兒式": "Cat-Cow & Child’s Pose",
 "坐姿扭轉": "Seated Twist",
 "仰躺伸展": "Supine Stretch",
 "大休息 Savasana": "Savasana",
 "山式": "Mountain",
 "樹式": "Tree",
 "勇士二式": "Warrior II",
 "貓牛+嬰兒": "Cat-Cow + Child",
 "大休息": "Savasana",
 "動作": "Action",
 "簡易坐（Sukhasana）或坐在椅子上（若髖部緊繃）": "Easy seat (Sukhasana), or sit on a chair if the hips are tight.",
 "腹式呼吸。手掌輕貼腹部。": "Belly breathing, palms resting lightly on the abdomen.",
 "頸部緩慢轉動、肩膀畫圓、手腕轉動、脊椎暖身（坐姿貓牛式）。": "Slow neck rolls, shoulder circles, wrist rotations, spinal warm-up (seated cat-cow).",
 "雙腳併攏或與骨盆同寬站立，背部輕靠牆。": "Stand with feet together or hip-width apart, back lightly against a wall.",
 "一手扶牆或椅背。將一腳重心踩穩，另一腳跟輕靠腳踝（初階）或踩在小腿內側。": "One hand on a wall or chair back. Ground one foot and rest the other heel on the ankle (beginner) or the inner calf.",
 "雙腳打開，前腳彎曲，後腳伸直。可跨坐在椅子上執行以確保方向感不迷失。": "Feet wide, front knee bent, back leg straight. Can be done straddling a chair to keep a sense of direction.",
 "四足跪姿（手掌在肩膀下，膝蓋在骨盆下）。": "Tabletop (hands under shoulders, knees under hips).",
 "簡易坐姿，一手放在對側膝蓋，一手放在身後地板。": "Easy seat, one hand on the opposite knee and the other on the floor behind.",
 "放鬆下背部": "Relax the lower back",
 "平躺，手腳自然攤開。": "Lie flat with arms and legs relaxed.",
 "感受": "Feeling",
 "從焦慮轉為謹慎的安穩。剛進教室時的未知恐懼稍微緩解。": "From anxiety to cautious calm; the fear of the unknown on entering eases a little.",
 "專注與寧靜。": "Focused and calm.",
 "釋放但帶點困惑。": "Released, but a little confused.",
 "困惑感。": "Confused.",
 "緊張與挫折。": "Tense and frustrated.",
 "拿回身體主導權的感覺。": "A sense of being back in control of my body.",
 "安心。": "Reassured.",
 "舒服帶有困惑。": "Comfortable but confused.",
 "放鬆。": "Relaxed.",
 "平靜。": "Peaceful.",
 "體驗": "Experience",
 "這是我最熟悉的「向內看」的方式。因為看不見外界，我對身體內部的脹縮感特別敏銳。": "This is the “looking inward” I know best. Because I can’t see the outside, I’m very aware of my body expanding and contracting.",
 "轉動脖子時聽到細微的骨骼聲。當老師說「肩膀畫圓」時，我努力用本體感覺去想像圓的形狀。": "I hear small clicks as I roll my neck. When the teacher says “circle your shoulders”, I try to imagine the circle through proprioception.",
 "背部接觸到冰涼堅硬的牆壁，這給我極大的「實體回饋」。": "My back touches the cool, hard wall — that gives me strong physical feedback.",
 "單腳站立時，腳踝劇烈晃動。": "Standing on one leg, my ankle wobbles a lot.",
 "四足跪姿讓我有四個支撐點，很穩。": "Tabletop gives me four points of support; it feels stable.",
 "我其實不知道我的脊椎是「垂直地板」還是「向後傾斜」，轉頭看後方是要轉到 90° 還是 180°？": "I don’t actually know if my spine is vertical or leaning back. When I turn to look behind, is that 90° or 180°?",
 "抓腳的時候，我必須先摸到膝蓋、小腿，順藤摸瓜才能找到腳掌。": "To reach my foot I have to find my knee, then my calf, and trace my way down to it.",
 "這跟我平常做的「內觀」或「冥想」很像。": "This is a lot like the meditation I usually do.",
 "我不知道老師在哪裡，也不知道門在哪個方向。": "I don’t know where the teacher is or which way the door is.",
 "「順時針」或「逆時針」需要多花幾秒鐘思考。不確定頭是否「回正」了。": "“Clockwise” or “counter-clockwise” takes me a few extra seconds. I’m not sure my head is back to center.",
 "雖然有牆，但不知道腳是不是平行的。": "Even with the wall, I don’t know if my feet are parallel.",
 "即便有牆，還是不敢把腳抬太高，很怕滑倒。": "Even with the wall, I’m afraid to lift my foot too high in case I slip.",
 "不知道手有沒有舉平。": "I can’t tell if my arms are level.",
 "04 — 產品介紹": "04 — Product",
 "VOGA 功能簡介": "VOGA features",
 "導引線設計的設計讓視障者透過觸覺定位身體方向。": "Guide lines let visually impaired users orient their body by touch.",
 "VOGA 功能介紹": "VOGA features",
 "增加邊界緩衝區避免視障者出界。": "A buffer zone at the edges keeps users from stepping off the mat.",
 "透過紋路讓視障者以觸覺找到中心線。": "Textures let users find the center line by touch.",
 "瑜珈墊中央用條紋漸層讓使用者用觸覺定位前後方向。": "A graded stripe pattern in the middle lets users feel which way is front and back.",
 "模具設計與脫模方向。": "Mold design and draft direction.",
 "瑜珈墊材質：NBR 橡膠。": "Material: NBR rubber.",
 "← 左右滑動 →": "← Swipe →",
 "OVO — 王韋仁 Matthew Wang": "OVO — Matthew Wang",
 "廠牌": "Brand",
 "型號": "Model",
 "車型美學分析": "Styling analysis of the bike",
 "此系列的雙大圓燈為其最具辨識度的設計元素之一，用有機與更加野性的設計與其他廠家做出區別。": "The twin round headlights are one of this line’s most recognizable features; its organic, wilder styling sets it apart from other makers.",
 "02 — 競品分析": "02 — Competitor Analysis",
 "Triumph Street Triple 適配方向燈調查": "Turn signals compatible with the Triumph Street Triple",
 "圖片": "Image",
 "基本資料": "Basics",
 "製造商": "Manufacturer",
 "用途": "Use",
 "方向燈": "Turn signal",
 "車燈規格": "Light specs",
 "長（不含底座）mm": "Length (excl. base) mm",
 "寬 mm": "Width mm",
 "高 mm": "Height mm",
 "體積（不含底座）mm³": "Volume (excl. base) mm³",
 "發光面": "Light surface",
 "發光面面積 mm²": "Light surface area mm²",
 "發光面 max ratio": "Light surface max ratio",
 "發光方式": "Lighting type",
 "直射": "Direct",
 "導光方式": "Light guide",
 "燈殼": "Housing",
 "燈殼+反射鏡": "Housing + reflector",
 "底座材質": "Base material",
 "塑膠": "Plastic",
 "鋁": "Aluminum",
 "燈殼材質": "Housing material",
 "銷售端": "Retail",
 "顏色選擇": "Color options",
 "2（黑-白）": "2 (black, white)",
 "1（黑）": "1 (black)",
 "透明+花紋": "Clear + pattern",
 "透明+透鏡": "Clear + lens",
 "透明": "Clear",
 "透明+部分霧面": "Clear + partly frosted",
 "燈殼選項": "Housing options",
 "搜尋項": "Search term",
 "03 — 手稿": "03 — Sketches",
 "手稿": "Sketches",
 "04 — 成品展示": "04 — Final Design",
 "脫模、厚度分析與渲染圖": "Draft, thickness analysis and renderings",
 "拔模分析": "Draft analysis",
 "厚度分析": "Thickness analysis",
 "目標車燈長：55mm": "Target length: 55mm",
 "發光方式：直射光": "Lighting: direct",
 "王韋仁 Matthew Wang — FENDL": "Matthew Wang — FENDL",
 "FENDL 北市公車站重新設計": "FENDL: redesigning Taipei bus stops",
 "FENDL 畢業刊 第 1 頁": "FENDL graduation booklet, page 1",
 "FENDL 畢業刊 第 2 頁": "FENDL graduation booklet, page 2",
 "FENDL 畢業刊 第 3 頁": "FENDL graduation booklet, page 3",
 "FENDL 畢業刊 第 4 頁": "FENDL graduation booklet, page 4",
 "the Bus App — 王韋仁 Matthew Wang": "the Bus App — Matthew Wang",
 "the Bus App 介面導覽影片": "the Bus App interface tour video",
 "公車站牌": "Passengers waiting",
 "等候的乘客": "at bus stops",
 "台北市公車站": "Taipei bus stops",
 "UI/UX 設計": "UI/UX Design",
 "01 — 現存問題": "01 — The Problem",
 "缺乏實體站牌與手機資訊整合": "Bus-stop signs and phones don’t work together",
 "現代公車站牌往往呈現超出需求的資訊，因此重新設計實體站牌的資訊配置，是提升無障礙與使用者體驗的關鍵。": "Today’s bus-stop signs often show more information than people need, so redesigning how that information is laid out is key to better accessibility and user experience.",
 "公車路線站牌": "Bus route sign",
 "— 資訊配置缺乏結構": "— Unstructured information layout",
 "擁擠的公車": "Crowded bus",
 "— 缺乏即時到站資訊": "— No real-time arrival updates",
 "站牌上過多的資訊": "Too much information on a bus-stop sign",
 "— 資訊冗餘": "— Redundant information",
 "02 — 使用族群調查": "02 — User Survey",
 "圓餅圖：45% 為依賴手機 App 公車資訊用戶": "Pie chart: 45% rely on mobile apps for bus information",
 "依賴手機 App": "Rely on mobile",
 "公車資訊用戶": "apps for bus info",
 "透過八篇論文調查，最後以三大設計規則製作原型。": "After reviewing eight research papers, I built the prototype around three design rules.",
 "一、": "1.",
 "首頁資訊分類，做到資訊分流。": "Group the home screen by category so information is split into clear streams.",
 "二、": "2.",
 "以站點作為路線圖起始點，做出方向區別（北駛、南駛）。": "Start the route map from the current stop and separate directions (northbound, southbound).",
 "三、": "3.",
 "使用黑體，規定字體需大於 24px。": "Use a sans-serif typeface no smaller than 24px.",
 "功能需求調查：50% 認為提供 10 分鐘內下一班車抵達的時間最為有用；20% 認為提供路線規劃功能最為有效；15% 認為提供公車路線資訊最為有效；5% 即時動態資訊；2.5%": "Feature survey: 50% say the next bus within 10 minutes is most useful; 20% route planning; 15% bus route information; 5% live status; 2.5%",
 "50%使用者": "50% of users",
 "認為提供 10 分鐘內下一班車": "say knowing the next bus",
 "抵達的時間最為有用": "within 10 minutes is most useful",
 "認為提供路線規劃功能最為有效": "say route planning is most effective",
 "認為提供公車路線資訊最為有效": "say bus route info is most effective",
 "即時動態資訊": "Live status",
 "03 — 使用流程展示": "03 — User Flow",
 "核心任務：減少檢索公車路線的時間": "Core task: less time spent finding a bus route",
 "使用流程圖：進入網站後可選即時動態、本站路線與營運表、目的地搜尋；即時動態進入公車動態，本站路線與公車動態皆導向路線圖；目的地搜尋分為醫院、轉乘、商店，醫院與商店依分區瀏覽，轉乘可選火車、捷運、高鐵、機場、碼頭，再回到公車動態": "User flow: from the site, choose Live Status, Routes Here or Destination. Live Status leads to Bus Status; Routes Here and Bus Status both lead to the Route Map. Destination splits into Hospital, Transfer and Shops; Hospital and Shops are browsed by district; Transfer offers train, MRT, high-speed rail, airport and ferry, then returns to Bus Status.",
 "進入網站": "Open Site",
 "即時動態": "Live Status",
 "本站路線・營運表": "Routes Here",
 "目的地搜尋": "Destination",
 "醫院": "Hospital",
 "轉乘": "Transfer",
 "商店": "Shops",
 "分區": "District",
 "火車": "Train",
 "捷運": "MRT",
 "高鐵": "HSR",
 "機場": "Airport",
 "碼頭": "Ferry",
 "公車動態": "Bus Status",
 "路線圖": "Route Map",
 "點擊查看草稿": "Click to view sketches",
 "點擊查看草稿（共 5 張手繪草圖）": "Click to view sketches (5 hand-drawn sketches)",
 "手繪草圖：轉乘與導航頁面": "Sketch: transfer and navigation screens",
 "手繪草圖：分類搜尋結果與車資、時間": "Sketch: category search results with fare and time",
 "手繪草圖：站名、搜尋列與分類搜尋": "Sketch: stop name, search bar and category search",
 "手繪草圖：即時動態與路線圖": "Sketch: live status and route map",
 "手繪草圖：首頁與無障礙、語言選項": "Sketch: home screen with accessibility and language options",
 "手繪草圖檢視": "Sketch viewer",
 "關閉": "Close",
 "上一張": "Previous",
 "下一張": "Next",
 "the Bus App 操作流程影片": "the Bus App walkthrough video",
 "— 操作流程影片": "— Walkthrough video",
 "the Bus App Figma 互動原型": "the Bus App Figma prototype",
 "— Figma 互動原型（可直接點擊操作）": "— Figma prototype (click to try it)",
 "04 — UI 元件展示": "04 — UI Components",
 "切換淺色／深色模式": "Switch light / dark mode",
 "UI 元件表（淺色模式）": "UI component sheet (light mode)",
 "UI 元件表（深色模式）": "UI component sheet (dark mode)"
};
  var KEY = 'mw-lang';
  var ATTRS = ['alt', 'aria-label', 'title', 'placeholder'];
  var RESUME_ZH = 'Matthew_Wang_Resume_2026_ZH_v11.pdf';
  var RESUME_EN = 'Matthew_Wang_Resume_2026_EN_v11.pdf';

  function getLang() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'zh'; } catch (e) { return 'zh'; }
  }
  var lang = getLang();
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };

  // 供頁面腳本使用（例如打字動畫）：window.mwT('中文') → 目前語言的文字
  window.mwT = function (s) { return lang === 'en' && EN[norm(s)] ? EN[norm(s)] : s; };

  // 先套上 class，避免英文版閃現中文字體
  var root = document.documentElement;
  if (lang === 'en') { root.classList.add('lang-en'); root.lang = 'en'; }

  var css = [
    'html.lang-en, html.lang-en body, html.lang-en *:not(.lang-keep) { font-family: "Roboto Condensed", sans-serif !important; }',
    '.lang-switch { position: relative; }',
    '.lang-btn { background: none; border: 0; padding: 0; cursor: pointer; font: inherit; font-family: "Noto Serif TC", serif; font-size: 18px; letter-spacing: 0.05em; color: var(--grey, #999); display: inline-flex; align-items: center; gap: 6px; transition: color 0.2s; }',
    'html.lang-en .lang-btn { font-weight: 900; letter-spacing: 0.15em; }',
    '.lang-btn:hover, .lang-switch.open .lang-btn { color: var(--black, #1a1a1a); }',
    '.lang-caret { width: 8px; height: 8px; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; transform: translateY(-2px) rotate(45deg); transition: transform 0.25s ease; }',
    '.lang-switch.open .lang-caret { transform: translateY(2px) rotate(225deg); }',
    '.lang-menu { position: absolute; top: calc(100% + 18px); right: -16px; min-width: 120px; list-style: none; margin: 0; padding: 6px 0; background: rgba(240,239,237,0.98); border: 1px solid var(--border, #d0cfc9); box-shadow: 0 10px 24px rgba(0,0,0,0.06); opacity: 0; visibility: hidden; transform: translateY(-8px); transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s; z-index: 200; }',
    '.lang-switch.open .lang-menu { opacity: 1; visibility: visible; transform: none; }',
    '.lang-menu li { display: block; }',
    '.lang-opt { display: block; width: 100%; text-align: left; background: none; border: 0; cursor: pointer; padding: 10px 20px; font-size: 16px; color: var(--grey, #999); white-space: nowrap; transition: color 0.2s, background 0.2s; }',
    '.lang-opt[data-lang="zh"] { font-family: "Noto Serif TC", serif !important; letter-spacing: 0.05em; }',
    '.lang-opt[data-lang="en"] { font-family: "Roboto Condensed", sans-serif !important; font-weight: 900; letter-spacing: 0.15em; }',
    '.lang-opt:hover { color: var(--black, #1a1a1a); background: rgba(0,0,0,0.03); }',
    '.lang-opt[aria-checked="true"] { color: var(--black, #1a1a1a); }',
    '@media (max-width: 768px) { .lang-btn { font-size: 14px; } .lang-menu { top: calc(100% + 14px); right: -8px; min-width: 104px; } .lang-opt { font-size: 14px; padding: 10px 16px; } }'
  ].join('\n');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ---- 文字替換 ----
  var origText = new Map();   // Text node → 原始中文
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };

  function translateText(node) {
    var p = node.parentNode;
    if (!p || SKIP[p.nodeName] || (p.closest && p.closest('.lang-switch'))) return;
    var raw = origText.has(node) ? origText.get(node) : node.nodeValue;
    var key = norm(raw);
    if (!key || !EN[key]) return;
    if (!origText.has(node)) origText.set(node, raw);
    var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    var want = lang === 'en' ? lead + EN[key] + trail : raw;
    if (node.nodeValue !== want) node.nodeValue = want;
  }
  function translateAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], store = 'data-zh-' + a;
      var orig = el.getAttribute(store);
      if (orig === null) {
        var v = el.getAttribute(a);
        if (v === null || !EN[norm(v)]) continue;
        orig = v; el.setAttribute(store, v);
      }
      el.setAttribute(a, lang === 'en' ? EN[norm(orig)] : orig);
    }
    if (el.tagName === 'A') {
      var h = el.getAttribute('href');
      if (h === RESUME_ZH && lang === 'en') el.setAttribute('href', RESUME_EN);
      else if (h === RESUME_EN && lang === 'zh') el.setAttribute('href', RESUME_ZH);
    }
  }
  function walk(rootNode) {
    if (rootNode.nodeType === 3) { translateText(rootNode); return; }
    if (rootNode.nodeType !== 1 || SKIP[rootNode.nodeName]) return;
    translateAttrs(rootNode);
    var it = document.createTreeWalker(rootNode, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = it.nextNode())) {
      if (n.nodeType === 3) translateText(n);
      else if (!SKIP[n.nodeName]) translateAttrs(n);
    }
  }
  function applyAll() {
    root.classList.toggle('lang-en', lang === 'en');
    root.lang = lang === 'en' ? 'en' : 'zh-TW';
    var t = document.querySelector('title');
    if (t) { if (!t.dataset.zh) t.dataset.zh = t.textContent; t.textContent = lang === 'en' && EN[norm(t.dataset.zh)] ? EN[norm(t.dataset.zh)] : t.dataset.zh; }
    walk(document.body);
    updateSwitch();
  }

  // ---- 導覽列按鈕 ----
  var sw, btn, label;
  function buildSwitch() {
    var links = document.querySelector('nav .nav-links');
    if (!links) return;
    sw = document.createElement('li');
    sw.className = 'lang-switch';
    sw.innerHTML =
      '<button type="button" class="lang-btn" aria-haspopup="true" aria-expanded="false" aria-label="Language / 語言">' +
        '<span class="lang-label"></span><span class="lang-caret" aria-hidden="true"></span></button>' +
      '<ul class="lang-menu" role="menu">' +
        '<li role="none"><button type="button" class="lang-opt" role="menuitemradio" data-lang="zh">中文</button></li>' +
        '<li role="none"><button type="button" class="lang-opt" role="menuitemradio" data-lang="en">EN</button></li>' +
      '</ul>';
    links.appendChild(sw);
    btn = sw.querySelector('.lang-btn');
    label = sw.querySelector('.lang-label');
    btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(!sw.classList.contains('open')); });
    sw.querySelectorAll('.lang-opt').forEach(function (o) {
      o.addEventListener('click', function (e) {
        e.stopPropagation();
        setLang(o.getAttribute('data-lang'));
        toggle(false);
        btn.focus();
      });
    });
    document.addEventListener('click', function () { toggle(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sw.classList.contains('open')) { toggle(false); btn.focus(); } });
  }
  function toggle(open) {
    if (!sw) return;
    sw.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function updateSwitch() {
    if (!sw) return;
    label.textContent = lang === 'en' ? 'EN' : '中文';
    sw.querySelectorAll('.lang-opt').forEach(function (o) {
      o.setAttribute('aria-checked', o.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    var opts = sw.querySelectorAll('.lang-opt');
    opts.forEach(function (o) { o.classList.add('lang-keep'); });
  }
  function setLang(l) {
    lang = l === 'en' ? 'en' : 'zh';
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    applyAll();
  }

  function init() {
    buildSwitch();
    applyAll();
    // 之後由腳本動態加入的文字（圖表標籤、說明等）也一併翻譯
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === 'characterData') {
          var n = m.target;
          // 腳本改寫了文字（不是我們的翻譯結果）→ 以新內容為準
          if (origText.has(n)) {
            var o = origText.get(n);
            if (n.nodeValue !== o && norm(n.nodeValue) !== EN[norm(o)]) origText.delete(n);
          }
          translateText(n);
        }
        else m.addedNodes.forEach(walk);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
