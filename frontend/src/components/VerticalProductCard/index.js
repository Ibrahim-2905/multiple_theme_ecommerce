import { BlogCardWrapper } from "./BlogCardWrapper";
import DynamicGridWrapper from "./DynamicGridWrapper";
import { ImageGridCardWrapper } from "./ImageGridCardWrapper";
import { ImageWithColorProductCardWrapper } from "./ImageWithColorProductCardWrapper";
import { ImageWithContent } from "./ImageWithContent";
import { OneItemCardWrapper } from "./OneItemCardWrapper";
import PicturesWithOverlayCard from "./PicturesWithOverlayCard";
import SquareShapeProductCardWrapper from "./SquareShapeProductCardWrapper";
import VerticalProductCardWrapper from "./VerticalProductCardWrapper";

export const VerticalProductCardMap ={
    verticalProductCard: VerticalProductCardWrapper,
    squareShapeProductCard: SquareShapeProductCardWrapper,
    imageWithColorProductCard: ImageWithColorProductCardWrapper,
    imageWithContent: ImageWithContent,
    imageGridCard: ImageGridCardWrapper,
    picturesWithOverlayCard: PicturesWithOverlayCard,
    blogCard: BlogCardWrapper,
    dynamicGrid: DynamicGridWrapper,
    oneItemCard: OneItemCardWrapper,
}