import { DataProductWatchTheme } from "../ProductLayouts/DataProductLayouts/DataProductWatchTheme";
import { DataProductFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductFurnitureTheme";
import { DataProductClassicFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductClassicFurnitureTheme";

const PRODUCT_MAP = {
  time: DataProductWatchTheme,
  furniture: DataProductFurnitureTheme,
  classicFurniture: DataProductClassicFurnitureTheme,
};

export function GetProductsByTheme(themeId) {
  return PRODUCT_MAP[themeId] || [];
}
