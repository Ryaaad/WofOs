import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Children } from 'react';

const initialState = {
  Resultat:'0',
};

const CalcSlice = createSlice({
    name: 'Calc',
    initialState,
    reducers: {
        handelClick:(state,action:PayloadAction<string>)=>{
        if(!isNaN(+action.payload) ) {
           state.Resultat!='0' ?
            state.Resultat+=action.payload
            :   state.Resultat=action.payload
        }
        }
        // Bodyclicked:(state)=>{
        //     state.Items.forEach(element => { element.clicked=false; });
        //     },
        // Eclicked:(state,action:PayloadAction<number>)=>{
        // state.Items[action.payload].clicked=!state.Items[action.payload].clicked;
        // },
        // Addchild:(state,action:PayloadAction<number>)=>{
        //   state.Items[action.payload].children.push({id: state.Items[action.payload].children.length , title:state.Items[action.payload].title,state:true });
        //   },
        // deletechild:(state,action:PayloadAction<number[]>)=>{
        //   state.Items[action.payload[0]].children[action.payload[1]].state=false;
          
        //       },
    }
});

export const {handelClick}= CalcSlice.actions
export default CalcSlice.reducer;