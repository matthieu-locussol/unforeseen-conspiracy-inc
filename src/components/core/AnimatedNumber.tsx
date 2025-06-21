import type Decimal from 'decimal.js';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '../../utils/cn';
import { formatDecimal } from '../../utils/numberMgt';

interface AnimatedNumberProps {
   value: Decimal;
   className?: string;
}

export const AnimatedNumber = ({ value, className }: AnimatedNumberProps) => {
   const [displayValue, setDisplayValue] = useState(value);

   useEffect(() => {
      if (displayValue !== value) {
         setDisplayValue(value);
      }
   }, [value, displayValue]);

   return (
      <motion.span
         dangerouslySetInnerHTML={{ __html: formatDecimal(displayValue) }}
         key={displayValue.toFixed(1)}
         animate={{ scale: 1, opacity: 1 }}
         className={cn('inline-block', className)}
         initial={{ scale: 1.1, opacity: 0.8 }}
         transition={{
            duration: 0.2,
            ease: 'easeOut',
         }}
      />
   );
};
