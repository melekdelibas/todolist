const btnDOM = document.querySelector("#liveToastBtn");
const taskDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const toastLiveSuccess = document.querySelector('#liveToastSuccess')
const toastLiveError = document.querySelector('#liveToastError')


//element ekleme ve "eklendi"/"boş ekleme yapılamaz" uyarıları
function newElement() {  
    let deger = taskDOM.value.trim();
    if (deger) {
        var toast = new bootstrap.Toast(toastLiveSuccess)
        toast.show()

        let liDOM = document.createElement('li');
        liDOM.innerHTML = deger
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

    } else {
        var toast = new bootstrap.Toast(toastLiveError)
        toast.show()
    }
    
}

//element silme fonksiyonu
function removeButton() {
    this.parentElement.remove();
}
function check() {
    this.classList.toggle("checked");
}