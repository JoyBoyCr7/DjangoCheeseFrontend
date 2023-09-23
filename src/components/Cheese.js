import { Link } from "react-router-dom"

function Cheese({cheese}){
    const styleing = {
        textAlign: 'center',
        border: '3px solid',
        margin: '10px auto',
        width: '80%'
    }
    return <div style={styleing}>
        <Link to={`/cheese/${cheese.id}`}>
            <h1>{cheese.name}</h1>
            <h2>{cheese.origin_country}</h2>
            <h3>{cheese.type}</h3>
        </Link>
    </div>
}

export default Cheese