import {Nav} from '../molecules/Nav';
import {LogoHR} from '../atoms/logo/LogoHRnet';
export const Header = () => {
    return(
        <div className="header">
            <LogoHR/>
            <Nav/>
        </div>
    )
}   