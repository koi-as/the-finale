import React, { useState } from 'react'; // import React library
import { useQuery, useMutation } from '@apollo/client'; // import useQuery and useMutation hooks

import { QUERY_COMMENTS } from '../../utils/queries'; // import queries; get post by id, get comments by post id
// import { } from '../../utils/mutations'; // import mutations; update, delete, create comments

function UserComments() {
  const { loading, error, data } = useQuery(QUERY_COMMENTS);

  return (
    <div>
      <div>
        <input
          placeholder="Write your comment here..."
          value=""
        />
      </div>
      {data.comments.map((item) => (
        <div>
          <div>
            <h3>{item.createdBy}</h3> <h6>{item.createdOn}</h6></div>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

module.exports = UserComments;
