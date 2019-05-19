document.addEventListener('DOMContentLoaded',
()=>{        
    const btnEq=document.querySelector('#sec3');
    btnEq.addEventListener('mouseenter',
    () => {document.querySelector('.val').className="valx";
        console.log('aaaa');
    }
    );
});
