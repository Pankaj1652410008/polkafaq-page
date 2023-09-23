const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});

//accordece

$('.accordion__header').click(function(e) {
	e.preventDefault();
	var currentIsActive = $(this).hasClass('is-active');
	$(this).parent('.accordion').find('> *').removeClass('is-active');
	if(currentIsActive != 1) {
		$(this).addClass('is-active');
		$(this).next('.accordion__body').addClass('is-active');
	}
});