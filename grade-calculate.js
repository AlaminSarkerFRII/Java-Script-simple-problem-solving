//grade calculation using function......
function yourGrade(name,number){
    if (number >=80 && number<=100){
        var grade = name + ': A+';
    } else if(number>=70 && number<=79){
        var grade = name + ': B';
    }else if( number>=60 && number<=69){
        var grade = name + ': C';
    } else if(number>=50 && number<=59){
        var grade = name + ': C';
    } else if(number>=40 && number<=49){
        var grade = name + ': D';
    } else if (number>=33 && number<=39){
        var grade = name + ': Allah Bacaiche';
    }else{
        var grade = name + 'oh ! you are failur';
    }

    return grade;
}

var result = yourGrade('Alamin',33) // name and nuumber it will be change.
console.log(result);