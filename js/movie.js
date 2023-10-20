const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDZiOGJkOGEwY2Y2MzU3MGY2ZDE4NzhlYTE0N2ExZiIsInN1YiI6IjY1MzA4OGYzZWRlYjQzMDBhYmRlNTkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djn14vJRyA5-NuiwBz0cONs164O-hZ98_eJRjIGmDqs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1', options)
    .then(response => response.json())
    .then(response => {
        console.log(response.results)
        const mainDiv = document.querySelector(".main");  //메인요소 변수에 담음
        const html = response.results.map(element => {
            console.log(element)
            let html = `<div>
            <div class="card" id="${element.id}">
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img-top" alt="..."/>
            <h2 class="cardtitle">${element.title}</h2> 
            <p class="star">할배점수 : ${element.vote_average}</p>
            <p class="overview">${element.overview}</p>
            </div>
            </div>`
            return html
    });
    const div = document.createElement('div')
    div.className = "main-container"
    div.innerHTML = html.join("");
    mainDiv.append(div);
    console.log(html.join(""));

    div.addEventListener('click', (event) => {
      const card = event.target.closest('.card'); // 클릭된 요소의 가장 가까운 부모 카드 요소를 찾음
      if (card) {
          const id = card.id; // 클릭된 카드의 ID를 가져옴
          
         
  alert("품번은 " + id + " 이구만유~");
    }})

    
})
    .catch(err => console.error(err));
