import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image"


function Thumbnail({ content }) {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    
    return (
        <div className="p-2 group cursor-pointer transition duration-200
        ease-in transform sm:hover:scale-105 hover:z-50">
            <Image
                layout="responsive"
                src={
                    `${BASE_URL}${content.backdrop_path || content.poster_path}`
                }
                height={360}
                width={640}
            />

            <div className="p-2">
                <p className="truncate max-w-md">{content.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all 
                duration-100 ease-in-out group-hover:font-bold">
                    {content.title || content.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {content.media_type && `${content.media_type} ㆍ`}{" "}
                    {content.release_date || content.first_air_date}ㆍ{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {content.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail