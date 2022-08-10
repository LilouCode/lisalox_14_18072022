import { PageTemplate } from "../templates/PageTemplate";
import { ListEmployee } from "../organisms/ListEmployee";
import './employee.scss'
import { SearchBar } from "../molecules/fields/SearchBar";
export default function EmployeeListPage() {
    return (
        <div>
            <PageTemplate children={(
                <div className="employee">
                    <SearchBar/>
                    <ListEmployee/>
                </div>
            )}/>
        </div>
     );
};