import Logo from './Logo'
import Nav from './Nav'

function Header() {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm transition-all duration-300'>
            <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
                <Logo />
                <Nav />
            </div>
        </header>
    )
}

export default Header
