const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
const port = dev ? 8090: 80

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // blog detail router
    let blogId = /(?<=\/blog\/)\d+$/.exec(pathname)
    if (blogId) {
      app.render(req, res, '/blog/detail', { id: blogId, ...query })
    } else {
      handle(req, res, parsedUrl)
    }

  })
  .listen(port, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port);
  })  
})
