import Decimal from 'decimal.js';
import { describe, expect, it } from 'vitest';

import { formatDecimal } from './numberMgt';

describe('numberMgt', () => {
   describe('formatDecimal', () => {
      it('should format zero correctly', () => {
         expect(formatDecimal(Decimal('0'))).toBe('0.0');
      });

      it('should format small numbers without suffix', () => {
         expect(formatDecimal(Decimal('1'))).toBe('1');
         expect(formatDecimal(Decimal('42'))).toBe('42');
         expect(formatDecimal(Decimal('999'))).toBe('999');
         expect(formatDecimal(Decimal('9999'))).toBe('9999');
         expect(formatDecimal(Decimal('99999'))).toBe('99999');
      });

      it('should format thousands with K suffix and 1 decimal', () => {
         expect(formatDecimal(Decimal('100000'))).toBe('100.0K');
         expect(formatDecimal(Decimal('123456'))).toBe('123.4K');
         expect(formatDecimal(Decimal('583727'))).toBe('583.7K');
         expect(formatDecimal(Decimal('999999'))).toBe('999.9K');
      });

      it('should format millions with M suffix and 2 decimals', () => {
         expect(formatDecimal(Decimal('1000000'))).toBe('1.00M');
         expect(formatDecimal(Decimal('1234567'))).toBe('1.23M');
         expect(formatDecimal(Decimal('1567890'))).toBe('1.56M');
         expect(formatDecimal(Decimal('9999999'))).toBe('9.99M');
      });

      it('should format billions with B suffix and 2 decimals', () => {
         expect(formatDecimal(Decimal('1000000000'))).toBe('1.00B');
         expect(formatDecimal(Decimal('1234567890'))).toBe('1.23B');
         expect(formatDecimal(Decimal('9999999999'))).toBe('9.99B');
      });

      it('should format trillions with T suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000'))).toBe('1.000T');
         expect(formatDecimal(Decimal('1234567890123'))).toBe('1.234T');
         expect(formatDecimal(Decimal('9999999999999'))).toBe('9.999T');
      });

      it('should format quadrillions with Qa suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000'))).toBe('1.000Qa');
         expect(formatDecimal(Decimal('1234567890123456'))).toBe('1.234Qa');
      });

      it('should format quintillions with Qi suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000000'))).toBe('1.000Qi');
         expect(formatDecimal(Decimal('1234567890123456789'))).toBe('1.234Qi');
      });

      it('should format sextillions with Sx suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000000000'))).toBe('1.000Sx');
         expect(formatDecimal(Decimal('1234567890123456789012'))).toBe('1.234Sx');
      });

      it('should format septillions with Sp suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000'))).toBe('1.000Sp');
         expect(formatDecimal(Decimal('1234567890123456789012345'))).toBe('1.234Sp');
      });

      it('should format octillions with Oc suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000'))).toBe('1.000Oc');
         expect(formatDecimal(Decimal('1234567890123456789012345678'))).toBe('1.234Oc');
      });

      it('should format nonillions with No suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000'))).toBe('1.000No');
         expect(formatDecimal(Decimal('1234567890123456789012345678901'))).toBe('1.234No');
      });

      it('should format decillions with Dc suffix and 3 decimals', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000000'))).toBe('1.000Dc');
         expect(formatDecimal(Decimal('1234567890123456789012345678901234'))).toBe('1.234Dc');
      });

      // New ultra-large suffixes
      it('should format undecillions with Ud suffix', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000000000'))).toBe('1.000Ud');
      });
      it('should format duodecillions with Dd suffix', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000000000000'))).toBe('1.000Dd');
      });
      it('should format tredecillions with Td suffix', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000000000000000'))).toBe(
            '1.000Td',
         );
      });
      it('should format quattuordecillions with Qad suffix', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000000000000000000'))).toBe(
            '1.000Qad',
         );
      });
      it('should format quindecillions with Qid suffix', () => {
         expect(formatDecimal(Decimal('1000000000000000000000000000000000000000000000000'))).toBe(
            '1.000Qid',
         );
      });
      it('should format sexdecillions with Sxd suffix', () => {
         expect(
            formatDecimal(Decimal('1000000000000000000000000000000000000000000000000000')),
         ).toBe('1.000Sxd');
      });
      it('should format septendecillions with Spd suffix', () => {
         expect(
            formatDecimal(Decimal('1000000000000000000000000000000000000000000000000000000')),
         ).toBe('1.000Spd');
      });
      it('should format octodecillions with Ocd suffix', () => {
         expect(
            formatDecimal(Decimal('1000000000000000000000000000000000000000000000000000000000')),
         ).toBe('1.000Ocd');
      });
      it('should format novemdecillions with Nod suffix', () => {
         expect(
            formatDecimal(Decimal('1000000000000000000000000000000000000000000000000000000000000')),
         ).toBe('1.000Nod');
      });
      it('should format vigintillions with Vg suffix', () => {
         expect(
            formatDecimal(
               Decimal('1000000000000000000000000000000000000000000000000000000000000000'),
            ),
         ).toBe('1.000Vg');
      });
      it('should format unvigintillions with UVg suffix', () => {
         expect(
            formatDecimal(
               Decimal('1000000000000000000000000000000000000000000000000000000000000000000'),
            ),
         ).toBe('1.000UVg');
      });
      it('should format duovigintillions with DVg suffix', () => {
         expect(
            formatDecimal(
               Decimal('1000000000000000000000000000000000000000000000000000000000000000000000'),
            ),
         ).toBe('1.000DVg');
      });
      it('should format tresvigintillions with TVg suffix', () => {
         expect(
            formatDecimal(
               Decimal('1000000000000000000000000000000000000000000000000000000000000000000000000'),
            ),
         ).toBe('1.000TVg');
      });
      it('should format quattuorvigintillions with QaVg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000QaVg');
      });
      it('should format quinvigintillions with QiVg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000QiVg');
      });
      it('should format sexvigintillions with SxVg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000SxVg');
      });
      it('should format septenvigintillions with SpVg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000SpVg');
      });
      it('should format octovigintillions with OcVg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000OcVg');
      });
      it('should format novemvigintillions with NoVg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000NoVg');
      });
      it('should format trigintillions with Tg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000Tg');
      });
      it('should format untrigintillions with UTg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000UTg');
      });
      it('should format duotrigintillions with DTg suffix', () => {
         expect(
            formatDecimal(
               Decimal(
                  '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
               ),
            ),
         ).toBe('1.000DTg');
      });

      it('should handle edge cases at scale boundaries', () => {
         expect(formatDecimal(Decimal('99999'))).toBe('99999');
         expect(formatDecimal(Decimal('100000'))).toBe('100.0K');
         expect(formatDecimal(Decimal('999999'))).toBe('999.9K');
         expect(formatDecimal(Decimal('1000000'))).toBe('1.00M');
      });

      it('should handle very large numbers beyond defined scales', () => {
         // This should use scientific notation
         const hugeNumber = 10n ** 120n;

         expect(formatDecimal(Decimal(hugeNumber.toString()))).toBe('1.00e+120');
      });

      it('should maintain precision according to scale rules', () => {
         expect(formatDecimal(Decimal('123456'))).toBe('123.4K');
         expect(formatDecimal(Decimal('1234567'))).toBe('1.23M');
         expect(formatDecimal(Decimal('1234567890'))).toBe('1.23B');
         expect(formatDecimal(Decimal('1234567890123'))).toBe('1.234T');
      });

      it('should handle numbers with trailing zeros correctly', () => {
         expect(formatDecimal(Decimal('100000'))).toBe('100.0K');
         expect(formatDecimal(Decimal('1000000'))).toBe('1.00M');
         expect(formatDecimal(Decimal('1000000000'))).toBe('1.00B');
         expect(formatDecimal(Decimal('1000000000000'))).toBe('1.000T');
      });

      // Edge cases
      it('should handle exact boundary values', () => {
         // K boundary
         expect(formatDecimal(Decimal('999999'))).toBe('999.9K');
         expect(formatDecimal(Decimal('1000000'))).toBe('1.00M');

         // M boundary
         expect(formatDecimal(Decimal('999999999'))).toBe('999.99M');
         expect(formatDecimal(Decimal('1000000000'))).toBe('1.00B');

         // B boundary
         expect(formatDecimal(Decimal('999999999999'))).toBe('999.99B');
         expect(formatDecimal(Decimal('1000000000000'))).toBe('1.000T');
      });

      it('should handle numbers with many trailing zeros in scientific notation', () => {
         expect(formatDecimal(Decimal('10').pow(200))).toBe('1.00e+200');
         expect(formatDecimal(Decimal('10').pow(500))).toBe('1.00e+500');
         expect(formatDecimal(Decimal('10').pow(1000))).toBe('1.00e+1000');
      });

      it('should handle numbers with non-zero digits in scientific notation', () => {
         expect(formatDecimal(Decimal('123').mul(Decimal('10').pow(200)))).toBe('1.23e+202');
         expect(formatDecimal(Decimal('456').mul(Decimal('10').pow(500)))).toBe('4.56e+502');
         expect(formatDecimal(Decimal('789').mul(Decimal('10').pow(1000)))).toBe('7.89e+1002');
      });

      it('should handle numbers just below the scientific notation threshold', () => {
         // Just below DTg max (10^102)
         const justBelowThreshold = 10n ** 102n - 1n;

         expect(formatDecimal(Decimal(justBelowThreshold.toString()))).toBe('999.999DTg');
      });

      it('should handle numbers exactly at the scientific notation threshold', () => {
         // Exactly at DTg max (10^102)
         const exactlyAtThreshold = 10n ** 102n;

         expect(formatDecimal(Decimal(exactlyAtThreshold.toString()))).toBe('1.00e+102');
      });

      it('should handle numbers just above the scientific notation threshold', () => {
         // Just above DTg max (10^102)
         const justAboveThreshold = 10n ** 102n + 1n;

         expect(formatDecimal(Decimal(justAboveThreshold.toString()))).toBe('1.00e+102');
      });

      it('should handle single digit numbers in each scale', () => {
         expect(formatDecimal(Decimal('100000'))).toBe('100.0K');
         expect(formatDecimal(Decimal('1000000'))).toBe('1.00M');
         expect(formatDecimal(Decimal('1000000000'))).toBe('1.00B');
         expect(formatDecimal(Decimal('1000000000000'))).toBe('1.000T');
      });

      it('should handle maximum values in each scale', () => {
         expect(formatDecimal(Decimal('999999'))).toBe('999.9K');
         expect(formatDecimal(Decimal('999999999'))).toBe('999.99M');
         expect(formatDecimal(Decimal('999999999999'))).toBe('999.99B');
         expect(formatDecimal(Decimal('999999999999999'))).toBe('999.999T');
      });

      it('should handle numbers with all zeros except first digit', () => {
         expect(formatDecimal(Decimal('100000'))).toBe('100.0K');
         expect(formatDecimal(Decimal('1000000'))).toBe('1.00M');
         expect(formatDecimal(Decimal('1000000000'))).toBe('1.00B');
         expect(formatDecimal(Decimal('1000000000000'))).toBe('1.000T');
      });

      it('should handle numbers with mixed digits in scientific notation', () => {
         expect(formatDecimal(Decimal('123456').mul(Decimal('10').pow(200)))).toBe('1.23e+205');
         expect(formatDecimal(Decimal('987654').mul(Decimal('10').pow(500)))).toBe('9.87e+505');
      });

      it('should handle extremely large numbers in scientific notation', () => {
         expect(formatDecimal(Decimal('10').pow(10000))).toBe('1.00e+10000');
         expect(formatDecimal(Decimal('10').pow(100000))).toBe('1.00e+100000');
      });
   });
});
