export function animate(url) {
  const quality = 70;
  document.getElementById('bg').style.background = `linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 42%,rgba(0,0,0,1) 81%,rgba(0,0,0,1) 99%), url(https:${url}?fm=jpg&w=2048&h=1440&q=${quality}) no-repeat fixed`;
  document.getElementById('bg').style.backgroundSize = 'cover';
  document.getElementById('bg').style.animation = 'fadein 2.25s linear forwards';
}

export function resetAnimation() {
  document.getElementById('bg').style.animation = null;
}
