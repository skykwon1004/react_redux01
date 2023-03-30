import { configureStore, createSlice } from "@reduxjs/toolkit";



//toggle 기능
const dark = createSlice({
    name: 'dark',
    initialState: false,   //기본값
    reducers: {
        //토글 버튼 함수
        change: state => !state,
    }
});
//토글 가능하게 change를 또 만든거를 export
export const { change } = dark.actions;




// ---------------------------------------
//plus 기능
const up = createSlice(
    {
        name: 'plus',
        initialState: 1,
        reducers: {
            //1씩 올리기
            // pluse: state => state + 1

            // 10씩 올리기
            pluse: (state, action) => state + action.payload
        }
    }
)
export const { pluse } = up.actions;




//----------------------------------------
//data 가져와서 사용하기
const data = [
    { id: 1, title: "01", content: "content01" },
    { id: 2, title: "02", content: "content02" },
    { id: 3, title: "03", content: "content03" },
]
const dataList = createSlice(
    {
        name: "list",
        initialState: data,
        reducers: {
            //전체 삭제
            //onDelete: state => state = [],

            //클릭한거만 삭제
            onDelete: (state, action) => state.filter(it => it.id !== action.payload),

            //클릭하면 추가
            onCreate: (state, action) => [...state, action.payload],

            //수정하기
            // onModify: (state, action) => state.map(it => it.id === action.payload
            //     ? { ...it, input } : it),
        }
    }
)
export const { onDelete, onCreate } = dataList.actions;






// dark 나 up 쓸꺼면 reducer 해줘야 가져다 쓸 수 있음
const store = configureStore({
    reducer: {
        dark: dark.reducer,
        up: up.reducer,
        dataList: dataList.reducer
    }
});

export default store;