export default `
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8" />
    <title></title>
</head>

<body>

    <style type="text/css">
        html {
            font-family: arial;
            /* -webkit-text-size-adjust: 100%; */
            /* zoom: 0.70; */
            /*workaround for phantomJS2 rendering pages too large*/
        }

        body {
            margin: 0;
            /* // Fixes scale issue (renders at 96dpi instead of 72dpi)
            // https://github.com/ariya/phantomjs/issues/12685 */
            /* zoom: 0.65; */
            /* height: 0;
            transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
            transform: scale(0.70);
            -webkit-transform: scale(0.70); */
            zoom: 0.73;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        menu,
        nav,
        section,
        summary {
            display: block
        }

        audio,
        canvas,
        progress,
        video {
            display: inline-block;
            vertical-align: baseline
        }

        audio:not([controls]) {
            display: none;
            height: 0
        }

        [hidden],
        template {
            display: none
        }

        a {
            background-color: transparent
        }

        a:active,
        a:hover {
            outline: 0
        }

        abbr[title] {
            border-bottom: 1px dotted
        }

        b,
        strong {
            font-weight: 700
        }

        dfn {
            font-style: italic
        }

        h1 {
            font-size: 2em;
            margin: .67em 0
        }

        mark {
            background: #ff0;
            color: #000
        }

        small {
            font-size: 80%
        }

        sub,
        sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline
        }

        sup {
            top: -.5em
        }

        sub {
            bottom: -.25em
        }

        img {
            border: 0
        }

        svg:not(:root) {
            overflow: hidden
        }

        figure {
            margin: 1em 40px
        }

        hr {
            -moz-box-sizing: content-box;
            box-sizing: content-box;
            height: 0
        }

        pre {
            overflow: auto
        }

        code,
        kbd,
        pre,
        samp {
            font-family: monospace, monospace;
            font-size: 1em
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            color: inherit;
            font: inherit;
            margin: 0
        }

        button {
            overflow: visible
        }

        button,
        select {
            text-transform: none
        }

        button,
        html input[type="button"],
        /* 1 */

        input[type="reset"],
        input[type="submit"] {
            -webkit-appearance: button;
            cursor: pointer
        }

        button[disabled],
        html input[disabled] {
            cursor: default
        }

        button::-moz-focus-inner,
        input::-moz-focus-inner {
            border: 0;
            padding: 0
        }

        input {
            line-height: normal
        }

        input[type="checkbox"],
        input[type="radio"] {
            box-sizing: border-box;
            padding: 0
        }

        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            height: auto
        }

        input[type="search"] {
            -webkit-appearance: textfield;
            -moz-box-sizing: content-box;
            -webkit-box-sizing: content-box;
            box-sizing: content-box
        }

        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration {
            -webkit-appearance: none
        }

        fieldset {
            border: 1px solid silver;
            margin: 0 2px;
            padding: .35em .625em .75em
        }

        legend {
            border: 0;
            padding: 0
        }

        textarea {
            overflow: auto
        }

        optgroup {
            font-weight: 700
        }

        table {
            border-collapse: collapse;
            border-spacing: 0
        }

        td,
        th {
            padding: 0
        }



        .page {
            font-size: 13px;
            width: 840px;
            position: relative;
        }

        .smallprint {
            font-size: 10px;
        }

        #consumerAdress {
            position: absolute;
            top: 130px;
            left: 70px;
        }

        #companyAdress {
            position: absolute;
            top: 80px;
            left: 70px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
            font-size: 10px;
        }

        #offerData {
            position: absolute;
            top: 100px;
            right: 40px;
        }

        #offerData td {
            padding-left: 10px;
        }

        .page-1 #content {
            padding-top: 250px;
        }

        #content {
            padding-top: 0px;
        }

        #contentInner {
            padding: 0 40px;
        }


        .offer-table {
            width: 100%;
            border-bottom: 3px solid black;
        }

        .offer-table td {
            padding: 5px;
            border-bottom: 1px solid #ccc;
            vertical-align: top;
        }

        .offer-table thead {
            border-bottom: 3px solid black;
        }

        .offer-table thead th {
            text-align: left;
            padding: 5px;
        }

        .offer-table tfoot {
            page-break-inside: avoid;
        }

        .offer-table tfoot td {
            padding: 5px;
        }

        .offer-table td h2,
        .offer-table td p,
        .offer-table td ul,
        .offer-table td li {
            font-size: 13px;
            margin: 0;
            padding: 0;
        }

        tr.row-group-start {
            background-color: #dfdfdf;
        }

        tr.row-group-overview {
            background-color: #dfdfdf;
        }

        tbody {
            page-break-inside: avoid !important;
        }



        .offer-table thead th:last-child {
            text-align: right;
        }

        .offer-table thead th:nth-child(5) {
            text-align: right;
        }

        tr.row-group-start td:last-child {
            text-align: right;
            padding-right: 10px;
        }

        tr.row-group-start td:nth-child(5) {
            text-align: right;
            padding-right: 10px
        }

        .offer-table tfoot td:last-child {
            text-align: right;
        }

        .row-group-overview td {
            page-break-inside: avoid !important;
        }

        .row-group-overview td:last-child {
            text-align: right;
        }

        #contentPageNErgie {
            page-break-before: always !important;
        }

        #contentPage2 {
            page-break-before: always !important;
            page-break-after: always !important;
        }

        ul.checked {
            list-style: none;
        }

        ul.checked li {
            margin-top: 10px;
        }

        ul.checked li span.check {
            color: green;
            font-weight: bold;
            padding-right: 5px;
        }
    </style>

    <!-- ###header### -->
    <div id="pageHeader" style="width:100%; position:relative">
        <% if(lead.offer.settings.headerImage) { %>
            <img style="height:70px;width:100%;" src="data:image/png;base64,<%=lead.offer.settings.headerImage%>" />
            <% } else { %>
                <div style="height:70px;font-size:36px;color:grey;text-align:right">&nbsp;
                    <br/>
                    <%= customer.companyName %>
                </div>
                <% } %>
    </div>


    <div class="page page-1">

        <div id="companyAdress">
            <%= customer.companyName %>,
                <%= customer.address.legal.street %>
                    <%= customer.address.legal.streetNo %>,
                        <%= customer.address.legal.zip %>
                            <%= customer.address.legal.city %>
        </div>

        <table id="offerData">
            <tr>
                <td>Angebotsnummer:</td>
                <td>
                    <strong>
                        <%= lead.offer.calculation.offerNumber%>
                    </strong>
                </td>
            </tr>
            <tr>
                <td>E.ON Lead ID:</td>
                <td>
                    <strong>
                        <%= lead.offer.calculation.offerNumber%>
                    </strong>
                </td>
            </tr>
            <tr>
                <td>Datum:</td>
                <td>
                    <strong>
                        <%=lead.offer.createdAt%>
                    </strong>
                </td>
            </tr>
        </table>

        <div id="consumerAdress">
            <%=lead.salutation == 'MR' ? "Herr" : "Frau" %>
                <%=lead.firstname%>
                    <%=lead.lastname%>
                        <br/>
                        <%=lead.street%>
                            <%=lead.streetNo%>
                                <br/>
                                <%=lead.zip%>
                                    <%=lead.city%>
        </div>


        <div id="content">
            <div id="contentInner">
                <h1>Nur noch wenige Schritte zu <br/>
                Ihrer Wohlfühlwärme
                </h1>
                <p>Sehr geehrte
                    <%=lead.salutation == 'MR' ? "r Herr" : " Frau" %>
                        <%=lead.lastname%>
                            <br/>
                            <br/>
                            wir freuen uns, dass Sie mit uns den Weg zu einer modernen und effizienten Heizung mit Rundum-sorglos-Schutz gehen. Schon bald können Sie vom E.ON WärmeService profitieren. Anbei erhalten Sie Ihr individuelles WärmeService-Paket.
                            <br/><br/>    
                            <p>
                                <strong>Die nächsten Schritte:</strong><br/>
                                <ol>
                                    <li>Schritt: Bitte prüfen Sie den Vertrag.</li>
                                    <li>Schritt: Unterschreiben Sie den Vertrag.</li>
                                    <li>Schritt: Senden Sie uns den Vertrag komplett postalisch zu.</li>
                                </ol>
                            </p>
                            <br/>
                            <p>
                            <strong>So geht es weiter:</strong><br/>
                            <ol>
                                <li>Sie erhalten eine Auftragsbestätigung mit dem von uns gegengezeichneten Vertrag.</li>
                                <li>Wir koordinieren die Termine mit dem E.ON-zertifizierten F...


Kommentar hinzufügen
`;
