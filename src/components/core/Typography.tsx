import { cn } from '../../utils/cn';

type TypographyProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export const Title = ({ className, ...rest }: TypographyProps<HTMLHeadingElement>) => {
   return (
      <h1
         className={cn([
            'text-4xl md:text-6xl font-bold font-orbitron tracking-wider',
            'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500',
            className,
         ])}
         {...rest}
      />
   );
};

export const Note = ({ className, ...rest }: TypographyProps<HTMLHeadingElement>) => {
   return <h2 className={cn(['text-gray-400 text-sm', className])} {...rest} />;
};
