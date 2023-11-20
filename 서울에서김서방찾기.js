function solution(seoul) {
  var answer = "";
  for (let i = 0; i < seoul.length; i++) {
    console.log(seoul[i]);
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}
