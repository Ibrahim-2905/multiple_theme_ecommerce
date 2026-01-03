import { DataProductWatchTheme } from "../ProductLayouts/DataProductLayouts/DataProductWatchTheme";
import { DataProductFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductFurnitureTheme";
import { DataProductClassicFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductClassicFurnitureTheme";
import { DataProductBeautyTheme } from "../ProductLayouts/DataProductLayouts/DataProductBeautyTheme";
import { DataProductPerfumeTheme } from "../ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductCosmeticsTheme } from "../ProductLayouts/DataProductLayouts/DataProductCosmeticsTheme";
import { DataProductClothingTheme } from "../ProductLayouts/DataProductLayouts/DataProductClothingTheme";

const PRODUCT_MAP = {
  time: DataProductWatchTheme,
  furniture: DataProductFurnitureTheme,
  classicFurniture: DataProductClassicFurnitureTheme,
  beauty: DataProductBeautyTheme,
  perfume: DataProductPerfumeTheme,
  cosmetics: DataProductCosmeticsTheme,
  clothing: DataProductClothingTheme,
};

export function GetProductsByTheme(themeId) {
  return PRODUCT_MAP[themeId] || [];
}
