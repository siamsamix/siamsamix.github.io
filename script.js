document.getElementById('labForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const physicsInput = document.querySelector('input[name="physics"]:checked');
    const chemistryInput = document.querySelector('input[name="chemistry"]:checked');
    const programmingInput = document.querySelector('input[name="programming"]:checked');

    if (!physicsInput || !chemistryInput || !programmingInput) {
        alert("Please select a group for all subjects.");
        return;
    }

    const physics = physicsInput.value;
    const chemistry = chemistryInput.value;
    const programming = programmingInput.value;

    let pdfFile = `pdf/${physics}${chemistry}${programming}.pdf`;

    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = `${physics}${chemistry}${programming}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
