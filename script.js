fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
    // console.log(data);
    return data.json();
}).then((objData)=>{
    console.log(objData[0].name)
    let tableData="";
    objData.map((values)=>{
tableData+=` <tr>
<td>${values.id}</td>
<td>${values.name}</td>
<td>${values.email}</td>
<td>@${values.company.name}</td>
<td>@${values.address.zipcode}</td>
</tr>
`
    })


document.getElementById('table_body').innerHTML=tableData;
})

const searchFun=()=>{
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();
    var table = document.getElementById('myTable');
    var tr = table.getElementsByTagName('tr');
    for(i=0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName('td')[1];
        if(td){
            var txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}