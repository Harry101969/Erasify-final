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
import React, { useState, useEffect } from "react";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from "../../dashboard/_components/FileList";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
const Canvas = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) => {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();

  const saveWhiteboard = () => {
    updateWhiteBoard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData),
    }).then((resp) => console.log(resp));
  };
  const updateWhiteBoard = useMutation(api.files.updateWhiteboard);
  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [saveWhiteboard]);
  return (
    <div style={{ height: "670px" }}>
      {fileData && (
        <Excalidraw
          theme="light"
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData.whiteboard),
          }}
          onChange={(excalidrawElements, appState, files) =>
            setWhiteBoardData(excalidrawElements)
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
          {/* Add the custom welcome screen */}
          {/* <WelcomeScreen.Hints.Menubar/>
    <WelcomeScreen.Hints.Toolbar/>
   </WelcomeScreen>    */}
          <WelcomeScreen />
        </Excalidraw>
      )}
    </div>
  );
};

export default Canvas;
