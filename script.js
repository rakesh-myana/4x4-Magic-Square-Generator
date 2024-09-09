function generateMagicSquare() {
    let targetSum = parseInt(document.getElementById('targetSum').value);

    if(targetSum < 34) {
        alert("Target Sum should be at least 34");
        return;
    } 

    let a, b, c, d;

    a = targetSum - 20; 
    b = a + 1; 
    c = b + 1; 
    d = a - 1;

    document.getElementById('a').textContent=a;
    document.getElementById('b').textContent=b;
    document.getElementById('c').textContent=c;
    document.getElementById('d').textContent=d;
    document.getElementById('grid-container').style.display='grid';

}
