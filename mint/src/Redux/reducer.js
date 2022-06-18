import * as types from './actionTypes'
var initState={

    data:[],
    loading:false,
    error:false
 
}

export const newsData=(state=initState, action)=>{
  const {type,payload}=action;
  switch(type){
    case types.FETCH_DATA_REQUEST:
        return {
            ...state,
            error:false,
            loading:true,
        }
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data:payload,
                loading:false
            }
        case types.FETCH_DATA_FAILURE:
                return {
                    ...state,
                    data:payload,
                    loading:false
                }
                default:
                    return state
      
  }
}