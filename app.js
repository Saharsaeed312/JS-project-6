function colorchange() {
    let bg = `rgb(${Math.floor(Math.random() * 255) + 1}, 
    ${Math.floor(Math.random() * 255) + 1} ,${Math.floor(Math.random() * 255) + 1})`;
    document.body.style.backgroundColor = bg;
}