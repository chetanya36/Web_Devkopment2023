let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

for(let button of buttons)
{
    button.addEventListener('click', function(e){
       let text  = e.target.innerText;
       if(text === 'C'){
        input.value = '';
        return;
       }
       else if(text === '=')
       {
        try
        {
            input.value = eval(input.value); 
            setTimeout(() => {
                input.value = "";   
            }, 10000);
        }
        catch{
            input.value = "INVALID "
        }
       }
       else 
         input.value += text;
  })
}
