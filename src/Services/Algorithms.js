import { _animation, mergeSortHelper, quickSortHelper } from "../util/utils";

export const _handleAlgorithms = (currentAlgo, array, dispatch, arrayRefs) => {
  dispatch({
    type: "running",
    payload: true,
  });

  switch (currentAlgo) {
    case "BUBBLE SORT":
      return _bubbleSort(array, dispatch, arrayRefs);
    case "SELECTION SORT":
      return _selectionSort(array, dispatch, arrayRefs);
    case "INSERTION SORT":
      return _insertionSort(array, dispatch, arrayRefs);
    case "MERGE SORT":
      return mergesort(array, dispatch, arrayRefs);
    case "QUICK SORT":
      return quicksort(array, dispatch, arrayRefs);
    default:
      return;
  }
};

// 🔹 Bubble Sort
export const _bubbleSort = (array, dispatch, arrayRefs) => {
  let newArray = [...array];
  let animations = [];

  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      animations.push([j, j + 1, false]); // ✅ Comparison
      if (newArray[j] > newArray[j + 1]) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
        animations.push([j, j + 1, true]); // ✅ Swap
      }
    }
  }

  _animation(dispatch, array, newArray, animations, arrayRefs);
};

// 🔹 Insertion Sort
export const _insertionSort = (array, dispatch, arrayRefs) => {
  let newArray = [...array];
  let animations = [];

  for (let i = 1; i < newArray.length; i++) {
    let j = i;
    while (j > 0 && newArray[j] < newArray[j - 1]) {
      animations.push([j - 1, j, false]); // ✅ Comparison
      [newArray[j], newArray[j - 1]] = [newArray[j - 1], newArray[j]];
      animations.push([j - 1, j, true]); // ✅ Swap
      j--;
    }
  }

  _animation(dispatch, array, newArray, animations, arrayRefs);
};

// 🔹 Selection Sort
export const _selectionSort = (array, dispatch, arrayRefs) => {
  let newArray = [...array];
  let animations = [];

  for (let i = 0; i < newArray.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < newArray.length; j++) {
      animations.push([minIdx, j, false]); // ✅ Comparison
      if (newArray[j] < newArray[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [newArray[i], newArray[minIdx]] = [newArray[minIdx], newArray[i]];
      animations.push([i, minIdx, true]); // ✅ Swap
    }
  }

  _animation(dispatch, array, newArray, animations, arrayRefs);
};

// 🔹 Merge Sort
export const mergesort = (array, dispatch, arrayRefs) => {
  let newArray = [...array];
  let animations = [];
  mergeSortHelper(newArray, 0, newArray.length - 1, animations);
  _animation(dispatch, array, newArray, animations, arrayRefs);
};

// 🔹 Quick Sort
export const quicksort = (array, dispatch, arrayRefs) => {
  let newArray = [...array];
  let animations = [];
  quickSortHelper(newArray, 0, newArray.length - 1, animations);
  _animation(dispatch, array, newArray, animations, arrayRefs);
};
