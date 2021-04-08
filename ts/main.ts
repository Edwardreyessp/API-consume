// Base URL
const URLI = "http://localhost:3000/api/guns"
const btnPost = document.querySelector('#btnPost')
const btnGet = document.querySelector('#btnGet')
const btnDelete = document.querySelector('#btnDelete')
const btnPut = document.querySelector('#btnPut')
const container = document.getElementById('API')

const generarTarjeta = ({name, type}) => {
    return `
        <section>
            <h1>${name}</h1>
            <h3>${type}</h3>
        </section>
        `
}

// GET
const get = async () => {
    try {
        const res = await fetch(URLI)
        const data = await res.json()
        const result = data
            .map((personaje) => generarTarjeta(personaje))
            .join(' ')

        container.innerHTML = result
    } catch (error) {
        console.log(error.message)
    }
}

//button GET
btnGet.addEventListener('click', (event) => {
    event.preventDefault()
    get()
})

// POST
const post = async ({name, type}) => {
    try {
        const response = await fetch(URLI, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, type })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

//button POST
btnPost.addEventListener('click', (event) => {
    event.preventDefault()
    const nameText = (<HTMLInputElement>document.getElementById("nameText")).value
    const desText = (<HTMLInputElement>document.getElementById("desText")).value
    const setPost = {
        "name": nameText,
        "type": desText
    }
    post(setPost)
    get()
    const setNameText = (<HTMLInputElement>document.getElementById("nameText")).value = ''
    const setDesText = (<HTMLInputElement>document.getElementById("desText")).value = ''
})

// PUT
const put = async ({id, name, type}) => {
    try {
        const response = await fetch(URLI, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ id, name, type })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

//buton PUT
btnPut.addEventListener('click', (event) => {
    event.preventDefault()
    const idText = (<HTMLInputElement>document.getElementById("idText")).value
    const nameText = (<HTMLInputElement>document.getElementById("nameText")).value
    const desText = (<HTMLInputElement>document.getElementById("desText")).value
    const setPut = {
        "id": idText,
        "name": nameText,
        "type": desText
    }
    put(setPut)
    get()
    const setIdText = (<HTMLInputElement>document.getElementById("idText")).value = ''
    const setNameText = (<HTMLInputElement>document.getElementById("nameText")).value = ''
    const setDesText = (<HTMLInputElement>document.getElementById("desText")).value = ''
})

// DELETE
const deleting = async ({id}) => {
    try {
        const response = await fetch(URLI, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ id })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

//button DELETE
btnDelete.addEventListener('click', (event) => {
    event.preventDefault()
    const idText = (<HTMLInputElement>document.getElementById("idText")).value
    const setID = {
        "id": idText
    }
    deleting(setID)
    get()
    const setIdText = (<HTMLInputElement>document.getElementById("idText")).value = ''
})
