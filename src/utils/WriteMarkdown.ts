export class WriteMarkdown {
    content: string;
    constructor() {
        this.content = ""
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

