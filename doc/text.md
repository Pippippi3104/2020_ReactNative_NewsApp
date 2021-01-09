## Component (Section04)
* 複雑なUIをComponentを組み合わせて表現
  * 2種類書き方あり
    * Function Component
      * Hooks
        * useState
        * useEffect
    * Class Component
      * State
      * ライフサイクル(ComponentDidMount(useEffect的な物)など)
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
* Redux
  * Store
    * 状態を保存、Componentが変更する
  * Component
    * Action(Type, Payload)をReducerにDispatchする
      * Type   :予め定義された文字列
      * Payload:Action実行時に使用される任意のデータ
  * Reducer
    * Storeを更新する
    * Payloadを受けて、Old State から　New State を作成、Storeに保村
      * 新しいStateを作成しているところがポイント