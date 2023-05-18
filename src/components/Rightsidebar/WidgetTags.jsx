import React from 'react'

const WidgetTags = () => {

  const tags = ['c++', 'css', 'express', 'firebase', 'java', 'html', 'javascript', 'mern', 'mongodb', 'mysql', 'next.js', 'node.js', 'php', 'react js', 'python']
  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag) => (
          <p key={tag}>{tag}</p>
          ))
        }
      </div>

    </div>
  )
}

export default WidgetTags
