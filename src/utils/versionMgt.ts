import packageInfos from '../../package.json';

export const getVersion = (prefix: string = ''): string => {
   const { version } = packageInfos;

   return `${prefix}${version}`;
};
