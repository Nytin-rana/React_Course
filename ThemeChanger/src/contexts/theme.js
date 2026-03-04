import { createContext, useContext } from "react";

const theme=createContext({themeMode:"light",
    lightTheme:()=>{},
    darkTheme:()=>
{}})

    export  const ThemeProvider=theme.Provider;

    export default function useTheme(){
        return useContext(theme)
    }