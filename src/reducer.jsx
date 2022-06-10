

export const initialstate={
    array:[],
    sort : false ,
    Arraylength: 10,
    bubblesort : false,
    insertion: false,
    bubblesortskip:false,
    insertionskipinfo:false
}

export const reducer=(state=initialstate, action)=>{
    console.log(action)
    switch (action.type) {
        case "sorting":
           return {
               sort : action.sorting,
               Arraylength: action.Arraylength,
               bubblesort: action.bubblesort,
               insertionsort: action.insertion,
               bubblesortskip: action.bubbleskipinfo,
               insertionskipinfo: action.insertionskipinfo
           }
        case "increse":
            return {
                ...state,
                Arraylength: action.data,
            }
        case "array":
            return {
                ...state,
                array:[action.arraydata]
            }
        default:
            return state
    }
}