/**
 * Lithuanian lip-sync processor stub
 * Falls back to English rules since Lithuanian-specific rules are not available
 */

import { LipsyncEn } from './lipsync-en.mjs';

// Lithuanian uses English lipsync as fallback
export class LipsyncLt extends LipsyncEn {
  constructor() {
    super();
  }
}

export default LipsyncLt;
