"use client"
import { useRouter } from "next/navigation";
import DynamicGrid from "./DynamicGrid";

export default function DynamicGridWrapper({data = [], colGrid}){
    const router = useRouter()
    return(
        <div>
            <div className={`grid grid-cols-1 ${colGrid} px-4 `} style={{gridAutoRows:"300px"}}>
            {data.map((item)=>(
                <DynamicGrid
                key={item.id}
                category={item.category}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                grid={item.grid}
                buttonProps={item.buttonProps}
                categoryColor={item.categoryColor}
                titleColor={item.titleColor}
                subtitleColor={item.subtitleColor}
                itemStart={item.itemStart}
                />
            ))}
            </div>
        </div>
    )
}
