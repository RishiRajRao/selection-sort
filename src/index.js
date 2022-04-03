function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (var j = i, k = i; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
  console.log("res==", arr);
}

selectionSort([3, 1, 6, 8, 9, 2]);
