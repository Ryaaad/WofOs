import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 Items: [
    { children:[ ],
        clicked:false,
        title:'Calcultor',
        img:0},
        { children:[ ],
        title:'Terminal',
          clicked:false,
        img:1},
        { children:[ ],
        title:'Clock',
          clicked:false,
        img:2},
        { children:[ ],
        title:"Wolf's Op Navigator",
          clicked:false,
        img:3},   
        { children:[ ],
            title:"Recycle bin ",
              clicked:false,
            img:4},         
 ],
  
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        Bodyclicked:(state)=>{
            state.Items.forEach(element => {
                element.clicked=false;
            });
            },
        Eclicked:(state,action:PayloadAction<number>)=>{
        state.Items[action.payload].clicked=!state.Items[action.payload].clicked;
        },
      
    }
});

export const {Bodyclicked,Eclicked}= mainSlice.actions
export default mainSlice.reducer;