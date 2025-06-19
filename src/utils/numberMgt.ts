export const formatBigint = (value: bigint): string => {
   if (value === 0n) return '0.0';

   const valueStr = value.toString();
   const length = valueStr.length;

   if (length <= 5) return valueStr;

   const scales = [
      { suffix: 'K', minDigits: 6, maxDigits: 6, precision: 1, divisor: 1000n },
      { suffix: 'M', minDigits: 7, maxDigits: 9, precision: 2, divisor: 1000000n },
      { suffix: 'B', minDigits: 10, maxDigits: 12, precision: 2, divisor: 1000000000n },
      { suffix: 'T', minDigits: 13, maxDigits: 15, precision: 3, divisor: 1000000000000n },
      { suffix: 'Qa', minDigits: 16, maxDigits: 18, precision: 3, divisor: 1000000000000000n },
      { suffix: 'Qi', minDigits: 19, maxDigits: 21, precision: 3, divisor: 1000000000000000000n },
      {
         suffix: 'Sx',
         minDigits: 22,
         maxDigits: 24,
         precision: 3,
         divisor: 1000000000000000000000n,
      },
      {
         suffix: 'Sp',
         minDigits: 25,
         maxDigits: 27,
         precision: 3,
         divisor: 1000000000000000000000000n,
      },
      {
         suffix: 'Oc',
         minDigits: 28,
         maxDigits: 30,
         precision: 3,
         divisor: 1000000000000000000000000000n,
      },
      {
         suffix: 'No',
         minDigits: 31,
         maxDigits: 33,
         precision: 3,
         divisor: 1000000000000000000000000000000n,
      },
      {
         suffix: 'Dc',
         minDigits: 34,
         maxDigits: 36,
         precision: 3,
         divisor: 1000000000000000000000000000000000n,
      },
      {
         suffix: 'Ud',
         minDigits: 37,
         maxDigits: 39,
         precision: 3,
         divisor: 1000000000000000000000000000000000000n,
      },
      {
         suffix: 'Dd',
         minDigits: 40,
         maxDigits: 42,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Td',
         minDigits: 43,
         maxDigits: 45,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Qad',
         minDigits: 46,
         maxDigits: 48,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Qid',
         minDigits: 49,
         maxDigits: 51,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Sxd',
         minDigits: 52,
         maxDigits: 54,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Spd',
         minDigits: 55,
         maxDigits: 57,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Ocd',
         minDigits: 58,
         maxDigits: 60,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Nod',
         minDigits: 61,
         maxDigits: 63,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Vg',
         minDigits: 64,
         maxDigits: 66,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'UVg',
         minDigits: 67,
         maxDigits: 69,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'DVg',
         minDigits: 70,
         maxDigits: 72,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'TVg',
         minDigits: 73,
         maxDigits: 75,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'QaVg',
         minDigits: 76,
         maxDigits: 78,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'QiVg',
         minDigits: 79,
         maxDigits: 81,
         precision: 3,
         divisor: 1000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'SxVg',
         minDigits: 82,
         maxDigits: 84,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'SpVg',
         minDigits: 85,
         maxDigits: 87,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'OcVg',
         minDigits: 88,
         maxDigits: 90,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'NoVg',
         minDigits: 91,
         maxDigits: 93,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'Tg',
         minDigits: 94,
         maxDigits: 96,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'UTg',
         minDigits: 97,
         maxDigits: 99,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
      {
         suffix: 'DTg',
         minDigits: 100,
         maxDigits: 102,
         precision: 3,
         divisor:
            1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
      },
   ];

   let selectedScale = scales[0];

   for (const scale of scales) {
      if (length >= scale.minDigits && length <= scale.maxDigits) {
         selectedScale = scale;
         break;
      }
   }

   if (length > selectedScale.maxDigits) {
      const digits = valueStr.slice(0, 3);
      const rest = valueStr.length - 1;

      return `${digits[0]}.${digits.slice(1)}e+${rest}`;
   }

   const integerPart = value / selectedScale.divisor;
   const remainder = value % selectedScale.divisor;
   let remainderStr = remainder.toString();
   const expectedRemainderLength = selectedScale.divisor.toString().length - 1;

   while (remainderStr.length < expectedRemainderLength) {
      remainderStr = '0' + remainderStr;
   }
   const decimalPart = remainderStr.substring(0, selectedScale.precision);

   return `${integerPart}.${decimalPart}${selectedScale.suffix}`;
};
