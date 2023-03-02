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
btnAdd.addEventListener("click", () => {
    const input = document.getElementById("input");
    if(!input.value) {
        return;
    }

    store.push(input.value);
    render(store);
    commit(store);
    input.value = ""; 
});

const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", () => {
    store.splice(0);
    render(store);
    commit(store);
});