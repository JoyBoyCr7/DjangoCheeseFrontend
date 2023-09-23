import { redirect } from "react-router-dom"
const url = "https://django-cheese-backend.onrender.com/cheeses/"

export async function CreateCheese({request}){
    const forminfo = await request.formData();
    console.log(forminfo)
    const newcheese = {
        name: forminfo.get("name"),
        origin_country: forminfo.get("origin_country"),
        type: forminfo.get("type")
    }

    await fetch(url,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newcheese)
    })
    return redirect("/")
}

export const updateCheese = async({request, params}) => {
    const id = params.id
    const formData = await request.formData()

    const updatedCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }
    await fetch(url + id, {
        method: "put",
        headers : {"Content-Type": "application/json"
        },
        body : JSON.stringify(updatedCheese)
    })
    return redirect(`/cheese/${id}`)
}

export const deleteAction = async({params}) => {
    const id  = params.id
    await fetch(url + id, {
        method : "delete"
    })

    return redirect("/")
}