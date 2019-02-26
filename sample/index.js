// 子コンポーネント
const Child = {
  template:
  '<div>' +
    '<input v-model="inputValue" type="text">' +
    '<button @click="changeTitle">タイトル変更</button>' +
  '</div>',
  data: function() {
    return {
      // inputの値
      inputValue: ''
    }
  },
  methods: {
    // ボタンをクリックされた時に呼び出すコールバック関数
    changeTitle: function() {
      // changeTitleというイベントを発生させる。inputに入力されている値を渡す
      this.$emit('changeTitle', this.inputValue)
    }
  }
}

// 親コンポーネント
const Parent = {
  
}

// Vue本体のインスタンスを作成する。
// id="contents"の内側がコンポーネントで置き換えられる
new Vue({
  el: '#contents',
  components: {
    // <child-component></child-component>というタグで利用できるようになる。
    'child-component': Child
  }
})
