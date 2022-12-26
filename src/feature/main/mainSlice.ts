import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Children } from 'react';

const initialState = {
 Items: [
    { children:[ { id:0,title:'',state:false} ],
        clicked:false,
        title:'Calcultor',
        img:0},
        { children:[{ id:0,title:'',state:false}  ],
        title:'Clock',
          clicked:false,
        img:1},
        { children:[ { id:0,title:'',state:false} ],
        title:'Terminal',
          clicked:false,
        img:2},
        { children:[{ id:0,title:'',state:false}  ],
        title:"Wolf's Op Navigator",
          clicked:false,
        img:3},   
        { children:[{ id:0,title:'',state:false}  ],
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
        },
        Addchild:(state,action:PayloadAction<number>)=>{
          state.Items[action.payload].children.push({id: state.Items[action.payload].children.length , title:state.Items[action.payload].title,state:true });
          },
        deletechild:(state,action:PayloadAction<number[]>)=>{
          state.Items[action.payload[0]].children[action.payload[1]].state=false;
          
              },
    }
});

export const {Bodyclicked,Eclicked,Addchild,deletechild}= mainSlice.actions
export default mainSlice.reducer;