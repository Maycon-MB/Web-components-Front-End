class Cardnews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {}

    styles() {}
}

customElements.define("card-news", Cardnews);
