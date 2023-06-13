import React from 'react'; // import React library
// create a function called UserComments that will
// read the database for all the comments for a selected 
// post then render those comments under the post.
// It will also create a text form box for users to write
// their own comment and post that
function UserComments() {
  return (
    <div>
      {/* create comment form */}
      <div>
        <input className="" placeholder="Write your comment here"/>
      </div>
      {/* render all comments for this post */}
    </div>
  )
}

module.exports = UserComments;
