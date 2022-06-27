function printNav(arr) {
    var out = "";
    var i;
    for(i = 0; i<arr.length; i++) {
        out += `<li class="nav-item">
                    <a class="nav-link" href="#section${i+1}">${arr[i].name}</a>
                </li>`

    }
    document.getElementById("navItemLinks").innerHTML = out;
  }