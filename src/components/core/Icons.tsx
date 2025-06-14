import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface IconSvgProps extends React.SVGProps<SVGSVGElement> {
   size?: number;
}

const getCommonProps = ({
   size = 24,
   width,
   height,
   ...props
}: IconSvgProps): React.SVGProps<SVGSVGElement> => {
   return {
      fill: 'none',
      height: size || height,
      role: 'presentation',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      viewBox: '0 0 24 24',
      width: size || width,
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
   };
};

const AlertTriangleIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
         <path d="M12 9v4" />
         <path d="M12 17h.01" />
      </svg>
   );
};

const DatabaseIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <ellipse cx="12" cy="5" rx="9" ry="3" />
         <path d="M3 5V19A9 3 0 0 0 21 19V5" />
         <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
   );
};

const DatabaseBackupIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <ellipse cx="12" cy="5" rx="9" ry="3" />
         <path d="M3 12a9 3 0 0 0 5 2.69" />
         <path d="M21 9.3V5" />
         <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
         <path d="M12 12v4h4" />
         <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
      </svg>
   );
};

const DownloadIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M12 15V3" />
         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
         <path d="m7 10 5 5 5-5" />
      </svg>
   );
};

const EyeIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
         <circle cx="12" cy="12" r="3" />
      </svg>
   );
};

const FileWarningIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
         <path d="M12 9v4" />
         <path d="M12 17h.01" />
      </svg>
   );
};

const InfoIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <circle cx="12" cy="12" r="10" />
         <path d="M12 16v-4" />
         <path d="M12 8h.01" />
      </svg>
   );
};

const LockIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
         <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
   );
};

const PauseIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <rect height="16" rx="1" width="4" x="14" y="4" />
         <rect height="16" rx="1" width="4" x="6" y="4" />
      </svg>
   );
};

const PlayIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
   );
};

const SearchCheckIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="m8 11 2 2 4-4" />
         <circle cx="11" cy="11" r="8" />
         <path d="m21 21-4.3-4.3" />
      </svg>
   );
};

const SettingsIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
         <circle cx="12" cy="12" r="3" />
      </svg>
   );
};

const ShieldIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
   );
};

const TerminalIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M12 19h8" />
         <path d="m4 17 6-6-6-6" />
      </svg>
   );
};

const UsersRoundIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M18 21a8 8 0 0 0-16 0" />
         <circle cx="10" cy="8" r="5" />
         <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
      </svg>
   );
};

const XIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M18 6 6 18" />
         <path d="m6 6 12 12" />
      </svg>
   );
};

export type CustomIcon =
   | 'alertTriangle'
   | 'database'
   | 'databaseBackup'
   | 'download'
   | 'eye'
   | 'fileWarning'
   | 'info'
   | 'lock'
   | 'pause'
   | 'play'
   | 'searchCheck'
   | 'settings'
   | 'shield'
   | 'terminal'
   | 'usersRound'
   | 'x';

const ICONS: Record<CustomIcon, React.FC<IconSvgProps>> = {
   alertTriangle: AlertTriangleIcon,
   database: DatabaseIcon,
   databaseBackup: DatabaseBackupIcon,
   download: DownloadIcon,
   eye: EyeIcon,
   fileWarning: FileWarningIcon,
   info: InfoIcon,
   lock: LockIcon,
   pause: PauseIcon,
   play: PlayIcon,
   searchCheck: SearchCheckIcon,
   settings: SettingsIcon,
   shield: ShieldIcon,
   terminal: TerminalIcon,
   usersRound: UsersRoundIcon,
   x: XIcon,
};

interface CustomIconProps extends IconSvgProps {
   icon?: CustomIcon;
}

export const CustomIcon = ({ icon, className, ...rest }: CustomIconProps) => {
   if (icon === undefined) {
      return <></>;
   }

   const IconComponent = ICONS[icon];

   if (IconComponent === undefined) {
      return <></>;
   }

   return (
      <IconComponent
         className={twMerge('text-inherit pointer-events-none flex-shrink-0', className)}
         {...rest}
      />
   );
};
