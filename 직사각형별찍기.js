process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // console.log(a);
  // console.log(b);
  for (let i = 0; i < b; i++) {
    // b만큼 반복
    let str = ""; // 출력할 변수 선언
    for (let j = 0; j < a; j++) {
      // 별을 한줄에 몇개 찍을지 반복
      str += "*"; // 별 담기
    }
    console.log(str); // 출력하기
  }
});
