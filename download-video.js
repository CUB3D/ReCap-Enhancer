const url = document.head.querySelector("[property~='og:video'][content]").content;

window.open(url, "_blank");
