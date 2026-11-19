// The entry's image is entry.png beside this file; the program copies it
// to the output path. Deterministic: the same bytes every run.
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
