export function fromcontrole(){
    const imageUP1 = document.getElementById('imageUP1');
const inputFile1 = document.getElementById('input-file1');

const fileName1 = document.getElementById('fileName1');
const Filedis1 = document.getElementById('FileNamE1');

const cleanINput1 = document.getElementById('cleanINput1')


if(imageUP1){
    imageUP1.addEventListener('click', ()=>{
    inputFile1.click();
});

}



if(inputFile1){
    inputFile1.addEventListener('change', () => {
    if (inputFile1.files.length > 0) {
        const fileName = inputFile1.files[0].name;
        Filedis1.textContent = fileName;
    }

    fileName1.style.display ="flex"
});

}


if(cleanINput1){
    cleanINput1.addEventListener('click', ()=>{
    inputFile1.value = "";
    fileName1.style.display ="none"

})


}









const fileName2 = document.getElementById('fileName2');
const Filedis2 = document.getElementById('FileNamE2');

const imageUP2 = document.getElementById('imageUP2');
const inputFile2 = document.getElementById('input-file2');
const cleanINput2 = document.getElementById('cleanINput2');




if(imageUP2 && inputFile2 && cleanINput2 && fileName2 && Filedis2  ){
         
    imageUP2.addEventListener('click', ()=>{
    inputFile2.click();
});

inputFile2.addEventListener('change', () => {
    if (inputFile2.files.length > 0) {
        const fileName = inputFile2.files[0].name;
        Filedis2.textContent = fileName;
    }

    fileName2.style.display ="flex"
});

cleanINput2.addEventListener('click', ()=>{
    inputFile2.value = "";
    fileName2.style.display ="none"

})

}


}



fromcontrole();