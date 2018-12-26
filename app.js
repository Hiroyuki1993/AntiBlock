new Vue({
  el: '#app',
  data () {
    return {
      source: [
        {
          "text": "義務教育の限界",
          "anti": true
        },
        {
          "text": "女性に嫌われる天才",
          "anti": true
        },
        {
          "text": "最低野郎",
          "anti": true
        },
        {
          "text": "生きる価値無し",
          "anti": true
        },
        {
          "text": "クズ",
          "anti": true
        },
        {
          "text": "糞ウンコ",
          "anti": true
        },
        {
          "text": "子供おじさん",
          "anti": true
        },
        {
          "text": "底辺YouTuber",
          "anti": true
        },
        {
          "text": "ニート",
          "anti": true
        },
        {
          "text": "能力オールゼロ",
          "anti": true
        },
        {
          "text": "無職",
          "anti": true
        },
        {
          "text": "無能",
          "anti": true
        },
        {
          "text": "ありとあらゆる万事から拒絶された男",
          "anti": true
        },
        {
          "text": "え？これ人間なの？",
          "anti": true
        },
        {
          "text": "頭に黒カビが生えている男",
          "anti": true
        },
        {
          "text": "六角形のグラフなら限りなく点に近い",
          "anti": true
        },
        {
          "text": "いいところが見当たらない",
          "anti": true
        },
        {
          "text": "体は大人、心は子ども",
          "anti": true
        },
        {
          "text": "神がおふざけで作った男",
          "anti": true
        },
        {
          "text": "オフ会0人",
          "anti": true
        },
        {
          "text": "うんこ製造機",
          "anti": true
        },
        {
          "text": "頭トロピカル",
          "anti": true
        },
        {
          "text": "音の出るゴミ",
          "anti": true
        },
        {
          "text": "気持ち悪い",
          "anti": true
        },
        {
          "text": "セクハラ野郎",
          "anti": true
        },
        {
          "text": "働け",
          "anti": true
        },
        {
          "text": "こうはなりたくない",
          "anti": true
        },
        {
          "text": "才能ない",
          "anti": true
        },
        {
          "text": "つまらなすぎる",
          "anti": true
        },
        {
          "text": "早く消えてほしい",
          "anti": true
        },
        {
          "text": "詐欺師",
          "anti": true
        },
        {
          "text": "ロックに人権を否定された男",
          "anti": true
        },
        {
          "text": "リンカーンに奴隷として売られた男",
          "anti": true
        },
        {
          "text": "回収されたペットボトルの蓋より使えない",
          "anti": true
        },
        {
          "text": "時間返せ",
          "anti": true
        },
        {
          "text": "生理的に無理",
          "anti": true
        },
        {
          "text": "吐いた",
          "anti": true
        },
        {
          "text": "他人を馬鹿にしている",
          "anti": true
        },
        {
          "text": "これを見せられる側の気持ちも考えろ",
          "anti": true
        },
        {
          "text": "ナイチンゲールに殺された男",
          "anti": true
        },
        {
          "text": "人を不快にさせる天才",
          "anti": true
        },
        {
          "text": "通報しました",
          "anti": true
        },
        {
          "text": "頭が痛くなった",
          "anti": true
        },
        {
          "text": "ばか",
          "anti": true
        },
        {
          "text": "小学校からやりなおせ",
          "anti": true
        },
        {
          "text": "モグラ人間",
          "anti": true
        },
        {
          "text": "わいせつ物陳列罪",
          "anti": true
        },
        {
          "text": "汚物",
          "anti": true
        },
        {
          "text": "親の金を出会い系につぎ込む無職",
          "anti": true
        },
        {
          "text": "人生のすべてをまあいいやで誤魔化してきた男",
          "anti": true
        },
        {
          "text": "絵に描いた餅",
          "anti": true
        },
        {
          "text": "ミジンコの方が役に立ってる",
          "anti": true
        },
        {
          "text": "騒音",
          "anti": true
        },
        {
          "text": "Youtube観るのやめます",
          "anti": true
        },
        {
          "text": "失望しました",
          "anti": true
        },
        {
          "text": "ユーチューバー辞めろ",
          "anti": true
        },
        {
          "text": "ゴミ",
          "anti": true
        },
        {
          "text": "心の荒んだ現代社会に現れたオアシス",
          "anti": false
        },
        {
          "text": "大物Youtuber",
          "anti": false
        },
        {
          "text": "笑顔をもらえる",
          "anti": false
        },
        {
          "text": "勇気をもらえる",
          "anti": false
        },
        {
          "text": "世界一人を笑わせた男",
          "anti": false
        },
        {
          "text": "才能の塊",
          "anti": false
        },
        {
          "text": "伝説となった男",
          "anti": false
        },
        {
          "text": "最高",
          "anti": false
        },
        {
          "text": "地球上で最も好かれる男の一人",
          "anti": false
        },
        {
          "text": "感動をありがとう",
          "anti": false
        },
        {
          "text": "動画楽しかった！",
          "anti": false
        },
        {
          "text": "すべてが足りている",
          "anti": false
        },
        {
          "text": "なんだかんだで愛されている",
          "anti": false
        },
        {
          "text": "女子10人くらいでいきます",
          "anti": false
        },
        {
          "text": "おい！人気者！",
          "anti": false
        },
        {
          "text": "笑顔スプリンクラー",
          "anti": false
        },
        {
          "text": "ありがとう",
          "anti": false
        },
        {
          "text": "大ファンです！",
          "anti": false
        }
      ],
      num_messages: 0,
      new_comment: [],
      comment_history: [],
      score: 50,
      levels: ['EASY', 'NORMAL', 'HARD'],
      level: 'EASY',
      num_anti: 0,
      startFlag: false,
      interval: 2000,
      timeCounter: 0,
      dialog: false,
      time: 0,
      twitterLink: "",
      twitterUrl: "http://twitter.com/share?url=" + encodeURIComponent("https://hiroyuki1993.github.io/AntiBlock") + "&hashtags=" + encodeURI("炎上シュミレーター") + "&text=" + encodeURI("【炎上シュミレーター】\n"),
    }
  },
  methods: {
    startGame: function() {
      this.startFlag = true
      this.time = 0
    },
    resetGame: function() {
      this.startFlag = false
      this.time = 0
      this.score = 50
      this.dialog = false
      this.timeCounter = 0
      this.num_messages = 0
      this.new_comment = []
      this.comment_history = []
      this.num_anti = 0
    },
    setSpam: function() {
      this.new_comment[0].spam = true
      if(this.new_comment[0].anti == false) {
        this.score -= 10
      } else {
        this.num_anti++
      }
    },
    addComment: function() {
      if (this.startFlag == false) {
        return
      }
      let index = Math.floor(Math.random() * this.source.length)
      let index_pic = Math.floor(Math.random() * 6) + 1
      let now = new Date()
      this.num_messages++

      this.new_comment.push({
        name: now.toLocaleTimeString(),
        avatar: "./icons/anti" + index_pic + ".png",
        comment: this.source[index].text,
        anti: this.source[index].anti,
        spam: false
      })

      if(this.new_comment.length > 1){
        if(this.new_comment[0].anti == false & this.new_comment[0].spam == false & this.score > 0){
          this.score += 5
          if (this.score > 100) {
            this.score = 100
          }
        } else if (this.new_comment[0].anti == true & this.new_comment[0].spam == false){
          this.score -= 10
        }
        if (this.new_comment[0].anti){
          this.new_comment[0].name += " アンチ"
        } else {
          this.new_comment[0].name += " ファン"
        }
        this.comment_history.unshift(this.new_comment[0])
        this.new_comment.shift()
      }
      if(this.comment_history.length > 5) {
        this.comment_history.pop()
      }
    },
    changeLevel: function() {
      this.timeCounter = 0
      if (this.level == 'EASY') {
        this.interval = 2000
      } else if (this.level == 'NORMAL') {
        this.interval = 1200
      } else {
        this.interval = 700
      }
    },
    update: function() {
      const parent = this
      setInterval(function(){
        parent.timeCounter += 100
        if (parent.timeCounter == parent.interval){
          parent.addComment()
          parent.timeCounter = 0
        }
        if (parent.score <= 0) {
          parent.dialog = true
          let twitterLevel = encodeURI("炎上レベル：") + parent.level + encodeURI("\n")
          let twitterTime = encodeURI("メンタル崩壊までの時間：") + parent.time.toFixed(1) + encodeURI("秒\n")
          let twitterAnti = encodeURI("ブロックしたアンチ：") + parent.num_anti + encodeURI("人\n")
          parent.twitterLink = parent.twitterUrl + twitterLevel + twitterTime + twitterAnti
        } else if (parent.dialog == false) {
          parent.time += 0.1
        }
      }, 100)
    }
  },
  mounted: function() {
    this.update()
  }
})