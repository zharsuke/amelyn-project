document.querySelector('.side-bar .actived-list').style.backgroundColor = '#5C8374'
document.querySelector('.side-bar .actived-list').style.color = '#fff'
document.querySelector('.side-bar .actived-list').firstElementChild.setAttribute('src', document.querySelector('.side-bar .actived-list').firstElementChild.dataset.src + '-white.png')

document.querySelectorAll('.side-bar .body .list-content').forEach(list => {
    if( list.classList.contains('actived-list') ) return 0
    list.addEventListener('mouseover', function(e) {
        list.style.backgroundColor = '#5C8374'
        list.style.color = '#fff'

        list.firstElementChild.setAttribute('src', list.firstElementChild.dataset.src + '-white.png')
    })

    list.addEventListener('mouseout', function(e) {
        list.style.backgroundColor = '#fff'
        list.style.color = 'black'
        list.firstElementChild.setAttribute('src', list.firstElementChild.dataset.src + '-grey.png')
    })
})

document.querySelector('.side-bar-btn img').addEventListener('click', function(e) {
    if( this.parentElement.dataset.menu == 'off' ) {
        this.setAttribute('src', this.parentElement.dataset.src + 'close.png')
        this.parentElement.dataset.menu = 'on'

        document.querySelector('.side-bar').style.left = '0'

        // document.querySelector('.column-2').style.left = '18rem'
    } else {
        this.setAttribute('src', this.parentElement.dataset.src + 'menu.png')
        this.parentElement.dataset.menu = 'off'

        document.querySelector('.side-bar').style.left = '-18rem'

        // document.querySelector('.column-2').style.left = '0'
    }
})

document.querySelector('.div-6').addEventListener('mouseover', function(e) {
    this.firstElementChild.style.scale = 1.2
})
document.querySelector('.div-6').addEventListener('mouseout', function(e) {
    this.firstElementChild.style.scale = 1
})