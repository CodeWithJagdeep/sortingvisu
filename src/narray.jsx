import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'


function Array() {
    let arrayItem = document.getElementsByClassName("arraycontainer")
    const Arraylength = useSelector(state => state.Arraylength)
   
    const [array, setArray] = useState([])
    const [rearraged, setRearranged] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        rearrange()
        dispatch(
            {
                type:"array",
                arraydata: array
            }
        )
       
    }, [Arraylength])


    function rearrange() {
        let sample = []
        
        for (let i = 0; i <Arraylength; i++) {
            let random = getRandomInt(160, 400)
            sample.push(random)
        }
        setArray(sample)
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }
    function bubblesort() {
        let newarray = array.slice(0)
        let round = 0
        let i = 0
        let j = 1
        let k = 0
        
        let dispatchitems = []
        let skips = 0
        while (round < newarray.length) {
            for (let i = 0; i < newarray.length - round - 1; i++) {
                dispatchitems.push([newarray[i], newarray[i + 1]])
            }
            round++
        }

        let intersoting = setInterval(() => {
            if (i < dispatchitems.length) {
                if (j === (newarray.length - skips) && k === (newarray.length - 1 - skips)) {
                    arrayItem[k - 1].style.backgroundColor = "transparent"
                    j = j - (arrayItem.length - 1 - skips)
                    k = (k + 1 + skips) - (arrayItem.length)
                    skips++

                }
                else {
                    if (arrayItem[j].style.height < arrayItem[k].style.height) {
                        [arrayItem[j].style.height, arrayItem[k].style.height] = [arrayItem[k].style.height, arrayItem[j].style.height]
                        arrayItem[j].style.backgroundColor = "red"
                        arrayItem[k].style.backgroundColor = "green"
                        

                    }
                    arrayItem[j].style.backgroundColor = "green"
                    arrayItem[k].style.backgroundColor = "red"
                    i++
                    j++
                    k++
                    if (k > 1) {
                        arrayItem[k - 2].style.backgroundColor = "transparent"
                    }
                }

            }
            else if (i === dispatchitems.length) {
                arrayItem[k - 1].style.backgroundColor = "green"
                clearInterval(intersoting)
                dispatch({
                    type: "sorting",
                    sorting: false,
                    Arraylength: Arraylength,
                    bubblesort: false,
                    skipinfo:false
                })
            }
        }, 700)
       

    }

    function insertionsort(){
        let newarray = array.slice()
        let insdispatch =[]
        let skips = 0
        let round=0
        let i = 0
        let j = 0
        let k = 1
        let s =0
        

        while(round<newarray.length){
            for(let i=skips ; i<newarray.length-1; i++){
                insdispatch.push([i,i+1])
            }
            round++
            skips++ 
        }
        let movieinterval = setInterval(() => {
            if (i < newarray.length) {
                if (k===(newarray.length)){
                    arrayItem[k-1].style.backgroundColor = "transparent"
                    j++
                    i++
                    k=j+1   
                }
                else{
                    if (arrayItem[j].style.height > arrayItem[k].style.height){
                        [arrayItem[j].style.height, arrayItem[k].style.height] = [arrayItem[k].style.height, arrayItem[j].style.height]
                        arrayItem[j].style.backgroundColor = "red"
                        arrayItem[k].style.backgroundColor = "green"
                        
                    }
                    arrayItem[j].style.backgroundColor = "green"
                    arrayItem[k].style.backgroundColor = "red"
                    k++
                    if (Math.abs(k-j) > 2) {
                        arrayItem[k - 2].style.backgroundColor = "transparent"
                    }
                    
                }
                
               
            }
            else if (i === newarray.length) {
                arrayItem[k-2].style.backgroundColor = "green"
                clearInterval(movieinterval)
                dispatch({
                    type: "sorting",
                    sorting: false,
                    Arraylength: Arraylength
                })
            }
        }, 500);
    }
   
    return (
        <>
            <Header
                rearragea={rearrange}
                bubblesort={bubblesort}
                selection = {insertionsort}
                arrayItem={arrayItem}
            />
            <div className='arraymain'
                style={{
                    display: "flex",
                    maxWidth: "100vw",
                    height: "80vh",
                    justifyContent: "center",
                    alignItems: "flex-end",

                }} >
                <div className="array"
                    style={{
                        display: "flex",
                        maxWidth: "80vw",
                        height: "80vh",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        transition: "1s all ease-in",

                    }}>
                    {array.map(value => (
                        <div className="arraycontainer"
                            style={{
                                height: `${value}px`,
                                width: "50px",
                                border: "1px solid white",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                margin: "10px 4px",
                                transition: "0.5s all ease-in"
                            }}>

                        </div>
                    ))}

                    {/* <button onClick={array}>rearrange</button>
            <button onClick={bubblesort}>hello</button> */}
                    <a href=""></a>
                </div>
            </div>
        </>
    )
}

export default Array
