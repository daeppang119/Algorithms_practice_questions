function solution(n) {
  // 제곱근인지 아닌지 확인하기 Math.sqrt()
  // 제곱근이 맞다면 그 정수 찾기
  // 찾은정수는 +1해서 거듭제곱으로 리턴하기 Math.pow
  // 위에 조건에 만약 제곱근이 아니라면 -1 리턴하기
  const square = Math.sqrt(n);
  console.log(square);
  if (square % 1 === 0) {
    return Math.pow(square + 1, 2);
  } else {
    return -1;
  }
}
