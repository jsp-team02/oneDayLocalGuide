HTMLCollection.prototype.forEach = Array.prototype.forEach;

/* -------------눈 모양 눌렀을 때 비밀번호 표시와 눈 모양 변경, 다시 눌렀을 때 돌아오기--------------- */
const eye = document.querySelector("#eye");
const password = document.querySelector(".input-pw");
var clickEye = 0;

eye.addEventListener("click", function(){
    if(clickEye % 2 == 1){
        eye.style.background = "url('./img/eye.svg')";
        password.type = "password";
    } else {
        eye.style.background = "url('./img/closeEye.svg')";
        password.type = "text";
    }
    clickEye++;
});
/* ---------------------------------------- */

/* 로고 눌렀을 때 메인페이지로 이동 */
const logo = document.querySelector("#logo");

logo.addEventListener("click", function(){
    location.href = "../mainpage/main.html";
});
/* ---------------------------------------- */

/* 모든 input 태그 입력, 성별 선택 했을 때 가입완료 버튼 활성화, 하나라도 입력 안했을 때 비활성화 */

    const inputId = document.querySelector(".input-id");
    const pId = document.querySelector(".warning-id");

    const inputPw = document.querySelector(".input-pw");
    const pPw = document.querySelector(".warning-pw");

    const inputPhonenumber = document.querySelector(".input-phonenumber");
    const pPhonenumber = document.querySelector(".warning-phonenumber");

    const inputAge = document.querySelector(".input-age");
    const pAge = document.querySelector(".warning-age");

    const inputName = document.querySelector(".input-name");
    const pName = document.querySelector(".warning-name");

    const body = document.querySelector("body");

    const completeBtn = document.querySelector("#complete-button");
    
    const gender1 = document.querySelector(".gender-check1");
    const gender2 = document.querySelector(".gender-check2");

    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;
    var check5 = false;
    var check6 = false;

    body.addEventListener("keyup", function(){
        if(check1 && check2 && check3 && check4 && check5 && check6){
            completeBtn.style.backgroundColor = "black";
            completeBtn.style.cursor = "pointer";
        }else{
            completeBtn.style.backgroundColor = "#cbcbcb";
            completeBtn.style.cursor = "default";
        }
        console.log(check1, check2, check3, check4, check5, check6);
    });
    
    body.addEventListener("click", function(){
        if(check1 && check2 && check3 && check4 && check5 && check6){
            completeBtn.style.backgroundColor = "black";
            completeBtn.style.cursor = "pointer";
        }else{
            completeBtn.style.backgroundColor = "#cbcbcb";
            completeBtn.style.cursor = "default";
        }
        console.log(check1, check2, check3, check4, check5, check6);
    });

    

    inputId.addEventListener("click",function(){
        if(inputId.value){
            pId.style.visibility = "hidden";
        } else{
            pId.style.visibility = "visible";
        }
    });

    inputId.addEventListener("input",function(){
        if(inputId.value){
            pId.style.visibility = "hidden";
            check1 = true;
        } else{
            pId.style.visibility = "visible";
            check1 = false;
        }
    });

    inputPw.addEventListener("click",function(){
        if(inputPw.value){
            pPw.style.visibility = "hidden";
        } else{
            pPw.style.visibility = "visible";
        }
    });

    inputPw.addEventListener("input",function(){
        if(inputPw.value){
            pPw.style.visibility = "hidden";
            check2 = true;
        } else{
            pPw.style.visibility = "visible";
            check2 = false;
        }
    });

    inputPhonenumber.addEventListener("click",function(){
        if(inputPhonenumber.value){
            pPhonenumber.style.visibility = "hidden";
        } else{
            pPhonenumber.style.visibility = "visible";
        }
    });

    inputPhonenumber.addEventListener("input",function(){
        if(inputPhonenumber.value){
            pPhonenumber.style.visibility = "hidden";
            check3 = true;
        } else{
            pPhonenumber.style.visibility = "visible";
            check3 = false;
        }
    });

    inputAge.addEventListener("click",function(){
        if(inputAge.value){
            pAge.style.visibility = "hidden";
        } else{
            pAge.style.visibility = "visible";
        }
    });

    inputAge.addEventListener("input",function(){
        if(inputAge.value){
            pAge.style.visibility = "hidden";
            check4 = true;
        } else{
            pAge.style.visibility = "visible";
            check4 = false;
        }
    });

    inputName.addEventListener("click",function(){
        if(inputName.value){
            pName.style.visibility = "hidden";
        } else{
            pName.style.visibility = "visible";
        }
    });

    inputName.addEventListener("input",function(){
        if(inputName.value){
            pName.style.visibility = "hidden";
            check5 = true;
        } else{
            pName.style.visibility = "visible";
            check5 = false;
        }
    });

    gender1.addEventListener("click", function(){
        if(gender1.value){
            check6 = true;
        } else {
            check6 = false;
        }
    })

    gender2.addEventListener("click", function(){
        if(gender2.value){
            check6 = true;
        } else {
            check6 = false;
        }
    })

    /* -------------------------------------------------------- */

