let tbody = document.getElementById("tbody");
let arr = [];
let id = 0;
function showArr(a) {
  tbody.innerHTML = "";
  a.forEach((item) => {
    tbody.innerHTML += `<tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.surname}</td>
                            <td>${item.group}</td>
                            <td>
                                <button class="btn btn-success" onclick ="editInfo(${item.id})" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                            </td>
                            <td>
                                <button class="btn btn-danger" onclick= "deleteFunk(${item.id})">Delete</button>
                            </td>
                        </tr>
                        `;
  });
}

function add() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let group = document.getElementById("group");

  let obj = {
    id: `${++id}`,
    name: `${name.value}`,
    surname: `${surname.value}`,
    group: `${group.value}`,
  };

  arr.push(obj);
  showArr(arr);
}

  let editName = document.getElementById("editName");
  let editSurname = document.getElementById("editSurname");
  let editGroup = document.getElementById("editGroup");
  let selectedId 

function editInfo(id) {
    selectedId = id
  let arrFind = arr.find((item) => item.id == id);
  if (arrFind) {
    editName.value = arrFind.name
    editSurname.value = arrFind.surname
    editGroup.value = arrFind.group
  }
}
function edit() {
    arr.forEach(item =>{
        if (item.id == selectedId) {
            item.name = editName.value
            item.surname = editSurname.value
            item.group = editGroup.value
        }

    })
    selectedId = undefined
    showArr(arr)
}
function deleteFunk(id) {
  let deleteArr = arr.filter((item) => item.id != id);
  arr = deleteArr;
  showArr(arr);
}
