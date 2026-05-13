import {useCallback, useEffect, useMemo, useState} from 'react';

import {loadSavedVesselIds, storeSavedVesselIds} from '../storage/appStorage';
import {vessels} from '../data/vessels';

export const useSavedVessels = () => {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    loadSavedVesselIds()
      .then(ids => {
        if (mounted) {
          setSavedIds(ids);
        }
      })
      .finally(() => {
        if (mounted) {
          setReady(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const persist = useCallback((nextIds: string[]) => {
    setSavedIds(nextIds);
    storeSavedVesselIds(nextIds);
  }, []);

  const toggleSaved = useCallback(
    (id: string) => {
      const nextIds = savedIds.includes(id)
        ? savedIds.filter(savedId => savedId !== id)
        : [...savedIds, id];

      persist(nextIds);
    },
    [persist, savedIds],
  );

  const removeSaved = useCallback(
    (id: string) => {
      persist(savedIds.filter(savedId => savedId !== id));
    },
    [persist, savedIds],
  );

  const clearSaved = useCallback(() => {
    persist([]);
  }, [persist]);

  const savedVessels = useMemo(
    () => vessels.filter(vessel => savedIds.includes(vessel.id)),
    [savedIds],
  );

  return {
    clearSaved,
    isSaved: (id: string) => savedIds.includes(id),
    ready,
    removeSaved,
    savedIds,
    savedVessels,
    toggleSaved,
  };
};
