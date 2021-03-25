const initialState ={
    compteur:0
}
const reducer =(state=initialState,action)=>{
    if(action.type === 'INCREMENT'){
        return{
            compteur:state.compteur +1
        }
    }
    if(action.type === 'DECREMENT')
    {
        return{
            compteur:state.compteur -1
        }  
    }
    return state;
}
export default reducer;