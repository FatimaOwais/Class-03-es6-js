// **************** 1*************************
// const num = 4
// if(num > 2) console.log("Greter than 4");


// ***************2*************************

// const score = 70;
// let grade;

// score >70 || score <80 ?grade = "B" :grade = "C";
// console.log("Grade : " ,grade  )


//spread operators array
// 1
// const first_arr = [1,2,3,4,5];
// const second_arr = [first_arr,6,7,8,9,10];
// console.log(second_arr);
// 2 
// const first_arr1 = [1,2,3,4,5];
// const second_arr1 = [6,7,8,9,10,...first_arr1,];
// console.log(second_arr1);



// ********************Spread operator Object *************************
//object
// const first_obj = {
//     name : 'User-01',
//     city:'Karachi',
// }
// console.log(first_obj);
// const second_obj = {
//     ...first_obj,
//     postal_code:'34567',
//     country : 'Pakistan',
// }
// console.log(second_obj);
// const third_obj = {
//  ...first_obj,
//  new_key:'Value New',
//  ...second_obj,
// }
// console.log(third_obj);

// ***********Class Task************
const Student_info ={
    name: "Fatima",
    Class:  "11",
    city:"Karachi",
    country:"Pakistan",
}
const Student_mark = {
    ...Student_info,
    score:80,
    grade:'',
}
const merged_obj ={
    ...Student_info,
    ...Student_mark,
}
console.log(merged_obj);

score >= 90 ?Student_mark.grade = "A": score <= 80? Student_mark.grade = "B":Student_mark.grade = "Fail";
console.log(Student_mark);