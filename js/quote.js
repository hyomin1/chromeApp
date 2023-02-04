const quotes = [
    {
    quote: '본연의 모습은 바꿀 수 없다. 바꿀 수 있는 것은 자신의 행동 뿐.',
    author: 'Philip Pullman'
    },
    {
    quote: '다른 사람들이 당신을 향해 던지는 돌을 가지고 튼튼한 기반을 쌓아라.',
    author: 'David Brinkley'
    },
    {
    quote: '당신이 세상을 바라보는 방법을 바꾸면 당신이 보는 세상은 달라질 것이다.',
    author: 'Wayne Dyer'
    },
    {
    quote: '당신이 경주한다면 패배할 가능성도 있겠지만, 경주하지 않는다면 당신은 이미 패배한 것이다.',
    author: 'Barack Obama'
    },
    {
    quote: '지금까지 항상 그 방식대로 해 온 것이라면, 그 방식은 아마도 잘못된 것이다.',
    author: 'Chrales Kettering'
    },
    {
    quote: '당신이 인생에서 저지를 수 있는 가장 큰 실수는 실수를 할 까봐 계속 두려워 한 것이다.',
    author: 'Elbert Hubbard'
    },
    {
    quote: '당신이 대면하는 모든 것을 바꿀 수는 없다. 그러나 대면하지 않는다면 아무것도 바뀌지 않는다.',
    author: 'James Baldwin'
    },
    {
    quote: '만약 일 하는 것이 그렇게 좋은 것이라면, 부자들이 일하는 것을 자신들만의 것으로 만들었을 것이다.',
    author: 'Mark Twain'
    },
    {
    quote: '우리가 변할 때 더 나아 질 것이라고 장담할 수는 없지만, 확실한 것은 더 나아지고 싶다면 변해야 한다는 것이다.',
    author: 'Georg C. Lichtenberg'
    },
    {
    quote: '우리가 더 이상 상황을 바꿀 수 없을 때, 우리는 우리 자신을 바꾸도록 도전 받는 것이다.',
    author: 'Viktor Frankl'
    },
    ];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    function randomQuote() {
        const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
        quote.innerText = todaysQuote.quote;
        author.innerText = `-${todaysQuote.author}-`;
    }
    randomQuote();
    setInterval(randomQuote,6000);
