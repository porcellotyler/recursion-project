function fibs(number) {
    let answer = [0];
  
    if (number === 1) { 
        return answer 
    } else if (number === 2) {
        answer = [0, 1];
        return answer
    };
  
    let a = 1;
    let b = 1;
    answer.push(a, b);
    
    for (let i = 4; i <= number; ++i) {
        let c = a + b;
        answer.push(c);
        a = b;
        b = c;
    }
    return answer;
}

function fibsRec(number) {
    let result;
    if (number < 2) {
        result = number;
        return result
    } else {
        result = fibsRec(number - 1) + fibsRec(number - 2);
        return result
    }
}

console.log(fibsRec(8));
