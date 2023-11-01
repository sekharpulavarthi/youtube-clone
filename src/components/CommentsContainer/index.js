import React from "react";
import Comment from "../Comment";
import commentsData from "../../utils/commentsData";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.name}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black-100 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 mt-5">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
