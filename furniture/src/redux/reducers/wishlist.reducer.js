const initialState = {
  wishlist: {
    data: [],
    load: false,
    error: '',
  },
};

export default function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_WISH_LIST_REQUEST': {
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          load: true,
        },
      }
    }
    case 'GET_WISH_LIST_SUCCESS': {
      const { data, userId } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          userId: userId,
          data: data,
          load: false,
        },
      }
    }
    case 'GET_USER_INFO_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          data: data.wishlist,
          load: false,
        },
      }
    }
    case 'GET_WISH_LIST_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          load: false,
          error: error,
        },
      }
    }
    case 'ADD_WISH_LIST_TASK_REQUEST': {
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          load: true
        },
      };
    }
    case 'ADD_WISH_LIST_TASK_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          data: data,
          load: false
        },
      };
    }
    case 'ADD_WISH_LIST_TASK_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          error: error,
          load: false
        },
      };
    }

    case 'ADD_WISH_LIST_TO_CART_REQUEST': {
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          load: true
        },
      };
    }
    // case 'ADD_WISH_LIST_TO_CART_SUCCESS': {
    //   const { data } = action.payload;
    //   return {
    //     ...state,
    //     anotherwishlist: {
    //       ...state.anotherwishlist,
    //       data: [
    //         ...state.anotherwishlist.data,
    //         data
    //       ],
    //       load: false
    //     },
    //   };
    // }
    case 'ADD_WISH_LIST_TO_CART_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          error: error,
          load: false
        },
      };
    }


    case 'DELETE_WISH_LIST_TASK_REQUEST': {
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          load: true
        },
      };
    }
    case 'DELETE_WISH_LIST_TASK_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          data: data,
          load: false
        },
      };
    }
    case 'DELETE_WISH_LIST_TASK_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          error: error,
          load: false
        },
      };
    }

    case 'CLEAR_WISH_LIST_TASK_REQUEST': {
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          load: true
        },
      };
    }
    case 'CLEAR_WISH_LIST_TASK_SUCCESS': {
      return {
        ...state,
        wishlist:{
          data:[],
          load:false
        },
      }
    }
    case 'CLEAR_WISH_LIST_TASK_FAIL': {
      const { error } = action.payload;
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          error: error,
          load: false
        },
      };
    }
    default: {
      return state;
    }
  }
}
