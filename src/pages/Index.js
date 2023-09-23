import { useLoaderData, Form } from "react-router-dom";
import Cheese from "../components/Cheese";
const Index = (props) => {
    const data = useLoaderData()
    return <>
    <div style={{textAlign:"center"}}>
        <h2>Create a Cheese</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="text" name="origin_country" placeholder="Origin Country" required/>
            <input type="text" name="type" placeholder="Type" required/>
            <input type="submit"/>
        </Form>
    </div>
        {data.map((cheese) => <Cheese key={cheese.id} cheese={cheese}/>)}
    </>;
  };
  
  export default Index;