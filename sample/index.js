// 子コンポーネント
const Child = {
  name: 'child-component',
  template:
  '<div>' +
    '<input v-model="inputValue" type="text">' +
    '<button @click="handleOnClick">タイトル変更</button>' +
  '</div>',
  data: function() {
    return {
      // inputの値
      inputValue: ''
    }
  },
  methods: {
    // ボタンクリック時のコールバック関数
    handleOnClick: function() {
      // changeTitleというイベントを発生させる。inputに入力されている値を渡す
      this.$emit('changeTitle', this.inputValue)
    }
  }
}

// 親コンポーネント
// child-componentのchangeTitleというイベントに対してリスナをセット
// イベントが発生したら、渡ってきた値にタイトルを変更する
const Parent = {
  name: 'parent-component',
  components: {
    // <child-component></child-component>というタグで利用できるようになる
    'child-component': Child
  },
  template:
  '<div>' +
    '<h1>{{ title }}</h1>' +
    '<child-component @changeTitle="handleOnChangeTitle"></child-component>' + // ここで子コンポーネントを利用. @changeTitleでリスナをセット
  '</div>',
  data: function() {
    return {
      // タイトル文字列
      title: '初期表示時のタイトル'
    }
  },
  methods: {
    // changeTitleイベント時のコールバック関数
    handleOnChangeTitle: function (title) {
      if (!title) {
        // 空文字の場合は「無題のタイトル」に置き換える
        this.title = '無題のタイトル'
        return
      }
      this.title = title
    }
  }
}

// Vue本体のインスタンスを作成する。
// id="contents"の内側がコンポーネントで置き換えられる
new Vue({
  el: '#contents',
  components: {
    // <parent-component></parent-component>というタグで利用できるようになる
    // index.html内で使用している
    'parent-component': Parent
  }
})
