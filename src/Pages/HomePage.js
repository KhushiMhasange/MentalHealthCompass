import React from 'react'
import { Features, BlogCarousel, VideosCarousel, PodcastCarousel, Header } from '../components'

const HomePage = () => {
  return (
    <div>
     <Header />
     <Features />
     <BlogCarousel />
     <VideosCarousel />
    </div>
  )
}

export default HomePage