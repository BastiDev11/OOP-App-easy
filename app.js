class Producto
{
    constructor(name, price, year){
        this.name = name
        this.price = price
        this.year = year
    }
}



class UI 
{
    addProduct(product){
        const productList = document.getElementById("productList")
        const element = document.createElement("div")
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong> : ${product.name}
                <strong>Product Price</strong> : ${product.price}
                <strong>Product Year</strong> : ${product.year}
                <span class="delete" style="display:inline-block; cursor:pointer; margin-left:10px; color:red;">Borrar</span>
            </div>
        </div>`

        productList.appendChild(element)
    }

    deleteProduct(evento){
        if (evento.className === "delete") {
            evento.parentElement.parentElement.parentElement.remove()
        }
    }

    showMesagge(message, cssClass){
        const div = document.createElement("div")
        div.className = `alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector(".container")
        const app = document.getElementById("app")
        
        container.insertBefore(div, app)

        setTimeout(function(){
            document.querySelector(".alert").remove()
        }, 3000)

    }

    resetForm(){
        document.getElementById("productForm").reset()
    }
}


document.getElementById("productForm").addEventListener("submit", function(e){
    e.preventDefault()
    const name = document.getElementById("name").value 
    const price = document.getElementById("price").value
    const year = document.getElementById("year").value
    const product = new Producto(name, price, year)
    const ui = new UI()
    ui.addProduct(product)
    ui.resetForm()
    ui.showMesagge("Product added", "success")
})

document.getElementById("productList").addEventListener("click", function(e){
    const ui = new UI()
    ui.deleteProduct(e.target)
    ui.showMesagge("Prduct deleted", "danger")
})
