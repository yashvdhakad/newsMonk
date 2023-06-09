import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, source, date } = this.props;
    return (
      <div className='p-4 bg-white rounded-lg space-y-2 drop-shadow border flex space-x-4 transition hover:scale-[1.025]'>
        <img className='rounded-lg' src={imgUrl} alt="" width='300' />
        <div className='flex flex-col space-y-2'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <p className='font-semibold'>{description}</p>
          <p className='text-sm text-red-800 font-medium'>{source} | {new Date(date).toGMTString()}</p>
          <a href={newsUrl} className='block py-2 px-10 bg-zinc-800 text-zinc-200 font-bold rounded-lg text-center self-start hover:bg-red-800' target="_blank">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItems