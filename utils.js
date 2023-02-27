const pull = () => {
    const storeJson = localStorage.getItem("store");
    return JSON.parse(storeJson) ?? []
}

const commit = (store) => {
    const storeJson = JSON.stringify(store);
    localStorage.setItem("store", storeJson);
}

const render = (data) => {
    const app = document.getElementById("root");
    app.innerHTML = "";
    data.forEach(e => {
        const div = document.createElement("div");
        div.innerText = e;
        div.classList.add("list_item");
        app.appendChild(div);
    });
}


const store = pull();
render(store);

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", (e) => {
    const input = document.getElementById("input");
    store.push(input.value);
    render(store);
    commit(store);
    input.value = "";
})