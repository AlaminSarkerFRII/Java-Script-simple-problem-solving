// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

var friends = ['Alamin Sarker', 'Kamrul Hasan', 'Menhajul Islam', ' Krisno Chandra das', 'Prosanto Chandra das'];

for ( let i =0; i<friends.length; i++){
    var friend =  friends[i]; // where [i] is a index number of an array....
    // console.log(friend);
}

/* //<=========================================================================================
১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
=========================================================================> */

let ages = [ 70,75,100,50,60,76,88,90,40,52,50];
/* 
var largest = 0;

for ( let i=0; i<ages.length; i++){
   if (ages[i]>largest){
       var largest = ages[i]; /// max element.........
   }
}

console.log(largest);
 */

//all numbers greater than 80.........


for ( let i = 0; i<ages.length; i++){
    if(ages[i]>80){
        console.log(ages[i]);
    }
}