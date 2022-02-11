import Thumbnail from "./Thumnail"

function Contents ({contents}) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {
                contents.map(res=>(
                    <Thumbnail key={res.id} content={res} />
                ))
            }
        </div>
    )
}

export default Contents