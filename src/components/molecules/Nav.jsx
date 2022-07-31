import {BtnNav} from '../atoms/buttons/BtnNav'
export const Nav = () => {
    return (
        <div className="nav">
            <BtnNav content="Home" link="/"/>
            <BtnNav content="List" link="/employeelist"/>
        </div>
    )
}