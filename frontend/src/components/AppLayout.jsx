// "use client";
// import ThemeProvider, { useTheme } from "@/provider/theme-provider";
// import { useSearchParams } from "next/navigation";
// import InnerLayout from "./InnerLayout";

// export default function AppLayout({ children, backendTheme }) {
//   const searchParams = useSearchParams();
//   const previewTheme = searchParams.get("previewTheme");

//   const themeId = previewTheme || backendTheme;

//   console.log("theme-id-->", themeId);

//   return (
//     <ThemeProvider themeId={themeId}>
//       <InnerLayout>{children}</InnerLayout>
//     </ThemeProvider>
//   );
// }



// "use client";
// import ThemeProvider from "@/provider/theme-provider";
// import InnerLayout from "./InnerLayout";
// import { useSearchParams } from "next/navigation";

// export default function AppLayout({ children, backendTheme }) {
//   const searchParams = useSearchParams();
//   const previewTheme = searchParams.get("previewTheme");

//   // Only use previewTheme on **first page load**
//   // After that, ThemeProvider state keeps themeId
//   const themeId = previewTheme || backendTheme;

//   return (
//     <ThemeProvider themeId={themeId}>
//       <InnerLayout>{children}</InnerLayout>
//     </ThemeProvider>
//   );
// }






"use client";
import ThemeProvider from "@/provider/theme-provider";
import InnerLayout from "./InnerLayout";
import { useSearchParams } from "next/navigation";


export default function AppLayout({ children, backendTheme }) {
  const searchParams = useSearchParams();
  const previewTheme = searchParams.get("previewTheme");

  const themeId = previewTheme || backendTheme;

  return (
    <ThemeProvider themeId={themeId} previewTheme={previewTheme}>
      <InnerLayout>{children}</InnerLayout>
    </ThemeProvider>
  );
}
