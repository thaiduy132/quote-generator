'use strict'
const arr=
[
    {
        'quote':"The purpose of our lives is to be happy." ,
        'author':'Arian'
    },
    {
        'quote':"Life is what happens when you're busy making other plans." ,
        'author':'John Lennon'
    },    {
        'quote':"Get busy living or get busy dying.",
        'author':'Stephen King'
    },    {
        'quote':"You only live once, but if you do it right, once is enough.",
        'author':'Mae West'
    },    {
        'quote':"If you want to live a happy life, tie it to a goal, not to people or things.",
        'author':'Albert Einstein'
    },    {
        'quote':'This is a quotes 6',
        'author':'Arian'
    },
]



const descQuote = document.getElementById('quotes-desc')
const authorQuote = document.getElementById('quotes-author')
const btnGenerate = document.getElementById('btn-generate')

const randomQuote = (arr) => {
    const randomNumber = Math.floor(Math.random()*arr.length)
    descQuote.innerText=arr[randomNumber].quote;
    authorQuote.innerText = arr[randomNumber].author;
}

console.log(randomQuote(arr))
btnGenerate.addEventListener("click",function(){
    randomQuote(arr);
})