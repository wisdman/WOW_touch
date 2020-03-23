//import UniversalRouter from 'universal-router'
import marshal from '/marshal/main.js'

nunjucks.configure({ autoescape: true });

const routes = [
  {
    path: '', // optional
    action: () => `<h1><a href="/marshal">Home</a></h1>`
  },
  {
    path: '/marshal',
    action: () => console.log('checking child routes for /posts'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => marshal.renderList(context.route.parent.path.replace(/\/$/, ""))
      },
      {
        path: '/:id',
        action: async (context) => marshal.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  }
]
 
const router = new UniversalRouter(routes)
 
router.resolve(window.location).then(html => {
  document.getElementById("app").innerHTML = html // renders: <h1>Posts</h1>
})