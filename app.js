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



let pageLoaded = function(html) {

    let app = document.querySelector("#app")
    console.log(app.innerHTML.trim().length)
    if(app.innerHTML.trim().length) {
      let tempContainer = document.createElement("div")
      tempContainer.classList.add("temp-container")
      app.appendChild(tempContainer)
      tempContainer.innerHTML = html
      tempContainer.querySelector(".detail_item").innerHTML
      //app.classList.add("fadeIn")
      //app.innerHTML = html
      let content = app.querySelector(".detail_item")
      content.innerHTML = tempContainer.querySelector(".detail_item").innerHTML
      content.classList.add("fadeIn")
      content.addEventListener("animationend", () => {
        content.classList.remove("fadeIn")
        app.removeChild(tempContainer)
        tempContainer = null
      }, false)
    }
    else {
      app.innerHTML = html
      let nav = app.querySelector(".nav-slide-scroll")
      if(nav) {
        app.querySelector(".nav-slide-item.active").scrollIntoView({block: "center", behavior: "smooth"})
        

        
        setNavScrollEvents(nav)
        document.addEventListener("end-of-nav-reached", (e) => {
          console.log("end-of-nav-reached")
          let children = Array.prototype.slice.call(nav.childNodes);
          for(let i=0;i<children.length;i++) {
            let el = children.shift()
            nav.removeChild(el)
            el = null
          }
          children.forEach(function(item){
            let cln = item.cloneNode(true)
            nav.appendChild(cln);
          });
        })

        document.addEventListener("begin-of-nav-reached", (e) => { 
          let children = Array.prototype.slice.call(nav.childNodes)
          for(let i=0;i<children.length;i++) {
            let el = children.pop()
            nav.removeChild(el)
            el = null
          }
          children.forEach(function(item){
            let cln = item.cloneNode(true)
            nav.insertBefore(cln, nav.firstChild);
          });
          console.log("begin-of-nav-reached")
        })


        app.querySelectorAll(".nav-slide-item").forEach(a => {
          a.addEventListener("click", (e) => { 
            e.preventDefault()
            history.pushState({}, "WOW_touch!", a.href)
            router.resolve(window.location).then(pageLoaded)
            app.querySelectorAll(".nav-slide-item").forEach(i => { i.classList.remove("active") })
            a.classList.add("active")
            a.scrollIntoView({block: "center", behavior: "smooth"})
          }, false)
        })  
        addScroll()
      }
  }

  const lightbox = GLightbox({touchNavigation: true, loop: true, svg: 
        {
         close: '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm0 10.293L17.293 6l.707.707L12.707 12 18 17.293l-.707.707L12 12.707 6.707 18 6 17.293 11.293 12 6 6.707 6.707 6 12 11.293z"/></svg>',
        next: '<svg viewBox="0 0 70 70"><circle class="arr" cx="35" cy="35" r="34.5"></circle><path class="arr" fill="none" stroke="#ffffff" d="M46.13 51.26l-19-17 19-17"></path></svg>',
         prev: '<svg viewBox="0 0 70 70"><circle class="arr" cx="35" cy="35" r="34.5"></circle><path class="arr" fill="none" stroke="#ffffff" d="M46.13 51.26l-19-17 19-17"></path></svg>'
       }});
    
    document.querySelectorAll(".openInNewTab").forEach(node => {
      node.addEventListener("click", event => {
        event.preventDefault()
        event.stopPropagation()
        const current = node.getAttribute("href")
        var win = window.open(current, 'RMH_Content')
          win.focus();
      }, true)
    })
}

router.resolve(window.location).then(pageLoaded)

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


function setNavScrollEvents(container) {
  'use strict';

  container.onscroll = function (event) {
      if (isEndOfElement(container)){
          sendNewEvent('end-of-nav-reached');
      }
      else if (
        isBeginningOfElement(container)
       ) {
        sendNewEvent('begin-of-nav-reached');
      }
  };

  function isEndOfElement(element){
      //visible height + pixel scrolled = total height 
      return element.offsetHeight + element.scrollTop >= element.scrollHeight;
  }

  function isBeginningOfElement(element){
    //visible height + pixel scrolled = total height 
    return element.scrollTop == 0;
}

  function sendNewEvent(eventName){
      var event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
      document.dispatchEvent(event);
  }
}