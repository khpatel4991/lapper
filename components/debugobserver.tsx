import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.table(snapshot.getLoadable(node).contents);
    }
  }, [snapshot]);

  return null;
};
