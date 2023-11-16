function solution(n) {
  // n의 각 자릿수의 숫자를 문자열로 변경 String()
  // 문자를 하나씩 자르기 split('')
  // 문자를 숫자로 변경하기
  // 큰숫자부터 작은숫자로 정렬 sort((a,b)=>b-a)
  // 각 배열들을 합치기 join('')
  let answer = String(n)
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");

  // 문자를 숫자로 변경하기
  return Number(answer);
}
