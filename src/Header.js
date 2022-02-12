import './Header.css';
import {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();

    return (
        <div className="header">
            <div className="header-content">
                <h1><Link to="/">Miakő</Link></h1>
                <Navbar />
                {/* <ion-icon onClick={() => setIsOpen(!isOpen)} className={isOpen ? "arrow" : null} name={isOpen ? "close-circle-outline" : "chevron-down-circle-outline"}></ion-icon>
                <div 
                    className="navbar" 
                    ref={parentRef}
                    style={isOpen ? {
                        height: parentRef.current.scrollHeight + "px",
                    }
                    : {
                        height: "0px",
                    }
                }
                    >
                    <Navbar />
                </div> */}
            </div>
        </div>
    )
}
export default Header;