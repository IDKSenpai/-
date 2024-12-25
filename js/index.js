const FB_submit = () => {
  window.location.href = "https://www.facebook.com/share/181psXQ87M/";
  const fb = document.getElementById("fb");
  fb.classList.add("clicked");

  setTimeout(function () {
    fb.classList.remove("clicked");
  }, 300);
};

document.getElementById("fb").addEventListener("click", FB_submit);

const TG_submit = () => {
  window.location.href = "https://t.me/Kaksiphalsovatipheap";
  const tg = document.getElementById("TG");
  tg.classList.add("clicked");

  setTimeout(function () {
    tg.classList.remove("clicked");
  }, 300);
};

document.getElementById("TG").addEventListener("click", TG_submit);
