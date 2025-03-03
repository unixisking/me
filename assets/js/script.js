'use strict'

const projects = {
  algoteachai: {
    code: 'https://github.com/unixisking/algoteach-ai',
    live: 'https://algoteachai.sidahmed.engineer/',
    techStack: [
      'Typescript',
      'Node.js',
      'Next.js',
      'AWS',
      'Tailwind CSS',
      'OpenAI',
      'LLMs',
      'RAG (Retrieval-augmented generation)',
      'ML: Vector Embeddings',
    ],
  },
  cliniquemuller: {
    code: 'https://github.com/unixisking/nextjs-project',
    live: 'https://marketing-site.sidahmed.engineer/',
    techStack: [
      'Typescript',
      'Next.js',
      'React.js',
      'AWS Lambda functions',
      'GHOST CMS',
      'Storybook',
      'Tailwind CSS',
    ],
  },
  algos: {
    code: 'https://github.com/unixisking/pattern-matching-algorithms',
    techStack: ['C', 'Python', 'Matplotlib', 'Numpy'],
  },
}

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active')
}

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]')
const sidebarBtn = document.querySelector('[data-sidebar-btn]')

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar)
})

// testimonials and project variables
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]')
const projectsItems = document.querySelectorAll('[data-projects-item]')
const modalContainer = document.querySelector('[data-modal-container]')
const overlay = document.querySelector('[data-overlay]')
const modalCloseBtn = document.querySelector('[data-modal-close-btn]')

// project variables
const projectsModalContainer = document.querySelector(
  '[data-projects-modal-container]'
)
const projectsModalCloseBtn = document.querySelector(
  '[data-projects-modal-close-btn]'
)
const projectsOverlay = document.querySelector('[data-projects-overlay]')

// modal variable
const modalImg = document.querySelector('[data-modal-img]')
const modalTitle = document.querySelector('[data-modal-title]')
const modalText = document.querySelector('[data-modal-text]')

// projects modal variable
const projectsModalImg = document.querySelector('[data-projects-modal-img]')
const projectsModalTitle = document.querySelector('[data-projects-modal-title]')
const projectsModalDescription = document.querySelector(
  '[data-projects-modal-description]'
)
const projectsModalTechStack = document.querySelector(
  '[data-projects-modal-tech-stack]'
)

const modalCodeLink = document.querySelector('[data-projects-modal-code-link]')
const modalLiveLink = document.querySelector('[data-projects-modal-live-link]')
// modal toggle function
const testimonialsModalFunc = function (modalContainer, overlay) {
  modalContainer.classList.toggle('active')
  overlay.classList.toggle('active')
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener('click', function () {
    modalImg.src = this.querySelector('[data-testimonials-avatar]').src
    modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt
    modalTitle.innerHTML = this.querySelector(
      '[data-testimonials-title]'
    ).innerHTML
    modalText.innerHTML = this.querySelector(
      '[data-testimonials-text]'
    ).innerHTML

    testimonialsModalFunc(modalContainer, overlay)
  })
}

// add click event to all modal items for projects
for (let i = 0; i < projectsItems.length; i++) {
  projectsItems[i].addEventListener('click', function () {
    const currentProjectData =
      projects[projectsItems[i].getAttribute('data-projects-item')]

    projectsModalImg.src = this.querySelector('[data-projects-img]').src
    projectsModalImg.alt = this.querySelector('[data-projects-img]').alt
    projectsModalTitle.innerHTML = this.querySelector(
      '[data-projects-title]'
    ).innerHTML
    projectsModalDescription.innerHTML = this.querySelector(
      '[data-projects-description]'
    ).innerHTML

    if (currentProjectData.code) {
      modalCodeLink.href = currentProjectData.code
      modalCodeLink.style = 'display: block'
    } else {
      modalCodeLink.style = 'display:none;'
    }

    if (currentProjectData.live) {
      modalLiveLink.style = 'display: block'
      modalLiveLink.href = currentProjectData.live
    } else {
      modalLiveLink.style = 'display:none;'
    }
    projectsModalTechStack.innerHTML = ''
    for (const tech of currentProjectData['techStack']) {
      projectsModalTechStack.innerHTML += `<li>${tech}</li>`
    }

    testimonialsModalFunc(projectsModalContainer, projectsOverlay)
  })
}

// add click event to modal close button
modalCloseBtn.addEventListener('click', () =>
  testimonialsModalFunc(modalContainer, overlay)
)
overlay.addEventListener('click', () =>
  testimonialsModalFunc(modalContainer, overlay)
)

projectsModalCloseBtn.addEventListener('click', () =>
  testimonialsModalFunc(projectsModalContainer, projectsOverlay)
)
projectsOverlay.addEventListener('click', () =>
  testimonialsModalFunc(projectsModalContainer, projectsOverlay)
)

// custom select variables
const select = document.querySelector('[data-select]')
const selectItems = document.querySelectorAll('[data-select-item]')
const selectValue = document.querySelector('[data-selecct-value]')
const filterBtn = document.querySelectorAll('[data-filter-btn]')

select.addEventListener('click', function () {
  elementToggleFunc(this)
})

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase()
    selectValue.innerText = this.innerText
    elementToggleFunc(select)
    filterFunc(selectedValue)
  })
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]')

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'all') {
      filterItems[i].classList.add('active')
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active')
    } else {
      filterItems[i].classList.remove('active')
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0]

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    let selectedValue = this.innerText.toLowerCase()
    selectValue.innerText = this.innerText
    filterFunc(selectedValue)

    lastClickedBtn.classList.remove('active')
    this.classList.add('active')
    lastClickedBtn = this
  })
}

// contact form variables
const form = document.querySelector('[data-form]')
const formInputs = document.querySelectorAll('[data-form-input]')
const formBtn = document.querySelector('[data-form-btn]')

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled')
    } else {
      formBtn.setAttribute('disabled', '')
    }
  })
}

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]')
const pages = document.querySelectorAll('[data-page]')

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add('active')
        navigationLinks[i].classList.add('active')
        window.scrollTo(0, 0)
      } else {
        pages[i].classList.remove('active')
        navigationLinks[i].classList.remove('active')
      }
    }
  })
}
