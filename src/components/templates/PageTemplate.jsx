import { Footer } from "../organisms/Footer"
import { Header } from "../organisms/Header"
export const PageTemplate = ({children}) =>{
    return(
        <div className="page">
            <Header/>
            <div className="main">
                {children}
            </div>
            <Footer/>
        </div>
    )
}