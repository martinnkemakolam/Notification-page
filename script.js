// reacted, followed, commented, private message
let unreadAmount = document.querySelector('.unreadAmount')
let notificationBottom = document.querySelector('.notificationBottom')
let readAllBtn = document.querySelector('.readAllBtn')
unreadAmount.innerHTML = 0
let notifyMessage = [
    {profileImgSrc: '/assets/images/avatar-mark-webber.webp', name: 'Mark Webber', type: 'reacted', post: 'reacted to your post', postReactedTo: 'My first tournament!', time: '1m ago', read: false},
    {profileImgSrc: '/assets/images/avatar-angela-gray.webp', name: 'Angela Gray', type: 'follow', post: 'followed you', time: '5m ago', read: false},
    {profileImgSrc: '/assets/images/avatar-jacob-thompson.webp', name: 'Jacob Thompson', type: 'inform', post: 'has joined your group', postReactedTo: 'Chess Club', time: '1 day ago', read: false},
    {profileImgSrc: '/assets/images/avatar-rizky-hasanuddin.webp', name: 'Rizky Hasanuddin', type: 'private', post: 'sent you a private message', time: '5 days ago', message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`, read: true},
    {profileImgSrc: '/assets/images/avatar-kimberly-smith.webp', name: 'Kimberly Smith', type: 'comment', post: 'commented on your picture', time: '1 week ago', pictureSrc: '/assets/images/image-chess.webp', read: true},
    {profileImgSrc: '/assets/images/avatar-nathan-peterson.webp', name: 'Nathan Peterson', type: 'reacted', post: 'reacted to your recent post', postReactedTo: '5 end-game strategies to increase your win rate', time: '2 weeks ago', read: true},
    {profileImgSrc: '/assets/images/avatar-anna-kim.webp', name: 'Anna Kim', type: 'inform', post: 'left the group', postReactedTo: 'Chess Club', time: '1 day ago', read: true}
]
readAllBtn.addEventListener('click', ()=>{
  let message = document.querySelectorAll('.notificationMessages')
  message.forEach((msg)=>msg.classList.remove('active'))
  unreadAmount.innerHTML = 0
})

notifyMessage.forEach((messageObj)=>{
    messagePasser(messageObj)
    messageObj.read? null : unreadAmount.innerHTML++
})
function messagePasser(messageObj) {
    let privateDiv = document.createElement('div')
    privateDiv.classList.add('private')
    if (messageObj.type === 'reacted') {
        privateDiv.innerHTML = `
        <div class="${messageObj.read ? 'notificationMessages': 'notificationMessages active'}">
        <img src="${messageObj.profileImgSrc}" alt="">
        <div class="msg">
          <div class="notificationMsg">
            <span class="name">${messageObj.name}</span>
            <p>${messageObj.post}</p>
            <span class="extraDetail">${messageObj.postReactedTo}</span>
          </div>
          <span class="timeAgo">${messageObj.time}</span>
        </div>
        </div>
        `
        notificationBottom.appendChild(privateDiv)
    }else if(messageObj.type === 'follow'){
        privateDiv.innerHTML = `
        <div class="${messageObj.read ? 'notificationMessages': 'notificationMessages active'}">
        <img src="${messageObj.profileImgSrc}" alt="">
        <div class="msg">
          <div class="notificationMsg">
            <span class="name">${messageObj.name}</span>
            <p>${messageObj.post}</p>
          </div>
          <span class="timeAgo">${messageObj.time}</span>
        </div>
        </div>
        `
        notificationBottom.appendChild(privateDiv)
    }else if(messageObj.type === 'inform'){
        privateDiv.innerHTML = `
        <div class="${messageObj.read ? 'notificationMessages': 'notificationMessages active'}">
        <img src="${messageObj.profileImgSrc}" alt="">
        <div class="msg">
          <div class="notificationMsg">
            <span class="name">${messageObj.name}</span>
            <p>${messageObj.post}</p>
            <span class="extraDetail">${messageObj.postReactedTo}</span>
          </div>
          <span class="timeAgo">${messageObj.time}</span>
        </div>
        </div>
        `
        notificationBottom.appendChild(privateDiv)
    }else if(messageObj.type === 'private') {
        privateDiv.innerHTML = `
        <div class="${messageObj.read ? 'notificationMessages': 'notificationMessages active'}">
          <img src="${messageObj.profileImgSrc}" alt="">
          <div class="msg">
          <div class="notificationMsg">
            <span class="name">${messageObj.name}</span>
            <p>${messageObj.post}</p>
          </div>
          <span class="timeAgo">${messageObj.time}</span>
          </div>
        </div>
        <div class="privateMsg">
          <p>${messageObj.message}</p>
        </div>
        `
        notificationBottom.appendChild(privateDiv)
    }else if(messageObj.type === 'comment'){
        privateDiv.innerHTML=`
        <div class="${messageObj.read ? 'notificationMessages': 'notificationMessages active'}">
        <img src="${messageObj.profileImgSrc}" alt="">
        <div class="msg">
          <div class="notificationMsg">
            <span class="name">${messageObj.name}</span>
            <p>${messageObj.post}</p>
          </div>
          <span class="timeAgo">${messageObj.time}</span>
        </div>
        <img class='comment' src="${messageObj.pictureSrc}" alt="">
        </div>
        </div>
        `
        notificationBottom.appendChild(privateDiv)
    }
}