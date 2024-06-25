

      
function Firstconstr(title, price, description, image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
}

fetch('https://fakestoreapi.com/products?limit=20')
    .then(res => res.json())
    .then((json) => {
        const productArr = json.map(item => new Firstconstr(item.title, item.price, item.description, item.image));
        
        

        let a = document.getElementById("card");
    

        productArr.forEach(element => {
            let x = document.createElement("div");
            x.classList.add("abd");
            let details = `

                <img src="${element.image}" alt="${element.title}" />
                <h2>Title: ${element.title}</h2>
                <h2>price: $${element.price}</h2>
                <h5>Description: ${element.description}</h5><br><br>
                <div class="class-action ">
                   <button class="delete-btn">Delete</button>
                   <button class="update-btn">Update</button>
        
                </div>
        
   
                 
                
            `;
            x.innerHTML = details;
            a.appendChild(x);
            x.querySelector('.delete-btn').addEventListener('click',function(){
                x.remove();
            });
            x.querySelector('.update-btn').addEventListener('click',function(){
                document.getElementById("image").value = element.image;
                document.getElementById("title").value = element.title;
                document.getElementById("price").value = element.price;
                document.getElementById("description").value = element.description;
                x.remove();
            });
        });
    })
    .catch(err => console.error(err));
// q2)--------------------------------------------------------------------------------



    


