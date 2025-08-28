
function Logo() {
    return (
        <div className='text-2xl sm:text-3xl font-bold cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className='bg-cyan-600 text-white w-10 h-9 sm:w-11 sm:h-10 rounded-l-lg inline-flex items-center justify-center pb-0.5'>C</span>
            <span className='bg-gray-800 text-white w-10 h-9 sm:w-11 sm:h-10 rounded-r-lg inline-flex items-center justify-center pb-0.5'>M</span>
        </div>
    )
}

export default Logo
