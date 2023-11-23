function solution(numbers) {
  var answer = 0;
  // 0~9까지의 숫자 중 있는지 없는지 확인 includes()함수사용하면 없는 숫자는 false로 나온다
  // false인 숫자들을 모두 더한다
  for (let i = 1; i <= 9; i++) {
    // console.log(numbers.includes(i))
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}
