function solution(s) {
  let a = Math.floor(s.length / 2);

  console.log(s.split("")[a]);
  if (s.length % 2 === 1) {
    return s.split("")[a];
  } else {
    return s.split("")[a - 1] + s.split("")[a];
  }
}
