function solution(nums) {
    var answer = 0;
    let new_nums = nums.concat();
    let elements = [];
    
    for(let i = 0; i < nums.length; i++) {
        let num_1 = nums[i];
        
        
        const recursion = (arr) => {
            if(arr.length <= 1) return;
           
            for(let k = 0; k < arr.length; k++) {
                if(k === 0) continue;
                elements.push([num_1, arr[0], arr[k]]);
            }

            recursion(arr.slice(1));
        }

        new_nums.shift();
        recursion(new_nums);
    }
    console.log(elements);
    return answer;
}

console.log(solution([1,2,7,6,4]))