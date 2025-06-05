document.addEventListener('DOMContentLoaded' , () =>{
    const Picture = document.getElementById('Picture');
    const Title = document.getElementById('Title');
    const Author = document.getElementById('Author');
    const Date = document.getElementById('Date');
    const Description = document.getElementById('Description');

    async function FetchContent(){
        const url = `https://api.nasa.gov/planetary/apod?api_key=aC3jZdsNi1kCNB20cff3Kh29rxgE14L3kBSNWnvT`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);
        if(!response.ok){
            throw new Error("Error found !");
        }
        const data = await response.json();
        return data;
    }

    function DisplayContent(data){
        console.log(data);    
        const {copyright, date, explanation, title, url} = data;
        Title.textContent = `Title : ${title}`;
        Author.textContent = `Clicked By :- ${copyright || 'NASA'}`;
        Date.textContent = `Date :- ${date}`;
        Description.textContent = `Description :- ${explanation}`;
        Picture.src = url;
        Picture.alt = title || "NASA Astronomy Picture";
    }

    FetchContent().then(DisplayContent).catch(console.error);
});
