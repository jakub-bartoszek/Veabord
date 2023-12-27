import Keycap from "./Keycap";

export const Keyboard = () => {
 const primaryColor = "#9d9d9d";
 const secondaryColor = "#2b2b2b";
 const specialColor = "#ba0000";

 const primaryLightColor = "#00e5ff";
 const secondaryLightColor = "#ff009d";
 const specialLightColor = "#ffb300";

 return (
  <div className=" shadow-[0_20px_0_0_#656565,_0_40px_20px_10px_#00000050] w-full max-w-[900px] bg-[#ababab] aspect-[355/137] rounded-[5px] grid grid-cols-[1fr_4fr_4fr_4fr_3fr] grid-rows-[1fr_5fr] gap-x-[14px] gap-y-[5px] p-[10px]">
   <div className="flex bg-black p-[4px] rounded-md">
    <Keycap
     color={specialColor}
     lightColor={specialLightColor}
     size="100%"
     sign="ESC"
    />
   </div>
   <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F1"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F2"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F3"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F4"
    />
   </div>
   <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
    <Keycap
     color={secondaryColor}
     lightColor={secondaryLightColor}
     size="100%"
     sign="F5"
    />
    <Keycap
     color={secondaryColor}
     lightColor={secondaryLightColor}
     size="100%"
     sign="F6"
    />
    <Keycap
     color={secondaryColor}
     lightColor={secondaryLightColor}
     size="100%"
     sign="F7"
    />
    <Keycap
     color={secondaryColor}
     lightColor={secondaryLightColor}
     size="100%"
     sign="F8"
    />
   </div>
   <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F9"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F10"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F11"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="F12"
    />
   </div>
   <div className="flex bg-black p-[4px] gap-[4px] rounded-md">
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="PrtScr"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="ScrLk"
    />
    <Keycap
     color={primaryColor}
     lightColor={primaryLightColor}
     size="100%"
     sign="Pause"
    />
   </div>
   <div className="bg-black p-[4px] gap-[4px] rounded-md col-span-4 grid grid-rows-[repeat(5_1fr)]">
    <div className="flex bg-black gap-[4px] rounded-md">
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="~"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="1"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="2"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="3"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="4"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="5"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="6"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="7"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="8"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="9"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="0"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="-"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="+"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="200%"
      sign="Backspace"
     />
    </div>
    <div className="flex bg-black gap-[4px] rounded-md">
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="140%"
      sign="Tab"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="Q"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="W"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="E"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="R"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="T"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="Y"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="U"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="I"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="O"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="P"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="["
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="]"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="160%"
      sign="\"
     />
    </div>
    <div className="flex bg-black gap-[4px] rounded-md">
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="160%"
      sign="CapsLk"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="A"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="S"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="D"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="F"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="G"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="H"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="J"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="K"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="L"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign=";"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="'"
     />
     <Keycap
      color={specialColor}
      lightColor={specialLightColor}
      size="220%"
      sign="Enter"
     />
    </div>
    <div className="flex bg-black gap-[4px] rounded-md">
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="180%"
      sign="Shift"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="Z"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="X"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="C"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="V"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="B"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="N"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="M"
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign=","
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="."
     />
     <Keycap
      color={primaryColor}
      lightColor={primaryLightColor}
      size="100%"
      sign="/"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="260%"
      sign="Shift"
     />
    </div>
    <div className="flex bg-black gap-[4px] rounded-md">
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="120%"
      sign="Ctrl"
     />
     <Keycap
      color={secondaryColor}
      lightColor={specialLightColor}
      size="120%"
      sign="Win"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="120%"
      sign="Alt"
     />
     <Keycap
      color={primaryColor}
      lightColor={specialLightColor}
      size="600%"
      sign="Space"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="120%"
      sign="Alt"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="120%"
      sign="Fn"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="120%"
      sign="Opt"
     />
     <Keycap
      color={secondaryColor}
      lightColor={secondaryLightColor}
      size="120%"
      sign="Ctrl"
     />
    </div>
   </div>
  </div>
 );
};
