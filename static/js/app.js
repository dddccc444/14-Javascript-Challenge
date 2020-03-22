// from data.js
var tableData = data;
    //console.log(tableData)

function buildTable(a, b, c, d, e, f, g) {  
    var tbody = d3.select("#ufo-table").select("tbody");
    tbody.html("");
    for (var i = 0; i < a.length; i++) {
        var trow = tbody.append("tr");
        trow.append("td").text(a[i])
        trow.append("td").text(b[i])
        trow.append("td").text(c[i])
        trow.append("td").text(d[i])
        trow.append("td").text(e[i])
        trow.append("td").text(f[i])
        trow.append("td").text(g[i])

    }

  }

// YOUR CODE HERE!
var filterButton = d3.select("#filter-btn");
filterButton.on("click", function() {
    var userInput = d3.select("#datetime").property("value");
        //console.log(userInput);

    /*Same as line 17
    var filterDate = function checkDate(x) {
        return x.datatime === userInput
        tableData.filter(checkDate);
    }*/

    var filteredDate = tableData.filter(x => x.datetime === userInput);
        //console.log(filteredDate);

    var justDate = filteredDate.map(x => x.datetime)
        //console.log(justDate);
    var justcity = filteredDate.map(x => x.city)
    var juststate = filteredDate.map(x => x.state)
    var justcountry = filteredDate.map(x => x.country)
    var justshape = filteredDate.map(x => x.shape)
    var justdurationMinutes = filteredDate.map(x => x.durationMinutes)
    var justcomments = filteredDate.map(x => x.comments)

    buildTable(justDate, justcity, juststate, justcountry, justshape, justdurationMinutes, justcomments)



});


