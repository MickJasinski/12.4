var url = 'https://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', getJoke);

window.onload = getJoke;

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

/*
jQery version

var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(getJoke);

var $paragraph = $('#joke');

function getJoke() {
	$.ajax({
		mathod:'GET',
		url: url,
		success: function(res) {
			$paragraph.text(res.value.joke);
		}
	});
}

extra task - multiplying loop

function multiply(a, b) {
  var result = 0;
  if (b >= 0) {
    for (i = 0; i < b; i++) {
      result += a;
    }
  } else {
    for (i = b; i < 0; i++) {
      result -= a;
    }
  }
  return result;
}
*/