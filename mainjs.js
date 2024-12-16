document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("div a");
  const infoDisplay = document.getElementById("info");

  links.forEach((link) => {
    link.addEventListener("mouseover", function () {
      const infoId = link.getAttribute("data-info-id");
      const infoContent = document.getElementById(infoId).innerHTML;
      infoDisplay.innerHTML = infoContent;
    });

    link.addEventListener("mouseout", function () {
      infoDisplay.innerHTML =
        "<p>तीर्थं तीर्थस्य माहात्म्यं यत्र धर्मो प्रतिष्ठितः।</p> <img src=img/sanatan.png> <p class=para>HINDU DHARMA is like a boundless ocean teeming with priceless gems. The deeper you dive the more treasures you find!</p>";
    });
  });
});
