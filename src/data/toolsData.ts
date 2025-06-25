
import { frontendFrameworks } from './categories/frontendFrameworks';
import { cssFrameworks } from './categories/cssFrameworks';
import { backendFrameworks } from './categories/backendFrameworks';
import { databases } from './categories/databases';
import { codeEditors } from './categories/codeEditors';
import { versionControl } from './categories/versionControl';
import { packageManagers } from './categories/packageManagers';
import { buildTools } from './categories/buildTools';
import { testingFrameworks } from './categories/testingFrameworks';
import { designTools } from './categories/designTools';
import { devopsDeployment } from './categories/devopsDeployment';
import { apiDevelopment } from './categories/apiDevelopment';
import { performanceAnalytics } from './categories/performanceAnalytics';
import { contentManagement } from './categories/contentManagement';
import { browserDevTools } from './categories/browserDevTools';

export const toolsData = [
  ...frontendFrameworks,
  ...cssFrameworks,
  ...backendFrameworks,
  ...databases,
  ...codeEditors,
  ...versionControl,
  ...packageManagers,
  ...buildTools,
  ...testingFrameworks,
  ...designTools,
  ...devopsDeployment,
  ...apiDevelopment,
  ...performanceAnalytics,
  ...contentManagement,
  ...browserDevTools
];
