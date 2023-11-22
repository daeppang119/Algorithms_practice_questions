function solution(absolutes, signs) {
  let answer = 0;
  // 배열의 숫자 하나씩 꺼내기
  // 꺼낸 숫자 ture면 더하기, false면 빼기
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}
