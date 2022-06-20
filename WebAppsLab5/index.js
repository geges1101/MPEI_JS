function calc() {
    var side1 = parseInt(document.getElementById("s1").value);
    var side2 = parseInt(document.getElementById("s2").value);
    var side3 = parseInt(document.getElementById("s3").value);
    var side4 = parseInt(document.getElementById("s4").value);
    var perimeter = side1 + side2 + side3 + side4;
    document.getElementById("answer").innerHTML = "Периметр: " + perimeter;
    }