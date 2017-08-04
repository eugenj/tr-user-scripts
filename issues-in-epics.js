// ==UserScript==
// @name         Show Closed Stories
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://trcmsjira.int.thomsonreuters.com/browse/*
// @grant        none
// ==/UserScript==

jQuery(document).ready(function ($) {
    var table = $('#ghx-issues-in-epic-table')[0];
    if (table !== undefined) {
        var checkbox = document.createElement('input');
        checkbox.style = 'display: inline';
        checkbox.id = "cb-show-closed";
        checkbox.type = "checkbox";
        checkbox.checked = "checked";

        table.insertBefore(checkbox, table.firstChild);

        var span = document.createElement('span');
        span.innerText = 'Show Closed';
        span.style = "white-space: nowrap;";

        table.insertBefore(span, table.firstChild);

        $('#cb-show-closed').change(function () {
            var checked = $('#cb-show-closed')[0].checked;

            $(table.rows).each(function (i, row) {
                var status = row.cells[4].children[0].textContent;
                if ("Closed" === status && !checked) {
                    row.style = "display: none;";
                } else {
                    row.style = "";
                }
            });
        });
    }
});