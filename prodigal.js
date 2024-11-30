function processActiveTab() {
    var tabEl = document.querySelectorAll('button[data-bs-toggle="pill"]');


    for (i = 0; i < tabEl.length; i++) {
        tabEl[i].addEventListener('shown.bs.tab', function (event) {
            activated_pane = document.querySelector(event.target.getAttribute('data-bs-target'))
            console.log(activated_pane.id)
        });
    }
}



const clipIcon = `<img width="32px" src="clipboard.png" />`;

function createClipButton(buttonID, command) {
    let clipButton = document.createElement('button');
    clipButton.id = "clip-" + buttonID; clipButton.type = "button";
    clipButton.innerHTML = clipIcon;
    clipButton.addEventListener('click', () => {
        navigator.clipboard.writeText(command);
    });
    return clipButton;
}

function generateSingleCommand(commandType, command) {
    let clipButton = createClipButton(commandType, command);
    let singleCommandOutput = document.createElement("p");
    singleCommandOutput.innerHTML = `${commandType}: ${command}: `;
    singleCommandOutput.appendChild(clipButton);
    return singleCommandOutput;

}

function isValidYTUrl(url) {
    return url;
}

function generateCommands(tab_id) {
    if (!tab_id || tab_id == "yt") {
        const ytURL = document.getElementById('ytURLInput').value;
        if (isValidYTUrl(ytURL)) {
            let command = `youtube-dl -x --audio-format mp3 ${ytURL} --verbose`;

            commandOutputArea.appendChild(generateSingleCommand("Audio", command));


            command = `youtube-dl -i -f mp4 --yes-playlist ${ytURL}`;
            commandOutputArea.appendChild(generateSingleCommand("Video playlist", command));
        }




    }
}