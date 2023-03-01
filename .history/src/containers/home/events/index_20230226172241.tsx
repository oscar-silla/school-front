import React from 'react'

const Events = () => {
  return (
    <div>
        <div className="last-news">
      <div className="jcc">
        <Title title="Últimas novedades" />
      </div>
      <div className="list">
        <List elements={lastNews}>
          <Card />
        </List>
      </div>
    </div>
    </div>
  )
}

export default Events