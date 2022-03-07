import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {

    const {id} = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getDetail = async () => {
            console.log("ASDadsas");
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            setMovie(json.data.movie);
        };
        getDetail();
    }, [id]);
    console.log(id);
    return <h1>Detail</h1>;
}

export default Detail;