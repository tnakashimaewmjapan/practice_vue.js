var myapp1 = new Vue({
    // マウントする要素
    el: '#myapp1',
    
    // アプリケーションで使用するデータ
    data: {
        myMessage: 'Hello, Vue.js',
        mylist: ['りんご','ばなな','いちご'],

        myformtext: 'ここの文字列が同期',
        mynumber1: 2,
        mynumber2: 3,

        myShowFlag: true,
        myTransition: true,
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myhandleClick: function(event) {
            alert(event.target)
        },
    },
    
    // 算出プロパティ
    computed: {
            // beforeCreate
            // beforeMount
            // mounted
            // beforeUpdate
            // updated
            // beforeDestroy
            // destroyed
            // errorCaptured
    },
    
    // ライフサイクルフック
    created: function() {
        
    },
})




var myapp2 = new Vue({
    // マウントする要素
    el: '#myapp2',
    
    // アプリケーションで使用するデータ
    data: {
        myMessage: {
            value: 'Hello Vue.js!'
        },
        myList: ['html', 'javascript', 'jquery', 'vuejs'],
        mynum1: 2,
        mynum2: 7,
        myBindValue: 'テキスト文字列',

        myCount: 0,

        myClassObject: {
            myClassName1: true,
            'my-class-name': false,
        },
        myStyleObject: {
            color: 'red',
            backgroundColor: 'lightgray',
        },
        myItem: {
            href: 'https://www.google.com/?hl=ja',
            name: 'myName',
            target: '_blank',
        },

        myRadius: 50,

        myType: 'B',

        myTables: [
            {id: 1, name: 'hoge', score: 100 },
            {id: 2, name: 'fuga', score: 200 },
            {id: 3, name: 'piyo', score: 500 },
        ],
        myGoods: {
            name: '項目名',
            score: 289,            
        },
        myGoodsList: [
            {id: 1, name: 'hoge', score: 100 },
            {id: 2, name: 'fuga', score: 200 },
            {id: 3, name: 'piyo', score: 500 },
        ],

        myHTML: '<strong>fuga</strong>'
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myIncrement: function() {
            this.myCount += 1
        },

        myAddGoods: function() {
            // IDの最大値を取得
            var max = this.myGoodsList.reduce(function(a,b) {
                return a.id > b.id ? a.id : b.id
            }, 0)
            //push()で配列にデータを追加
            this.myGoodsList.push({
                id: max + 1,
                name: this.myGoods.name,
                score: this.myGoods.score,
            })
        },
        myRemoveGoods: function(index) {
            // spliceで受け取ったindexの位置から1個の要素を削除
            this.myGoodsList.splice(index, 1)
        },
    },
    // ライフサイクルフック
    // created: function() {
    //     axios.get('mylist.json').then(function(response) {
    //         this.myJsonData = response.data
    //     }.bind(this)).catch(function(e) {
    //         console.error(e)
    //     })
    // },
})


var myapp3 = new Vue({
    // マウントする要素
    el: '#myapp3',
    
    // アプリケーションで使用するデータ
    data: {
        myCount: 0,

        myMessage: '',

        myEnterKey: 'Enterキーを押すと表示が変わります',
        myCursorKey: 'カーソルキーのいずれかを押すと表示が変わります',

        myTextarea: '',
        myCheckbox: true,
        myCheckboxes: ['B'],
        myRadio: 'B',
        mySelect: 'B',
        mySelect: ['B'],
        myImage: '',
        myColor: '#ff7800',
        myLazySync: 'フォーカスが外れたりエンターを押すと同期する',
        myTrim: '\n   文字列前後の改行や   複数半角Spaceを削除',

        mytimer: null,
        scrollY: 0,
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myClick: function() {
            alert('クリックしました')
        },
        
        myHandleInput: function(event) {
            alert('入力した文字は '+event.target.value+' です')
            this.myMessage = event.target.value
        },

        myNestHandler: function(comment) {
            alert(comment+'をクリックしました')
        },
        myclose: function() {
            alert(comment+'をクリックしました')
        },

        myEnterKeyHandler: function() {
            this.myEnterKey = 'Enterキーが押されました'
        },
        myCursorKeyHandler: function() {
            this.myCursorKey = 'カーソルキーが押されました'
        },
        mySystemButton: function() {
            alert('Shift+Ctrlを押しながらクリックしました')
        },
        myImageHandle: function(event) {
            var file = event.target.files[0]
            if(file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.myImage = window.URL.createObjectURL(file)
            }
        },

        myScrollHandler: function() {
            if(this.mytimer === null) {
                this.mytimer = setTimeout(function() {
                    this.scrollY = window.scrollY
                    clearTimeout(this.mytimer)
                    this.mytimer = null
                }.bind(this), 200)
            }
        },
    },
    // ライフサイクルフック。特定のタイミングで自動的に呼び出される関数
    created: function() {
        // ハンドラを登録
        window.addEventListener('scroll',this.myScrollHandler)
    },
    beforeDestroy: function() {
        // ハンドラを解除(不要になっても自動的に解除されないため)
        window.removeEventListener('scroll',this.myScrollHandler)
    },
})

var myapp4 = new Vue({
    // マウントする要素
    el: '#myapp4',
    
    // アプリケーションで使用するデータ
    data: {
        myRadius: 3,
        myData: 100,

        myLimitPrice: 300,
        myLimitItem: 3,
        myItems: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'ばなな', price: 200 },
            { id: 3, name: 'いちご', price: 300 },
            { id: 4, name: 'オレンジ', price: 400 },
            { id: 5, name: 'メロン', price: 500 },
        ],
        myOrder: false,

        myMonitored: 100,
        myNewVal: 0,
        myOldVal: 0,
        myChangedLog: 'inputの変化を監視しています',

        myList: [],
        myCurrent: '',
        myTopics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ],

        myFilteredData: 19800,
        myAngle: 180,

        myPlay: false,
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myMethodsData: function() {
            return Math.random()
        },
    },
    
    // 算出プロパティ。関数で処理された結果をデータとして返す
    computed: {
        myCircle: function() {
            return {
                length: this.myRadius * 2 * 3.14,
                area: Math.pow(this.myRadius, 2) * 3.14,
            }
        },

        myCalc: {
            get: function() {
                // myDataの値を受け取ってmyCalcとして加工して返す
                return this.myData / 2
            },
            set: function(val) {
                // myCalcの値を受け取ってmyDataとして加工して返す
                this.myData = val * 2
            },
        },

        myComputedData: function() {
            return Math.random()
        },

        myMatched: function() {
            // myLimitPrice円以下のリストを返す
            return this.myItems.filter(function(el) {
                return el.price <= this.myLimitPrice
            }, this)
        },
        mySorted: function() {
            return _.orderBy(this.myMatched, 'price', this.myOrder ? 'desc' : 'asc')
        },
        myLimited: function() {
            // myMatchedで絞ったデータの0番目からmyLimitItem番目まで
            return this.mySorted.slice(0, this.myLimitItem)
        },
    },
    
    // ライフサイクルフック。特定のタイミングで自動的に呼び出される関数
    created: function() {
        // 他にもbeforeCreate, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed, errorCaptured
    },

    watch: {
        myMonitored: {
            // myMonitoredが変化したときに行う処理
            handler: function(myNewVal, myOldVal) {
                this.myChangedLog = myOldVal+'が'+myNewVal+'に変更されました'
            },
            // ネストされたオブジェクトも監視するか
            deep: true,
            // 初期読み込み時にも呼び出すか
            immediate: false,
        },

        myCurrent: function (val) {
            // GitHubのAPIからトピックのリポジトリを検索
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: 'topic:' + val
                }
            }).then(function (response) {
              this.myList = response.data.items
            }.bind(this))
        }
    },

    filters: {
        myFilter: function (val) {
            // カンマ区切りした数に変換
            return val.toLocaleString()
        },
        // 度からラジアンに変換するフィルタ
        radian: function (val) {
            return val * Math.PI / 180
        },
        // 小数点以下を第2位に丸めるフィルタ
        round: function (val) {
            return Math.round(val * 100) / 100
        },
    },

    directives: {
        myDirective: {
            bind: function (el, binding) {
                // ディレクティブが初めて要素と紐づいたときの処理
            },
            inserted: function (el, binding) {
                // 紐づいた要素が親Nodeに挿入されたときの処理
            },
            update: function (el, binding) {
                // 紐づいた要素を包含しているコンポーネントのVNodeが更新されたときの処理
            },
            componentUpdated: function (el, binding) {
                // 包含しているコンポーネントと子コンポーネントのVNodeが更新されたときの処理
            },
            unbind: function (el, binding) {
                // 紐づいていた要素からディレクティブが削除されるときの処理
            },
        },

        video(el, binding) {
            if(binding.value !== binding.oldValue) {
                binding.value ? el.play() : el.pause()
            }
        },
    },
})



// コンポーネントはnew Vueの前に記述
// どの部品からでも呼び出せる
Vue.component('my-component', {
    template: '<p>{{ myMessage }}</p>',
    // dataはオブジェクトを返す変数にする
    data: function() {
        return {
            myMessage: 'This is my component',
        }
    },
})
Vue.component('my-random-number', {
    template: '<p>{{ myRandNum }}</p>',
    data: function() {
        return {
            myRandNum: Math.random(),
        }
    },
})
// 子のコンポーネント
Vue.component('my-compo-child', {
    template: '<p>{{ myval }}</p>',
    // 受け取る属性名を指定
    props: ['myval'],
})
Vue.component('my-over-ride', {
    template: '<p id="childid" class="childclass">This is ChildComponent</p>',
})
Vue.component('my-event-up', {
    template: '<button v-on:click="myClick">子のボタン</button>',
    methods: {
        myClick: function() {
            this.$emit('my-childs-event')
        },
    },
})
// <slot></slot>の内側に親のコンテンツを展開
Vue.component('my-tag', {
    template: '<h3><slot></slot></h3>'
})
Vue.component('my-named-slot', {
    template:   '<div>'+
                    '<h3><slot name="my-head3">デフォルト値</slot></h3>'+
                    '<h4><slot name="my-head4">デフォルト値</slot></h4>'+
                '</div>'
})
Vue.component('my-component-a', {
    template: '<h3>component-a</h3>'
})
Vue.component('my-component-b', {
    template: '<h4>component-b</h4>'
})
Vue.component('my-compo-board', {
    template: '<div>Message Board</div>'
})
Vue.component('my-compo-form', {
    template: '<div><textarea v-model="myTextarea"></textarea><slot></slot></div>',
    data: function() {
        return {myTextarea: '投稿内容'}
    }
})
var myapp5 = new Vue({
    // マウントする要素
    el: '#myapp5',
    
    // アプリケーションで使用するデータ
    data: {
        myComponentType: ['my-component-a', 'my-component-b'],
        myToggle: 0,

        mycurrent: 'my-compo-form',
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myParentMethod: function() {
            alert('親のメソッドを実行')
        }
    },
    
    // 算出プロパティ。関数で処理された結果をデータとして返す
    computed: {
        component: function() {
            // myToggleの値でコンポーネントを選択
            return this.myComponentType[this.myToggle]
        }
    },
})

var myapp6 = new Vue({
    // マウントする要素
    el: '#myapp6',
    
    // アプリケーションで使用するデータ
    data: {
        myToggle: true,
        myToggle2: true,

        myType: "B",
        myType2: "C",

        myCount: 0,

        myOrder: false,
        myGoodsList: [
            {id: 1, name: 'hoge', score: 100 },
            {id: 2, name: 'fuga', score: 200 },
            {id: 3, name: 'piyo', score: 500 },
            {id: 4, name: 'foo', score: 9000 },
            {id: 5, name: 'bar', score: 1200 },
        ],

        myChangeSVG: false,
        myCircleT: {
            r: 50,
            fill: 'red',
        },
        myCircleF: {
            r: 70,
            fill: 'skyblue',
        },

        myShowFlag: false,
    },
    
    // アプリケーションで使用するメソッド
    methods: {
        myAddGoods: function() {
            //push()で配列にデータを追加
            this.myGoodsList.push({
                id: this.myGoodsList.length + 1,
                name: "name",
                score: 289,
            })
        },
        myRemoveGoods: function(index) {
            // spliceで受け取ったindexの位置から1個の要素を削除
            this.myGoodsList.splice(index, 1)
        },

        myEnter: function(el, done) {
            // .v-enter が付与され、DOMに要素が追加された後の処理
            console.log('トランジション開始')
            setTimeout(done, 1000)  // 1000ms後にmyEnterを終了してafter-enterに遷移
        },
        myAftEnter: function(el) {
            // トランジションが終わる、またはenterでdone()した後の処理
            console.log('トランジション終了')
        },
    },
    
    // 算出プロパティ。関数で処理された結果をデータとして返す
    computed: {
        // orderの値でリストの順番を反転する算出プロパティ
        mySortedList: function () {
            // LodashのorderByメソッドを使用
            return _.orderBy(this.myGoodsList, 'score', this.myOrder ? 'desc' : 'asc')
        },

        myItem: function() {
            return this.myChangeSVG ? this.myCircleT : this.myCircleF
        },
    },
})