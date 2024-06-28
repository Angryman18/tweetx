import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { TButton } from "@/types/const";
import useCreatePost from "@/hooks/Posts/useCreatePosts";
import { toastError } from "@/utils/fe-utils/toast";

const WritePost = ({
  showModal,
  setShowModal,
  fetchPosts,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  fetchPosts: () => Promise<any>;
}) => {
  const [text, setText] = useState("");
  const { createPost } = useCreatePost();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handlePost = async () => {
    try {
      await createPost(text);
      toggleModal();
      await fetchPosts();
    } catch (err: unknown) {
      toastError(err as string);
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(false);
    setText("");
  };

  return (
    <div>
      <Modal open={showModal} onClose={toggleModal}>
        <div>
          <textarea
            onChange={handleChange}
            value={text}
            className='w-full h-64 border-t-2 border-LightShadow shadow-xl resize-none border-opacity-20 font-bold text-LightShadow p-4 rounded-xl active:outline-none outline-none'
          />
          <div className='flex justify-end space-x-4 py-2'>
            <Button bType={TButton.OutlinedClassic} onClick={toggleModal} text='Cancel' />
            <Button onClick={handlePost} bType={TButton.Classic} text='Post' />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WritePost;
