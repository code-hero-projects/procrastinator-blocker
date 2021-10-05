import { ChromeBrowserManager } from './ChromeBrowserManager';
import { IBrowserManager } from './IBrowserManager';

export const BrowserManager: IBrowserManager = new ChromeBrowserManager();
