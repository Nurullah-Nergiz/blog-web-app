import { SecondaryBtn } from '@/components/btn';


export const CommentEditor = () => {
    return (
      <>
        <div className="p-2 flex items-end gap-4 border-secondary border-2 rounded-xl ">
               <textarea
                  className="w-full py-2 px-3 bg-transparent resize-none outline-none"
                  placeholder="Add a comment"></textarea>
               <SecondaryBtn className="px-2">Submit</SecondaryBtn>
            </div>
      </>
    );
  };