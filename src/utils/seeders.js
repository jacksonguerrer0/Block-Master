import axios from "axios"

// subiendo datos de la api de peliculas

const seeders = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6940bb378c5f7bbc9f2c4d339362791d&language=en-US&page=3');
    const {results} = res.data
    return results
}

export default seeders