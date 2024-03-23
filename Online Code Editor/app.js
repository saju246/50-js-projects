function submit(){
    const code = document.getElementById('codeEditor').value;
    const previewFrame = document.getElementById('previewFrame');
    const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;

    previewDocument.open();
    previewDocument.write(code);
    previewDocument.close();
}