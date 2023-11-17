
const { spawn } = require('child_process');

const fs = require('fs');
const path = require('path');
// Get the value of the environment variable or use a default path
const outputPath = process.env.PROCESS_ENV_PATH || 'path.txt';


fs.writeFile(outputPath, process.env.PROCESS_ENV_TEXT || 'Default text', (err) => {
    if (err) {
        console.error(`Error writing to file: ${err.message}`);
    } else {
        console.log(`Text written to ${outputPath}`);
    }
});


// Function to execute the batch file
function executeBatchFile() {
    return new Promise((resolve, reject) => {
        const child = spawn(path.join(process.cwd(), "mdns.bat"), [], {
            detached: true,
            stdio: 'ignore', // Ignore the standard I/O of the child process

        });

        child.unref(); // Unreference the child process to allow the parent to exit independently

        // Resolve the promise immediately
        resolve();
    });
}

describe('Batch File and External File Test', () => {
    // before(async () => {
    //     await executeBatchFile();

    // })
    it('batch File Execution', async () => {
        await executeBatchFile();

    })
})

