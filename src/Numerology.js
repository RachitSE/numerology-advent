// Numerology.js

// Calculate Life Path Number based on birthdate (in format YYYY-MM-DD)
export const calculateLifePath = (dob) => {
    const digits = dob.replace(/\D/g, '').split('');
    let sum = digits.reduce((acc, curr) => acc + parseInt(curr), 0);
    while (sum > 9 && sum !== 11 && sum !== 22) { // Handle master numbers 11 and 22
      sum = sum.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return sum;
  };
  
  // Calculate Destiny Number (Expression Number) from name
  export const calculateDestinyNumber = (name) => {
    const nameValues = name.toUpperCase().replace(/[^A-Z]/g, '').split('');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sum = 0;
    nameValues.forEach((char) => {
      sum += alphabet.indexOf(char) + 1;
    });
    while (sum > 9 && sum !== 11 && sum !== 22) { // Handle master numbers
      sum = sum.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return sum;
  };
  
  // Calculate Personality Number (based on consonants in name)
  export const calculatePersonalityNumber = (name) => {
    const consonants = name.toUpperCase().replace(/[^A-Z]/g, '').split('').filter(char => !'AEIOU'.includes(char));
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sum = 0;
    consonants.forEach((char) => {
      sum += alphabet.indexOf(char) + 1;
    });
    while (sum > 9 && sum !== 11 && sum !== 22) {
      sum = sum.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return sum;
  };
  
  // Calculate Soul Urge Number (based on vowels in name)
  export const calculateSoulUrgeNumber = (name) => {
    const vowels = name.toUpperCase().replace(/[^A-Z]/g, '').split('').filter(char => 'AEIOU'.includes(char));
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sum = 0;
    vowels.forEach((char) => {
      sum += alphabet.indexOf(char) + 1;
    });
    while (sum > 9 && sum !== 11 && sum !== 22) {
      sum = sum.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    return sum;
  };
  
  // Zodiac sign based on birth date (simplified, by month and day)
  export const calculateZodiacSign = (dob) => {
    const date = new Date(dob);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
  
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  
    return "Unknown"; // Fallback for invalid date
  };
  