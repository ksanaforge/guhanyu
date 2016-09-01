# guhanyu

1. 參閱 https://zh.wiktionary.org/zh-hant/User:Wihwang/古漢語常用字字典

2. 複製 網頁文字 存到 古漢語常用字字典.txt

3. 轉為 guhanyu.json 

   轉換 簡體 為 繁體

   刪除 11977 列的 反斜線 符號 \
   
   刪除所有《》字串
   
   每字格式 例
   
 ["阿"
 ,"㈠ā詞頭，多用在親屬名稱或人名的前面，盛行於魏晉以後。《孔雀東南飛》：「～母謂～女：『適得府君書，明日來迎汝。』」《顏氏家訓·風操》：「梁武小名～練，子孫呼練為絹。」"
 ,"㈡ē"
 ,"①〈名〉山陵；大丘。王勃《滕王閣序》：「訪風景於崇～。」"
 ,"②〈名〉山灣。屈原《山鬼》：「若有人兮山之～。」"
 ,"③〈名〉屋角翹起來檐。《古詩十九首·西北有高樓》：「～閣三重階。」"
 ,"④〈動〉曲從；迎合。《韓非子·有度》：「法不～貴，繩不撓曲。」（貴，地位高的人。）"
 ,"⑤〈動〉偏私；袒護。屈原《離騷》：「皇天無～私兮。」〖引〗親近。《後漢書·文苑傳下》：「苟失其道，則兄弟不～。」"
 ,"⑥通「婀」。柔軟而美麗的樣子。《詩經·小雅·隰桑》：「隰桑有～，其葉有難。」（難，茂盛的樣子。）"
 ,"㈢hē通「呵」。斥責。《老子·二十章》：「唯之與～，相去幾何。」【阿諛】ēyú迎合別人的心意，說奉承話。《後漢書·楊震傳》：「其～取容者，則因公褒舉，以報私惠。」"]
 
4. 執行 node guhanyu.js 讀入 guhanyu.json 寫出 guhanyu.lst (每書用字數排序印出)
