import { ModuleDefinition } from '../models';
import { moduleBuilder } from './utils/decorators';

export const Module = (module: ModuleDefinition) => {
  return moduleBuilder(module);
}
