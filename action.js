const buttons = document.querySelectorAll("a")

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const clickX = event.clientX - event.target.offsetLeft
    const clickY = event.clientY - event.target.offsetTop
    const circles = document.createElement("span")
    circles.style.left = `${clickX}px`
    circles.style.top = `${clickY}px`
    btn.appendChild(circles)

    setTimeout(() => {
      circles.remove()
    }, 1000)
  })
})
