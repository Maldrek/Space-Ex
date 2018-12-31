var array = [
    {
        q: 'what?',
        a: ['huh?', 'who?', 'when', 'why?']
    },
    {
        q: 'Who?',
        a: 'why?'
    }
]

for(var i = 0; i < array.length; i++) {
    console.log(array[i].q);
    let question = array[i].q;
    
    $('.questionDiv').append(question);
}