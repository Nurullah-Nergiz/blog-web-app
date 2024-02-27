export const CommentEditor = () => {
    return (
      <>
        <h3 className="my-4">Comments</h3>
        <div className="py-2 px-3 bg-white flex items-end gap-3 shadow-md shadow-current rounded-lg">
          <img
            src="https://picsum.photos/seed/picsum/64/64"
            className="w-14 h-14 p-[2px] rounded-full border-2 border-primary border-r-transparent border-b-transparent"
            alt="user avatar"
          />
          <textarea
            className="w-full py-2 px-3 bg-transparent resize-none outline-none"
            placeholder="Add a comment"
          ></textarea>
          <button className="py-2 px-3 bg-primary text-white rounded-md">
            Submit
          </button>
        </div>
      </>
    );
  };