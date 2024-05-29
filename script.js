function merge(l, r) {
    let end = [] 
    while (l.length && r.length) {
      if (l[0] < r[0]) {
        end.push(l.shift())
      } else {
        end.push(r.shift())
      }
    }
    return [...end, ...l,  ...r];
  }
  function mergeSorting(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSorting(arr.slice(0, mid))
    let right = mergeSorting(arr.slice(mid))
    return merge(left, right)
  }



  console.log(mergeSorting([3, 2, 1, 13, 8, 5, 0, 1]));
  console.log(mergeSorting([105, 79, 100, 110]));