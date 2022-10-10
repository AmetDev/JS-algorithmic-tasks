const NowDate = new Date();
const MyBirthDay = new Date(2023, 02, 15);

function getDaysBeforeBirthday(nextBirthdayDate) {
    nextBirthdayDate = (((((MyBirthDay.getTime() - NowDate.getTime()) / 1000) / 60) / 60) / 24);
    
    console.log(nextBirthdayDate);
    let number = Math.ceil(nextBirthdayDate * 10) / 10;
    console.log((`До вашего дня рождения осталось: ${Math.round(number)} дней!`));
}

getDaysBeforeBirthday();