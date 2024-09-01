function openNavBar() {
  const openMenu = document.querySelector('#openMenu')
  openMenu.addEventListener('click', () => {
    let navList = document.querySelector('#menulistView')
    navList.style.width = '100%'
  })

}
openNavBar()
function closeNavBar() {
  const closeMenu = document.querySelector('#close')
  closeMenu.addEventListener('click', () => {
    let navList = document.querySelector('#menulistView')
    navList.style.width = '0px'
  })

}
closeNavBar()

function hoverEffect() {
  const navItems = document.querySelectorAll('.navListDesign')
  navItems.forEach((element, index) => {
    element.addEventListener('mouseover', (e) => {
      let featuredImg = document.querySelectorAll('.featuredImg')[index]
      featuredImg.style.height = '8rem'
      let aboutFeatureVid = document.querySelectorAll('#aboutFeatureVid')[index]
      aboutFeatureVid.play()
      featuredImg.style.width = '8rem'

    })
    element.addEventListener('mouseleave', (e) => {
      let featuredImg = document.querySelectorAll('.featuredImg')[index]
      featuredImg.style.height = '0'
      let aboutFeatureVid = document.querySelectorAll('#aboutFeatureVid')[index]
      aboutFeatureVid.pause()
      featuredImg.style.width = '0'
    })
    element.addEventListener('mousemove', (e) => {
      let featuredImg = document.querySelectorAll('.featuredImg')[index]
      featuredImg.style.left = (e.x - 100) + 'px'

    })
  });
}
hoverEffect()

function openPages(params) {
  const navItems = document.querySelectorAll('.navListDesign')
  navItems.forEach((element, index) => {
    element.addEventListener('click', () => {
      for (let index = 0; index < 4; index++) {
        let removeWidth = document.querySelectorAll('.Page')[index]
        removeWidth.style.width = '0px'
        console.log(removeWidth)
        console.log(index)
      }
      let getPage = document.querySelectorAll('.Page')[index]
      let navList = document.querySelector('#menulistView')
      getPage.style.width = '100%'
      navList.style.width = '0px'
      console.log(getPage)
    })
  });
}
openPages()

function recentProjectMagicText(params) {
  let recentProjectsNames = document.querySelectorAll('.recentProjectsNames');
  let lastProjName;
  recentProjectsNames.forEach((ele, num) => {
    ele.addEventListener('mouseover', () => {
      lastProjName = ele.innerText
      ele.textContent = lastProjName.split(' ')[0]
      if (window.screen.width >= 640) {
        ele.style.fontSize = '6rem'
      } else {
        ele.style.fontSize = '4rem'
      }
    })
    ele.addEventListener('mouseleave', () => {
      console.log(lastProjName)
      ele.textContent = lastProjName
      if (window.screen.width >= 640) {
        ele.style.fontSize = '3rem'
      } else {
        ele.style.fontSize = '30px'
        ele.style.color = 'pink'

      }
    })
  })
}
recentProjectMagicText() 