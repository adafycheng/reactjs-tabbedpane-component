import React from 'react'
import styles from './styles.module.css'
import $ from 'jquery'

/*
let navDivStyle = {
    backgroundColor: '#b366ff',
    borderRadius: '5px',
    color: '#fff',
    margin: '10px',
    padding: '10px'
}
*/

const TabbedPaneComponent = ({data}) => {

  $(function() {
    // read the input JSON content
    let contentStr = "";
    if (data != undefined) {
      for (let i=0; i<data.contents.length; i++) {
        contentStr += data.contents[i].subject;
        let newDiv = $("<div class=" + styles.navbarDiv + "></div>");
        let newAnchor = $("<a class=\"paneLink\"></a>").text(data.contents[i].subject).attr("title", data.contents[i].text);
        newDiv.append(newAnchor);
        newAnchor.click(function(){ $("#paneContent").html( this.title ); });
        $("#navbar").append(newDiv);
      }
      if (data.contents.length > 0) {
        // Get the first link and click.
        console.log("length > 0");
        $(".paneLink:first").click();
      }
    }

  });

  return (
    <div id="pane" className={styles.pane}>
      <div id="navbar"></div>
      <div id="paneContent" className={styles.paneContent}></div>
    </div>
  )
}

export default TabbedPaneComponent
