import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
 Items: [
    { children:[ { id:0,title:''} ],
        clicked:false,
        title:'Calcultor',
        img:0},
        { children:[{ id:0,title:''}  ],
        title:'Clock',
          clicked:false,
        img:1},
        { children:[ { id:0,title:''} ],
        title:'Terminal',
          clicked:false,
        img:2},
        { children:[{ id:0,title:''}  ],
        title:"Wolf's Op Navigator",
          clicked:false,
        img:3},   
        { children:[{ id:0,title:''}  ],
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
            state.Items.forEach(element => { element.clicked=false; });
            },
        Eclicked:(state,action:PayloadAction<number>)=>{
        state.Items[action.payload].clicked=!state.Items[action.payload].clicked;
        state.Items[action.payload].children.push({id: state.Items[action.payload].children.length , title:state.Items[action.payload].title });
        },
      
    }
});

export const {Bodyclicked,Eclicked}= mainSlice.actions
export default mainSlice.reducer;