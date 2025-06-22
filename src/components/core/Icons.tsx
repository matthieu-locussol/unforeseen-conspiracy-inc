import type { CategoryId } from '../../types/upgrades';

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

const AmbulanceIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M10 10H6" />
         <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
         <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
         <path d="M8 8v4" />
         <path d="M9 18h6" />
         <circle cx="17" cy="18" r="2" />
         <circle cx="7" cy="18" r="2" />
      </svg>
   );
};

const ArchiveIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <rect height="12" rx="2" width="20" x="2" y="3" />
         <path d="m8 7 4 4 4-4" />
         <path d="M2 7h20" />
      </svg>
   );
};

const BadgeQuestionMarkIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
         <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
         <line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
   );
};

const BrainIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
         <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
         <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
         <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
         <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
         <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
         <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
         <path d="M6 18a4 4 0 0 1-1.967-.516" />
         <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
   );
};

const CheckIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M20 6 9 17l-5-5" />
      </svg>
   );
};

const CoinsIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <circle cx="8" cy="8" r="6" />
         <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
         <path d="M7 6h1v4" />
         <path d="M16.71 13.88A4 4 0 1 1 20.42 10.15" />
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

const DollarIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <line x1="12" x2="12" y1="2" y2="22" />
         <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

const FlaskIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M9 3v3l-7 7a2 2 0 0 0 0 2.83l2.17 2.17a2 2 0 0 0 2.83 0L15 10V3" />
         <path d="M16 2v6l6 6a2 2 0 0 1 0 2.83l-2.17 2.17a2 2 0 0 1-2.83 0L10 12V6" />
      </svg>
   );
};

const GlobeIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <circle cx="12" cy="12" r="10" />
         <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
         <path d="M2 12h20" />
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

const LandmarkIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M10 18v-7" />
         <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
         <path d="M14 18v-7" />
         <path d="M18 18v-7" />
         <path d="M3 22h18" />
         <path d="M6 18v-7" />
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

const NetworkIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <rect height="6" rx="1" width="6" x="16" y="16" />
         <rect height="6" rx="1" width="6" x="2" y="16" />
         <rect height="6" rx="1" width="6" x="9" y="2" />
         <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
         <path d="M12 12V8" />
      </svg>
   );
};

const OrbitIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
         <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
         <circle cx="12" cy="12" r="3" />
         <circle cx="19" cy="5" r="2" />
         <circle cx="5" cy="19" r="2" />
      </svg>
   );
};

const PackageIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
         <path d="M12 22V12" />
         <path d="m3.3 7 8.7 5 8.7-5" />
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

const SatelliteIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
         <path d="m9 15 3-3" />
         <path d="M17 13a6 6 0 0 0-6-6" />
         <path d="M21 13A10 10 0 0 0 11 3" />
      </svg>
   );
};

const ScanEyeIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M3 7V5a2 2 0 0 1 2-2h2" />
         <path d="M17 3h2a2 2 0 0 1 2 2v2" />
         <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
         <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
         <circle cx="12" cy="12" r="1" />
         <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
      </svg>
   );
};

const ScrollIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M15 12h-5" />
         <path d="M15 8h-5" />
         <path d="M19 17V5a2 2 0 0 0-2-2H4" />
         <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
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

const TargetIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <circle cx="12" cy="12" r="10" />
         <circle cx="12" cy="12" r="6" />
         <circle cx="12" cy="12" r="2" />
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

const TrendingUpIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M16 7h6v6" />
         <path d="m22 7-8.5 8.5-5-5L2 17" />
      </svg>
   );
};

const TvIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <rect height="13" rx="2" ry="2" width="20" x="2" y="3" />
         <path d="m8 21 4-4 4 4" />
      </svg>
   );
};

const UsersIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
         <circle cx="9" cy="7" r="4" />
         <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

const ZapIcon = (props: IconSvgProps) => {
   return (
      <svg {...getCommonProps(props)}>
         <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
   );
};

export type CustomIcon =
   | 'alertTriangle'
   | 'ambulance'
   | 'archive'
   | 'badgeQuestionMark'
   | 'brain'
   | 'check'
   | 'coins'
   | 'database'
   | 'databaseBackup'
   | 'dollar'
   | 'download'
   | 'eye'
   | 'fileWarning'
   | 'flask'
   | 'globe'
   | 'info'
   | 'landmark'
   | 'lock'
   | 'network'
   | 'orbit'
   | 'package'
   | 'pause'
   | 'play'
   | 'satellite'
   | 'scanEye'
   | 'scroll'
   | 'searchCheck'
   | 'settings'
   | 'shield'
   | 'target'
   | 'terminal'
   | 'trendingUp'
   | 'tv'
   | 'users'
   | 'usersRound'
   | 'x'
   | 'zap';

const ICONS: Record<CustomIcon, React.FC<IconSvgProps>> = {
   alertTriangle: AlertTriangleIcon,
   ambulance: AmbulanceIcon,
   archive: ArchiveIcon,
   badgeQuestionMark: BadgeQuestionMarkIcon,
   brain: BrainIcon,
   check: CheckIcon,
   coins: CoinsIcon,
   database: DatabaseIcon,
   databaseBackup: DatabaseBackupIcon,
   dollar: DollarIcon,
   download: DownloadIcon,
   eye: EyeIcon,
   fileWarning: FileWarningIcon,
   flask: FlaskIcon,
   globe: GlobeIcon,
   info: InfoIcon,
   landmark: LandmarkIcon,
   lock: LockIcon,
   network: NetworkIcon,
   orbit: OrbitIcon,
   package: PackageIcon,
   pause: PauseIcon,
   play: PlayIcon,
   satellite: SatelliteIcon,
   scanEye: ScanEyeIcon,
   scroll: ScrollIcon,
   searchCheck: SearchCheckIcon,
   settings: SettingsIcon,
   shield: ShieldIcon,
   target: TargetIcon,
   terminal: TerminalIcon,
   trendingUp: TrendingUpIcon,
   tv: TvIcon,
   users: UsersIcon,
   usersRound: UsersRoundIcon,
   x: XIcon,
   zap: ZapIcon,
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

interface CategoryIconProps extends IconSvgProps {
   category: CategoryId;
}

export const CategoryIcon = ({ category, ...rest }: CategoryIconProps) => {
   const ICONS_MAP: Record<CategoryId, CustomIcon> = {
      government: 'landmark',
      history: 'scroll',
      organization: 'network',
      extraterrestrial: 'satellite',
      theory: 'brain',
      surveillance: 'scanEye',
      'hidden-worlds': 'orbit',
      health: 'ambulance',
      other: 'badgeQuestionMark',
      'media-manipulation': 'tv',
      technology: 'terminal',
   };

   return <CustomIcon icon={ICONS_MAP[category]} {...rest} />;
};
