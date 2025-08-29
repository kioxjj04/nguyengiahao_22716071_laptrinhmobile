//25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.

let downloadFile = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("File downloaded");
};

downloadFile();
