import MarkdownIt from "markdown-it"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: false,
  breaks: true,
  quotes: "“”‘’",
  langPrefix: "language-",
  xhtmlOut: true
})

const mdNoHtml = new MarkdownIt("commonmark", {})

export default md
export { mdNoHtml }
