import { DataProductWatchTheme } from "../ProductLayouts/DataProductLayouts/DataProductWatchTheme";
import { DataProductFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductFurnitureTheme";
import { DataProductClassicFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductClassicFurnitureTheme";
import { DataProductBeautyTheme } from "../ProductLayouts/DataProductLayouts/DataProductBeautyTheme";
import { DataProductPerfumeTheme } from "../ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";

const PRODUCT_MAP = {
  time: DataProductWatchTheme,
  furniture: DataProductFurnitureTheme,
  classicFurniture: DataProductClassicFurnitureTheme,
  beauty: DataProductBeautyTheme,
  perfume: DataProductPerfumeTheme,
};

export function GetProductsByTheme(themeId) {
  return PRODUCT_MAP[themeId] || [];
}
