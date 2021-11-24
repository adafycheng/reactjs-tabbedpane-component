import React from 'react'

import TabbedPaneComponent from 'reactjs-tabbedpane-component'
import 'reactjs-tabbedpane-component/dist/index.css'

const contentData = {
  "contents": [
    {
      "subject": "Overview",
      "text": "This is content of Overview"
    },
    {
      "subject": "Assumptions",
      "text": "This is content of Assumptions"
    },
    {
      "subject": "Technical Design",
      "text": "This is content of Technical Design"
    },
    {
      "subject": "Data Design",
      "text": "This is content of Data Design"
    },
    {
      "subject": "Conclusion",
      "text": "This is content of Conclusion"
    }
  ]
}

const App = () => {
  return <TabbedPaneComponent data={contentData} />
}

export default App
