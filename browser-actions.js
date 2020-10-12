'use strict';

function exportQuizGrades() {
    chrome.tabs.executeScript(null, { file: "export-quiz-grades.js" });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("export-quiz-grades").onclick = exportQuizGrades;
});
