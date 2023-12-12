function solution(s) {
  // 문자열을 하나씩 쪼개서 큰것부터 작은것까지 순서대로..내림차순으로 정렬
  // 문자열을 split메소드를 사용하여 배열로 쪼갠다.
  // ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
  // sort메소드로 순차적으로 나열해준다.
  // ["Z", "b", "c", "d", "e", "f", "g"]
  // reverse메소드로 반전시켜준다.
  // ["g", "f", "e", "d", "c", "b", "Z"]
  // join메소드로 문자열로 바꿔줘서 반환한다.
  // "gfedcbZ"
  return s.split("").sort().reverse().join("");
}
