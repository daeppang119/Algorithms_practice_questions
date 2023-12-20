function solution(arr1, arr2) {
  var answer = [];
  // i가 0부터 arr1의 길이만큼 돌린 후 sum이라는 새로운 변수에 넣는다.
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    // sum이라는 새로운 변수에는 arr1의 i번째 index의 j번째 요소와 arr2의 i번째 index의 j번째 요소를 합한 것을 넣어준다
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    // 마지막으로 sum을 answer에 넣어준다.
    answer.push(sum);
  }
  return answer;
}
