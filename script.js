document.getElementById('labForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const physics = document.querySelector('input[name="physics"]:checked').value;
    const chemistry = document.querySelector('input[name="chemistry"]:checked').value;
    const programming = document.querySelector('input[name="programming"]:checked').value;
    
    // Here you would typically send the data to a server
    // For demo purposes, we'll just show an alert
    //alert(`Your selections have been saved!\n\nPhysics: Group ${physics}\nChemistry: Group ${chemistry}\nProgramming: Group ${programming}`);

    let pdfFile = "pdf/"+physics+chemistry+programming+".pdf";
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // You could also redirect or show a success message
    // window.location.href = 'success.html';
});
