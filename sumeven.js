function sumEven(number){
    let sum=0;
    for(const num of number){
        
        if(num%2==0){
            sum=sum+num;
        }
    }
    return sum;
    
}
const nums=[12,10,13];
const sum=sumEven(nums);
console.log(sum);
