
export function getCommentAction(params) {
  // console.log("🚀 ~ file: comment.action.js ~ line 4 ~ getCommentAction ~ params", params)
  return {
    type:'GET_COMMENT_REQUEST',
    payload: params,
  }
}

export function addCommentAction(params) {
  return{
    type:'ADD_COMMENT_REQUEST',
    payload:params,
  }
}

export function getAllCommentAction(params) {
  return {
    type:'GET_ALL_COMMENT_REQUEST',
    payload:params,
  }
}