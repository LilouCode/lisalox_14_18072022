import { PageTemplate } from "../templates/PageTemplate";
import { ListEmployee } from "../organisms/ListEmployee";
export default function EmployeeListPage() {
    return (
        <div>
            <PageTemplate children={(
                <div className="employee">
                    <ListEmployee/>
                </div>
            )}/>
        </div>
     );
};