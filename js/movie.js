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
        // console.log(response.results)
        const mainDiv = document.querySelector(".main");  //메인요소 변수에 담음
        const html = response.results.map(element => {
            console.log(element)
            let html = `<div class="movieCard"> 
            <div class="card">
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" class="card-img-top" alt="..."/>
            <p id="cardtitle">${element.title}</p>
            <p class="overview">${element.overview}</p>
            </div>`
            return html
        }); // 14~18 html은 배열 형식으로 여러개 들어감
        const div = document.createElement('div') // div를 만듬 <div></div>
        div.className = "main-container" //<div class="main-container"></div>
        div.innerHTML = html.join(""); //.join()은 배열을string으로 바꿔주는 메서드 
        mainDiv.append(div);//메인에 만든 div를 추가함
        console.log(html.join(""));

        

    })
    .catch(err => console.error(err));

    

//function 이름() {alert('영화 id')} => 카드 버튼 -> onclick="이름" (조건문 찾아보기)