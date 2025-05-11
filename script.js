function generateMagicSquare() {
    // Get the target sum from input
    let targetSum = parseInt(document.getElementById('targetSum').value);

    // Check if it's at least 34
    if (targetSum < 34) {
        alert("Target Sum should be at least 34");
        return;
    }

    // Step 1: Calculate values
    let add = targetSum - 34;
    let q = Math.floor(add / 4);
    let r = add % 4;

    // Step 2: Set a, b, c, d using your formula
    let w = 14 + q + r;
    let x = 13 + q + r;
    let y = 16 + q + r;
    let z = 15 + q + r;

    // Step 3: Put these values in the correct places
    document.getElementById('w').textContent = w;
    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;
    document.getElementById('z').textContent = z;
    
    // Step 4: Calculate the other values
    document.getElementById('a').textContent = 1 + q;
    document.getElementById('b').textContent = 12 + q;
    document.getElementById('c').textContent = 7 + q;
    document.getElementById('d').textContent = 11 + q;
    document.getElementById('e').textContent = 8 + q;
    document.getElementById('f').textContent = 2 + q;
    document.getElementById('g').textContent = 5 + q;   
    document.getElementById('h').textContent = 10 + q;
    document.getElementById('i').textContent = 3 + q;
    document.getElementById('j').textContent = 4 + q;
    document.getElementById('k').textContent = 6 + q;
    document.getElementById('l').textContent = 9 + q;



    document.getElementById('grid-container').style.display='grid';
}


// function generateMagicSquare() {
//     let targetSum = parseInt(document.getElementById('targetSum').value);

//     if(targetSum < 34) {
//         alert("Target Sum should be at least 34");
//         return;
//     } 

//     let a, b, c, d;

//     a = targetSum - 20; 
//     b = a + 1; 
//     c = b + 1; 
//     d = a - 1;

//     document.getElementById('a').textContent=a;
//     document.getElementById('b').textContent=b;
//     document.getElementById('c').textContent=c;
//     document.getElementById('d').textContent=d;
//     document.getElementById('grid-container').style.display='grid';

// }

