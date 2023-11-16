function solution(x) {
  // n의 각 자릿수의 숫자를 문자열로 변경 String()
  // 문자를 하나씩 자르기 split('')
  // 문자를 숫자로 변경하기
  let arr = String(x).split("").map(Number);
  // 배열에 있는 값 더하기
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  console.log(x);
  console.log(sum);
  // 정수와 더한값을 나눠서 0이면 ture 아니면 false
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
