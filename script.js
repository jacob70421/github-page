class Project {
    constructor(name, color, border, date, openSource, link, thumbnail) {
        this.name = name;
        this.color = color;
        this.border = border;
        this.date = date;
        this.openSource = openSource;
        this.link = link;
        this.thumbnail = thumbnail;
    }
}
class Blog {
    constructor(name, description, blogFile) {
        this.name = name;
        this.description = description;
        this.blogFile = blogFile;
    }
}

let UnityProjectList = [
    new Project("Cargo Security", "red", "2px solid red", "May 12, 2024", "No", "https://diabolicalcats.itch.io/cargo-security", "https://img.itch.zone/aW1nLzE2OTE2OTk1LnBuZw==/315x250%23c/Ex7%2BRY.png"),
    new Project("Crack The Code And Get A Cat", "blue", "2px solid blue", "August 26, 2024", "Yes", "https://diabolicalcats.itch.io/crack-the-code-and-get-a-cat", "https://img.itch.zone/aW1nLzE3NTQ0OTU2LnBuZw==/315x250%23c/qul3cI.png")
];
let BlogList = [
    new Blog("Test Blog", "This is a test blog.", "/Blogs/blog-0.html")
];
GenerateUnityProjectList();
GenerateBlogList();

function GenerateUnityProjectList() {
    let parent = document.querySelector("#unityprojects");
    for (let i = 0; i < UnityProjectList.length; i++) {
        let child = document.createElement("a");
        let thumbnail = document.createElement("img");
        let textName = document.createElement("b");
        let textDate = document.createElement("p");
        let textOpenSource = document.createElement("p");
        child.href = UnityProjectList[i].link;
        child.style.cssText = "border:" + UnityProjectList[i].border + "; border-radius: 10px; margin: 1px; display: inline-grid";
        thumbnail.src = UnityProjectList[i].thumbnail;
        textName.style.cssText = "color:" + UnityProjectList[i].color + "; margin: 7px; padding-top: 7px";
        textDate.style.cssText = "color:" + UnityProjectList[i].color + "; margin-top: 7px;";
        textOpenSource.style.cssText = "color:" + UnityProjectList[i].color + "; margin-bottom: 20px";
        textName.innerHTML = UnityProjectList[i].name;
        textDate.innerHTML = "Published: " + UnityProjectList[i].date;
        textOpenSource.innerHTML = "Is Open Source: " + UnityProjectList[i].openSource;
        child.appendChild(thumbnail);
        child.appendChild(textName);
        child.appendChild(textDate);
        child.appendChild(textOpenSource);
        parent.appendChild(child);
    }
}
function GenerateBlogList() {
    let parent = document.querySelector("#blogs");
    for (let i = 0; i < BlogList.length; i++) {
        let child = document.createElement("a");
        let title = document.createElement("p");
        let description = document.createElement("p");
        child.href = BlogList[i].blogFile;
        title.innerHTML = BlogList[i].name;
        title.style = "font-weight: bold;"
        description.innerHTML = BlogList[i].description;
        child.appendChild(title);
        child.appendChild(description);
        parent.appendChild(child);
    }
}