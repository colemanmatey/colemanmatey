
function Logo() {
    return (
        <div className='text-2xl font-bold cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className='bg-cyan-600 text-white px-3 py-2 rounded-l-lg'>C</span>
            <span className='bg-gray-800 text-white px-3 py-2 rounded-r-lg'>M</span>
        </div>
    )
}

export default Logo
