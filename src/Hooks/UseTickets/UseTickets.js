import { useState ,useEffect } from "react"

const useTickets = () => {
    const [tickets, setTickets] = useState([])
    useEffect( () => {
        fetch ('https://cryptic-lake-43440.herokuapp.com/tickets')
        .then(res => res.json())
        .then(data => setTickets(data))
    },[])
    return [tickets, setTickets]
}
export default useTickets;
