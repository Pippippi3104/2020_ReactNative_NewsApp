## Component (Section04)
* 複雑なUIをComponentを組み合わせて表現
  * 2種類書き方あり
    * Function Component
    * Class Component
* 適切な粒度で作成することで以下が向上
  * 可読性
  * 再利用性
* 3種類の要素がある
  * JSX
    * JS XML
    * 見た目を定義
    * render関数が返すJSXによって画面描写
  * Props
    * 性質・不変
    * 例）props.gender: male
    * 親→子に情報を渡す
  * State
    * 状態・可変
    * 例）state.hungry: true
    * stateを変更することで画面が更新される