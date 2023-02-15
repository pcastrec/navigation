import { useParams } from "react-router-dom"

export const Home = () => {
    return (
        <h1>Home</h1>
    )
}

export const About = () => {

    // Je recupere le parametre index depuis l'url
    const { index } = useParams()

    return (
        <h1>About {index}</h1>
    )
}