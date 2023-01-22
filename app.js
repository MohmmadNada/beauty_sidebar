class NavbarIcon{
    constructor(className){
        let ulElement = document.querySelector("ul.primary-navigation");
        let liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        let iElement = document.createElement("i");
        iElement.setAttribute("class", className);
        liElement.appendChild(iElement);
    }
}

class NavBarList{
    constructor(navItems){
        const navBarElement = document.createElement("nav");
        navBarElement.setAttribute("id", "primary-navigation");
        navBarElement.setAttribute("aria-expanded", "false");
        document.querySelector('header').appendChild(navBarElement);
        const ulElement = document.createElement("ul");
        ulElement.setAttribute("class", "primary-navigation flex");
        navBarElement.appendChild(ulElement);
        navItems.forEach((iElement) => {
            new NavbarIcon(iElement)
        });
    }
}

class HomePage {
  constructor() {
    HomePage.createPageHeader();
    new NavBarList([
        "fa-solid fa-user",
        "fa-solid fa-envelope",
        "fa-solid fa-comment",
        "fa-sharp fa-solid fa-bell",
        "fa-solid fa-location-pin",
    ]);
  }
  static createPageHeader() {
    const headerElement = document.createElement("header");
    document.body.appendChild(headerElement);
    return headerElement;
  }
}

new HomePage();
