function Card({ url, title, family, firstName, lastName }) {
    return (
        <div
            className='group h-72 w-full cursor-pointer'
            style={{
                perspective: '1000px',
            }}
        >
            <div
                style={{
                    transformStyle: 'preserve-3d',
                }}
                className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 group-hover:[transform:rotateY(180deg)]'
            >
                <div className='absolute inset-0'>
                    <img
                        src={url}
                        alt={name}
                        className='h-full w-full rounded-xl object-cover shadow-lg shadow-white/30'
                    />
                </div>

                <div
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                    }}
                    className='absolute inset-0 h-full w-full rounded-xl text-center bg-black opacity-80 p-3 text-slate-200 flex flex-col items-center justify-center'
                >
                    <h2 className='text-2xl sm:text-3xl font-extrabold'>{firstName}</h2>

                    <h2 className='text-2xl sm:text-3xl font-extrabold'>{lastName}</h2>

                    <h3 className=' text-base sm:text-lg font-semibold my-2'>
                        Title: <span className='text-slate-100 font-medium'>{title}</span>
                    </h3>

                    <h3 className=' text-base sm:text-lg font-semibold'>
                        Family: <span className='text-slate-100 font-medium'>{family}</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Card