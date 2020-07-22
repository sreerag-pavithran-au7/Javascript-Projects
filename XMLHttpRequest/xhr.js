const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = ()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users');

    xhr.onload = () => {
        let json = JSON.parse(xhr.response);
        console.log(json)
    }

    xhr.send();     
}

const postData = ()=>{

}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);