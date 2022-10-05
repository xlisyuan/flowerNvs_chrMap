//chr data
const chrHTML = "<div class='characterWrap' name='{{NAME}}' l='{{LEFT}}' t='{{TOP}}'  rarity='{{RARITY}}' bg='{{BG}}'><div class='character {{RARITY}}'> <img src='{{IMG}}' alt=''/></div><h4 class='name'></h4></div>"
var blankImgUrl = "https://i.imgur.com/J7s3Wdq.png";
var spriteUrls = {
    "chr": "https://i.imgur.com/bUvn3TT.png",
    "chr1": "https://i.imgur.com/XD8WrTZ.png",
    "chr2": "https://i.imgur.com/XN5w38i.png",
    "chr3": "https://i.imgur.com/Qh07CrR.png",
};
var targetPicSize = { main: 100, ur: 75, ssr: 60, sr: 55, r: 45 };
var spritePos = {
    //sprite width 500px
    //chr 
    '雲無羈': { posX: -00, posY: -00 },
    '驚墨': { posX: -100, posY: 0 },
    '玉澤': { posX: -200, posY: 0 },
    '季元啟': { posX: -300, posY: 0 },
    '安如是': { posX: -400, posY: 0 },
    '宣望鈞': { posX: 0, posY: -100 },
    '凌晏如': { posX: -100, posY: -100 },
    '文司宥': { posX: -200, posY: -100 },
    '月憐': { posX: -300, posY: -100 },
    '陵': { posX: -400, posY: -100 },
    '未央': { posX: 0, posY: 100 },
    '步夜': { posX: -100, posY: 100 },
    '謝行逸': { posX: -200, posY: 100 },
    '星河': { posX: -300, posY: 100 },
    '了了': { posX: -400, posY: 100 },
    //chr1
    '昭陽公主': { posX: -00, posY: -00 },
    '虞沐陽': { posX: -100, posY: -00 },
    '沐英嵐': { posX: -200, posY: -00 },
    '洛凌塵': { posX: -300, posY: -00 },
    '月靈': { posX: -400, posY: -00 },
    '宣連隱': { posX: -00, posY: -100 },
    '逍遙先生': { posX: -100, posY: -100 },
    '樂仙兒': { posX: -200, posY: -100 },
    '左丘肅': { posX: -300, posY: -100 },
    '阿古達木': { posX: -400, posY: -100 },
    '沈南柯': { posX: -00, posY: -200 },
    '耶律炎': { posX: -100, posY: -200 },
    '封子羽': { posX: -200, posY: -200 },
    '言千曉': { posX: -300, posY: -200 },
    '何必': { posX: -400, posY: -200 },
    '程筠': { posX: -00, posY: -300 },
    '鹿蜀': { posX: -100, posY: -300 },
    '瑩兒': { posX: -200, posY: -300 },
    '司業': { posX: -300, posY: -300 },
    '易七': { posX: -400, posY: -300 },
    '陌雲': { posX: -00, posY: -400 },
    '夏婉蓮': { posX: -100, posY: -400 },
    '蘇望丘': { posX: -200, posY: -400 },
    '司空澈': { posX: -300, posY: -400 },
    '林珊': { posX: -400, posY: -400 },
    //chr2
    '梵': { posX: -00, posY: -00 },
    '紅闕': { posX: -100, posY: -00 },
    '秋符蝶': { posX: -200, posY: -00 },
    '文司晏': { posX: -300, posY: -00 },
    '何號': { posX: -400, posY: -00 },
    '楚禺': { posX: -00, posY: -100 },
    '辰香': { posX: -100, posY: -100 },
    '阿武': { posX: -200, posY: -100 },
    '蘇望夷': { posX: -300, posY: -100 },
    '木微霜': { posX: -400, posY: -100 },
    '桃山客': { posX: -00, posY: -200 },
    '賀之洲': { posX: -100, posY: -200 },
    '喬憶橋': { posX: -200, posY: -200 },
    '冷瑤': { posX: -300, posY: -200 },
    '元化': { posX: -400, posY: -200 },
    '趙孤鳴': { posX: -00, posY: -300 },
    '阿刃': { posX: -100, posY: -300 },
    '伍校尉': { posX: -200, posY: -300 },
    '尹冰': { posX: -300, posY: -300 },
    '曹小月': { posX: -400, posY: -300 },
    '白蕊兒': { posX: -00, posY: -400 },
    '青隱': { posX: -100, posY: -400 },
    '季元鴻': { posX: -200, posY: -400 },
    '俞不平': { posX: -300, posY: -400 },
    '唐堂': { posX: -400, posY: -400 },
    //chr3
    '杜懷音': { posX: -00, posY: -00 },
    '胡小梁': { posX: -100, posY: -00 },
    '路滄崖(未知)': { posX: -200, posY: -00 },
    '吾冥(未知)': { posX: -300, posY: -00 },
    '伽華(未知)': { posX: -400, posY: -00 },
    '銀朱(未知)': { posX: -00, posY: -100 },
    '弋蘭天': { posX: -100, posY: -100 },
    '薔': { posX: -200, posY: -100 },
};
var chrsObj = {
    chr1: { name: "月憐", left: 1415, top: 1015, rarity: "ur", img: "blank", background: "chr" },
    chr2: { name: "安如是", left: 670, top: 570, rarity: "ur", img: "blank", background: "chr" },
    chr3: { name: "季元啟", left: 1555, top: 999, rarity: "ur", img: "blank", background: "chr" },
    chr4: { name: "宣望鈞", left: 1516, top: 1629, rarity: "ur", img: "blank", background: "chr" },
    chr5: { name: "逍遙先生", left: 866, top: 1258, rarity: "ssr", img: "blank", background: "chr1" },
    chr6: { name: "賀之洲", left: 1737, top: 1463, rarity: "sr", img: "blank", background: "chr2" },
    chr7: { name: "青隱", left: 1540, top: 1486, rarity: "r", img: "blank", background: "chr2" },
    chr8: { name: "月靈", left: 1319, top: 915, rarity: "ssr", img: "blank", background: "chr1" },
    chr9: { name: "耶律炎", left: 308, top: 1369, rarity: "ssr", img: "blank", background: "chr1" },
    chr10: { name: "封子羽", left: 1345, top: 1585, rarity: "ssr", img: "blank", background: "chr1" },
    chr11: { name: "陵", left: 1214, top: 833, rarity: "ur", img: "blank", background: "chr" },
    chr12: { name: "文司宥", left: 1811, top: 1320, rarity: "ur", img: "blank", background: "chr" },
    chr13: { name: "未央", left: 1688, top: 1559, rarity: "ur", img: "blank", background: "chr" },
    chr14: { name: "雲無羈", left: 1445, top: 790, rarity: "ur", img: "blank", background: "chr" },
    chr15: { name: "凌晏如", left: 1005, top: 1008, rarity: "ur", img: "blank", background: "chr" },
    chr16: { name: "虞沐陽", left: 2165, top: 1360, rarity: "ssr", img: "blank", background: "chr1" },
    chr17: { name: "玉澤", left: 1230, top: 1148, rarity: "ur", img: "blank", background: "chr" },
    chr18: { name: "驚墨", left: 2265, top: 1125, rarity: "ur", img: "blank", background: "chr" },
    chr19: { name: "星河", left: 672, top: 1595, rarity: "ur", img: "blank", background: "chr" },
    chr20: { name: "謝行逸", left: 650, top: 842, rarity: "ur", img: "blank", background: "chr" },
    chr21: { name: "阿古達木", left: 1399, top: 1416, rarity: "ssr", img: "blank", background: "chr1" },
    chr22: { name: "言千曉", left: 563, top: 970, rarity: "ssr", img: "blank", background: "chr1" },
    chr23: { name: "沐英嵐", left: 694, top: 1241, rarity: "ssr", img: "blank", background: "chr1" },
    chr24: { name: "瑩兒", left: 510, top: 1666, rarity: "ssr", img: "blank", background: "chr1" },
    chr25: { name: "沈南柯", left: 915, top: 1450, rarity: "ssr", img: "blank", background: "chr1" },
    chr26: { name: "洛凌塵", left: 914, top: 1716, rarity: "ssr", img: "blank", background: "chr1" },
    chr27: { name: "鹿蜀", left: 1236, top: 1974, rarity: "ssr", img: "blank", background: "chr1" },
    chr28: { name: "左丘肅", left: 1700, top: 1995, rarity: "ssr", img: "blank", background: "chr1" },
    chr29: { name: "宣連隱", left: 1921, top: 1595, rarity: "ssr", img: "blank", background: "chr1" },
    chr30: { name: "樂仙兒", left: 2009, top: 1480, rarity: "ssr", img: "blank", background: "chr1" },
    chr31: { name: "了了", left: 1816, top: 984, rarity: "ur", img: "blank", background: "chr" },
    chr32: { name: "何必", left: 1749, top: 1126, rarity: "ssr", img: "blank", background: "chr1" },
    chr33: { name: "何號", left: 1905, top: 1081, rarity: "sr", img: "blank", background: "chr2" },
    chr34: { name: "步夜", left: 779, top: 866, rarity: "ur", img: "blank", background: "chr" },
    chr35: { name: "伽華(未知)", left: 170, top: 1283, rarity: "ur", img: "blank", background: "chr3" },
    chr36: { name: "銀朱(未知)", left: 298, top: 1251, rarity: "ur", img: "blank", background: "chr3" },
    chr37: { name: "昭陽公主", left: 1737, top: 1799, rarity: "ur", img: "blank", background: "chr1" },
    chr38: { name: "弋蘭天", left: 1298, top: 1843, rarity: "ur", img: "blank", background: "chr3" },
    chr39: { name: "路滄崖(未知)", left: 1813, top: 1919, rarity: "ur", img: "blank", background: "chr3" },
    chr40: { name: "吾冥(未知)", left: 1862, top: 2129, rarity: "ssr", img: "blank", background: "chr3" },
    chr41: { name: "紅闕", left: 1961, top: 1917, rarity: "sr", img: "blank", background: "chr2" },
    chr42: { name: "司業", left: 1556, top: 1373, rarity: "ssr", img: "blank", background: "chr1" },
    chr43: { name: "程筠", left: 1701, top: 1356, rarity: "ssr", img: "blank", background: "chr1" },
    chr44: { name: "易七", left: 1155, top: 1000, rarity: "sr", img: "blank", background: "chr1" },
    chr45: { name: "陌雲", left: 245, top: 910, rarity: "sr", img: "blank", background: "chr1" },
    chr46: { name: "夏婉蓮", left: 1434, top: 1155, rarity: "sr", img: "blank", background: "chr1" },
    chr47: { name: "蘇望丘", left: 325, top: 1041, rarity: "sr", img: "blank", background: "chr1" },
    chr48: { name: "司空澈", left: 1343, top: 1309, rarity: "sr", img: "blank", background: "chr1" },
    chr49: { name: "林珊", left: 1046, top: 1277, rarity: "sr", img: "blank", background: "chr1" },
    chr50: { name: "梵", left: 1314, top: 776, rarity: "sr", img: "blank", background: "chr2" },
    chr51: { name: "秋符蝶", left: 2358, top: 1099, rarity: "sr", img: "blank", background: "chr2" },
    chr52: { name: "文司晏", left: 1936, top: 1368, rarity: "sr", img: "blank", background: "chr2" },
    chr53: { name: "楚禺", left: 1429, top: 1603, rarity: "sr", img: "blank", background: "chr2" },
    chr54: { name: "辰香", left: 2128, top: 1205, rarity: "sr", img: "blank", background: "chr2" },
    chr55: { name: "阿武", left: 541, top: 1529, rarity: "sr", img: "blank", background: "chr2" },
    chr56: { name: "蘇望夷", left: 370, top: 942, rarity: "sr", img: "blank", background: "chr2" },
    chr57: { name: "木微霜", left: 957, top: 1221, rarity: "sr", img: "blank", background: "chr2" },
    chr58: { name: "桃山客", left: 1042, top: 1507, rarity: "sr", img: "blank", background: "chr2" },
    chr59: { name: "喬憶橋", left: 196, top: 1130, rarity: "r", img: "blank", background: "chr2" },
    chr60: { name: "冷瑤", left: 1908, top: 2041, rarity: "r", img: "blank", background: "chr2" },
    chr61: { name: "元化", left: 1699, top: 1268, rarity: "r", img: "blank", background: "chr2" },
    chr62: { name: "趙孤鳴", left: 1755, top: 2094, rarity: "r", img: "blank", background: "chr2" },
    chr63: { name: "阿刃", left: 1243, top: 716, rarity: "r", img: "blank", background: "chr2" },
    chr64: { name: "伍校尉", left: 606, top: 1184, rarity: "r", img: "blank", background: "chr2" },
    chr65: { name: "尹冰", left: 1580, top: 1242, rarity: "r", img: "blank", background: "chr2" },
    chr66: { name: "曹小月", left: 1272, top: 1507, rarity: "r", img: "blank", background: "chr2" },
    chr67: { name: "白蕊兒", left: 1218, top: 1399, rarity: "r", img: "blank", background: "chr2" },
    chr68: { name: "季元鴻", left: 1641, top: 1046, rarity: "r", img: "blank", background: "chr2" },
    chr69: { name: "俞不平", left: 1190, top: 1852, rarity: "r", img: "blank", background: "chr2" },
    chr70: { name: "唐堂", left: 1001, top: 1668, rarity: "r", img: "blank", background: "chr2" },
    chr71: { name: "杜懷音", left: 1378, top: 1920, rarity: "r", img: "blank", background: "chr3" },
    chr72: { name: "薔", left: 1206, top: 1742, rarity: "ssr", img: "blank", background: "chr3" },
    chr73: { name: "胡小梁", left: 1102, top: 1878, rarity: "sr", img: "blank", background: "chr3" },
};
var chrStory = {
    //"名字":{pos:"定位 前排",identity:"身份",story:"描述",link:""},
    "花家少主": { pos: "", identity: "郡主/世子", story: "花家：花家先祖曾為大景開國皇帝高祖的軍師，有從龍之功，得封南國公之爵，世襲罔替。景朝立朝後，花家先祖攜軍退居南塘。花家軍傳至花巍之，仍為景朝精銳。花巍之人稱「不克戰神」，用兵如神，戰功赫赫。景曆338年，靖安之難中，南國公花巍之以一擋百，死戰不退，戰死沙場，其妻同戰身亡，花家軍幾乎全軍覆沒。承永元年，新帝登基，感南國公之功，令其長子花忱襲爵，幼女封雲中郡主。", link: "" },
    //ur
    "驚墨": { pos: "定位 前排", identity: "秋家家主", story: "占卜世家秋家的家主，信命格之理，有著遠超先人的天賦。秋家：隱居在蝶谷深處的占卜世家，精通玄術。秋家於蝶谷布有迷陣，浮於世外，無跡可尋。傳說中憑藉著靈蝶的靈氣，與天地溝通，便可知天曉地，算無遺策。然而，不知是否因窺曉天機而引天怒，秋家人世代體弱。", link: "https://www.flower-ariel.com/role_detail.html?id=6" },
    "玉澤": { pos: "單體 後排", identity: "明雍司監", story: "「　南塘風荷，一宿清夢　」 風流倜儻的年輕史學先生，傳聞中似乎也是首輔府的幕僚？", link: "https://www.flower-ariel.com/role_detail.html?id=0" },
    "季元啟": { pos: "輔助 前排", identity: "季家少主", story: "季家少主，卻一心音律不想承襲家業，課業做得尋常，搞怪倒是一把好手。季家：清流世家，世代文臣。先祖季氏為開國十六府世家中唯一的文臣。季家歷代多出太傅、太師。現在的季家老太爺是當朝太傅，素有「宮門之內教天子，家門之內教萬民」的美名。季家於朝堂之上從不參與黨派之爭，盛名遠播，深受天下讀書人擁護。", link: "https://www.flower-ariel.com/role_detail.html?id=2" },
    "安如是": { pos: "單體 後排", identity: "武館學徒", story: "富足家庭的獨子，卻因無痛之症被過度呵護，為了不讓家人擔心，只好偽裝自己，努力過上常人的生活。", link: "https://www.flower-ariel.com/role_detail.html?id=7" },
    "宣望鈞": { pos: "群體 前排", identity: "宸親王", story: "承襲王爵，親王之首，宸親王殿下。雖為大景當今最年輕的親王，但無人知曉他要付出何種代價…… 宣家： 景朝皇室。自景高祖宣氏在十六府世家拱衛之下擊退外敵，建立景朝以來，宣家統治景朝已三百餘年。皇室內部等級森嚴，凡有宣氏血統者才有繼承皇位的權力。三百年來，皇族內部因皇位而發生過無數血腥內鬥。然而，皇權落處在承永帝一代似乎出現了轉向。", link: "https://www.flower-ariel.com/role_detail.html?id=3" },
    "凌晏如": { pos: "群體 後排", identity: "內閣首輔／大理寺卿", story: "「　改弦更張之態，已勢不可違　」大景當朝內閣首輔，才華卓絕，鐵腕治國。多年前春風和煦的雲心先生恍然似夢……", link: "https://www.flower-ariel.com/role_detail.html?id=5" },
    "文司宥": { pos: "輔助 前排", identity: "同文行會長/文家家主", story: "「　無道不生財　」 越陽文家家主，大景第一商會同文行會長，無需謊言也可將人玩弄於股掌之中，家資豐厚，入明雍教書只為樂趣。文家：景朝新興世家。經商起家，富可敵國，握有大量海外貿易資源。雖然族中無人入仕，但同文行遍布全國，在各個行業都與朝中有商業往來。景曆328年，同文行在與鄔蘭的戰事中資助有功，被封為皇商。", link: "https://www.flower-ariel.com/role_detail.html?id=1" },
    "月憐": { pos: "定位 前排", identity: "錦歌樓主", story: "出身玉胡的西域舞姬，現為錦歌樓樓主，以製香術聞名遐邇。", link: "https://www.flower-ariel.com/role_detail.html?id=9" },
    "陵": { pos: "單體 後排", identity: "暗襲者之首", story: "「　陵，即爾等葬身之墓　」 宣京知名的暗襲者，雖習慣於夜色中潛行，行事風格卻極盡張揚。", link: "https://www.flower-ariel.com/role_detail.html?id=8" },
    "未央": { pos: "定位 前排", identity: "儀禮先生", story: "知書達禮，家教極好的大家閨秀。為人低調，精通美妝儀容術，似乎對宮廷禮儀很熟悉。", link: "https://www.flower-ariel.com/role_detail.html?id=4" },
    "雲無羈": { pos: "單體 後排", identity: "璇璣涯送行者", story: "「　璇璣崖上，往來送行　」 璇璣涯送行者，背著數把知名武器，微笑的神情下隱著看不透的神祕氣息。", link: "https://www.flower-ariel.com/role_detail.html?id=10" },
    "步夜": { pos: "群體 前排", identity: "大理寺少卿", story: "「　心懷若谷，風禾盡起　」​溫和有禮的大理寺少卿，保持著彷彿什麼都知道的淺笑和能看透人心的目光，慣用敬語和謙辭​", link: "" },
    "謝行逸": { pos: "治療 後排", identity: "設計師", story: "「　成品永遠沒有構想中的完美，唉......　」​曾經的蒼陽織造局少公子，現為無心苑品牌背後的創始人，性格偏執慵懶 幼時病弱，在寵溺中長大", link: "" },
    "星河": { pos: "輸出 後排", identity: "雲漢奇術團團長", story: "「　不想試試看嗎？　」​以個人魅力偷走了無數少女的心，喜歡各種新奇冒險刺激的體驗❤️", link: "" },
    "了了": { pos: "群體 後排", identity: "御畫師", story: "「　點睛之筆，就像點亮生命的瞬間　」​聖上專屬的御畫師，似乎能看到常人看不到的色彩", link: "" },
    "昭陽公主": { pos: "集火 前排", identity: "大將軍", story: "「　戰旗不倒，大景不敗　」當朝大公主，天之驕女，戰功赫赫​大景的不敗戰神，萬千榮光集於一身", link: "" },
    "弋蘭天": { pos: "防護 前排", identity: "窮奇會老大", story: "「　唯有勝者留其名！　」 蜀中最強幫派組織窮奇會首領", link: "" },
    //ssr
    //"虞沐陽", 
    "沐英嵐": { pos: "防護 前排", identity: "景南軍將軍", story: "「　願寄此身守景疆！　」承永年間唯一的女性武狀元，傳聞其有能喝退風雨的磅礴氣勢，現為戍守邊疆的景南軍將領", link: "https://www.flower-ariel.com/role_detail.html?id=23" },
    // "洛凌塵", "月靈", "宣連隱", 
    "逍遙先生": { pos: "群體 後排", identity: "縱情才子", story: "「　逍遙先生，僅此而已　」 花家舊客，文豪墨硯的獨子，南國公府事變後離開南塘，在世間遊歷，結交甚廣", link: "https://www.flower-ariel.com/role_detail.html?id=12" },
    //"樂仙兒",
    "左丘肅": { pos: "群體 後排", identity: "天樞軍軍師​", story: "「　謀智攻心，此為上策 攻城拔寨，不得已而為之　」 足智多謀，運籌帷幄，現任天樞軍軍師，以智謀武略折服了萬千軍士", link: "https://www.flower-ariel.com/role_detail.html?id=22" },
    "阿古達木": { pos: "群體 後排", identity: "鄔蘭王子/騎射先生", story: "「　帶你私奔去鄔蘭!　」來自位於景朝疆域西北的鄔蘭國，性情爽朗、心性曠達，唯一的缺點是不熟悉中原文化，經常用錯成語和俗語", link: "https://www.flower-ariel.com/role_detail.html?id=11" },
    // "沈南柯", 
    "耶律炎": { pos: "群體 前排", identity: "啟明之隕", story: "「　依託星辰之力！　」 埃蘭沙的皇子，自稱星辰轉世，來大景遊歷，尋找散落各地的力量殘片，抵禦即將到達的末世", link: "https://www.flower-ariel.com/role_detail.html?id=14" },
    //"封子羽"
    "言千曉": { pos: "控制 前排", identity: "大景采風官", story: "「　一起看熱鬧去？　」大景采風官，執筆巡遊四方，著書以錄奇聞 閱其書者，不出戶便可知天下事", link: "" },
    "何必": { pos: "單體 後排", identity: "山水畫師", story: "「　行筆寫意，墨灑青山　」​明雍書院二年級文系學子，書院中聞名的水墨畫才子​", link: "" },
    "程筠": { pos: "輔助 後排", identity: "暗齋領齋", story: "「　我做這一切，只因別人做不到　」​當朝內閣大學士，是反感戰爭的主和派，也是以戰止戰的暗齋領齋​", link: "" },
    //"鹿蜀":{pos:"定位 前排",identity:"身份",story:"描述",link:""},
    "瑩兒": { pos: "防護 前排", identity: "雲漢奇術團泡泡奇術師", story: "「　讓泡泡再飛一會兒！　」 出身玉胡賀遂氏的瑩兒，活潑熱情，現為泡泡奇術師，以夢幻的七色秀而聞名", link: "" },
    //"司業":{pos:"定位 前排",identity:"身份",story:"描述",link:""},
    "薔": { pos: "群體 前排", identity: "百花鏢局鏢頭", story: "「　　江湖行鏢，衝州過府，薔花為印，鏢契為憑！　　」 百花鏢局女鏢頭，重信重義，鏢鏢必達", link: "" },
    //sr
    //易七", "陌雲", "夏婉蓮", "蘇望丘", "司空澈", "林珊", "梵"
    "紅闕": { pos: "輔助 後排", identity: "天樞軍勘輿師", story: "「　正確的資料，得到正確的結果　」家學淵源的堪輿師，大半時間都在山川中勘探​受師兄左丘肅邀成為天樞軍的隨軍堪輿", link: "" },
    "秋符蝶": { pos: "防護 前排", identity: "秋家養女", story: "「　乾為天，坎為水，我......我在背書呢！　」​蝶谷秋家養女，原姓為符 樂於研究卜術，因天賦不佳，鮮有長進​", link: "" },
    //"文司晏":{pos:"定位 前排",identity:"身份",story:"描述",link:""},
    "何號": { pos: "防護 前排", identity: "獵礦者", story: "「　揮鎬百里，氣貫長河　」 出身土夫子之家，對於地下世界的熟悉程度更甚於地面 如今是御畫師了了專屬的顏料開採者​", link: "" },
    "楚禺": { pos: "群體 前排", identity: "楚家幼子", story: "楚家幼子，卻與本家關係不睦，但以他的能力，恐怕才是楚家這一代最有資格繼任家主的人。楚家：景朝開國十六府世家之一。楚家家主號令蜀中軍，鎮守通往大景西部邊境三國的通道。楚家家主封號武威侯，家中人好以武功論高下，常出少年將領。", link: "" },
    //"辰香":{pos:"定位 前排",identity:"身份",story:"描述",link:""},
    "阿武": { pos: "防護 前排", identity: "雲漢奇術團馴獸師", story: "「　雲漢奇術團，真的厲害！　」​性格熱情開朗，跟所馴養的老虎關係很好🐅", link: "" },
    //"蘇望夷", "木微霜", "桃山客", "賀之洲"
    //r "喬憶橋", "冷瑤", "元化", "趙孤鳴", "阿刃", "伍校尉", "尹冰", "曹小月", "白蕊兒", "青隱", "季元鴻", "俞不平", "唐堂", "杜懷音",
    "胡小梁": { pos: "輔助 後排", identity: "獸鳥花蟲學者", story: "「　我早說過，要對自然心懷敬畏　」 一個有節操、有品格的獸鳥花蟲學者🦗，年紀雖小但知識儲備量巨大，一些人也尊稱他“小先生”", link: "" },
}
//scale
var containerSize = {
    height: 2568,
    width: 1507
}
var currentScaleIndex = 3;
var scaleLevels = [0.4, 0.6, 0.8, 1, 1.2];

//scale
$(".scaleUp").click(
    function () {
        //currentScaleIndex
        currentScaleIndex += 1;
        if (currentScaleIndex > scaleLevels.length - 1) currentScaleIndex = scaleLevels.length - 1;
        if (currentScaleIndex == scaleLevels.length - 1 && !$(".scaleUp").hasClass("disable")) {
            $(".scaleUp").addClass("disable");
        } else if (currentScaleIndex == 1 && $(".scaleDown").hasClass("disable")) {
            $(".scaleDown").removeClass("disable");
        }
        resize(scaleLevels[currentScaleIndex]);
    }
)
$(".scaleDown").click(
    function () {
        //currentScaleIndex
        currentScaleIndex -= 1;
        if (currentScaleIndex < 0) currentScaleIndex = 0;
        if (currentScaleIndex == 0 && !$(".scaleDown").hasClass("disable")) {
            $(".scaleDown").addClass("disable");
        } else if (currentScaleIndex == scaleLevels.length - 2 && $(".scaleUp").hasClass("disable")) {
            $(".scaleUp").removeClass("disable");
        }
        resize(scaleLevels[currentScaleIndex]);
    }
)
function resize($size) {
    $(".container").css('transform', 'scale(' + $size + ')');
    if ($size <= 1) $(".container").css("height", $size * containerSize.height);
    $(".container").css("width", $size * containerSize.width);
}

///map btn event
//check position
$('.container').click(function (e) {
    //var copyText = "left:"+e.pageX + ",top:" + e.pageY;
    //navigator.clipboard.writeText(copyText);
    //console.log("X: " + e.pageX + " Y: " + e.pageY);
});

// popup
$(document).on('click', ".characterWrap", function () {
    var name = $(this).attr("name");
    if (name in chrStory) {
        if (chrStory[name].identity != "")
            $(".mapPopupPanel").find('.topic').text(name + "(" + chrStory[name].identity + ")");
        else
            $(".mapPopupPanel").find('.topic').text(name);
        $(".mapPopupPanel").find('.story').text(chrStory[name].story);
        $(".mapPopupPanel").find('.link').attr("href", chrStory[name].link);
        var displayLink = (chrStory[name].link == "") ? "none" : "block";
        $(".mapPopupPanel").find('.link').css("display", displayLink);
    } else {
        $(".mapPopupPanel").find('.topic').text(name);
        $(".mapPopupPanel").find('.story').text("……");
        $(".mapPopupPanel").find('.link').css("display", "none");
    }
    $(".mapPopupPanel").css("display", "initial");
    checkPopupHeight();
});

$('.mapPopupCloseBtn').click(function (e) {
    $(".mapPopupPanel").css("display", "none");
    if ($(".mapPopupPanel").hasClass("fromTop")) {
        $(".mapPopupPanel").removeClass("fromTop");
        $(".storyScroll").css("max-height", "initial");
        $(".mapPopupPanel").find(".story").removeClass("storyScroll");
    }
});

function checkPopupHeight() {
    if ($(".mapPopupPanel").hasClass("fromTop")) {
        $(".mapPopupPanel").removeClass("fromTop");
        $(".storyScroll").css("max-height", "initial");
        $(".mapPopupPanel").find(".story").removeClass("storyScroll");
    }

    if ($(".mapPopupPanel").position().top < 1) {
        $(".mapPopupPanel").addClass("fromTop");
        $(".mapPopupPanel").find(".story").addClass("storyScroll");
        $(".storyScroll").css("max-height", ($(window).height() - 100) + "px");
    }
}

//create chr
addChrs();

function addChrs() {
    //console.log("===addChrs===")
    Object.values(chrsObj).forEach((chr) => {
        //console.log(chr.name+chr.rarity);
        var imgUrl = (chr.img == "blank") ? blankImgUrl : chr.img;
        var newChr = chrHTML.replace('{{NAME}}', chr.name).replace('{{LEFT}}', chr.left).replace('{{TOP}}', chr.top).replaceAll('{{RARITY}}', chr.rarity).replace('{{IMG}}', imgUrl).replace('{{BG}}', chr.background);
        $("#chrList").append(newChr);
    });

    setPos($(".characterWrap"));
}

function setPos(target) {
    target.each(function (id, item) {
        var chr = $(item);

        //set pos: left top
        chr.css({ "left": chr.attr("l") + "px", "top": chr.attr("t") + "px" });

        //sprite
        if (chr.attr("bg") != "none") {
            //var spriteUrl = spriteUrls[chr.attr("bg")];
            var posX = spritePos[chr.attr("name")].posX;
            var posY = spritePos[chr.attr("name")].posY;
            var t = targetPicSize[chr.attr("rarity")] / 100;
            chr.find(".character").css({
                "background": "url(" + spriteUrls[chr.attr("bg")] + ")" + posX * t + "px " + posY * t + "px",
                "background-size": 500 * t + "px",
            });
        }
        //show name pos
        chr.find(".name").text(chr.attr("name"));

        //set size: width height
        if (chr.attr("w") != undefined) {
            chr.css({ "width": chr.attr("w") + "px", "height": chr.attr("h") + "px" });
        }
    })
}

$(".container").draggable({
    scroll: true / false
});

//rarity filter? no cuz 底圖還是有 嗚嗚 等截到乾淨底圖
function rarityFilter(showRarity = "ur") {
    $(".characterWrap").each(function (index) {
        console.log($(this).attr("rarity"));
        if ($(this).attr("rarity") != showRarity) {
            $(this).css("display", "none");
        }
    });
}