fetch("https://api.escuelajs.co/api/v1/categories")
.then(response => response.json())
.then(data => {

    let card =""
    for(let name of data){
        card += ` <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" id="lista">
        <div class="card h-100">
                <img src="https://motormotosrr.wordpress.com/wp-content/uploads/2014/06/2013-yamaha-yz450f-right-side-view-04.jpg"
                    class="card-img-top" alt="name">
                <div class="card-body">
                    <h5 class="card-title">Datos</h5>
                   <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>
                    Nombre:</strong>${name.name}</li>

                   </ul>
                
                
                    </div>
                <div class="card-footer">
                    <small class="text-muted">${name.creationAt}</small>
                </div>
            </div> </div> </div>`


            document.getElementById("lista").innerHTML = card

    }

})