import React from 'react'; // import React library
import { useQuery, useMutation } from '@apollo/client'; // import useQuery and useMutation hooks

// import { } from '../../utils/queries'; // import queries; get post by id, get comments by post id
// import { } from '../../utils/mutations'; // import mutations; update, delete, create comments

function UserComments() {
  return (
    <div>
      {/* create comment form */}
      <div>
        <input
          placeholder="Write your comment here"
          value=""
        />
      </div>
      {/* render all comments for this post */}
    </div>
  )
}

module.exports = UserComments;
