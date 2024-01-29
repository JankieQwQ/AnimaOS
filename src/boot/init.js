try {
    console.log('NodeJS Runtime:')
    console.log(process.versions)
}
catch(err) {
    alert('AnimaOS must be pulled up at the NodeJS Runtime.')
    window.close()
}

console.log('Booting AnimaOS......')
// 0.Check File System
const fs = require('fs');
fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Failed to read directory:', err);
    } else {
        files.forEach(file => {
            fs.access(file, fs.constants.R_OK | fs.constants.W_OK, (err) => {
                if (err) {
                    console.error(`File ${file} is not readable/writable`);
                } else {
                    console.log(`File ${file} is readable/writable`);
                }
            });
        });
    }
});
