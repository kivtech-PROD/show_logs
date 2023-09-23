let _url = 'https://kivtechs.cloud/logs/';

 function JSONToHTMLTable(jsonData, elementToBind) {
          
            //This Code gets all columns for header   and stored in array col
            var col = [];
            for (var i = 0; i < jsonData.length; i++) {
                for (var key in jsonData[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            //This Code creates HTML table
            var table = document.createElement("table");

            //This Code getsrows for header creader above.
            var tr = table.insertRow(-1);

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            //This Code adds data to table as rows
            for (var i = 0; i < jsonData.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = jsonData[i][col[j]];
                }
            }

            //This Code gets the all columns for header
            var divContainer = document.getElementById(elementToBind);
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        }

function show(data) {
   JSONToHTMLTable(data, "logs");

      }
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    show(data);
  }
  catch (error) {
    console.error(error);
  }
}

async function getData() {
  await fetchData(_url);
}

getData();
