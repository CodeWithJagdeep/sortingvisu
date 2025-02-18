export const _animation = (
  dispatch,
  array,
  newArray,
  animations,
  arrayRefs,
  rotatingArray
) => {
  dispatch({
    type: "running",
    payload: true,
  });
  let animationSpeed = 1000; // Adjust speed as needed

  animations.forEach(([i, j, swap], index) => {
    setTimeout(() => {
      const bar1 = arrayRefs.current[i];
      const bar2 = arrayRefs.current[j];

      if (!swap) {
        // Highlight bars being compared
        bar1.style.backgroundColor = "#008000"; // Green
        bar2.style.backgroundColor = "#008000";
      } else {
        // Smooth swipe animation
        bar1.style.transition = "transform 0.3s ease-in-out";
        bar2.style.transition = "transform 0.3s ease-in-out";

        // Move bars horizontally
        bar1.style.transform = "translateX(50px)";
        bar2.style.transform = "translateX(-50px)";
        let tempHeight = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = tempHeight;

        setTimeout(() => {
          // Swap heights after animation completes

          // Reset transform
          bar1.style.transform = "translateX(0)";
          bar2.style.transform = "translateX(0)";
        }, 100); // Matches transition duration
      }

      setTimeout(() => {
        // Reset colors
        bar1.style.backgroundColor = "#add8e6";
        bar2.style.backgroundColor = "#add8e6";
      }, animationSpeed / 2);
    }, index * animationSpeed);
  });

  setTimeout(() => {
    dispatch({ type: "array", payload: newArray });
    dispatch({
      type: "running",
      payload: false,
    });
  }, animations.length * animationSpeed);
};

export const mergeSortHelper = (arr, left, right, animations) => {
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);
  mergeSortHelper(arr, left, mid, animations);
  mergeSortHelper(arr, mid + 1, right, animations);
  merge(arr, left, mid, right, animations);
};

function merge(arr, left, mid, right, animations) {
  let leftArr = arr.slice(left, mid + 1);
  let rightArr = arr.slice(mid + 1, right + 1);
  let i = 0,
    j = 0,
    k = left;

  while (i < leftArr.length && j < rightArr.length) {
    animations.push([k, left + i, right + j]);
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    animations.push([k, left + i]);
    arr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    animations.push([k, right + j]);
    arr[k++] = rightArr[j++];
  }
}

export const quickSortHelper = (arr, low, high, animations) => {
  if (low < high) {
    let pivotIndex = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pivotIndex - 1, animations);
    quickSortHelper(arr, pivotIndex + 1, high, animations);
  }
};

function partition(arr, low, high, animations) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    animations.push([j, high]);
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      animations.push([i, j, true]);
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  animations.push([i + 1, high, true]);
  return i + 1;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const _handleRandomArray = (dispatch) => {
  let sample = [];

  for (let i = 0; i < 12; i++) {
    let random = getRandomInt(160, 400);
    sample.push(random);
  }
  dispatch({
    type: "array",
    payload: sample,
  });
};
