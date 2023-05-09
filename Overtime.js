/*Задача: Working 9 to 5 

Write a function that calculates overtime and pay associated with overtime. 
  - Working 9 to 5: regular hours 
  - After 5pm is overtime 

Your function gets an array with 4 values: 
  - Start of working day, in decimal format, (24-hour day notation) 
  - End of working day. (Same format) 
  - Hourly rate 
  - Overtime multiplier 

Your function should spit out: 
  - $ + earned that day (rounded to the nearest hundredth)

Examples: 
  - overTime([9, 17, 30, 1.5]) ➞ "$240.00" 
  - overTime([16, 18, 30, 1.8]) ➞ "$84.00" 
  - overTime([13.25, 15, 30, 1.5]) ➞ "$52.50" 

2nd example explained: 
  - From 16 to 17 is regular, so 1 * 30 = 30 
  - From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54 
  - 30 + 54 = $84.00 
  */
function overTime(arr) {
    const startTime = arr[0];
    const endTime = arr[1];
    const hourlyRate = arr[2];
    const multiplier = arr[3];
  
    //ako ктайния час е след 17:00 функцията ще върне 17 и ако началния час е преди 9 функцията ще върне 9
    let regularHours = Math.min(endTime, 17) - Math.max(startTime, 9);
    //подсигурявам че засовете са поне 0 в случаите когато началния час е след 17;00
    regularHours = Math.max(regularHours, 0);
    // пак се подсигурявам че часовете не са по малко 0
    let overtime = Math.max(endTime - 17, 0) + Math.max(9 - startTime, 0);
    
    let total = regularHours * hourlyRate;
    total += overtime * hourlyRate * multiplier;
    
    console.log("$" + total.toFixed(2))
  }

overTime([13.25, 15, 30, 1.5]) 

