
var initialState={
    itemArray:[]
};

export const Reducer=(state=initialState,action)=>{
   var temp= [...state.itemArray];
 switch(action.type){
     case "Save":
     temp.push(action.payload.item);
     return{
         itemArray:temp
      }
     break;
      default:
      return state;
     
 }


}
