import {Link} from "react-router-dom"


const HomePage = () => {
    return(
        <>
            <div className="role_access_links">
            
                <Link to="/dj-login" className="no-underline">
                    <div className="dj_access"> DJ </div>        
                </Link>

                <Link to="/club-owner-login">                
                    <div className="club_owner_access">Club</div>
                </Link>

                <Link to="/admin-login">                
                    <div className="club_owner_access">Admin</div>
                </Link>


            </div>
        </>
    )
}

export default HomePage