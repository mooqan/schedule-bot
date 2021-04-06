const jokes = [`Как провести незабываемый вечер:
1. Проведите вечер.
2. Не забывайте его.`, `Сначала было слово! Потом слово за слово и понеслась...`, `Приходи один, мы тоже одни придем. И ствол с собой не бери, у нас есть.`,`Наш человек читает инструкцию только тогда, когда точно понял, что поломал.`] 

exports.giveAJoke = function() {
    const jokeIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[jokeIndex];
    console.log(joke);
    return joke;
}


// const jokeIndex = Math.floor(Math.random() * jokes.length);
//     const joke = jokes[jokeIndex];