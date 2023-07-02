import { Link } from 'react-router-dom';
import css from './NotFound.module.css';


function NotFound() {
    return (
        <div className={css.box}>
            <Link to="/">Not Found page</Link>
        </div>
    )
    
}

export default NotFound;

