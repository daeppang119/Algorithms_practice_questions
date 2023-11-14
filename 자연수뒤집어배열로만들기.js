function solution(n) {
  // N의 각 자릿수의 숫자를 문자로 변경한다 String()
  // 문자를 하나씩 자르기 split()
  // 문자열배열을 이제 숫자로 하나씩 돌려서 만들기 위해 map(Number)
  let arr = String(n).split("").map(Number);
  // reverse함수로 배열을 뒤집는다
  let answer = arr.reverse();
  return answer;
}
