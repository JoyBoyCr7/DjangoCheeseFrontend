import {Link, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Show = (props) => {
    const cheese = useLoaderData()
    const style = {
      textAlign: "center",
      border: "3px solid green",
      width: "80%",
      margin: "30px auto",
    };
    return <div style={style}>
      <h1>{cheese.name}</h1>
      <h2>{cheese.origin_country}</h2>
      <h2>{cheese.type}</h2>
      <div style={{textAlign: "center"}}>
        <h2>Update Cheese</h2>
        <Form method="post" action={`/update/${cheese.id}`}>
            <input type="text" name="name" placeholder="name" defaultValue={cheese.name} required/>
            <input type="text" name="origin_country" placeholder="origin_country" defaultValue={cheese.origin_country} required/>
            <input type="text" name="type" placeholder="type" defaultValue={cheese.type} required/>
            <button>Update Cheese</button>
        </Form>
        <Form method="post" action={`/delete/${cheese.id}`}>
          <button>Delete Cheese</button>
        </Form>
      </div>
      <Link to={"/"}>Back to Home</Link>
    </div>;
  };
  
  export default Show;