import classes from './Navbar.module.css'

const Navbar = () => {

    return <div className={classes.Navbar}>
    
        <div className={classes.Logo}>
            Business Bulls
        </div>
        <div className={classes.SearchBar}>
            <input placeholder='Search an event...'  className={classes.Search} type='text'/>
        </div>
        <div className={classes.NavBtns}>
            <div className={classes.EventBtn}>
                Create Event
            </div>
            <div className={classes.ContactBtn}>
                Contact Us
            </div>
            <div className={classes.LoginBtn}>
                LogIn
            </div>
            <div className={classes.RegisterBtn}>
                SignUp
            </div>
        </div>
    </div>
    
}

export default Navbar