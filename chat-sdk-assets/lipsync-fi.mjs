/**
 * Finnish lip-sync processor stub
 * Falls back to English rules since Finnish-specific rules are not available
 */

import { LipsyncEn } from './lipsync-en.mjs';

// Finnish uses English lipsync as fallback
export class LipsyncFi extends LipsyncEn {
  constructor() {
    super();
  }
}

export default LipsyncFi;
