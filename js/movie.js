const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDZiOGJkOGEwY2Y2MzU3MGY2ZDE4NzhlYTE0N2ExZiIsInN1YiI6IjY1MzA4OGYzZWRlYjQzMDBhYmRlNTkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djn14vJRyA5-NuiwBz0cONs164O-hZ98_eJRjIGmDqs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        // console.log(response.results)
        const mainDiv = document.querySelector(".main");
        const html = response.results.map(element => {
            // console.log(element)
            let html = `<div>감자</div>`
            return html
        });
        const div = document.createElement('div')
        div.className = "main-container"
        div.innerHtml = html.join("");
        mainDiv.append(div);
        console.log(html.join(""));
    }) 
    .catch(err => console.error(err));

