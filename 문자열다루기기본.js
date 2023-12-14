function solution(s) {
  // s의 길이가 4 or 6가 아니면 false 리턴
  if (s.length === 4 || s.length === 6) {
    // s가 숫자로만 구성된다면 true 아니면 false
    // if(isNaN(s)){
    //     return false
    // } else {
    //     return true
    // }

    // NaN이면 즉 숫자가 아니면 true 숫자면 false

    // s를 각각으로 나누고? 각각을 숫자인지아닌지 판단...
    return !isNaN(Number(s)) && !s.includes("e");
  } else {
    return false;
  }
}
