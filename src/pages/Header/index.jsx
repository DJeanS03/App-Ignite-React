import './styles.css';
import igniteLogo from '../../assets/ignite-logo.svg';

export function Header(){
    return(
        <div className='headeree'>
            <div className="header_container">
                <img src={igniteLogo} alt="Logoignite" />
                <p>Ignite Feed</p>
            </div>
        </div>
    )
}