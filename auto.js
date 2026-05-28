let input = document.querySelector('input');
input.addEventListener('keyup', function(e){
    let html = '';
    if(input.value){
        for(word of WORDS){
            if(word.startsWith(input.value)){
                html += `<a href="${word}.html"><li>${word}</li></a>`; 
            }
        }
    }
    else{
        html += '<li>Match not found!</li>';
    }
    document.querySelector('ul').innerHTML = html;
    e.preventDefault();
});
