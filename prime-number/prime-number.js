

function isPrime(n){
    if(n==1){
        console.log(`${n} is not a prime number`);
    }else if(n < 1){
        console.log(`${n} is not a prime number`);
    }else{
        for( let i =2; i<n;i++){
            if(n%i==0){
                var result = `${n} is not a prime number`;
                return result;
            } else{
                var result = `${n} is a prime number`;
            }
        }
        return result;
    }
}

console.log(isPrime(5));



