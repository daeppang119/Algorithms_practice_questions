function solution(a, b) {
  var answer = 0;
  // a가 b보다 작거나 같을 때, a~b까지 더해주기
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
      answer += i;
    }
  } else if (b <= a) {
    // b가 a보다 작거나 같을 때, b~a까지 더해주기
    for (let j = b; j <= a; j++) {
      answer += j;
    }
  }
  return answer;
}
