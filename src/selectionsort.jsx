import React from 'react'

function selectionsort() {
    let newarray = array.slice(0)
    let round = 0
    let i = 0
    let j = 1
    let k = 0
    let arrayItem = document.getElementsByClassName("arraycontainer")
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
        }
        console.log(j, k)
    }, 1000)


  return;
}

export default selectionsort