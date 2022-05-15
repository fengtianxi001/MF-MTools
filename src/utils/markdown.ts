export class Markdown {
    content: string;
    constructor(title?: string) {
        this.content = ""
        if(title) this.h1(title)
    }
    newline() {
        this.content += " \n "
    }
    h1(text) {
        this.content += `# ${text}`
        this.newline()
    }
    h2(text) {
        this.content += `## ${text}`
        this.newline()
    }
    option(text) {
        this.content += `- ${text}`
        this.newline()
    }
}

