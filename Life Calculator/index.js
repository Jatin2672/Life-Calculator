let isDOBopen = false;
const settingsiconEL=document.getElementById("setting_icon")
const dobcontentEL=document.getElementById("dobContent")
const initialtextEL = document.getElementById('initialtext');
const afterDobEL=document.getElementById('afterDOB');
const buttonDOB=document.getElementById('dob-button');
const inputDOB=document.getElementById('dob-button');
    if(isDOBopen){
        dobcontentEL.classList.add("hide");
    }else{
        dobcontentEL.classList.remove("hide");
    }
    isDOBopen = !isDOBopen;
    console.log("Toggle",isDOBopen);
};
const dobHandler =() => {
    dateofbirth=inputDOB.value;
    console.log("date of birth",dateofbirth);
}

settingsiconEL.addEventListener("click",toggleDOBselector);
buttonDOB=addEventListener('click', toggleDOBselector);