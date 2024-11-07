// json2html.js

export default function json2html(data) {
  const headers = ["Name", "Age", "Gender"];
  
  // Start table with data-user attribute
  let html = '<table data-user="bpoojitha32@gmail.com">';
  html += "<thead><tr>";
  
  // Generate table headers
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead><tbody>";
  
  // Generate table rows
  data.forEach(item => {
    html += "<tr>";
    headers.forEach(header => {
      html += `<td>${item[header] !== undefined ? item[header] : ""}</td>`;
    });
    html += "</tr>";
  });
  
  // Close table
  html += "</tbody></table>";
  
  return html;
}
