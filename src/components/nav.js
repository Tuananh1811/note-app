import '../components/nav.scss';

const nav = () => {

    return (
        <div className="navbar">
            <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="/"><i className="fa fa-fw fa-search"></i> Search</a>
            <a href="/"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/"><i className="fa fa-fw fa-user"></i> Login</a>

        </div>

    )
}
export default nav;