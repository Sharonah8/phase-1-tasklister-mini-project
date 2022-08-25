document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener("submit", () => {
    e.preventDefault()
    buildTaskLister(e.target.new - task - RTCSessionDescription.value)
  });
});



function taskLister(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#create-task-form').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}