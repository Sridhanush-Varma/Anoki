"use client"

import { useEffect } from 'react';
import { saveToolInteraction } from '@/utils/recommendationEngine';

/**
 * Hook to track tool interactions for the recommendation engine
 * @param toolId The ID of the tool being viewed/used
 */
export const useToolTracking = (toolId: string | null) => {
  useEffect(() => {
    if (!toolId) return;
    
    // Save the interaction
    saveToolInteraction(toolId);
  }, [toolId]);
};

export default useToolTracking;
