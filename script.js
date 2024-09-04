class Project {
    constructor(name, color, border, date, link, thumbnail) {
        this.name = name;
        this.color = color;
        this.border = border;
        this.date = date;
        this.link = link;
        this.thumbnail = thumbnail;
    }
}

let ProjectList = [
    new Project("Cargo Security", "red", "2px solid red", "May 12, 2024", "https://diabolicalcats.itch.io/cargo-security", "https://img.itch.zone/aW1nLzE2OTE2OTk1LnBuZw==/315x250%23c/Ex7%2BRY.png"),
    new Project("Crack The Code And Get A Cat", "blue", "2px solid blue", "August 26, 2024", "https://diabolicalcats.itch.io/crack-the-code-and-get-a-cat", "https://img.itch.zone/aW1nLzE3NTQ0OTU2LnBuZw==/315x250%23c/qul3cI.png")
];
GenerateProjectList();

function GenerateProjectList() {
    let parent = document.querySelector(".container");
    for (let i = 0; i < ProjectList.length; i++) {
        let child = document.createElement("a");
        let thumbnail = document.createElement("img");
        let textName = document.createElement("b");
        let textDate = document.createElement("p");
        child.href = ProjectList[i].link;
        child.style.cssText = "border:" + ProjectList[i].border + "; border-radius: 10px; margin: 1px; display: inline-grid";
        thumbnail.src = ProjectList[i].thumbnail;
        thumbnail.style.cssText = "margin-left: auto; margin-right: auto";
        textName.style.cssText = "color:" + ProjectList[i].color + "; margin: 7px; padding-top: 7px";
        textDate.style.cssText = "color:" + ProjectList[i].color + "; margin: 7px; padding-bottom: 7px";
        textName.innerHTML = ProjectList[i].name;
        textDate.innerHTML = "Published: " + ProjectList[i].date;
        child.appendChild(thumbnail);
        child.appendChild(textName);
        child.appendChild(textDate);
        parent.appendChild(child);
    }
}