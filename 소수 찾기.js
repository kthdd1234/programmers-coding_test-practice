/*

문제 설명:
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다(1은 소수가 아닙니다.).

제한 조건:
- n은 2이상 1000000이하의 자연수입니다.

입출력 예 설명:
 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

*/

function solution(n) {
    var answer = 0;
    let numbers = Array.from({ length: n + 1 }, (_, i) => i > 1 ? i : null);
    
    numbers.forEach((num) => {
        if(num === null) return;
        let count = num + num;
        
        while(numbers[count] !== undefined) {
            let idx = count;
            count += num;

            if(numbers[idx] === null) {
                continue;
            }
            numbers[idx] = null;
        }
    });
    
    answer = numbers.filter(Boolean).length; 
    return answer;
}

let n = 1000000;
console.log(solution(n));

function isPrime(element) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5