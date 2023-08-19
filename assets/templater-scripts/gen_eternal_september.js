function calculateEternalSeptemberDay() {
    const startDate = new Date('1993-09-23');
    const currentDate = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
  
    const daysPassed = Math.floor((currentDate - startDate) / millisecondsPerDay);
    
    const dayInEternalSeptember = (startDate.getDate() + daysPassed) % 30;
    const formattedDay = String(dayInEternalSeptember + 1).padStart(2, '0'); // Adding 1 since Eternal September starts with day 0.
  
    return formattedDay;
  }

  module.exports = calculateEternalSeptemberDay;