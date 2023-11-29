function solution(arr) {
  console.log(arr.indexOf(Math.min(arr)));
  // 배열에서 제일 작은수를 제거
  // 배열에 자리수가 1자리이면 [-1]로 리턴
  // Math.min으로 배열에 제일 작은 수 구하기
  // 배열에서 작은수 제거 splice(인덱스, 1)
  // splice를 사용하려면 제일작은수의 인덱스가 위치를 알아야되서 indexOf() 사용
  let answer = 0;
  if (arr.length === 1) {
    answer = [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(arr)), 1);
    answer = arr;
  }
  return answer;
}
