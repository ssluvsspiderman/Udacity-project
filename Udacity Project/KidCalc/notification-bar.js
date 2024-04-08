let info = ['1,000 is the only number with an "A" in it from One to One Thousand.',
'The addition of numbers on the opposite side of dice always equal seven.',
'In a jiffy, is an actual measurement of time. 1/100th of a second is a jiffy.',
'1,089 X 9 = 9,801.',
'Roman numerals have no sign to represent 0. Therefore 0 can not be represented in the Roman language.',
'When two even numbers are added, the sum is always a even number.',
'A baker\'s dozen is 13, not 12',
'111,111,111 X 111,111,111 = 12,345,678,987,654,321']

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];}

    document.body.addEventListener('click', function(){ 
    (document.getElementById('notification').innerText=(random_item(info)))
    });
