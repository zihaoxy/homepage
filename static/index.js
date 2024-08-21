window.onload = function () {
    var url = "/date/json"
    var request = new XMLHttpRequest()
    request.open("get", url)
    request.send(null)
    request.onload = function () {
        if (request.status == 200) {
            let json = JSON.parse(request.responseText)
            // console.log(json["sites"])
            let sites = json["sites"]
            insert_menu(sites)
            insert_item(sites)


        }

    }
}



function insert_menu(sites) {
    let menu = document.getElementById("menu1")

    for (let i = 0; i < sites.length; i++) {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = "#"
        a.innerText = sites[i].name
        div.className = "part"
        div.appendChild(a)
        menu.appendChild(div)

    }
}

function insert_item(sites) {
    let mid = document.getElementById("mid1")
    for (i = 0; i < sites.length; i++) {
        let item = document.createElement("div")
        item.className = "item"

        let item_title = document.createElement("div")
        item_title.className = "item_title"
        item_title.innerText = sites[i].name

        let item_Content = document.createElement("div")
        item_Content.className = "item_Content"

        let nembers = sites[i].nembers

        for (let n = 0; n < nembers.length; n++) {

            let a = document.createElement("a")
            a.target = "_blank"
            a.href = nembers[n].url
            let btn = document.createElement("div")
            btn.className = "btn"
            let btn_name = document.createElement("div")
            btn_name.className = "btn_name"
            btn_name.innerText = nembers[n].name
            let btn_note = document.createElement("div")
            btn_note.className = "btn_note"
            btn_note.innerText = nembers[n].note
            btn.appendChild(btn_name)
            btn.appendChild(btn_note)
            a.appendChild(btn)
            item_Content.appendChild(a)
        }

        item.appendChild(item_title)
        item.appendChild(item_Content)
        mid.appendChild(item)

    }

}
