import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id, title, featuredImages}) {
  return (
    <Link to= {`/post/${$id}`}>
      <div className=''>
        <div>

        </div>
      </div>
    </Link>
  )
}

export default PostCard
