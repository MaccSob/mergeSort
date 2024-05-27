function mergeSort(left, right) {
    let start = [1,2,3,4,5,6];
    let mid = Math.ceil(start.length / 2);     
    let end = [];
     left = start.slice(0, mid)
 right = start.slice(mid)
 console.log(left);
 console.log(right);
 console.log(end);

 }

mergeSort()