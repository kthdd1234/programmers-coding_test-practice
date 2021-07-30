/* 
문제 설명:
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항:
- 두 수는 1이상 1000000이하의 자연수입니다.

*/

function solution(n, m) {
    const gcd = getGcd(n, m);
    const lcm = getLcm(n, m, gcd);
    
    return [gcd, lcm];
}

// 최대공약수를 반환하는 함수
const getGcd = (n, m) => {
    let result = [];
    let gcdArr = [];
    
    [n, m].forEach((num) => {
        let arr = [];
        
        for(let i = 1; i <= num; i++) {
            if(num % i === 0) {
                arr.push(num / i);
            }
        }
        
        result.push(arr);
    })
    
    gcdArr = result[0].filter((num) => result[1].includes(num));
    
    return gcdArr[0];
}

// 최소공배수를 반환하는 함수
const getLcm = (n, m, gcd) =>  n * m / gcd;

