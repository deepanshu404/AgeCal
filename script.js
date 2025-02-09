// let calculate_btn = document.getElementById('calculate_btn');
// let calculate_age = document.getElementById('calculate_age');

// calculate_btn.addEventListener('click',function(){

//     let birth_date = document.getElementById('birth_date').value;
//     birth_date = new Date(birth_date);
//     let todayDate = new Date();
//     totalAge = Date.now() - birth_date.getTime();
//     ageYear = new Date(totalAge);
//     ageYear = Math.abs(ageYear.getFullYear() - 1970);

//         function ageMonth(){
//             if(todayDate.getMonth() >= birth_date.getMonth()){
                
//                 if(todayDate.getDate() >= birth_date.getDate()){
//                     return todayDate.getMonth() - birth_date.getMonth();
//                 }else{
//                     if ((todayDate.getMonth() - 1) >= birth_date.getMonth()){
//                         return (todayDate.getMonth() -1) - birth_date.getMonth();
//                 }else{
//                     return ((todayDate.getMonth() - 1) + 12) - birth_date.getMonth();
//                 }
//             }
//         }
//     }

//         function ageDay(){
//             if(todayDate.getDate() > birth_date.getDate()){
//                 return todayDate.getDate() - birth_date.getDate();
//             }else if ( todayDate.getDate() == birth_date.getDate()){
//                 return todayDate.getDate() - birth_date.getDate();
//             }else{
//                 let calDate = new Date(birth_date.getFullYear(), birth_date.getMonth(),0);
//                 return (todayDate.getDate() + calDate.getDate()) - birth_date.getDate();
//             }
//     }

//     calculate_age.innerHTML = "Your Age " + ageYear + " Years " + ageMonth() + "Months" + (" ") + ageDay() + "Days"
//     })
 
let calculate_btn = document.getElementById('calculate_btn');
let calculate_age = document.getElementById('calculate_age');

calculate_btn.addEventListener('click', function () {
    let birth_date = document.getElementById('birth_date').value;
    
    if (!birth_date) {
        calculate_age.innerHTML = "Please enter your birth date.";
        return;
    }

    birth_date = new Date(birth_date);
    let todayDate = new Date();
    
    let totalAge = Date.now() - birth_date.getTime();
    let ageYear = new Date(totalAge).getUTCFullYear() - 1970;

    function ageMonth() {
        let monthDiff = todayDate.getMonth() - birth_date.getMonth();
        let dayDiff = todayDate.getDate() - birth_date.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            monthDiff += 12;
        }

        if (dayDiff < 0) {
            monthDiff -= 1;
        }

        return monthDiff;
    }

    function ageDay() {
        let dayDiff = todayDate.getDate() - birth_date.getDate();

        if (dayDiff < 0) {
            let prevMonthDays = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
            dayDiff += prevMonthDays;
        }

        return dayDiff;
    }

    calculate_age.innerHTML = `Your Age: ${ageYear} Years ${ageMonth()} Months ${ageDay()} Days`;
});
