import { Form } from "../organisms/Form"
import { PageTemplate } from "../templates/PageTemplate"
function LandingPage() {
    return(
        <div>
            <PageTemplate children={(
                <div className="home">
                    <div className="home__titles">
                        <h1>Good Morning</h1>
                        <h2>Add a new employee to the system</h2>
                    </div>
                    <div className="home__form">
                        <Form/>
                    </div>
                </div>
            )}/>
        </div>
    )
}
export default LandingPage