//import UniversalRouter from 'universal-router'
import marshal from '/marshal/main.js'
import children from '/children/main.js'
import blokada from '/blokada/main.js'

nunjucks.configure({ autoescape: true });

document.querySelector("html").style.zoom = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);

const routes = [
  {
    path: '', // optional
    action: () => `<ul style="margin: 90px;"><li><h1><a href="/marshal">02 Маршал</a></h1></li><li><h1><a href="/blokada">03 Блокадник</a></h1></li><li><h1><a href="/children">04 Ребенок войны</a></h1></li></ul>`
  },
  {
    path: '/marshal',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
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
  },
  {
    path: '/children',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => children.renderList(context.route.parent.path.replace(/\/$/, ""))
      },
      {
        path: '/:id',
        action: async (context) => children.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  },
  {
    path: '/blokada',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => blokada.renderList(context.route.parent.path.replace(/\/$/, ""))
      },
      {
        path: '/:id',
        action: async (context) => blokada.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  }
]

const router = new UniversalRouter(routes)

router.resolve(window.location).then(html => {
  document.getElementById("app").innerHTML = html // renders: <h1>Posts</h1>
  addScroll()
})



function includeCSS(aFile, aRel){
  let style = window.document.createElement('link')
  style.href = aFile
  style.rel = aRel || 'stylesheet'
  let head = window.document.getElementsByTagName('head')[0]
  head.appendChild(style)
}

function addScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}