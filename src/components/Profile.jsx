import hero from '../assets/hero-img.svg';

export default function Profile() {
    return (
        <div className='m-auto place-self-center lg:col-start-3 lg:col-span-8'>
            <div className="grid grid-cols-5 border-2 border-gray-950  rounded-sm">
                <div className="col-span-3 my-auto pl-10">
                    <p className="font-passion text-gray-800">Oct 11 1998</p>
                    <h1 className="font-bold py-0 font-passion text-7xl text-gray-800">NA RAH</h1>
                    <h2 className="font-medium font-passion text-5xl text-gray-800">HERNANDEZ</h2>
                    <p className="text-gray-800 mt-5"> Hi! I am a <span class="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">web developer</span> passionate about <span class="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">accessibility</span> and <span class="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">user-centric</span> functionality. I create intuitive, inclusive experiences that make the web work for everyone.</p>
                </div>
                <div className="col-span-2 mx-auto transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
                <img className="h-auto max-w-xs " src={hero} alt={"hero"} />
                </div>
            </div>
        </div>
    )
}