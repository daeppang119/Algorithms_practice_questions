function solution(n, m) {
  var answer = [];
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);

  let min = 0;

  // 최대공약수
  for (let i = 0; i <= maxNum; i++) {
    if (m % i === 0 && n % i === 0) {
      min = i;
    }
  }
  console.log(min);

  // 최소공배수는 어떻게 구행?
  // (n*m / 최소공약수)를 구하면 최대공배수가된다.
  let max = (n * m) / min;
  console.log(max);

  answer.push(min, max);

  return answer;
}
