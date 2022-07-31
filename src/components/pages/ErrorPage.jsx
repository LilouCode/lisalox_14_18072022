import { PageTemplate } from "../templates/PageTemplate";
import Error404 from '../../assets/images/Error404.svg'
export default function ErrorPage () {
    return(
        <div>
            <PageTemplate children={(
                <div className="error">
                    <div>
                    <h1>Oups !</h1>
                    <h2>Sorry, something went wrong...</h2>
                    </div>
                    <img src={Error404} alt="Error 404" />
                </div>
            )} />
        </div>
    )
}