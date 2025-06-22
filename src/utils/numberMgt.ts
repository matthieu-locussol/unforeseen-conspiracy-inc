import { Decimal } from 'decimal.js';

export const formatDecimal = (
   value: Decimal,
   suffixWrapper = (suffix: string) =>
      `<b class="text-amber-700 text-shadow-black text-shadow">${suffix}</b>`,
): string => {
   if (value.equals(0)) {
      return '0.0';
   }

   // Handle negative numbers by working with absolute value and adding sign back
   const isNegative = value.isNegative();
   const absValue = value.abs();

   // Define scales with their thresholds and formatting
   const scales = [
      { suffix: 'K', threshold: new Decimal('1000'), precision: 1 },
      { suffix: 'M', threshold: new Decimal('1000000'), precision: 2 },
      { suffix: 'B', threshold: new Decimal('1000000000'), precision: 2 },
      { suffix: 'T', threshold: new Decimal('1000000000000'), precision: 3 },
      { suffix: 'Qa', threshold: new Decimal('1000000000000000'), precision: 3 },
      { suffix: 'Qi', threshold: new Decimal('1000000000000000000'), precision: 3 },
      { suffix: 'Sx', threshold: new Decimal('1000000000000000000000'), precision: 3 },
      { suffix: 'Sp', threshold: new Decimal('1000000000000000000000000'), precision: 3 },
      { suffix: 'Oc', threshold: new Decimal('1000000000000000000000000000'), precision: 3 },
      { suffix: 'No', threshold: new Decimal('1000000000000000000000000000000'), precision: 3 },
      { suffix: 'Dc', threshold: new Decimal('1000000000000000000000000000000000'), precision: 3 },
      {
         suffix: 'Ud',
         threshold: new Decimal('1000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Dd',
         threshold: new Decimal('1000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Td',
         threshold: new Decimal('1000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Qad',
         threshold: new Decimal('1000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Qid',
         threshold: new Decimal('1000000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Sxd',
         threshold: new Decimal('1000000000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Spd',
         threshold: new Decimal('1000000000000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Ocd',
         threshold: new Decimal('1000000000000000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Nod',
         threshold: new Decimal('1000000000000000000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'Vg',
         threshold: new Decimal('1000000000000000000000000000000000000000000000000000000000000000'),
         precision: 3,
      },
      {
         suffix: 'UVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'DVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'TVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'QaVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'QiVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'SxVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'SpVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'OcVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'NoVg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'Tg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'UTg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
      {
         suffix: 'DTg',
         threshold: new Decimal(
            '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
         ),
         precision: 3,
      },
   ];

   // Check if number is less than 100,000 (no suffix needed)
   if (absValue.lessThan(100000)) {
      const result = absValue.toString();

      return isNegative ? `-${result}` : result;
   }

   // Find the appropriate scale (start from largest and work down)
   let selectedScale = null;

   for (let i = scales.length - 1; i >= 0; i--) {
      if (absValue.greaterThanOrEqualTo(scales[i].threshold)) {
         selectedScale = scales[i];
         break;
      }
   }

   // If no scale found or number is too large, use scientific notation
   if (
      !selectedScale ||
      absValue.greaterThanOrEqualTo(scales[scales.length - 1].threshold.mul(1000))
   ) {
      // Convert to scientific notation
      const str = absValue.toString();
      const match = str.match(/^(\d)\.?(\d*)e\+?(\d+)$/i) || str.match(/^(\d+)\.?(\d*)$/);

      if (match) {
         if (match[3]) {
            // Already in scientific notation
            const firstDigit = match[1];
            const nextDigits = match[2].substring(0, 2).padEnd(2, '0');
            const exponent = match[3];
            const result = `${firstDigit}.${nextDigits}e+${exponent}`;

            return isNegative ? `-${result}` : result;
         } else {
            // Convert regular number to scientific notation
            const digits = match[1] + match[2];
            const firstDigit = digits[0];
            const nextDigits = digits.substring(1, 3).padEnd(2, '0');
            const exponent = digits.length - 1;
            const result = `${firstDigit}.${nextDigits}e+${exponent}`;

            return isNegative ? `-${result}` : result;
         }
      }

      // Fallback
      const result = absValue.toString();

      return isNegative ? `-${result}` : result;
   }

   // Format with the selected scale
   const scaledValue = absValue.div(selectedScale.threshold);
   let integerPart = scaledValue.floor();
   let fractionalPart = scaledValue.minus(integerPart);

   // Handle edge case where precision issues cause 999.999... to become 1000
   // This happens with very large numbers like 10^102 - 1
   if (integerPart.equals(1000)) {
      integerPart = new Decimal(999);
      // Create a fractional part that represents 0.999... with the required precision
      const nines = '9'.repeat(selectedScale.precision);

      fractionalPart = new Decimal(`0.${nines}`);
   }

   // Format the decimal part with proper rounding
   const multiplier = Math.pow(10, selectedScale.precision);
   const decimalValue = fractionalPart.mul(multiplier);
   const roundedDecimal = decimalValue.toDecimalPlaces(0, Decimal.ROUND_DOWN);
   const decimalStr = roundedDecimal.toString().padStart(selectedScale.precision, '0');

   const result = `${integerPart}.${decimalStr}${suffixWrapper(selectedScale.suffix)}`;

   return isNegative ? `-${result}` : result;
};
