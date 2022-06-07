const url = 'https://api.chucknorris.io/jokes/random' 
const root = document.getElementById("root");
const but = document.getElementById("but")

async function chackNorris() {
    const res = await fetch(url)
    const data = await res.json();
    render(data)
}


but.addEventListener ("click",() => {
    chackNorris()
})

const render = (data) => {
    main.innerHTML = ""

    const text = document.createElement("p")
    text.innerHTML=data.value
    main.append(text)
    text.style.width = '50%'
    main.style.display = 'flex'
}

