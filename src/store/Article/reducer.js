import { createStore } from "redux";

const initData = {
  data: [""],
  message: "記事",
  mode: "default",
  fdata: []
};

export function ArticleReducer(state = initData, action) {
  switch (action.type) {
    case "ADD":
      return addReduce(state, action);
    case "DELETE":
      return deleteReduce(state, action);
    case "FIND":
      return findReduce(state, action);
    default:
      return state;
  }
}

function addReduce(state, action) {
  let d = new Date()
  let f = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate()
  let data = {
    message: action.message,
    tag: action.tag,
    created: f,
  }
  let newdata = state.data.slice()
  newdata.unshift(data)
  return {
    data: newdata,
    message: "記事投稿はこちらから",
    mode: "default",
    fdata: []
  }
}

function findReduce(state, action) {
  let f = action.find
  let fdata = []
  state.data.foreach((value) => {
    if(value.message.indexOf(f) >= 0) {
      fdata.push(value)
    }
  })
  return {
    data: state.data,
    message: f + "の記事：",
    mode: "find",
    fdata: fdata
  }
}

function deleteReduce(state, action) {
  let newdata = state.data.slice()
  newdata.splice(action.index, 1)
  return {
    data: newdata,
    message: "削除：" + action.index + "",
    mode: "delete",
    fdata: []
  }
}

export function addArticle(text, value) {
  return {
    type: "ADD",
    message: text,
    tag: value
  }
}

export function findArticle(text) {
  return {
    type: "FIND",
    find: text
  }
}

export function deleteArticle(num) {
  return {
    type: "DELETE",
    index: num
  }
}

export default createStore(ArticleReducer)