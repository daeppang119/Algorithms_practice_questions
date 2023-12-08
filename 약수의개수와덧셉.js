function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    console.log(Math.sqrt(i));
    if (Math.sqrt(i) % 1 === 0) {
      answer += -i;
    } else {
      answer += i;
    }
  }
  return answer;
}

function solution(left, right) {
  // left - right까지의 모든 수에서 (약수의 개수가 짝수)? +: -;
  var answer = 0;
  for (let i = left; i <= right; i++) {
    let arr = [];
    // i는 13,14,15,16,17
    // console.log(i)
    for (let j = 1; j <= i; j++) {
      // j는 123...13,123...14,,,123...17
      // console.log(j)
      //j가 i의 약수라면 배열에 담기
      if (i % j == 0) {
        arr.push(j);
      }
    }
    console.log(arr);
    arr.length % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
