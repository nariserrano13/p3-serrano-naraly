class App {
    constructor (header, generator, footer){
        this.header = header;
        this.generator = generator;
        this.footer = footer;
    }
}

const renderTemplate = new App ('this is the header', 'this is the generator', 'this is the footer');

const template = `
    <header>
        <div>
            <h1>${renderTemplate.header}</h1>
        </div>
        <figure></figure>
    </header>
    <main>
        <div>${renderTemplate.generator}</div>
        <div></div>
    </main>
    <footer>
        <div>${renderTemplate.footer}</div>
        <div></div>
        <div></div>
    </footer>
`;

document.body.innerHTML= template;