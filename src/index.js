module.exports = function toReadable(number) {
   let result = ``;
   const checker = Math.floor(number % 100);
   const second = Math.floor(number / 10 % 10);
   const third = Math.floor(number / 100);
   const strNumber = number.toString();
   function findReadableIndex(element, index, array) {

   }
   const units = [`zero`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`];
   const dozens = [`twenty`, `thirty`, `forty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`];
   const firstDozen = [`ten`, `eleven`, `twelve`, `thirteen`,
      `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`];
   for (let i = 0; i < strNumber.length; i++) {
      let index = strNumber[i];
      if (strNumber.length === 1) {
         result = units[number];
      } else if (strNumber.length === 2 && number <= 19) {
         result = firstDozen[index];
      } else if (number === 20) {
         result = dozens[second - 2];
      }
      else if (strNumber.length === 2 && number % 10 === 0) {
         result = dozens[second - 2];
      }
      else if (strNumber.length === 2) {
         const lastCat = units[index];
         const secondCat = dozens[second - 2];

         result = `${secondCat} ${lastCat}`;
      }
      else if (strNumber.length === 3 && number % 100 === 0) {
         let thirdCat = units[third];
         result = `${thirdCat} hundred`;
      }

      else if (checker <= 19 && second !== 0) {
         let lastCat = firstDozen[index];
         let thirdCat = units[third];
         result = `${thirdCat} hundred ${lastCat}`;
      }
      else if (strNumber.length === 3) {
         const lastCat = units[index]; // единицы 
         const secondCat = dozens[second - 2];
         let thirdCat = units[third];
         result = `${thirdCat} hundred ${secondCat} ${lastCat}`;
      }


   }
   if (strNumber.length === 3 && result.includes(`zero`)) {
      return result.replace(/zero/g, ``).trim();
   }
   else {
      return result.replace(/ undefined/g, ``);
   }
};



