function solution(num) {
  // num 짝수이면 2로 나누기
  // num 홀수라면 3곱하기 1더하기
  // 쭉반복해서 1이 될때까지 반복
  // 그래서 total 몇번 반복했는지 확인하기
  // 만약 500번 반복했을때까지 1이 출력안되면 -1반환하기
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return i;
    }
  }
  return -1;
}
