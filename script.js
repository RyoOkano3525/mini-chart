"use strict";

// 宣言
const [
  main,
  pyramid_2,
  pyramid_3,
  text_1,
  text_2,
  text_3,
  text_4,
  text_5,
  text_6,
  text_7,
  button_save,
  button_clear,
  button_henkei,
  button_rule,
  hidden_message_1,
  hidden_message_2,
  trans_pyramid,
  buttons,
  arrow_1,
  arrow_2,
  modal_1,
  modal_1_close,
  modal_2,
  modal_2_yes,
  modal_2_no,
  mask,
] = [
  "main",
  "pyramid_2",
  "pyramid_3",
  "text_1",
  "text_2",
  "text_3",
  "text_4",
  "text_5",
  "text_6",
  "text_7",
  "button_save",
  "button_clear",
  "button_henkei",
  "button_rule",
  "hidden_message_1",
  "hidden_message_2",
  "trans_pyramid",
  "buttons",
  "arrow_1",
  "arrow_2",
  "modal_1",
  "modal_1_close",
  "modal_2",
  "modal_2_yes",
  "modal_2_no",
  "mask",
].map((id) => document.getElementById(id));

const button_henkei_tree = document.getElementsByClassName("button_henkei");

// ページ更新時の入力保持
if (
  localStorage.getItem(
    "memo_1",
    "memo_2",
    "memo_3",
    "memo_4",
    "memo_5",
    "memo_6",
    "memo_7"
  ) === null
) {
  text_1.value = "";
  text_2.value = "";
  text_3.value = "";
  text_4.value = "";
  text_5.value = "";
  text_6.value = "";
  text_7.value = "";
} else {
  text_1.value = localStorage.getItem("memo_1");
  text_2.value = localStorage.getItem("memo_2");
  text_3.value = localStorage.getItem("memo_3");
  text_4.value = localStorage.getItem("memo_4");
  text_5.value = localStorage.getItem("memo_5");
  text_6.value = localStorage.getItem("memo_6");
  text_7.value = localStorage.getItem("memo_7");
}

// 全保存する
button_save.addEventListener("click", () => {
  hidden_message_1.classList.add("appear_1");
  hidden_message_1.classList.remove("hidden_message_1");
  setTimeout(() => {
    hidden_message_1.classList.remove("appear_1");
    hidden_message_1.classList.add("hidden_message_1");
  }, 2000);
  localStorage.setItem("memo_1", text_1.value);
  localStorage.setItem("memo_2", text_2.value);
  localStorage.setItem("memo_3", text_3.value);
  localStorage.setItem("memo_4", text_4.value);
  localStorage.setItem("memo_5", text_5.value);
  localStorage.setItem("memo_6", text_6.value);
  localStorage.setItem("memo_7", text_7.value);
});

// 全削除する
button_clear.addEventListener("click", () => {
  modal_2.classList.remove("hidden_modal");
  mask.classList.remove("hidden_modal");
});

modal_2_no.addEventListener("click", () => {
  modal_2.classList.add("hidden_modal");
  mask.classList.add("hidden_modal");
});

mask.addEventListener("click", () => {
  modal_2.classList.add("hidden_modal");
  mask.classList.add("hidden_modal");
});

modal_2_yes.addEventListener("click", () => {
  modal_2.classList.add("hidden_modal");
  mask.classList.add("hidden_modal");
  text_1.value = "";
  text_2.value = "";
  text_3.value = "";
  text_4.value = "";
  text_5.value = "";
  text_6.value = "";
  text_7.value = "";
  localStorage.removeItem("memo_1");
  localStorage.removeItem("memo_2");
  localStorage.removeItem("memo_3");
  localStorage.removeItem("memo_4");
  localStorage.removeItem("memo_5");
  localStorage.removeItem("memo_6");
  localStorage.removeItem("memo_7");
  hidden_message_2.classList.add("appear_2");

  setTimeout(() => {
    hidden_message_2.classList.remove("hidden_message_2");
  }, 500);

  setTimeout(() => {
    hidden_message_2.classList.add("hidden_message_2");
  }, 3000);
});

// ボタン ミニチャートの使い方
button_rule.addEventListener("click", () => {
  // クリックしたらモーダルウィンドウを表示する
  modal_1.classList.remove("hidden_modal");
  mask.classList.remove("hidden_modal");
});

modal_1_close.addEventListener("click", () => {
  modal_1.classList.add("hidden_modal");
  mask.classList.add("hidden_modal");
});

mask.addEventListener("click", () => {
  modal_1.classList.add("hidden_modal");
  mask.classList.add("hidden_modal");
});

// ピラミッド↔ツリー ボタン
for (let i = 0; i < button_henkei_tree.length; i++) {
  button_henkei_tree[i].addEventListener("click", () => {
    if (main.classList.toggle("main-trans")) {
      // main.classList.add("main-trans");
      // buttons.classList.add("buttons-trans");
      // buttons.classList.remove("buttons");
      arrow_1.classList.add("arrow-trans");
      arrow_2.classList.add("arrow-trans");
      pyramid_2.classList.add("pyramid_2-trans");
      pyramid_3.classList.add("pyramid_3-trans");
      text_2.classList.add("text_2-trans");
      text_3.classList.add("text_3-trans");
      text_4.classList.add("text_4-trans");
      text_5.classList.add("text_5-trans");
      text_6.classList.add("text_6-trans");
      text_7.classList.add("text_7-trans");
    } else {
      // buttons.classList.remove("buttons-trans");
      // buttons.classList.add("buttons");
      arrow_1.classList.remove("arrow-trans");
      arrow_2.classList.remove("arrow-trans");
      pyramid_2.classList.remove("pyramid_2-trans");
      pyramid_3.classList.remove("pyramid_3-trans");
      text_2.classList.remove("text_2-trans");
      text_3.classList.remove("text_3-trans");
      text_4.classList.remove("text_4-trans");
      text_5.classList.remove("text_5-trans");
      text_6.classList.remove("text_6-trans");
      text_7.classList.remove("text_7-trans");
    }
  });
}
