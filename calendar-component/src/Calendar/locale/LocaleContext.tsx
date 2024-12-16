import { createContext } from "react";
export interface contextFace {
    locale:string
}

const LocaleContext = createContext<contextFace>({
    locale:'zh'
})

export default LocaleContext;