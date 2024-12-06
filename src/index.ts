import { BaseType } from "@tahcia/types"

export interface PluginType extends BaseType {
  description: string;
}

export const createPluginType = (id: string, name: string, description: string): PluginType => ({
  id,
  name,
  description,
});

export const pluginTypes: PluginType[] = [
  createPluginType('1', 'Plugin 1', 'Description for Plugin 1'),
  createPluginType('2', 'Plugin 2', 'Description for Plugin 2'),
];
