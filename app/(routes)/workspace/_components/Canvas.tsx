// "use client";
// import dynamic from "next/dynamic";
// const Excalidraw = dynamic(
//   async () => (await import("@excalidraw/excalidraw")).Excalidraw,
//   {
//     ssr: false,
//   }
// );
// export default function Canvas() {
//   return <Excalidraw />;
// }
"use client";
import React from "react";
import { Excalidraw,MainMenu,WelcomeScreen } from "@excalidraw/excalidraw";
const Canvas = () => {
  return (
    <div style={{ height: "670px" }}>
      <Excalidraw
        theme="light"
        onChange={(excalidrawElements, appState, files) =>
          console.log(excalidrawElements)
        }
        UIOptions={{
          canvasActions: {
            saveToActiveFile: false,
          },
        }}
      >
        {/* //Optional */}
   {/* <MainMenu>
    <MainMenu.DefaultItems.ClearCanvas/>
    <MainMenu.DefaultItems.SaveAsImage/>
    <MainMenu.DefaultItems.ChangeCanvasBackground/>

   </MainMenu> */}
   <WelcomeScreen>
    <WelcomeScreen.Hints.MenuHint/>
    <WelcomeScreen.Hints.ToolbarHint/>
   </WelcomeScreen>   
   </Excalidraw>
    </div>
  );
};

export default Canvas;
