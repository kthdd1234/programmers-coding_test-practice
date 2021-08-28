/*

문제 설명:
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

제한 조건:
- nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
- nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

입출력 예 설명:
  solution([[1,2,7,6,4]]);

  [1,2,4]를 이용해서 7을 만들 수 있습니다.
  [1,4,6]을 이용해서 11을 만들 수 있습니다.
  [2,4,7]을 이용해서 13을 만들 수 있습니다.
  [4,6,7]을 이용해서 17을 만들 수 있습니다.

*/

function solution(nums) {
    var answer = 0;
    let new_nums = nums.concat();
    
    const onPrimeNumber = (num) => {
        let result = true;

        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                result = false;
            }
        }
    
        return result;
    }
    
    for(let i = 0; i < nums.length; i++) {
        let num_1 = nums[i];
        
        const recursion = (arr) => {
            if(arr.length <= 1) return;
           
            for(let k = 0; k < arr.length; k++) {
                if(k === 0) continue;
                let sum = num_1 + arr[0] + arr[k];
                
                if(onPrimeNumber(sum)) answer += 1

            }

            recursion(arr.slice(1));
        }

        new_nums.shift();
        recursion(new_nums);
    }
    return answer;
}