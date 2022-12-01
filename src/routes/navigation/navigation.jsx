import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../components/contexts/user.contexts";
import { signUserOut } from "../../firebase/firebase.utils";

import "./navigation.scss";


const Navigation = () => {
    const { currentUser } = useContext(UserContext);


    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signUserOut}>SIGN OUT</span>) : (<Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>)
                    }

                </div>

            </div>
            <Outlet />
        </Fragment>
    );
}
export default Navigation;