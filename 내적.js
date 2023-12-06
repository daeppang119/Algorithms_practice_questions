function solution(a, b) {
  // a의 index랑 b의 index랑 위치가 같은 것들끼리 곱하기
  // 그걸 반복해서 다 더하기..
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    // console.log(a[i], b[i])
    answer += a[i] * b[i];
  }
  return answer;
}
