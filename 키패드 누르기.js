function solution(numbers, hand) {
    var answer = '';
    let useHand = hand === 'left' ? 'L' : 'R';
    let keypad = [[1, 4, 7], [3, 6, 9], [2, 5, 8, 0]];
    let [leftHandPos, rightHandPos] = [0, 0];
    
    numbers.forEach((item) => {
        let position = keypad.findIndex((padNumbers) => padNumbers.includes(item));
        
        if(position === 2) {
            let splitInt = (pos) => pos % 2 === 0 && pos !== 0 ? 'even' : 'odd';
            let [str1, str2] = [splitInt(leftHandPos), splitInt(rightHandPos)];
            
            if(str1 === str2) {
                answer += useHand;
                useHand === 'L' ? leftHandPos = item : rightHandPos = item;
            } else {
                let own = splitInt(item);
                
            }
            
        } else {
            if(position === 0) {
                answer += 'L';
                leftHandPos = item;
            } else {
                answer += 'R';
                rightHandPos = item;
            }
        }
    });
    
    return answer;
}