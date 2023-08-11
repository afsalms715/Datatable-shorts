console.log("datatable")
fetch('https://dummyjson.com/products')
.then(res =>res.json())
.then((resp)=>{
    console.log(resp.products)
    let dataTable=new DataTable('#DataTable',{
        dom: 'Bfrtip',
        data:resp.products,
        columns: [
            { title: 'brand', data: 'brand' },
            { title: 'category', data: 'category' },           
            { title: 'title', data: 'title' },
            { title: 'price', data: 'price' },
            // Add more columns as needed
          ],
          buttons: [
            { extend: 'copyHtml5', footer: true },
            { extend: 'excelHtml5', footer: true },
            { extend: 'csvHtml5', footer: true },
            { extend: 'pdfHtml5', footer: true }
        ],
    })
});
//document.getElementsByClassName("dt-button").classList.add("btn-primary")

/**{    
    /*let dataTable=new DataTable('#DataTable',{
        data:res.json()
    })
    console.log(res.json())
    return res.json()
} */