var interval;
function changeCss(id) {
  const button = document.querySelectorAll('button');
  document.getElementById(id).classList.add('focus');
  button[0].disabled = true;
  button[1].disabled = true;
interval = setTimeout(() => {
    document.getElementById(id).classList.remove('focus');
    button[0].disabled = false;
    button[1].disabled = false;
  }, 8000);
}
function removeFocus() {
  document.getElementById('msg-accept').classList.remove('focus');
  document.getElementById('msg-cancel').classList.remove('focus');
  const button = document.querySelectorAll('button');
  button[0].disabled = false;
  button[1].disabled = false;
  clearInterval(interval);
}