import *as ActionTypes from './types.js';

export function SIGN_UP(array1){
    return function(dispatch){
        debugger;console.log(array1)
        dispatch({
            
            type:'SIGN_UP',value:array1
        });
    }
}
export function LOGIN(){
    return function(dispatch){
        dispatch({
            type:'LOGIN'
        });
    }
}
export function CANCEL(){
    return function(dispatch){
        dispatch({
            type:'CANCEL'
        });
    }
}