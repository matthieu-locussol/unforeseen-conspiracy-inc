import { CHANGELOG } from '../../data/changelog';

import { Badge } from './ui/badge';

export const Changelog = () => {
   return (
      <div className="space-y-6">
         {CHANGELOG.map((release) => (
            <div key={release.version} className="space-y-2">
               <div className="flex items-center gap-2">
                  <Badge
                     className={`
      ${
         release.type === 'major'
            ? 'bg-purple-900/50 text-purple-300'
            : release.type === 'update'
            ? 'bg-green-900/50 text-green-300'
            : 'bg-yellow-900/50 text-yellow-300'
      }
    `}
                  >
                     {release.version}
                  </Badge>
                  <span className="text-gray-400 text-sm">{release.date}</span>
                  <Badge className="text-xs capitalize" variant="outline">
                     {release.type}
                  </Badge>
               </div>
               <ul className="space-y-1 pl-5 list-disc text-gray-300 text-sm">
                  {release.changes.map((change, i) => (
                     <li key={i}>{change}</li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
   );
};
