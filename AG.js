
let lastGeneratedDate = null;
let sequenceMap = {
    'SP': 0,
    'SG': 0,
    'SE': 0
};

function resetSequencesIfNewDay() {
    let now = new Date();
    let today = now.toISOString().slice(0, 10); // "YYYY-MM-DD"
    if (today !== lastGeneratedDate) {
        sequenceMap = { 'SP': 0, 'SG': 0, 'SE': 0 };
        lastGeneratedDate = today;
    }
}


function AG () {

    let  generatePassword =[];
    return {
        generatePassword: function () {
            resetSequencesIfNewDay();
            
            let date = new Date();
            let year = date.getFullYear().toString().slice(-2);
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');
        
            let passwordTypes = ['SP', 'SG', 'SE'];
            let passwordType = passwordTypes[Math.floor(Math.random() * 3)];
        
            sequenceMap[passwordType]++;
            let sequence = sequenceMap[passwordType].toString().padStart(2, '0');
        
            let password = `${year}${month}${day}-${passwordType}${sequence}`;
            generatePassword.push(password);
            return password;
        
        },
        getLastFivePasswords: function () {
            return generatePassword.slice(-5); 
        }
    };


}

