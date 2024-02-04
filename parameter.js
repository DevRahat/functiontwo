// For a given string tell me whether it has even number of characters or not

function evenSizedString(srt){
    const size= srt.length;
    if(size%2==0){
        console.log('Even Size')
        return true;
    }else{
        console.log('Odd Size');
        return false;
    }
    
    console.log(srt);
    console.log(size);
}
evenSizedString('Dhaka');
evenSizedString('faka');

function dobleOrSingle(number,double){
    if(double==true){
        const result=number*2;
        return result;
    }else{
        const result =number*3;
        return result
    }
}
console.log(dobleOrSingle(12,true));
console.log(dobleOrSingle(12,false));