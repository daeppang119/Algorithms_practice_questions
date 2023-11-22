function solution(phone_number) {
  var answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    // console.log(phone_number[i])
    if (i >= phone_number.length - 4) {
      //   console.log(phone_number[i]);
      answer += phone_number[i];
    } else {
      answer += "*";
    }
  }
  return answer;
}
