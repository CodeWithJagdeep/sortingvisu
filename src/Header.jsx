import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from './images/icons8-ascending-sorting-96.png'


function Header({ rearragea, bubblesort, selection, arrayItem, bubble }) {
    const [sort, setSort] = useState(false)
    const insertion = useSelector(state => state.insertion)
    const sorting = useSelector(state => state.sort)
    const Arraylength = useSelector(state => state.Arraylength)
    const dispatch = useDispatch()
    
    const bublesort = () => {
        if (!sorting) {
            for (let i = 0; i < arrayItem.length; i++) {
                arrayItem[i].style.backgroundColor = "transparent"
            }
            dispatch({
                type: "sorting",
                sorting: true,
                Arraylength: Arraylength,
                bubblesort: true
            })
            setTimeout(() => {

                bubblesort()
            }, 30);
        }

    }
    const selectionsort = () => {
        if (!sorting) {
            for (let i = 0; i < arrayItem.length; i++) {
                arrayItem[i].style.backgroundColor = "transparent"
            }
            dispatch({
                type: "sorting",
                sorting: true,
                insertion: true,
                Arraylength: Arraylength,
            })
            setTimeout(() => {

                selection()

            }, 30);
        }

    }
    const rearrange = () => {
        if (!sorting) {
            for (let i = 0; i < arrayItem.length; i++) {
                arrayItem[i].style.backgroundColor = "transparent"
            }
            setTimeout(() => {
                rearragea()
            }, 50);
        }
    }

    return (
        <>
            <div className='Header'
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",

                    padding: "10px"
                }}>
                <div className="headertitle">
                    <h1
                        style={{
                            color: "crimson"
                        }}
                    >Sorting-Visu</h1>
                </div>
                <div className="algorithms"
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flexWrap: "wrap",
                        width: "40%",
                        color: `${sorting ? "crimson" : "rgb(255,255,255,0.5)"}`,
                        cursor: `${sorting ? "not-allowed" : "pointer"}`
                    }}>
                    <p style={{ cursor: `${sorting ? "not-allowed" : "pointer"}` }} onClick={bublesort}>Bubble sort</p>
                    <p style={{ cursor: `${sorting ? "not-allowed" : "pointer"}` }} onClick={selectionsort}>Selection sorting</p>
                    {/* <p style={{ cursor: `${sorting ? "not-allowed" : "pointer"}` }} >Merge sorting</p> */}
                </div>
                <div className="sorting"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        // width: "20%"
                    }}
                >
                    <button
                        style={{
                            width: "130px",
                            height: "50px",
                            margin: "0px 10px",
                            border: "2px solid crimson",
                            background: "transparent",
                            color: "white",
                            fontSize: "17px",
                            cursor: "pointer",
                            cursor: `${sorting ? "not-allowed" : "pointer"}`
                        }}
                        onClick={rearrange}
                    >REARRANGE</button>
                    <p
                        style={{
                            margin: "0px 20px",
                            color: "white"
                        }}>Array length</p>
                    <div className="Arraylength"
                        style={{
                            width: "130px",
                            height: "50px",
                            margin: "0px 10px",
                            border: "2px solid crimson",
                            background: "transparent",
                            color: "white",
                            fontSize: "17px",
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: `${sorting ? "not-allowed" : "pointer"}`
                        }} >
                        <button
                            style={{
                                width: "50px",
                                height: "50px",
                                border: "none",
                                borderRight: "2px solid crimson",
                                background: "transparent",
                                color: "white",
                                fontSize: "30px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: `${sorting ? "not-allowed" : "pointer"}`
                            }}
                            onClick={() => {
                                if (!sorting) {
                                    if (Arraylength > 10) {
                                        dispatch({
                                            type: "increse",
                                            data: Arraylength - 10
                                        })
                                    }
                                }
                            }}
                        >-
                        </button>
                        <p
                            style={{
                                width: "50px",
                                height: "50px",
                                border: "none",
                                background: "transparent",
                                color: "white",
                                fontSize: "18px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: `${sorting ? "not-allowed" : "pointer"}`
                            }} >{Arraylength}</p>
                        <button
                            style={{
                                width: "50px",
                                height: "50px",
                                border: "none",
                                borderLeft: "2px solid crimson",
                                background: "transparent",
                                color: "white",
                                fontSize: "26px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: `${sorting ? "not-allowed" : "pointer"}`
                            }}
                            onClick={() => {
                                if (!sorting) {
                                    if (Arraylength < 50) {
                                        dispatch({
                                            type: "increse",
                                            data: Arraylength + 10
                                        })
                                    }
                                }
                            }}
                        >+</button>
                    </div>

                    {sorting ?
                        <button
                            style={{
                                width: "130px",
                                height: "50px",
                                margin: "0px 10px",
                                border: "none",
                                background: "transparent",
                                color: "white",
                                fontSize: "17px",

                            }}
                        >
                            SORTING </button> : ""}
                </div>
            </div>
            {bubble &&
                <div
                    style={{
                        width: "70%",
                        height: "80vh",
                        display: "flex",
                        position: "absolute",
                        backgroundColor: "crimson",
                        flexDirection: "column",
                        justifyContent:"flex-start",
                        left: "20%",
                        right: "20px",
                        top: "15%"
                    }}>
                    <div className="bubblesorttitle"
                        style={{
                            display: "flex",
                            alignItems: "",
                            color: "white",
                            // justifyContent: "center ",
                            alignItems: "center",
                            margin: "10px 20px"
                        }}>
                        <img src={Logo} alt=""
                            style={{
                                width: "50px",
                                height: "50px",
                                transform: "rotate(270deg)",
                                margin: "0px 10px"
                            }} />
                        <p>Bubble Sorting</p>
                    </div>
                    <div className="bubblesortphase"
                        style={{
                            margin: "10px 20px",
                            color:"rgb(255,255,255,0.8)",
                            fontSize:"20px"
                        }}>
                        <p>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.

                            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
                        <h1
                        style={{
                                margin: "10px 10px",
                        }}>Working of Bubble Sort</h1>
                        <ol
                            style={{
                                margin: "0px 50px",
                            }}>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                First Iteration (Compare and Swap)
                            </li>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                Starting from the first index, compare the first and the second elements.
                            </li>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                If the first element is greater than the second element, they are swapped.
                            </li>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                Now, compare the second and the third elements. Swap them if they are not in order.

                            </li>
                            <li>
                                The above process goes on until the last element.
                            </li>
                        </ol>
                    </div>
                    <div className="bubblesortbutton">
                        {/* <button
                        style={{
                            color:"black"
                        }}>Skip tutorial</button> */}
                        <button
                        style={{
                            backgroundColor:"black"
                        }}>Start Visualizer</button>
                    </div>
                    
                </div>}
            {insertion &&
                <div
                    style={{
                        width: "70%",
                        height: "80vh",
                        display: "flex",
                        position: "absolute",
                        backgroundColor: "crimson",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        left: "20%",
                        right: "20px",
                        top: "15%"
                    }}>
                    <div className="bubblesorttitle"
                        style={{
                            display: "flex",
                            alignItems: "",
                            color: "white",
                            // justifyContent: "center ",
                            alignItems: "center",
                            margin: "10px 20px"
                        }}>
                        <img src={Logo} alt=""
                            style={{
                                width: "50px",
                                height: "50px",
                                transform: "rotate(270deg)",
                                margin: "0px 10px"
                            }} />
                        <p>insertion Sorting</p>
                    </div>
                    <div className="bubblesortphase"
                        style={{
                            margin: "10px 20px",
                            color: "rgb(255,255,255,0.8)",
                            fontSize: "20px"
                        }}>
                        <p>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.

                            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
                        <h1
                            style={{
                                margin: "10px 10px",
                            }}>Working of Bubble Sort</h1>
                        <ol
                            style={{
                                margin: "0px 50px",
                            }}>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                First Iteration (Compare and Swap)
                            </li>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                Starting from the first index, compare the first and the second elements.
                            </li>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                If the first element is greater than the second element, they are swapped.
                            </li>
                            <li
                                style={{
                                    margin: "5px 0px",
                                }}>
                                Now, compare the second and the third elements. Swap them if they are not in order.

                            </li>
                            <li>
                                The above process goes on until the last element.
                            </li>
                        </ol>
                    </div>
                    <div className="bubblesortbutton">
                        {/* <button
                        style={{
                            color:"black"
                        }}>Skip tutorial</button> */}
                        <button
                            style={{
                                backgroundColor: "black"
                            }}>Start Visualizer</button>
                    </div>

                </div>}
        </>
    )
}

export default Header