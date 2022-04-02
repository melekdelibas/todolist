const btnDOM = document.querySelector("#liveToastBtn");
const taskDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const toastLiveSuccess = document.querySelector('#liveToastSuccess')
const toastLiveError = document.querySelector('#liveToastError')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

//element ekleme ve "eklendi"/"boş ekleme yapılamaz" uyarıları
function newElement() {  
    let deger = taskDOM.value.trim();
    if (deger) {
        let number = itemsArray.length > 0 ? itemsArray[itemsArray.length-1].id + 1 : 1
        itemsArray.push({info: deger, id: number});
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(deger,number)
        var toast = new bootstrap.Toast(toastLiveSuccess)
        toast.show()

    } else {
        var toast = new bootstrap.Toast(toastLiveError)
        toast.show()
    }
    
}

//li oluşturma
const liMaker = (deger,id) => {

        let liDOM = document.createElement('li');
        liDOM.innerHTML = deger
        liDOM.id=id;
        listDOM.appendChild(liDOM);
        taskDOM.value = "";

        //silme butonu
        const liElement = document.getElementsByTagName('li');


        for (let i = 0; i < liElement.length; i++) {
            const closeButton = document.createElement('span');
            closeButton.textContent = "\u00D7";
            closeButton.classList.add("close");
            closeButton.onclick = removeButton;
            liElement[i].append(closeButton);
            liElement[i].onclick = check;

        }
}
data.forEach(item => {
    liMaker(item.info,item.id);
});

//element silme fonksiyonu
function removeButton() {
    itemsArray = itemsArray.filter(item => item.id != this.parentElement.id)
    localStorage.setItem('items', JSON.stringify(itemsArray));
    this.parentElement.remove();
}
function check() {
    this.classList.toggle("checked");
}