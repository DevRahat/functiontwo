function sumOfNumbers(Numbers){
    let sum=0;
    for(const number of Numbers){
        sum=sum+number;
        
    }
    return sum;
}
const numbs=[54,62,12,6];
const sum=sumOfNumbers(numbs);
console.log('sum of Numbers is:',sum);