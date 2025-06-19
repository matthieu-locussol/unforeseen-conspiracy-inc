import { describe, expect, it } from 'vitest';

import { formatBigint } from './numberMgt';

describe('numberMgt', () => {
   describe('formatBigint', () => {
      it('should format zero correctly', () => {
         expect(formatBigint(0n)).toBe('0.0');
      });

      it('should format small numbers without suffix', () => {
         expect(formatBigint(1n)).toBe('1');
         expect(formatBigint(42n)).toBe('42');
         expect(formatBigint(999n)).toBe('999');
         expect(formatBigint(9999n)).toBe('9999');
         expect(formatBigint(99999n)).toBe('99999');
      });

      it('should format thousands with K suffix and 1 decimal', () => {
         expect(formatBigint(100000n)).toBe('100.0K');
         expect(formatBigint(123456n)).toBe('123.4K');
         expect(formatBigint(583727n)).toBe('583.7K');
         expect(formatBigint(999999n)).toBe('999.9K');
      });

      it('should format millions with M suffix and 2 decimals', () => {
         expect(formatBigint(1000000n)).toBe('1.00M');
         expect(formatBigint(1234567n)).toBe('1.23M');
         expect(formatBigint(1567890n)).toBe('1.56M');
         expect(formatBigint(9999999n)).toBe('9.99M');
      });

      it('should format billions with B suffix and 2 decimals', () => {
         expect(formatBigint(1000000000n)).toBe('1.00B');
         expect(formatBigint(1234567890n)).toBe('1.23B');
         expect(formatBigint(9999999999n)).toBe('9.99B');
      });

      it('should format trillions with T suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000n)).toBe('1.000T');
         expect(formatBigint(1234567890123n)).toBe('1.234T');
         expect(formatBigint(9999999999999n)).toBe('9.999T');
      });

      it('should format quadrillions with Qa suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000n)).toBe('1.000Qa');
         expect(formatBigint(1234567890123456n)).toBe('1.234Qa');
      });

      it('should format quintillions with Qi suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000000n)).toBe('1.000Qi');
         expect(formatBigint(1234567890123456789n)).toBe('1.234Qi');
      });

      it('should format sextillions with Sx suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000000000n)).toBe('1.000Sx');
         expect(formatBigint(1234567890123456789012n)).toBe('1.234Sx');
      });

      it('should format septillions with Sp suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000000000000n)).toBe('1.000Sp');
         expect(formatBigint(1234567890123456789012345n)).toBe('1.234Sp');
      });

      it('should format octillions with Oc suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000000000000000n)).toBe('1.000Oc');
         expect(formatBigint(1234567890123456789012345678n)).toBe('1.234Oc');
      });

      it('should format nonillions with No suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000000000000000000n)).toBe('1.000No');
         expect(formatBigint(1234567890123456789012345678901n)).toBe('1.234No');
      });

      it('should format decillions with Dc suffix and 3 decimals', () => {
         expect(formatBigint(1000000000000000000000000000000000n)).toBe('1.000Dc');
         expect(formatBigint(1234567890123456789012345678901234n)).toBe('1.234Dc');
      });

      // New ultra-large suffixes
      it('should format undecillions with Ud suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000n)).toBe('1.000Ud');
      });
      it('should format duodecillions with Dd suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000n)).toBe('1.000Dd');
      });
      it('should format tredecillions with Td suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000n)).toBe('1.000Td');
      });
      it('should format quattuordecillions with Qad suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000000n)).toBe('1.000Qad');
      });
      it('should format quindecillions with Qid suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000000000n)).toBe('1.000Qid');
      });
      it('should format sexdecillions with Sxd suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000000000000n)).toBe(
            '1.000Sxd',
         );
      });
      it('should format septendecillions with Spd suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000000000000000n)).toBe(
            '1.000Spd',
         );
      });
      it('should format octodecillions with Ocd suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000000000000000000n)).toBe(
            '1.000Ocd',
         );
      });
      it('should format novemdecillions with Nod suffix', () => {
         expect(formatBigint(1000000000000000000000000000000000000000000000000000000000000n)).toBe(
            '1.000Nod',
         );
      });
      it('should format vigintillions with Vg suffix', () => {
         expect(
            formatBigint(1000000000000000000000000000000000000000000000000000000000000000n),
         ).toBe('1.000Vg');
      });
      it('should format unvigintillions with UVg suffix', () => {
         expect(
            formatBigint(1000000000000000000000000000000000000000000000000000000000000000000n),
         ).toBe('1.000UVg');
      });
      it('should format duovigintillions with DVg suffix', () => {
         expect(
            formatBigint(1000000000000000000000000000000000000000000000000000000000000000000000n),
         ).toBe('1.000DVg');
      });
      it('should format tresvigintillions with TVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000TVg');
      });
      it('should format quattuorvigintillions with QaVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000QaVg');
      });
      it('should format quinvigintillions with QiVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000QiVg');
      });
      it('should format sexvigintillions with SxVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000SxVg');
      });
      it('should format septenvigintillions with SpVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000SpVg');
      });
      it('should format octovigintillions with OcVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000OcVg');
      });
      it('should format novemvigintillions with NoVg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000NoVg');
      });
      it('should format trigintillions with Tg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000Tg');
      });
      it('should format untrigintillions with UTg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000UTg');
      });
      it('should format duotrigintillions with DTg suffix', () => {
         expect(
            formatBigint(
               1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
         ).toBe('1.000DTg');
      });

      it('should handle edge cases at scale boundaries', () => {
         expect(formatBigint(99999n)).toBe('99999');
         expect(formatBigint(100000n)).toBe('100.0K');
         expect(formatBigint(999999n)).toBe('999.9K');
         expect(formatBigint(1000000n)).toBe('1.00M');
      });

      it('should handle very large numbers beyond defined scales', () => {
         // This should use scientific notation
         const hugeNumber = 10n ** 120n;

         expect(formatBigint(hugeNumber)).toBe('1.00e+120');
      });

      it('should maintain precision according to scale rules', () => {
         expect(formatBigint(123456n)).toBe('123.4K');
         expect(formatBigint(1234567n)).toBe('1.23M');
         expect(formatBigint(1234567890n)).toBe('1.23B');
         expect(formatBigint(1234567890123n)).toBe('1.234T');
      });

      it('should handle numbers with trailing zeros correctly', () => {
         expect(formatBigint(100000n)).toBe('100.0K');
         expect(formatBigint(1000000n)).toBe('1.00M');
         expect(formatBigint(1000000000n)).toBe('1.00B');
         expect(formatBigint(1000000000000n)).toBe('1.000T');
      });

      // Edge cases
      it('should handle exact boundary values', () => {
         // K boundary
         expect(formatBigint(999999n)).toBe('999.9K');
         expect(formatBigint(1000000n)).toBe('1.00M');

         // M boundary
         expect(formatBigint(999999999n)).toBe('999.99M');
         expect(formatBigint(1000000000n)).toBe('1.00B');

         // B boundary
         expect(formatBigint(999999999999n)).toBe('999.99B');
         expect(formatBigint(1000000000000n)).toBe('1.000T');
      });

      it('should handle numbers with many trailing zeros in scientific notation', () => {
         expect(formatBigint(10n ** 200n)).toBe('1.00e+200');
         expect(formatBigint(10n ** 500n)).toBe('1.00e+500');
         expect(formatBigint(10n ** 1000n)).toBe('1.00e+1000');
      });

      it('should handle numbers with non-zero digits in scientific notation', () => {
         expect(formatBigint(123n * 10n ** 200n)).toBe('1.23e+202');
         expect(formatBigint(456n * 10n ** 500n)).toBe('4.56e+502');
         expect(formatBigint(789n * 10n ** 1000n)).toBe('7.89e+1002');
      });

      it('should handle numbers just below the scientific notation threshold', () => {
         // Just below DTg max (10^102)
         const justBelowThreshold = 10n ** 102n - 1n;

         expect(formatBigint(justBelowThreshold)).toBe('999.999DTg');
      });

      it('should handle numbers exactly at the scientific notation threshold', () => {
         // Exactly at DTg max (10^102)
         const exactlyAtThreshold = 10n ** 102n;

         expect(formatBigint(exactlyAtThreshold)).toBe('1.00e+102');
      });

      it('should handle numbers just above the scientific notation threshold', () => {
         // Just above DTg max (10^102)
         const justAboveThreshold = 10n ** 102n + 1n;

         expect(formatBigint(justAboveThreshold)).toBe('1.00e+102');
      });

      it('should handle single digit numbers in each scale', () => {
         expect(formatBigint(100000n)).toBe('100.0K');
         expect(formatBigint(1000000n)).toBe('1.00M');
         expect(formatBigint(1000000000n)).toBe('1.00B');
         expect(formatBigint(1000000000000n)).toBe('1.000T');
      });

      it('should handle maximum values in each scale', () => {
         expect(formatBigint(999999n)).toBe('999.9K');
         expect(formatBigint(999999999n)).toBe('999.99M');
         expect(formatBigint(999999999999n)).toBe('999.99B');
         expect(formatBigint(999999999999999n)).toBe('999.999T');
      });

      it('should handle numbers with all zeros except first digit', () => {
         expect(formatBigint(100000n)).toBe('100.0K');
         expect(formatBigint(1000000n)).toBe('1.00M');
         expect(formatBigint(1000000000n)).toBe('1.00B');
         expect(formatBigint(1000000000000n)).toBe('1.000T');
      });

      it('should handle numbers with mixed digits in scientific notation', () => {
         expect(formatBigint(123456n * 10n ** 200n)).toBe('1.23e+205');
         expect(formatBigint(987654n * 10n ** 500n)).toBe('9.87e+505');
      });

      it('should handle extremely large numbers in scientific notation', () => {
         expect(formatBigint(10n ** 10000n)).toBe('1.00e+10000');
         expect(formatBigint(10n ** 100000n)).toBe('1.00e+100000');
      });
   });
});
