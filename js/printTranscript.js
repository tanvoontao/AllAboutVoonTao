function printTranscript(arr) {
    var out = "";
    var completedUnits = ""
    var inProgressUnits = ""
    var notStartedUnits = ""
    var i;
    for (i = 0; i < arr.length; i++) {
        
        if (arr[i].status == "completed") {
            completedUnits += `
            <div class="kanbanContent my-2 p-3" data-aos="fade-up">
              <p>
                <a href="${arr[i].url}" target="_blank" rel="noopener noreferrer">
                ${arr[i].unitName} </a>
              </p>
              <div class="kanbanInnerContainer mt-2">
                <p class="enrolled ${arr[i].tag}">${arr[i].enrolled}</p>
                <p class="grade ${arr[i].grade}">${arr[i].grade}</p>
              </div>
            </div>
            `
        } else if (arr[i].status == "inProgress") {
            inProgressUnits += `
            <div class="kanbanContent my-2 p-3" data-aos="fade-up">
              <p>
                <a href="${arr[i].url}" target="_blank" rel="noopener noreferrer">
                ${arr[i].unitName} </a>
              </p>
              <div class="kanbanInnerContainer mt-2">
                <p class="enrolled ${arr[i].tag}">${arr[i].enrolled}</p>
                <p class="grade ${arr[i].grade}">${arr[i].grade}</p>
              </div>
            </div>
            `
        } else {
            notStartedUnits += `
            <div class="kanbanContent my-2 p-3" data-aos="fade-up">
              <p>
                <a href="${arr[i].url}" target="_blank" rel="noopener noreferrer">
                ${arr[i].unitName} </a>
              </p>
              <div class="kanbanInnerContainer mt-2">
                <p class="enrolled ${arr[i].tag}">${arr[i].enrolled}</p>
                <p class="grade ${arr[i].grade}">${arr[i].grade}</p>
              </div>
            </div>
            `
        }
    }
    out += `
    <div class="row">
    <div class="col-lg">
      <h1 class="kanbanHeading mb-5 mt-3"  data-aos="fade-down">Not Started</h1>
      ${notStartedUnits}
    </div>
    <div class="col-lg">
      <h1 class="kanbanHeading mb-5 mt-3" data-aos="fade-down">In Progress</h1>
      ${inProgressUnits}
    </div>
    <div class="col-lg">
      <h1 class="kanbanHeading mb-5 mt-3" data-aos="fade-down">Completed</h1>
      ${completedUnits}
    </div>
  </div>
  `
    document.getElementById("kanbanContainer").innerHTML = out;
  }