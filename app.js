//import UniversalRouter from 'universal-router'
import marshal from '/marshal/main.js'
import children from '/children/main.js'
import blokada from '/blokada/main.js'
import bookChildren from '/book-children/main.js'
import profilaktika from '/profilaktika/main.js'
import bron from '/bron/main.js'
import doctors from '/doctors/main.js'
import spies from '/spies/main.js'
import childPics from '/child-pics/main.js'
import touchVideo from '/touch-video/main.js'
import concCamp from '/concentration_camp/main.js'
import concCampSigns from '/camp_signs/main.js'
import concCampList from '/camp_list/main.js'
import battles from '/battles/main.js'

nunjucks.configure({ autoescape: true });

document.querySelector("html").style.zoom = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);

const routes = [
  {
    path: '', // optional
    action: () => `<ul style="margin: 90px;"> \
    <li><h1><a href="/marshal">02 Маршал</a></h1></li> \
    <li><h1><a href="/blokada">03 Блокадник</a></h1></li> \
    <li><h1><a href="/children">04 Ребенок войны</a></h1></li> \
    <li><h1><a href="/book-children">Книга Дети</a></h1></li> \
    <li><h1><a href="/bron">Работа под бронью</a></h1></li> \
    <li><h1><a href="/doctors">Доктора</a></h1></li> \
    <li><h1><a href="/spies">НКВД</a></h1></li> \
    <li><h1><a href="/child-pics">Детские рисунки</a></h1></li> \
    <li><h1><a href="/profilaktika">Профилактика</a></h1></li> \
    <li><h1><a href="/touch-video">Видео</a></h1></li> \
    <li><h1><a href="/concentration_camp">Концлагерь</a></h1></li> \
    <li><h1><a href="/camp_signs">Знаки в концлагере</a></h1></li> \
    <li><h1><a href="/camp_list">Список концлагерей</a></h1></li> \
    <li><h1><a href="/battles">Битвы</a></h1></li> \
    </ul>`
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
  },
  {
    path: '/book-children',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => bookChildren.renderDetail(context.route.parent.path.replace(/\/$/, ""), 0)
      },
      {
        path: '/:id',
        action: async (context) => bookChildren.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  },
  {
    path: '/profilaktika',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => profilaktika.renderDetail(context.route.parent.path.replace(/\/$/, ""))
      }
    ]
  },
  {
    path: '/bron',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => bron.renderDetail(context.route.parent.path.replace(/\/$/, ""), 0)
      },
      {
        path: '/:id',
        action: async (context) => bron.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  },
  {
    path: '/doctors',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => doctors.renderDetail(context.route.parent.path.replace(/\/$/, ""), 0)
      },
      {
        path: '/:id',
        action: async (context) => doctors.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  },
  {
    path: '/spies',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => spies.renderDetail(context.route.parent.path.replace(/\/$/, ""), 0)
      },
      {
        path: '/:id',
        action: async (context) => spies.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  },
  {
    path: '/child-pics',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => childPics.renderList(context.route.parent.path.replace(/\/$/, ""))
      },
      {
        path: '/:row/:id',
        action: async (context) => childPics.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.row, context.params.id)
      }
    ]
  },
  {
    path: '/touch-video',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => touchVideo.renderDetail(context.route.parent.path.replace(/\/$/, ""))
      }
    ]
  },
  {
    path: '/concentration_camp',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => concCamp.renderDetail(context.route.parent.path.replace(/\/$/, ""))
      }
    ]
  },
  {
    path: '/camp_signs',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => concCampSigns.renderDetail(context.route.parent.path.replace(/\/$/, ""))
      }
    ]
  },
  {
    path: '/camp_list',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => concCampList.renderList(context.route.parent.path.replace(/\/$/, ""))
      },
      {
        path: '/:id',
        action: async (context) => concCampList.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  },
  {
    path: '/battles',
    action: (context) => includeCSS(context.route.path.replace(/\/$/, "") + '/styles.css'),
    children: [
      {
        path: '', // optional, matches both "/posts" and "/posts/"
        action: async (context) => battles.renderList(context.route.parent.path.replace(/\/$/, ""))
      },
      {
        path: '/:id',
        action: async (context) => battles.renderDetail(context.route.parent.path.replace(/\/$/, ""), context.params.id)
      }
    ]
  }
]

const router = new UniversalRouter(routes)

router.resolve(window.location).then(html => {
  document.getElementById("app").innerHTML = html // renders: <h1>Posts</h1>

  addScroll()

  document.querySelectorAll(".openInNewTab").forEach(node => {
    node.addEventListener("click", event => {
      event.preventDefault()
      event.stopPropagation()
      const current = node.getAttribute("href")
      var win = window.open(current, 'RMH_Content')
        win.focus();
    }, true)
  })

})




function includeCSS(aFile, aRel) {
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