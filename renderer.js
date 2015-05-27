function view(templateName, values, response) {
    // read from the template file
    fs.readFile('./views/' + templateName + '.html', function (error, fileContents) {
        if (error) throw error;
        // insert values into the content


        // write out to the response
        response.write(fileContents);
    });
    



}