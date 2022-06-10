import React from 'react'
import { useSelector } from 'react-redux';

function Bubblesort() {
  const array = useSelector(state=>state.array)
  console.log(array)
    
  return ;
}

export default Bubblesort