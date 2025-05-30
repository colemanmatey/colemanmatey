import Logo from './Logo'
import Nav from './Nav'

function Header() {
    return (
        <header className='p-5 flex justify-between items-center'>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header
