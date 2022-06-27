function printProject(arr) {
    var out = "";
    var i;
    for(i = 0; i<arr.length; i++) {
      out += `<div class="card my-2 swiper-slide" data-aos="fade-up">
                <img src="${arr[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${arr[i].title}</h5>
                  <p class="card-text">${arr[i].description}</p>
                  <a href="${arr[i].url}" class="btn btn-primary">
                    <i class='bx bxl-github'></i> 
                    Project Link
                    </a>
                </div>
              </div>`

    }
    document.getElementById("project-container").innerHTML = out;
  }