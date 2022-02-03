/* <=========================================================================================
১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

============================================== */


function feetToInch ( feet){
    var inch = feet *12 ; // i feet = 12 inch
    return inch;
}

var myFeet = 120;

// console.log(feetToInch( myFeet));

/* Inch To Feet Convert

function inchToFeet(inch){
    var feet = inch / 12 ;
    return feet;
}
let myInch = 1440;
console.log(inchToFeet(myInch)); */


/* <=========================================================================================
২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
============================================== */


function centimeterToMeter(centimeters){
    var meter = centimeters / 100;
    return meter;
}

let myCentimeters = 1500 ; 

// console.log(centimeterToMeter(myCentimeters));

// other hand---Meter to centimeters--------

function metersToCentimeters(meters){
    var centimeters = meters * 100;
    return centimeters;
}

let myMeters = 13;
// console.log(metersToCentimeters(myMeters));



/* ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে।  */


function paperRequirements(book1,book2,book3){
    let book1Pages = 100;
    let book2Pages = 200;
    let book3pages = 300;
    let book1TotalPapers = book1Pages * book1Quantity;
    let book2TotalPapers = book2Pages * book2Quantity;
    let book3TotalPapers = book3pages * book3Quantity;
    let result = book1TotalPapers + book2TotalPapers + book3TotalPapers;
    return result;
}

let book1Quantity = 10;
let book2Quantity = 10;
let book3Quantity = 11;
//calling in functin with quantty
// console.log("You Need Total " + paperRequirements(book1Quantity,book2Quantity,book3Quantity) + ' ' + "pages to  print three books.");


/* 
<============================================================================================================

৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 


===============================================================================================================> */

function bestFriends(friends){
    let largestName = "" ;
    for(let i = 0; i<friends.length; i++){
       if(friends[i].length > largestName.length){
           largestName = friends[i];
       }
    }
    return largestName;
}

let friends = ['Alamin Sarker','kajol Sarker','Alif Hossain Nakib', 'Kumar sanu Bissaw das'];

// console.log(bestFriends(friends));


/* <<<<<========================================================================================================

৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


=============================================================>>> */

function arrayName(numbers){
    let posittiveArray = [];
    for( let i=0; i<numbers.length; i++){
        if(numbers[i] >=0){
           posittiveArray.push(numbers[i]);

        }else{
            continue;
        }
    }
    return posittiveArray;
}

let newArray = [1,2,4,-8,5,-3,-7,22,4,9,10];
console.log(arrayName(newArray));
