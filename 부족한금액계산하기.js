function solution(price, money, count) {
  let answer = 0;
  // count만큼 이용
  // 금액은 price
  // 현재 가지고있는 돈은 money
  // 결론 얼마가 부족한가, 부족하지않다면 0을 return
  for (let i = 1; i <= count; i++) {
    // console.log(price * i)
    answer += price * i;
  }
  return money < answer ? answer - money : 0;
}
